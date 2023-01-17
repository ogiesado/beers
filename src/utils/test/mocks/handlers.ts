import { rest } from 'msw';
import { ApiBeer, BEERS_API } from '../../../common';
import { makeBeer } from '../../factory';

export const getBeerHandler = (beer: ApiBeer = makeBeer()[0]) => {
  return rest.get(`${BEERS_API}/:beerId`, (req, res, ctx) => {
    const { beerId } = req.params;

    if (Number(beerId) !== beer.id) {
      return res(
        ctx.status(404),
        ctx.json({
          statusCode: 404,
          error: 'Not Found',
          message: `Beer not found for ID ${beerId}`,
        })
      );
    }
    return res(ctx.status(200), ctx.json([beer]));
  });
};

export const getBeersHandler = (beers: ApiBeer[] = makeBeer(2)) => {
  return rest.get(BEERS_API, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(beers));
  });
};

export const handlers = [getBeersHandler(), getBeerHandler()];
