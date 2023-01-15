import { faker } from '@faker-js/faker';
import { ApiBeer } from '../../common';

export const makeBeer = (
  number: number = 1,
  overrides?: Partial<ApiBeer>
): ApiBeer[] => {
  return Array(number)
    .fill(null)
    .map(() => {
      return {
        id: faker.datatype.number({ min: 1 }),
        name: faker.lorem.sentence(faker.datatype.number({ min: 1, max: 3 })),
        abv: faker.datatype.number({ min: 1, max: 100 }),
        ibu: faker.datatype.number({ min: 1, max: 100 }),
        ph: faker.datatype.number({ min: 1, max: 14 }),
        tagline: faker.lorem.sentence(),
        description: faker.lorem.sentences(),
        image_url: faker.image.image(),
        food_pairing: Array(faker.datatype.number({ min: 1, max: 3 }))
          .fill(null)
          .map(() => faker.lorem.sentence()),
        brewers_tips: faker.lorem.sentences(),
        ...overrides,
      };
    });
};
