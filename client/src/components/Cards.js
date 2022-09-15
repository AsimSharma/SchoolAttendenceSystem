import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Notices!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={require('../images/img-9.jpg').default}
                            text="First term Notices"
                            label="Exam Notice"
                            path="/services"
                        />
                        <CardItem 
                            src={require('../images/img-2.jpg').default}
                            text="Parents Meeting Notice"
                            label="Meeting Notice"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={require('../images/img-10.jpg').default}
                            text="extracurricular activities Notice"
                            label=""
                            path="/services"
                        />
                        <CardItem 
                            src={require('../images/img-9.jpg').default}
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