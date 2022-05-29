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
	// console.log(infoTable)
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

	const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
	const tr = document.createElement("tr");
	const th = document.createElement("th");
	const td1 = document.createElement("td");
	const td2 = document.createElement("td");
	const td3 = document.createElement("td");

	//Dynamically create class element
	td3.classList.add("item-total");

	th.innerText = itemName.value;
	td1.innerText = itemPrice.value;
	td2.innerText = itemQuantity.value;
	td3.innerText = totalPrice;

	tr.appendChild(th);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3); // <td class="item-total">55</td>
	infoTable.appendChild(tr);

	//subTotal();
	totalCalculation();
});

function calculateSubTotal(params) {
	let subTotal = 0;

	const cost = document.getElementsByClassName("item-total");

	// console.log(cost);

	for (let i = 0; i < cost.length; i++) {
		const element = cost[i];

		//console.log(element.innerText)
		const price = parseInt(element.innerText);
		subTotal = subTotal + price;
	}

	//console.log('subTotal', subTotal)
	return subTotal;
}

function totalCalculation(params) {
	const subTotal = calculateSubTotal();
	//console.log("subTotal", subTotal);
	const subTotalToDisplay = document.getElementById("sub-total");
	subTotalToDisplay.innerText = subTotal;

	const tax = subTotal * 0.2;

	document.getElementById("tax").innerText = tax.toFixed(2);
	document.getElementById("grand-total").innerText = subTotal + tax;
	document.getElementById("grand-total-2").innerText = subTotal + tax;
}
