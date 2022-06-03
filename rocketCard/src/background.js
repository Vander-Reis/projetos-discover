import { backgroundButton } from './elements.js'

export default function randomColorBackground() {
    return '#' + (Math.round(Math.random() * 0XFFFFFF)).toString(16)
}

backgroundButton.addEventListener('click', () => {
    document.querySelector('.card-git').style.backgroundColor = randomColorBackground()
})

