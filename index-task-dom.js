// 1
let items = document.querySelectorAll('ul#list li');
items = Array.from(items);

function showModal(itemIndex) {
  if (itemIndex < items.length) {
    let currentItem;
    switch (itemIndex) {
      case 0:
        currentItem = items[0];
        break;
      case 1:
        currentItem = items[4];
        break;
      case 2:
        currentItem = items[1];
        break;
      case 3:
        currentItem = items[3];
        break;
      case 4:
        currentItem = items[2];
        break;
    }
    alert(currentItem.textContent);
    setTimeout(() => {
      showModal(itemIndex + 1);
    }, 1000);
  }
}

showModal(0);
// 2
var header = document.getElementById("header");
var visibleSpan = document.getElementById("visibleSpan");
var firstParagraph = document.querySelector("#myDiv p:first-child");
var secondParagraph = document.querySelector("#myDiv p:nth-child(2)");
var thirdParagraph = document.querySelector("#myDiv p:nth-child(3)");
var fourthParagraph = document.querySelector("#myDiv p:nth-child(4)");
var myList = document.getElementById("myList");

header.style.fontWeight = "bold";
header.style.backgroundColor = "green";

visibleSpan.style.display = "inline";

firstParagraph.style.fontWeight = "bold";
secondParagraph.style.color = "red";
thirdParagraph.style.textDecoration = "underline";
fourthParagraph.style.fontStyle = "italic";

myList.style.listStyle = "none";
myList.style.display = "flex";
myList.style.margin = "0";
myList.style.padding = "0";

// 3
let body = document.createElement("body");
let main = document.createElement("main");
let div = document.createElement("div");
let p = document.createElement("p");

main.setAttribute("class", "mainClass check item");
div.setAttribute("id", "myDiv");

p.textContent = "First paragraph";

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

document.documentElement.appendChild(body);

// 4 
let fioInput = document.getElementById("fio");
let phoneInput = document.getElementById("phone");
let birthdayInput = document.getElementById("birthday");
let emailInput = document.getElementById("email");
let submitButton = document.getElementById("submitButton");
let outBlock = document.querySelector(".outBlock");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let fioValue = fioInput.value;
    let phoneValue = phoneInput.value;
    let birthdayValue = birthdayInput.value;
    let emailValue = emailInput.value;

    let dataString = "ПІБ: " + fioValue + "<br>Номер телефону: " + phoneValue + "<br>Дата народження: " + birthdayValue + "<br>Електронна пошта: " + emailValue;

    outBlock.innerHTML = dataString;
});

// 5
let circleElements = document.querySelectorAll(".circle");

circleElements.forEach(function (element) {
    let dataAnimValue = element.getAttribute("data-anim");

    if (dataAnimValue) {
        element.classList.add(dataAnimValue);
    }
});

function isAnimationApplied(element, animationName) {
    let animation = getComputedStyle(element).getPropertyValue("animation-name");
    return animation === animationName;
}

circleElements.forEach(function (element) {
    let dataAnimValue = element.getAttribute("data-anim");

    if (dataAnimValue) {
        let isApplied = isAnimationApplied(element, dataAnimValue);

        if (isApplied) {
            console.log(`Анімація "${dataAnimValue}" застосована до елемента.`);
        } else {
            console.log(`Анімація "${dataAnimValue}" не застосована до елемента.`);
        }
    }
});
