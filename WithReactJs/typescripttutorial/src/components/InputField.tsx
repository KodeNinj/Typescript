import React, { useRef } from "react";
import "./styles.css";

interface Props {
	todo: string;
	settodo: React.Dispatch<React.SetStateAction<string>>;
	handleSubmit: (e: React.FormEvent) => void;
}
const InputField = ({ todo, settodo, handleSubmit }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	return (
		<form
			className="form"
			onSubmit={(e) => {
				handleSubmit(e);
				inputRef.current?.blur();
			}}>
			<input
				ref={inputRef}
				type="text"
				value={todo}
				placeholder="Enter task here"
				className="inputfield"
				onChange={(e) => settodo(e.target.value)}
			/>
			<button type="submit">Go</button>
		</form>
	);
};

export default InputField;
