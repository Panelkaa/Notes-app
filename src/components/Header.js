import React from "react";

const Header = ({ hundleToggleDarkMode }) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button onClick={() => 
                hundleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode
                )} className="save">Toggle Mode</button>
        </div>
    )
}

export default Header;