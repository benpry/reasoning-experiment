const world = [
  "If it is Wednesday, then Alice goes to work",
  "If Alice goes to work, then she has a meeting in the morning",
  "If Alice has a meeting in the morning, then she talks to Bob",
  "If Alice talks to Bob, then Bob is busy in the afternoon",
  "If Bob is busy in the afternoon, then he skips his coffee break",
];

const all_stimuli = [
  {
    observed: "It is not Wednesday",
    query: "Alice has a meeting in the morning",
    correct_answer: "unknown",
    distance: 1,
  },
  {
    observed: "It is Wednesday",
    query: "Alice goes to work",
    correct_answer: "true",
    distance: 1,
  },
  {
    observed: "Bob is busy in the afternoon",
    query: "Alice talks to Bob",
    correct_answer: "unknown",
    distance: 1,
  },
  {
    observed: "Alice talks to Bob",
    query: "Bob is busy in the afternoon",
    correct_answer: "true",
    distance: 1,
  },
  {
    observed: "It is Wednesday",
    query: "Alice goes to work",
    correct_answer: "true",
    distance: 1,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice goes to work",
    correct_answer: "unknown",
    distance: 1,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice talks to Bob",
    correct_answer: "unknown",
    distance: 1,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice has a meeting in the morning",
    correct_answer: "false",
    distance: 1,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice goes to work",
    correct_answer: "false",
    distance: 1,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice talks to Bob",
    correct_answer: "false",
    distance: 1,
  },
  {
    observed: "Alice has a meeting in the morning",
    query: "It is Wednesday",
    correct_answer: "unknown",
    distance: 2,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice goes to work",
    correct_answer: "false",
    distance: 2,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice talks to Bob",
    correct_answer: "unknown",
    distance: 2,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice goes to work",
    correct_answer: "false",
    distance: 2,
  },
  {
    observed: "It is not Wednesday",
    query: "Alice has a meeting in the morning",
    correct_answer: "unknown",
    distance: 2,
  },
  {
    observed: "Alice talks to Bob",
    query: "Alice goes to work",
    correct_answer: "unknown",
    distance: 2,
  },
  {
    observed: "It is not Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "unknown",
    distance: 2,
  },
  {
    observed: "It is Wednesday",
    query: "Alice has a meeting in the morning",
    correct_answer: "true",
    distance: 2,
  },
  {
    observed: "Alice has a meeting in the morning",
    query: "Bob is busy in the afternoon",
    correct_answer: "true",
    distance: 2,
  },
  {
    observed: "Alice has a meeting in the morning",
    query: "It is Wednesday",
    correct_answer: "unknown",
    distance: 2,
  },
  {
    observed: "Alice talks to Bob",
    query: "It is Wednesday",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "Bob is busy in the afternoon",
    query: "Alice goes to work",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "It is Wednesday",
    query: "Alice talks to Bob",
    correct_answer: "true",
    distance: 3,
  },
  {
    observed: "It is not Wednesday",
    query: "It is Wednesday",
    correct_answer: "false",
    distance: 3,
  },
  {
    observed: "Alice talks to Bob",
    query: "It is Wednesday",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "Alice goes to work",
    query: "Bob is busy in the afternoon",
    correct_answer: "true",
    distance: 3,
  },
  {
    observed: "Bob is busy in the afternoon",
    query: "Alice goes to work",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "It is not Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "Bob is busy in the afternoon",
    query: "Alice goes to work",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "It is not Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "It is Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "true",
    distance: 4,
  },
  {
    observed: "Bob is busy in the afternoon",
    query: "It is Wednesday",
    correct_answer: "unknown",
    distance: 4,
  },
  {
    observed: "It is Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "true",
    distance: 4,
  },
  {
    observed: "Bob is busy in the afternoon",
    query: "It is Wednesday",
    correct_answer: "unknown",
    distance: 4,
  },
  {
    observed: "It is not Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "unknown",
    distance: 4,
  },
  {
    observed: "It is Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "true",
    distance: 4,
  },
  {
    observed: "It is not Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "unknown",
    distance: 4,
  },
  {
    observed: "It is Wednesday",
    query: "Bob is busy in the afternoon",
    correct_answer: "true",
    distance: 4,
  },
  {
    observed: "It is not Wednesday",
    query: "It is Wednesday",
    correct_answer: "false",
    distance: 4,
  },
  {
    observed: "It is not Wednesday",
    query: "It is Wednesday",
    correct_answer: "false",
    distance: 4,
  },
];
const practiceStimulus = {
  world: ["If A then B.", "If B then C."],
  observed: "A is true",
  query: "C",
  correct_answer: "true",
};
