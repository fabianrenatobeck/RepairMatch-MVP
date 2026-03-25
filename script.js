// 1. Definition der Unterkategorien abhängig von der Hauptkategorie
const deviceModels = {
    "Handy": ["iPhone 12", "iPhone 13", "Google Pixel 9", "Samsung Galaxy S24", "Anderes Handy"],
    "Laptop": ["MacBook Air", "MacBook Pro", "Lenovo ThinkPad", "Dell XPS", "Anderer Laptop"],
    "Fernseher": ["Samsung Smart TV", "LG OLED", "Sony Bravia", "Anderer Fernseher"],
    "Computer": ["Office PC", "Gaming PC", "iMac", "Anderer Computer"],
    "Kopfhörer": ["AirPods Pro", "Sony WH-1000XM5", "Bose QuietComfort", "Andere Kopfhörer"],
    "Weiteres": ["Smartwatch", "Spielekonsole", "Kaffeemaschine", "Sonstiges"]
};

// 2. Hier kommen im nächsten Schritt die Shop-Daten rein!
// Ein Shop sieht z.B. so aus: { name: "Shop XY", ort: "Zürich", phone: "123", categories: ["Handy", "Laptop"], services: ["Reparatur", "Reinigung"] }
// 2. Die Datenbank der lokalen Reparatur-Shops
const shopsData = [
    { name: "AllRound Repair Bern", ort: "Bern", phone: "031 876 54 32", categories: ["Handy", "Laptop", "Fernseher", "Computer", "Kopfhörer", "Weiteres"], services: ["Reparatur", "Reinigung", "Tausch"] },
    { name: "CampusFix Zürich", ort: "Zürich", phone: "044 123 99 88", categories: ["Handy", "Laptop", "Computer", "Kopfhörer"], services: ["Reparatur", "Tausch"] },
    { name: "PhoneDoc Zürich", ort: "Zürich", phone: "044 987 65 43", categories: ["Handy"], services: ["Reparatur", "Tausch"] },
    { name: "MobileCare Winterthur", ort: "Winterthur", phone: "052 111 22 33", categories: ["Handy", "Kopfhörer"], services: ["Reparatur", "Reinigung"] },
    { name: "PC-Klinik Winterthur", ort: "Winterthur", phone: "052 999 88 77", categories: ["Laptop", "Computer"], services: ["Reparatur", "Reinigung"] },
    { name: "KabelSalat Uster", ort: "Uster", phone: "044 765 43 21", categories: ["Computer", "Weiteres"], services: ["Reparatur", "Tausch"] },
    { name: "ZüriSwap Elektronik", ort: "Zürich", phone: "044 234 56 78", categories: ["Handy", "Laptop", "Kopfhörer"], services: ["Tausch"] },
    { name: "MacRetter Oerlikon", ort: "Zürich", phone: "044 345 67 89", categories: ["Laptop", "Computer"], services: ["Reparatur", "Reinigung"] },
    { name: "AudioFix Bülach", ort: "Bülach", phone: "043 111 22 33", categories: ["Kopfhörer", "Weiteres"], services: ["Reparatur", "Reinigung"] },
    { name: "TV-Spital Wetzikon", ort: "Wetzikon", phone: "044 555 66 77", categories: ["Fernseher"], services: ["Reparatur"] },
    { name: "CleanScreen Dietikon", ort: "Dietikon", phone: "044 888 99 00", categories: ["Handy", "Laptop", "Fernseher"], services: ["Reinigung"] },

    // --- BERN, THUN & BIEL ---
    { name: "Meisterwerkstatt Thun", ort: "Thun", phone: "033 777 88 99", categories: ["Handy", "Laptop", "Fernseher", "Computer", "Weiteres"], services: ["Reparatur", "Reinigung"] },
    { name: "CouchTech Biel", ort: "Biel", phone: "032 456 78 90", categories: ["Fernseher", "Computer"], services: ["Reparatur"] },
    { name: "Bärner Handy-Klinik", ort: "Bern", phone: "031 222 33 44", categories: ["Handy"], services: ["Reparatur", "Reinigung", "Tausch"] },
    { name: "Laptop-Lounge Lyss", ort: "Lyss", phone: "032 333 44 55", categories: ["Laptop"], services: ["Reparatur"] },
    { name: "Konsolen-Doktor Bern", ort: "Bern", phone: "031 999 88 77", categories: ["Weiteres"], services: ["Reparatur", "Reinigung", "Tausch"] },
    { name: "Swap & Go Interlaken", ort: "Interlaken", phone: "033 444 55 66", categories: ["Handy", "Kopfhörer"], services: ["Tausch"] },
    { name: "CleanMyMac Bern", ort: "Bern", phone: "031 555 66 77", categories: ["Laptop", "Computer"], services: ["Reinigung"] },

    // --- BASEL & AARGAU ---
    { name: "Notebook-Retter Basel", ort: "Basel", phone: "061 555 44 33", categories: ["Laptop"], services: ["Reparatur", "Tausch"] },
    { name: "CleanTech Basel", ort: "Basel", phone: "061 234 56 78", categories: ["Handy", "Laptop", "Computer", "Kopfhörer", "Fernseher"], services: ["Reinigung"] },
    { name: "SwapPoint Aarau", ort: "Aarau", phone: "062 333 44 55", categories: ["Handy", "Laptop", "Kopfhörer", "Weiteres"], services: ["Tausch"] },
    { name: "BebbiPhone Fix", ort: "Basel", phone: "061 987 65 43", categories: ["Handy", "Kopfhörer"], services: ["Reparatur", "Reinigung"] },
    { name: "Aargau IT-Service", ort: "Baden", phone: "056 123 45 67", categories: ["Computer", "Laptop", "Weiteres"], services: ["Reparatur", "Tausch"] },
    { name: "TV-Macher Olten", ort: "Olten", phone: "062 765 43 21", categories: ["Fernseher"], services: ["Reparatur", "Reinigung"] },
    { name: "Rheinknie Tauschbörse", ort: "Basel", phone: "061 111 22 22", categories: ["Computer", "Fernseher", "Weiteres"], services: ["Tausch"] },

    // --- ZENTRALSCHWEIZ (LUZERN, ZUG, SCHWYZ) ---
    { name: "RigRepair Zug", ort: "Zug", phone: "041 888 77 66", categories: ["Computer"], services: ["Reparatur", "Reinigung", "Tausch"] },
    { name: "EcoSwap Luzern", ort: "Luzern", phone: "041 777 66 55", categories: ["Handy", "Fernseher"], services: ["Tausch"] },
    { name: "VisionFix Luzern", ort: "Luzern", phone: "041 555 66 77", categories: ["Fernseher", "Weiteres"], services: ["Reparatur", "Tausch", "Reinigung"] },
    { name: "Zentralschweiz Electronics", ort: "Schwyz", phone: "041 222 33 44", categories: ["Handy", "Laptop", "Computer"], services: ["Reparatur"] },
    { name: "Pilatus Phone", ort: "Kriens", phone: "041 333 44 55", categories: ["Handy", "Kopfhörer"], services: ["Reparatur", "Reinigung"] },
    { name: "Clean & Fix Baar", ort: "Baar", phone: "041 444 55 66", categories: ["Laptop", "Computer", "Weiteres"], services: ["Reinigung", "Reparatur"] },

    // --- OSTSCHWEIZ (ST. GALLEN, CHUR, THURGAU, SCHAFFHAUSEN) ---
    { name: "PuraElectronics St. Gallen", ort: "St. Gallen", phone: "071 333 22 11", categories: ["Laptop", "Computer", "Kopfhörer"], services: ["Reinigung"] },
    { name: "SoundSaver St. Gallen", ort: "St. Gallen", phone: "071 111 22 33", categories: ["Kopfhörer", "Weiteres"], services: ["Reparatur"] },
    { name: "iRette Chur", ort: "Chur", phone: "081 222 33 44", categories: ["Handy"], services: ["Reparatur"] },
    { name: "FixIt Schaffhausen", ort: "Schaffhausen", phone: "052 444 55 66", categories: ["Handy", "Weiteres"], services: ["Reparatur", "Reinigung"] },
    { name: "Thurgau TechTausch", ort: "Frauenfeld", phone: "052 777 88 99", categories: ["Laptop", "Computer", "Handy"], services: ["Tausch"] },
    { name: "Alpen-PC Chur", ort: "Chur", phone: "081 555 66 77", categories: ["Computer", "Laptop", "Fernseher"], services: ["Reparatur", "Reinigung"] },
    { name: "Bodensee Bildschirm-Klinik", ort: "Kreuzlingen", phone: "071 999 88 77", categories: ["Fernseher", "Laptop", "Handy"], services: ["Reparatur", "Tausch"] },
    { name: "GallenPhone Cleaners", ort: "St. Gallen", phone: "071 456 78 90", categories: ["Handy", "Kopfhörer"], services: ["Reinigung"] },

    // --- ROMANDIE (GENF, LAUSANNE, FRIBOURG, NEUENBURG, WALLIS) ---
    { name: "TechDocs Genf", ort: "Genf", phone: "022 888 99 00", categories: ["Handy", "Laptop", "Fernseher"], services: ["Reparatur", "Reinigung"] },
    { name: "ElectroCare Fribourg", ort: "Fribourg", phone: "026 123 99 88", categories: ["Laptop", "Kopfhörer"], services: ["Reparatur", "Tausch"] },
    { name: "Léman Laptop Lounge", ort: "Lausanne", phone: "021 222 33 44", categories: ["Laptop", "Computer"], services: ["Reparatur", "Reinigung", "Tausch"] },
    { name: "Genève Mobile Swap", ort: "Genf", phone: "022 333 44 55", categories: ["Handy", "Weiteres"], services: ["Tausch"] },
    { name: "Valais Vision", ort: "Sitten", phone: "027 444 55 66", categories: ["Fernseher"], services: ["Reparatur", "Reinigung"] },
    { name: "Neuchâtel Nettoyeurs", ort: "Neuenburg", phone: "032 555 66 77", categories: ["Computer", "Handy", "Kopfhörer"], services: ["Reinigung"] },
    { name: "Yverdon Tech-Echange", ort: "Yverdon-les-Bains", phone: "024 666 77 88", categories: ["Laptop", "Handy", "Computer", "Fernseher"], services: ["Tausch"] },
    { name: "Montreux Music Fix", ort: "Montreux", phone: "021 777 88 99", categories: ["Kopfhörer", "Weiteres"], services: ["Reparatur"] },
    { name: "Lausanne iCare", ort: "Lausanne", phone: "021 999 00 11", categories: ["Handy", "Laptop"], services: ["Reparatur", "Reinigung"] },

    // --- TESSIN (LUGANO, LOCARNO, BELLINZONA) ---
    { name: "Ticino Tech Repair", ort: "Lugano", phone: "091 123 45 67", categories: ["Handy", "Laptop", "Computer", "Fernseher"], services: ["Reparatur", "Tausch"] },
    { name: "Locarno Clean Electronics", ort: "Locarno", phone: "091 234 56 78", categories: ["Laptop", "Computer", "Kopfhörer", "Handy"], services: ["Reinigung"] },
    { name: "Bellinzona Swap Station", ort: "Bellinzona", phone: "091 345 67 89", categories: ["Handy", "Kopfhörer", "Weiteres"], services: ["Tausch"] },
    { name: "Lagofono Lugano", ort: "Lugano", phone: "091 456 78 90", categories: ["Handy"], services: ["Reparatur", "Reinigung"] },
    { name: "Sud-PC Locarno", ort: "Locarno", phone: "091 567 89 01", categories: ["Computer"], services: ["Reparatur", "Tausch"] }
];

// 3. Logik: Dropdown für Modelle aktualisieren, wenn eine Kategorie gewählt wird
// ... (Dein shopsData Array bleibt hier oben unverändert!) ...

// --- NEU: Orte automatisch auslesen und ins Dropdown füllen ---
function populateLocations() {
    const locationSelect = document.getElementById("locationSelect");
    
    // Alle einzigartigen Orte aus shopsData herausfiltern und alphabetisch sortieren
    const uniqueLocations = [...new Set(shopsData.map(shop => shop.ort))].sort();
    
    // Für jeden Ort eine Option erstellen
    uniqueLocations.forEach(ort => {
        const option = document.createElement("option");
        option.value = ort;
        option.textContent = ort;
        locationSelect.appendChild(option);
    });
}

// Führe die Funktion aus, sobald die Webseite geladen ist
window.onload = populateLocations;


// --- UPDATE: Logik für Unterkategorien ---
function updateSubcategories() {
    const categorySelect = document.getElementById("categorySelect");
    const deviceSelect = document.getElementById("deviceSelect");
    const selectedCategory = categorySelect.value;

    deviceSelect.innerHTML = '<option value="">Bitte genaues Modell wählen...</option>';

    if (selectedCategory && deviceModels[selectedCategory]) {
        deviceSelect.disabled = false; 
        deviceModels[selectedCategory].forEach(model => {
            const option = document.createElement("option");
            option.value = model;
            option.textContent = model;
            deviceSelect.appendChild(option);
        });
    } else {
        deviceSelect.disabled = true; 
        deviceSelect.innerHTML = '<option value="">Zuerst Kategorie wählen...</option>';
    }
}

// --- UPDATE: Die Suche mit Ortsfilter ---
function searchShops() {
    const category = document.getElementById("categorySelect").value;
    const device = document.getElementById("deviceSelect").value;
    const service = document.getElementById("serviceSelect").value;
    const location = document.getElementById("locationSelect").value; // NEUER ORTSFILTER
    const list = document.getElementById("resultsList");

    if (!category || !device || !service) {
        list.innerHTML = "<p class='error-msg'>Bitte wähle zumindest Kategorie, Modell und Service aus!</p>";
        return;
    }

    list.innerHTML = ""; 

    // Filtern der Shops (inklusive optionalem Ortsfilter)
    const matchingShops = shopsData.filter(shop => {
        const matchCategory = shop.categories.includes(category);
        const matchService = shop.services.includes(service);
        // Wenn kein Ort gewählt wurde (location === ""), ist matchLocation immer 'true'
        const matchLocation = location === "" || shop.ort === location; 

        return matchCategory && matchService && matchLocation;
    });

    if (matchingShops.length > 0) {
        matchingShops.forEach(shop => {
            const card = `
                <div class="result-card">
                    <h3>${shop.name}</h3>
                    <p><strong>Ort:</strong> ${shop.ort}</p>
                    <p><strong>Telefon:</strong> ${shop.phone}</p>
                    <p><strong>Spezialisiert auf:</strong> ${shop.categories.join(", ")}</p>
                    <p><strong>Angebotene Services:</strong> ${shop.services.join(", ")}</p>
                    <button onclick="alert('Anruf bei ${shop.name} (${shop.phone}) wird simuliert...')">Jetzt kontaktieren</button>
                </div>`;
            list.innerHTML += card;
        });
    } else {
        if (location !== "") {
            list.innerHTML = `<p>Leider gibt es in <strong>${location}</strong> aktuell keinen Shop für diese Kombination. Versuche es mit "Alle Orte".</p>`;
        } else {
            list.innerHTML = `<p>Leider gibt es in unserer Datenbank aktuell keinen Shop für diese Kombination.</p>`;
        }
    }
}
