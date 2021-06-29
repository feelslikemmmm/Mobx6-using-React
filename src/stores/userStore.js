import { makeAutoObservable } from 'mobx';

class userStore {
  name = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUserName = (name) => {
    this.name = name;
  };
}

export default userStore;
