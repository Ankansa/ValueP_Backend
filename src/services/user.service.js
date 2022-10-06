import User from '../models/user.model';

//Add new name
export const newUser = async (body) => {
  const mailCheck = await User.findOne({email:body.email})
  if(mailCheck){
    throw new Error("Mail ID already Exist")
  }else{
  const data = await User.create(body);
  return data;
}
};

//get all name
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//update single name
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single name
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};


