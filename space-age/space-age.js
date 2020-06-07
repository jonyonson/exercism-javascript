//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, ageInSeconds) => {
  const YEAR_IN_SECONDS = 31_557_600;

  const map = {
    mercury: YEAR_IN_SECONDS * 0.2408467,
    earth: YEAR_IN_SECONDS,
    venus: YEAR_IN_SECONDS * 0.61519726,
    mars: YEAR_IN_SECONDS * 1.8808158,
    jupiter: YEAR_IN_SECONDS * 11.862615,
    saturn: YEAR_IN_SECONDS * 29.447498,
    uranus: YEAR_IN_SECONDS * 84.016846,
    neptune: YEAR_IN_SECONDS * 164.79132,
  };

  return Number((ageInSeconds / map[planet]).toFixed(2));
};
