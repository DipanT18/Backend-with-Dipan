import mongoose, { model, mongo } from 'mongoose'
import { Hospital } from './hospitals.models'

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true
    },
    admittedin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Hospital
    }
}, {timestamps: true})

export const Patients = mongoose.model("Patients", patientSchema) 