import { useAtom } from "jotai"
import { configedStyled } from "../../../../config"
import { CSS } from "@stitches/react"
import { List } from "./list"
import { issuesQueryAtom } from "../store/index.store"
import { IssueType } from "../types"

const Wrapper = configedStyled("div")

const Item = configedStyled("div", {
    margin: "auto",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    gap: "12px",
    "& .icon": {
        display: "inline-block",
        height: "12px",
        width: "12px",
        borderRadius: "12px",
    },
    "& .label": {
        color: "$secondary11",
        fontSize: "12px",
        textTransform: "capitalize"
    },
    variants: {
        state: {
            closed: {
                "& .icon": {background: "$primary8"}
            },
            open: {
                "& .icon": {background: "$success8"}
            }
        }
    }
})

interface ListsProps {
    css?: CSS,
}

export const StatusList = ({css}: ListsProps )=>{
    const [{data}] = useAtom(issuesQueryAtom)

    const issues = data || []

  const renderItem = (item: IssueType)=>(
    <Item state={item.state}>
        <span className="icon"></span>
        <span className="label">{item.state}</span>
    </Item>
  )

    return (
        <Wrapper css={css}>
           <List items={issues} renderItem={renderItem} /> 
        </Wrapper>
    )
}