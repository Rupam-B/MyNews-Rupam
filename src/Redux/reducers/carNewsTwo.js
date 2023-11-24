import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

            
const initialstate ={
    src :'https://mirror24news.com/wp-content/uploads/2023/11/3-1.jpg',
    news:'कतार में लगकर कलेक्टर, एसपी और सीईओ ने किया मतदान'
}

const addNewsTwo = (state=initialstate,action )=>{
    if (action.type ==='SecondData'){
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

export default addNewsTwo