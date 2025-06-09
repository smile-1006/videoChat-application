import React from "react";
import JoinRoomTitle from "./JoinRoomTitle";
import JoinRoomInputs from "./JoinRoomInputs";
import JoinroomButtons from "./JoinroomButtons";
import ErrorMessage from "./ErrorMessage";
import OnlyWithAudioCheckbox from "./OnlyWithAudioCheckbox";

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
