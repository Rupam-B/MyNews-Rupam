import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

            
const initialstate ={
    src :"https://mirror24news.com/wp-content/uploads/2023/11/Untitled-18-1.jpg",
    news:'प्रत्याशी महन्त रामसुन्दर दास ने चर्च पहुंचकर लोगों से किया अपील'
}

const addNewsOne = (state=initialstate,action )=>{
    if (action.type ==='FirstData'){
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

export default addNewsOne