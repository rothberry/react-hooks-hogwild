const HogDetail = ({ greased, weight, highest }) => {
	return (
		<div className="description">
			<p>greased: {greased ? "Greased" : "Not Greased"}</p>
			<p>weight: {weight}</p>
			<p>highest medal achieved: {highest}</p>
		</div>
	)
}

export default HogDetail
