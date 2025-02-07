document.getElementById('initiativeForm').addEventListener('submit', function (e) {
    e.preventDefault();


    const saveFormData = () => {
        const formData = {
            participants: e.target.elements.participants.value,
            diceType: e.target.elements.diceType.value,
            includeHealth: e.target.elements.includeHealth.value,
        };
        console.log('НЕ ХВАТАЕТ МИНЕРАЛОВ!', formData);
        localStorage.setItem('initiativeFormData', JSON.stringify(formData));
    };

    const saveTable = () => {
        console.log('ДАВАЙ БРАТИШКА');
        localStorage.setItem('initiativeTable', tableContainer.innerHTML);
    };



    const participants = parseInt(participantsInput.value);
    const diceType = diceTypeInput.value;
    const includeHealth = includeHealthInput.checked;

    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('table-section');

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th style="width: 40%;">Имя участника</th>
        <th style="width: 30%;">Инициатива (${diceType})</th>
        ${includeHealth ? '<th style="width: 30%;">Здоровье</th>' : ''}
    `;
    table.appendChild(headerRow);



    const rollDice = (type) => Math.floor(Math.random() * type) + 1;

    for (let i = 1; i <= participants; i++) {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = `Участник ${i}`;
        row.appendChild(nameCell);

        const initiativeCell = document.createElement('td');
        const diceMax = parseInt(diceType.slice(1));
        initiativeCell.textContent = rollDice(diceMax);
        row.appendChild(initiativeCell);

        if (includeHealth) {
            const healthCell = document.createElement('td');
            healthCell.textContent = `${rollDice(20) * 5} HP`;
            row.appendChild(healthCell);
        }

        table.appendChild(row);
    }

    tableContainer.appendChild(table);

    saveFormData();
    saveTable();

});

window.addEventListener('load', function () {

    const loadFormData = () => {
        const savedData = JSON.parse(localStorage.getItem('initiativeFormData'));
        if (savedData) {
            document.getElementById('participants').value = savedData.participants || '';
            document.getElementById('initiativeDice').value = savedData.diceType || 'd20';
            document.getElementById('includeHealth').checked = savedData.includeHealth || false;
        }
    };
    const loadTable = () => {
        const savedTable = localStorage.getItem('initiativeTable');
        if (savedTable) {
            document.getElementById('tableContainer').innerHTML = savedTable;
        }
    };

    loadFormData();
    loadTable();
});