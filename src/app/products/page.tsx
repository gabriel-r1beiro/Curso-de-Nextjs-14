import Link from 'next/link'
import React from 'react'

export default function Product () {
    return (
        <div className='w-full h-[50vh] bg-black text-white flex flex-col items-center justify-center'>
            <div className='bg-slate-200 text-blue-600 p-2 mb-1'>
                <h2>Produto 1</h2>
                <p className='border-t border-red-500'>Lorem ipsum dolor sit amet.</p>
                <span><Link href="/products/1" className='text-black px-2 bg-red-200 py-1 rounded-md hover:bg-red-400'>Product 1</Link></span>
            </div>
            <div className='bg-slate-200 text-blue-600 p-2 mb-1'>
                <h2>Produto 2</h2>
                <p className='border-t border-red-500'>Lorem ipsum dolor sit amet.</p>
                <span><Link href="/products/2" className='text-black px-2 bg-red-200 py-1 rounded-md hover:bg-red-400'>Product 2</Link></span>
            </div>
            <div className='bg-slate-200 text-blue-600 p-2 mb-1'>
                <h2>Produto 3</h2>
                <p className='border-t border-red-500'>Lorem ipsum dolor sit amet.</p>
                <span><Link href="/products/3" className='text-black px-2 bg-red-200 py-1 rounded-md hover:bg-red-400'>Product 3</Link></span>
            </div>
        </div>
    )
}
