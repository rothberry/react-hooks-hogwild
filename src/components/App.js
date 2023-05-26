import React, { useState } from "react"
import Nav from "./Nav"
import HogContainer from "./HogContainer"

import hogs from "../porkers_data"
import FilterContainer from "./FilterContainer"
console.log(hogs)
function App() {
	const [showGreased, setShowGreased] = useState(true)

	const filterGreased = () => {
		return hogs.filter(({ greased }) => greased === showGreased)
	}

	return (
		<div className="App">
			<Nav />
			<FilterContainer
				showGreased={showGreased}
				setShowGreased={setShowGreased}
			/>
			<HogContainer hogs={filterGreased()} />
		</div>
	)
}

export default App
