import { useQuery } from "@tanstack/react-query"
import { configedStyled } from "../../../config"
import { Filters } from "./components/filters"
import { DetailsLists, } from "./components/details-list"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { StatusList } from "./components/status-list"
import { fetchAPI, getIssuesApiEndPoint, validateGithubUrl } from "../../../utils/index.utils"
import { IssueType } from "./types"
import { issuesQueryAtom, queryFilterAtom, statusFilterAtom } from "./store/index.store"

const Container = configedStyled("div",{
    maxHeight: "75vh",
    background: "$secondary3",
    padding: "16px",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display:"grid",
    gridTemplateAreas: `
      "avatar ... filters"
      "avatar status list"
    `,
    gridTemplateRows: "100px 500px",
    gridTemplateColumns: "80px 80px 800px",
    overflow: "scroll",
    gridGap:"12px",
    "&>div": {
      background: "$secondary4",
    }
})

const Logo = configedStyled("div")

const fetchIssues = async (
  query: string,
  status: string
) => {
  const url = new URL(query)
  const [, username, repo] = url.pathname.split("/")
  const apiEndPoint = getIssuesApiEndPoint(username, repo, status)
  return fetchAPI(apiEndPoint)
}

export const IssuesPage = ()=>{
  const [query] = useAtom(queryFilterAtom)
  const [status] = useAtom(statusFilterAtom)
  const [,setIssuesQuery] = useAtom(issuesQueryAtom)

  const {data, isError, isFetching, isLoading} = useQuery<IssueType[]>({
    queryKey:['IssuesList', {query, status}], 
    queryFn:()=>fetchIssues(query, status, ),
    enabled: validateGithubUrl(query).isValid,
    retry: 0,
  })

  useEffect(()=>{
    setIssuesQuery({
      data,
      loading: isFetching && isLoading,
      error: isError ? "No such github repository" : ''
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data, isFetching, isLoading, isError])

  return (
    <Container>
      <Logo css={{gridArea:"avatar"}} />
      <Filters css={{gridArea:"filters"}}/>
      <StatusList css={{gridArea:"status"}} />
      <DetailsLists css={{gridArea:"list"}}/>
    </Container>
  )
}

