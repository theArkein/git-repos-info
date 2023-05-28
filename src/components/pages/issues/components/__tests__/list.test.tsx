import {render, screen} from '@testing-library/react'
import {List} from "../list"

describe('IssuesList', async () => {
    const listItems = [
        "Sunday",
        "Monday",
        "Tuesday"
    ]
    const renderItem = (item: string)=><li>{item}</li>

    it("should render successfully", ()=>{
        render(<List items={listItems} renderItem={renderItem}/>)
        screen.getByText("Sunday")
        screen.getByText("Monday")
        screen.getByText("Tuesday")
        expect(screen.queryByText("Wednesday")).not.toBeInTheDocument()
    })
})