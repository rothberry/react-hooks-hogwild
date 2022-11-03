import { useState } from "react"

const HogTile = ({
	hog: { name, image, weight, greased, specialty, highest_medal_achieved },
}) => {
	// const hog = props.hog
	// const name = props.hog.name
	// const image = props.hog.image

	const [showDetails, setShowDetails] = useState(false)
	// const [hideDetails, setHideDetails] = useState(true)

	const toggleDetails = (e) => {
		console.log("CLICKED")
		// setShowDetails(!showDetails)
		setShowDetails((prevState) => !prevState)
	}

	return (
		<div>
			<h1>{name}</h1>
			<img
				src={image}
				alt={name}
				height="300"
				width="300"
				onClick={toggleDetails}
			/>

			{/* if something is true, show the details, if not, show nothing */}
			{showDetails ? (
				<div>
					<p>
						{weight} / {specialty} / {greased ? "GREASED" : "NOT GREASED"} /{" "}
						{highest_medal_achieved}
					</p>
				</div>
			) : null}
		</div>
	)
}

export default HogTile
