var personaggi = {
    "root": {
        "attori": {
            "attore": [
                {
                    "-id": "1",
                    "#text": "Alberto Sordi"
                },
                {
                    "-id": "2",
                    "#text": "Massimo Troisi"
                },
                {
                    "-id": "3",
                    "#text": "Raimondo Vianello"
                }
            ]
        },
        "cantanti": {
            "cantante": [
                {
                    "-id": "4",
                    "#text": "Francesco Di Giacomo"
                },
                {
                    "-id": "5",
                    "#text": "Demetrio Stratos"
                },
                {
                    "-id": "6",
                    "#text": "Rino Gaetano"
                },
                {
                    "-id": "7",
                    "#text": "Pino Daniele"
                }
            ]
        },
        "chitarristi": {
            "chitarrista": [
                {
                    "-id": "8",
                    "#text": "Jimi Hendrix"
                },
                {
                    "-id": "9",
                    "#text": "Jerry Garcia"
                },
                {
                    "-id": "10",
                    "#text": "Paco De Lucia"
                },
                {
                    "-id": "11",
                    "#text": "Pino Daniele"
                },
                {
                    "-id": "12",
                    "#text": "Rodolfo Maltese"
                },
                {
                    "-id": "13",
                    "#text": "Frank Zappa"
                }
            ]
        }
    }
};

document.write("<h1>Terzo esempio con JSON e Javascript: Array</h1>");

// Stampa gli attori
document.write("<h2>Attori</h2>");
personaggi.root.attori.attore.forEach(function(attore) {
    document.write("<div>ID: " + attore["-id"] + ", Nome: " + attore["#text"] + "</div>");
});

// Stampa i cantanti
document.write("<h2>Cantanti</h2>");
personaggi.root.cantanti.cantante.forEach(function(cantante) {
    document.write("<div>ID: " + cantante["-id"] + ", Nome: " + cantante["#text"] + "</div>");
});

// Stampa i chitarristi
document.write("<h2>Chitarristi</h2>");
personaggi.root.chitarristi.chitarrista.forEach(function(chitarrista) {
    document.write("<div>ID: " + chitarrista["-id"] + ", Nome: " + chitarrista["#text"] + "</div>");
});
