import './styles.css'

let counter = document.getElementById('counter')
let addBtn = document.getElementById('add')
let cubBtn = document.getElementById('sub')
let asyncBtn = document.getElementById('async')
let themeBtn = document.getElementById('theme')

let state = 0

function render() { counter.textContent = state.toString() }

addBtn.addEventListener('click', () => {
    state++
    render()
})

cubBtn.addEventListener('click', () => {
    state--
    render()
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        state++
        render()
    }, 500)
    state--
    render()
})

themeBtn.addEventListener('click', () => {
    state--

})

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

render()