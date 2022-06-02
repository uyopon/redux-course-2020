import { DECREMENT, INCREMENT } from "./consts";

export function increment(){
    return{type: INCREMENT}
}

export function decrement(){
    return{type: DECREMENT}
}