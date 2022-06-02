export function createStore(rootReducer, initialState){

    let state = rootReducer(initialState,{type:'_INIT_'})

    const subscribers = []

    return{
        dispatch(action){
            state = rootReducer(state ,action) //отрисовка actual state
            subscribers.forEach(sub => sub())// передает state в index.js
        },

        subscribe(callback){
            subscribers.push(callback) //пушит подписчика
        },

        getState(){
            return state} //нужен для подписчика
    }
}

//эта ф замыкается=)