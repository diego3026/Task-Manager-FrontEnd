import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { IoMdAdd } from "react-icons/io";
import Button from '@mui/material/Button';
import { FaTrashAlt } from "react-icons/fa";
import './Tasks.css'
import AddOrUpdateTask from '../AddOrUpdateTask/AddOrUpdateTask';
import { useEffect, useState } from 'react';
import { RxUpdate } from "react-icons/rx";
import { getAllTasks, deleteTask } from '../../apiService/apiService'
import Progress from '../Progress/Progress';
import { useAuth } from '../../contexts/AuthProvider';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'Nombre', width: 140 },
    { field: 'start_date', headerName: 'Fecha de inicio', type: 'string', width: 180 },
    { field: 'end_date', headerName: 'Fecha de fin', type: 'string', width: 180 },
    { field: 'description', headerName: 'Descripcion', type: 'string', width: 400 },
    { field: 'status', headerName: 'Estado', type: 'string', width: 400 },
];

// const rows = [
//     { id: 1, name: 'Jon Snow', start_date: '01/01/2023', end_date: '01/02/2023', description: 'Warden of the North' },
//     { id: 2, name: 'Cersei Lannister', start_date: '15/02/2023', end_date: '15/03/2023', description: 'Queen Regent' },
//     { id: 3, name: 'Jaime Lannister', start_date: '01/03/2023', end_date: '01/04/2023', description: 'Kingslayer' },
//     { id: 4, name: 'Arya Stark', start_date: '10/04/2023', end_date: '10/05/2023', description: 'Faceless Assassin' },
//     { id: 5, name: 'Daenerys Targaryen', start_date: '20/05/2023', end_date: '20/06/2023', description: 'Mother of Dragons' },
//     { id: 6, name: 'Melisandre', start_date: '01/06/2023', end_date: '01/07/2023', description: 'Red Priestess' },
//     { id: 7, name: 'Clifford', start_date: '10/07/2023', end_date: '10/08/2023', description: 'Lord of the Vale' },
//     { id: 8, name: 'Frances Rossini', start_date: '15/08/2023', end_date: '15/09/2023', description: 'Archer' },
//     { id: 9, name: 'Roxie Harvey', start_date: '01/09/2023', end_date: '01/10/2023', description: 'Scholar' },
// ];

const Tasks = () => {
    const [isAddTask, setIsAddTask] = useState(false);
    const [isUpdateTask, setIsUpdateTask] = useState(false);
    const [amountRowSelected, setAmountRowSelected] = useState(0);
    const [rowSelected, setRowSelected] = useState<any[]>([]);
    const [rows, setRows] = useState<any[]>([]);
    const [isProgress, setIsProgress] = useState(false);
    const auth = useAuth();

    async function fetchData() {
      try {
        if (auth.token){
            const result = await getAllTasks(auth.user.id,auth.token);
            setIsProgress(true);
            if (result){
                const resultContent = result.content; 

                const filteredRows = resultContent.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    description: item.description,
                    start_date: item.start_date,
                    end_date: item.end_date,
                    status: item.status.name
                }));

                setRows(filteredRows);
                setIsProgress(false);
            }
        }else{
            console.log("Error bearer token");
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchDeleteData(id:any) {
        try {
            if(auth.token){
                const result = await deleteTask(id,auth.token);
                setIsProgress(true);
                if (result){
                    setIsProgress(false);
                }
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleRemove = () => {
        const data = rowSelected[0];
        fetchDeleteData(data.id);
        fetchData();
    }

    const handleAdd = () => {
        setIsAddTask(true);
    }

    const handleUpdate = () => {
        setIsUpdateTask(true);
    }

    const onCloseAddTask = () => {
        setIsAddTask(false);
        fetchData();
    }

    const onCloseUpdateTask = () => {
        setIsUpdateTask(false);
        fetchData();
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
                        initialState={{
                            pagination: {
                              paginationModel: {
                                pageSize: 5,
                              },
                            },
                        }}
                        pageSizeOptions={[10, 20]}
                        checkboxSelection
                        onRowSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
            {isAddTask && (
                <AddOrUpdateTask update={false} onClose={onCloseAddTask}/> 
            )}
            {isUpdateTask && (
                <AddOrUpdateTask update={true} data={rowSelected[0]} onClose={onCloseUpdateTask}/> 
            )}
            {isProgress && <Progress/>}
        </div>
    )
}

export default Tasks;