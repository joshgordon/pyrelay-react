import path from "path";
import express from "express";

const PORT_NUMBER = 3000;
const DIST_DIR = path.resolve (__dirname, "..", "dist");
const MEDIA_DIR = path.resolve (__dirname, "..", "resources");

/** Instantiate your
    express server instance **/
const server = express ();

server.set ("json spaces", 2);

/** Tells express to serve files
    located in your build directory -> ../dist/ **/
server.use ("/", express.static (DIST_DIR));
server.use ("/resources", express.static (MEDIA_DIR));
server.use ("*", express.static (DIST_DIR));

/** Start your server instance,
    and point your browser to localhost:PORT_NUMBER **/
server.listen (PORT_NUMBER, () => {
  console.info ("Express is listening on port", PORT_NUMBER);
});
