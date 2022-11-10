let fancyAlert=true;
let greetingAlert=true;
    
function bigger() {
    let txt=document.getElementById("text");
    if(greetingAlert) {
        alert("Hello, world! (one time alert)");
        greetingAlert=false;
    }
    txt.style.fontSize = "24pt";
};
function resetStyle() {
    let txt=document.getElementById("text");
    txt.style.fontSize = null;
    txt.style.fontWeight = null;
    txt.style.color = null;
    txt.style.textDecoration = null;
};
function fancify() {
    let txt=document.getElementById("text");
    if(fancyAlert) {
        alert('FANCIFY! (one time alert)');
        fancyAlert=false;
    }
    txt.style.fontWeight = 'bold';
    txt.style.textDecoration = 'underline';
    txt.style.color='blue';
};
function radioFunc(caller) {
    if(caller.id == 'fancy') {
        fancify();
    }
    else {
        resetStyle();
    }
}
function mooFunc() {
    let txt=document.getElementById("text");
    let str = txt.value.toUpperCase();
    let parts = str.split(".");
    str = parts.join("-Moo");
    txt.value = str;
}