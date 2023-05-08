import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { contexts } from '../App'


function Home() {

    const [url, setUrl] = useState("")
    const { setURL } = useContext(contexts)
    const navigation = useNavigate()


    /**
    * Submit Handler that handle submit and set link in context with name
    */

    const submitHandler = (e) => {
        e.preventDefault()
        if (url.length > 5) {
            setURL({ "name": "news", link: url })
            // setURL({ "news": url })
            navigation('/details')
        }
    }


    return (
        <div className='home'>
            <div className="container">
                <form className='newsLink' onSubmit={submitHandler}>

                    <h2>Extraction</h2>

                    <input type="text" placeholder='Enter news link' onChange={(e) => setUrl(e.target.value)} value={url} name='news' />

                    <div>
                        <p>Have google News <Link to="/google">Link</Link></p>
                    </div>

                    <button type='submit'>Extract</button>
                </form>
            </div>
        </div>
    )
}

export default Home