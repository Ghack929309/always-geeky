import {abi} from "@/lib/abi";
const Web3 = require('web3');
const web3 = new Web3('https://rpc-mainnet.maticvigil.com/');

const contract = new web3.eth.Contract(abi, process.env.ADDRESS);


export async function GET(request:Request,response:Response){
    const count = await  contract.methods.totalSupply().call()
    return new Response(JSON.stringify({count:count}))
}
