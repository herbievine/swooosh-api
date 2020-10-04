/// <reference types="qs" />
/// <reference types="express" />
import limitRate from 'express-rate-limit';
declare const limit: limitRate.RateLimit;
declare const slow: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>;
export { limit, slow };
