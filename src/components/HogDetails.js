import React from "react"

const HogDetails = ({ name, weight, specialty, greased, highestMedal }) => {
	return (
		<div id={`hod-details-${name}`}>
			<p>Weight: {weight}</p>
			<p>Specialty: {specialty}</p>
			<p>{greased ? "GREASED" : "CLEAN"}</p>
			<p>Highest Medal: {highestMedal}</p>
		</div>
	)
}

export default HogDetails
