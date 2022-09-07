import Swal from 'sweetalert2';

export const swalAlert = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  icon: 'error',
  timer: 2000
})