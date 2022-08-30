import { MdDeleteForever, MdOutlineChangeCircle } from "react-icons/md";

const Note = ({id, text, date, hundleDeleteNote, hundleChangeNote}) => {
    return (
        <div className="note">
            <textarea className="text" defaultValue={text}></textarea>
            <div className="note-footer">
                <small>{date}</small>
                <div>
                    <MdOutlineChangeCircle onClick={() => hundleChangeNote(id)} className="change-icon" size="1.3em" />
                    <MdDeleteForever onClick={() => hundleDeleteNote(id)} className="delete-icon" size="1.3em" />
                </div>
            </div>
        </div>
    )
}

export default Note;