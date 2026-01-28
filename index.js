const http = require("http");

const PORT = 9800;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Local CI/CD deployment working");
});

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
