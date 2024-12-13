import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Maintenance"],
        default: "Active",
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});

export const Vehicle = mongoose.model("Vehicle", vehicleSchema);
