const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

//num gives each new list item a unique id
let num = 0;
button.addEventListener("click", () => {
    formText = input.value;
    input.value = "";
    listItem = document.createElement("li");
    listItem.id = `list${num}`
    //listNum stores the id of the list item permanently
    const listNum = num;
    num++;
    listSpan = document.createElement("span");
    delButton = document.createElement("button");

    ul.appendChild(listItem);
    listItem.appendChild(listSpan);
    listItem.appendChild(delButton);

    listSpan.innerText = formText;
    delButton.innerText = "Delete";

    delButton.addEventListener("click", () => {
        ul.removeChild(document.querySelector(`#list${listNum}`));
        num--;
    })
})