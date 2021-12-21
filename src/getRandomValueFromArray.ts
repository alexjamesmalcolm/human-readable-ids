import { getRandomIntegerInRange } from "./getRandomIntegerInRange";

type Diff<T, U> = T extends U ? never : T;
type NotNullable<T> = Diff<T, null | undefined>;

export const getRandomValueFromArray = <T extends unknown>(
  array: NotNullable<T>[]
) => {
  const arrayLength = array.length;
  return () => {
    const randomIndex = getRandomIntegerInRange(0, arrayLength - 1);
    const value = array[randomIndex];
    if (value === undefined) {
      throw new Error("Unable to acquire element from array");
    }
    return value;
  };
};
