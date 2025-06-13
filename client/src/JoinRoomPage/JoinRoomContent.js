import React, { useState, useEffect } from "react";
import JoinRoomInputs from "./JoinRoomInputs";
import { connect } from "react-redux";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";
import {
  setConnectOnlyWithAudio,
  setIdentity,
  setRoomId,
} from "../store/actions";
import ErrorMessage from "./ErrorMessage";
import JoinRoomButtons from "./JoinRoomButtons";
import { useNavigate } from "react-router-dom";
import { getRoomExists } from "../utils/api";
import { createNewRoom } from "../utils/wss";

const JoinRoomContent = (props) => {
  const {
    isRoomHost,
    setConnectOnlyWithAudio,
    connectOnlyWithAudio,
    setIdentityAction,
    setRoomIdAction,
    roomId,
  } = props;

  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleJoinRoom = async () => {
    if (!nameValue.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!isRoomHost && !roomIdValue.trim()) {
      setErrorMessage("Please enter meeting ID.");
      return;
    }

    setIdentityAction(nameValue);
    if (isRoomHost) {
      createRoom();
    } else {
      await joinRoom();
    }
  };

  const joinRoom = async () => {
    try {
      const responseMessage = await getRoomExists(roomIdValue);
      const { roomExists, full } = responseMessage;

      if (roomExists) {
        if (full) {
          setErrorMessage("Meeting is full. Please try again later.");
        } else {
          setRoomIdAction(roomIdValue);
          navigate("/room");
        }
      } else {
        setErrorMessage("Meeting not found. Check your meeting ID.");
      }
    } catch (error) {
      console.error("Error checking room:", error);
      setErrorMessage("Error connecting to server. Please try again.");
    }
  };

  const createRoom = () => {
    createNewRoom(nameValue, connectOnlyWithAudio);
  };

  useEffect(() => {
    if (roomId) {
      navigate("/room");
    }
  }, [roomId, navigate]);

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
      <ErrorMessage errorMessage={errorMessage} />
      <JoinRoomButtons
        handleJoinRoom={handleJoinRoom}
        isRoomHost={isRoomHost}
      />
    </>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setConnectOnlyWithAudio: (onlyWithAudio) =>
      dispatch(setConnectOnlyWithAudio(onlyWithAudio)),
    setIdentityAction: (identity) => dispatch(setIdentity(identity)),
    setRoomIdAction: (roomId) => dispatch(setRoomId(roomId)),
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(JoinRoomContent);