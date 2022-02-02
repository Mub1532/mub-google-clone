import Image from 'next/image';
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
function Body() {
    return <div className="flex gap-2 flex-col h-full w-full justify-center items-center">
        <Image
            src={"/images/logo.png"}
            alt={"Logo"}
            width={300}
            height={100}
        />
        <div className="h-1/4 md:w-1/3 w-1/2 flex flex-col gap-2">
            <form className="hover:bg-slate-100 hover:border-none h-12 border-[1px] border-slate-200 flex gap-2 p-2 rounded-full transition-all ease-in duration-100 ">
                <div className="right-0 items-center flex gap-3">
                    <div className="text-xl text-slate-400">
                        <AiOutlineSearch />
                    </div>
                </div>
                <input placeholder="Search.." className="bg-transparent focus:outline-none w-full h-full"></input>
            </form>
            <div className="flex gap-2 p-2 h-14 w-full justify-center items-center">
                <button className="w-1/4 hover:border-[1px] hover:shadow-sm focus:bg-slate-200 transition-all ease-in duration-200 bg-slate-100 rounded-md h-full">
                    Google Search
                </button>
                <button className="w-1/4 hover:border-[1px] hover:shadow-sm focus:bg-slate-200 transition-all ease-in duration-200 bg-slate-100 rounded-md h-full">
                    I&apos;m feeling lucky
                </button>
            </div>
        </div>
    </div>;
}

export default Body;
