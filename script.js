// Daten für das MVP [cite: 194]
const repairData = [
    { device: "iPhone 12", type: "Ersatzteil", name: "Original Display", provider: "Local-Store Zürich" },
    { device: "Laptop", type: "Experte", name: "Hardware-Retter Lukas", provider: "Bern Altstadt" },
    { device: "Kaffeemaschine", type: "Ersatzteil", name: "Dichtungsring-Set", provider: "Online-Spender" }
];

// Diese Funktion muss global verfügbar sein, damit der Button sie findet [cite: 195]
function searchRepair() {
    const input = document.getElementById('deviceInput').value.toLowerCase();
    const list = document.getElementById('resultsList');
    
    // Liste leeren vor der neuen Suche
    list.innerHTML = ""; 

    // Filter-Logik [cite: 195]
    const filtered = repairData.filter(item => 
        item.device.toLowerCase().includes(input) || 
        item.type.toLowerCase().includes(input)
    );

    if (filtered.length > 0) {
        filtered.forEach(item => {
            const card = `
                <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 5px; background: #f9f9f9;">
                    <h3>${item.name} (${item.type})</h3>
                    <p>Gerät: ${item.device} | Ort: ${item.provider}</p>
                    <button onclick="alert('Anfrage für ${item.name} wurde gesendet!')">Kontakt aufnehmen</button>
                </div>`;
            list.innerHTML += card;
        });
    } else {
        list.innerHTML = "<p>Keine Ergebnisse gefunden. Versuche es mit 'iPhone' oder 'Laptop'.</p>";
    }
}
