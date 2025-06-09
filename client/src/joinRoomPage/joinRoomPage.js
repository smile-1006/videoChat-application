import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import JoinRoomTitle from "./JoinRoomTitle";
import JoinRoomContent from "./JoinRoomContent";
import JoinRoomInputs from "./JoinRoomInputs";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";
import "./JoinRoomPages.css";

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
      <JoinRoomContent />
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
      />
    </div>
  );
};

export default JoinRoomPage;
