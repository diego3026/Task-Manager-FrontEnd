import './AddOrUpdateTask.css'
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { DatePicker, Space } from 'antd';
import { useState } from 'react';
import { postTask, updateTask } from '../../apiService/apiService'
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs, { Dayjs } from 'dayjs';
import Progress from '../Progress/Progress';
import AlertSucess from '../Alert/AlertSucess';
import AlertError from '../Alert/AlertError';
import { useAuth } from '../../contexts/AuthProvider';

const { RangePicker } = DatePicker;

const AddOrUpdateTask = ({ update, data, onClose }: any) => {
    const [taskName, setTaskName] = useState(data?.name || '');
    const [taskDescription, setTaskDescription] = useState(data?.description || '');
    const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(data?.start_date && data?.end_date
        ? [dayjs(data.start_date, "DD/MM/YYYY"), dayjs(data.end_date, "DD/MM/YYYY")]
        : null);
    const [dateStart, setDateStart] = useState(data?.start_date ? data.start_date : "dd/mm/yyyy");
    const [dateEnd, setDateEnd] = useState(data?.end_date ? data.end_date : "dd/mm/yyyy");
    const [status, setStatus] = useState(data?.status ? data?.status : '');
    const [isProgress, setIsProgress] = useState(false);
    const auth = useAuth();

    const handleChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    const handleDateChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
        setDates(dates as [Dayjs, Dayjs] | null);
        setDateStart(dateStrings[0])
        setDateEnd(dateStrings[1])
    };

    async function fetchUpdateData(id: any, data: any) {
        setIsProgress(true);
        try {
            if (auth.token) {
                const result = await updateTask(id, data, auth.token);
                if (result) {
                    setIsProgress(false);
                    AlertSucess("Se ha actualizado exitosamente");
                }
            } else {
                console.log("Error bearer token");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsProgress(false);
            AlertError("Algo ha salido mal");
        }
    }

    async function fetchPostData(data: any) {
        setIsProgress(true);
        try {
            if (auth.token) {
                const result = await postTask(data, auth.token);
                if (result) {
                    setIsProgress(false);
                    AlertSucess("Se ha creado exitosamente");
                }
            }else {
                console.log("Error bearer token + ",auth.token);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsProgress(false);
            AlertError("Algo ha salido mal");
        }
    }

    const handleSave = () => {
        const newData = {
            "name": taskName,
            "description": taskDescription,
            "start_date": dateStart,
            "end_date": dateEnd,
            "status":{
                "name": status,
                "description": "Estado creado"
            }
        }

        if (update) {
            fetchUpdateData(data.id, newData)
        } else {
            fetchPostData(newData)
        }
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(event.target.value);
    }

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskDescription(event.target.value);
    }


    return (
        <div className="addContainer">
            <div className="addContainer__background"></div>
            <div className="addContainer__content">
                <div className="content__flex">
                    <div className="content__flex-title">
                        <input placeholder='Nombre de la tarea' type="text" onChange={handleNameChange} value={taskName} />
                        <IoClose style={{ fontSize: 'x-large' }} onClick={onClose} />
                    </div>
                    <div className="content__flex-contents">
                        <div className="contents__description">
                            <TextField
                                id="outlined-multiline-static"
                                label="Descripcion"
                                multiline
                                sx={{ width: '100%', background: 'var(--grayLight)' }}
                                rows={4}
                                value={taskDescription}
                                onChange={handleDescriptionChange}
                                placeholder='Agregar descripción'
                            />
                        </div>
                        <div className="contents__state">
                            <div className="state">
                                <div className="state__date">
                                    <h3 className='date__title'>Fecha de inicio:</h3>
                                    <h3 className='date__content-start'>{dateStart}</h3>
                                </div>
                                <div className="state__date">
                                    <h3 className='date__title'>Fecha de fin:</h3>
                                    <h3 className='date__content-end'>{dateEnd}</h3>
                                </div>
                            </div>
                            <div>
                                <FormControl sx={{ m: 1, margin:0 }} fullWidth size="small">
                                    <InputLabel id="demo-select-small-label">Estado</InputLabel>
                                    <Select
                                        labelId="demo-select-small-label"
                                        id="demo-select-small"
                                        value={status}
                                        label="Estado"
                                        onChange={handleChange}
                                        sx={{
                                            background:"var(--grayLight)",
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"Creada"}>Creada</MenuItem>
                                        <MenuItem value={"En progreso"}>En progreso</MenuItem>
                                        <MenuItem value={"Completada"}>Completada</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className="content__flex-date">
                        <h3 className="rangeDate__title">Ingresar fechas:</h3>
                        <div className="rangeDate__content">
                            <Space direction="vertical" size={12}>
                                <RangePicker
                                    format="DD/MM/YYYY"
                                    value={dates}
                                    onChange={handleDateChange}
                                    style={{ background: 'var(--grayLight)' }}
                                />
                            </Space>
                        </div>
                    </div>
                    <div className="content__flex-button">
                        <Button className='button' onClick={handleSave} variant="contained" style={{ borderRadius: 10, backgroundColor: "var(--greenSucess)", textTransform: "capitalize", display: 'flex', gap: 10, padding: '10px 30px' }}>
                            <FaCheck style={{ fontSize: 'large' }} />
                            Guardar tarea
                        </Button>
                    </div>
                </div>
            </div>
            {isProgress && <Progress />}
        </div>
    )
}

export default AddOrUpdateTask;