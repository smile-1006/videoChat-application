import Actions from "./actions"

const initState = {  
    identity: "",
    isRoomHOst: false,
    connectOnlyWithAudio: false,
};

const reducer = (state = initState, action) =>{
    switch(action.type){
        case Actions.SET_IS_ROOM_HOST:
            return {
                ...state,
                isRoomHOst: action.isRoomHOst,
                //identity: action.payload
            };
        case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
            return {
                ...state,
                connectOnlyWithAudio: action.onlyWithAudio,
            };
        default:
            return state;
    }
}

export default reducer;
