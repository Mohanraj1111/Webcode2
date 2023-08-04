import axios from 'axios'
import { toast } from 'react-toastify';

export const rentCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        await axios.post('/api/rent/rentcar', reqObj)
        toast.success('You have successfully reserved your car!');
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
        toast.error('Error. Please try later!');
    }

}