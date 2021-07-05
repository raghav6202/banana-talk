var btnTranslate = document.querySelector("#btn-translate");
var InputTxt = document.querySelector("#txt-input");
//The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.
//The querySelector() method returns the first element that matches a specified CSS/HTML selector(s) in the document.

btnTranslate.addEventListener("click", clickEventHandler);
InputTxt.addEventListener("click",clickEventHandler);
function clickEventHandler()
{
    console.log("clicked");
    console.log("Input",InputTxt.value)
}
