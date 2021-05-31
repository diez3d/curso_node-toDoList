require('colors');
/* const { showMenu, pause } = require('./helpers/mensajes'); */
const { inquireMenu, pause } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

const main = async () => {
    console.clear();
    console.log('ToDoList App\n'.red);
    let opt = '';
    do {
        opt = await inquireMenu();
        console.log('Option choosed', opt);
        /* const tarea = new Task('Compar comida');
        const tareas = new Tasks();
        tareas._listado[tarea.id]=tarea;
        console.log('tarea', tarea);
        console.log('tareasss', tareas); */
        if(opt !== '0'){
            await pause();
        }
        
    } while(opt !== '0');
};
main();