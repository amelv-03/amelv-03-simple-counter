import React, { useState } from "react";
import Counter from "./counter";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [count, setCount] = useState(0);

	setInterval(() => {
		setCount(count + 1);
		console.log(count);
	}, 1000);

	return (
		<div>
			<Counter count={count}/>
		</div>
		
	);
};

export default Home;
