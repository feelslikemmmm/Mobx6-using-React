import UserStore from './userStore';
import NoteStore from './noteStore';

class RootStore {
  constructor() {
    this.userStore = new UserStore();
    this.noteStore = new NoteStore();
  }
}
