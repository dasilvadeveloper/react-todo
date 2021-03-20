import React, { useState } from "react";
import "./Todo.css";
import { FaTrashAlt } from "react-icons/fa";

function Todo({ todos, deleteTodo }) {
	// Retorno
	return todos.map((todo, index) => (
		<div className="todo" key={index}>
			<div className="body">
				<div className="text">{todo.text}</div>
				<span>
					{todo.createdAt.getDay()}/
					{todo.createdAt.getMonth()}/
					{todo.createdAt.getFullYear()} às{" "}
					{todo.createdAt.getHours()}:
					{todo.createdAt.getMinutes()}
				</span>
			</div>
			<div className="delete-container" key={todo.id}>
				<FaTrashAlt className='delete-btn' onClick={() => deleteTodo(todo.id)}/>
			</div>
		</div>
	));
}

export default Todo;
