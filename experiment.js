// constants
const variables = [
    ["it is not a holiday", "it is a holiday"],
    ["it is not summer", "it is summer"],
    ["the park is not crowded", "the park is crowded"],
    ["the park was not renovated recently", "the park was renovated recently"],
    ["the park is not in the city center", "the park is in the city center"],
    ["there are mostly families in the park", "there are mostly students in the park"],
    ["it is early in the day", "it is late in the day"],
    ["it is not raining", "it is raining"],
    ["the park is free of litter", "the park is full of litter"],
    ["the grass is dry", "the grass is dry"]
]

const jsPsych = initJsPsych();

const instructions = {
    type: jsPsychInstructions,
    pages: [
        "<p>By answering the following questions, you are participating in a study being performed by cognitive scientists in the Stanford Department of Psychology.\
         If you have questions about this research, please contact <strong>Ben Prystawski</strong> at <a href='mailto:benpry@stanford.edu'>benpry@stanford.edu</a> or\
         Noah Goodman at ngoodman@stanford.edu. You must be at least 18 years old to participate. Your participation in this research is voluntary.\
         You may decline to answer any or all of the following questions. You may decline further participation, at any time, without adverse consequences.\
         Your anonymity is assured; the researchers who have requested your participation will not receive any personal information about you.</p>",
        "In this study, we will ask you to estimate the probabilities of certain events that might take place in a park. We will ask you both the baseline probability\
         of the event, and the probability given that we intervene in the park in a certain way. For example, we might ask you to estimate the probability\
         that the park is crowded, and then the probability that the park is crowded given that we intervene by renovating the park. Press 'Next' to begin the experiment."
    ],
    show_clickable_nav: true
}

const trials = [instructions]

variables.map((v, i) => {
    const marginalTrial = {
        type: jsPsychHtmlSliderResponse,
        stimulus: "How likely is it that " + v[1] + "?",
        labels: ["impossible", "25%", "50%", "75%", "certain"],
        slider_width: 500
    }
    trials.push(marginalTrial)
    variables.map((v2, i2) => {
        if (i != i2) {
            const interventionTrialTrue = {
                type: jsPsychHtmlSliderResponse,
                stimulus: "Suppose we were to intervene such that " + v[1] + ". How likely is it that " + v2[1] + "?",
                labels: ["impossible", "25%", "50%", "75%", "certain"],
                slider_width: 500
            }
            trials.push(interventionTrialTrue)
            const interventionTrialFalse = {
                type: jsPsychHtmlSliderResponse,
                stimulus: "Suppose we were to intervene such that " + v[0] + ". How likely is it that " + v2[1] + "?",
                labels: ["impossible", "25%", "50%", "75%", "certain"],
                slider_width: 500
            }
            trials.push(interventionTrialFalse)
        }
    })
})

console.log("num trials", trials.length)

jsPsych.run(trials);
