import React, { useState } from "react";
import Todo from "./Todo";
import TodoEdit from "./TodoEdit";

function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		// Validar se o todo foi preenchido
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		// Criar var para crir novo todo
		const newTodos = [todo, ...todos];

		// Definir novos todos
		setTodos(newTodos);
	};

	// Método para eliminar todos
	const deleteTodo = (id) => {

		// Eliminar todo 
		const removeArr = [...todos].filter((todo) => todo.id !== id);

		// Definir novos todos
		setTodos(removeArr);
	};

	// Retorno
	return (
		<div>
			<TodoEdit onSubmit={addTodo} />
			<Todo todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
}

export default TodoList;
