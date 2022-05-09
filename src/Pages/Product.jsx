import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import api from "../Api";

const Product = () => {
    const [name, setName] = useState("Product");
    let {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        api.getSingleProduct(id).then(data => {
            console.log(data);
            setProduct(data);
        })
    }, []);
    return ( 
        <>
        <h1>{product.name || "Product"}</h1>
        <p>{id}</p>
        </>
    )
}

export default Product