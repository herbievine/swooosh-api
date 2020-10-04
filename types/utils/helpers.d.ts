import express from 'express';
import Yup from "yup";
import { Global } from "../global";
declare const error: (msg: string, stack: any, status?: number, res?: express.Response) => Promise<void>;
declare const success: (data: object | string, res: express.Response) => Promise<express.Response<any>>;
declare const validate: (data: any, validator: Yup.ObjectSchema<object & Global.URL>) => Promise<Global.URL>;
export { error, success, validate };
