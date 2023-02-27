let out = document.querySelector('.output');

function findOparetor() {
    let x = document.getElementById('inputnumber').value;
    if (x[0] == '+') {
        num = x[5];
    } else {
        num = x[2];
    }
    if (num == 3) {
        out.innerHTML = 'Grameen';
    } else if (num == 4) {
        out.innerHTML = 'Banglalink';
    } else if (num == 7) {
        out.innerHTML = "Grameen";
    } else if (num == 5) {
        out.innerHTML = 'Talitok';
    } else if (num == 9) {
        out.innerHTML = 'Banglalink';
    } else if (num == 6) {
        out.innerHTML = 'Airtel';
    } else {
        out.innerHTML = 'No oparetor found for  ' + num;
    }
}