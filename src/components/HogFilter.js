import React from "react"

const HogFilter = ({
	showGreased,
	showAll,
	setShowAll,
	setShowGreased,
	sortBy,
	setSortBy,
}) => {
	const toggleGreased = (event) => {
		console.log(event)
		// When i click the first time:
		// set the showALl to false and show Greased to true
		if (showAll) {
			setShowAll(!showAll)
		}
		setShowGreased(!showGreased)
	}

	const selectSortCondition = (event) => {
		console.log(event.target)
		let newSortCondition = event.target[event.target.selectedIndex].value
		setSortBy(newSortCondition)
		// debugger
	}

	return (
		<div id="filter-bar">
			<span>FILTER SETTINGS</span>
			{": "}
			{/* HTML BOOLEAN??? */}
			<select id="sort-hogs" onChange={selectSortCondition}>
				<option value="">Default</option>
				<option value="name">Name</option>
				<option value="weight">Weight</option>
			</select>
			<label for="greased">GREASED????</label>
			<input
				type="checkbox"
				id="greased?"
				name="greased"
				// if it's the page loading, then it will be blank, and show ALL the hogs
				// If the user has clicked the button at all, it will show EITHER allGreased or noGreased
				defaultChecked={showAll ? false : showGreased}
				onChange={toggleGreased}
			/>
		</div>
	)
}

export default HogFilter
