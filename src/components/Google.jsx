import React, { useContext, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { contexts } from '../App'

function Google() {

    const [url, setUrl] = useState("")
    const { setURL } = useContext(contexts)
    const navigation = useNavigate()



    /**
     * Submit Handler that handle submit and set link in context with name
     */


    const submitHandler = (e) => {
        e.preventDefault()
        if (url.length > 5) {
            setURL({ "name": "google", link: url })
            navigation('/details')
        }
    }

    return (
        <div className='home'>
            <div className="container">
                <form className='newsLink' onSubmit={submitHandler}>

                    <h2>Extraction</h2>

                    <input type="text" placeholder='Enter google news link' onChange={(e) => setUrl(e.target.value)} value={url} name='google' />

                    <div>
                        <p>Have News <Link to={"/"}>Link</Link></p>
                    </div>

                    <button type='submit'>Extract</button>
                </form>
            </div>
        </div>
    )
}

export default Google