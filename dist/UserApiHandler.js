"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("src");
src_1.uraniumFeverAPIService.post("/user", (_res, _req) => {
    console.log("post on /user", _res, _req);
});
