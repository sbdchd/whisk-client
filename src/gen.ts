import generator from "@whisklabs/grpc";

const error = await generator.generator({
  dir: "protos", // path to root of proto folder
  out: "out", // output path for generated result
  version: "№123", // optional string for version
  exclude: /some|regexp/, // optional regexp for exclude files
  debug: true, // generate json debug files,
  messageRequired: false, // enable strict required mode for messages (default: false)
});

console.log(error); // true | false
