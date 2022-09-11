import React from "react";
import { useState } from "react";

const Header = ({ hundleToggleDarkMode }) => {

    const [theme, setTheme] = useState(false);

    const hundleSaveClick = () => {
        if (theme) {
            setTheme(false)
        }else {
            setTheme(true)
        }
        hundleToggleDarkMode(
            (previousDarkMode) => !previousDarkMode
        )     
    }
    
    return (
        <div className="header">
            <h1>Notes</h1>
                <i onClick={hundleSaveClick}
                //  onClick={() => 
                // hundleToggleDarkMode(
                //     (previousDarkMode) => !previousDarkMode
                // )}
                className={theme ? "fa-solid fa-toggle-on" : "fa-solid fa-toggle-off"}></i>
        </div>
    )
}

export default Header;