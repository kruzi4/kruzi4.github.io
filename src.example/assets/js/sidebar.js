const sidebar = document.querySelector('.sidebar')
const burgerBtns = document.querySelectorAll('.burger')
const body = document.querySelector('body')

for (let btn of burgerBtns) {
    btn.onclick = () => {
        let isSidebarActive = sidebar.style.display === 'block'

        sidebar.style.display = isSidebarActive ? 'none' : 'block'

        if (isSidebarActive) {
            body.classList.remove('background')
        } else {
            body.classList.add('background')
        }
    }
}

onresize = () => {
    if (body.clientWidth >= 1440) {
        sidebar.style.display = undefined
    }
}
