import './App.css';
import { useState } from 'react';
import { useStores } from './stores';
import { useObserver } from 'mobx-react';
import styled from 'styled-components';

function App() {
  const { noteStore, userStore } = useStores();
  const [note, setNote] = useState('');

  const handleNameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    userStore.setUserName(e.target.value);
  };

  const hanldeNoteChange = (e) => {
    e.preventDefault();
    setNote(e.target.value);
  };

  const addNote = () => {
    noteStore.addNote(note);
  };

  return useObserver(() => (
    <Block>
      <NameBlock>
        <h1>hello {userStore.name}</h1>
        <h2>Change your name here</h2>
        <input
          type="text"
          value={userStore.name}
          onChange={(e) => handleNameChange(e)}
        />
      </NameBlock>
      <NoteBlock>
        <h2>Insert note</h2>
        <input type="text" value={note} onChange={(e) => hanldeNoteChange(e)} />
        <button type="button" onClick={addNote}>
          Add Note
        </button>

        <h2>Note List</h2>
        {noteStore?.notes?.length ? (
          noteStore.notes.map((note, idx) => (
            <div key={idx}>
              <h3>from {note.username}</h3>
              <code>{note.note}</code>
            </div>
          ))
        ) : (
          <p>No note on the list</p>
        )}
      </NoteBlock>
    </Block>
  ));
}

const Block = styled.div`
  min-width: 1200px;
`;

const NameBlock = styled.div``;

const NoteBlock = styled.div``;

export default App;
