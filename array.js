let myArray = [] ;
function addToArray()
 {
    const inputArray = document.getElementById("a1").value;
    myArray.push(inputArray);
    document.getElementById("a1").value=""; 
}
function  displayArray(){
    const Arraydisplay = document.getElementById("a2");   
    Arraydisplay.innerHTML = "";
    myArray.forEach((value, sheikhshahzad ) => {
    const listitem = document.createElement("li");
listitem.textContent = `${sheikhshahzad} = ${value}`;
Arraydisplay.appendChild(listitem);

    });

}