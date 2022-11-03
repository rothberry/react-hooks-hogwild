import React from "react"

const FilterRadio = ({ showGreased, setShowGreased }) => {
	const handleFilterChange = (e) => {
		console.log(e.target.value)
		setShowGreased(e.target.value)
	}

	const isChecked = (val) => {
		// does the current value match our state
		return val === showGreased
	}
	return (
		<div>
			<label>
				<input
					type="radio"
					value=""
					checked={isChecked("")}
					onChange={handleFilterChange}
				/>
				ALL
			</label>
			<label>
				<input
					type="radio"
					value="GREASED"
					checked={isChecked("GREASED")}
					onChange={handleFilterChange}
				/>
				GREASED
			</label>
			<label>
				<input
					type="radio"
					value="NOT"
					checked={isChecked("NOT")}
					onChange={handleFilterChange}
				/>
				NOT GREASED
			</label>
		</div>
	)
}

export default FilterRadio
