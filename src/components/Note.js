import { useState } from "react";
import { MdDeleteForever, MdOutlineChangeCircle } from "react-icons/md";

const Note = ({id, text, date, hundleDeleteNote, hundleChangeNote}) => {

    const [noteText, setNoteText] = useState ('');
    const textlimit = 200;
    const [style, setStyle] = useState(false);
 
    const hundelEdit = (event) => {
        setStyle(true)
        if(textlimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }
    }

    const hundleSaveClick = () => {
        if(noteText.trim().length > 0) {
            hundleChangeNote(id,noteText)
            setNoteText('')
            setStyle(false)
        }  
    }

    return (
        <div className="note">
            <textarea className="text" defaultValue={text} onChange={hundelEdit}></textarea>
            <div className="note-footer">
                <small>{date}</small>
                <div>
                    <MdOutlineChangeCircle onClick={() => hundleSaveClick(id)} className={style ? 'change-icon-activity':'change-icon'} size="1.3em" disabled = {text}/>
                    {/* <MdOutlineChangeCircle onClick={() => hundleChangeNote(id)} className="change-icon" size="1.3em" /> */}
                    <MdDeleteForever onClick={() => hundleDeleteNote(id)} className="delete-icon" size="1.3em" />
                </div>
            </div>
        </div>
    )
}

export default Note;