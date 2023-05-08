import React, { useContext, useEffect, useState } from 'react'
import Loading from './Loading'
import { contexts } from '../App'
import { useNavigate } from 'react-router-dom'
import { api_endpoint } from '../App'
import axios from 'axios'


function Details() {
    const [content, setContent] = useState({
        title: "",
        date: "",
        author: "",
        publisher: "",
        text: []
    })
    const { loading, setLoading, URL } = useContext(contexts)
    const navigate = useNavigate()



    useEffect(() => {

        /**
         * methods for fetching data
         */

        const options = {
            "URL": URL.link
        }

        const fetching = async (url) => {
            const response = await axios.post(url, options)
            setContent(response.data.data)
            setLoading(false)

        }

        /* **************** */



        if (URL.name) {

            setLoading(true)

            if (URL.name === "news") {
                fetching(api_endpoint)
            } else if (URL.name === "google") {
                fetching(`${api_endpoint}/g`)
            }
        } else {
            navigate("/")
        }

    }, [])


    return (
        loading ? <Loading /> : 
            <div className='details'>
                <h3>{content.title}</h3>

                <div className="detail">
                    <p>Author: <span>{content.author?content.author:"Sorry"}</span></p>
                    <p>Publisher: <span>{content.publisher?content.publisher:"Sorry"}</span></p>
                    <p>Date: <span>{content.date?content.date:"Sorry"}</span></p>
                </div>

                <div className="texts">
                    {
                        content.text&&content.text.map((item,index)=>(
                            <p key={index}>{item}</p>
                        ))
                    }
                </div>
            </div>
    )
}

export default Details