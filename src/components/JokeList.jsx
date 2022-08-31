import React from 'react';
import Joke from "./Joke";

const JokeList = ({list}) => {
    return (
        <div className="jokes">
            {list.map(joke =>
                <Joke
                    key={joke.id}
                    joke={joke}
                    isLiked={false}
                />
            )}
        </div>
    );
};

export default JokeList;