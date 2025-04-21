const numberButton = document.getElementById('numberButton');
const cardButton = document.getElementById('cardButton');



function getRandomInt(min, max) {
    min = Math.ceil(min); // Округляем вверх
    max = Math.floor(max); // Округляем вниз
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roll(){
    let cardNumber = getRandomInt(1, 14);

    switch (cardNumber) {
        case 1:
            cardButton.textContent = "… у которого такой же рост (примерно)";
            break;
        case 2:
            cardButton.textContent = "… у которого кроссовки такого же цвета как у тебя, или имеют эти цвета";
            break;
        case 3:
            cardButton.textContent = "… у кого кофта на молнии";
            break;
        case 4:
            cardButton.textContent = "… у кого прическа с чёлкой";
            break;
        case 5:
            cardButton.textContent = "… у кого есть предмет одежды/аксессуар, который ты бы сам(а) хотел(а)";
            break;
        case 6:
            cardButton.textContent = "… те же цвета в одежде (например, у обоих синий+чёрный)";
            break;
        case 7:
            cardButton.textContent = "… на кофте/футболке есть слово";
            break;
        case 8:
            cardButton.textContent = "… завязаны шнурки";
            break;
        case 9:
            cardButton.textContent = "… брекеты / очки";
            break;
        case 10:
            cardButton.textContent = "… цепочка / ободок";
            break;
        case 11:
            cardButton.textContent = "… у которого длинные волосы";
            break;
        case 12:
            cardButton.textContent = "… есть бирка/наклейка, не снятая с одежды";
            break;
        case 13:
            cardButton.textContent = "… у кого в одежде больше 3 цветов";
            break;
        case 14:
            cardButton.textContent = "… у кого в имени есть та же буква что и в твоем имени (хотя бы одна буква)";
            break;
    }
}

function getNumber() {
    let number = getRandomInt(1, 9);

    numberButton.textContent = number;
}