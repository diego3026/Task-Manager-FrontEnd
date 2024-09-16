import './AddOrUpdateTask.css'
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button, TextField } from '@mui/material';
import { DatePicker, Space } from 'antd';
import { useState } from 'react';
import { postTask, updateTask } from '../../apiService/apiService'
import { RangePickerProps } from 'antd/es/date-picker';
import dayjs, { Dayjs } from 'dayjs';
import Progress from '../Progress/Progress';
import AlertSucess from '../Alert/AlertSucess';
import AlertError from '../Alert/AlertError';

const { RangePicker } = DatePicker;

const AddOrUpdateTask = ({ update, data, onClose }: any) => {
    const [taskName, setTaskName] = useState(data?.name || '');
    const [taskDescription, setTaskDescription] = useState(data?.description || '');
    const [dates, setDates] = useState<[Dayjs, Dayjs] | null>(data?.start_date && data?.end_date
        ? [dayjs(data.start_date, "DD/MM/YYYY"), dayjs(data.end_date, "DD/MM/YYYY")]
        : null);
    const [dateStart, setDateStart] = useState(data?.start_date ? data.start_date : "dd/mm/yyyy");
    const [dateEnd, setDateEnd] = useState(data?.end_date ? data.end_date : "dd/mm/yyyy");
    const [isProgress, setIsProgress] = useState(false);

    const handleDateChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
        setDates(dates as [Dayjs, Dayjs] | null);
        setDateStart(dateStrings[0])
        setDateEnd(dateStrings[1])
    };

    async function fetchUpdateData(id:any,data:any) {
        setIsProgress(true);
        try {
            const result = await updateTask(id,data);
            if (result){
                setIsProgress(false);
                AlertSucess("Se ha actualizado exitosamente");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsProgress(false);
            AlertError("Algo ha salido mal");
        }
    }

    async function fetchPostData(data:any) {
        setIsProgress(true);
        try {
            const result = await postTask(data);
            if (result){
                setIsProgress(false);
                AlertSucess("Se ha creado exitosamente");
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
            "end_date": dateEnd
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
            {isProgress && <Progress/>}
        </div>
    )
}

export default AddOrUpdateTask;