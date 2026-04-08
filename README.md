# Projekt: Smart-Repair-Matching (MVP)

Dieses Repository enthält den ersten funktionalen Prototypen für eine Plattform, die die Reparatur von Elektrogeräten vereinfacht und fördert.

## Kurzbeschreibung (Übung 12)

* **Problem:** Viele Konsumenten entsorgen defekte Elektronikgeräte vorzeitig, weil technisches Know-how fehlt, Reparaturanleitungen zu komplex sind oder der Zugang zu passenden Ersatzteilen und Experten fehlt.
* **MVP (Kernfunktionen):**
    ***Matching-Suche:** Nutzer können nach ihrem Gerät suchen, um gezielt Hilfe zu finden[cite: 49, 56].
    ***Teile- & Experten-Verzeichnis:** Anzeige von verfügbaren Ersatzteilen und lokalen Reparatur-Kontakten in Echtzeit.
    ***Interaktive Kontaktfunktion:** Über einen Button können Nutzer direkt Interesse an einer Reparatur bekunden oder Hilfe anfordern.
* **Circular Flow:** Die App unterstützt primär den **"Slow"-Flow**, indem sie die Nutzungsdauer von Produkten durch Reparatur und Wiederverwendung verlängert ("Use longer" & "Use again").
* **Aktueller Stand:** Ein funktionsfähiger Web-Prototyp (MVP Phase 1) ist erstellt, dokumentiert und via GitHub Pages öffentlich zugänglich gemacht worden.
## Verfeinerte Anforderungen (Design-Reflexion Übung 13)

Basierend auf den Prinzipien des guten Designs wurden folgende Anforderungen für die Weiterentwicklung präzisiert:

- [x] **Intuitive Navigation:** Die Benutzeroberfläche muss so einfach sein, dass Nutzer ohne technische Vorkenntnisse innerhalb von zwei Klicks ein passendes Ersatzteil oder einen Experten finden.
- [x] **Ehrlichkeit & Transparenz:** Das System zeigt nur real verfügbare Ersatzteile von lokalen Partnern an, um falsche Erwartungen zu vermeiden.
- [x] **Umweltfreundlichkeit als Kern:** Jedes Suchergebnis soll die potenzielle CO2-Ersparnis anzeigen, wenn das Gerät repariert statt neu gekauft wird.
- [x] **Langlebigkeit der Plattform:** Die Datenstruktur wird so modular aufgebaut, dass künftig auch andere Stoffflüsse (z.B. Haushaltsgeräte oder Werkzeuge) integriert werden können.
- [x] **Reduktion auf das Wesentliche:** Verzicht auf störende Werbung oder unnötige Pop-ups, um den Fokus rein auf den "Slow"-Flow der Kreislaufwirtschaft zu lenken.
## Technische Umsetzung
* **Technologien:** HTML, CSS und JavaScript.
* **Deployment:** Veröffentlicht über GitHub Pages.
* **Interaktivität:** Dynamische Filterung der Reparatur-Optionen und simulierter Anfrage-Prozess.
---
# Übung 16: Testprotokoll & Iteration 2

## 1. Testprotokoll (Vorbereitung)
* **Test 1 (Happy-Path):** Suche eine Handy-Reparatur in Zürich und klicke "Jetzt kontaktieren". 
  * *Fokus:* Werden die abhängigen Dropdowns verstanden?
* **Test 2 (Edge-Case):** Suche einen Tausch-Service für Fernseher in Wetzikon (Absichtlicher 0-Treffer). 
  * *Fokus:* Ist die Fehlermeldung klar und wie geht der User weiter vor?

## 2. & 3. Beobachtungen
* **Zu Test 1:** User versuchte zuerst das gesperrte "Modell"-Feld zu klicken, was kurz irritierte. Sobald die Kategorie gewählt war, lief der Rest fehlerfrei. Das Alert-Pop-up wurde sofort als Erfolg verstanden.
* **Zu Test 2:** User verstand das leere Resultat sofort. Das manuelle Ändern des Ortes auf "Alle Orte" (inkl. Scrollen und neuem Klick auf "Suchen") wirkte jedoch umständlich.

## 4. Abgeleitete Probleme
1. **Verständlichkeit:** Das deaktivierte Modell-Dropdown wirkt zu Beginn ohne Erklärung wie ein Fehler.
2. **Ablauf:** Bei leeren Suchergebnissen fehlt eine schnelle "Ein-Klick"-Lösung, um die Suche auszuweiten.

## 5. Anpassungen (Iteration 2)
Um diese Probleme zu beheben, wurden folgende Code-Anpassungen definiert:

* **Maßnahme 1 (Klares Feedback):** Der Platzhalter-Text im HTML-Dropdown wird zu `[Bitte zuerst Kategorie wählen]` geändert. Das erklärt die temporäre Sperre visuell besser.
* **Maßnahme 2 (Einfacher Ablauf):** Wenn ein ortsspezifisches Ergebnis leer bleibt, wird nicht nur Text angezeigt, sondern ein Button generiert. Dieser setzt den Ortsfilter mit einem Klick zurück und startet die Suche neu:
  ```html
  <button onclick="document.getElementById('locationSelect').value=''; searchShops();">In der ganzen Schweiz suchen</button>
