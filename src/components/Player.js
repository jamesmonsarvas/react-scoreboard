import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

const Player = ({ name, score, changeScore, id, removePlayer, isHighScore }) => {
    return (
        <div className="player">
            <span className="player-name">
                <button
                    className="remove-player"
                    onClick={() => removePlayer(id)}
                >
                    ✖
                </button>
                <Icon isHighScore={isHighScore} />
                {name}
            </span>

            <Counter score={score} changeScore={changeScore} id={id} />
        </div>
    );
};

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    changeScore: PropTypes.func,
    id: PropTypes.number,
    removePlayer: PropTypes.func,
    isHighScore: PropTypes.bool,
};

const playerPropsEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
};

export default memo(Player, playerPropsEqual);
