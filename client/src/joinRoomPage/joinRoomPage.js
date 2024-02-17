import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { setIsRoomHost } from '../store/actions'

import './joinRoomPage.css'

const joinRoomPage = (props) => {
  const { setIsRoomHostAction } = props;
  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get('host');
    if (isRoomHost) {
      //setting in our redux store that user is host
      setIsRoomHostAction(true);
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

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    //setting in our redux store that user is host
    setIsRoomHostAction:(isRoomHost) => dispatch(setIsRoomHost(isRoomHost))
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(joinRoomPage)
