import { urls } from "../config"

export const fetchAPI = async (url:string) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}

export const getIssuesApiEndPoint = (username: string, repo: string, state: string)=>`${urls.githubAPIOrigin}/repos/${username}/${repo}/issues?state=${state}`

export const validateGithubUrl = (url:string)=>{
    const result= {isValid: true, error:''}

    const setInValidResult = (error: string)=>{
        result.isValid = false,
        result.error = error
    }

    if(!url) {
        setInValidResult("Enter github url")
        return result 
    }

    try {
        const validUrl = new URL(url)
        const origin = validUrl.origin
        if(!urls.validGitHubOrigins.includes(origin) ){
            setInValidResult("Given URL is not valid github origin")
            return result
        }
        const paths = validUrl.pathname.split("/")
        if(!paths[2] || paths[3]){
            setInValidResult("Given URL must have username and repo name only")
            return result
        }
        return result
    } catch(error){
        result.isValid = false,
        result.error = "Invalid URL"
    }
    return result
}

export const localFormattedDate = (date: Date | string)=>{
    return new Date(date).toLocaleDateString("en-us",{
        month: "short",
        day: "numeric",
        year: "numeric"
    })
}