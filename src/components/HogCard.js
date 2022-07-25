import { useState } from "react"
import HogDetails from "./HogDetails"

const HogCard = ({ hog }) => {
	const [showDetails, setShowDetails] = useState(false)

	const { name, image, greased, specialty, weight } = hog
	const highestMedal = hog["highest medal achieved"]

	// When the user clicks on the hog tile, display the other details about the hog (its specialty, weight, greased, and highest medal achieved)

	const toggleDetails = (event) => {
		// console.log(event)
		setShowDetails(!showDetails)
		// setShowDetails(prevState => !prevState)
	}

	const createDetails = () => (
		<HogDetails
			name={name}
			weight={weight}
			highestMedal={highestMedal}
			specialty={specialty}
			greased={greased}
		/>
	)

	return (
		<div id={`hog-card-${name}`} key={name}>
			<h1>{name}</h1>
			<img
				src={image}
				alt={name}
				height={100}
				onClick={() => setShowDetails(!showDetails)}
			/>
			{/* <img src={image} alt={name} height={100} onClick={toggleDetails} /> */}
			{showDetails ? createDetails() : null}
		</div>
	)
}
export default HogCard
