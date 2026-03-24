const loadSummary = async () => {
    try {
        const response = await fetch('./src/data/data.json');
        const data = await response.json();

        const summaryList = document.getElementById('summary-list');

        summaryList.innerHTML = '';

        data.forEach(item => {
            const li = document.createElement('li');
            li.className = item.class;

            li.innerHTML = `
                <img src="${item.icon}" alt="${item.category}">
                ${item.category} 
                <span class="scores">
                    <span class="bold">${item.score} </span>
                    <span class="regular">/ 100</span>
                </span>
            `;

            summaryList.appendChild(li);
        });
        
    } catch (error) {
        console.error("Erro ao carregar dados do sumário:", error);
    }
}
loadSummary();