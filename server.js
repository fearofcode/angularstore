var connect = require('connect');

connect.createServer(
    connect.static("app")
).listen(5000);

console.log("Now serving at http://localhost:5000");