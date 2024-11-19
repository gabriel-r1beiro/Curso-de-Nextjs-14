import React from 'react'

export default function Product () {
    return (
        <div className='w-full h-[50vh] bg-black text-white flex flex-col items-center justify-center'>
            <div className='bg-slate-200 text-blue-600 p-2 mb-1'>
                <h2>Produto 1</h2>
                <p className='border-t border-red-500'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='bg-slate-200 text-blue-600 p-2 mb-1'>
                <h2>Produto 2</h2>
                <p className='border-t border-red-500'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}
