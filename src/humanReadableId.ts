import { adjectives } from "./adjectives";
import { animals } from "./animals";
import { getRandomIntegerInRange } from "./getRandomIntegerInRange";

export type HumanReadableId = () => string;

const animalsLength = animals.length;
const adjectivesLength = adjectives.length;

export const humanReadableId: HumanReadableId = () => {
  const randomAdjectiveIndex = getRandomIntegerInRange(0, adjectivesLength - 1);
  const randomAdjective = adjectives[randomAdjectiveIndex];

  const randomAnimalIndex = getRandomIntegerInRange(0, animalsLength - 1);
  const randomAnimal = animals[randomAnimalIndex];

  const randomNumber = getRandomIntegerInRange(0, 100);

  return `${randomAdjective}-${randomAnimal}-${randomNumber}`;
};
