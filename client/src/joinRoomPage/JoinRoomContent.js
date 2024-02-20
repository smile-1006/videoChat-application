import React, {useState} from 'react'
import JoinRoomInputs from './JoinRoomInputs';

const JoinRoomContent = (props) => {
  const [roomIdValue, setRoomIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  return <>
  <JoinRoomInputs
  roomIdValue={roomIdValue}
  setRoomIdValue={setRoomIdValue}
  nameValue={nameValue}
  setNameValue={setNameValue}
  isRoomHost={isRoomHost}
  />
  </>;
}

export default JoinRoomContent
