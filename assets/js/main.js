const deleteButton= document.querySelector("button");
const options=document.querySelectorAll("option");

deleteButton.addEventListener("click",e=>{
    var selcetMenu = document.getElementById("farbeAuswahlen");
    selcetMenu.remove(selcetMenu.selectedIndex);

})