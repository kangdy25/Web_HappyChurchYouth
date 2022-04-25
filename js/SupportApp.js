const Hide = document.querySelector("#Hide");
const Agreelink = document.querySelector(".Agreelink");

Agreelink.addEventListener("click", () => {
    if (Agreelink.innerHTML == " [약관 보기] ") {
        Agreelink.innerHTML = " [약관 닫기] ";
    } else {
        Agreelink.innerHTML = " [약관 보기] ";
    }

    Hide.classList.toggle("hide");
});
