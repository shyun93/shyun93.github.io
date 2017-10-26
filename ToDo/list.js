var todos = [];

var input = prompt ("What would you like to do?");

while(input !== "quit") {
	if(input === "list"){
		listTodos();
	} else if(input === "new") {
		addTodo();
	} else if (input === "delete") {
	var index = prompt("Enter index of todo to delete")
		deleteTodo();
	}

	input = prompt ("What would you like to do?")

}

console.log("Ok you quit the app");


function listTodos(){
	todos.forEach(function(todo, i){
	console.log("**********");
	console.log(i + ": " + todo);
	console.log("**********");
		})	
}

function addTodo(){
	var newTodo = prompt("Add new todo");
	todos.push(newTodo);	
	console.log("added todo");
}

function deleteTodo(){
	todos.splice(index, 1);
	console.log("deleted todo");
}