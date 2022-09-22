import React, { useRef, useState, useEffect } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
    const [players, setPlayers] = React.useState([
        {
            name: 'Guil',
            score: 0,
            id: 1,
        },
        {
            name: 'Treasure',
            score: 0,
            id: 2,
        },
        {
            name: 'Ashley',
            score: 0,
            id: 3,
        },
        {
            name: 'James',
            score: 0,
            id: 4,
        },
    ]);

    const nextPlayerId = useRef(5);

    const handleRemovePlayer = (id) => {
        setPlayers((prevPlayers) => prevPlayers.filter((p) => p.id !== id));
    };

    const handleScoreChange = (id, delta) => {
        setPlayers((prevPlayers) =>
            prevPlayers.map((player) => {
                if (player.id === id) {
                    return {
                        name: player.name,
                        score: player.score + delta,
                        id: player.id,
                    };
                }
                return player;
            })
        );
    };

    const handleAddPlayer = (name) => {
        setPlayers((prevPlayers) => [
            ...prevPlayers,
            {
                name,
                score: 0,
                id: nextPlayerId.current++,
            },
        ]);
    };

    const [highScore, setHighScore] = useState();
    useEffect(() => {
        const score = players.map( player => player.score );
        setHighScore( Math.max(...score) )
    }, [players]);

    return (
        <div className="scoreboard">
            <Header title="Scoreboard" players={players} />

            {/* Players list */}
            {players.map((player) => (
                <Player
                    name={player.name}
                    score={player.score}
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={handleRemovePlayer}
                    changeScore={handleScoreChange}
                    isHighScore={player.score === highScore && highScore !== 0}
                />
            ))}
            <AddPlayerForm addPlayer={handleAddPlayer} />
        </div>
    );
};

export default App;
