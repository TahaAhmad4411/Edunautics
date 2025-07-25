import { create } from 'zustand';

interface SearchStore {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useSearch = create<SearchStore>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));