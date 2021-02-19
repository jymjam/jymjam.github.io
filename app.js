const modal_bg = document.querySelector('.modal-bg')
const modal_close = document.querySelector('.modal-close')
const react = document.getElementById('react')
const python = document.getElementById('python')
const nodejs = document.getElementById('nodejs')
const git = document.getElementById('git')
const clang = document.getElementById('clang')
const linux = document.getElementById('linux')
// dynamic modal content
const modalContentDiv = document.querySelector('.modalContentDiv') 

const title = modalContentDiv.querySelector('h2')
const desc = modalContentDiv.querySelector('p')
const img = modalContentDiv.querySelector('img')

react.addEventListener('click', () => {
    modal_bg.classList.add('modal-bg-active')
    console.log(img); // fix img 
    title.textContent = 'about react'
    desc.textContent = 'been using react native a lot lately'
})

python.addEventListener('click', () => {
    modal_bg.classList.add('modal-bg-active')
    title.textContent = 'about python'
    desc.textContent = 'using python'
})

nodejs.addEventListener('click', () => {
    modal_bg.classList.add('modal-bg-active')
    title.textContent = 'about nodejs'
    desc.textContent = 'using nodejs all day everyday'
})

git.addEventListener('click', () => {
    modal_bg.classList.add('modal-bg-active')
    title.textContent = 'about git'
    desc.textContent = 'using nodejs all the time'
})

clang.addEventListener('click', () => {
    modal_bg.classList.add('modal-bg-active')
    title.textContent = 'about clang'
    desc.textContent = 'using nodejs all the time'
})

linux.addEventListener('click', () => {
    modal_bg.classList.add('modal-bg-active')
    title.textContent = 'about linux'
    desc.textContent = 'using nodejs all the time'
})

// modal close
modal_bg.addEventListener('click', () => {
    modal_bg.classList.remove('modal-bg-active')
})