import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {

    return (
        <div className="NavBar">
            <div className="LeftSide">
                <Link className="Link" to="/"><span>Meme Creator </span></Link> 
                <span className="Emoji">😎</span>
            </div>

            <div className="RightSide">
                <div className="Options">
                    <span>Developed By </span><a className="Link" href="https://amannverma.netlify.com/" target="_blank" rel="noopener noreferrer"><span className="Aman">Aman</span></a>
                </div>

            </div>
        </div>
    )
}

export default Navbar
