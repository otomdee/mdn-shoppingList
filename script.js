const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    formText = input.value;
    input.value = "";
    listItem = document.createElement("li");
    listSpan = document.createElement("span");
    delButton = document.createElement("button");
})