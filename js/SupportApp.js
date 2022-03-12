const Hide = document.querySelector("#Hide");
const Agreelink1 = document.querySelector(".Agreelink1");
const Agreelink2 = document.querySelector(".Agreelink2");

function ShowList() {
    Hide.style.display = "inline-block";
}

function HideList() {
    Hide.style.display = "none";
}

Agreelink1.addEventListener("click", ShowList);
Agreelink2.addEventListener("click", HideList);

