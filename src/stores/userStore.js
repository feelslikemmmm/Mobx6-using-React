import { makeAutoObservable } from 'mobx';

class UserStore {
  name = 'kim';

  constructor() {
    makeAutoObservable(this);
  }

  setUserName = (name) => {
    this.name = name;
  };
}

export default UserStore;
