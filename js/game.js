const itemsBox = document.getElementById('items');
const instruction = document.getElementById('instruction');
const levelCount = document.getElementById('level-count');
const controls = document.getElementById('controls');
const message = document.getElementById('message');
const checkButton = document.getElementById('check-button');
const resetButton = document.getElementById('reset-button');
const nextButton = document.getElementById('next-button');

let currentLevel = 0;
let chosenStyles = {}; // המאפיינים שהשחקן בחר בשלב הנוכחי

// כל הערכים שצריכים לחול על המיכל עכשיו
function getStyles() {
    const level = levels[currentLevel];
    return Object.assign({}, defaultStyles, level.start, chosenStyles);
}

function applyStyles() {
    const styles = getStyles();

    for (const property in styles) {
        itemsBox.style.setProperty(property, styles[property]);
    }
}

function showItems(level) {
    itemsBox.innerHTML = '';

    for (let i = 0; i < level.items.length; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = level.items[i];
        itemsBox.appendChild(item);
    }
}

// בונה תפריט בחירה לכל מאפיין שאפשר לשנות בשלב
function showControls(level) {
    controls.innerHTML = '';

    level.controls.forEach(function (property) {
        const row = document.createElement('label');
        row.className = 'control';

        const name = document.createElement('span');
        name.textContent = property;

        const select = document.createElement('select');

        options[property].forEach(function (value) {
            const option = document.createElement('option');
            option.textContent = value;
            select.appendChild(option);
        });

        select.value = getStyles()[property];

        select.addEventListener('change', function () {
            chosenStyles[property] = select.value;
            applyStyles();
        });

        row.appendChild(name);
        row.appendChild(select);
        controls.appendChild(row);
    });
}

// בודק אם כל המאפיינים של השלב קיבלו את הערך הנכון
function isCorrect() {
    const styles = getStyles();
    const answer = levels[currentLevel].answer;

    for (const property in answer) {
        if (styles[property] !== answer[property]) {
            return false;
        }
    }

    return true;
}

function showMessage(text, type) {
    message.textContent = text;
    message.className = 'message show ' + type;
}

function hideMessage() {
    message.textContent = '';
    message.className = 'message';
}

function checkAnswer() {
    if (!isCorrect()) {
        showMessage('הפתרון עדיין לא נכון. קראו שוב את ההוראה, שנו את הערכים ונסו שוב.', 'wrong');
        return;
    }

    if (currentLevel === levels.length - 1) {
        showMessage('כל הכבוד! סיימתם את כל ' + levels.length + ' השלבים של המשחק.', 'correct');
        nextButton.textContent = 'התחלה מחדש';
    } else {
        showMessage('כל הכבוד! הצלחתם לסדר את הלוח כמו שנדרש.', 'correct');
    }

    nextButton.hidden = false;
}

// אחרי השלב האחרון הכפתור מחזיר לתחילת המשחק
function goToNextLevel() {
    if (currentLevel === levels.length - 1) {
        showLevel(0);
    } else {
        showLevel(currentLevel + 1);
    }
}

// החזרת השלב לערכי ברירת המחדל
function resetLevel() {
    chosenStyles = {};

    showControls(levels[currentLevel]);
    applyStyles();
    hideMessage();

    nextButton.hidden = true;
}

function showLevel(index) {
    currentLevel = index;
    chosenStyles = {};

    const level = levels[index];

    levelCount.textContent = 'שלב ' + (index + 1) + ' מתוך ' + levels.length;
    instruction.textContent = level.instruction;

    showItems(level);
    showControls(level);
    applyStyles();
    hideMessage();

    nextButton.hidden = true;
    nextButton.textContent = 'לשלב הבא';
}

checkButton.addEventListener('click', checkAnswer);
resetButton.addEventListener('click', resetLevel);
nextButton.addEventListener('click', goToNextLevel);

showLevel(0);