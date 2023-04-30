import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Detail = () =>{
    const {id}= useParams();
    const [product, setProduct]= useState({});

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`)
        .then(response=> response.data)
        .then(( data ) => {
            if (data.title) {
               setProduct(data);
            } else {
               alert('No hay producto con ese ID');
            }
         });
         return setProduct({});
    }, [id])

    return(
        <div>
            <h2>Producto: {product?.title}</h2>
            <h2>{product?.price}</h2>
            <h2>Descripción: {product?.description}</h2>
            <h2>Categoría: {product?.category} </h2>
            <h2>Rating: {product?.rating?.rate}</h2>
            <img src={product?.image} alt={product?.title} />
        </div>
    )
}
export default Detail;