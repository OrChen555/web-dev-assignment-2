// ערכי ברירת המחדל של המיכל, כמו שהם ב-CSS
const defaultStyles = {
    'display': 'block',
    'flex-direction': 'row',
    'flex-wrap': 'nowrap',
    'justify-content': 'flex-start',
    'align-items': 'stretch'
};

// האפשרויות שיוצגו בתפריט של כל מאפיין
const options = {
    'display': ['block', 'flex'],
    'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
    'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
    'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    'align-items': ['stretch', 'flex-start', 'flex-end', 'center']
};

// השלבים של המשחק
// start = ערכים שכבר מוגדרים בשלב, controls = המאפיינים שהשחקן יכול לשנות
const levels = [
    {
        instruction: 'החלליות תקועות אחת מתחת לשנייה. הפעילו את מצב flex על הלוח כדי שכל החלליות יסתדרו בשורה אחת.',
        items: ['🚀', '🛸', '🛰️'],
        start: {},
        controls: ['display'],
        answer: {
            'display': 'flex'
        }
    },
    {
        instruction: 'תחנת העגינה נמצאת בקצה השמאלי של הלוח. הצמידו אליה את כל החלליות.',
        items: ['🚀', '🛸', '🛰️'],
        start: { 'display': 'flex' },
        controls: ['justify-content'],
        answer: {
            'justify-content': 'flex-end'
        }
    },
    {
        instruction: 'כל החלליות צריכות להיפגש במרכז הלוח - גם במרכז לרוחב וגם במרכז לגובה.',
        items: ['🚀', '🛸', '👽'],
        start: { 'display': 'flex' },
        controls: ['justify-content', 'align-items'],
        answer: {
            'justify-content': 'center',
            'align-items': 'center'
        }
    },
    {
        instruction: 'סדרו את החלליות בטור אחד מלמעלה למטה, כשהטור צמוד לצד ימין של הלוח.',
        items: ['🚀', '🛸', '🛰️'],
        start: { 'display': 'flex' },
        controls: ['flex-direction', 'align-items'],
        answer: {
            'flex-direction': 'column',
            'align-items': 'flex-end'
        }
    },
    {
        instruction: 'הנחיתו את החלליות על תחתית הלוח: אחת בכל קצה והשלישית באמצע, במרווחים שווים.',
        items: ['🚀', '🛸', '🛰️'],
        start: { 'display': 'flex' },
        controls: ['justify-content', 'align-items'],
        answer: {
            'justify-content': 'space-between',
            'align-items': 'flex-end'
        }
    },
    {
        instruction: 'יש יותר מדי אסטרואידים מכדי שייכנסו לשורה אחת. אפשרו להם לגלוש לשורה נוספת, ומרכזו את האסטרואידים בכל שורה לרוחב הלוח.',
        items: ['☄️', '☄️', '☄️', '☄️', '☄️', '☄️', '☄️', '☄️'],
        start: { 'display': 'flex' },
        controls: ['flex-wrap', 'justify-content'],
        answer: {
            'flex-wrap': 'wrap',
            'justify-content': 'center'
        }
    }
];