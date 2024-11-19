import React from "react";

export default function Layou({ children }: {children: React.ReactNode}) {
    return (
        <div className='bg-red-500'>
            {children}
            <footer className="text-red-900 bg-red-200 w-full h-40"> Footer</footer>
        </div>
    )
}
