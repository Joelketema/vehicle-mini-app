import React, { useEffect, useState } from "react";
import CreateVehicleForm from "./components/CreateVehicleForm";
import VehicleTable from "./components/VehicleTable";
import { getVehicles } from "./services/vehicleService";

const App = () => {
    const [vehicles, setVehicles] = useState([]);

    const fetchVehicles = async () => {
        try {
            const response = await getVehicles();
            setVehicles(response.data);
        } catch (error) {
            console.error("Error fetching vehicles:", error);
        }
    };

    useEffect(() => {
        fetchVehicles();
    }, []);

    const handleVehicleAdded = () => {
        fetchVehicles();
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">
                Vehicle Management
            </h1>

            <div className="grid grid-cosl-1 xl:grid-cols-2 gap-6">
                <div>
                    <CreateVehicleForm onVehicleAdded={handleVehicleAdded} />
                </div>

                <div>
                    <VehicleTable
                        vehicles={vehicles}
                        setVehicles={setVehicles}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
