import React, { useEffect, useState } from "react";
import { getVehicles, updateVehicle } from "../services/vehicleService";

const VehicleTable = ({ vehicles, setVehicles }) => {
    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async () => {
        const data = await getVehicles();

        setVehicles(data.data);
    };

    const handleStatusUpdate = async (id, newStatus) => {
        await updateVehicle(id, newStatus);
        loadVehicles();
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Vehicle List</h1>
            <table className="table-auto w-full border border-gray-200">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2 border">Vehicle Name</th>
                        <th className="p-2 border">Status</th>
                        <th className="p-2 border">Last Updated</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                      {vehicles === undefined && vehicles?.length === 0 && (
                        <div className="text-center">No vehicles found</div>
                    )}
                    {vehicles.map((vehicle) => (
                        <tr key={vehicle._id}>
                            <td className="p-2 border">{vehicle.name}</td>
                            <td className="p-2 border">{vehicle.status}</td>
                            <td className="p-2 border">
                                {new Date(vehicle.lastUpdated).toLocaleString()}
                            </td>
                            <td className="p-2 border">
                                <select
                                    value={vehicle.status}
                                    onChange={(e) =>
                                        handleStatusUpdate(
                                            vehicle._id,
                                            e.target.value
                                        )
                                    }
                                    className="p-1 border rounded"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Maintenance">
                                        Maintenance
                                    </option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VehicleTable;
