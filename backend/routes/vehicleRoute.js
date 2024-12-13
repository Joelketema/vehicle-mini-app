import {
    getVehicles,
    createVehicle,
    updateStatusOfVehicle,
} from "../controller/vehicleController.js";
import express from "express";

const router = express.Router();

router.get("/", getVehicles);
router.post("/", createVehicle);
router.put("/:id", updateStatusOfVehicle);

export default router;
