//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim();

  if (isEmptyMessage(message)) {
    return 'Fine. Be that way!';
  } else if (isYelling(message) && isQuestion(message)) {
    return "Calm down, I know what I'm doing!";
  } else if (isQuestion(message)) {
    return 'Sure.';
  } else if (isYelling(message)) {
    return 'Whoa, chill out!';
  } else {
    return 'Whatever.';
  }
};

const isEmptyMessage = (message) => {
  return message === '';
};

const isQuestion = (message) => {
  return message.endsWith('?');
};

const isYelling = (message) => {
  return message.toUpperCase() === message && message.match(/[a-z]/i);
};
