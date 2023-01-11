export interface Beer {
  id: number;
  name: string;
  abv: number;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export type ApiBeer = Omit<Beer, 'imageSrc' | 'imageAlt'> & {
  image_url: string;
};

export const mapApiBeerToBeer = (data: ApiBeer): Beer => {
  return {
    id: data.id,
    name: data.name,
    abv: data.abv,
    tagline: data.tagline,
    description: data.description,
    imageSrc: data.image_url,
    imageAlt: `Bottle of ${data.name}`,
  };
};
