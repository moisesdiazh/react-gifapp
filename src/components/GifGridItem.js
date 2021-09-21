import React from 'react'
                            //desestructuramos para extraer lo que queremos
export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__bounce">
            {/* mostramos la imagen */}
            <img src={url} alt={title}></img> 
            {/* mostramos el titulo */}
            <p>{title}</p>
        </div>
    )
}
