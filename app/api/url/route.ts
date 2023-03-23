import {abi} from "@/lib/abi";
const Web3 = require('web3');
const web3 = new Web3('https://rpc-mainnet.maticvigil.com/');

const contract = new web3.eth.Contract(abi, process.env.ADDRESS);

export async function GET(req:Request,res:Response){
    // @ts-ignore
    const input =req?.nextUrl.searchParams.get('num')
    const token= await contract.methods.tokenURI(input).call();
    return new Response(JSON.stringify({tokenUri:token}))
}
