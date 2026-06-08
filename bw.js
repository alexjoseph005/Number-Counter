const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const increasebtn=document.getElementById("increasebtn");
const countlabel=document.getElementById("countlabel");
let count=0;
decreasebtn.addEventListener("pointerdown", () => {
    count--;
    countlabel.textContent=count;
});
resetbtn.addEventListener("pointerdown", () => {
    count=0;
    countlabel.textContent=count;
});
increasebtn.addEventListener("pointerdown", () => {
    count++;
    countlabel.textContent = count;
});