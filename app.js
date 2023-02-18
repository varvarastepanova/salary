function zpInMonth() {
    let zph = document.getElementById('zph').value;
    let hpw = document.getElementById('hpw').value;
    let noh = document.getElementById('noh').value;
    document.getElementById('zp').innerText = +noh * +zph * +hpw * 4;
}