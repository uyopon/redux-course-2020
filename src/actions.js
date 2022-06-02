import { ASYNK_INCREMENT, DECREMENT, INCREMENT } from "./consts";

export function increment(){
    return{type: INCREMENT}
}

export function decrement(){
    return{type: DECREMENT}
}


export function asynkIncrement(){
    return{type: ASYNK_INCREMENT}
}

