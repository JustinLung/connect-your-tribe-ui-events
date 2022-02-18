const buttons = document.querySelectorAll("a");
let timer;

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
    buttons[i].addEventListener("mousedown", onMouseDown);
    buttons[i].addEventListener("mouseup", onMouseUp);
}

function onMouseDown() {
    const self = this
    timer = setTimeout(() => {
        self.classList.toggle('green')
    }, 1000)
}

function onMouseUp() {
    clearTimeout(timer)
}
