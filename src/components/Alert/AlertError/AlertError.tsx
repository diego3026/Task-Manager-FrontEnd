import Alert from '@mui/material/Alert';
import './AlertError.css';

export default function AlertError() {

    return (
        <div className="alertError">
            <div className='alertError__background'>
            </div>
            <div className='alertError__container'>
                <Alert severity='error' sx={{ mb: 2 }}>
                    Error creando tarea!
                </Alert>
            </div>
        </div>
    );
}
