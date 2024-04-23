import { uraniumFeverAPIService } from "src";

uraniumFeverAPIService.post("/user", (_res: any, _req: any) => {
  console.log("post on /user", _res, _req);
});
