function weergaveBedrijf(bedrijfsnaam) {

  let bedrijfsinfo = localStorage.getItem("Bedrijfsinfo")

  // HTML in js schrijven
  let title = document.getElementById("title");
  let h1 = document.createElement("h1");
  let text = document.createTextNode(`Gedetailleerd overzicht van "${bedrijfsnaam}"`);

  h1.append(text);
  title.append(h1);

  let bedrijfsinfoarr = [];
  let sublist = [];
  let value = "";

  // Data uit local storage omzetten naar grote lijst
  [...bedrijfsinfo].forEach((elem, ind, arr) => {
    if(elem !== "[" && elem !== "]" && elem !== ","){
      value += elem;
    }

    if(elem === "," && arr[ind+2] !== "[") {
      if(value !== "") {
        sublist.push(value.trim());
        value = "";
      }
    }

    if(elem === "]") {
      if(sublist !== []) {
        sublist.push(value.trim())
        bedrijfsinfoarr.push(sublist)
        value = ""
        sublist = []
      }
    }
  })

  // Data uit grote lijst halen en evt omzetten naar chars
  let naamnum = bedrijfsinfoarr[0]
  let naam = "";
  naamnum.forEach(elem => {
    naam += String.fromCharCode(elem)
  })
  let sectornum = bedrijfsinfoarr[1]
  let sector = "";
  sectornum.forEach(elem => {
    sector += String.fromCharCode(elem)
  })
  let ondernemingsnummer = bedrijfsinfoarr[2]
  let postcode = bedrijfsinfoarr[3]
  let adresGemeentenum = bedrijfsinfoarr[4]
  let adresGemeente = "";
  adresGemeentenum.forEach(elem => {
    adresGemeente += String.fromCharCode(elem)
  })
  let adresnum = bedrijfsinfoarr[5]
  let adres = "";
  adresnum.forEach(elem => {
    adres += String.fromCharCode(elem)
  })
  let werknemers = bedrijfsinfoarr[6]
  let omzet = bedrijfsinfoarr[7]
  let balans = bedrijfsinfoarr[8]
  let frameworknum = bedrijfsinfoarr[9]
  let framework = "";
  frameworknum.forEach(elem => {
    framework += String.fromCharCode(elem)
  })
  let btwonum = bedrijfsinfoarr[10]
  let btwo = "";
  btwonum.forEach(elem => {
    btwo += String.fromCharCode(elem)
  })
  let duurzaamperc = bedrijfsinfoarr[11]
  let duurzaamScorenum = bedrijfsinfoarr[12]
  let duurzaamScore = "";
  duurzaamScorenum.forEach(elem => {
    duurzaamScore += String.fromCharCode(elem)
  })

  let volledigeAdres = adres + " " + postcode + " " + adresGemeente;

  // Data weergeven in tabel
  document.getElementById("naamtab").innerText = naam;
  document.getElementById("sectortab").innerText = sector;
  document.getElementById("ondertab").innerText = ondernemingsnummer;
  document.getElementById("adrestab").innerText = volledigeAdres;
  document.getElementById("aantalwerktab").innerText = werknemers;
  document.getElementById("omzettab").innerText = "€ "+omzet;
  document.getElementById("balanstab").innerText = "€ "+balans;
  document.getElementById("frametab").innerText = framework;
  document.getElementById("btwotab").innerText = btwo;
  document.getElementById("duurzaamperctab").innerText = duurzaamperc;
  document.getElementById("duurzaamscoretab").innerText = duurzaamScore;
}

let gekozenBedrijf = localStorage.getItem("bedrijfsnaam");

weergaveBedrijf(gekozenBedrijf)

const terug = document.getElementById("back");

// Bepalen naar welke pagina te gaan na drukken terugknop
terug.onclick = () => {
  if (localStorage.getItem("sectornaam") !== null) {
    sectornaam = localStorage.getItem("sectornaam");
    window.location.href = `/sectorOverzicht.html?sector=${sectornaam}`
  }

  if (localStorage.getItem("zoekterm") !== null) {
    zoekterm = localStorage.getItem("zoekterm");
    window.location.href=`/bedrijfslijst.html?bedrijven=${zoekterm}`
  }
}