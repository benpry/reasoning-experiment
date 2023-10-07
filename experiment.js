// JavaScript for syllogistic reasoning experiment

const renderStimulus = function (stimulus) {
  const statements = `<div class="world-statements">${stimulus.world
    .map((s) => `<li>${s}</li>`)
    .join("")}</div>`;
  const premise = `<p><strong>Premise:</strong> ${stimulus.premise}</p>`;
  const question = `<p><strong>Conclusion:</strong> ${stimulus.conclusion}</p>`;
  const html = `<div class='stimulus'><ul>${statements}</ul>${premise}${question}</div>`;
  return html;
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

console.log(stimuli.length);

const trials = [instructions];

shuffle(stimuli);
stimuli.map((s, i) => {
  const trial = {
    type: jsPsychHtmlButtonResponse,
    prompt:
      '<p>Choose "yes" if the conclusion follows from the premise, and "no" otherwise.</p>',

    stimulus: renderStimulus(s),
    choices: ["yes", "no"],
    button_html: [
      `<button class='jspsych-btn' style="background:#3ab059;font-size:18pt">%choice%</button>`,
      `<button class='jspsych-btn' style="background:#d94e3f;font-size:18pt">%choice%</button>`,
    ],
  };
  trials.push(trial);
});

const survey = {
  type: jsPsychSurveyText,
  preamble:
    "You have reached the end of the experiment! The experiment will be over after this survey.",
  questions: [
    {
      prompt:
        "Please describe the strategy you used to answer the questions in this experiment.",
      rows: 6,
      columns: 50,
      name: "strategy",
    },
    {
      prompt: "Did you feel the pay was fair?",
      rows: 6,
      columns: 50,
      name: "payfair",
    },
    {
      prompt:
        "Please give any feedback you have about the experiment, including problems encountered.",
      rows: 6,
      columns: 50,
      name: "feedback",
    },
  ],
  name: "strategy",
};
trials.push(survey);

const debrief = {
  type: jsPsychInstructions,
  pages: [
    "<p class='instructions-text'>Thank you for participating in our experiment! Press 'Next' to submit your responses and be redirected back to Prolific.</p>",
  ],
  show_clickable_nav: true,
  allow_previous: false,
};
trials.push(debrief);

jsPsych.run(trials);
