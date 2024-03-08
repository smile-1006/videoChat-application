import React, {useState} from 'react'
import JoinRoomInputs from './JoinRoomInputs';
import {connect} from 'react-redux';
import onlyWithAudioCheckbox from './onlyWithAudioCheckbox';
import {setConnectOnlyWithAudio} from '../redux/actions';

const JoinRoomContent = (props) => {
  const {isRoomHost} = props;

  const [roomIdValue, setRoomIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
        />
        <onlyWithAudioCheckbox/>
      </>
    )
}

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  }
}

const mapActionStateToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudio:(onlyWithAudio) => dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
  }
}
export default connect(mapStoreStateToProps, mapActionStateToProps )(JoinRoomContent)
