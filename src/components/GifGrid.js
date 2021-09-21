import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category); //usando el custom hook
        //renombramos data con images        //mandamos como argumento la categoria al hook

   
    //recibimos la categoria y hacemos una petición http


    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
  
        {/* colocamos el loading */}

        {loading && <p className="animate__animated animate__flash">Loading...</p>}

        <div className="card-grid">
                {
                    // mandamos la data
                    images.map(img => (

                        //el componente de las imagenes
                        <GifGridItem 
                            key={img.id} //llave del componente
                            {...img} //operador spread(el array completo) con img
                        />

                    ))
                }
        </div>
        </>
    )
}
