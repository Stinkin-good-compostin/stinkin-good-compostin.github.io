let form = document.getElementById("SubForm")

form.addEventListener("submit", (e) => {
	e.preventDefault()

	let email = document.getElementById("email").value
	let phone = document.getElementById("phone").value
	let address_location = document.getElementById("address-location").value
	let dump_location = document.getElementById("dump-location").value
	console.log(email, phone, address_location, dump_location)

	fetch("http://75.227.237.196:25565/subscribe", {
		method: "POST",
		body: JSON.stringify({ email: email, phone: phone, address_location: address_location, dump_location: dump_location }),
	})
		.then((data) => data.json()) 
		.then((data) => console.log(data))
})
