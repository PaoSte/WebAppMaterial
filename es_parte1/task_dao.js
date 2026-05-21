const dayjs = require('dayjs');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err)
        throw err
});

class task {
    constructor(id, description, urgent, deadline) {
    this.id = id;
    this.description = description;
    this.urgent = urgent;
    this.deadline = deadline;
  }
}

function taskc(id, description, urgent, deadline){
    let ur, date; 
    if (urgent) ur = true; else ur = false;
    if (deadline !== null) date = dayjs(deadline,"DD/MM/YYYY");
    return new task(id, description, ur, date)
}

exports.getAllTasks = () => {
    return new Promise((resolve, error) => {
        const sql = "SELECT * FROM tasks";
        db.all(sql,[], (err, rows) => {
            if (err){
                error(err);
                return;
            }
            /* --> equivalente al map scritto sotto
            const tasks = [];
            rows.forEach(element => {
                tasks.push(taskc(element.id, element.description, element.urgent, element.deadline));
            });
            */
            const tasks = rows.map(element => taskc(element.id, element.description, element.urgent, element.deadline));
            resolve(tasks)
        })
    });
};

exports.getUrgentTasks = () =>{
    return new Promise((resolve, error) => {
        const sql = "SELECT * FROM tasks";
        db.all(sql,[], (err, rows) => {
            if (err){
                error(err);
                return;
            }
            /*
            const tasks = [];
            rows.forEach(element => {
                if (element.urgent)
                    tasks.push(taskc(element.id, element.description, element.urgent, element.deadline));
            });
            */
            const tasks = rows.filter(element => element.urgent).map(element => taskc(element.id, element.description, element.urgent, element.deadline));
            resolve(tasks)
        })
    });
};