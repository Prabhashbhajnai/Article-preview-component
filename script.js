const handleOpen = () => {
    const tooltip = document.getElementById('popover')

    if (tooltip.style.display === 'none' || tooltip.style.display === '') {
        tooltip.style.display = 'block'
        shareBtn.classList.add('active')
    }
    else {
        tooltip.style.display = 'none'
        shareBtn.classList.remove('active')
    }
}

const shareBtn = document.querySelector('#share-container')
shareBtn.addEventListener('click', handleOpen)

// if (window.innerWidth <= 480) {
//     const shareBtn = document.getElementsById('share-container')
//     shareBtn.addEventListener('click', handleOpen)
// } else {
//     const shareBtn = document.getElementsByClassName('share-container')[1]
//     shareBtn.addEventListener('click', handleOpen)
// }