import { useTheme } from 'next-themes';
import React from 'react';
import { IoMdMoon, IoMdSunny } from "react-icons/io";

function Footer() {
    const { theme, setTheme } = useTheme()
    return <footer className='flex flex-col mt-auto bottom-0 group '>
        <div className='transition-all ease-in duration-500 flex gap-3 bg-slate-100 h-12 max-h-20 items-center p-4 text-black dark:text-white dark:bg-black'>
            <div className='hover:underline cursor-pointer'>Advertising</div>
            <div className='hover:underline cursor-pointer'>Business</div>
            <div className='hover:underline cursor-pointer'>How search works</div>
        </div>
        <div className='transition-all ease-in duration-500 flex border-t-[1px] dark:border-zinc-600 bg-slate-100 mt-auto bottom-0 z-10 gap-4 h-12 max-h-20 items-center justify-center p-4 text-black dark:text-white dark:bg-black'>
            <div>&#67;&#108;&#111;&#110;&#101; &#109;&#97;&#100;&#101;&#32;&#98;&#121; &#77;&#117;&#98;&#49;&#53;&#51;&#50;</div>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='hover:opacity-80 transition-all ease-in duration-100 text-slate-100 h-fit w-fit text-2xl p-2 justify-center flex items-center bg-slate-400 dark:text-white dark:bg-zinc-800 rounded-lg'>
                {
                    theme === "dark" ? <IoMdSunny /> : <IoMdMoon />
                }
            </button>
        </div>
    </footer>;
}

export default Footer;
