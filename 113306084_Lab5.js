const mathInput = document.getElementById('math-grade');
const englishInput = document.getElementById('english-grade');
const submitButton = document.getElementById('submit-btn');
const gradesTable = document.getElementById('grades-table').querySelector('tbody');
const mathAverageCell = document.getElementById('math-average');
const englishAverageCell = document.getElementById('english-average');
const overallAverageCell = document.getElementById('overall-average');

const grades = [];

submitButton.addEventListener('click', () => {
    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade) || mathGrade < 0 || mathGrade > 100 || englishGrade < 0 || englishGrade > 100) {
        alert('Please enter valid grades between 0 and 100.');
        return;
    }

    const average = ((mathGrade + englishGrade) / 2).toFixed(2);
    grades.push({ math: mathGrade, english: englishGrade, average: parseFloat(average) });

    const rowNumber = grades.length;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${rowNumber}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;
    gradesTable.appendChild(row);

    updateAverages();

    mathInput.value = '';
    englishInput.value = '';
});

function updateAverages() {
    const mathSum = grades.reduce((sum, grade) => sum + grade.math, 0);
    const englishSum = grades.reduce((sum, grade) => sum + grade.english, 0);
    const overallSum = grades.reduce((sum, grade) => sum + grade.average, 0);

    const mathAvg = (mathSum / grades.length).toFixed(2);
    const englishAvg = (englishSum / grades.length).toFixed(2);
    const overallAvg = (overallSum / grades.length).toFixed(2);

    mathAverageCell.textContent = mathAvg;
    englishAverageCell.textContent = englishAvg;
    overallAverageCell.textContent = overallAvg;
}
