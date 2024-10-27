import { SoccerPlayer } from "./Components/SoccerPlayer";
import { Ball } from "./Components/ball";
import React from "react";
import "./App.css";
import Vector2 from "./Components/Vector2";
import bg from "./halisaha.png";

const coordinates = [
  {
    min: new Vector2(-520, -40),
    max: new Vector2(-480, 40),
  },
  {
    min: new Vector2(-370, -240),
    max: new Vector2(-330, 240),
  },
  {
    min: new Vector2(-200, -180),
    max: new Vector2(-160, 180),
  },
  {
    min: new Vector2(-90, -260),
    max: new Vector2(-50, 260),
  },
  {
    min: new Vector2(-40, -240),
    max: new Vector2(0, 240),
  },
  {
    min: new Vector2(40, -200),
    max: new Vector2(80, 200),
  },
  {
    min: new Vector2(150, -150),
    max: new Vector2(190, 150),
  },
  {
    min: new Vector2(240, -120),
    max: new Vector2(280, 120),
  },
  {
    min: new Vector2(350, -100),
    max: new Vector2(390, 100),
  },
  {
    min: new Vector2(480, -80),
    max: new Vector2(520, 80),
  },
];

const kaleciTypes = {
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
const stoperTypes = {
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
const defansOrtaSahaTypes = {
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
const bekTypes = {
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
const sahteBekTypes = {
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
const sahteKanatTypes = {
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
const ortaSahaTypes = {
  coordinate: coordinates[6],
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
const forvetArkasiTypes = {
  coordinate: coordinates[7],
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
const kanatTypes = {
  coordinate: coordinates[8],
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
const forvetTypes = {
  coordinate: coordinates[9],
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
  kaleciTypes,
  stoperTypes,
  defansOrtaSahaTypes,
  bekTypes,
  sahteBekTypes,
  sahteKanatTypes,
  ortaSahaTypes,
  forvetArkasiTypes,
  kanatTypes,
  forvetTypes,
];

function setCorrectData(xV, yV) {
  let position = { x: xV, y: yV };
  for (let index = 0; index < allTypes.length; index++) {
    if (isWithinBounds(position, allTypes[index].coordinate)) {
      return allTypes[index];
    }
  }
}
function isWithinBounds(position, data) {
  return (
    position.x >= data.min.x &&
    position.x <= data.max.x &&
    position.y >= data.min.y &&
    position.y <= data.max.y
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
        <SoccerPlayer onDragHandler={setCorrectData} />
        <Ball />
      </header>
    </div>
  );
}

export default App;
