import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import JoinRoomTitle from "../JoinRoomPage/JoinRoomTitle";
import JoinRoomContent from "../JoinRoomPage/JoinRoomContent";
import JoinRoomInputs from "../JoinRoomPage/JoinRoomInputs";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";
import "../JoinRoomPage/JoinRoomPages.css";

const JoinRoomPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isHost = queryParams.get("host") === "true";

  const [connectOnlyWithAudio, setConnectOnlyWithAudio] = useState(false);
  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  return (
    <div className="join-room-page">
      <JoinRoomTitle />
      <JoinRoomContent isRoomHost={isHost} />
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isHost}
      />
      <OnlyWithAudioCheckbox
        connectOnlyWithAudio={connectOnlyWithAudio}
        setConnectOnlyWithAudio={setConnectOnlyWithAudio}
        isRoomHost={isHost}
      />
    </div>
  );
};

export default JoinRoomPage;
