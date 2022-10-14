import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image from "../images/img-9.jpg"
import image2 from "../images/img-2.jpg"
import image3 from "../images/img-10.jpg"

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Notices!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={image}
                            
                            text="First term Notices"
                            label="Exam Notice"
                            path="/services"
                        />
                        <CardItem 
                            src={image2}
                            text="Parents Meeting Notice"
                            label="Meeting Notice"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={image3}
                            text="extracurricular activities Notice"
                            label=""
                            path="/services"
                        />
                        <CardItem 
                            src={image}
                            text="Final Exam Notices"
                            label="Exam Notices"
                            path="/services"
                        />
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards