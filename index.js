const Hapi = require("hapi");

const server = Hapi.server({
  "port": 8050,
  "host": "localhost"
});

server.route({
  "method": "GET",
  "path": "/",
  "handler": (request, h) => {
    return "Hello, world! API for docker deployments";
  }
});

server.route({
  "method": "GET",
  "path": "/api",
  "handler": (request, h) => {
    return "Hello, world!";
  }
});

server.route({
  "method": "GET",
  "path": "/api/healthcheck",
  "handler": (request, h) => {
    return {"status": "OK"};
  }
});


const init = async () => {
  
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  
  console.log(err);
  process.exit(1);
});

init();