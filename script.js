const color = document.getElementById('ubahWarna');
color.addEventListener('click', function() {
    document.body.classList.toggle('biru-muda');
})

const btnRandom = document.createElement('button');
const txtbtnRandom = document.createTextNode('Acak Warna');
btnRandom.appendChild(txtbtnRandom);
btnRandom.setAttribute('type', 'button');
color.after(btnRandom);

btnRandom.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
})