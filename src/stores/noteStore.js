import { makeAutoObservable } from 'mobx';
class NoteStore {
  notes = [];
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  addNote(note) {
    let sendNote = { note };
    if (this.rootStore.userStore.name) {
      sendNote.username = this.rootStore.userStore.name;
    }
    this.notes.push(sendNote);
  }
}

export default NoteStore;
