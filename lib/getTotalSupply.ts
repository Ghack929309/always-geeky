export default async function getTotalSupply(url:string){
    const total = await fetch(url)
    return await total.json()
}