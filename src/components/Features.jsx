import React from 'react'
import './features.css'
import Video1 from '../assets/one-vid.mp4'
import Image1 from '../assets/one-icon.svg'
import featuresData from '../data/features-data.js'

const Features = () => {
    return (
        <div className='features'>
            {featuresData.map((feature, index) => (
                <div className='feature-card'>
                    <div 
                    key={feature.id} 
                    className={`features-content ${index % 2 !== 0 ? 'reverse' : ''}`}
                >
                    <div className='top-content'>
                        <video src={feature.video} muted autoPlay loop playsInline />
                    </div>
                    <div className='bottom-content'>
                        <img src={feature.image} alt={feature.title} />
                        <h1>{feature.title}</h1>
                        <p>{feature.description}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default Features
