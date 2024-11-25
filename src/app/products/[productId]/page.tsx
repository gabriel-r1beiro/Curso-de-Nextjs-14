import NotFound from '@/app/not-found';
import { Metadata } from 'next';
import React from 'react'

interface InformParams{
    params: {
        productId: string;
    }
}

export const metadata: Metadata = {
    title: "Informs",
    description: "Generated by create next app",
  };

export default function Inform({ params }: InformParams) {
    const data = [
        {
            name: "product 1", id: "1", paragraf: "Lorem ipson 1"
        },
        {
            name: "product 2", id: "2", paragraf: "Lorem ipson 2"
        },
        {
            name: "product 3", id: "3", paragraf: "Gabriel Ribeiro"
        }
    ]
    const filter = data.filter(products => products.id.startsWith(params.productId))
    return (
        <div>
            {parseInt(params.productId) > 3 && <NotFound/>}
            <h3 className='bg-purple-200'>Essa Pagina so muda o produto - otimo isso nao?</h3>
            <h1>br</h1>
            {filter.map(item => {
                return (
                    <div className='flex flex-col items-center justify-center bg-purple-600 text-white p-4'>
                        <h1>{item.name}</h1>
                        <p>{item.paragraf}</p>
                    </div>
            )
                })}
        </div>
    )
}
