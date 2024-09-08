import { makeAutoObservable } from 'mobx';

class ErrorBoundaryStore {
  public error?: string;

  constructor() {
    makeAutoObservable(this);
  }

  public setError = (error?: string) => {
    console.log('setError, error', error)
      this.error = error;
  }

  public clearError = () => {
      this.error = undefined;
  }
}

export const errorBoundaryStore = new ErrorBoundaryStore();
