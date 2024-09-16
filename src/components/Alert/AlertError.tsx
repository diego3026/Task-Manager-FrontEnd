import Swal from 'sweetalert2';
import './AlertError.css';

export default function AlertError(message:string) {

    return (
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
            showConfirmButton: false,
            timer: 1500
        })
    );
}
