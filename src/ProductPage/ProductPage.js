import React, { useEffect, useState } from "react";
import './ProductPage.css'
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import like from './like.png'

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
        <div className>
            <div className="Profile">
                <div className>
                    <div className="Profile_img">
                        <img src={photo?.user.profile_image.medium} />
                    </div>

                    <div className="name_user">
                        <div className="name_user">
                            <a>{photo?.user.name}</a>
                        </div>
                       
                       
                        <div>
                            <a>Available for hire</a>

                        </div>
                    </div>

                </div>

                <div className="like_user">
                    <button><img src={like} /></button>
                    <button>+</button>
                </div>
            </div>


            <div className="ProductImage">
                <img src={photo?.urls.regular} />
            </div>


            <div className="slide3">
                <div className="Views">
                    <h3>Views</h3>
                </div>
                <div className="Downloads">
                    <h3>Downloads</h3>
                </div>
                <div className="Featured in">
                    <h3>Featured in</h3>
                </div>

                <div>
                    <button>share</button>
                </div>
                <div>
                    <button>info</button>
                </div>
                <div>
                    <button>...</button>
                
                
                </div>


            </div>




        </div>



    )
}
export default ProductPage