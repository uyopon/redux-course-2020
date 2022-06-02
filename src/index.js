import { createStore } from 'redux'
import { increment, decrement } from './actions'
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
})

themeBtn.addEventListener('click', () => {
})

themeBtn.addEventListener('click', () => {
})

store.subscribe(()=>{//                                АВТОМАТИЧЕСКИ
    const thisstate = store.getState() 
    counter.textContent = thisstate
})

store.dispatch({type:'INIT_APPLICATION'})//        АВТОМАТИЧЕСКИ