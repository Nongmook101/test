class todo {
    constructor(id, description) {
        this.id = id
        this.description = description
    }
    getTodo () {
        return {id: this.id, description: this.description}
    }
    setDescription (newDescription) {
        this.description = newDescription
    }
}


function todoManagement() {
    const todos = []
    function addTodo(desc) {
        return todos.push(desc)
    }
    function findTodo(searchId) {
        return todos.find((todo) => todo.id === searchId )

    }
    function findIndexTodo(searchId) {
        return todos.findIndex((todo) => todo.id === searchId )
    }
    function removeTodo(removeId) {
        return todos.splice(todos.findIndex((todo) => todo.id === removeId), 1)
        
    }
    function getTodo() { 
        return todos
    }
    return {addTodo, findTodo, findIndexTodo, removeTodo, getTodo}
}

