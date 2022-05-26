const detailsButton = document.getElementById("detail-submit-btn");

detailsButton.addEventListener("click", function (params) {
	const buyerDetails = document.getElementById("buyer-details-input");
	// console.log("Buyer Details ", buyerDetails);

	document.getElementById("buyer-info").innerText = buyerDetails.value;

	buyerDetails.value = "";
});

const addProductBtn = document.getElementById("add-details-btn");

addProductBtn.addEventListener("click", function (params) {
    const infoTable = document.getElementById("info-table");
    console.log(infoTable)
	const itemName = document.getElementById("item-name-input");
	const itemPrice = document.getElementById("item-price-input");
	const itemQuantity = document.getElementById("item-quantity-input");

	// console.log(itemName.value, itemPrice.value, itemQuantity.value);

	{
		// <tr>
		// 	<th>1</th>
		// 	<td>Mark</td>
		// 	<td>Otto</td>
		// 	<td>@mdo</td>
		// </tr>;
	}
    
    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value)
	const tr = document.createElement("tr");
	const th = document.createElement("th");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	const td3 = document.createElement("td");

	th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

});
