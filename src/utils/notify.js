import { toast } from 'react-toastify';

export const notifySuccess = (message = 'Success!') => toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'notifySignInSuccess'
});

export const notifyFailure = (message = 'Something went wrong. Please try again!') => toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    className: 'notifySignInFailure'
});