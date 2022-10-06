import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    email:{
      type:String
    },
    birthDate:{
      type:String
    },
    address:{
      type:String
    },
    country:{
      type:String
    }

  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
