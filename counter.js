function test() {

    var counter = document.querySelector("#counter");
    var nb = counter.querySelector("h1");
    var buttonsContainer = counter.querySelector(".counter-buttons");
    var buttons = buttonsContainer.querySelectorAll("div");
    var buttonPlus = buttons[0];
    var buttonMinus = buttons[1];

    buttonPlus.addEventListener("click", function add() {
        nb.innerHTML = Number(nb.innerHTML) + 1;
    });

    buttonMinus.addEventListener("click", function add() {
        nb.innerHTML = Number(nb.innerHTML) - 1;
    });   
}
test();

