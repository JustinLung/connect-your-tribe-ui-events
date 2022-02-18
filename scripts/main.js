const buttons = document.querySelectorAll("a");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {
        buttons[i].classList.toggle("blue");
    });

    buttons[i].addEventListener("dblclick", function () {
        buttons[i].classList.toggle("red");
    });

    buttons[i].addEventListener("keydown", function () {
        buttons[i].classList.toggle("yellow");
    });
}