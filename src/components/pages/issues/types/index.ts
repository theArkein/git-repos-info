export interface IssueType {
    id: number,
    number: number,
    title: string,
    created_at: Date,
    closed_at: Date,
    state: "open" | "closed",
    user: {
        login: string,
        html_url: string
    }
}
