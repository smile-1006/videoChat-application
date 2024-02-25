import Actions from "./actions"

const initState = {  
    identity: "",
    isRoomHOst: false,
};

const reducer = (state = initState, action) =>{
    switch(action.type){
        case Actions.SET_IS_ROOM_HOST:
            return {
                ...state,
                isRoomHOst: action.isRoomHOst,
                //identity: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
