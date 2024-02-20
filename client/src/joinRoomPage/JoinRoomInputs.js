import React from 'react'

const Input = ({placeholder, value, changeHandler}) => {
    return(
        <input
        value={value}
        onChange={changeHandler}
        className='join_room_input'
        placeholder={placeholder}
        
        />
    )
}
const JoinRoomInputs = (props) => {
    const {roomIdValue, setRoomIdValue, nameValue, setNameValue, isRoomHost} = props;
    
    const handleRoomIdValueChange = (event) => {
        setRoomIdValue(event.target.value);
    }

    const handleNameIdValueChange = (event) => {
        setNameValue(event.target.value);
    }

    return (
    <div className='join_room_inputs_container'>
        {!isRoomHost && <Input
        placeholder='Enter the room ID'
        value={roomIdValue}
        changeHandler={handleRoomIdValueChange}

        />}
        <Input
        placeholder='Enter your name'
        value={nameValue}
        changeHandler={handleNameIdValueChange}
        />
    </div>
    )
}

export default JoinRoomInputs


