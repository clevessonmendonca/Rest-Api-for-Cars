import mongoose, { Schema } from 'mongoose'

const CarModel = new Schema({
    marca: String,
    modelo: String,
    versao: String,
    ano: Number,
    quilometragem: Number,
    tipoCambio: String,
    precoVendo: Number
}, {timestamps: true})

export default mongoose.model('Car', CarModel)