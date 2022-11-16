/*
 * Starter file 
 */
const WHO = document.createElement("img");
WHO.src="https://media.tenor.com/vzBr4xHSEIUAAAAM/hamster-shocked.gif";
WHO.id='who';

const DONE = document.createElement("img");
DONE.src="https://media.tenor.com/uCBhZENaMOoAAAAM/hamster-cute.gif";
DONE.id='done';

const MAX_AGE = 125;

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
      let clearBtn = document.getElementById("reset");
      let updateBtn = document.getElementById("update");
      clearBtn.addEventListener("click",clear,false);
      updateBtn.addEventListener("click",updatePreferences,false);
      getPage();
    }
  
    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).
    function updatePreferences() {
        let first = document.getElementById('first-name');
        let last = document.getElementById('last-name');
        let age = document.getElementById('age');
        let colorMode = document.getElementById('mode');
        if(first.value)
          window.localStorage.setItem("first",first.value);
        if(last.value)
          window.localStorage.setItem("last",last.value);
        if(colorMode.value)
          window.localStorage.setItem("color-mode",colorMode.value);
        if(!isNaN(age.value) && age.value > 0 && age.value < MAX_AGE) {
          window.localStorage.setItem("age",age.value);
        }
        getPage();
    }
    function clear() {
        // clears local storage
        localStorage.clear();
        // clears input boxes
        document.getElementById("first-name").value="";
        document.getElementById("last-name").value="";
        document.getElementById("age").value="";
        // resets the default color mode to light
        let temp = 'light';
        let selectOption = document.getElementById('mode');
        for(let i, j = 0; i = selectOption.options[j]; j++) {
          if(i.value == temp) {
            selectOption.selectedIndex = j;
            break;
          }
        }
        getPage();
    }
    function getPage() {
      let first = window.localStorage.getItem("first");
      let last = window.localStorage.getItem("last");
      let age = window.localStorage.getItem("age");
      let colorMode = window.localStorage.getItem("color-mode");
      let str;
      // checks if local storage exists
      if(!first || !last || !age || !colorMode) {
        str = "Waiting for more information..." + 
              "\nCURRENT INFO =" +
              "\nFirst: " + first +
              "\n | Last: " + last + 
              "\n | Age:" + age +
              "\n | Color Mode: " + colorMode;
        gifUpdate(WHO);
      }
      else {
        str = `Hello ${first} ${last}. I see you are ${age} years old, and your current color mode is ${colorMode}. Nice to meet you!`;
        gifUpdate(DONE);
      }
      document.getElementById('greetings').innerHTML=str;

      if(!colorMode || colorMode == 'light') {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
      }
      else {
        document.body.style.background = 'black';
        document.body.style.color = 'white';
      }
    }
    function gifUpdate(e) {
      let gif = document.getElementById('gif');
      if(!gif.hasChildNodes()) {
        gif.appendChild(e);
      }
      else {
        if(gif.firstChild.id !== e.id.toLowerCase()) {
          gif.removeChild(gif.firstChild);
          gif.appendChild(e);
        }
      }
    }
})();