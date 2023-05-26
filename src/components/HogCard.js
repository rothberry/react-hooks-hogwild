import { useState } from "react"
import HogDetail from "./HogDetail"

const HogCard = ({ hog }) => {
	const {
		name,
		image,
		specialty,
		weight,
		greased,
		["highest medal achieved"]: highest,
	} = hog
	const [showDetails, setShowDetails] = useState(false)
	const square = 300

	const renderDetails = () => {
		return (
			<div className="description">
				<p>greased: {greased ? "Greased" : "Not Greased"}</p>
				<p>weight: {weight}</p>
				<p>highest medal achieved: {highest}</p>
			</div>
		)
	}

	return (
		<div className="ui card eight wide column pigTile">
			<div className="image" onClick={() => setShowDetails(!showDetails)}>
				<img src={image} alt={name} width={square} height={square} />
			</div>
			<div className="content">
				<h3>{name}</h3>
				<div className="description">{specialty}</div>
			</div>
			<div className="extra content">
				{showDetails ? (
					<HogDetail weight={weight} greased={greased} highest={highest} />
				) : null}
				{/* {showDetails ? renderDetails() : null} */}
			</div>
		</div>
	)
}

export default HogCard
