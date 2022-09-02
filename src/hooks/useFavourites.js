import {useEffect, useState} from "react";

export const useFavourites = () => {
    const [favourites, setFavourites] = useState({})

    useEffect(() => {
        setFavourites(JSON.parse(
            localStorage.getItem('favourites') || '{}'
        ))
    }, [])

    function setFavourite(joke) {
        let favouritesData = {...favourites}

        if (!favouritesData[joke.id]) {
            joke.saved_date = new Date()
            favouritesData[joke.id] = joke
        } else {
            delete favouritesData[joke.id]
        }

        setFavourites(favouritesData)
        localStorage.setItem('favourites', JSON.stringify(favouritesData))
    }

    return [favourites, setFavourite]
}