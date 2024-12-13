import { Vehicle } from "../models/vehicle.js";

export const getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createVehicle = async (req, res) => {
    try {
        const duplicateVehicle = await Vehicle.findOne({ name: req.body.name });
        if (duplicateVehicle) {
            return res
                .status(400)
                .json({ message: "Vehicle name already exists" });
        }
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateStatusOfVehicle = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedVehicle = await Vehicle.findByIdAndUpdate(
            id,
            { status, lastUpdated: Date.now() },
            { new: true }
        );
        if (!updatedVehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }
        res.status(200).json(updatedVehicle);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
