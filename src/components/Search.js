import React from "react";
import { MdSearch } from 'react-icons/md';

const Search = ({ hundleSearchNote }) => {
    return (
        <div className="search">
            <MdSearch className='search-icons' size = '1.3rem'/>
            <input 
                onChange={(event) => hundleSearchNote(event.target.value)} 
                type='text' 
                placeholder="Type to search..."
            />
        </div>
    )
}

export default Search;