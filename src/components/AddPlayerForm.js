import React, { useRef } from 'react';
import PropTypes from 'prop-types'

const AddPlayerForm = ({ addPlayer }) => {
    const playerInput = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        addPlayer(playerInput.current.value);
        event.currentTarget.reset();
    };

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input
                type="text"
                ref={playerInput}
                placeholder="Enter a player's name"
            />
            <input type="submit" value="Add Player" />
        </form>
    );
};

AddPlayerForm.protoTypes = {
    addPlayer: PropTypes.func
}

export default AddPlayerForm;
