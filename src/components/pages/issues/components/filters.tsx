import { Button, Input, Select, SelectOption  } from "arkein-ui"
import { configedStyled } from "../../../../config"
import { CSS } from "@stitches/react"

const StyledFilters = configedStyled("div",{
    display:"flex",
    gap: "12px",
})

const Wrapper = configedStyled("div", {
    // alignSelf: "center"
    padding: "10px",
    
})

interface FilterProps {
    css?: CSS
}

const statusOptions: SelectOption[] = [
    {
        label: "Open",
        value: "open"
    },
    {
        label: "Closed",
        value: "closed"
    },
    {
        label: "All",
        value: "all"
    }
]

export const Filters = ({css}: FilterProps )=>{
    return (
        <Wrapper css={css}>
        <StyledFilters css={css}>
            <Input placeholder="Enter github repo url here..."/>
            <Select label="Select Status" options={statusOptions}/>
            <Button label="Search"/>
        </StyledFilters>
        </Wrapper>
    )
}