import {useState} from "react";

export const useJokes = () => {
    const [jokes, setJokes] = useState([])
    const appendJoke = (joke) => {
        if (joke.result) {
            setJokes([...joke.result, ...jokes])
        } else {
            setJokes([joke, ...jokes])
        }
    }

    return [jokes, appendJoke]
}