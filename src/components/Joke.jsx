import React from 'react';
import messageIco from '../assets/images/svg/message.svg'
import {getLastUpdateHoursAgo} from "../utils/moment";

const Joke = ({joke, isLiked}) => {
    return (
        <div className="joke">
            <div className="joke-actions">
                <span className={"like " + (isLiked ? 'liked' : '')}></span>
            </div>
            <div className="joke-icon">
                <div className="circle">
                    <img src={messageIco} alt="message" />
                </div>
            </div>
            <div className="joke-data">
                <div className="joke-id">
                    <span>ID: </span><a
                    href={"https://api.chucknorris.io/jokes/" + joke.id}>{joke.id}</a>
                </div>
                <div className="joke-text">{joke.value}</div>
                <div className="joke-footer">
                    <div className="joke-updated">
                        <span>Last update: <b>{getLastUpdateHoursAgo(joke.updated_at)} hours ago</b></span>
                    </div>
                    {joke.categories[0] &&
                        <div className="joke-category category-tag">{joke.categories[0]}</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Joke;