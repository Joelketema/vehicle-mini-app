import React, { useState } from "react";
import { addVehicle } from "../services/vehicleService";

const CreateVehicleForm = ({ onVehicleAdded }) => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("Active");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name) {
            alert("Please enter a vehicle name");
            return;
        }

        try {
            const response = await addVehicle(name, status);

            if (response.status !== 201) {
                throw new Error(response.response?.data?.message);
            }

            setName("");
            setStatus("Active");

            if (onVehicleAdded) {
                onVehicleAdded();
            }
        } catch (error) {
            console.log(error);
            alert("Error adding vehicle: " + error.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-md shadow-md"
        >
            <h2 className="text-xl font-bold mb-4">Add New Vehicle</h2>

            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                >
                    Vehicle Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter vehicle name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                >
                    Status
                </label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Maintenance">Maintenance</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
            >
                Add Vehicle
            </button>
        </form>
    );
};

export default CreateVehicleForm;
