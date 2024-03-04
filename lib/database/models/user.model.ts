import { Document } from "mongoose";
import { Schema, model, models } from "mongoose";
// echo "# image" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/call-me-suman/image.git
// git push -u origin main
 
// export interface IImage extends Document{
//     clerkId: string;
//     email:string;
//     username:string;
//     photo:string;
//     firstName:string;
//     lastName:string;
//     planId:Number;
//     creditBalance:Number;

// }

const UserSchema = new Schema (
{
    clerkId:{type:String , required:true,unique:true},
    email :{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true},
    photo:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    planId:{type:Number,default:1},
    creditBalance:{type:Number,default:10}

}
)

const User = models?.User || model('user',UserSchema)

export default User