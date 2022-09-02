import './assets/styles/style.scss'
import FormControl from "./components/FormControl";
import JokeList from "./components/JokeList";
import Sidebar from "./components/Sidebar";
import {useFavourites} from "./hooks/useFavourites";
import {useJokes} from "./hooks/useJokes";

function App() {
    const [jokes, appendJoke] = useJokes()
    const [favourites, setFavourite] = useFavourites()

    return (
        <div className="page">
            <div className="mobile-top">
                <span className="burger"></span><span>Favourite</span>
            </div>
            <div className="content">
                <main className="main">
                    <h3 className="page-title">MSI 2020</h3>
                    <h1>Hey!</h1>
                    <h2 className="form-title">Let’s try to find a joke for you:</h2>
                    <FormControl
                        append={appendJoke}
                    />
                    <JokeList
                        favourites={favourites}
                        list={jokes}
                        setFavourite={setFavourite}
                    />
                </main>
                <Sidebar
                    favourites={favourites}
                    setFavourite={setFavourite}
                />
            </div>
        </div>
    );
}

export default App;
