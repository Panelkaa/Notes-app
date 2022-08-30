import { useState } from "react";

const AddNote = ({ hundleAddNote }) => {

    const [noteText, setNoteText] = useState ('');
    const textlimit = 200;

    const hundelChange = (event) => {
        if(textlimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
        
    }

    const hundleSaveClick = () => {
        if(noteText.trim().length > 0) {
            hundleAddNote(noteText)
            setNoteText('')
        }  
    }
    return (
        <div className="note new">
            <textarea 
                rews="8" 
                cols="10" 
                placeholder="Type to add a note"
                onChange={hundelChange}
                value={noteText}>           
            </textarea>
            <div className="note-footer">
                <small>{textlimit - noteText.length} remaining</small>
                <button className="save" onClick={hundleSaveClick}>Save</button>
            </div>
        </div>
    )
}   

export default AddNote;