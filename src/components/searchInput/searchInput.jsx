import React, { useContext } from "react";
import { debounce } from "lodash";
import { themes, ThemeContext } from "../app/app";

import "./searchInput.css";


export default function SearchInput({setSearchValue}) {

    const themeContext = useContext(ThemeContext);

    const inputHandler = e => {
        setSearchValue(e.target.value);
    }

    const debounce1 = debounce(inputHandler, 500)


    return (
        <div className="searchInput">
            <input onChange={debounce1} className="searchInput__input" type="text" style={{backgroundColor: themes[themeContext]["input_color"], 
            border: `3px solid ${themes[themeContext]["card_bg"]}`, color: themes[themeContext]["text_color"]}} placeholder={"Enter movie name..."} />
        </div>
    );

}
