const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type:'list',
        name:'optionQuest',
        message:'¿Qué desea hacer?',
        choices:[
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`,
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`,
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`,
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`,
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`,
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`,
            },
            {
                value: '0',
                name: `${'0.'.green} Salir\n`,
            }
        ]
    }
];

const answer = [
    {
        type:'input',
        name:'enter',
        message:`Presione ${'ENTER'.red} para continuar\n`,
    }
];

const inquireMenu = async () => {
    console.clear();
    console.log('========================='.green);
    console.log('Seleccione una opción'.green);
    console.log('=========================\n'.green);

    const { optionQuest } = await inquirer.prompt(questions);
    /* console.log('inquireMenu', optionQuest); */
    console.log('\n');
    return optionQuest;
};

const pause = async () => {
    const { enter } = await inquirer.prompt(answer);
    return enter;
};

module.exports = {
    inquireMenu,
    pause
};