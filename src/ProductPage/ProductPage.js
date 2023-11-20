import React, { useEffect, useState } from "react";
import './ProductPage.css'
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';


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
        <div>

            <div className="Profile_Header">
                <div className="Profile-Access">
                    <div className="Profile_img">
                        <img src={photo?.user.profile_image.medium} />
                    </div>

                    <div className="Profile_name">
                        <a>{photo?.user.name}</a>
                        <a>{photo?.user.name}</a>

                    </div>

                </div>

                <div className="Profile_Sammery">
                    <FavoriteIcon />
                    <AddIcon />
                    <a><button>Download</button> </a>
                </div>

            </div>

            <div className="ProductImage">
                <img src={photo?.urls.regular} />
            </div>


        </div>
    )
}
export default ProductPage