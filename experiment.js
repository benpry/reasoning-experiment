// JavaScript for syllogistic reasoning experiment

// constants
const nSeconds = 10;
const trialDuration = nSeconds * 1000;

// functions for rendering stimulus
const renderWorld = function (world) {
  const statements = `<div class="world-statements"><ul>${world
    .map((s) => `<li>${s}</li>`)
    .join("")}</ul></div>`;

  return statements;
};
const renderStimulus = function (stimulus, world) {
  const worldStatements = renderWorld(world);
  const premise = `<p><strong>Premise:</strong> ${stimulus.premise}</p>`;
  const question = `<p><strong>Conclusion:</strong> ${stimulus.conclusion}</p>`;
  const html = `<div class='stimulus'>${worldStatements}${premise}${question}</div>`;
  return html;
};

// Fisher-Yates shuffle, from here: https://stackoverflow.com/a/2450976
function shuffle(array) {
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

let condition;
const jsPsych = initJsPsych({
  on_finish: function (data) {
    proliferate.submit({
      trials: data.values(),
      condition: condition,
    });
  },
  display_element: "jspsych-target",
  override_safe_mode: true,
});

// get the condition from the url variable
const rawCondition = jsPsych.data.getURLVariable("condition");
const isSpeeded = rawCondition == 1;
condition = isSpeeded ? "speeded" : "unspeeded";
const speededInstruction = isSpeeded
  ? ` After seeing the premise and conclusion, you will have only ${nSeconds} seconds to make a decision.`
  : "";

// consent form and instructions
const consent = {
  type: jsPsychInstructions,
  pages: [
    "<p class='instructions-text'>By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology.\
         If you have questions about this research, please contact <strong>Ben Prystawski</strong> at <a href='mailto:benpry@stanford.edu'>benpry@stanford.edu</a> or\
         Noah Goodman at ngoodman@stanford.edu. You must be at least 18 years old to participate. Your participation in this research is voluntary.\
         You may decline to answer any or pll of the following questions. You may decline further participation, at any time, without adverse consequences.\
         Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p>",
  ],
  show_clickable_nav: true,
};
const instructions = {
  type: jsPsychInstructions,
  pages: [
    `<p class='instructions-text'>This is an experiment investigating how people reason. You will be given twelve problems. Each problem consists of a set of if-then statements, a premise, and a
         conclusion. Your job is to determine whether the conclusion follows logically from the premise. You will have a chance to study the list of if-then statements before seeing the premise
         and conclusion. All problems rely on the same set of if-then statements.${speededInstruction}</p>`,
    `<p class='instructions-text'>You will complete a practice trial to familiarize you with the task. You will move on to the main trials after completing the practice trial.</p>`,
  ],
  show_clickable_nav: true,
};

// set up practice trials
const prePractice = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `<div class="stimulus">${renderWorld(
    practiceStimulus.world,
  )}</div>`,
  choices: ["start"],
  prompt: `<p>Study this list of statements, then click  "start" to see a question.</p>`,
  button_html: `<button class='jspsych-btn' style="font-size:18pt">%choice%</button>`,
};
const practice = {
  type: jsPsychHtmlButtonResponse,
  prompt:
    '<p>Choose "valid" if the conclusion follows from the premise, and "invalid" if it does not.</p>',
  stimulus: renderStimulus(practiceStimulus, practiceStimulus.world),
  choices: ["valid", "invalid"],
  on_load: isSpeeded ? startTimer : null,
  on_finish: isSpeeded ? stopTimer : null,
  trial_duration: isSpeeded ? trialDuration : null,
  button_html: [
    `<button class='jspsych-btn' style="font-size:18pt">%choice%</button>`,
    `<button class='jspsych-btn' style="font-size:18pt">%choice%</button>`,
  ],
};

const trials = [consent, instructions, prePractice, practice];
const stimuli = shuffle(all_stimuli);

// this only works because all stimuli use the same world
// const sWorld = shuffle(stimuli[0].world); we're not shuffling in this version
const sWorld = stimuli[0].world;
stimuli.map((s, i) => {
  const preTrial = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div class="stimulus">${renderWorld(sWorld)}</div>`,
    choices: ["start"],
    prompt: `<p>Study this list of statements, then click  "start" to see a premise and conclusion.</p>`,
    button_html: `<button class='jspsych-btn' style="font-size:18pt">%choice%</button>`,
  };
  trials.push(preTrial);
  const trial = {
    type: jsPsychHtmlButtonResponse,
    prompt:
      '<p>Choose "valid" if the conclusion follows from the premise, and "invalid" if it does not.</p>',
    stimulus: renderStimulus(s, sWorld),
    choices: ["valid", "invalid"],
    on_load: isSpeeded ? startTimer : null,
    on_finish: isSpeeded ? stopTimer : null,
    trial_duration: isSpeeded ? trialDuration : null,
    button_html: [
      `<button class='jspsych-btn' style="font-size:18pt">%choice%</button>`,
      `<button class='jspsych-btn' style="font-size:18pt">%choice%</button>`,
    ],
  };
  trials.push(trial);
});

// post-experiment survey
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

// exit
const exit = {
  type: jsPsychInstructions,
  pages: [
    "<p class='instructions-text'>Thank you for participating in our experiment! Press 'Next' to submit your responses and be redirected back to Prolific.</p>",
  ],
  show_clickable_nav: true,
  allow_previous: false,
};
trials.push(exit);

jsPsych.run(trials);
