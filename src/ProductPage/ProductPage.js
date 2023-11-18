import React, { useEffect, useState } from "react";
import './ProductPage.css'
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
    const params = useParams()

    const [photo, setphoto] = useState(null)
    console.log(params)

    useEffect(() => {
        axios.get(`https://api.unsplash.com/photos/${params.Id}`, {
            headers: {
                Authorization: 'Client-ID 8GMrSwACBn1O6TtOVIrzpWDNqkeLaEGMyW5-A5Y6eZ0'
            }
        }).then(Response => {
            console.log(Response)
            setphoto(Response.data)
        })

    }, [])

    return (
        <div className="ProductPage">
            <div className="Profile">
                <img src={photo?.user.profile_image.medium} />
                <p>{photo?.user.name}</p>
            </div>


            <div className="ProductImage">
                <img src={photo?.urls.regular} />
            </div>




            
        </div>

    )
}
export default ProductPage