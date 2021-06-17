export let loadMenu = () => {
    let content = document.getElementById('content')
    let title = document.createElement('h1')
    let titleTextNode = document.createTextNode("Menu")
    title.setAttribute('id', 'title')
    title.setAttribute('class', 'font')
    title.appendChild(titleTextNode)
    content.appendChild(title)
    console.log('menu loaded??')
}