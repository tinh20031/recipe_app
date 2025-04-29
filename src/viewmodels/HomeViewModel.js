import { makeAutoObservable } from 'mobx';
import { useLocalObservable } from 'mobx-react-lite';

class HomeViewModel {
  constructor() {
    makeAutoObservable(this);
  }

  handleButtonPress = () => {
    console.log('Button pressed');
  };
}

export const useHomeViewModel = () => {
  return useLocalObservable(() => new HomeViewModel());
}; 