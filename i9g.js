function copyText() {
    const tempInput = document.body.appendChild(document.createElement('input'));
    tempInput.style.display = 'none';
    return (text) => {
        tempInput.style.display = 'inline';
        tempInput.value = '‽';
        tempInput.select();
        document.execCommand('copy');
        tempInput.style.display = 'none';
    }
}

document.querySelector('.bang').addEventListener('click', copyText());