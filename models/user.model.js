import {model , Schema} from 'mongoose';

const  userSchema = new Schema(
    {
         name:{
            type:String,
            required:[true,'please enter name field']
         },
         lastName:{
            type:String,
            minLength:1
         },
         email:{
             type:String,
             unique:true
         },
         mobile:{
            type:Number,
            min:10
         },
         dateOfBirth:Date,
         address: Schema.Types.Mixed,
         image:String,

    },
    {
        timestamps:true
    }
)

const User = model('User',userSchema);

export default User