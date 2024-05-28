import React from "react";
import MovieItem from "../movieItem/movieItem";

import "./movieList.css";


export default function MovieList({movieItems, formatDate}) {
    
    const renderingMovieItems = movieItems.map(movieItem => (<MovieItem key={movieItem.id} movieItem={movieItem} formatDate={formatDate} />));


    return (
        <div className="movieList">
            {renderingMovieItems}
        </div>
    );

}
