# **Shop-Anwendung mit Microservices**

## **Projektübersicht**
Dieses Projekt ist eine einfache Shop-Anwendung, die auf einer Microservices-Architektur basiert.


## **Funktionen**
Die Anwendung enthält folgende Kernfunktionen:
1. **Produktkatalog**: Anzeigen von Produkten mit Name, Beschreibung, Preis und Lagerbestand.
2. **Warenkorb**: Hinzufügen und Entfernen von Produkten.
3. **Bestellung**: Verarbeiten von Kundenbestellungen.
4. **Bewertungen**: Kunden können Produkte bewerten und Rezensionen hinzufügen.

Zusätzlich:
- **Gateway**: Vermittelt Anfragen zwischen Frontend und Microservices.
- **Service Discovery (Eureka)**: Verwalten der Erreichbarkeit von Services.
- **Messaging (Kafka)**: Kommunikation zwischen den Services.


## **Technologien**
Die folgenden Technologien werden verwendet:
- **Backend**: Java, Spring Boot
- **Frontend**: React
- **Containerisierung**: Docker
- **Service Discovery**: Eureka
- **Messaging**: Kafka


## **Endpoints**
### **Produktkatalog-Service**
- `GET /products`: Alle Produkte abrufen
- `GET /products/{id}`: Einzelnes Produkt abrufen
- `POST /products`: Neues Produkt hinzufügen

### **Warenkorb-Service**
- `POST /cart`: Produkt zum Warenkorb hinzufügen
- `DELETE /cart/{id}`: Produkt aus dem Warenkorb entfernen
- `GET /cart`: Aktuellen Warenkorb anzeigen

### **Bestell-Service**
- `POST /orders`: Neue Bestellung erstellen
- `GET /orders/{id}`: Bestellstatus abrufen

### **Bewertungs-Service**
- `POST /reviews`: Bewertung hinzufügen
- `GET /reviews/{productId}`: Bewertungen für ein Produkt abrufen


## **Reflexion**

Hier ist eine ausgefüllte Reflexion basierend auf dem ersten Termin und der Arbeit an **Vorbereitungen.pdf**:

---

### 12.12.2024

### **1. Ziel für diesen Termin**
- Erstellung der Architekturskizze, die die Interaktionen zwischen den Microservices zeigt.
- Definition der Microservices und ihrer Aufgaben.
- Vorbereitung der Projektstruktur und Einrichtung des Git-Repositories.

### **2. Erreichte Meilensteine**
- Wir haben eine klare grafische Darstellung der Microservices erstellt.
- Die wichtigsten Workflows wurden definiert.
- Wir haben ein Repository eingerichtet.

### **3. Herausforderungen**
- Es war anfangs schwierig, die passenden Tools für die Architekturskizze auszuwählen. Wir haben uns für Draw.io entschieden.
- Wir mussten viel diskutieren, um die Aufgaben der Microservices genau zu definieren.

### **4. Ausblick auf den nächsten Termin**
- Nächstes Mal starten wir mit der Implementierung der Microservices.
- Einrichtung des Produktkatalog-Services als erste Komponente.
- Erstellung der grundlegenden Datenbankkonfiguration.

---

### 19.12.2024

### **1. Ziel für diesen Termin**
- Am Ende des Tages sollten wir einen Microservice haben.
- Am Ende des Tages sollten wir ein funktionierendes Frontend haben.
- Wir sollten uns die Aufgaben aufteilen und klar definieren.

### **2. Erreichte Meilensteine**
- Wir konnten die Aufgaben klar definieren.
- Wir haben mit dem Produktkatalog-Service angefangen.
- Wir haben mit dem Frontend angefangen.

### **3. Herausforderungen**
- Wir hatten ein paar Probleme mit dem Aufsetzen von React und Spring Boot.

### **4. Ausblick auf den nächsten Termin**
- Nächstes Mal müssen wir mit dem Produktkatalog-Service fertig werden und mit dem Warenkorb-Service anfangen.
