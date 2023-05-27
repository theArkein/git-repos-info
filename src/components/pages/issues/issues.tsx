import { configedStyled } from "../../../config"
import { Filters } from "./components/filters"
import { Lists } from "./components/lists"

const Container = configedStyled("div",{
    width: "800px",
    minHeight: "75vh",
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
    gridTemplateRows: "1fr 5fr",
    gridTemplateColumns: "1fr 1fr auto-fit",
    gridGap:"12px",
    "&>div": {
      background: "$secondary4",
    }
})

const Logo = configedStyled("div")
const Status = configedStyled("div")


function IssuesPage() {
  return (
    <Container>
      <Logo css={{
        gridArea:"avatar"
      }} />
      <Filters css={{
        gridArea:"filters",
      }} />
      <Status css={{
        gridArea:"status"
      }} />
       <Lists css={{
        gridArea:"list"
      }} />

    </Container>
  )
}

export default IssuesPage
