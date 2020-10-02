import Yup from "yup";
declare const error: (msg: string, stack: any, status?: number, res?: any) => Promise<void>;
declare const success: (data: object, res: any) => Promise<any>;
declare const validate: (data: any, validator: Yup.ObjectSchema<object & {
    _id: string;
}>) => Promise<object & {
    _id: string;
}>;
export { error, success, validate };
