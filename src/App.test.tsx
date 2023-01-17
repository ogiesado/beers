import { App } from './App';
import {
  getBeersHandler,
  makeBeer,
  server,
  render,
  screen,
  within,
  userEvent,
  getBeerHandler,
} from './utils';
import { BEERS_ROUTE, FAVOURITES_ROUTE } from './common';
import { faker } from '@faker-js/faker';

describe('Beers App', () => {
  test('header loads correctly', async () => {
    // When
    render(<App />);

    const header = await screen.findByRole('banner');

    // Expect
    expect(
      within(header).getByRole('heading', { level: 1, name: 'Beers' })
    ).toBeInTheDocument();

    expect(within(header).getByText('Favourites (0)')).toBeInTheDocument();
  });

  test('beers are listed', async () => {
    // Given
    const beers = makeBeer(3);
    server.use(getBeersHandler(beers));

    // When
    render(<App />);

    // Expect
    expect(
      await screen.findByRole('heading', { name: 'All Beers' })
    ).toBeInTheDocument();

    for (const beer of beers) {
      expect(screen.getByText(beer.name)).toBeInTheDocument();
      expect(screen.getByText(beer.tagline)).toBeInTheDocument();
    }
  });

  test('next page beers are listed', async () => {
    // Given
    const initialBeers = makeBeer(3);
    const nextBeers = makeBeer(3);
    server.use(getBeersHandler(initialBeers));

    // When
    render(<App />);

    const nextButton = await screen.findByRole('button', { name: 'Next' });

    server.use(getBeersHandler(nextBeers));

    await userEvent.click(nextButton);

    // Expect
    expect(
      await screen.findByRole('heading', { name: 'All Beers' })
    ).toBeInTheDocument();

    for (const beer of nextBeers) {
      expect(screen.getByText(beer.name)).toBeInTheDocument();
      expect(screen.getByText(beer.tagline)).toBeInTheDocument();
    }
  });

  test('previous page beers are listed', async () => {
    // Given
    const initialBeers = makeBeer(3);
    const nextBeers = makeBeer(3);
    server.use(getBeersHandler(initialBeers));

    // When
    render(<App />);

    const nextButton = await screen.findByRole('button', { name: 'Next' });

    server.use(getBeersHandler(nextBeers));

    await userEvent.click(nextButton);

    const prevButton = await screen.findByRole('button', { name: 'Previous' });

    server.use(getBeersHandler(initialBeers));

    await userEvent.click(prevButton);

    // Expect
    expect(
      await screen.findByRole('heading', { name: 'All Beers' })
    ).toBeInTheDocument();

    for (const beer of initialBeers) {
      expect(screen.getByText(beer.name)).toBeInTheDocument();
      expect(screen.getByText(beer.tagline)).toBeInTheDocument();
    }
  });

  test('beer details is shown', async () => {
    // Given
    const beers = makeBeer(3);
    server.use(getBeersHandler(beers));

    // When
    render(<App />);

    await screen.findByRole('heading', { name: 'All Beers' });

    // Expect
    for (const beer of beers) {
      const beerElement = screen.getByText(beer.name);

      server.use(getBeerHandler(beer));

      await userEvent.click(beerElement);

      await screen.findByRole('heading', { level: 2, name: beer.name });

      expect(global.location.pathname).toBe(`${BEERS_ROUTE}/${beer.id}`);

      expect(screen.getByText(beer.tagline)).toBeInTheDocument();
      expect(screen.getByText(beer.description)).toBeInTheDocument();

      expect(screen.getByText(`${beer.abv}%`)).toBeInTheDocument();
      expect(screen.getByText(beer.ph)).toBeInTheDocument();
      expect(screen.getByText(beer.ibu)).toBeInTheDocument();

      beer.food_pairing.forEach((food) =>
        expect(screen.getByText(food)).toBeInTheDocument()
      );

      expect(screen.getByText(beer.brewers_tips)).toBeInTheDocument();

      // Return back to all beers page

      const allBeersElement = screen.getByText('All Beers');

      await userEvent.click(allBeersElement);

      await screen.findByRole('heading', { name: 'All Beers' });
    }
  });

  test('adds to favourites', async () => {
    // Given
    const beers = makeBeer(2);
    const favourites = makeBeer(3);
    const allBeers = faker.helpers.shuffle([...beers, ...favourites]);

    let favouriteCount = 0;

    server.use(getBeersHandler(allBeers));

    // When
    render(<App />);

    await screen.findByRole('heading', { name: 'All Beers' });

    // Expect
    for (const favourite of favourites) {
      favouriteCount++;

      const favouriteElement = screen.getByText(favourite.name);

      server.use(getBeerHandler(favourite));

      await userEvent.click(favouriteElement);

      await screen.findByRole('heading', { level: 2, name: favourite.name });

      const addFavouriteElement = await screen.findByRole('button', {
        name: 'Add to favourites',
      });

      await userEvent.click(addFavouriteElement);

      expect(
        await screen.findByRole('button', { name: 'Remove from favourites' })
      ).toBeInTheDocument();

      const favouritesLink = within(
        await screen.findByRole('banner')
      ).getByText(`Favourites (${favouriteCount})`);

      await userEvent.click(favouritesLink);

      await screen.findByRole('heading', { level: 2, name: 'Favourites' });

      expect(global.location.pathname).toBe(FAVOURITES_ROUTE);

      expect(screen.getByText(favourite.tagline)).toBeInTheDocument();
      expect(screen.getByText(favourite.name)).toBeInTheDocument();

      // Return back to all beers page

      const allBeersElement = screen.getByText('All beers');

      await userEvent.click(allBeersElement);

      await screen.findByRole('heading', { name: 'All Beers' });
    }
  });
});
