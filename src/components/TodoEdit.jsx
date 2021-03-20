import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import "./TodoEdit.css";

function TodoEdit(props) {
	// criar var para manipular o todo
	const [input, setInput] = useState("");

	// Método que vai manipular o submit
	const onSubmit = (e) => {
		// Prefinir a ação default de recarregar a página
		e.preventDefault();

		// Enviar o todo criado para o Método addTodo criado no componente TodoList
		props.onSubmit({
			id: Math.floor(Math.random() * 10000), // * Gerar um id
			text: input, // * Obter o texto do input
			createdAt: new Date(), // * Obter a data atual
		});

		// Limpar o campo
		setInput("");
	};

	// Método para manipular o onChange do input
	const onChange = (e) => {
		setInput(e.target.value);
	};

	// Retorno
	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					className="input"
					value={input}
					type="text"
					placeholder="Fazertutorial de JavaFX"
					onChange={onChange}
				/>
				<button>
					<GrAdd />
				</button>
			</form>
		</>
	);
}

export default TodoEdit;
