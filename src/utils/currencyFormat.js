// format currency
const currencyFormat = (number) => {
	return (number || "")
			.toString()
			.replace(/^0|\./g, "")
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

export default currencyFormat