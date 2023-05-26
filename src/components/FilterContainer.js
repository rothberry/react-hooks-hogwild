import React from "react"

const FilterContainer = ({ showGreased, setShowGreased }) => {
	const toggleGreased = () => {
		setShowGreased((prev) => !prev)
	}
	return (
		<div>
			<label>
				Show Greased :{" "}
				<input type="checkbox" onChange={toggleGreased} checked={showGreased} />
			</label>
		</div>
	)
}

export default FilterContainer
