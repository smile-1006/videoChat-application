import React from 'react'
import ConnectingButton from './ConnectingButton'
import {useHistory} from "react-router-dom"

const ConnectingButtons = () => {
    const history = useHistory();
    const pushToJoinRoomPage = () => {
        history.push('/join-room')
    }
    const pushToRoomPageAsHost = () => {
        history.push('/join-room?host=true')
    }
    return (
    <div className='connecting_buttons_container'>
        <ConnectingButton buttonText='join a meeting' onClickHandler={pushToJoinRoomPage}/>
        <ConnectingButton createRoomButton buttonText='host a meeting' onClickHandler={pushToRoomPageAsHost}/>
        
    </div>
    )
}

export default ConnectingButtons
