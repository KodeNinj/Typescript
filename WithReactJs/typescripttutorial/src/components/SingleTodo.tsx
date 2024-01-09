import React from "react";
import { Todo } from "./model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
// import TodoLists from "./TodoList";
type Props = {
	todo: Todo;
	todoList: Todo[];
	settodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todoList, settodoList }: Props) => {
	const handleDone = (id: number) => {
		settodoList(
			todoList.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};
	const handleDelete = (id: number) => {
		settodoList(todoList.filter((e) => e.id !== id));
	};
	return (
		<form className="todo-container">
			{todo.isDone ? (
				<s className="todo_single_text">{todo.todo}</s>
			) : (
				<span className="todo_single_text">{todo.todo}</span>
			)}

			<div className="icons">
				<span className="icon">
					<AiFillEdit />
				</span>
				<span className="icon" onClick={() => handleDelete(todo.id)}>
					<AiFillDelete />
				</span>
				<span className="icon" onClick={() => handleDone(todo.id)}>
					<MdDone />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
