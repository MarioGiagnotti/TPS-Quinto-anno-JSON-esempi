# TPS Quinto anno JSON

Questo è un semplice repository basato su **JSON**.


## Tecnologie:
- **JSON**
- **Javascript**
- **HTML**

## Come testare i contenuti:

1. Clona il repository:

git clone https://github.com/MarioGiagnotti/TPS-Quinto-anno-JSON-API-REST.git

oppure fare il Download del file .zip


2. Test dell'API REST

    Questa cartella contiene i file necessari a mandare in run un JSON-server.
    Prerequisiti: Node.js 
    (verifica installazione: 
     - node -v  
     - npm -v
    )

    Se è installato Node.js:
     - Aprire la cartella "API REST" in Visual Studio Code
     - eseguire il comando: npm install -g json-server  # Installazione globale (opzionale)
     - eseguire il comando: json-server --watch db.json --port 3000
     - aprire il browser e digitare: localhost:3000 per visualizzare la home di JSON Server
     - digitare localhost:3000/users per visualizzare il contenuto di db.json

    Se non è installato Node.js:
     - Installare Node.js
     - Aprire la cartella "API REST" in Visual Studio Code
     - eseguire il comando: npm init -y
     - eseguire il comando: npm install -g json-server  # Installazione globale (opzionale)
     - eseguire il comando: json-server --watch db.json --port 3000
     - aprire il browser e digitare: localhost:3000 per visualizzare la home di JSON Server
     - digitare localhost:3000/users per visualizzare il contenuto di db.json

