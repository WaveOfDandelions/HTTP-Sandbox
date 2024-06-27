// Функция для отправки GET-запроса
function getData() {
	fetch("http://localhost:5050/data", {
		method: "GET",
		headers: {
			"Content-Type": "text/plain",
			// "Content-Type": "application/json",
			// Authorization: "x365dds7999",
		},
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error("Network response was not ok");
		})
		.then((data) => {
			document.getElementById("response").textContent =
				JSON.stringify(data);
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

let serverData = document.querySelector(".getData");

serverData.addEventListener("click", getData);
