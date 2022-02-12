import { Todo, TodoList} from "./classes"
import { crearTodoHtml } from "./js/componentes";
import './styles.css';

export const todoList = new TodoList();

// const newTodo = new Todo('Aprender JS');
// todoList.nuevoTodo(newTodo);

todoList.todos.forEach( todo => crearTodoHtml( todo ));