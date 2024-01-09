import React from "react";
import { Todo } from "./model";
import "./styles.css";
import SingleTodo from "./SingleTodo";
interface Todos {
	todoList: Todo[];
	settodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoLists: React.FC<Todos> = ({ todoList, settodoList }: Todos) => {
	console.log(settodoList);
	return (
		<div className="todoContainer">
			{todoList.map((todo) => {
				return (
					<SingleTodo
						todo={todo}
						key={todo.id}
						todoList={todoList}
						settodoList={settodoList}
					/>
				);
			})}
		</div>
	);
};

export default TodoLists;
