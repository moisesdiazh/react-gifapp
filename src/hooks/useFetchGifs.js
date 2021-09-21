import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

//mandamos la categoria desde el gifgrid como argumento
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  //le colocamos efectos a nuestros custom hook

  useEffect(() => {
    //ejecutamos la petición http

    getGifs(category) //es una promesa
      .then((imgs) => {
        
        setState({
          data: imgs,
          loading: false,
        });
      });
  }, [category]);

  //   setTimeout(() => {
  //     //settimeout funcion que recibe un callback para poner un temporizador para ejecutar una accion

  //     setState({
  //       data: [1, 2, 3, 4, 5, 6, 7],
  //       loading: false,
  //     });
  //   }, 3000);
  //   // 3000 = 3 segundos

  return state; // {data: [], loading: true}
};
