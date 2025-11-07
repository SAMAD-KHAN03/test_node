const http = require("node:http");
const IP = "0.0.0.0";
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/info") {
    res.writeHead(200, "OK", { "content-type": "application/json" });
    res.write(JSON.stringify({ name: "samad", town: "bhopal" }), (error) => {
      if (error) console.log(error);
      else {
        console.log("response sent successfully");
      }
      res.end();
    });
  }
});
server.listen(PORT, IP, () => {
  console.log("listening on ", server.address());
});
