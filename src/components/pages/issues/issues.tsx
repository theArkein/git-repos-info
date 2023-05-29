import { useQuery } from "@tanstack/react-query"
import { configedStyled, urls } from "../../../config"
import { Filters } from "./components/filters"
import { DetailsLists, } from "./components/details-list"
import { useAtom } from "jotai"
import { useEffect } from "react"
import { StatusList } from "./components/status-list"
import { fetchAPI, getIssuesApiEndPoint, validateGithubUrl } from "../../../utils/index.utils"
import { IssueType } from "./types"
import { issuesQueryAtom, queryFilterAtom, statusFilterAtom } from "./store/index.store"
import { useGetIssues } from "../../../hooks"

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

const Logo = configedStyled("div",{
  textAlign: "center",
  paddingTop: "20px",
  "& a": {
    display: "inline-block",
    background: "$secondary12",
    height: "32px",
    width: "32px",
    color: "$primary1",
    textAlign: "center",
    fontSize: "16px",
    lineHeight:"32px",
    fontWeight: "bolder",
    borderRadius: "99px",
    textDecoration: "none"
  }
})

export const IssuesPage = ()=>{
  useGetIssues()

  return (
    <Container>
      <Logo css={{gridArea:"avatar"}} >
        <a target="_blank" href={`${urls.githubOrigin}/theArkein/git-repos-info`}>A</a>
      </Logo>
      <Filters css={{gridArea:"filters"}}/>
      <StatusList css={{gridArea:"status"}} />
      <DetailsLists css={{gridArea:"list"}}/>
    </Container>
  )
}

