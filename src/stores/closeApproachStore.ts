import { makeAutoObservable, runInAction } from 'mobx';
import { errorBoundaryStore } from './errorBoundaryStore';
import { fetchCloseApproachData } from '../services/api';

interface CloseApproach {
  des: string;
  dist: number;
  size: number;
  date: string;
}

class CloseApproachStore {
  data: CloseApproach[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.fetchData();
  }

  async fetchData() {
    try {
      this.loading = true;
      const result = await fetchCloseApproachData();

      const formattedData: CloseApproach[] = result.data.map((item: any) => ({
        des: item[0] || 'Unknown',
        dist: parseFloat(item[4]) || 0,
        size: parseFloat(item[12]) || 0,
        date: item[3] || 'Unknown Date',
      }));

      runInAction(() => {
        this.data = formattedData;
        this.error = null;
      });
    } catch (err) {
      runInAction(() => {
        const error = err as Error;
        this.error = error.message;
        errorBoundaryStore.setError(this.error ?? error.stack ?? 'API Error');
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export const closeApproachStore = new CloseApproachStore();
