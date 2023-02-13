import React, { useState,useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid =({category})=>{
    const [image, setimage] = useState([]);
    const {data:images,loading}=useFetchGifs(category);
    useEffect(()=>{
        getGifs(category)
        //Si le mandas ese mismo parametro, puedes poner solo el setImage
        .then((gifs)=>setimage(gifs))
    })
    // const getGif=async ()=>{
    //     return gifs; 
    // }
    // getGif()
    //     .then((imgs)=>setimage(imgs))
    return(
        <div>
           <h3>{category}</h3>
           {
            image.map((img)=> 
                <GifGridItem
                key={img.id}
                {...img}/>
            )
           }
        </div>
    )
}