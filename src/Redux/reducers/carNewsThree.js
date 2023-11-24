import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialstate ={
    src :"https://mirror24news.com/wp-content/uploads/2023/11/Untitled-24.jpg",
    news:'एंजेलो मैथ्यूज के ‘टाइम्ड आउट’ पर शाकिब अल हसन का पहला'
}

const addNewsThree = (state=initialstate,action )=>{
    if (action.type ==='ThirdData'){
        let {currnews,currimg}=action.payload
        toast.success("Saved succesFully",{
            position: "top-center",
            autoClose: 1000, })
        return  {
            ...state,
            src:currimg,
            news:currnews
        }
        
    }

   else {
        return state
    }

}

export default addNewsThree