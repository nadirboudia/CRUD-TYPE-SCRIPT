import { useState } from "react";
import type { TodoTypes } from "../TodoTypes";
import Todoservice from "../Todoservice";

function TodoList() {
  const [todos, setTodos] = useState<TodoTypes[]>(Todoservice.getTodos());
  const [editingTodoid, setEditingTodoid] = useState<number | null>(null);
  const [editingTodotext, setEditingTodotext] = useState<string>("");

  function HandleEditStart(id: number, text: string) {
    setEditingTodoid(id);
    setEditingTodotext(text);
  }

  function Handleeditcancel() {
    setEditingTodoid(null);
    setEditingTodotext("");
  }
  function Handleeditsave(id: number) {
    if (editingTodotext.trim() !== "") {
      const updatedtodos = Todoservice.Uppdatingtodos({
        id,
        text: editingTodotext,
        completed: false,
      });
      setTodos((prev) => prev.map((t) => (t.id === id ? updatedtodos : t)));
    }
  }

  function Handledelete(id:number){
    Todoservice.deletingTodos(id);
    setTodos(prev => prev.filter( i => i.id !== id ))
    
  }




  return (
    <div>


    </div>
  )
}

export default TodoList;
