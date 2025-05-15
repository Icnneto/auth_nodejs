import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    hash: { type: String, required: true },
    salt: { type: String, required: true },
    admin: { type: Boolean, required: true },
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created_at',
        updatedAt: false
    }
});

const userDataMongo = mongoose.model('users', userSchema);

export default userDataMongo;