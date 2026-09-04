export function renderGoals(goals, container) {
  container.innerHTML = "";

  goals.forEach(goal => {
    const goalCard = document.createElement("div");
    goalCard.classList.add("goalCard");
    goalCard.textContent = goal;

    container.appendChild(goalCard);
  });
}

export function renderSkillsIHave(skills, list) {
  list.innerHTML = "";

  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;

    list.appendChild(li);
  });
}

export function renderSkillsToLearn(skills, list) {
  list.innerHTML = "";

  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;

    list.appendChild(li);
  });
}
