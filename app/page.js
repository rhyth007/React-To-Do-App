"use client";
import React, { useState } from "react";

const page = () => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [mainTask, setMainTask] = useState([]); //Store all tasks in main Array
	const submitHandler = (e) => {
		e.preventDefault();
		setMainTask([...mainTask, { title, desc }]);
		console.log(mainTask);
		setTitle("");
		setDesc("");
	};
	const deleteHandler = (i)=>{

		let oldTask = [...mainTask];
		oldTask.splice(i,1);
		setMainTask(oldTask);

	}

	let renderTask = <h2> No Task Available!!!</h2>;

	if(mainTask.length>0)
	{
	renderTask = mainTask.map((t, i ) => {
		return(
        <li key={i} className="flex items-center justify-between mb-8">
			<div className="flex items-center justify-between w-2/3">
				<h5 className="text-2xl font-semibold">{t.title}</h5>
				<h6 className="text-lg font-medium">{t.desc}</h6>
			</div>
			<button
			onClick={()=>{deleteHandler(i)}}
			 className="bg-red-400 text-white px-4 rounded font-bold p-2">Delete</button>
		</li>
		);
	});
}
	return (
		<>
			<h1 className="bg-black text-white text-4xl p-5 font-bold text-center">
				My Todo List
			</h1>

			<form onSubmit={submitHandler}>
				<input
					type="text"
					className="text-xl border-zinc-800 border-2 m-5 px-4 py-2"
					placeholder="Enter your Task"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<input
					type="text"
					className="text-xl border-zinc-800 border-2 m-5 px-4 py-2"
					placeholder="Enter Task Description"
					value={desc}
					onChange={(e) => {
						setDesc(e.target.value);
					}}
				/>
				<button className="bg-black text-white text-2xl font-bold rounded px-4 py-3 m-5">
					Add Task
				</button>
			</form>
			<hr />
			<div className="p-8 bg-slate-200 text-center ">
				<ul className="font-semibold">{renderTask}</ul>
			</div>
		</>
	);
};

export default page;
