document.addEventListener('DOMContentLoaded', async () => {
  
  
  await import(/* webpackChunkName: "todoApp" */ "./todolist/todoApp")
    .then((TodoApp) => {
      let appFrame = document.getElementById('todo-app');
      owner = appFrame.dataset.owner;
      
      const app = new TodoApp.default(appFrame, owner);
    })
    .catch((error) => {
      console.error(error);
    });
});
