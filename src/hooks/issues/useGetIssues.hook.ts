import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { issuesQueryAtom, queryFilterAtom, statusFilterAtom } from '../../components/pages/issues/store/index.store'
import { useQuery } from '@tanstack/react-query'
import { IssueType } from '../../components/pages/issues/types'
import { fetchAPI, getIssuesApiEndPoint, validateGithubUrl } from '../../utils/index.utils'

const fetchIssues = async (
    query: string,
    status: string
  ) => {
    const url = new URL(query)
    const [, username, repo] = url.pathname.split("/")
    const apiEndPoint = getIssuesApiEndPoint(username, repo, status)
    return fetchAPI(apiEndPoint)
  }

export const useGetIssues = () => {
    const [query] = useAtom(queryFilterAtom)
    const [status] = useAtom(statusFilterAtom)
    const [,setIssuesQuery] = useAtom(issuesQueryAtom)
  
    const queryResult = useQuery<IssueType[]>({
      queryKey:['IssuesList', {query, status}], 
      queryFn:()=>fetchIssues(query, status, ),
      enabled: validateGithubUrl(query).isValid,
      retry: 0,
    })

    const {data, isLoading, isFetching, isError} = queryResult
    useEffect(()=>{
        setIssuesQuery({
          data,
          loading: isFetching && isLoading,
          error: isError ? "No such github repository" : ''
        })
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[data, isFetching, isLoading, isError])
  
  return queryResult
}

export default useGetIssues