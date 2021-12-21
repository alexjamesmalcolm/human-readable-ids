import { adjectives } from "./adjectives";
import { animals } from "./animals";
import { getRandomIntegerInRange } from "./getRandomIntegerInRange";
import { getRandomValueFromArray } from "./getRandomValueFromArray";

export type HumanReadableId = () => string;

const randomAdjectiveCallback = getRandomValueFromArray(adjectives);
const randomAnimalCallback = getRandomValueFromArray(animals);

export const humanReadableId: HumanReadableId = () => {
  const randomAdjective = randomAdjectiveCallback();

  const randomAnimal = randomAnimalCallback();

  const randomNumber = getRandomIntegerInRange(0, 100);

  return `${randomAdjective}-${randomAnimal}-${randomNumber}`;
};
