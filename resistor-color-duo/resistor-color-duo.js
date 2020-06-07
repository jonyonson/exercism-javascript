//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (bands) => {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  const color1 = COLORS.indexOf(bands[0]);
  const color2 = COLORS.indexOf(bands[1]);
  return Number(color1.toString() + color2.toString());
};
