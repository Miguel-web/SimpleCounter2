import React from "react";
import SimpleCounter from "./SimpleCounter"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SimpleCounter
			 digitOne={one}
			 digitTwo={two}
			 digitThree={three}
			 digitFour={four}
			 digitFive={five}
			 digitSix={six}
		   />
		</div>
	);
};

export default Home;
