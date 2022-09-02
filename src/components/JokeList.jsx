import React, {useEffect, useState} from 'react';
import Joke from "./Joke";

const JokeList = ({list, favourites, setFavourite}) => {
    if (!list) {
        list = Object.values(favourites).sort((a, b) => {
            return new Date(b.saved_date).getTime() - new Date(a.saved_date).getTime()
        })
    }

    return (
        <div className="jokes">
            {list.map(joke =>
                <Joke
                    key={joke.id}
                    joke={joke}
                    isFavourite={favourites.hasOwnProperty(joke.id)}
                    setFavourite={setFavourite}
                />
            )}
        </div>
    );
};

export default JokeList;