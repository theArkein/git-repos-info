import { useAtom } from "jotai"
import { configedStyled } from "../../../../config"
import { CSS } from "@stitches/react"
import { List } from "./list"
import { IssueType } from "../types"
import { issuesQueryAtom } from "../store/index.store"
import { localFormattedDate } from "../../../../utils/index.utils"

const Wrapper = configedStyled("div")

const Item = configedStyled("div", {
    "& h5": {
        margin: "0px"
    },
    "& div": {
        color: "$secondary11",
        fontSize: "12px"
    }
})

interface ListsProps {
    css?: CSS,
}



export const DetailsLists = ({css}: ListsProps )=>{
    const [{data, loading, error}] = useAtom(issuesQueryAtom)

    const issues = data || []

    const renderItem = (item: IssueType)=>(
        <Item key={item.id}>
            <h5>{item.title}</h5>
            <div>
                <span>#{item.number}</span>
                {item.state==="open" && <span> opened on {localFormattedDate(item.created_at)}</span>}
                <span> by </span>
                <a target="_blank" href={item.user.html_url}>{item.user.login}</a>
                {item.state==="closed" && <span> closed on {localFormattedDate(item.closed_at)}</span>}

            </div>
        </Item>
    )

    return (
        <Wrapper css={css}>
            {
                loading 
                ? (<h3>Loading...</h3>)
                :(issues.length 
                    ? <List items={issues} renderItem={renderItem} /> 
                    : (error ? error : "No results found."))
            }
        </Wrapper>
    )
}