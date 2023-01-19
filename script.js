const color = document.getElementById('ubahWarna');
color.addEventListener('click', function() {
    document.body.classList.toggle('biru-muda');
})

const newBtn = document.createElement('button');
const fnBtn = document.createTextNode('Acak Warna');
newBtn.appendChild(fnBtn);
newBtn.setAttribute('type', 'button');
newBtn.after(color);