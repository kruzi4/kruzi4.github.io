import React from 'react';
import JokeList from "./JokeList";
import {useWindowSize} from "../hooks/useWindowSize";

const Sidebar = ({favourites, setFavourite, isOpenSidebar, show}) => {
    const [clientWidth] = useWindowSize()

    return (
        <>
            {(isOpenSidebar || clientWidth >= 1440) &&
            <aside className="sidebar">
                <h3 className="sidebar-title"><span
                    className="burger active"
                    onClick={() => show(false)}
                ></span><span>Favourite</span></h3>
                <div className="favourite-cards-wrapper">
                    <div className="favourites">
                        <JokeList
                            favourites={favourites}
                            setFavourite={setFavourite}
                        />
                    </div>
                </div>
            </aside>
            }
        </>
    );
};

export default Sidebar;