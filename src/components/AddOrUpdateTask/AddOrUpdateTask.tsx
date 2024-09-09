import './AddOrUpdateTask.css'
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button, TextField } from '@mui/material';
import { DatePicker, Space } from 'antd';
import { useState } from 'react';

const { RangePicker } = DatePicker;

const AddOrUpdateTask = ({data, onClose }:any) => {
    const [taskName, setTaskName] = useState(data?.name || '');
    const [taskDescription, setTaskDescription] = useState(data?.description || '');

    const handleAdd = () => {
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
                        <input placeholder='Nombre de la tarea' type="text" onChange={handleNameChange} value={taskName}/>
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
                                    <h3 className='date__content-start'>DD/MM/YYYY</h3>
                                </div>
                                <div className="state__date">
                                    <h3 className='date__title'>Fecha de fin:</h3>
                                    <h3 className='date__content-end'>DD/MM/YYYY</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content__flex-date">
                        <h3 className="rangeDate__title">Ingresar fechas:</h3>
                        <div className="rangeDate__content">
                            <Space direction="vertical" size={12}>
                                <RangePicker style={{background: 'var(--grayLight)'}}/>
                            </Space>
                        </div>
                    </div>
                    <div className="content__flex-button">
                        <Button className='button' onClick={handleAdd} variant="contained" style={{ borderRadius: 10, backgroundColor: "var(--greenSucess)", textTransform: "capitalize", display: 'flex', gap: 10, padding: '10px 30px' }}>
                            <FaCheck style={{ fontSize: 'large' }} />
                            Agregar tarea
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddOrUpdateTask;