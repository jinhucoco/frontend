const { generateService } = require("@umijs/openapi");

generateService({
  requestLibPath: "import request from '@/request'",
  schemaPath: "http://120.46.208.17:8101/api/v2/api-docs",
  serversPath: "./src",
});
