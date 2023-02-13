import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const Gifapp = () => {
  let [categories,setCategories]=useState(['Honda','Kawasaki','Yamaha'])
  const funcion=()=>{
    //categories.push("yoni")
    //La propiedad lo que le de en el parametro es lo que devuelve
    setCategories([...categories,'yoni']);
    console.log(categories);
  }

  const borra=()=>{
    categories.pop();
    setCategories([...categories])
  }
  return (
    <>
    <h1>GifsApp</h1>
    <hr/>
    <AddCategory setCategories={setCategories}/>
    <ol>
      {
        categories.map((category)=>
           <GifGrid 
           key={category}
           category={category}/>
      )
    }
    </ol>
    {/* <button onClick={funcion}>Add</button> */}
    
    <button onClick={borra}>delete</button>
    </>
  )

}
//el export se pone sin parentesis
export default Gifapp