import React, { useContext, useEffect, useState } from "react";
import { Rate } from "antd";
import { ThemeContext, themes } from "../app/app";
import { Skeleton } from "antd";
import { getImageURL } from "../../services";

import "./movieItem.css";


export default function MovieItem({movieItem, formatDate}) {

    let [isLoading, setIsLoading] = useState(true);


    const themeContext = useContext(ThemeContext);
    // <img className="movieItem-image" src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`} alt="" /> || 

    return (
        <div className="movieItem" style={{backgroundColor: themes[themeContext]["card_bg"]}}>
            <div className="movieItem-left">
                {/* {isLoading ? 
                    <Skeleton.Image active style={{height: "100%", width: "100%"}} />
                : 
                    <img className="movieItem-image" src={} alt="" />
                } */}
                <Img movieItem={movieItem}/>
            </div>
            <div className="movieItem-right">
                <div className="movieItem-header">
                    <div className="movieItem-title">{movieItem.title}</div>
                    <div className="movieItem-reldate">Release date: {movieItem.release_date ? formatDate(movieItem.release_date) : "Unset"}</div>
                </div>
                <div className="movieItem-description">{movieItem.overview}</div>
                <div className="movieItem-footer" style={{background: themes[themeContext]["card_bg"]}}>
                    <Rate count={10} allowHalf={true} style={{fontSize: "25px", background: themes[themeContext]["card_bg"]}} />
                </div>
            </div>
        </div>
    );

}


function Img({movieItem}) {
    const [url, setUrl] = useState('');
    useEffect(() => {
        
    }, []);
    
    if (!url) {
        return (<Skeleton.Image active style={{height: "100%", width: "100%"}} />);
    }
        
    return (<img className="movieItem-image" src={url} alt="" />);
}
