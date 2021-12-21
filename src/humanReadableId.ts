import { adjectives } from "./adjectives";
import { animals } from "./animals";
import { getRandomIntegerInRange } from "./getRandomIntegerInRange";

export const humanReadableId = (): string => {
  const randomAdjectiveIndex = getRandomIntegerInRange(
    0,
    adjectives.length - 1
  );
  const randomAdjective = adjectives[randomAdjectiveIndex];

  const randomAnimalIndex = getRandomIntegerInRange(0, animals.length - 1);
  const randomAnimal = animals[randomAnimalIndex];

  const randomNumber = getRandomIntegerInRange(0, 100);

  return `${randomAdjective}-${randomAnimal}-${randomNumber}`;
};
