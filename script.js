const handleOpen = () => {
    const tooltip = document.getElementById('popover')
    const userContainer = document.getElementById('user-container')
    const mobileShare = document.getElementById('mobile-share')
    const shareBtn = document.getElementById('share-container')

    if (window.innerWidth <= 480) {
        if (userContainer.style.display === 'flex' || userContainer.style.display === '') {
            userContainer.style.display = 'none'
            mobileShare.classList.add('mobileActive')
            mobileShare.classList.toggle('hide-on-mobile')
        }
        else {
            userContainer.style.display = 'flex'
            mobileShare.classList.remove('mobileActive')
            mobileShare.classList.toggle('hide-on-mobile')
        }
    }
    else {
        if (tooltip.style.display === 'none' || tooltip.style.display === '') {
            tooltip.style.display = 'block'
            shareBtn.classList.add('active')
        }
        else {
            tooltip.style.display = 'none'
            shareBtn.classList.remove('active')
        }

    }
}

const shareBtn = document.querySelectorAll('#share-container')

shareBtn.forEach(btn => {
    btn.addEventListener('click', handleOpen)
})