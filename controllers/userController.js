const user_Model = require("../models/user_data")
const mongoose = require('mongoose')
class userController{
    static get_all = async (req, res) => {
        const user_data = await user_Model.find()
        if(user_data)
            res.send(user_data)
        else {
            res.status(404).json({
                "message":"No data found"
            })
        }
    }
    static get_by_id = async (req, res) => {
        const id = req.params.id;
        // const isuser = await user_Model.findById(id)
        const isuser = mongoose.Types.ObjectId.isValid(id)
        if (!isuser) {
            res.status(404).json({
                "message":"User Id invalid"
            })
        }
        else {
            const user = await user_Model.findById(id)
            res.status(200).json(user)
        }
    }
    static create_user = async (req, res) => {
        const { firstname, lastname, age, email } = req.body;
        const isemail = await user_Model.findOne({
            email:email
        })
        if (isemail) {
            res.status(400).json({
                "message":"Email id already present"
            })
        }
        else {
            const new_user = user_Model({
                firstname: firstname,
                lastname: lastname,
                age: age,
                email:email
            })
            const save_user = await new_user.save();
            res.status(200).json({
                "message":"New User created!"
            })
        }
    }
    static update_user = async (req, res) => {
        const id = req.params.id
        const isuser = mongoose.Types.ObjectId.isValid(id)
        if (!isuser) {
            res.status(404).json({
                "message":"User not found"
            })
        }
        else {
            const updateuser = await user_Model.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                "message":"User updated successfully"
            })
        }
    }
    static delete_user = async (req, res) => {
        const id = req.params.id
        const isuser = mongoose.Types.ObjectId.isValid(id)
        if (!isuser) {
            res.status(404).json({
                "message": "User not found"
            })
        }
        else {
            const deleteuser = await user_Model.findByIdAndDelete(id)
            res.status(200).json({
                "message":"User deleted successfully"
            })
        }
    }
}   
module.exports = userController