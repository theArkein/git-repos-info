import { Button, Input, Select, SelectOption  } from "arkein-ui"
import { configedStyled, urls } from "../../../../config"
import { CSS } from "@stitches/react"
import { ChangeEvent, FormEvent, useState } from "react"
import { useAtom } from "jotai"
import { queryFilterAtom, statusFilterAtom } from "../store/index.store"
import { validateGithubUrl } from "../../../../utils/index.utils"

const Wrapper = configedStyled("div", {
    padding: "10px",
})

const StyledFilters = configedStyled("form",{
    display:"flex",
    gap: "12px",
})
interface FilterProps {
    css?: CSS;
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
    const [queryFilter, updateQueryFilter] = useAtom(queryFilterAtom)
    const [statusFilter, updateStatusFilter] = useAtom(statusFilterAtom)

    const [query, setQuery] = useState({
        isTouched: false,
        value: queryFilter,
        isValid: queryFilter ? validateGithubUrl(queryFilter).isValid : true,
        error:  queryFilter ? validateGithubUrl(queryFilter).error : '',
    });

    const [status, setStatus] = useState(statusFilter || "all");

    const isSubmitable = (query.value && query.isValid)

    const handleQueryChange = (e: ChangeEvent<HTMLInputElement>)=>{
        const value = e.target.value
        const {isValid, error} = validateGithubUrl(value)
        setQuery(prevVal=>({
            ...prevVal,
            value,
            error,
            isValid,
            isTouched: !!value,
        }))
    }

    const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>)=>{
        setStatus(e.target.value)
    }

    const handleSubmit = (e: FormEvent)=>{
        e.preventDefault()
        if(!isSubmitable) return;
        updateQueryFilter(query.value)
        updateStatusFilter(status)
    }

    return (
        <Wrapper css={css}>
        <StyledFilters css={css} onSubmit={handleSubmit}>
            <Input invalid={!query.isValid && query.isTouched} error={query.error} placeholder={`eg: ${urls.githubExampleUrl}`} value={query.value} onChange={handleQueryChange}/>
            <Select label="Select Status" options={statusOptions} value={status} onChange={handleStatusChange}/>
            <Button label="Search" type="submit" disabled={!isSubmitable} />
        </StyledFilters>
        </Wrapper>
    )
}