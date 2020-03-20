import React from 'react'
import ToastServive from 'react-material-toast';
const toast = ToastServive.new({
  place:'topRight',
  duration:2,
  maxCount:8
});


const Toast = (message,state) => {
    if(!message){
        return;
    }
    switch (state){
        case true:
            toast.success(message)
        break;
        case false:
            toast.error(message)
            break;
        default:
            toast.info(message)
    }
}

export default Toast