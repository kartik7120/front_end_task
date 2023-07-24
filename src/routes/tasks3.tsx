import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';

interface Planets {
    climate: string;
    diameter: number;
    gravity: string;
    name: string;
    orbital_period: number;
    population: number;
    residents: string[];
    rotation_period: number;
    surface_water: number;
    terrain: string;
    url: string;
}

export default function Tasks3() {
    const [planets, setPlanets] = useState<Planets[]>([])

    useEffect(() => {
        const getPlanets = async () => {
            const query = await fetch("https://swapi.dev/api/planets/");
            const data = await query.json();
            setPlanets(data.results);
        }
        getPlanets();
    }, [])

    return (
        <div className="m-12">
            <h1 className="text-3xl font-bold underline text-center mb-10">
                This data was taken from starwars api called <a href="https://swapi.dev/">SWAPI</a>
            </h1>
            {planets.length > 0 ? <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={planets}
                    columns={[
                        { field: 'name', headerName: 'Name', width: 200, },
                        { field: 'climate', headerName: 'Climate', width: 200 },
                        { field: 'diameter', headerName: 'Diameter', width: 200 },
                        { field: 'gravity', headerName: 'Gravity', width: 200 },
                        { field: 'orbital_period', headerName: 'Orbital Period', width: 200 },
                        { field: 'population', headerName: 'Population', width: 200 },
                        { field: 'residents', headerName: 'Residents', width: 200 },
                        { field: 'rotation_period', headerName: 'Rotation Period', width: 200 },
                        { field: 'surface_water', headerName: 'Surface Water', width: 200 },
                        { field: 'terrain', headerName: 'Terrain', width: 200 },
                        { field: 'url', headerName: 'URL', width: 200 },
                    ]}
                    getRowId={(row) => row.name}
                />
            </div> : (
                <p className="text-xl">Loading...</p>
            )}
        </div>
    )
}
