import { createStore } from 'redux'
import { increment, decrement, asynkIncrement } from './actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

let counter = document.getElementById('counter')
let addBtn = document.getElementById('add')
let cubBtn = document.getElementById('sub')
let asyncBtn = document.getElementById('async')
let themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0) // сперва происходит вызов

addBtn.addEventListener('click', () => {
    store.dispatch(increment()) })

cubBtn.addEventListener('click', () => {
    store.dispatch(decrement())   })

asyncBtn.addEventListener('click', () => {
    store.dispatch(asynkIncrement())

})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

store.subscribe(()=>{//                                АВТОМАТИЧЕСКИ
    const thisstate = store.getState() 
    counter.textContent = thisstate
})

store.dispatch({type:'INIT_APPLICATION'})//        АВТОМАТИЧЕСКИ