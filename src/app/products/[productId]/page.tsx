import React from 'react'

interface InformParams{
    params: {
        productId: string;
    }
}

export default function Inform({ params }: InformParams) {
    const data = [
        {
            name: "product 1", id: "1", paragraf: "Lorem ipson 1"
        },
        {
            name: "product 2", id: "2", paragraf: "Lorem ipson 2"
        },
        {
            name: "product 3", id: "3", paragraf: "Lorem ipson 3"
        }
    ]
    const filter = data.filter(products => products.id.startsWith(params.productId))
    console.log(filter)
    return (
        <div>
            INFORM dos Product {params.productId}
            <h1>br</h1>
            {filter.map(item => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.paragraf}</p>
                    </div>
            )
                })}
        </div>
    )
}
