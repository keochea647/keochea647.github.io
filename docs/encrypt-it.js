/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const encryptBtn = document.getElementById("encrypt-it");
    const resetBtn = document.getElementById("reset");
    encryptBtn.addEventListener('click',encryption,false);
    resetBtn.addEventListener('click',reset,false);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function encryption() {
    if(document.getElementById("cipher-type").value==="shift") {
      document.getElementById("result").innerHTML = shiftCipher(document.getElementById("input-text").value);
    }
    else {
      document.getElementById("result").innerHTML = randomizer(document.getElementById("input-text").value);
    }
    fontChange();
  }
  function fontChange() {
    let fontBtn = document.getElementsByName("text-size");
    for(let i = 0; i < fontBtn.length; i++) {
      if(fontBtn[i].checked) {
        document.getElementById("result").style.fontSize=fontBtn[i].value;
      }
    }
  }
  function reset() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("input-text").value = "";
  }
  function shiftCipher(text) {
    let result = "";
    let z;
    let a;
    let checkbox = document.getElementById("all-caps");
    let charUni;

    if(checkbox.checked) {
      text = text.toUpperCase();
      z ='Z'.charCodeAt(0);
      a = 'A'.charCodeAt(0);
    }
    else {
      text = text.toLowerCase();
      z ='z'.charCodeAt(0);
      a = 'a'.charCodeAt(0);
    }

    for(let i = 0; i < text.length; i++) {
      charUni = text.charCodeAt(i);
      if(charUni < a || charUni > z) {
        result+=String.fromCharCode(charUni);
      }
      else if (charUni == z) {
        result+=String.fromCharCode(a);
      }
      //letter is between 'a' and 'y'
      else {
        result+=String.fromCharCode(charUni+1);
      }
    }
    return result;
  }
  function randomizer(text) {
    let result = "";
    let z;
    let a;
    let checkbox = document.getElementById("all-caps");
    let charUni;
    if(checkbox.checked) {
      text = text.toUpperCase();
      z ='Z'.charCodeAt(0);
      a = 'A'.charCodeAt(0);
    }
    else {
      text = text.toLowerCase();
      z ='z'.charCodeAt(0);
      a = 'a'.charCodeAt(0);
    }
    //just returns converts to random characters (from a to z)
    
    for(let i = 0; i < text.length; i++) {
      charUni = text.charCodeAt(i);
      //characters not the alphabet are NOT affected
      if(charUni < a || charUni > z) {
        result+=String.fromCharCode(charUni);
      }
      //26 for the range of the alphabet
      else {
        result+=String.fromCharCode(Math.floor(Math.random() * 26) + a);
      }
    }
    return result;
  }
})();

