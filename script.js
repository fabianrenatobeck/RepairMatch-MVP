const repairData = [
    { device: "iPhone 12", type: "Ersatzteil", name: "Original Display", provider: "Local-Store Zürich" },
    { device: "Laptop", type: "Experte", name: "Hardware-Retter Lukas", provider: "Bern Altstadt" },
    { device: "Kaffeemaschine", type: "Ersatzteil", name: "Dichtungsring-Set", provider: "Online-Spender" }
];

function searchRepair() {
    const input = document.getElementById('deviceInput').value.toLowerCase();
    const list = document.getElementById('resultsList');
    list.innerHTML = ""; // Liste leeren

    const filtered = repairData.filter(item => item.device.toLowerCase().includes(input));

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const card = `<div class="result-card">
                <h3>${item.name} (${item.type})</h3>
                <p>Verfügbar bei: ${item.provider} für <strong>${item.device}</strong></p>
                <button onclick="alert('Anfrage für ${item.name} gesendet!')">Kontakt aufnehmen</button>
            </div>`;
            list.innerHTML += card;
        });
    } else {
        list.innerHTML = "<p>Keine direkten Treffer gefunden. Versuche es mit 'iPhone' oder 'Laptop'.</p>";
    }
}