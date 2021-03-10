class PomodoroApp {
  constructor(options) {
    let { tableTbodySelector, taskFormSelector } = options;
    this.$tableTbody = document.querySelector(tableTbodySelector);
    this.$taskForm = document.querySelector(taskFormSelector);
    this.$taskFormInput = this.$taskForm.querySelector("input");
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  addTaskToTable(task) {
    const $newTaskEl = document.createElement("tr");
    $newTaskEl.innerHTML = `<th scope="row">${this.tasks.length}</th><td>${task.title}</td>`;
    this.$tableTbody.appendChild($newTaskEl);
    this.$taskFormInput.value = "";
  }

  handleAddTask() {
    this.$taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const task = { id: Math.random(), title: this.$taskFormInput.value };
      this.addTask(task);
      this.addTaskToTable(task);
    });
  }

  init() {
    this.handleAddTask();
  }
}

export default PomodoroApp;
