import React from 'react';

function Header() {
    return <nav className='flex gap-4 h-12 max-h-20 items-center p-4 m-2 text-black dark:text-white cursor-pointer'>
        <div className='hover:underline'>About</div>
        <div className='hover:underline'>Store</div>
        <div className='flex items-center gap-2 justify-end w-full'>
            <div className='hover:underline'>Gmail</div>
            <div className='hover:underline'>Images</div>
            <div className='rounded-full bg-blue-800 text-white px-3 py-2 font-bold'>M</div>
        </div>
    </nav>;
}

export default Header;
