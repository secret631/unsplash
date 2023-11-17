import React, {useEffect, useState} from "react";
import './ProductPage.css'
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProductPage= ()=>{
const [photo,setphoto] = useState(null)
const location= useLocation()

useEffect(() => {
    axios.get(`https://api.unsplash.com/photos${location.state}`, {
        headers: {
            Authorization: 'Client-ID 8GMrSwACBn1O6TtOVIrzpWDNqkeLaEGMyW5-A5Y6eZ0'
        }
    }).then(Response => {

        console.log(Response)
        setphoto(Response.data)
    })

}, [])
    return(
        <div >
            <img src={photo?.urls.regular} />
            
        </div>
    )
}
export default ProductPage