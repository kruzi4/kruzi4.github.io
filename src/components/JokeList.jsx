import React, {useEffect, useState} from 'react';
import Joke from "./Joke";

const JokeList = ({list}) => {
    const [favourites, setFavourites] = useState({})

    useEffect(() => {
        setFavourites(JSON.parse(
            localStorage.getItem('favourites') || '{}'
        ))
    }, [])

    function setFavourite(joke) {
        let favouritesData = {...favourites}

        if (!favouritesData[joke.id]) {
            favouritesData[joke.id] = joke
        } else {
            delete favouritesData[joke.id]
        }

        setFavourites(favouritesData)
        localStorage.setItem('favourites', JSON.stringify(favouritesData))
    }

    return (
        <div className="jokes">
            {list.map(joke =>
                <Joke
                    key={joke.id}
                    joke={joke}
                    isFavourite={favourites.hasOwnProperty(joke.id)}
                    favourite={setFavourite}
                />
            )}
        </div>
    );
};

export default JokeList;