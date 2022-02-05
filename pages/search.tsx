import { useTheme } from 'next-themes';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import React, { useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsImageFill, BsMapFill, BsNewspaper, BsPlayBtnFill, BsSearch } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import Results from '../components/Results';
import backupResults from "../public/backupResults.json";


function Search({ results }: any) {
    const searchField = useRef<HTMLInputElement>(null)


    const search = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        //@ts-expect-error
        let input = searchField.current.value
        if (!input) return;
        Router.push(`/search?q=${input}&page=0`)
    }

    const router = useRouter()

    const [searchQ, setSearchQ] = useState(router.query.q)
    const { theme, setTheme } = useTheme()
    return (
        <header className='flex flex-col h-full w-full'>
            <Head><title>Results for {router.query.q}</title></Head>
            <div className='flex flex-col h-fit border-b-[1px] border-zinc-200 dark:border-zinc-700 px-4 pt-4 w-full overflow-x-clip'>
                <div className='flex min-w-fit pl-2 w-full h-full gap-2 items-center overflow-hidden'>
                    <Link href="/" passHref>
                        <Image
                            src={theme === "dark" ? "/images/logoDark.png" : "/images/logo.png"}
                            alt={"Logo"}
                            width={"100%"}
                            height={"35%"}
                            className='hover:opacity-80 cursor-pointer hidden md:block'
                        />
                    </Link>
                    <form onSubmit={search} className="ml-4 md:ml-10 transition-all ease-out duration-500 w-full max-w-xl hover:shadow-lg shadow-md dark:text-white dark:shadow-zinc-700 dark:border-zinc-600 h-full border-[1px] border-slate-200 flex gap-2 p-2 md:p-3 rounded-full">
                        <div className="right-0 items-center flex gap-3">
                            <div className="text-xl text-slate-400">
                                <AiOutlineSearch />
                            </div>
                        </div>
                        <input ref={searchField} onChange={(event) => { setSearchQ(event?.target.value) }} value={searchQ} placeholder="Search.." className="bg-transparent focus:outline-none w-full h-full"></input>
                    </form>
                    <div className='flex items-center gap-2 justify-end ml-auto right-0 w-fit'>
                        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='hover:opacity-80 transition-all ease-in duration-100 text-slate-100 h-fit w-fit md:text-2xl p-2 justify-center flex items-center bg-slate-400 dark:text-white dark:bg-zinc-800 rounded-lg'>
                            {
                                theme === "dark" ? <IoMdSunny /> : <IoMdMoon />
                            }
                        </button>
                        <Image
                            src={"/images/mub.png"}
                            height={40}
                            width={40}
                            alt='mub'
                            className='rounded-full'
                        />
                    </div>
                </div>
                <div className='flex md:pl-36 h-full items-center overflow-hidden gap-2'>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:opacity-80 text-blue-500 border-b-4 border-blue-500'><BsSearch /><span className='hidden md:block'>All</span></div>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:opacity-80 transition-all ease-in duration-300'><BsImageFill /><span className='hidden md:block'>Images</span></div>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:opacity-80 transition-all ease-in duration-300'><BsPlayBtnFill /><span className='hidden md:block'>Videos</span></div>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:opacity-80 transition-all ease-in duration-300'><BsNewspaper /><span className='hidden md:block'>News</span></div>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:opacity-80 transition-all ease-in duration-300'><BsMapFill /><span className='hidden md:block'>Maps</span></div>
                    <div className='flex items-center gap-2 cursor-pointer p-2 hover:opacity-80 transition-all ease-in duration-300'><FaEllipsisV /><span className='hidden md:block'>More</span></div>

                </div>
            </div>
            <div className='overflow-auto'>
                <Results results={results} />
            </div>
        </header>
    )
}

export default Search;


export async function getServerSideProps(context: any) {
    const pages = context.query.page || "0"
    let data;

    try {
        data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.q}&start=${pages * 10}`)
            .then(response => response.json());
    } catch (error) {
        data = backupResults
    }

    return {
        props: {
            results: data
        }
    }
}