import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { IoMdAdd } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaTrashAlt } from "react-icons/fa";
import './Tasks.css'
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'nombre', headerName: 'Nombre', width: 140 },
    { field: 'fechaDeInicio', headerName: 'Fecha de inicio', type: 'date', width: 180 },
    { field: 'fechaDeFin', headerName: 'Fecha de fin', type: 'date', width: 180 },
    { field: 'descripcion', headerName: 'Descripcion', type: 'string', width: 400 },
];

const rows = [
    { id: 1, nombre: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, nombre: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, nombre: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, nombre: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, nombre: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, nombre: 'Melisandre', firstName: null, age: 150 },
    { id: 7, nombre: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, nombre: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, nombre: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

const Tasks = () => {
    const navigate = useNavigate();

    const handleRemove = () => {
        navigate("/prueba");
    }

    const handleAdd = () => {
        navigate("/prueba");
    }

    return (
        <div className="tasks">
            <div className="task__buttons">
                <div>
                    <Button onClick={handleRemove} variant="contained" style={{backgroundColor:'#ff1915', color:"var(--black)",textTransform:"capitalize", display:'flex',gap:10}}>
                        <FaTrashAlt style={{fontSize: 'larger'}}/>
                        Eliminar tarea
                    </Button>
                </div>
                <div>
                    <Button className='button' onClick={handleAdd} variant="contained" style={{backgroundColor:"var(--blueGray)",textTransform:"capitalize", display:'flex', gap:10}}>
                        <IoMdAdd style={{fontSize: 'x-large'}}/>
                        Agregar tarea
                    </Button>
                </div>
            </div>
            <div className="tasks__table">
                <Paper sx={{ height: '100%', width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[10, 20]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
            <div className='culo'>

            </div>
        </div>
    )
}

export default Tasks;