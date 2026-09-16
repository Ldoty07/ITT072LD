// Import styles
import './style.css'

// Import render functions
import { renderGoals } from './render.js'
import { renderSkillsIHave } from './render.js'
import { renderSkillsToLearn } from './render.js'

// Import data
import { goals } from './data.js'
import { skillsIHave } from './data.js'
import { skillsToLearn } from './data.js'

// Define containers
const goalsContainer = document.querySelector("#goalsContainer");
const skillsIHaveList = document.querySelector("#skillsIHaveList");
const skillsToLearnList = document.querySelector("#skillsToLearnList");

// Render info
renderGoals(goals, goalsContainer);
renderSkillsIHave(skillsIHave, skillsIHaveList);
renderSkillsToLearn(skillsToLearn, skillsToLearnList);