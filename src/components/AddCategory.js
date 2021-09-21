//rafc
import React, {useState} from 'react'
import PropTypes from 'prop-types'; // importando proptypes

export const AddCategory = ({setCategories}) => {

    //creamos un estado para el componente y saber que esta escribiendo
    const [inputValue, setInputValue] = useState('');

                            //recibimos el evento 
    const handleInputChange = (e) => {
        //seteamos y podemos cambiar en la caja de texto
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        //
        e.preventDefault(); //prevenimos el comportamiento por defecto del formulario
        // console.log('Submit hecho');
        if(inputValue.trim().length >2){ //condicion para que no puedan enviar menos que 2 letras

            setCategories(categories => [inputValue, ...categories]); //cambiamos el valor
            setInputValue(''); //borramos 
        }
    };

    return (
        //se puede reemplazar el fragment por el form ya que cumplen la misma labor de agrupar
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
        
    )
}

AddCategory.propTypes = { 
    //para realizar requerido el setCategories para que pueda funcionar el AddCategory

    setCategories: PropTypes.func.isRequired
}



