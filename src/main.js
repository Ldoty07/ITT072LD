// Import render functions
import { renderGoals } from '../src/render.js'
import { renderSkillsIHave } from '../src/render.js'
import { renderSkillsToLearn } from '../src/render.js'

// Import data
import { goals } from '../src/data.js'
import { skillsIHave } from '../src/data.js'
import { skillsToLearn } from '../src/data.js'

// Define containers
const goalsContainer = document.querySelector("#goalsContainer");
const skillsIHaveList = document.querySelector("#skillsIHaveList");
const skillsToLearnList = document.querySelector("#skillsToLearnList");

// Render info
renderGoals(goals, goalsContainer);
renderSkillsIHave(skillsIHave, skillsIHaveList);
renderSkillsToLearn(skillsToLearn, skillsToLearnList);