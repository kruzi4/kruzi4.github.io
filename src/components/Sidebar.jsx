import React from 'react';
import JokeList from "./JokeList";

const Sidebar = ({favourites, setFavourite}) => {
    return (
        <aside className="sidebar">
            <h3 className="sidebar-title"><span className="burger active"></span><span>Favourite</span></h3>
            <div className="favourite-cards-wrapper">
                <div className="favourites">
                    <JokeList
                        favourites={favourites}
                        setFavourite={setFavourite}
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;