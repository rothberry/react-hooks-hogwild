import React from "react"

const SortCheckBoxes = ({ setSortAsc, sortAsc, useSort, setUseSort }) => {
	return (
		<div>
			<label>
				SORT?
				<input
					type="checkbox"
					checked={useSort}
					onChange={() => setUseSort((prev) => !prev)}
				/>
			</label>
			<label hidden={!useSort}>
				ASC?
				<input
					type="checkbox"
					checked={sortAsc}
					onChange={() => setSortAsc((prev) => !prev)}
				/>
			</label>
		</div>
	)
}

export default SortCheckBoxes
