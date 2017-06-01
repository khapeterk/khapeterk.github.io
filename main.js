if (typeof(Storage) !== "undefined") {
  let button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    myButtonClick();
  });
} else {
    console.log("sorry! No Web Storage support..");
}

function myButtonClick() {
  console.log("myButtonClick!");
}

var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

console.log('Your OS: '+OSName);
