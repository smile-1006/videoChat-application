import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import './joinRoomPage.css'

const joinRoomPage = (props) => {

  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get('host');
    if (isRoomHost) {
      //setting in our redux store that user is host
    }
  }, [])

  return (
    <div className='join_room_page_container'>
      <div className='join_room_page_title'>
        Join a Meeting
        </div>
    </div>
  )
}

export default joinRoomPage
