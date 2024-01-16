import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	const [redLight, setRedLight] = useState("")
	const [yellowLight, setYellowLight] = useState("")
	const [greenLight, setGreenLight] = useState("")

	const TurnOnLight = (color) => {
		// console.log(color)
		if (color === "red") {
			setRedLight("ligthOn")
			setYellowLight("")
			setGreenLight("")
		} else if (color === "yellow") {
			setYellowLight("ligthOn")
			setRedLight("")
			setGreenLight("")
		} else if (color === "green") {
			setGreenLight("ligthOn")
			setRedLight("")
			setYellowLight("")
		}
	}


	return (
		<div>
			<div className="post"></div>
			<div className="trafficLight">
				<div className="lights">
					<div className={`redLight ${redLight}`} onClick={() => TurnOnLight("red")}></div>
					<div className={`yellowLight ${yellowLight}`} onClick={() => TurnOnLight("yellow")}></div>
					<div className={`greenLight ${greenLight}`} onClick={() => TurnOnLight("green")}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
