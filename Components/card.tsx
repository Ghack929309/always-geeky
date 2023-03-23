'use client'
import useSWRMutation from 'swr/mutation'
import { useState, ChangeEvent} from 'react';
import Image from "next/image";
import {EyeIcon} from "@heroicons/react/24/outline";
import {ClockIcon, CurrencyDollarIcon} from "@heroicons/react/20/solid";
import getTotalSupply from "@/lib/getTotalSupply";
import getTokenUri from "@/lib/getTokenUri";



function Card() {
    const [count, setCount] = useState<number >(0);

    const { data: totalSupply,trigger:total } = useSWRMutation('/api/web3', getTotalSupply,{populateCache:true})
    const {data , trigger:tokenTrigger} = useSWRMutation(`/api/url/`, getTokenUri,{populateCache:true})



    return (
        <div className='container'>
            <div className='container-image'>
                <Image className="h-auto" src='/assets/nft.png' priority alt='nft' width='300' height='300'/>
                <div className='overlay'>
                   <EyeIcon className='h-5 w-5'/>
                </div>
            </div>
            <div className='container-info'>
                <h1>Voxies {totalSupply && `${totalSupply.count} items`}</h1>
                <p>{data?.tokenUri||'You can be the first to own Voxies Merch'}</p>
                <div className='container-price'>
                    <div className='price'>
                        <CurrencyDollarIcon className="icon text-[hsl(178,100%,50%)] mr-1.2 "/>

                        <p>0.041 ETH</p>
                    </div>
                    <div className='time'>
                       <ClockIcon className='icon text-[#8BACD9]'/>
                        <p>3 days left</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="flex justify-between items-center w-full">
                <button onClick={()=>total()}
                        className='bg-[#01FFF8]/70 px-4 py-2 rounded-lg hover:bg-[#01FFF8]/50'>total
                </button>

                <div className="custom-number-input h-10 w-24">

                    <div
                        className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                        <button disabled={count<=0} onClick={()=>setCount(count-1)} className="decrement">
                            <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input type="number"
                               onChange={(e:ChangeEvent<HTMLInputElement>) => setCount(Number(e.target.value))}
                               className="input-number"
                               value={count}/>
                        <button onClick={()=>setCount(count+1)}
                                className="increment">
                            <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                    </div>
                </div>

                <button onClick={()=>tokenTrigger(count)}
                    className='bg-[#8BACD9]/70 px-4 py-2 rounded-lg hover:bg-[#8BACD9]/50'>get
                    url
                </button>
            </div>

        </div>
    );
}

export default Card;