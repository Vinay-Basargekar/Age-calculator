//Inputs
let dayIn = document.getElementById("day");
let monthIn = document.getElementById("month");
let yearIn = document.getElementById("year");

//Outputs
let dayOut = document.getElementById("DD");
let monthOut = document.getElementById("MM");
let yearOut = document.getElementById("YY");

const form = document.querySelector(".symbol");

form.addEventListener("click", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();
	const date = new Date(); 
	let day = date.getDate();
	let month = 1 + date.getMonth();
	let year = date.getFullYear();

	const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	if (validate()) {
		if (dayIn.value > day) {
			day = day + months[month - 1];
			month = month - 1;
		}
		if (monthIn.value > month) {
			month = month + 12;
			year = year - 1;
		}

		const d = day - dayIn.value;
		const m = month - monthIn.value;
		const y = year - yearIn.value;

		dayOut.innerHTML = d;
		monthOut.innerHTML = m;
		yearOut.innerHTML = y;
	}
}

function validate() {
	const inputs = document.querySelectorAll("input");
	let validator = true;
	inputs.forEach((i) => {
		const parent = i.parentElement;
		if (!i.value) {
			i.style.borderColor = "red";
			parent.querySelector("small").innerText = "this field is required.";
			validator = false;
		}
	});
	if (monthIn.value > 12) {
		monthIn.style.borderColor = "red";
		monthIn.parentElement.querySelector("small").innerText =
			"must be a valid month.";
		validator = false;
	}
	if (dayIn.value > 31) {
		dayIn.style.borderColor = "red";
		dayIn.parentElement.querySelector("small").innerText =
			"must be a valid day.";
		validator = false;
	}
	return validator;
}
