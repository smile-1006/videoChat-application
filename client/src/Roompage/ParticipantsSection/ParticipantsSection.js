import React from "react";
import ParticipantsLabel from "./ParticipantsLabel";
import Participants from "./participants";
import DirectChat from './DirectChat/DirectChat';

const ParticipantsSection = () => {
  return (
    <div className="participants_section_container">
      <ParticipantsLabel />
      <Participants />
      <DirectChat />
    </div>
  );
};

export default ParticipantsSection;
