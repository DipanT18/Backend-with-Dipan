import mongoose, { mongo } from 'mongoose'

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        default: "00000"
    },
    specializedIn: [{
        type: String
    }]
}, {timestamps: true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)