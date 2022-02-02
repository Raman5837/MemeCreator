import React from 'react'
import './Card.scss'


const Card = ({ Template, setMeme }) => {
    return (
        <div className="Card" onClick={() => { setMeme(Template)}} >
            <div className="Image">
                {Template.url && <img src={Template.url} alt={Template.name} />}
            </div>
            <div className="Details">
                <h5>{Template.name}</h5>
            </div>
        </div>
    )
}

export default Card
