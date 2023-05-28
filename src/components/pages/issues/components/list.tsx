import { configedStyled } from "../../../../config"

const StyledList = configedStyled("div",{
    width:"100%",
    display:"flex",
    flexDirection: "column",
    justifyItems: "center",
})

const ListItem = configedStyled("div", {
    display: "flex",
    alignItems: "center",
    height: "32px",
    border: "1px solid $secondary1",
    padding: "8px",
    "&:hover": {
        background: "$secondary3",
    }
})


interface ListProps<T> {
    items: T[]
    renderItem: (item: T)=>JSX.Element
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export const List = <T extends unknown>({items = [], renderItem}: ListProps<T>)=>{
  const listItems = items.map((item, i)=>{
    return (
        <ListItem key={i} data-testid="list-item">
            {renderItem(item)}
        </ListItem>)
    })

    return (
        <StyledList data-testid="list">
            {listItems}
        </StyledList>
    )
}