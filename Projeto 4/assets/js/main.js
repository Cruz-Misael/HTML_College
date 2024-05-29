function myScope(){
    
    const button = document.querySelector(".button");
    const list = document.querySelector(".list")
    const task = document.querySelector(".task")


    task.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
          if (!task.value) return;
          createTask(task.value);
        }
      });

    // Add task button
    button.addEventListener('click', function (e){
        e.preventDefault();  
        if (!task.value) return;
        createTask(task.value);        
    });
        
    document.addEventListener('click', function(e) {
        const el = e.target;
      
        if (el.classList.contains('lButton')) {
          el.parentElement.remove();
          saveTasks();
        };
    });

    function createTask(msg){
        const lst = createList();
        const lButton = createButton();
        lst.innerHTML = msg;
        lButton.innerText = 'Ok';
        lButton.setAttribute('class', 'lButton');
        lButton.setAttribute('title', 'deleteTask');        
        list.appendChild(lst);
        lst.appendChild(lButton);
        clearInput();
        saveTasks();
    };

    function clearInput() {
        task.value = '';
        task.focus();
      }

    function createButton () {
        const lButton = document.createElement('button'); //cria elemento no documento
        return lButton;
    };
        
    function createList () {
        const lst = document.createElement('li'); //cria elemento no documento
        return lst;
    };
    
    
    
    function saveTasks() {
        const liTasks = list.querySelectorAll('li');
        const taskList = [];
      
        for (let tsk of liTasks) {
          let textTask = tsk.innerText;
          textTask = textTask.replace('Ok', '').trim();
          taskList.push(textTask);
        }
      
        const tarefasJSON = JSON.stringify(taskList);
        localStorage.setItem('tsk', tarefasJSON);
      };
      
    function addSavedTask() {
    const tsk = localStorage.getItem('tsk');
    const taskList = JSON.parse(tsk);

        for(let tsk of taskList) {
            createTask(tsk);
        };
    };

    addSavedTask();

};

myScope();
