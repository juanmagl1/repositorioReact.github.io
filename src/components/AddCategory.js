import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory =({setCategories})=>{
    const [inputValue, setinputValue] = useState("Hola mundo")
    const handleInputChange=(e)=>{
        console.log(e);
        setinputValue(e.target.value);
    }
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("enviado");
    if (inputValue.trim().length>2){
        setCategories(cats=>[inputValue,...cats])
    }
   }
    return(
        <>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            />
            </form>
        </>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}
