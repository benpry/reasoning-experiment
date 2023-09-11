// JavaScript for syllogistic reasoning experiment

const renderLines = function (text) {
  // turn a string with newlines into multiple paragraphs
  const paragraphs = text.split("\n");
  const renderedText = paragraphs
    .map((p) => {
      return `<p class='syllogism-text'>${p}</p>`;
    })
    .join("");

  return renderedText;
};

function shuffle(array) {
  // Fisher-Yates shuffle, from here: https://stackoverflow.com/a/2450976
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// constants
const syllogisms = [
  [
    "No flowers are animals.\nAll reptiles are flowers.\nTherefore no reptiles are animals.",
    "valid-inconsistent",
  ],
  [
    "All trees are plants.\nSome trees are tall things.\nTherefore some plants are tall things.",
    "valid-consistent",
  ],
  [
    "All students read.\nSome people who read are professors.\nTherefore some students are professors.",
    "invalid-inconsistent",
  ],
  [
    "All diamonds are gems.\nSome gems are transparent things.\nTherefore some diamonds are transparent things.",
    "invalid-consistent",
  ],
  [
    "All dangerous things are weapons.\nAll weapons are guns.\nTherefore all dangerous things are guns.",
    "valid-inconsistent",
  ],
  [
    "Some politicians are dishonest people.\nAll dishonest people are people who lie.\nTherefore some politicians are people who lie.",
    "valid-consistent",
  ],
  [
    "All whales are mammals.\nAll whales have gills.\nTherefore all mammals have gills.",
    "invalid-inconsistent",
  ],
  [
    "All vehicles are things that move.\nSome things that move are trucks.\nTherefore some vehicles are trucks.",
    "invalid-consistent",
  ],
  [
    "No electronics have batteries.\nAll phones have batteries.\nTherefore no phones are electronics.",
    "valid-inconsistent",
  ],
  [
    "Some librarians are happy people.\nAll happy people are healthy people.\nTherefore some librarians are healthy people.",
    "valid-consistent",
  ],
  [
    "No famous actors are old people.\nAll famous actors are wealthy people.\nTherefore no old people are wealthy people.",
    "invalid-inconsistent",
  ],
  [
    "No vegetables are birds.\nAll birds have wings.\nTherefore, no vegetables have wings.",
    "invalid-consistent",
  ],
];

const jsPsych = initJsPsych({
  on_finish: function (data) {
    proliferate.submit({ trials: data.values() });
  },
});

const instructions = {
  type: jsPsychInstructions,
  pages: [
    "<p class='instructions-text'>By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology.\
         If you have questions about this research, please contact <strong>Ben Prystawski</strong> at <a href='mailto:benpry@stanford.edu'>benpry@stanford.edu</a> or\
         Noah Goodman at ngoodman@stanford.edu. You must be at least 18 years old to participate. Your participation in this research is voluntary.\
         You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences.\
         Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p>",
    "<p class='instructions-text'>This is an experiment investigating how people reason. You will be given twelve problems. In each case, you will be given passage\
         to read and asked if a certain conclusion may be logically deduced from it. You should answer this question on the assumption that all the information \
         given in the passage is, in fact, true. If you judge that the conclusion necessarily follows from the statements in the passage, you should answer 'yes,' otherwise 'no.'</p>",
  ],
  show_clickable_nav: true,
};

const trials = [instructions];

shuffle(syllogisms);
syllogisms.map((s, i) => {
  const trial = {
    type: jsPsychHtmlButtonResponse,
    prompt:
      '<p>Press "yes" if you think the conclusion is valid given the first two statements, and "no" otherwise.</p>',
    stimulus: renderLines(s[0]),
    choices: ["yes", "no"],
  };
  trials.push(trial);
});

const debrief = {
  type: jsPsychInstructions,
  pages: [
    "<p class='instructions-text'>Thank you for participating in our experiment! Press 'Next' to submit your responses.</p>",
  ],
  show_clickable_nav: true,
};
trials.push(debrief);

jsPsych.run(trials);
