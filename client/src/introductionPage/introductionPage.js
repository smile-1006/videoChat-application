import React from 'react'
import logo from "../resources/images/logo.png"

import "./introductionPage.css"

const introductionPage =(props) => {
    return (
        <div className='introduction_page_container'>
            <div className='introduction_page_panel'>
                <img src = {logo} className='introduction_page_image'></img>
                Buttons
            </div>
        </div>
    )
}

export default introductionPage 