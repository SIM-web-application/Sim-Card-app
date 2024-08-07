import mongoose, { Types } from "mongoose";

const UserSchemal = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        age:{
            type: Number,
            required: true,
        }
    }, {timestamps: true}
)

const Users = mongoose.model("Users", UserSchemal);
export default Users;