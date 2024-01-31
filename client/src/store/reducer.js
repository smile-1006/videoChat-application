const initialState = {  
    identity: '',
};

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'DUMMY_ACTION':
            return {
                ...state,
                //identity: action.payload
            };
        default:
            return state;
    }
}

export default reducer;
