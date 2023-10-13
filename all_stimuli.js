const all_stimuli = [
  {
    world: [
      "If flemp then glork",
      "If glork then dalx",
      "If dalx then zilft",
      "If zilft then quarg",
      "If quarg then blick",
    ],
    premise: "flemp",
    conclusion: "Therefore blick",
  },
  {
    world: [
      "If flemp then glork",
      "If glork then dalx",
      "If dalx then zilft",
      "If zilft then quarg",
      "If quarg then blick",
    ],
    premise: "not quarg",
    conclusion: "Therefore not flemp",
  },
  {
    world: [
      "If flemp then glork",
      "If glork then dalx",
      "If dalx then zilft",
      "If zilft then quarg",
      "If quarg then blick",
    ],
    premise: "not glork",
    conclusion: "Therefore not zilft",
  },
  {
    world: [
      "If flemp then glork",
      "If glork then dalx",
      "If dalx then zilft",
      "If zilft then quarg",
      "If quarg then blick",
    ],
    premise: "blick",
    conclusion: "Therefore dalx",
  },
  {
    world: [
      "If it is winter then it will be cold",
      "If it is cold then it will snow",
      "If it snows then the roads will be icy",
      "If the roads are icy then there will be car accidents",
      "If there are car accidents then there will be traffic jams",
    ],
    premise: "It is winter",
    conclusion: "Therefore the roads will be icy",
  },
  {
    world: [
      "If it is winter then it will be cold",
      "If it is cold then it will snow",
      "If it snows then the roads will be icy",
      "If the roads are icy then there will be car accidents",
      "If there are car accidents then there will be traffic jams",
    ],
    premise: "It does not snow",
    conclusion: "Therefore there will not be car accidents",
  },
  {
    world: [
      "If it is winter then it will be cold",
      "If it is cold then it will snow",
      "If it snows then the roads will be icy",
      "If the roads are icy then there will be car accidents",
      "If there are car accidents then there will be traffic jams",
    ],
    premise: "There are not traffic jams",
    conclusion: "Therefore it is not cold",
  },
  {
    world: [
      "If it is winter then it will be cold",
      "If it is cold then it will snow",
      "If it snows then the roads will be icy",
      "If the roads are icy then there will be car accidents",
      "If there are car accidents then there will be traffic jams",
    ],
    premise: "It snows",
    conclusion: "Therefore it is winter",
  },
  {
    world: [
      "If it is night then the sun will be in the sky.",
      "If the sun is in the sky then it will be bright outside.",
      "If it is bright outside then people will wear sunglasses.",
      "If people wear sunglasses then people will grow wings.",
      "If people grow wings then they will burrow underground.",
    ],
    premise: "It is night.",
    conclusion: "Therefore people will wear sunglasses.",
  },
  {
    world: [
      "If it is night then the sun will be in the sky.",
      "If the sun is in the sky then it will be bright outside.",
      "If it is bright outside then people will wear sunglasses.",
      "If people wear sunglasses then people will grow wings.",
      "If people grow wings then they will burrow underground.",
    ],
    premise: "People do not wear sunglasses.",
    conclusion: "Therefore people do not burrow underground.",
  },
  {
    world: [
      "If it is night then the sun will be in the sky.",
      "If the sun is in the sky then it will be bright outside.",
      "If it is bright outside then people will wear sunglasses.",
      "If people wear sunglasses then people will grow wings.",
      "If people grow wings then they will burrow underground.",
    ],
    premise: "People do not burrow underground.",
    conclusion: "Therefore it is not bright outside.",
  },
  {
    world: [
      "If it is night then the sun will be in the sky.",
      "If the sun is in the sky then it will be bright outside.",
      "If it is bright outside then people will wear sunglasses.",
      "If people wear sunglasses then people will grow wings.",
      "If people grow wings then they will burrow underground.",
    ],
    premise: "Therefore the sun is in the sky.",
    conclusion: "Therefore people grow wings.",
  },
];

const practiceStimulus = {
  world: [
    "If the sprinkler turns on then the grass will be wet.",
    "If the grass is wet then the ground will be muddy.",
  ],
  premise: "The sprinkler turns on.",
  conclusion: "Therefore the ground is muddy.",
};
