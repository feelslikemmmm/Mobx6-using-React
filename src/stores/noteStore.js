import { makeAutoObservable } from 'mobx';

class noteStore {
  notes = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNote(note) {
    let sendNote = { note };
    this.notes.push(sendNote);
  }
}

export default noteStore;
