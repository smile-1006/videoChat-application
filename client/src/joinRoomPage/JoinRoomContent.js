import React, {useState} from 'react'
import JoinRoomInputs from './JoinRoomInputs';
import {connect} from 'react-redux';
import OnlyWithAudioCheckbox from './OnlyWithAudioCheckbox';
import {setConnectOnlyWithAudio} from '../store/actions';

const JoinRoomContent = (props) => {
  const {isRoomHost, setConnectOnlyWithAudio,connectOnlyWithAudio} = props;

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
        <OnlyWithAudioCheckbox 
        setConnectOnlyWithAudio={setConnectOnlyWithAudio}
        connectOnlyWithAudio={connectOnlyWithAudio}
        />
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
