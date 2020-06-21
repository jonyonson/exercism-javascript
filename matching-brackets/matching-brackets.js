//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (str) => {
  const openToClose = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  const isLeftBracket = (char) => Object.keys(openToClose).includes(char);
  const isRightBracket = (char) => Object.values(openToClose).includes(char);

  let stack = [];

  for (const char of str) {
    if (isLeftBracket(char)) {
      stack.push(openToClose[char]);
    } else if (isRightBracket(char)) {
      if (stack.length === 0 || stack.pop() !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
