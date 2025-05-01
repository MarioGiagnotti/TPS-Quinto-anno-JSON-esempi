var studenti = [
  {
    "nome" : "Mario",
    "cognome" : "Rossi",
    "città" : "Milano",
    "data" : "01-01-2001"
  },
  {
    "nome" : "Giuseppe",
    "cognome" : "Verdi",
    "città" : "Napoli",
    "data" : "02-02-2002"
  }
]
  document.write("<h1>Terzo esempio JSON e Javascript: Array<\/h1>");
  for (x=0; x<2; x++){
    document.write("<h3>nome =" + studenti[x].nome + "<\/h3>");
    document.write("<h3>cognome =" + studenti[x].cognome + "<\/h3>");
    document.write("<h3>città =" + studenti[x].città + "<\/h3>");
    document.write("<h3>data di nascita =" + studenti[x].data + "<\/h3>");
  }