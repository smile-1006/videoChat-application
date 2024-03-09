import React from 'react'
import CheckImg from '../resources/images/check.png'

const OnlyWithAudioCheckbox = () => {
    const handleConnectionTypeChange = () => {
        console.log('connection type changed');
    }

    return (
    <div className='checkbox_container' >
        <div className='checkbox_connection' onClick={handleConnectionTypeChange}>  
            <img className='checkbox_image' src={CheckImg}></img>
        </div>
        <p className='checkbox_container_paragraph'>only audio</p>
    </div>
    )
}

export default OnlyWithAudioCheckbox
