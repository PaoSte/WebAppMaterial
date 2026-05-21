const dao = require('./task_dao');
const dayjs = require('dayjs');

async function main(){
    try{
        console.log("All TASKS");
        const alltask = await dao.getAllTasks();
        console.log(alltask);

        console.log("\nALL URGENTS");
        const allurtask = await dao.getUrgentTasks();
        console.log(allurtask);
    } catch (err){
        console.error("Errore:", err);
    }
}

main();