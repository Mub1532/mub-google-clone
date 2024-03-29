import { useTheme } from 'next-themes';
import Image from 'next/image';
import Router from 'next/router';
import React, { useRef } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

function Body() {
    const { theme, setTheme } = useTheme()

    const searchField = useRef<HTMLInputElement>(null)

    const search = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        //@ts-expect-error
        let input = searchField.current.value
        if (!input) return;
        Router.push(`/search?q=${input}&page=0`)
    }


    return <div className="flex gap-2 flex-col h-full w-full justify-center items-center ">
        <div className='flex items-center space-x-6'>
            <Image
                src={theme === "dark" ? "/images/logoDark.png" : "/images/logo.png"}
                alt={"Logo"}
                width={300}
                height={100}
            />
        </div>
        <div className="h-1/4 w-5/6 md:w-4/6 xl:w-1/3 flex flex-col gap-2">
            <form onSubmit={search} className="transition-all ease-out duration-500 hover:shadow-lg shadow-md dark:text-white dark:shadow-zinc-700 dark:border-zinc-600 h-12 border-[1px] border-slate-200 flex gap-2 p-3 rounded-full">
                <div className="right-0 items-center flex gap-3">
                    <div className="text-xl text-slate-400">
                        <AiOutlineSearch />
                    </div>
                </div>
                <input ref={searchField} placeholder="Search.." className="bg-transparent focus:outline-none w-full h-full"></input>
            </form>
            <div className="flex space-x-4 p-2 h-full w-full justify-center items-center">
                <button onClick={search} className="h-fit p-2 w-1/4 min-w-fit text-xs sm:text-sm lg:text-base  hover:border-[1px] hover:shadow-sm focus:bg-slate-200 transition-all ease-in duration-200 bg-slate-100 dark:bg-zinc-800 dark:text-white dark:border-slate-700 dark:focus:border-slate-700 dark:focus:border-[1px] dark:focus:bg-zinc-800 dark:hover:bg-zinc-900 rounded-md">
                    Google Search
                </button>
                <button className="h-fit p-2 px-4 w-1/4 min-w-fit text-xs sm:text-sm lg:text-base  hover:border-[1px] hover:shadow-sm focus:bg-slate-200 transition-all ease-in duration-200 bg-slate-100 dark:bg-zinc-800 dark:text-white dark:border-slate-700 dark:focus:border-slate-700 dark:focus:border-[1px] dark:focus:bg-zinc-800 dark:hover:bg-zinc-900 rounded-md">
                    I&apos;m feeling lucky
                </button>
            </div>
        </div>
    </div>;
}

export default Body;
