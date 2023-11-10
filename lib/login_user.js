import mongoose from "mongoose"
import {Schema, model, models} from "mongoose"

const EmailSchema = new Schema({
  email: {type: String, required: true},
})
export const Product = models.Product || model("Email", EmailSchema)
