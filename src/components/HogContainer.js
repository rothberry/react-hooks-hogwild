import React from "react"
import HogCard from "./HogCard"

const HogContainer = ({ hogs }) => {
	const mapHogs = () => {
		return hogs.map((hog) => {
			return <HogCard hog={hog} key={hog.name} />
		})
	}
	return (
		<div>
			<h1>CONTAINER</h1>
			{mapHogs()}
		</div>
	)
}

export default HogContainer
