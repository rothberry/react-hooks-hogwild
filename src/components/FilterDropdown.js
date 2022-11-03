import React from "react"

const Filter = ({ showGreased, setShowGreased }) => {
	const handleFilterChange = (e) => {
		console.log(e.target.value)
    setShowGreased(e.target.value)
	}

	return (
		<div>
			<select value={showGreased} onChange={handleFilterChange}>
				<option value="">ALL</option>
				<option value="GREASED">GREASED</option>
				<option value="NOT">NOT GREASED</option>
			</select>
		</div>
	)
}

export default Filter
