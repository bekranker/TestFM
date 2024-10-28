import { SoccerPlayer } from "./Components/SoccerPlayer";
import { Ball } from "./Components/ball";
import React from "react";
import "./App.css";
import Vector2 from "./Components/Vector2";
import bg from "./halisaha.png";
import DrawSquare from "./Components/mouseDebuggrt";

const coordinates = [
  {
    /* kaleci */
    min: new Vector2(323, 586),
    max: new Vector2(376, 397),
  },
  {
    /* stoperler */
    min: new Vector2(494, 703),
    max: new Vector2(392, 278),
  },
  {
    /* sahte defanslar */
    min: new Vector2(514, 708),
    max: new Vector2(815, 281),
  },
  {
    /* Bekler üst */
    min: new Vector2(344, 246),
    max: new Vector2(611, 147),
  },
  {
    /* sahte bekler üst */
    min: new Vector2(602, 258),
    max: new Vector2(611, 147),
  },
  {
    /* Sahte kanatlar üst */
    min: new Vector2(768, 241),
    max: new Vector2(1039, 141),
  },
  {
    /* kanatlar üst */
    min: new Vector2(1052, 236),
    max: new Vector2(1266, 152),
  },
  {
    /* bekler Alt */
    min: new Vector2(332, 872),
    max: new Vector2(566, 736),
  },
  {
    /* sahte bekler alt */
    min: new Vector2(562, 854),
    max: new Vector2(735, 734),
  },
  {
    /* sahte kanatlar alt */
    min: new Vector2(749, 858),
    max: new Vector2(1060, 748),
  },
  {
    /* kanatlar alt */
    min: new Vector2(1091, 842),
    max: new Vector2(1295, 736),
  },
  {
    /* orta saha */
    min: new Vector2(828, 701),
    max: new Vector2(974, 265),
  },
  {
    /* forvet arkası */
    min: new Vector2(1008, 691),
    max: new Vector2(1279, 287),
  },
  {
    /* forvet */
    min: new Vector2(1313, 707),
    max: new Vector2(1470, 291),
  },
];
const kaleci = {
  coordinate: coordinates[0],
  datas: [
    { name: "Kaleci", shortName: "K", Props: ["Savunma"] },
    {
      name: "Libero Kaleci",
      shortName: "LK",
      Props: ["Savunma", "Destek", "Hücum"],
    },
  ],
};
const stoperler = {
  coordinate: coordinates[1],
  datas: [
    {
      name: "Standart Stoper",
      shortName: "SS",
      Props: ["Savunma", "Kesici", "Sigorta"],
    },
    { name: "Libero", shortName: "L", Props: ["Savunma", "Destek"] },
    {
      name: "Pasör Stoper",
      shortName: "PS",
      Props: ["Savunma", "Kesici", "Sigorta"],
    },
    {
      name: "Çakılı Stoper",
      shortName: "ÇS",
      Props: ["Savunma", "Kesici", "Sigorta"],
    },
    {
      name: "Kenar Stoper",
      shortName: "KS",
      Props: ["Savunma", "Kesici", "Sigorta"],
    },
  ],
};
const sahteDefanslar = {
  coordinate: coordinates[2],
  datas: [
    {
      name: "Defansif Orta Saha",
      shortName: "DOS",
      Props: ["Savunma", "Destek"],
    },
    {
      name: "Derin Oyun Kurucu",
      shortName: "DOK",
      Props: ["Savunma", "Destek"],
    },
    {
      name: "Savaşçı Orta Saha",
      shortName: "SO",
      Props: ["Savunma", "Destek"],
    },
    { name: "Ön Libero", shortName: "ÖL", Props: ["Savunma"] },
    { name: "Gizli Libero", shortName: "GL", Props: ["Savunma"] },
    { name: "Regista", shortName: "REG", Props: ["Destek"] },
    { name: "Gezgin Oyun Kurucu", shortName: "GOK", Props: ["Destek"] },
    {
      name: "Serbest Defansif Orta Saha",
      shortName: "VOL",
      Props: ["Destek", "Hücum"],
    },
  ],
};
const beklerUst = {
  coordinate: coordinates[3],
  datas: [
    {
      name: "Standart Bek",
      shortName: "SB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    {
      name: "Kanat Bek",
      shortName: "KB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    { name: "Çakılı Bek", shortName: "ÇB", Props: ["Savunma"] },
    { name: "İki Yönlü Bek", shortName: "İYB", Props: ["Destek", "Hücum"] },
    {
      name: "Sahte Bek",
      shortName: "SHB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    { name: "Sigorta Bek", shortName: "SİB", Props: ["Savunma"] },
  ],
};
const sahteBeklerUst = {
  coordinate: coordinates[4],
  datas: [
    {
      name: "Kanat Bek",
      shortName: "KB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    {
      name: "İki Yönlü Bek",
      shortName: "İYB",
      Props: ["Destek", "Hücum"],
    },
    {
      name: "Sahte Bek",
      shortName: "SHB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
  ],
};
const sahteKanatlarUst = {
  coordinate: coordinates[5],
  datas: [
    {
      name: "Çalışkan Kanat Oyuncusu",
      shortName: "ÇKO",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    { name: "Kanat Oyuncusu", shortName: "K", Props: ["Destek", "Hücum"] },
    { name: "Defansif Kanat", shortName: "DK", Props: ["Savunma", "Destek"] },
    { name: "Kanat Oyun Kurucu", shortName: "KOK", Props: ["Destek", "Hücum"] },
    { name: "Ters Ayaklı Kanat", shortName: "TAK", Props: ["Destek", "Hücum"] },
  ],
};
const kanatlarUst = {
  coordinate: coordinates[6],
  datas: [
    { name: "Kanat Oyuncusu", shortName: "K", Props: ["Destek", "Hücum"] },
    {
      name: "Ofansif Oyun Kurucu",
      shortName: "OOK",
      Props: ["Destek", "Hücum"],
    },
    { name: "Kanat Forvet", shortName: "KF", Props: ["Destek", "Hücum"] },
    { name: "On Numara", shortName: "ON", Props: ["Hücum"] },
    { name: "Hedef Oyun Kurucu", shortName: "HKO", Props: ["Destek", "Hücum"] },
    { name: "Raumdeuter", shortName: "RMD", Props: ["Hücum"] },
    { name: "Ters Ayaklı Kanat", shortName: "TAK", Props: ["Destek", "Hücum"] },
  ],
};
const beklerAlt = {
  coordinate: coordinates[7],
  datas: [
    {
      name: "Standart Bek",
      shortName: "SB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    {
      name: "Kanat Bek",
      shortName: "KB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    { name: "Çakılı Bek", shortName: "ÇB", Props: ["Savunma"] },
    { name: "İki Yönlü Bek", shortName: "İYB", Props: ["Destek", "Hücum"] },
    {
      name: "Sahte Bek",
      shortName: "SHB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    { name: "Sigorta Bek", shortName: "SİB", Props: ["Savunma"] },
  ],
};
const sahteBeklerAlt = {
  coordinate: coordinates[8],
  datas: [
    {
      name: "Kanat Bek",
      shortName: "KB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    {
      name: "İki Yönlü Bek",
      shortName: "İYB",
      Props: ["Destek", "Hücum"],
    },
    {
      name: "Sahte Bek",
      shortName: "SHB",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
  ],
};
const sahteKanatlarAlt = {
  coordinate: coordinates[9],
  datas: [
    {
      name: "Çalışkan Kanat Oyuncusu",
      shortName: "ÇKO",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    { name: "Kanat Oyuncusu", shortName: "K", Props: ["Destek", "Hücum"] },
    { name: "Defansif Kanat", shortName: "DK", Props: ["Savunma", "Destek"] },
    { name: "Kanat Oyun Kurucu", shortName: "KOK", Props: ["Destek", "Hücum"] },
    { name: "Ters Ayaklı Kanat", shortName: "TAK", Props: ["Destek", "Hücum"] },
  ],
};
const kanatlarAlt = {
  coordinate: coordinates[10],
  datas: [
    { name: "Kanat Oyuncusu", shortName: "K", Props: ["Destek", "Hücum"] },
    {
      name: "Ofansif Oyun Kurucu",
      shortName: "OOK",
      Props: ["Destek", "Hücum"],
    },
    { name: "Kanat Forvet", shortName: "KF", Props: ["Destek", "Hücum"] },
    { name: "On Numara", shortName: "ON", Props: ["Hücum"] },
    { name: "Hedef Oyun Kurucu", shortName: "HKO", Props: ["Destek", "Hücum"] },
    { name: "Raumdeuter", shortName: "RMD", Props: ["Hücum"] },
    { name: "Ters Ayaklı Kanat", shortName: "TAK", Props: ["Destek", "Hücum"] },
  ],
};
const ortaSahalar = {
  coordinate: coordinates[11],
  datas: [
    {
      name: "Merkez Orta Saha",
      shortName: "MO",
      Props: ["Savunma", "Destek", "Hücum", "Otomatik"],
    },
    {
      name: "Derin Oyun Kurucu",
      shortName: "DOK",
      Props: ["Savunma", "Destek"],
    },
    { name: "İki Yönlü Orta Saha", shortName: "İYO", Props: ["Destek"] },
    {
      name: "Ofansif Oyun Kurucu",
      shortName: "OOK",
      Props: ["Destek", "Hücum"],
    },
    {
      name: "Savaşçı Orta Saha",
      shortName: "SO",
      Props: ["Savunma", "Destek"],
    },
    { name: "Gezgin Oyun Kurucu", shortName: "GOK", Props: ["Destek"] },
    { name: "Mezzala", shortName: "MEZ", Props: ["Destek", "Hücum"] },
    { name: "Dinamo", shortName: "DNM", Props: ["Destek"] },
  ],
};
const forvetArkasi = {
  coordinate: coordinates[12],
  datas: [
    { name: "Ofansif Orta Saha", shortName: "OOS", Props: ["Destek", "Hücum"] },
    {
      name: "Ofansif Oyun Kurucu",
      shortName: "OOK",
      Props: ["Destek", "Hücum"],
    },
    { name: "On Numara", shortName: "ON", Props: ["Hücum"] },
    { name: "Enganche", shortName: "EG", Props: ["Destek"] },
    { name: "Gizli Forvet", shortName: "GF", Props: ["Hücum"] },
  ],
};
const forvet = {
  coordinate: coordinates[13],
  datas: [
    { name: "Yardımcı Forvet", shortName: "YRD", Props: ["Destek", "Hücum"] },
    { name: "Yaratıcı Forvet", shortName: "YF", Props: ["Hücum"] },
    { name: "Pivot Santrafor", shortName: "PS", Props: ["Destek", "Hücum"] },
    { name: "Fırsatçı Golcü", shortName: "FG", Props: ["Hücum"] },
    { name: "Komple Forvet", shortName: "KOF", Props: ["Destek", "Hücum"] },
    {
      name: "Çalışkan Forvet",
      shortName: "ÇF",
      Props: ["Savunma", "Destek", "Hücum"],
    },
    { name: "On Numara", shortName: "ON", Props: ["Hücum"] },
    { name: "Sahte Forvet", shortName: "SF", Props: ["Destek"] },
  ],
};
const allTypes = [
  kaleci,
  stoperler,
  sahteDefanslar,
  beklerUst,
  sahteBeklerUst,
  sahteKanatlarUst,
  kanatlarUst,
  beklerAlt,
  sahteBeklerAlt,
  sahteKanatlarAlt,
  kanatlarAlt,
  ortaSahalar,
  forvetArkasi,
  forvet,
];

function setCorrectData(xV, yV) {
  let position = new Vector2(xV, yV);
  for (let index = 0; index < allTypes.length; index++) {
    if (isWithinBounds(position, allTypes[index].coordinate)) {
      return allTypes[index];
    }
  }
}
function isWithinBounds(position, data) {
  return (
    position.x > data.min.x &&
    position.x < data.max.x &&
    position.y > data.max.y &&
    position.y < data.min.y
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={bg}
          style={{ width: 1280, height: 800, display: "grid" }}
        ></img>
        <DrawSquare />
        <SoccerPlayer onDragHandler={setCorrectData} />
        <Ball />
      </header>
    </div>
  );
}

export default App;
