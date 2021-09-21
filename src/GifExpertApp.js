import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //se debe colocar asi en caso de hacer un array
    const [categories, setCategories] = useState(['MessiApp']);


    //constante para para poder añadir algo mediante el boton de agregar
    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterxHunter']); 
    //     //creamos un nuevo estado del arreglo con setCategories, 
    //     //...categories es para traer el arreglo como tal y lo segundo es para añadir al arreglo
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>


            <ol>
                {   //mapeamos el array de categories
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    );
};
