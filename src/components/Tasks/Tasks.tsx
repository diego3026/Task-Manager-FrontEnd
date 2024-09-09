import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { IoMdAdd } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaTrashAlt } from "react-icons/fa";
import './Tasks.css'
import AddOrUpdateTask from '../AddOrUpdateTask/AddOrUpdateTask';
import { useEffect, useState } from 'react';
import { RxUpdate } from "react-icons/rx";
import { getAllTasks } from '../../apiService/apiService'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Nombre', width: 140 },
    { field: 'fechaDeInicio', headerName: 'Fecha de inicio', type: 'date', width: 180 },
    { field: 'fechaDeFin', headerName: 'Fecha de fin', type: 'date', width: 180 },
    { field: 'description', headerName: 'Descripcion', type: 'string', width: 400 },
];

// const rows = [
//     { id: 1, name: 'Snow', description: 'Jon', age: 35 },
//     { id: 2, name: 'Lannister', description: 'Cersei', age: 42 },
//     { id: 3, name: 'Lannister', description: 'Jaime', age: 45 },
//     { id: 4, name: 'Stark', description: 'Arya', age: 16 },
//     { id: 5, name: 'Targaryen', description: 'Daenerys', age: null },
//     { id: 6, name: 'Melisandre', description: null, age: 150 },
//     { id: 7, name: 'Clifford', description: 'Ferrara', age: 44 },
//     { id: 8, name: 'Frances', description: 'Rossini', age: 36 },
//     { id: 9, name: 'Roxie', description: 'Harvey', age: 65 },
// ];

const paginationModel = { page: 0, pageSize: 5 };

const Tasks = () => {
    const [isAddTask, setIsAddTask] = useState(false);
    const [isUpdateTask, setIsUpdateTask] = useState(false);
    const [amountRowSelected, setAmountRowSelected] = useState(0);
    const [rowSelected, setRowSelected] = useState<any[]>([]);
    const [rows, setRows] = useState<any[]>([]);

    async function fetchData() {
      try {
        const result = await getAllTasks();
        setRows(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleRemove = () => {
    }

    const handleAdd = () => {
        setIsAddTask(true);
    }

    const handleUpdate = () => {
        setIsUpdateTask(true);
    }

    const onCloseAddTask = () => {
        setIsAddTask(false);
    }

    const onCloseUpdateTask = () => {
        setIsUpdateTask(false);
    }

    const onRowsSelectionHandler = (ids: any[] | GridRowSelectionModel) => {
        const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
        setAmountRowSelected(selectedRowsData.length);
        setRowSelected(selectedRowsData);
    }

    const canRemoveOrUpdate = () => {
        if (amountRowSelected==1){
            return false
        } else {
            return true
        }
    }

    return (
        <div className="tasks">
            <div className="task__buttons">
                <div>
                    <Button disabled={canRemoveOrUpdate()} onClick={handleUpdate} variant="contained" style={{backgroundColor:'var(--greenSucess)', color:"var(--black)",textTransform:"capitalize", display:'flex',gap:10}}>
                        <RxUpdate  style={{fontSize: 'larger'}}/>
                        Actualizar tarea
                    </Button>
                </div>
                <div>
                    <Button disabled={canRemoveOrUpdate()} onClick={handleRemove} variant="contained" style={{backgroundColor:'#ff1915', color:"var(--black)",textTransform:"capitalize", display:'flex',gap:10}}>
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
                        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
            {isAddTask && (
                <AddOrUpdateTask onClose={onCloseAddTask}/> 
            )}
            {isUpdateTask && (
                <AddOrUpdateTask data={rowSelected[0]} onClose={onCloseUpdateTask}/> 
            )}
        </div>
    )
}

export default Tasks;