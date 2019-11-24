// Objects

// 情報蓄える
var todoList = {
    todos:['item1', 'item2', 'item3']
};

todoList

// 情報表示する
var todoList = {
    todos:['item 1', 'item 2', 'item 3'],
    displayTodos: function(){
        console.log('My todos', this.todos);
    }
};

todoList.displayTodos();

// 情報を加える
// function addTodo(todo){
//     todos.push(todo);
//     displayTodos();
// }古いコード

var todoList = {
    todos: ['item 1', 'item 2','item 3'],
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    }
};

todoList.addTodo('plunker');

// 情報変更
// function changeTodo(position, newValue){
//     todos[position] = newValue;
//     displayTodos();
// } 古いコード

var todoList = {
    todos: ['item 1', 'item 2','item 3'],
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function (position, newValue){
      this.todos[position] = newValue;
      this.displayTodos();
    }
};

todoList.changeTodo(0, 'first');

// 情報削減
// function deleteTodo(position) {
//     todos.splice(position, 1);
//     displayTodos();
// }
var todoList = {
    todos: ['item 1', 'item 2','item 3'],
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function (position, newValue){
      this.todos[position] = newValue;
      this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};

todoList.deleteTodo(1);
