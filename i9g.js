const interrobang = '‽';
const shrugface = '¯\\_(ツ)_/¯';
const lenny = '( ͡° ͜ʖ ͡°)';
const disapproval = 'ಠ_ಠ';


function copyText(emoticon) {
    const tempInput = document.body.appendChild(document.createElement('input'));
    tempInput.style.display = 'none';
    return (text) => {
        tempInput.style.display = 'inline';
        tempInput.value = emoticon;
        tempInput.select();
        document.execCommand('copy');
        tempInput.style.display = 'none';
    }
}

document.querySelector('#interrobang').addEventListener('click', copyText(interrobang));
document.querySelector('#shrugface').addEventListener('click', copyText(shrugface));
document.querySelector('#lenny').addEventListener('click', copyText(lenny));
document.querySelector('#disapproval').addEventListener('click', copyText(disapproval));