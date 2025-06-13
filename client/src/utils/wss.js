import io from "socket.io-client";
import { setRoomId, setParticipants, setSocketId } from "../store/actions";
import store from "../store/store";
import * as webRTCHandler from "./webRTCHandler";
import { appendNewMessageToChatHistory } from "./directMessages";

const SERVER = process.env.REACT_APP_SERVER_API || "http://localhost:8080";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io(SERVER, {
    transports: ['websocket', 'polling']
  });

  socket.on("connect", () => {
    console.log("Successfully connected with socket.io server");
    console.log("Socket ID:", socket.id);
    store.dispatch(setSocketId(socket.id));
  });

  socket.on("connect_error", (error) => {
    console.error("Socket connection error:", error);
  });

  socket.on("room-id", (data) => {
    const { roomId } = data;
    console.log("Received room ID:", roomId);
    store.dispatch(setRoomId(roomId));
  });

  socket.on("room-update", (data) => {
    const { connectedUsers } = data;
    console.log("Room update:", connectedUsers);
    store.dispatch(setParticipants(connectedUsers));
  });

  socket.on("conn-prepare", (data) => {
    const { connUserSocketId } = data;
    console.log("Preparing connection for:", connUserSocketId);
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, false);
    socket.emit("conn-init", { connUserSocketId: connUserSocketId });
  });

  socket.on("conn-signal", (data) => {
    console.log("Received signaling data");
    webRTCHandler.handleSignalingData(data);
  });

  socket.on("conn-init", (data) => {
    const { connUserSocketId } = data;
    console.log("Initializing connection for:", connUserSocketId);
    webRTCHandler.prepareNewPeerConnection(connUserSocketId, true);
  });

  socket.on("user-disconnected", (data) => {
    console.log("User disconnected:", data);
    webRTCHandler.removePeerConnection(data);
  });

  socket.on("direct-message", (data) => {
    appendNewMessageToChatHistory(data);
  });
};

export const createNewRoom = (identity, onlyAudio) => {
  const data = {
    identity,
    onlyAudio,
  };

  console.log("Creating new room with data:", data);
  socket.emit("create-new-room", data);
};

export const joinRoom = (identity, roomId, onlyAudio) => {
  const data = {
    roomId,
    identity,
    onlyAudio,
  };

  console.log("Joining room with data:", data);
  socket.emit("join-room", data);
};

export const signalPeerData = (data) => {
  socket.emit("conn-signal", data);
};

export const sendDirectMessage = (data) => {
  socket.emit("direct-message", data);
};