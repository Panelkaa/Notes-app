import Note from "./Note";
import AddNote from "./AddNote";

const NotesList  = ({ notes, hundleAddNote, hundleDeleteNote, hundleChangeNote }) => {
    return  (
        <div className="notes-list">
            {notes.map((note) => 
                <Note key={note.id} id={note.id} text={note.text} date={note.date}  hundleDeleteNote={hundleDeleteNote} hundleChangeNote={hundleChangeNote}/>
            )}
            <AddNote hundleAddNote={hundleAddNote}/> 
        </div>
    )
}

export default NotesList; 