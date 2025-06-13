import React from "react";
import VideoButtons from "./VideoButtons";

const VideoSection = () => {
  return (
    <div className="video_section_container">
      <div className="videos_container">
        <div id="videos_portal"></div>
      </div>
      <VideoButtons />
    </div>
  );
};

export default VideoSection;