import React from 'react';
import UserStore from './userStore';
import NoteStore from './noteStore';

class RootStore {
  constructor() {
    this.userStore = new UserStore();
    this.noteStore = new NoteStore();
  }
}

const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);
