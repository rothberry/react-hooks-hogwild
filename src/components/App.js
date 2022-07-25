import { useState } from "react"
import Nav from "./Nav"
import HogContainer from "./HogContainer"
import HogFilter from "./HogFilter"

import hogs from "../porkers_data"

const App = () => {
	// console.log({ hogs })
	const [showGreased, setShowGreased] = useState(false)

	// Will only be true on page load, or if we add a reset button or something
	const [showAll, setShowAll] = useState(true)

	const [sortBy, setSortBy] = useState("")

	// function toggleGreased(event) {
	const toggleGreased = (event) => {
		console.log(event)
		// When i click the first time:
		// set the showALl to false and show Greased to true
		if (showAll) {
			setShowAll(!showAll)
		}
		setShowGreased(!showGreased)
	}

	const sortHogs = () => {
		if (sortBy == "") {
			return filterHogs()
		} else {
			return filterHogs().sort((currentHog, nextHog) => {
				if (sortBy == "name") {
					if (currentHog.name <= nextHog.name) {
						return -1
					} else {
						return 1
					}
				} else if (sortBy == "weight") {
					if (currentHog.weight <= nextHog.weight) {
						return -1
					} else {
						return 1
					}
				}
			})
		}
	}

	// Use the showGreased boolean to FILTER our hogs
	const filterHogs = () => {
		if (showAll) {
			return hogs
		} else if (showGreased) {
			return hogs.filter((hog) => {
				return hog.greased
			})
		} else {
			return hogs.filter((hog) => {
				return !hog.greased
			})
		}
	}

	return (
		<div className="App">
			<Nav />
			{/* When the app first loads, display a tile for each hog in the porker_data.js file. In the tile, display the name and image for each hog.*/}
			<HogFilter
				showGreased={showGreased}
				showAll={showAll}
				// toggleGreased={toggleGreased}
				setShowAll={setShowAll}
				setShowGreased={setShowGreased}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>
			<HogContainer hogs={sortHogs()} />
		</div>
	)
}

export default App

{
	/* We need to CONTAIN these hogs inside of a CONTAINER */
}
{
	/* <HogCard hog={hogs[0]} />
			<HogCard hog={hogs[1]} />
			<HogCard hog={hogs[2]} />
			<HogCard hog={hogs[3]} />
			<HogCard hog={hogs[4]} /> */
}
{
	/* <div id={`hog-card-${firstHog.name}`}>
				<h1>{firstHog.name}</h1>
				<img src={firstHog.image} alt={firstHog.name} F />
			</div>
			<div id={`hog-card-${secondHog.name}`}>
				<h1>{secondHog.name}</h1>
				<img src={secondHog.image} alt={secondHog.name} F />
			</div> */
}
