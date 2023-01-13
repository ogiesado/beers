export interface Beer {
  id: number;
  name: string;
  abv: number;
  ibu: number;
  ph: number;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tip: string;
  foodPairings: string[];
}

export type ApiBeer = Omit<
  Beer,
  'imageSrc' | 'imageAlt' | 'foodPairings' | 'tip'
> & {
  image_url: string;
  food_pairing: string[];
  brewers_tips: string;
};

export const mapApiBeerToBeer = (data: ApiBeer): Beer => {
  return {
    id: data.id,
    name: data.name,
    abv: data.abv,
    ibu: data.ibu,
    ph: data.ph,
    tagline: data.tagline,
    description: data.description,
    imageSrc: data.image_url,
    imageAlt: `Bottle of ${data.name}`,
    foodPairings: data.food_pairing,
    tip: data.brewers_tips,
  };
};

export interface ApiError {
  statusCode: number;
  error: string;
  message: string;
}
