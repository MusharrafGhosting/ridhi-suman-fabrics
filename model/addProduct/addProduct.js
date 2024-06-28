import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    discount: {
        type: Number,
        min: 0,
        max: 100
    },
    category: {
        type: String,
        enum: ['sarees', 'lehengas', 'suits', 'kurtis', 'dupatta', 'chunri'],
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    fabric: {
        type: String,
        trim: true
    },
    brand: {
        type: String,
        trim: true
    },
    stockQuantity: {
        type: Number,
        min: 0,
        required: true
    },
    visibility: {
        type: Boolean,
        default: true
    },
    colors: {
        type: [String],
        default: []
    },
    sizes: {
        type: [String],
        default: []
    },
    image: {
        name: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
}, {
    timestamps: true
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
module.exports = Product;
