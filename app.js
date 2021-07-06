var btnTranslate = document.querySelector("#btn-translate");
var InputTxt = document.querySelector("#txt-input");
var OutputDisplay = document.querySelector("#output")
//The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.
//The querySelector() method returns the first element that matches a specified CSS/HTML selector(s) in the document. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

btnTranslate.addEventListener("click", clickEventHandler);
InputTxt.addEventListener("click",clickEventHandler);
// addEventListener----->>>  https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// var serverURL= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTransaltionalURL(text)
{
    return serverURL + "?" + "text= " + text;
}


function errorHandler(error)
{
    console.log("error occured");
    alert("There are certain server issues PLEASE TRY AGAIN LATER");

}  //display part of error handling

function clickEventHandler()
{
    // console.log("clicked");
    // console.log("Input",InputTxt.value)
     //InputTxt.value reads the input

//   OutputDisplay.innerText = "banana text " + InputTxt.value;
// The innerText property prints or returns the text content of the specified node, and all its descendants
var inputText = InputTxt.value;

fetch(getTransaltionalURL(inputText))
.then(response => response.json())
.then(json => {

    var translatedText = json.contents.translated;
    OutputDisplay.innerText = translatedText;
})
  .catch(errorHandler) 
};
