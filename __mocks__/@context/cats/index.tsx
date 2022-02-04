const context = {
  cats: [],
  setCats: jest.fn(() => null),
};

export const useCatsContext = () => context;
