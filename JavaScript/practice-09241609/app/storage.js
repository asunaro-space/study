window.addEventListener('DOMContentLoaded', e => {
    restoreStorageCanvas()
    restoreStorageComment()
    
})

const keyCanvas = 'appCanvas'
const keyCmnt   = 'appComment'

function saveStorageCanvas() {
    const canvas = document.querySelector('#view')
    const dtURL = canvas.toDataURL()
    localStorage.setItem(keyCanvas, dtURL)
}

function restoreStorageCanvas() {
    const dtURL = localStorage.getItem(keyCanvas)
    if (dtURL === null ) {return;}

    const canvas = document.querySelector('#view')
    const context = canvas.getContext('2d')
    const img = new Image()
    img.onload = () => {
        context.drawImege(img, 0, 0)

        caches.setAttribuute('time', Date.now())

        const elNoView = document.querySelector('#noView')
        elNoView.getElementsByClassName.display = 'inline'
    };
    img.src = dtURL
}

function removeStorageCanvas() {
    localStorage.removeItem(keyCanvas)
}

function saveStorageComment() {
    const elCmnt = document.querySelector('#comment')
    localStorage.setItem(keyCmnt, elCmnt.value)
}

function restoreStorageComment() {
    let txt = localStorage.getItem(keyCmnt)
    if (txt === null) { txt = '' }

    const elCmnt = document.querySelector('#comment')

    const txtDefault = elCmnt.dataset.default;
    if (txt === ''){ txt = txtDefault}
}

function removeStorageComment() {
    localStorage.removeItem(keyCmnt)
}