// This is a program for generating random character lore. The program generates a random message using three parts to form the message every time it is run.

// parts pool

const birthplace = ["Timbuktu", "Darville", "Dunderport"];
const hobbies = [
  "playing banjo",
  "jogging",
  "slaying elves",
  "fighting zombies",
  "gathering treasures",
];
const professions = ["magician", "cleric", "shop keeper", "thief"];

// name of character
const characterName = "Angela";

// gender of character
const characterGender = "Female";

// select the parts
const selBirthplace = birthplace[Math.floor(Math.random() * birthplace.length)];
const selHobbies = hobbies[Math.floor(Math.random() * hobbies.length)];
const selProfessions =
  professions[Math.floor(Math.random() * professions.length)];

// gender pronoun method
const getGender = (gender) => {
  if (gender.toLowerCase() === "male") {
    return "his";
  } else if (gender.toLowerCase() === "female") {
    return "her";
  } else {
    return "their";
  }
};

// construct the message

console.log(
  `${characterName} is from ${selBirthplace}, and has spent most of ${getGender(
    characterGender
  )} life working as a ${selHobbies}. They enjoy ${selHobbies}.`
);
