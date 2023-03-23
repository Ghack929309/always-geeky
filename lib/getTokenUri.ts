export default async function getTokenUri(url, {arg}){
    const req = await fetch(`${url}?num=${arg}`,{ cache: 'force-cache' })
    return await req.json()
}