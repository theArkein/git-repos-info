import { configedStyled } from "../../../../config"
import { CSS } from "@stitches/react"

const StyledFilters = configedStyled("div",{
    width:"100%",
    display:"flex",
    gap: "2px",
})

const Wrapper = configedStyled("div")

interface ListsProps {
    css?: CSS
}

export const Lists = ({css}: ListsProps )=>{
    return (
        <Wrapper css={css}>
            <StyledFilters >Hello World
            </StyledFilters>
        </Wrapper>
    )
}