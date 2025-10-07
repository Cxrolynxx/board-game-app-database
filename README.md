# 🧩 Brettspiel-DB – Meine persönliche Brettspiel-Sammlung

Eine einfache Web-App, mit der du **deine Brettspiel-Sammlung digital verwalten** kannst.  
Die App nutzt Daten von [BoardGameGeek](https://boardgamegeek.com) und speichert alles **lokal im Browser** – kein Login oder Server nötig.

---

## ✨ Funktionen

- 🔍 **Spiele-Suche** über die BoardGameGeek-API  
  Gib einfach den Titel (oder Barcode) eines Spiels ein, um Metadaten zu laden.
  
- 🎲 **Eigene Bibliothek**  
  Füge Spiele zu deiner persönlichen Sammlung hinzu – sie wird automatisch im Browser (LocalStorage) gespeichert.
  
- 🧠 **Automatische Metadaten**
  - Beschreibung  
  - Spielerzahl  
  - Spieldauer  
  - Erscheinungsjahr  
  - Bewertung (Bayes / Durchschnitt)  
  - Kategorien & Mechaniken  
  - Links zu:
    - 📄 BoardGameGeek-Seite  
    - 📘 Spielregeln (Google-Suche)  
    - ▶️ YouTube-Anleitung („How to play“)

- 🔎 **Filter & Sortierung**
  - Filter nach Text, Spielerzahl, Dauer und Kategorie  
  - Sortiere nach Name, Bewertung, Dauer, Jahr oder Spielerzahl

- 📤 **Export / Import**
  - Exportiere deine Sammlung als JSON-Datei  
  - Importiere sie auf einem anderen Gerät oder Browser wieder

- 📷 **(Optional)** Barcode-Scan mit der Kamera  
  Nutzt `BarcodeDetector` (in Chrome, Edge, Safari verfügbar) – scannt EAN/UPC und sucht automatisch das Spiel.

---

## 🚀 Nutzung

### Variante 1 – Lokal (einfach)

1. Lade die Datei `index.html` herunter (z. B. aus deinem Repo oder von dieser App).  
2. Öffne sie direkt im Browser (`Doppelklick` oder `Datei → Öffnen`).
3. Fertig! Alle Daten werden lokal gespeichert.

### Variante 2 – Über einen kleinen Webserver (empfohlen)

Wenn du möchtest, kannst du die App auch über einen lokalen Server starten (z. B.
