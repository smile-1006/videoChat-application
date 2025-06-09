import React from "react";
import JoinRoomTitle from "../JoinRoomPage/JoinRoomTitle";
import JoinRoomInputs from "../JoinRoomPage/JoinRoomInputs";
import JoinroomButtons from "../JoinRoomPage/JoinroomButtons";
import ErrorMessage from "../JoinRoomPage/ErrorMessage";
import OnlyWithAudioCheckbox from "../JoinRoomPage/OnlyWithAudioCheckbox";

import "../JoinRoomPage/JoinRoomPage.css";

const JoinRoomPage = () => {
  return (
    <div className="join-room-container">
      <JoinRoomTitle />
      <JoinRoomInputs />
      <OnlyWithAudioCheckbox />
      <JoinroomButtons />
      <ErrorMessage />
    </div>
  );
};

export default JoinRoomPage;
