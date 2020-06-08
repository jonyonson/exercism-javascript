//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();
  if (message === '') {
    return 'Fine. Be that way!';
  }

  if (message.endsWith('?')) {
    if (message.toUpperCase() === message && message.match(/[a-z]/i)) {
      return "Calm down, I know what I'm doing!";
    }
    return 'Sure.';
  }

  if (message.toUpperCase() === message) {
    if (!message.match(/[a-z]/i)) {
      return 'Whatever.';
    }
    return 'Whoa, chill out!';
  }

  return 'Whatever.';
};
