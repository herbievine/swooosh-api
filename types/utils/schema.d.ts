import mongoose from 'mongoose';
import * as yup from 'yup';
declare const urlSchema: mongoose.Schema<any>;
declare const urlValidationSchema: yup.ObjectSchema<{
    id: string;
    url: string;
    redirect: string;
    shortUrl: string;
    clicks: number;
    createdOn: string;
}, object>;
export { urlSchema, urlValidationSchema };
