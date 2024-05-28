import React from "react";
import Header from "../header/header";
import Main from "../main/main";
import { format, parseISO } from 'date-fns';
import { useState, useEffect } from "react";
import { getMovies, createRequestSession, searchMovies } from "../../services";

import arrow_up_image from "../../images/arrow_up.png";

import "./app.css";


const ThemeContext = React.createContext(); export {ThemeContext};

const themes = {
    light: {
        "bg": "#ffffff",
        "card_bg": "#eaeaea",
        "text_color": "#000000",
        "star_color": "#e1a400",
        "input_color": "#eaeaea"
    }, dark: {
        "bg": "#202020",
        "card_bg": "#101010",
        "text_color": "#eaeaea",
        "star_color": "#303030",
        "input_color": "#181818"
    }
}; export {themes};


export default function App() {

    const [movieItems, setMovieItems] = useState([]);
    const [currentMode, setCurrentMode] = useState("now_playing"); // now_playing, popular, top_rated, upcoming, search
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [scroll, setScroll] = useState(0);
    const [searchValue, setSearchValue] = useState("");
    const [currentTheme, setCurrentTheme] = useState("light");


    useEffect(() => {
        document.body.style.backgroundColor = themes[currentTheme]["bg"];
    }, [currentTheme]);

    useEffect(() => {
        if (currentMode !== "search") {
            getMovies(currentMode, currentPage).then(data => {
                setMovieItems(data.results);
                setTotalPages(Number.parseInt(data.total_pages < 500 ? data.total_pages : 500) * 20);
            });
        } else {
            searchMovies(searchValue).then(data => setMovieItems(data.results));
        }
    }, [currentMode, currentPage]);

    useEffect(() => {
        if (searchValue) {
            setCurrentMode("search");
        } else {
            setCurrentMode("now_playing");
        }
    }, [searchValue]);

    useEffect(() => {
        window.addEventListener("scroll", () => setScroll(window.scrollY));
        return () => window.removeEventListener("scroll", () => setScroll(window.scrollY));
    }, []);


    const formatDate = date => {
        const day = format(parseISO(date), "d");
        const month = format(parseISO(date), "MMM");
        const year = format(parseISO(date), "Y");
        return `${month} ${day}, ${year}`;
    }

    const convertMode = mode => {
        switch (mode) {
            case "now_playing": return "Now playing"
            case "popular": return "Popular"
            case "top_rated": return "Top rated"
            case "upcoming": return "Upcoming"        
            default: return "Now playing"
        }
    }

    // createRequestSession().then(data => console.log(data));


    return (
        <div className="app" style={{backgroundColor: themes[currentTheme]["bg"], color: themes[currentTheme]["text_color"]}}>
            <ThemeContext.Provider value={currentTheme}>
                <Header currentMode={currentMode} setCurrentMode={setCurrentMode} convertMode={convertMode} setSearchValue={setSearchValue} />
                <Main movieItems={movieItems} formatDate={formatDate} currentPage={currentPage} setCurrentPage={page => setCurrentPage(page)}
                    totalPages={totalPages} />
            </ThemeContext.Provider>
            <button className={scroll < 300 ? "upButton" : "upButton active"} onClick={() => window.scrollTo(0, 0)}>
                <img src={arrow_up_image} width={"100%"} alt="Go up" />
            </button>
        </div>
    );

}
