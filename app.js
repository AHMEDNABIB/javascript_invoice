const detailsButton = document.getElementById("detail-submit-btn");

detailsButton.addEventListener("click", function (params) {
	const buyerDetails = document.getElementById("buyer-details-input");
	// console.log("Buyer Details ", buyerDetails);

	document.getElementById("buyer-info").innerText = buyerDetails.value;

	buyerDetails.value = "";
});
