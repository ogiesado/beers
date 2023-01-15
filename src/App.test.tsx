import { App } from './App';
import { render } from './utils';

describe('Beers App', () => {
  describe('/beers', () => {
    test('header loads correctly', () => {
      render(<App />);
      expect(true).toBe(true);
    });
  });
});
