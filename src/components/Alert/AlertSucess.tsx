import Swal from 'sweetalert2';

export default function AlertSucess(message:string) {

    return (
        Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500
        })
    );
}
