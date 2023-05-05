function encryptCaesar() {
    let p = document.getElementById('ptoc-plain').value;
    let s = parseInt(document.getElementById('ptoc-shift').value);
    let o = ''
    for (let i = 0; i < p.length; i++) {
        let j = p.charCodeAt(i);
        if (j >= 65 && j <= 90) {
            j = (j - 65 + s) % 26 + 65;
            let c = String.fromCharCode(j);
            o += c;
        }
        else if (j >= 97 && j <= 122) {
            j = (j-97 + s) % 26 + 97;
            let c = String.fromCharCode(j);
            o += c;
        }
        else {
            o += p[i]
        }
    } 
    document.getElementById('ptoc-ciphertext').innerHTML = o;   
}

function decryptCaesar() {
    let p = document.getElementById('ptoc-plain').value;
    let s = parseInt(document.getElementById('ptoc-shift').value);
    let o = ''
    for (let i = 0; i < p.length; i++) {
        let j = p.charCodeAt(i);
        if (j >= 65 && j <= 90) {
            j = (j - 65 - s) % 26 + 65;
            let c = String.fromCharCode(j);
            o += c;
        }
        else if (j >= 97 && j <= 122) {
            j = (j-97 - s) % 26 + 97;
            let c = String.fromCharCode(j);
            o += c;
        }
        else {
            o += p[i]
        }
    } 
    document.getElementById('ptoc-ciphertext').innerHTML = o;   
}

function Atbash() {
    let p = document.getElementById('ctop-plain').value;
    let o = ''
    for (let i = 0; i < p.length; i++) {
        let j = p.charCodeAt(i);
        if (j >= 65 && j <= 90) {
            j = (j - 90) * -1 + 65;
            let c = String.fromCharCode(j);
            o += c;
        }
        else if (j >= 97 && j <= 122) {
            j = (j - 122) * -1 + 97;
            let c = String.fromCharCode(j);
            o += c;
        }
        else {
            o += p[i]
        }
    } 
    document.getElementById('ctop-ciphertext').innerHTML = o;   
}