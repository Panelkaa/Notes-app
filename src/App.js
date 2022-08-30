import { useState, useEffect, useLayoutEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';


const App = () => {
  const [notes, setNotes] = useState([
		
	]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }
  // edit note
  const editNotes = (id) => {
    const change = notes.filter((note) => note.id == id)
    // setNotes(change)
    console.log(change) 
  }

  return(
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className="container">
          <Header hundleToggleDarkMode = {setDarkMode}/>
          <Search hundleSearchNote={setSearchText}/>
          <NotesList notes={notes.filter((note) => 
              note.text.toLocaleLowerCase().includes(searchText))} 
              hundleAddNote={addNote} 
              hundleDeleteNote={deleteNote}
              hundleChangeNote={editNotes}         
            />
      </div>
    </div>
  )
}

export default App;