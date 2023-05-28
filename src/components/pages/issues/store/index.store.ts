import { atom } from "jotai"
import { IssueType } from "../types"
import { urls } from "../../../../config"

export const queryFilterAtom = atom<string>(urls.githubOrigin)
export const statusFilterAtom = atom("all")
export const issuesQueryAtom = atom<{
    data?: IssueType[],
    loading?: boolean,
    error?: string
}>({
    data: [],
    loading: false,
    error: '',
})
