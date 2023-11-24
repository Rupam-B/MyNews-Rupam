import { combineReducers } from "redux";
import addNewsOne from "./getNews";
import addNewsTwo from "./carNewsTwo";
import addNewsThree from "./carNewsThree";

const rootReducers = combineReducers ({
    addNewsOne:addNewsOne,
    addNewsTwo:addNewsTwo,
    addNewsThree:addNewsThree
})

export default rootReducers