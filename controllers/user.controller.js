import User from "../models/user.model.js"

export const getUsers= async (req,res) => {
    try {
        const user = await User.find()
     res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const getUser = async () => {}
export const createUser = async (req,res) =>{
    try {
        const createUser = await User.create(req.body);
        res.status(200).json(createUser)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export  const updateUser = async () =>{}
export const deleteUser = async () => {}