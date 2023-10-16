

document.querySelector('#btn2').onclick = function () {
    document.querySelector('#first').style.visibility = 'visible'
    document.querySelector('#first').style.zIndex = '50'
    document.querySelector('#first').style.right = '0%'
    document.querySelector('#first').style.zIndex = '1'
    document.querySelector('#sec').style.zIndex = '50'
    document.querySelector('#sec').style.right = '100%'
    document.querySelector('#third').style.zIndex = '50'
    document.querySelector('#third').style.right = '-100%'
    document.querySelector('#third').style.visibility = 'hidden'
    document.querySelector('#sec').style.visibility = 'hidden'
}

document.querySelector('#btn3').onclick = function () {
    document.querySelector('#sec').style.visibility = 'visible'
    document.querySelector('#sec').style.zIndex = '50'
    document.querySelector('#sec').style.right = '0%'
    document.querySelector('#sec').style.zIndex = '1'
    document.querySelector('#first').style.zIndex = '50'
    document.querySelector('#first').style.right = '-100%'
    document.querySelector('#third').style.right = '100%'
    document.querySelector('#third').style.zIndex = '-1'
    document.querySelector('#first').style.visibility = 'hidden'
    document.querySelector('#third').style.visibility = 'hidden'

}
document.querySelector('#btn4').onclick = function () {
    document.querySelector('#third').style.visibility = 'visible'
    document.querySelector('#third').style.zIndex = '50'
    document.querySelector('#third').style.right = '0%'
    document.querySelector('#third').style.zIndex = '1'
    document.querySelector('#sec').style.zIndex = '50'
    document.querySelector('#sec').style.right = '-100%'
    document.querySelector('#first').style.right = '100%'
    document.querySelector('#first').style.zIndex = '-1'
    document.querySelector('#first').style.visibility = 'hidden'
    document.querySelector('#sec').style.visibility = 'hidden'
    
}



