import { Global } from '../global';
import { Mongoose } from 'mongoose';
import Yup from 'yup';
declare const setMiddleware: (app: Global.ExpressApp, setMiddle: Global.setMiddleware[]) => Promise<void>;
declare const useMiddleware: (app: Global.ExpressApp, useMiddle: any[]) => Promise<void>;
declare const establishConnection: (username: string, password: string) => Promise<void>;
declare const save: (data: any, model: Mongoose["Model"], validator: Yup.ObjectSchema) => Promise<void>;
declare const find: (id: string, model: Mongoose["Model"]) => Promise<unknown>;
export { setMiddleware, useMiddleware, establishConnection, save, find };
