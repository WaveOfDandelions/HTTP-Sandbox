import http from "node:http";

// Заголовки CORS
const setCORSHeaders = (res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST");
	res.setHeader("Access-Control-Max-Age", "86400"); // 24 часа
};

const server = http.createServer((req, res) => {
	setCORSHeaders(res);

	// Preflight Запрос
	if (req.method === "OPTIONS") {
		res.writeHead(200);
		res.end();
		return;
	}

	if (req.url === "/data" && req.method === "GET") {
		const responseData = { message: "Data Get Successfully" };
		res.writeHead(200, { "Content-Type": "application/json" });
		res.end(JSON.stringify(responseData));
	} else {
		res.writeHead(404, { "Content-Type": "application/json" });
		res.end(JSON.stringify({ error: "Ресурс не найден" }));
	}
});

const port = 5050;
server.listen(port, () => {
	console.log(`Сервер запущен на порту ${port}`);
});
