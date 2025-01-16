# **Shop-Anwendung mit Microservices**

## **Projektübersicht**
Dieses Projekt ist eine einfache Shop-Anwendung, die auf einer Microservices-Architektur basiert.

## **Technologien**
Die folgenden Technologien werden verwendet:
- **Backend**: Java, Spring Boot
- **Frontend**: React
- **Containerisierung**: Docker
- **Service Discovery**: Eureka
- **Messaging**: Kafka

# Beschreibung der Micro Services

---

## 1. **Produktkatalog-Service**  
- **Funktion:** Verwalten und Anzeigen von Produkten.  
- **Endpoints:**

| HTTP-Methode | Endpoint               | Beschreibung                        |
|--------------|------------------------|-------------------------------------|
| GET          | `/api/products`        | Alle Produkte anzeigen              |
| GET          | `/api/products/{id}`   | Produkt nach ID anzeigen            |
| POST         | `/api/products`        | Neues Produkt hinzufügen           |
| PUT          | `/api/products/{id}`   | Produkt aktualisieren              |
| DELETE       | `/api/products/{id}`   | Produkt löschen                    |

- **Beschreibung:**  
  Der Produktkatalog-Service verwaltet alle Produkte mit Informationen wie Name, Beschreibung, Preis und Lagerbestand. Er stellt die grundlegenden CRUD-Operationen bereit, um Produkte zu erstellen, zu aktualisieren, anzuzeigen und zu löschen.

---

## 2. **Warenkorb-Service**  
- **Funktion:** Verwalten des Warenkorbs der Benutzer.  
- **Endpoints:**

| HTTP-Methode | Endpoint                     | Beschreibung                           |
|--------------|------------------------------|----------------------------------------|
| POST         | `/api/cart/{userId}/add`    | Produkt zum Warenkorb hinzufügen       |
| GET          | `/api/cart/{userId}`        | Aktuellen Warenkorb anzeigen           |
| DELETE       | `/api/cart/{userId}/remove` | Produkt aus dem Warenkorb entfernen    |
| DELETE       | `/api/cart/{userId}/clear`  | Warenkorb vollständig leeren          |

- **Beschreibung:**  
  Der Warenkorb-Service ermöglicht es Benutzern, Produkte in ihren Warenkorb zu legen, Produkte zu entfernen und den gesamten Warenkorb zu leeren. Die Daten werden schnell und effizient in einer **Redis-Datenbank** gespeichert.

---

## 3. **Bestellungs-Service**  
- **Funktion:** Verarbeiten von Kundenbestellungen.  
- **Endpoints:**

| HTTP-Methode | Endpoint            | Beschreibung                        |
|--------------|---------------------|-------------------------------------|
| GET          | `/api/orders`       | Alle Bestellungen abrufen           |
| GET          | `/api/orders/{id}`  | Bestellung nach ID abrufen          |
| POST         | `/api/orders`       | Neue Bestellung erstellen           |
| DELETE       | `/api/orders/{id}`  | Bestellung nach ID löschen          |

- **Beschreibung:**  
  Der Bestellungs-Service verarbeitet neue Bestellungen, speichert diese und stellt den Bestellstatus bereit. Nach erfolgreicher Bestellung wird der Warenkorb geleert, und die Bestellung wird im System hinterlegt.

---

## 4. **API Gateway**  
- **Funktion:** Zentraler Einstiegspunkt für alle Anfragen.  
- **Beschreibung:**  
  Das API Gateway empfängt Anfragen vom Frontend und leitet sie dynamisch an die entsprechenden Microservices weiter. Es übernimmt dabei Routing, Lastverteilung und dient als zentrale Schnittstelle zwischen dem Frontend und den Microservices.

  - **Konfigurierte Routen:**  

  | Service               | Route                          | Ziel-Microservice             |
  |----------------------|---------------------------------|-------------------------------|
  | Produktkatalog        | `/api/products/**`             | Produktkatalog-Service        |
  | Warenkorb             | `/api/cart/**`                 | Warenkorb-Service             |
  | Bestellungen          | `/api/orders/**`               | Bestellungs-Service          |

---

## 5. **Eureka Discovery Service**  
- **Funktion:** Service-Registrierung und -Erkennung.  
- **Beschreibung:**  
  Der **Eureka Discovery Service** registriert alle Microservices und ermöglicht die automatische Service-Erkennung. Dadurch können Services untereinander kommunizieren, ohne dass feste IP-Adressen oder Ports notwendig sind. Dies erleichtert Skalierung und Fehlertoleranz erheblich.

---

## 6. **Frontend (React)**  
- **Funktion:** Benutzeroberfläche für den Shop.  
- **Features:**
  - **Produktübersicht:** Zeigt alle verfügbaren Produkte an.  
  - **Warenkorb-Verwaltung:** Produkte hinzufügen, Menge ändern, entfernen.  
  - **Bestellung aufgeben:** Warenkorb in eine Bestellung umwandeln.  
  - **Bestellübersicht:** Anzeige aller Bestellungen mit Status.

- **Beschreibung:**  
  Die React-Anwendung kommuniziert mit dem **API Gateway** und ermöglicht es dem Benutzer, Produkte zu durchsuchen, den Warenkorb zu verwalten und Bestellungen aufzugeben. Anfragen laufen gebündelt über das Gateway, das die Anfragen an die Microservices weiterleitet.

---

## 7. **Docker/Docker-Compose**  
- **Funktion:** Containerisierte Bereitstellung der gesamten Anwendung.  
- **Beschreibung:**  
  Alle Microservices (Produktkatalog, Warenkorb, Bestellungen), das **API Gateway**, **Eureka** und der **Frontend-Service** werden über **Docker** containerisiert. Mit **Docker-Compose** werden alle Komponenten gemeinsam gestartet und verwaltet.

---

## **Gesamtes Zusammenspiel**

1. **Frontend (React):** Der Benutzer interagiert mit der App, die Anfragen an das **API Gateway** sendet.  
2. **API Gateway:** Leitet Anfragen dynamisch an die passenden **Microservices** weiter.  
3. **Eureka:** Verbindet und verwaltet alle Microservices.  
4. **Produktkatalog-Service:** Zeigt Produkte an.  
5. **Warenkorb-Service:** Verwalten des Warenkorbs.  
6. **Bestellungs-Service:** Verarbeitet Bestellungen.  
7. **Docker:** Startet und verwaltet alle Komponenten.

---

## **Nächste Schritte (Optional)**

1. **Kafka Integration:** Für eventbasierte Kommunikation (z.B. Versand nach Bestellung).  
2. **JWT-Authentifizierung:** Schutz sensibler Endpunkte.  
3. **Fehlertoleranz:** Circuit Breaker (z.B. Resilience4j).  
4. **Monitoring:** Mit Spring Boot Actuator oder Grafana.

---

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

# Persönliche Reflexion

## Einleitung

- **Datum:**

16.01.2025

- **Projektname:**

M321 - Shopping App Microservices

## Ziele

- **Was waren die Hauptziele des Projekts?**

1. Drei Mirco services sind erstellt
    - Produktkatalog-Service
    - Warenkorb-Service
    - Bestellungs-Service

2. API Gateway
3. Eureka Discovery Service
4. Frontend mit CRUD Operationen
5. Microservices sind in Docker-Container verpackt
6. Microservices kommunizieren via REST API miteiannder
7. Apache Kafka Messaging für Logging von Fehlern, Warning und Infos über User-Aktionen
8. User Login mit Session Token
9. API Gateway beschränken auf angemeldete User
10. Alle Services haben eine eigene Datenbank für Caching von Daten
    - Warenkorb-Service         - Redis
    - Produktkatalog-Service    - Spring Datenbank
    - Bestellungs-Service       - Spring Datenbank

## Erfolge

- **Welche Ziele wurden realisiert?**

1. Drei Mirco services sind erstellt
    - Produktkatalog-Service
    - Warenkorb-Service
    - Bestellungs-Service

2. API Gateway
3. Eureka Discovery Service
4. Frontend mit CRUD Operationen
5. Microservices kommunizieren via REST API miteiannder

- **Welche Punkt sind noch offen?**

1. Microservices sind in Docker-Container verpackt
2. Apache Kafka Messaging für Logging

## Herausforderungen

- **Welche Herausforderungen sind aufgetreten?**

Kafka war eher kompliziert einzurichten, dazu sahen wir den Nutzen nicht wirklich, da das logging auch anders viel einfacher umzusetzen wäre.

Die MIcro Services zu dockerisieren wäre nicht allzu schwer gewesen, jedoch haben wir uns entschieden, dass es nicht nötig ist, da wir acuh kafka nicht implementiert haben und wir dadurch keinen Grund hatten.

## Erkenntnisse

- **Was wurde aus dem Projekt gelernt?**

Uns wurde erst jetzt klar, wie spannend der Eureka Discovery Service eigentlich ist.
Dazu war es interessant zu sehen wie anders so ein Programm bestehend aus Microservices aufgebaut ist.
Vor allem mit dem Kontrast zum anderen Projekt.

- **Welche neuen Fähigkeiten oder Kenntnisse wurden erworben?**

Wir konnten unser bestehendes Wissen mit Microservices vertiefen und haben auch einiges über den Eureka Discovery Service gelernt.
So ganze Projekte von null auf hundert zu erarbeiten mit Datenbank und allen drum und dran war eine Gute erfahrung, die wir bis jetzt im Schulplan vermissten.

## Verbesserungsmöglichkeiten

- **Was könnte in zukünftigen Projekten verbessert werden?**

Wir müssen unbedingt verbesserungen in den Bereichen Dokumentation und Planung machen, wie kamen ein wenig in den Stress, da wir uns noch nie so intensiv mit Microservices auseinander gesetzt haben und dazu viel zu wenig geplant hatten im Voraus.

- **Welche Strategien könnten implementiert werden, um ähnliche Herausforderungen zu vermeiden?**

EIne Strukturierte Planung und Dokumentation ist das A und O, das haben wir in diesem Projekt gelernt.

## Fazit

Wir sind stoltz auf unsere Arbeit und denken sie zeigt was wir können, jedoch gibt es noch viel zu lernen und zu verbessern. (Siehe Welche Punkt sind noch offen?)

Dovalo / Aroldi

