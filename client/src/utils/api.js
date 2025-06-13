import axios from "axios";

// Set serverApi to backend base URL without /api suffix
const serverApi = process.env.REACT_APP_SERVER_API || "http://localhost:8080";

// Append /api explicitly in API calls
export const getRoomExists = async (roomId) => {
  const response = await axios.get(`${serverApi}/api/room-exists/${roomId}`);
  return response.data;
};

export const getTURNCredentials = async () => {
  const response = await axios.get(`${serverApi}/api/get-turn-credentials`);
  return response.data;
};
