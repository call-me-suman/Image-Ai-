import { Document } from "mongoose";
import { Schema, model, models } from "mongoose";


export interface IImage extends Document{
    title: string;
    transformationURl: string;
    publicID: string;
    secureURL: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationURL?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id:string;
        firstName:string;
        lastname:string;
    }
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema (
{
    title:{type:String , required:true  },
    transformationURl :{type:String,required:true},
    publicID:{type:String,required:true},
    secureURL:{type:URL,required:true},
    width:{type:Number},
    height:{type:Number},
    config:{type:Object},
    transformationURL:{type:URL},
    aspectRatio:{type:String},
    color:{type:String},
    prompt:{type:String},
    author:{type:Schema.Types.ObjectId,ref:"user"},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}

}
)

const Image = models?.Image || model('image',ImageSchema)

export default Image