let todos = [
    {id:1, title:"putzen", isDone:false},
    {id:2, title:"kochen", isDone:true},
    {id:3, title:"einkaufen", isDone:false},
    {id:4, title:"lernen", isDone:false}
]

let maxId = 4;

printTasks();

document.getElementById("input").addEventListener("change",function(event){
    console.log(event.target.value);
    todos.push({id:maxId,title:event.target.value, isDone:false});
    printTasks();
    event.target.value = "";
})

function printTasks(){
    let html = "";
    todos.forEach(element => {
        let style = element.isDone?"green":"none";
        html+="<div class='tasks' style='background-color:" + style + "'>" + element.title + " - " + element.isDone + "<div onClick='setIsDone(" + element.id + ")'>Done</div><div onClick='deleteTask(" + element.id + ")'>Delete</div></div>"
    });

    document.getElementById("todos").innerHTML = html;
}

function deleteTask(id){
    let index = todos.findIndex(element=>{
        if(element.id===id){
            return true;
        }
        todos.splice(index,1);
        printTasks;
    })
}

function setIsDone(id){
    let todos = todos.find(element=>{
        if(element.id===id){
            return true;
        }
    })
    todo.isDone = !todo.isDone;
    printTasks;
}


