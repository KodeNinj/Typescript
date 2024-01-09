import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
	const [todo, settodo] = useState<string>("");
	const [todoList, settodoList] = useState<Todo[]>([]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			settodoList([...todoList, { id: Date.now(), todo, isDone: false }]);
			settodo("");
		}
		console.log(todoList);
	};

	return (
		<div className="App">
			<h3 className="title">Taskify</h3>
			<InputField todo={todo} settodo={settodo} handleSubmit={handleSubmit} />
			<TodoList todoList={todoList} settodoList={settodoList} />
		</div>
	);
};

export default App;
