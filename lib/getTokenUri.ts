
export default async function getTokenUri(url:string, {arg}:Arg){
    const req = await fetch(`${url}?num=${arg}`,{ cache: 'force-cache' })
    return await req.json()
}