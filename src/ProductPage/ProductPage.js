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
            {/* Profile_Header */}
            <div className="Profile_Header">
                <div className="Profile-Access">
                    <div className="Profile_img">
                        <img src={photo?.user.profile_image.medium} />
                    </div>

                    <div className="Profile_name">
                        <p>{photo?.user.name}</p>
                        <a>{photo?.user.for_hire ? <span>Available for hire</span> : <span>{null}</span> }</a>

                    </div>

                </div>

                <div className="Profile_Sammery">
                   
                   <a><button>Download</button> </a>
                   <AddIcon />
                    <FavoriteIcon />
                 
                </div>

            </div>


            {/* ProductImage */}
            <div className="ProductImage">
                <img src={photo?.urls.regular} />
            </div>

            {/* share-info */}
            <div className="share-info">
                <div className="veiws-Downloads">
                    <div className="veiws">
                        <h3>Veiws</h3>
                        <span>{photo?.likes}</span>
                    </div>


                    <div className="Downloads">
                        <h3>Downloads</h3>
                        <span>{photo?.downloads}</span>
                    </div>

                </div>


                <div className="btn_share-info">
                    <button >share</button>
                    <button>info</button>
                    <button>...</button>
                </div>



            </div>


            <div className="tags">

            </div>
        </div>
    )
}
export default ProductPage