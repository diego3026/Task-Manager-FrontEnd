import Alert from '@mui/material/Alert';
import './AlertSucess.css';

export default function AlertSucess() {

    return (
        <div className="alertSucess">
            <div className='alertSucess__background'>
            </div>
            <div className='alertSucess__container'>
                <Alert sx={{ mb: 2 }}>
                    Tarea creada exitosamente!
                </Alert>
            </div>
        </div>
    );
}
