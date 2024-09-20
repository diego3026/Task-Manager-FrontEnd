import Swal from 'sweetalert2';

export default function AlertError(message:string) {

    return (
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: message,
            showConfirmButton: false,
            customClass:{
                container: "swal__container"
            }
        })
    );
}
