// JavaScript for interactive periodic table
document.addEventListener('DOMContentLoaded', () => {
    const periodicTableContainer = document.getElementById('periodic-table-container');
    const elementDetailView = document.getElementById('element-detail-view');

    // Placeholder for element data (will be replaced by JSON data)
    fetch('elements.json')
        .then(response => response.json())
        .then(data => {
            const elements = data.elements;
            renderPeriodicTable(elements);
        });

    function renderPeriodicTable(elements) {
        periodicTableContainer.innerHTML = ''; // Clear existing elements
        elements.forEach(element => {
            const elementTile = document.createElement('div');
            elementTile.classList.add('element-tile');
            elementTile.classList.add(element.category.replace(/\s/g, '-')); // Add category for styling
            elementTile.style.gridColumn = element.xpos;
            elementTile.style.gridRow = element.ypos;

            elementTile.innerHTML = `
                <div class="element-atomic-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
            `;

            elementTile.addEventListener('click', () => showElementDetail(element));
            periodicTableContainer.appendChild(elementTile);
        });
    }

    function showElementDetail(element) {
        // Move periodic table to the bottom
        periodicTableContainer.style.transform = 'translateY(100vh)';

        // Populate and show detail view
        elementDetailView.innerHTML = `
            <div class="close-button">&times;</div>
            <div class="enlarged-element">
                <div class="element-atomic-number">${element.number}</div>
                <div class="element-symbol">${element.symbol}</div>
                <div class="element-name">${element.name}</div>
            </div>
            <div class="info-sidebar">
                <h3>${element.name} (${element.symbol})</h3>
                <p><strong>Atomic Number:</strong> ${element.number}</p>
                <p><strong>Atomic Mass:</strong> ${element.atomic_mass ? element.atomic_mass.toFixed(4) : 'N/A'}</p>
                <p><strong>Category:</strong> ${element.category}</p>
                <p><strong>Phase:</strong> ${element.phase}</p>
                <p><strong>Density:</strong> ${element.density ? element.density.toFixed(4) : 'N/A'} g/cm³</p>
                <p><strong>Melting Point:</strong> ${element.melt ? (element.melt - 273.15).toFixed(2) : 'N/A'} °C</p>
                <p><strong>Boiling Point:</strong> ${element.boil ? (element.boil - 273.15).toFixed(2) : 'N/A'} °C</p>
                <p><strong>Discovered By:</strong> ${element.discovered_by || 'N/A'}</p>
                <p><strong>Named By:</strong> ${element.named_by || 'N/A'}</p>
                <p><strong>Summary:</strong> ${element.summary}</p>
            </div>
        `;
        elementDetailView.classList.add('active');

        // Close button functionality
        elementDetailView.querySelector('.close-button').addEventListener('click', hideElementDetail);
    }

    function hideElementDetail() {
        elementDetailView.classList.remove('active');
        // Move periodic table back to original position
        periodicTableContainer.style.transform = 'translateY(0)';
    }

    renderPeriodicTable();
});