import type { TodoTypes } from "./TodoTypes"; 


const LOCAL_STORAGE_KEY= "todos"


const Todoservice = {

// get todos 

getTodos: () : TodoTypes[] => {
    const todoSTR = localStorage.getItem(LOCAL_STORAGE_KEY)
    return todoSTR ? JSON.parse(todoSTR) : []
},

// adding function  
    
addTodos :(text:string):TodoTypes => {
 const todos = Todoservice.getTodos();
 const newTodo : TodoTypes = {id: Date.now() , text , completed: false};
 const updatedtodos = [...todos , newTodo];
 localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(updatedtodos));
 return newTodo;
},

// Uppdatingtodos 

Uppdatingtodos: (todo : TodoTypes): TodoTypes => {
    const todos = Todoservice.getTodos();
    const updatedtodos = todos.map((t) => (t.id === todo.id ? todo : t ));
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(updatedtodos));
    return todo;    
},

//deletingTodo 
deletingTodos: (id: number): TodoTypes[] => {
  const todos = Todoservice.getTodos();
  const updatedTodos = todos.filter(i => i.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  return updatedTodos;
},


};
export default Todoservice;