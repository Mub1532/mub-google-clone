import React from 'react';

function Footer() {
    return <footer className='flex flex-col mt-auto bottom-0'>
        <div className='flex gap-3 bg-slate-100 h-12 max-h-20 items-center p-4 text-black cursor-pointer'>
            <div className='hover:underline'>Advertising</div>
            <div className='hover:underline'>Business</div>
            <div className='hover:underline'>How search works</div>
        </div>
        <div className='flex border-t-[1px] bg-slate-100 mt-auto bottom-0 z-10 gap-4 h-12 max-h-20 items-center justify-center p-4 text-black cursor-pointer'>
            <div>&#67;&#108;&#111;&#110;&#101; &#109;&#97;&#100;&#101;&#32;&#98;&#121; &#77;&#117;&#98;&#49;&#53;&#51;&#50;</div>
        </div>
    </footer>;
}

export default Footer;
