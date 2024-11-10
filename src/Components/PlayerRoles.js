import Vector2 from "../Components/Vector2";

export const Coordinates = [
  {
    /* kaleci */
    min: new Vector2(302, 642),
    max: new Vector2(349, 535),
  },
  {
    /* stoperler */
    min: new Vector2(353, 749),
    max: new Vector2(673, 436),
  },
  {
    /* arka alt stoperler */
    min: new Vector2(302, 749),
    max: new Vector2(351, 649),
  },
  {
    /* arka üst stoperler */
    min: new Vector2(304, 535),
    max: new Vector2(354, 436),
  },
  {
    /* sahte defanslar */
    min: new Vector2(676, 749),
    max: new Vector2(877, 436),
  },
  {
    /* Bekler üst */
    min: new Vector2(302, 436),
    max: new Vector2(672, 196),
  },
  {
    /* sahte bekler üst */
    min: new Vector2(672, 436),
    max: new Vector2(877, 196),
  },
  {
    /* Sahte kanatlar üst */
    min: new Vector2(877, 436),
    max: new Vector2(1076, 196),
  },
  {
    /* kanatlar üst */
    min: new Vector2(1076, 436),
    max: new Vector2(1493, 196),
  },
  {
    /* bekler Alt */
    min: new Vector2(306, 991),
    max: new Vector2(673, 751),
  },
  {
    /* sahte bekler alt */
    min: new Vector2(673, 991),
    max: new Vector2(877, 751),
  },
  {
    /* sahte kanatlar alt */
    min: new Vector2(887, 991),
    max: new Vector2(1075, 751),
  },
  {
    /* kanatlar alt */
    min: new Vector2(1075, 991),
    max: new Vector2(1493, 751),
  },
  {
    /* orta saha */
    min: new Vector2(881, 749),
    max: new Vector2(1077, 436),
  },
  {
    /* forvet arkası */
    min: new Vector2(1077, 749),
    max: new Vector2(1355, 436),
  },
  {
    /* forvet */
    min: new Vector2(1355, 749),
    max: new Vector2(1493, 437),
  },
];
export const Kaleci = {
  coordinate: Coordinates[0],
  datas: [
    { name: "Kaleci", shortName: "K", Props: ["Savunma"] },
    {
      name: "Libero Kaleci",
      shortName: "LK",
      Props: ["Savunma", "Destek", "Hücum"],
    },
  ],
};
export const Stoperler = {
  coordinate: Coordinates[1],
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
export const StoperlerArkaAlt = {
  coordinate: Coordinates[2],
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
export const StoperlerArkaÜst = {
  coordinate: Coordinates[3],
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
export const SahteDefanslar = {
  coordinate: Coordinates[4],
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
export const BeklerUst = {
  coordinate: Coordinates[5],
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
export const SahteBeklerUst = {
  coordinate: Coordinates[6],
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
export const SahteKanatlarUst = {
  coordinate: Coordinates[7],
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
export const KanatlarUst = {
  coordinate: Coordinates[8],
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
export const BeklerAlt = {
  coordinate: Coordinates[9],
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
export const SahteBeklerAlt = {
  coordinate: Coordinates[10],
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
export const SahteKanatlarAlt = {
  coordinate: Coordinates[11],
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
export const KanatlarAlt = {
  coordinate: Coordinates[12],
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
export const OrtaSahalar = {
  coordinate: Coordinates[13],
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
export const ForvetArkasi = {
  coordinate: Coordinates[14],
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
export const Forvet = {
  coordinate: Coordinates[15],
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
