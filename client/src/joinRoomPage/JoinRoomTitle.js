import React from 'react'

const JoinRoomTitle = ({isRoomHost}) => {
    const titleText = isRoomHost ? 'Start a Meeting' : 'Join a Meeting';

    return <p className='join_room_title'>{titleText}</p>
}

export default JoinRoomTitle;