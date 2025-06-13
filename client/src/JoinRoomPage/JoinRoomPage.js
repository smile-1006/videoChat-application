import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import JoinRoomTitle from "./JoinRoomTitle";
import JoinRoomContent from "./JoinRoomContent";

import "./JoinRoomPages.css";

const JoinRoomPage = ({ setIsRoomHostAction }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isRoomHost = queryParams.get("host") === "true";

  useEffect(() => {
    setIsRoomHostAction(isRoomHost);
  }, [isRoomHost, setIsRoomHostAction]);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent isRoomHost={isRoomHost} />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(JoinRoomPage);