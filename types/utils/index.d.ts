import { Global } from '../global';
declare const setMiddleware: (app: Global.ExpressApp, setMiddle: Global.setMiddleware[]) => Promise<void>;
declare const useMiddleware: (app: Global.ExpressApp, useMiddle: Global.useMiddleware[]) => Promise<void>;
declare const establishConnection: (username: string, password: string) => Promise<void>;
export { setMiddleware, useMiddleware, establishConnection };
