import { createStore } from './createStore'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

let counter = document.getElementById('counter')
let addBtn = document.getElementById('add')
let cubBtn = document.getElementById('sub')
let asyncBtn = document.getElementById('async')
let themeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0) // сперва происходит вызов


addBtn.addEventListener('click', () => {
    store.dispatch({type:'INCREMENT'}) })

cubBtn.addEventListener('click', () => {
    store.dispatch({type:'DECREMENT'})   })


asyncBtn.addEventListener('click', () => {
})

themeBtn.addEventListener('click', () => {
})

themeBtn.addEventListener('click', () => {
})


store.subscribe(()=>{//передаем callbck в createStore.ЗАПУСКАЕТСЯ АВТОМАТИЧЕСКИ
    const state = store.getState() //state = rootReducer
    counter.textContent = state
})

store.dispatch({type:'INIT_APPLICATION'})//запускается автоматически атрисовывает счетчик