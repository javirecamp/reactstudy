import { useState } from "react";

const Checkbox = ({ id, checkedList, onToggle, label }) => {

	// console.log('CHECK BOX : ', id, label);

	return (
		<>
			<input type="checkbox" id={`checkbox-${id}`} checked={checkedList.includes(`checkbox-${id}`)} onChange={(e) => onToggle(e)} disabled={checkedList.includes(`checkbox-${id}`)} /> 
			{label}
			{/* <label htmlFor={`checkbox-${id}`}>{label}</label>		 */}
		</>
	);
}

const Toggle = () => {
	const [checkedList, setCheckedList] = useState([]);

	const onToggle = (e) => {
		console.log(e.target.id);
		const { id } = e.target;
		setCheckedList(prevState => !prevState.includes(id) ? [...prevState, id] : prevState.filter(row => row !== id));
	}

	return (
		<div>
			<ul>
				<li style={{ margin: 30 }}>
					<Checkbox id="1" checkedList={checkedList} onToggle={onToggle} label="Todo - 1" />
				</li>
				<li style={{ margin: 30 }}>
					<Checkbox id="2" checkedList={checkedList} onToggle={onToggle} label="Todo - 2" />
				</li>
				<li style={{ margin: 30 }}>
					<Checkbox id="3" checkedList={checkedList} onToggle={onToggle} label="Todo - 3" />
				</li>
				<li style={{ margin: 30 }}>
					<Checkbox id="4" checkedList={checkedList} onToggle={onToggle} label="Todo - 4" />
				</li>
				<li style={{ margin: 30 }}>
					<Checkbox id="5" checkedList={checkedList} onToggle={onToggle} label="Todo - 5" />
				</li>
			</ul>

		</div>
	)
};

export default Toggle;