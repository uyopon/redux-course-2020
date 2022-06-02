import { ASYNK_INCREMENT, DECREMENT, INCREMENT } from "../consts"

export function rootReducer(state, action){

    if (action.type=== INCREMENT){
        return state+1
    }
    else if (action.type=== DECREMENT){
        return state-1
    }
    else if(action.type === ASYNK_INCREMENT){
        setTimeout(()=>{ 
            return state+1

        },1000)

    }

    return state
}