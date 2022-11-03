import { useState } from "react"
import Nav from "./Nav"

import porkerData from "../porkers_data"
import HogTiles from "./HogTiles"
import FilterDropdown from "./FilterDropdown"
import FilterRadio from "./FilterRadio"
import SortCheckBoxes from "./SortCheckBoxes"

function App() {
	const [hogs, setHogs] = useState(porkerData)
	const [showGreased, setShowGreased] = useState("")

	// ! THE BOOLEAN OPTION
	// Still need the three states of the SORT
	const [sortAsc, setSortAsc] = useState(true)
	const [useSort, setUseSort] = useState(false)

	// const [count, setCount] = useState(0)

	const filterGreased = () => {
		// take in the hogs array, and return the filtered of greased or not greased
		// Three different returns
		// ALL PIGS => state is empty
		// ONLY GREASED => state === "GREASED"
		// ONLY NOT GREASED => state === "NOT GREASED"

		switch (showGreased) {
			case "GREASED":
				return hogs.filter((hog) => hog.greased)
			case "NOT":
				return hogs.filter((hog) => !hog.greased)
			default:
				return hogs
		}
	}

	const sortHogs = () => {
		// FIRST NO SORT => useSort is false
		// SECOND SORT ASC => useSort is true, sortAsc is true
		// THIRD SORT DESC=> useSort is true, sortAsc is false

		if (useSort && sortAsc) {
			return [...filterGreased()].sort((a, b) => {
				if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
				if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
				return 0
			})
		} else if (useSort && !sortAsc) {
			return [...filterGreased()].sort((a, b) => {
				if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
				if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
				return 0
			})
		} else {
			return filterGreased()
		}
	}

	return (
		<div className="App">
			<Nav />
			{/* <button onClick={() => setCount((prevState) => prevState + 1)}>
				CLICK ME
			</button>
			{count} */}
			{/* <FilterDropdown
				setShowGreased={setShowGreased}
				showGreased={showGreased}
			/> */}
			<FilterRadio setShowGreased={setShowGreased} showGreased={showGreased} />

			<SortCheckBoxes
				setSortAsc={setSortAsc}
				sortAsc={sortAsc}
				useSort={useSort}
				setUseSort={setUseSort}
			/>

			<HogTiles hogs={sortHogs()} />
		</div>
	)
}

export default App
