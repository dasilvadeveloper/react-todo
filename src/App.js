import "./App.css";
import TodoList from "./components/TodoList";

function App() {
	return (
		<div className="todo-app">
			<h4>Todo app | Developed by <a href='http://t04-hendrick.vigion.pt/'>Hendrik Lelis</a> </h4>
			<TodoList />
		</div>
	);
}

export default App;
