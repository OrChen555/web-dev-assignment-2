const itemsBox = document.getElementById('items');
const instruction = document.getElementById('instruction');
const levelCount = document.getElementById('level-count');

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

function showLevel(index) {
    currentLevel = index;
    chosenStyles = {};

    const level = levels[index];

    levelCount.textContent = 'שלב ' + (index + 1) + ' מתוך ' + levels.length;
    instruction.textContent = level.instruction;

    showItems(level);
    applyStyles();
}

showLevel(0);