import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function Pages() {

    const Router = useRouter()
    const resultStart = Number(Router.query.page) || 0

    return <div className='flex space-x-4 justify-between w-1/4'>
        {resultStart >= 1 && (
            <Link href={`/search?q=${Router.query.q}&page=${resultStart + 1}`} passHref>
                <div className='cursor-pointer'>
                    Previous
                </div>
            </Link>
        )}
        <Link href={`/search?q=${Router.query.q}&page=${resultStart + 1}`} passHref>
            Next
        </Link>
    </div>;
}

export default Pages;
