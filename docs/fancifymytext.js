const TXT = document.getElementById('text');
const mooBtn = document.getElementById('moo');

let fancyAlert = true;
let greetingAlert = true;

function bigger() {
    if(greetingAlert) {
        alert("Hello, world! (one time alert)");
        greetingAlert=false;
    }
    TXT.style.fontSize = "24pt";
};
function resetStyle() {
    TXT.style.fontSize = null;
    TXT.style.fontWeight = null;
    TXT.style.color = null;
    TXT.style.textDecoration = null;
};
function fancify() {
    if(fancyAlert) {
        alert('FANCIFY! (one time alert)');
        fancyAlert=false;
    }
    TXT.style.fontWeight = 'bold';
    TXT.style.textDecoration = 'underline';
    TXT.style.color='blue';
};
function radioFunc(caller) {
    if(caller.id == 'fancy') {
        fancify();
        document.getElementById('boring').checked=false;
    }
    else {
        resetStyle();
        document.getElementById('fancy').checked=false;
    }
}
function moo() {
    let str = TXT.value.toUpperCase();
    let parts = str.split(".");
    str = parts.join("-Moo");
    TXT.value = str;
}
mooBtn.addEventListener('click',moo,false);
