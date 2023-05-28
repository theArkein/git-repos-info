export interface IssueType {
    id: number,
    number: number,
    title: string,
    created_at: Date | string,
    closed_at?: Date | string,
    state: "open" | "closed",
    user: {
        login: string,
        html_url: string
    }
}
