const verbenData = [
  {
    "id": "gehen-001",
    "level": "A1",
    "infinitiv": "gehen",
    "arti": "pergi, berjalan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "gehe", "du": "gehst", "er_sie_es": "geht", "wir": "gehen", "ihr": "geht", "sie_Sie": "gehen" },
      "praeteritum": { "ich": "ging", "du": "gingst", "er_sie_es": "ging", "wir": "gingen", "ihr": "gingt", "sie_Sie": "gingen" },
      "perfekt": "ist gegangen",
      "imperativ": "Geh!/Geht!/Gehen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich gehe jeden Tag zur Schule.", "id": "Saya pergi ke sekolah setiap hari." },
      { "de": "Wir gehen heute Abend ins Kino.", "id": "Kami pergi ke bioskop malam ini." }
    ]
  },
  {
    "id": "haben-002",
    "level": "A1",
    "infinitiv": "haben",
    "arti": "mempunyai",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "habe", "du": "hast", "er_sie_es": "hat", "wir": "haben", "ihr": "habt", "sie_Sie": "haben" },
      "praeteritum": { "ich": "hatte", "du": "hattest", "er_sie_es": "hatte", "wir": "hatten", "ihr": "hattet", "sie_Sie": "hatten" },
      "perfekt": "hat gehabt",
      "imperativ": "Hab!/Habt!/Haben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe zwei Geschwister.", "id": "Saya punya dua saudara." },
      { "de": "Hast du Zeit morgen?", "id": "Kamu punya waktu besok?" }
    ]
  },
  {
    "id": "sein-003",
    "level": "A1",
    "infinitiv": "sein",
    "arti": "adalah, menjadi",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "bin", "du": "bist", "er_sie_es": "ist", "wir": "sind", "ihr": "seid", "sie_Sie": "sind" },
      "praeteritum": { "ich": "war", "du": "warst", "er_sie_es": "war", "wir": "waren", "ihr": "wart", "sie_Sie": "waren" },
      "perfekt": "ist gewesen",
      "imperativ": "Sei!/Seid!/Seien Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich bin müde.", "id": "Saya lelah." },
      { "de": "Sind Sie Herr Müller?", "id": "Apakah Anda Tuan Müller?" }
    ]
  },
  {
    "id": "sprechen-004",
    "level": "A2",
    "infinitiv": "sprechen",
    "arti": "berbicara",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "spreche", "du": "sprichst", "er_sie_es": "spricht", "wir": "sprechen", "ihr": "sprecht", "sie_Sie": "sprechen" },
      "praeteritum": { "ich": "sprach", "du": "sprachst", "er_sie_es": "sprach", "wir": "sprachen", "ihr": "spracht", "sie_Sie": "sprachen" },
      "perfekt": "hat gesprochen",
      "imperativ": "Sprich!/Sprecht!/Sprechen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sprichst du Deutsch?", "id": "Apakah kamu berbicara bahasa Jerman?" },
      { "de": "Er spricht sehr schnell.", "id": "Dia berbicara sangat cepat." }
    ]
  },
  {
    "id": "lernen-005",
    "level": "A1",
    "infinitiv": "lernen",
    "arti": "belajar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lerne", "du": "lernst", "er_sie_es": "lernt", "wir": "lernen", "ihr": "lernt", "sie_Sie": "lernen" },
      "praeteritum": { "ich": "lernte", "du": "lerntest", "er_sie_es": "lernte", "wir": "lernten", "ihr": "lerntet", "sie_Sie": "lernten" },
      "perfekt": "hat gelernt",
      "imperativ": "Lern!/Lernt!/Lernen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich lerne Deutsch.", "id": "Saya belajar bahasa Jerman." },
      { "de": "Wir lernen zusammen.", "id": "Kita belajar bersama." }
    ]
  },
  {
    "id": "essen-006",
    "level": "A1",
    "infinitiv": "essen",
    "arti": "makan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "esse", "du": "isst", "er_sie_es": "isst", "wir": "essen", "ihr": "esst", "sie_Sie": "essen" },
      "praeteritum": { "ich": "aß", "du": "aßest", "er_sie_es": "aß", "wir": "aßen", "ihr": "aßt", "sie_Sie": "aßen" },
      "perfekt": "hat gegessen",
      "imperativ": "Iss!/Esst!/Essen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich esse gern Äpfel.", "id": "Saya suka makan apel." },
      { "de": "Was isst du heute?", "id": "Apa yang kamu makan hari ini?" }
    ]
  },
  {
    "id": "fahren-007",
    "level": "A2",
    "infinitiv": "fahren",
    "arti": "pergi (kendaraan), mengendarai",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "fahre", "du": "fährst", "er_sie_es": "fährt", "wir": "fahren", "ihr": "fahrt", "sie_Sie": "fahren" },
      "praeteritum": { "ich": "fuhr", "du": "fuhrst", "er_sie_es": "fuhr", "wir": "fuhren", "ihr": "fuhrt", "sie_Sie": "fuhren" },
      "perfekt": "ist gefahren",
      "imperativ": "Fahr!/Fahrt!/Fahren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir fahren mit dem Zug.", "id": "Kami pergi dengan kereta." },
      { "de": "Fährst du oft Fahrrad?", "id": "Apakah kamu sering naik sepeda?" }
    ]
  },
  {
    "id": "anfangen-008",
    "level": "B1",
    "infinitiv": "anfangen",
    "arti": "mulai (begin)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "fange an", "du": "fängst an", "er_sie_es": "fängt an", "wir": "fangen an", "ihr": "fangt an", "sie_Sie": "fangen an" },
      "praeteritum": { "ich": "fing an", "du": "fingst an", "er_sie_es": "fing an", "wir": "fingen an", "ihr": "fingt an", "sie_Sie": "fingen an" },
      "perfekt": "hat angefangen",
      "imperativ": "Fang an!/Fangt an!/Fangen Sie an!"
    },
    "contoh_kalimat": [
      { "de": "Wir fangen jetzt an.", "id": "Kita mulai sekarang." },
      { "de": "Wann fängt der Film an?", "id": "Kapan film dimulai?" }
    ]
  },
  {
    "id": "aufstehen-009",
    "level": "A2",
    "infinitiv": "aufstehen",
    "arti": "bangun, berdiri",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "stehe auf", "du": "stehst auf", "er_sie_es": "steht auf", "wir": "stehen auf", "ihr": "steht auf", "sie_Sie": "stehen auf" },
      "praeteritum": { "ich": "stand auf", "du": "standst auf", "er_sie_es": "stand auf", "wir": "standen auf", "ihr": "standet auf", "sie_Sie": "standen auf" },
      "perfekt": "ist aufgestanden",
      "imperativ": "Steh auf!/Steht auf!/Stehen Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Ich stehe um sieben Uhr auf.", "id": "Saya bangun jam tujuh." },
      { "de": "Steh bitte auf.", "id": "Silakan berdiri." }
    ]
  },
  {
    "id": "warten-010",
    "level": "A1",
    "infinitiv": "warten",
    "arti": "menunggu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "warte", "du": "wartest", "er_sie_es": "wartet", "wir": "warten", "ihr": "wartet", "sie_Sie": "warten" },
      "praeteritum": { "ich": "wartete", "du": "wartetest", "er_sie_es": "wartete", "wir": "warteten", "ihr": "wartetet", "sie_Sie": "warteten" },
      "perfekt": "hat gewartet",
      "imperativ": "Warte!/Wartet!/Warten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Warte auf mich!", "id": "Tunggu saya!" },
      { "de": "Ich warte schon eine Stunde.", "id": "Saya sudah menunggu satu jam." }
    ]
  },
  {
    "id": "kennen-011",
    "level": "B1",
    "infinitiv": "kennen",
    "arti": "mengenal",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "kenne", "du": "kennst", "er_sie_es": "kennt", "wir": "kennen", "ihr": "kennt", "sie_Sie": "kennen" },
      "praeteritum": { "ich": "kannte", "du": "kanntest", "er_sie_es": "kannte", "wir": "kannten", "ihr": "kanntet", "sie_Sie": "kannten" },
      "perfekt": "hat gekannt",
      "imperativ": "Kenne!/Kannt!/Kennen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich kenne ihn gut.", "id": "Saya mengenalnya dengan baik." },
      { "de": "Kennst du das Wort?", "id": "Apakah kamu mengenal kata itu?" }
    ]
  },
  {
    "id": "verstehen-012",
    "level": "A2",
    "infinitiv": "verstehen",
    "arti": "mengerti",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verstehe", "du": "verstehst", "er_sie_es": "versteht", "wir": "verstehen", "ihr": "versteht", "sie_Sie": "verstehen" },
      "praeteritum": { "ich": "verstand", "du": "verstandst", "er_sie_es": "verstand", "wir": "verstanden", "ihr": "verstandet", "sie_Sie": "verstanden" },
      "perfekt": "hat verstanden",
      "imperativ": "Versteh!/Versteht!/Verstehen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Verstehst du mich?", "id": "Apakah kamu mengerti saya?" },
      { "de": "Ich verstehe das nicht.", "id": "Saya tidak mengerti itu." }
    ]
  },
  {
    "id": "schreiben-013",
    "level": "B1",
    "infinitiv": "schreiben",
    "arti": "menulis",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "schreibe", "du": "schreibst", "er_sie_es": "schreibt", "wir": "schreiben", "ihr": "schreibt", "sie_Sie": "schreiben" },
      "praeteritum": { "ich": "schrieb", "du": "schriebst", "er_sie_es": "schrieb", "wir": "schrieben", "ihr": "schriebt", "sie_Sie": "schrieben" },
      "perfekt": "hat geschrieben",
      "imperativ": "Schreib!/Schreibt!/Schreiben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich schreibe einen Brief.", "id": "Saya menulis sebuah surat." },
      { "de": "Schreib mir später!", "id": "Tulis saya nanti!" }
    ]
  },
  {
    "id": "sehen-014",
    "level": "A1",
    "infinitiv": "sehen",
    "arti": "melihat",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "sehe", "du": "siehst", "er_sie_es": "sieht", "wir": "sehen", "ihr": "seht", "sie_Sie": "sehen" },
      "praeteritum": { "ich": "sah", "du": "sahst", "er_sie_es": "sah", "wir": "sahen", "ihr": "saht", "sie_Sie": "sahen" },
      "perfekt": "hat gesehen",
      "imperativ": "Sieh!/Seht!/Sehen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich sehe einen Vogel.", "id": "Saya melihat seekor burung." },
      { "de": "Siehst du das?", "id": "Apakah kamu melihat itu?" }
    ]
  },
  {
    "id": "finden-015",
    "level": "A1",
    "infinitiv": "finden",
    "arti": "menemukan, berpikir (opini)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "finde", "du": "findest", "er_sie_es": "findet", "wir": "finden", "ihr": "findet", "sie_Sie": "finden" },
      "praeteritum": { "ich": "fand", "du": "fandest", "er_sie_es": "fand", "wir": "fanden", "ihr": "fandet", "sie_Sie": "fanden" },
      "perfekt": "hat gefunden",
      "imperativ": "Finde!/Findet!/Finden Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich finde das gut.", "id": "Saya pikir itu bagus." },
      { "de": "Hast du den Schlüssel gefunden?", "id": "Apakah kamu menemukan kuncinya?" }
    ]
  },
  {
    "id": "brauchen-016",
    "level": "A1",
    "infinitiv": "brauchen",
    "arti": "membutuhkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "brauche", "du": "brauchst", "er_sie_es": "braucht", "wir": "brauchen", "ihr": "braucht", "sie_Sie": "brauchen" },
      "praeteritum": { "ich": "brauchte", "du": "brauchtest", "er_sie_es": "brauchte", "wir": "brauchten", "ihr": "brauchtet", "sie_Sie": "brauchten" },
      "perfekt": "hat gebraucht",
      "imperativ": "Brauch!/Braucht!/Brauch(en) Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich brauche Hilfe.", "id": "Saya butuh bantuan." },
      { "de": "Wofür brauchst du das?", "id": "Untuk apa kamu butuh itu?" }
    ]
  },
  {
    "id": "rufen-017",
    "level": "B2",
    "infinitiv": "rufen",
    "arti": "memanggil, berteriak",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "rufe", "du": "rufst", "er_sie_es": "ruft", "wir": "rufen", "ihr": "ruft", "sie_Sie": "rufen" },
      "praeteritum": { "ich": "rief", "du": "riefst", "er_sie_es": "rief", "wir": "riefen", "ihr": "rieft", "sie_Sie": "riefen" },
      "perfekt": "hat gerufen",
      "imperativ": "Ruf!/Ruft!/Rufen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er rief nach Hilfe.", "id": "Dia memanggil bantuan." },
      { "de": "Rufst du mich morgen an?", "id": "Apakah kamu akan memanggil saya besok?" }
    ]
  },
  {
    "id": "entscheiden-018",
    "level": "C1",
    "infinitiv": "entscheiden",
    "arti": "memutuskan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "entscheide", "du": "entscheidest", "er_sie_es": "entscheidet", "wir": "entscheiden", "ihr": "entscheidet", "sie_Sie": "entscheiden" },
      "praeteritum": { "ich": "entschied", "du": "entschiedest", "er_sie_es": "entschied", "wir": "entschieden", "ihr": "entscheidet", "sie_Sie": "entschieden" },
      "perfekt": "hat entschieden",
      "imperativ": "Entscheide!/Entscheidet!/Entscheiden Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er musste sich schnell entscheiden.", "id": "Dia harus segera memutuskan." },
      { "de": "Wir entscheiden morgen.", "id": "Kita memutuskan besok." }
    ]
  },
  {
    "id": "besuchen-019",
    "level": "A2",
    "infinitiv": "besuchen",
    "arti": "mengunjungi (to visit)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "besuche", "du": "besuchst", "er_sie_es": "besucht", "wir": "besuchen", "ihr": "besucht", "sie_Sie": "besuchen" },
      "praeteritum": { "ich": "besuchte", "du": "besuchtest", "er_sie_es": "besuchte", "wir": "besuchten", "ihr": "besuchtet", "sie_Sie": "besuchten" },
      "perfekt": "hat besucht",
      "imperativ": "Besuch!/Besucht!/Besuchen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich besuche meine Großeltern.", "id": "Saya mengunjungi kakek-nenek saya." },
      { "de": "Besuchst du uns am Wochenende?", "id": "Apakah kamu akan mengunjungi kami di akhir pekan?" }
    ]
  },
  {
    "id": "verlieren-020",
    "level": "B1",
    "infinitiv": "verlieren",
    "arti": "kehilangan, kalah",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verliere", "du": "verlierst", "er_sie_es": "verliert", "wir": "verlieren", "ihr": "verliert", "sie_Sie": "verlieren" },
      "praeteritum": { "ich": "verlor", "du": "verlorst", "er_sie_es": "verlor", "wir": "verloren", "ihr": "verlort", "sie_Sie": "verloren" },
      "perfekt": "hat verloren",
      "imperativ": "Verlier!/Verliert!/Verlieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe meinen Schlüssel verloren.", "id": "Saya kehilangan kunci saya." },
      { "de": "Er verlor das Spiel.", "id": "Dia kalah pertandingan." }
    ]
  },
  {
    "id": "beginnen-021",
    "level": "B2",
    "infinitiv": "beginnen",
    "arti": "memulai",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "beginne", "du": "beginnst", "er_sie_es": "beginnt", "wir": "beginnen", "ihr": "beginnt", "sie_Sie": "beginnen" },
      "praeteritum": { "ich": "begann", "du": "begannst", "er_sie_es": "begann", "wir": "begannen", "ihr": "begannt", "sie_Sie": "begannen" },
      "perfekt": "hat begonnen",
      "imperativ": "Beginne!/Beginnt!/Beginnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Kurs beginnt nächsten Monat.", "id": "Kursus dimulai bulan depan." },
      { "de": "Wann beginnt die Sitzung?", "id": "Kapan pertemuan dimulai?" }
    ]
  },
  {
    "id": "anrufen-022",
    "level": "A2",
    "infinitiv": "anrufen",
    "arti": "menelpon",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "rufe an", "du": "rufst an", "er_sie_es": "ruft an", "wir": "rufen an", "ihr": "ruft an", "sie_Sie": "rufen an" },
      "praeteritum": { "ich": "rief an", "du": "riefst an", "er_sie_es": "rief an", "wir": "riefen an", "ihr": "rieft an", "sie_Sie": "riefen an" },
      "perfekt": "hat angerufen",
      "imperativ": "Ruf an!/Ruft an!/Rufen Sie an!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du mich später anrufen?", "id": "Bisakah kamu menelpon saya nanti?" },
      { "de": "Er rief seine Mutter an.", "id": "Dia menelpon ibunya." }
    ]
  },
  {
    "id": "arbeiten-023",
    "level": "A1",
    "infinitiv": "arbeiten",
    "arti": "bekerja",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "arbeite", "du": "arbeitest", "er_sie_es": "arbeitet", "wir": "arbeiten", "ihr": "arbeitet", "sie_Sie": "arbeiten" },
      "praeteritum": { "ich": "arbeitete", "du": "arbeitetest", "er_sie_es": "arbeitete", "wir": "arbeiteten", "ihr": "arbeitetet", "sie_Sie": "arbeiteten" },
      "perfekt": "hat gearbeitet",
      "imperativ": "Arbeite!/Arbeitet!/Arbeiten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich arbeite im Büro.", "id": "Saya bekerja di kantor." },
      { "de": "Arbeitest du heute?", "id": "Apakah kamu bekerja hari ini?" }
    ]
  },
  {
    "id": "zahlen-024",
    "level": "A2",
    "infinitiv": "zahlen",
    "arti": "membayar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "zahle", "du": "zahlst", "er_sie_es": "zahlt", "wir": "zahlen", "ihr": "zahlt", "sie_Sie": "zahlen" },
      "praeteritum": { "ich": "zahlte", "du": "zahltest", "er_sie_es": "zahlte", "wir": "zahlten", "ihr": "zahltet", "sie_Sie": "zahlten" },
      "perfekt": "hat gezahlt",
      "imperativ": "Zahl!/Zahlt!/Zahlen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich zahle mit Karte.", "id": "Saya membayar dengan kartu." },
      { "de": "Zahlen Sie zusammen oder getrennt?", "id": "Apakah Anda bayar bersama atau terpisah?" }
    ]
  },
  {
    "id": "suchen-025",
    "level": "A1",
    "infinitiv": "suchen",
    "arti": "mencari",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "suche", "du": "suchst", "er_sie_es": "sucht", "wir": "suchen", "ihr": "sucht", "sie_Sie": "suchen" },
      "praeteritum": { "ich": "suchte", "du": "suchtest", "er_sie_es": "suchte", "wir": "suchten", "ihr": "suchtet", "sie_Sie": "suchten" },
      "perfekt": "hat gesucht",
      "imperativ": "Such!/Sucht!/Suchen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich suche meinen Stift.", "id": "Saya mencari pulpen saya." },
      { "de": "Wo suchst du?", "id": "Di mana kamu mencari?" }
    ]
  },
  {
    "id": "bezahlen-026",
    "level": "B1",
    "infinitiv": "bezahlen",
    "arti": "membayar",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "bezahle", "du": "bezahlst", "er_sie_es": "bezahlt", "wir": "bezahlen", "ihr": "bezahlt", "sie_Sie": "bezahlen" },
      "praeteritum": { "ich": "bezahlte", "du": "bezahlt", "er_sie_es": "bezahlte", "wir": "bezahlten", "ihr": "bezahltet", "sie_Sie": "bezahlten" },
      "perfekt": "hat bezahlt",
      "imperativ": "Bezahl!/Bezahlt!/Bezahlen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe die Rechnung bezahlt.", "id": "Saya sudah membayar tagihan." },
      { "de": "Bezahlst du bar?", "id": "Apakah kamu membayar tunai?" }
    ]
  },
  {
    "id": "versuchen-027",
    "level": "B1",
    "infinitiv": "versuchen",
    "arti": "mencoba",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "versuche", "du": "versuchst", "er_sie_es": "versucht", "wir": "versuchen", "ihr": "versucht", "sie_Sie": "versuchen" },
      "praeteritum": { "ich": "versuchte", "du": "versuchtest", "er_sie_es": "versuchte", "wir": "versuchten", "ihr": "versuchtet", "sie_Sie": "versuchten" },
      "perfekt": "hat versucht",
      "imperativ": "Versuch!/Versucht!/Versuchen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich versuche, pünktlich zu sein.", "id": "Saya berusaha untuk tepat waktu." },
      { "de": "Versuch es noch einmal.", "id": "Coba lagi." }
    ]
  },
  {
    "id": "schlafen-028",
    "level": "A1",
    "infinitiv": "schlafen",
    "arti": "tidur",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "schlafe", "du": "schläfst", "er_sie_es": "schläft", "wir": "schlafen", "ihr": "schlaft", "sie_Sie": "schlafen" },
      "praeteritum": { "ich": "schlief", "du": "schliefst", "er_sie_es": "schlief", "wir": "schliefen", "ihr": "schlieft", "sie_Sie": "schliefen" },
      "perfekt": "hat geschlafen",
      "imperativ": "Schlaf!/Schlaft!/Schlafen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich schlafe acht Stunden.", "id": "Saya tidur delapan jam." },
      { "de": "Schläfst du noch?", "id": "Apakah kamu masih tidur?" }
    ]
  },
  {
    "id": "denken-029",
    "level": "B2",
    "infinitiv": "denken",
    "arti": "berpikir",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "denke", "du": "denkst", "er_sie_es": "denkt", "wir": "denken", "ihr": "denkt", "sie_Sie": "denken" },
      "praeteritum": { "ich": "dachte", "du": "dachtest", "er_sie_es": "dachte", "wir": "dachten", "ihr": "dachtet", "sie_Sie": "dachten" },
      "perfekt": "hat gedacht",
      "imperativ": "Denk!/Denkt!/Denken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich denke oft an dich.", "id": "Saya sering memikirkanmu." },
      { "de": "Denk nach, bevor du antwortest.", "id": "Pikirkan sebelum kamu menjawab." }
    ]
  },
  {
    "id": "erklären-030",
    "level": "C2",
    "infinitiv": "erklären",
    "arti": "menjelaskan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erkläre", "du": "erklärst", "er_sie_es": "erklärt", "wir": "erklären", "ihr": "erklärt", "sie_Sie": "erklären" },
      "praeteritum": { "ich": "erklärte", "du": "erklärtest", "er_sie_es": "erklärte", "wir": "erklärten", "ihr": "erklärtet", "sie_Sie": "erklärten" },
      "perfekt": "hat erklärt",
      "imperativ": "Erklär!/Erklärt!/Erklären Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du das genauer erklären?", "id": "Bisakah kamu menjelaskannya lebih rinci?" },
      { "de": "Er erklärte die Theorie gut.", "id": "Dia menjelaskan teorinya dengan baik." }
    ]
  },
  {
    "id": "kommen-031",
    "level": "A1",
    "infinitiv": "kommen",
    "arti": "datang",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "komme", "du": "kommst", "er_sie_es": "kommt", "wir": "kommen", "ihr": "kommt", "sie_Sie": "kommen" },
      "praeteritum": { "ich": "kam", "du": "kamst", "er_sie_es": "kam", "wir": "kamen", "ihr": "kamt", "sie_Sie": "kamen" },
      "perfekt": "ist gekommen",
      "imperativ": "Komm!/Kommt!/Kommen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kommst du heute?", "id": "Kamu datang hari ini?" },
      { "de": "Er kommt aus Spanien.", "id": "Dia berasal dari Spanyol." }
    ]
  },
  {
    "id": "mitkommen-032",
    "level": "A2",
    "infinitiv": "mitkommen",
    "arti": "ikut datang",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "komme mit", "du": "kommst mit", "er_sie_es": "kommt mit", "wir": "kommen mit", "ihr": "kommt mit", "sie_Sie": "kommen mit" },
      "praeteritum": { "ich": "kam mit", "du": "kamst mit", "er_sie_es": "kam mit", "wir": "kamen mit", "ihr": "kamt mit", "sie_Sie": "kamen mit" },
      "perfekt": "ist mitgekommen",
      "imperativ": "Komm mit!/Kommt mit!/Kommen Sie mit!"
    },
    "contoh_kalimat": [
      { "de": "Kommst du mit ins Café?", "id": "Mau ikut ke kafe?" },
      { "de": "Sie ist mitgekommen.", "id": "Dia ikut datang." }
    ]
  },
  {
    "id": "bleiben-033",
    "level": "A1",
    "infinitiv": "bleiben",
    "arti": "tetap, tinggal",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "bleibe", "du": "bleibst", "er_sie_es": "bleibt", "wir": "bleiben", "ihr": "bleibt", "sie_Sie": "bleiben" },
      "praeteritum": { "ich": "blieb", "du": "bliebst", "er_sie_es": "blieb", "wir": "blieben", "ihr": "bliebt", "sie_Sie": "blieben" },
      "perfekt": "ist geblieben",
      "imperativ": "Bleib!/Bleibt!/Bleiben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich bleibe zu Hause.", "id": "Saya tinggal di rumah." },
      { "de": "Bleib ruhig.", "id": "Tetap tenang." }
    ]
  },
  {
    "id": "laufen-034",
    "level": "A2",
    "infinitiv": "laufen",
    "arti": "lari, berjalan cepat",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "laufe", "du": "läufst", "er_sie_es": "läuft", "wir": "laufen", "ihr": "lauft", "sie_Sie": "laufen" },
      "praeteritum": { "ich": "lief", "du": "liefst", "er_sie_es": "lief", "wir": "liefen", "ihr": "lieft", "sie_Sie": "liefen" },
      "perfekt": "ist gelaufen",
      "imperativ": "Lauf!/Lauft!/Laufen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich laufe jeden Morgen.", "id": "Saya berlari setiap pagi." },
      { "de": "Der Hund läuft schnell.", "id": "Anjing itu berlari cepat." }
    ]
  },
  {
    "id": "einkaufen-035",
    "level": "A1",
    "infinitiv": "einkaufen",
    "arti": "berbelanja",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "kaufe ein", "du": "kaufst ein", "er_sie_es": "kauft ein", "wir": "kaufen ein", "ihr": "kauft ein", "sie_Sie": "kaufen ein" },
      "praeteritum": { "ich": "kaufte ein", "du": "kauftest ein", "er_sie_es": "kaufte ein", "wir": "kauften ein", "ihr": "kauftet ein", "sie_Sie": "kauften ein" },
      "perfekt": "hat eingekauft",
      "imperativ": "Kauf ein!/Kauft ein!/Kaufen Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Ich gehe heute einkaufen.", "id": "Saya pergi berbelanja hari ini." },
      { "de": "Wir kaufen Lebensmittel ein.", "id": "Kami berbelanja bahan makanan." }
    ]
  },
  {
    "id": "ausgehen-036",
    "level": "A2",
    "infinitiv": "ausgehen",
    "arti": "keluar (untuk bersenang-senang)",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "gehe aus", "du": "gehst aus", "er_sie_es": "geht aus", "wir": "gehen aus", "ihr": "geht aus", "sie_Sie": "gehen aus" },
      "praeteritum": { "ich": "ging aus", "du": "gingst aus", "er_sie_es": "ging aus", "wir": "gingen aus", "ihr": "gingt aus", "sie_Sie": "gingen aus" },
      "perfekt": "ist ausgegangen",
      "imperativ": "Geh aus!/Geht aus!/Gehen Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Gehen wir heute Abend aus?", "id": "Kita keluar malam ini?" },
      { "de": "Er geht gern aus.", "id": "Dia suka pergi keluar." }
    ]
  },
  {
    "id": "öffnen-037",
    "level": "A1",
    "infinitiv": "öffnen",
    "arti": "membuka",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "öffne", "du": "öffnest", "er_sie_es": "öffnet", "wir": "öffnen", "ihr": "öffnet", "sie_Sie": "öffnen" },
      "praeteritum": { "ich": "öffnete", "du": "öffnetest", "er_sie_es": "öffnete", "wir": "öffneten", "ihr": "öffnetet", "sie_Sie": "öffneten" },
      "perfekt": "hat geöffnet",
      "imperativ": "Öffne!/Öffnet!/Öffnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Öffne das Fenster, bitte.", "id": "Buka jendelanya, tolong." },
      { "de": "Das Geschäft öffnet um neun.", "id": "Toko buka jam sembilan." }
    ]
  },
  {
    "id": "schließen-038",
    "level": "A1",
    "infinitiv": "schließen",
    "arti": "menutup",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schließe", "du": "schließt", "er_sie_es": "schließt", "wir": "schließen", "ihr": "schließt", "sie_Sie": "schließen" },
      "praeteritum": { "ich": "schloss", "du": "schlossest", "er_sie_es": "schloss", "wir": "schlossen", "ihr": "schlosst", "sie_Sie": "schlossen" },
      "perfekt": "hat geschlossen",
      "imperativ": "Schließ!/Schließt!/Schließen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Schließ die Tür, bitte.", "id": "Tutup pintunya, tolong." },
      { "de": "Der Laden schließt um acht.", "id": "Tokonya tutup jam delapan." }
    ]
  },
  {
    "id": "fragen-039",
    "level": "A1",
    "infinitiv": "fragen",
    "arti": "bertanya",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "frage", "du": "fragst", "er_sie_es": "fragt", "wir": "fragen", "ihr": "fragt", "sie_Sie": "fragen" },
      "praeteritum": { "ich": "fragte", "du": "fragtest", "er_sie_es": "fragte", "wir": "fragten", "ihr": "fragtet", "sie_Sie": "fragten" },
      "perfekt": "hat gefragt",
      "imperativ": "Frag!/Fragt!/Fragen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Darf ich etwas fragen?", "id": "Bolehkah saya bertanya sesuatu?" },
      { "de": "Er fragt nach dem Weg.", "id": "Dia menanyakan jalan." }
    ]
  },
  {
    "id": "antworten-040",
    "level": "A1",
    "infinitiv": "antworten",
    "arti": "menjawab",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "antworte", "du": "antwortest", "er_sie_es": "antwortet", "wir": "antworten", "ihr": "antwortet", "sie_Sie": "antworten" },
      "praeteritum": { "ich": "antwortete", "du": "antwortetest", "er_sie_es": "antwortete", "wir": "antworteten", "ihr": "antwortetet", "sie_Sie": "antworteten" },
      "perfekt": "hat geantwortet",
      "imperativ": "Antworte!/Antwortet!/Antworten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Bitte antworte mir bald.", "id": "Tolong jawab saya segera." },
      { "de": "Er hat nicht geantwortet.", "id": "Dia tidak menjawab." }
    ]
  },
  {
    "id": "helfen-041",
    "level": "A2",
    "infinitiv": "helfen",
    "arti": "membantu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "helfe", "du": "hilfst", "er_sie_es": "hilft", "wir": "helfen", "ihr": "helft", "sie_Sie": "helfen" },
      "praeteritum": { "ich": "half", "du": "halfst", "er_sie_es": "half", "wir": "halfen", "ihr": "halft", "sie_Sie": "halfen" },
      "perfekt": "hat geholfen",
      "imperativ": "Hilf!/Helft!/Helfen Sie!"
    },
    "praepositionen": [{ "präposition": "bei", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Kannst du mir helfen?", "id": "Bisakah kamu membantu saya?" },
      { "de": "Er hilft bei den Hausaufgaben.", "id": "Dia membantu dengan PR." }
    ]
  },
  {
    "id": "danken-042",
    "level": "A1",
    "infinitiv": "danken",
    "arti": "mengucapkan terima kasih",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "danke", "du": "dankst", "er_sie_es": "dankt", "wir": "danken", "ihr": "dankt", "sie_Sie": "danken" },
      "praeteritum": { "ich": "dankte", "du": "danktest", "er_sie_es": "dankte", "wir": "dankten", "ihr": "danktet", "sie_Sie": "dankten" },
      "perfekt": "hat gedankt",
      "imperativ": "Danke!/Danket!/Danken Sie!"
    },
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich danke dir für deine Hilfe.", "id": "Saya berterima kasih untuk bantuanmu." },
      { "de": "Danke schön!", "id": "Terima kasih banyak!" }
    ]
  },
  {
    "id": "sich freuen-043",
    "level": "A2",
    "infinitiv": "sich freuen",
    "arti": "bersuka cita, menantikan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "freue mich", "du": "freust dich", "er_sie_es": "freut sich", "wir": "freuen uns", "ihr": "freut euch", "sie_Sie": "freuen sich" },
      "praeteritum": { "ich": "freute mich", "du": "freutest dich", "er_sie_es": "freute sich", "wir": "freuten uns", "ihr": "freutet euch", "sie_Sie": "freuten sich" },
      "perfekt": "hat sich gefreut",
      "imperativ": "Freu dich!/Freut euch!/Freuen Sie sich!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich freue mich auf das Wochenende.", "id": "Saya menantikan akhir pekan." },
      { "de": "Freust du dich auch?", "id": "Kamu juga senang?" }
    ]
  },
  {
    "id": "sich erinnern-044",
    "level": "B1",
    "infinitiv": "sich erinnern",
    "arti": "mengingat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erinnere mich", "du": "erinnerst dich", "er_sie_es": "erinnert sich", "wir": "erinnern uns", "ihr": "erinnert euch", "sie_Sie": "erinnern sich" },
      "praeteritum": { "ich": "erinnerte mich", "du": "erinnertest dich", "er_sie_es": "erinnerte sich", "wir": "erinnerten uns", "ihr": "erinnertet euch", "sie_Sie": "erinnern sich" },
      "perfekt": "hat sich erinnert",
      "imperativ": "Erinnere dich!/Erinnert euch!/Erinnern Sie sich!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich erinnere mich an meine Kindheit.", "id": "Saya ingat masa kecil saya." },
      { "de": "Erinnere mich bitte daran.", "id": "Tolong ingatkan saya tentang itu." }
    ]
  },
  {
    "id": "freuen-045",
    "level": "A2",
    "infinitiv": "freuen",
    "arti": "menyukai, menggembirakan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "freue", "du": "freust", "er_sie_es": "freut", "wir": "freuen", "ihr": "freut", "sie_Sie": "freuen" },
      "praeteritum": { "ich": "freute", "du": "freutest", "er_sie_es": "freute", "wir": "freuten", "ihr": "freutet", "sie_Sie": "freuten" },
      "perfekt": "hat gefreut",
      "imperativ": "Freu!/Freut!/Freuen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das freut mich sehr.", "id": "Itu membuat saya sangat senang." },
      { "de": "Wir freuen uns über das Geschenk.", "id": "Kami senang dengan hadiahnya." }
    ]
  },
  {
    "id": "vertrauen-046",
    "level": "B2",
    "infinitiv": "vertrauen",
    "arti": "percaya (kepada seseorang)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "vertraue", "du": "vertraust", "er_sie_es": "vertraut", "wir": "vertrauen", "ihr": "vertraut", "sie_Sie": "vertrauen" },
      "praeteritum": { "ich": "vertraute", "du": "vertrautest", "er_sie_es": "vertraute", "wir": "vertrauten", "ihr": "vertrautet", "sie_Sie": "vertrauten" },
      "perfekt": "hat vertraut",
      "imperativ": "Vertrau!/Vertraut!/Vertrauen Sie!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich vertraue dir.", "id": "Saya percaya padamu." },
      { "de": "Du kannst auf ihn vertrauen.", "id": "Kamu bisa mempercayainya." }
    ]
  },
  {
    "id": "hoffen-047",
    "level": "A2",
    "infinitiv": "hoffen",
    "arti": "berharap",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "hoffe", "du": "hoffst", "er_sie_es": "hofft", "wir": "hoffen", "ihr": "hofft", "sie_Sie": "hoffen" },
      "praeteritum": { "ich": "hoffte", "du": "hoftest", "er_sie_es": "hoffte", "wir": "hofften", "ihr": "hoftet", "sie_Sie": "hofften" },
      "perfekt": "hat gehofft",
      "imperativ": "Hoffe!/Hofft!/Hoffen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich hoffe, dass alles gut geht.", "id": "Saya berharap semuanya berjalan baik." },
      { "de": "Wir hoffen auf gutes Wetter.", "id": "Kami berharap cuaca bagus." }
    ]
  },
  {
    "id": "beginnen-048",
    "level": "B1",
    "infinitiv": "beginnen",
    "arti": "memulai",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "beginne", "du": "beginnst", "er_sie_es": "beginnt", "wir": "beginnen", "ihr": "beginnt", "sie_Sie": "beginnen" },
      "praeteritum": { "ich": "begann", "du": "begannst", "er_sie_es": "begann", "wir": "begannen", "ihr": "begannt", "sie_Sie": "begannen" },
      "perfekt": "hat begonnen",
      "imperativ": "Beginne!/Beginnt!/Beginnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Projekt beginnt nächste Woche.", "id": "Proyek dimulai minggu depan." },
      { "de": "Wann beginnen wir?", "id": "Kapan kita mulai?" }
    ]
  },
  {
    "id": "telefonieren-049",
    "level": "A2",
    "infinitiv": "telefonieren",
    "arti": "menelpon (lebih formal)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "telefoniere", "du": "telefonierst", "er_sie_es": "telefoniert", "wir": "telefonieren", "ihr": "telefoniert", "sie_Sie": "telefonieren" },
      "praeteritum": { "ich": "telefonierte", "du": "telefoniertest", "er_sie_es": "telefonierte", "wir": "telefonierten", "ihr": "telefoniertet", "sie_Sie": "telefonierten" },
      "perfekt": "hat telefoniert",
      "imperativ": "Telefonier!/Telefoniert!/Telefonieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich telefoniere jeden Abend mit meiner Mutter.", "id": "Saya menelpon ibu tiap malam." },
      { "de": "Er hat schon mit dem Büro telefoniert.", "id": "Dia sudah menelpon kantor." }
    ]
  },
  {
    "id": "schicken-050",
    "level": "A1",
    "infinitiv": "schicken",
    "arti": "mengirim",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schicke", "du": "schickst", "er_sie_es": "schickt", "wir": "schicken", "ihr": "schickt", "sie_Sie": "schicken" },
      "praeteritum": { "ich": "schickte", "du": "schicktest", "er_sie_es": "schkickte", "wir": "schickten", "ihr": "schicktet", "sie_Sie": "schickten" },
      "perfekt": "hat geschickt",
      "imperativ": "Schick!/Schickt!/Schicken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich schicke dir die E-Mail.", "id": "Saya mengirimkan email kepadamu." },
      { "de": "Schickst du das Paket morgen?", "id": "Apakah kamu mengirim paket besok?" }
    ]
  },
  {
    "id": "stehen-051",
    "level": "A2",
    "infinitiv": "stehen",
    "arti": "berdiri, tertulis",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "stehe", "du": "stehst", "er_sie_es": "steht", "wir": "stehen", "ihr": "steht", "sie_Sie": "stehen" },
      "praeteritum": { "ich": "stand", "du": "standst", "er_sie_es": "stand", "wir": "standen", "ihr": "standet", "sie_Sie": "standen" },
      "perfekt": "hat gestanden",
      "imperativ": "Steh!/Steht!/Stehen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Buch steht im Regal.", "id": "Bukunya ada di rak." },
      { "de": "Ich stehe vor dem Haus.", "id": "Saya berdiri di depan rumah." }
    ]
  },
  {
    "id": "legen-052",
    "level": "A1",
    "infinitiv": "legen",
    "arti": "meletakkan (posisi berbaring)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lege", "du": "legst", "er_sie_es": "legt", "wir": "legen", "ihr": "legt", "sie_Sie": "legen" },
      "praeteritum": { "ich": "legte", "du": "legtest", "er_sie_es": "legte", "wir": "legten", "ihr": "legtet", "sie_Sie": "legten" },
      "perfekt": "hat gelegt",
      "imperativ": "Leg!/Legt!/Legen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Leg das Buch auf den Tisch.", "id": "Letakkan bukunya di meja." },
      { "de": "Ich lege die Hand auf das Herz.", "id": "Saya meletakkan tangan di dada." }
    ]
  },
  {
    "id": "setzen-053",
    "level": "A1",
    "infinitiv": "setzen",
    "arti": "meletakkan / mendudukkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "setze", "du": "setzt", "er_sie_es": "setzt", "wir": "setzen", "ihr": "setzt", "sie_Sie": "setzen" },
      "praeteritum": { "ich": "setzte", "du": "setztest", "er_sie_es": "setzte", "wir": "setzten", "ihr": "setztet", "sie_Sie": "setzten" },
      "perfekt": "hat gesetzt",
      "imperativ": "Setz!/Setzt!/Setzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Setz dich bitte.", "id": "Silakan duduk." },
      { "de": "Ich setze das Kind ins Auto.", "id": "Saya menempatkan anaknya ke mobil." }
    ]
  },
  {
    "id": "fallen-054",
    "level": "B1",
    "infinitiv": "fallen",
    "arti": "jatuh",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "falle", "du": "fällst", "er_sie_es": "fällt", "wir": "fallen", "ihr": "fallt", "sie_Sie": "fallen" },
      "praeteritum": { "ich": "fiel", "du": "fielst", "er_sie_es": "fiel", "wir": "fielen", "ihr": "fielt", "sie_Sie": "fielen" },
      "perfekt": "ist gefallen",
      "imperativ": "Fall!/Fallt!/Fallen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Blätter fallen im Herbst.", "id": "Daun-daun gugur di musim gugur." },
      { "de": "Er ist vom Fahrrad gefallen.", "id": "Dia jatuh dari sepeda." }
    ]
  },
  {
    "id": "wählen-055",
    "level": "B2",
    "infinitiv": "wählen",
    "arti": "memilih",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "wähle", "du": "wählst", "er_sie_es": "wählt", "wir": "wählen", "ihr": "wählt", "sie_Sie": "wählen" },
      "praeteritum": { "ich": "wählte", "du": "wähltest", "er_sie_es": "wählte", "wir": "wählten", "ihr": "währt", "sie_Sie": "wählten" },
      "perfekt": "hat gewählt",
      "imperativ": "Wähl!/Wählt!/Wählen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wen wählen Sie?", "id": "Siapa yang Anda pilih?" },
      { "de": "Die Partei hat viele Stimmen gewählt.", "id": "Partai itu mendapatkan banyak suara." }
    ]
  },
  {
    "id": "erwarten-056",
    "level": "B1",
    "infinitiv": "erwarten",
    "arti": "mengharapkan, menunggu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erwarte", "du": "erwartest", "er_sie_es": "erwartet", "wir": "erwarten", "ihr": "erwartet", "sie_Sie": "erwarten" },
      "praeteritum": { "ich": "erwartete", "du": "erwartetest", "er_sie_es": "erwartete", "wir": "erwarteten", "ihr": "erwartetet", "sie_Sie": "erwarteten" },
      "perfekt": "hat erwartet",
      "imperativ": "Erwarte!/Erwartet!/Erwarten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich erwarte bald eine Antwort.", "id": "Saya mengharapkan jawaban segera." },
      { "de": "Das Ergebnis war nicht erwartet.", "id": "Hasil itu tidak terduga." }
    ]
  },
  {
    "id": "ausprobieren-057",
    "level": "B1",
    "infinitiv": "ausprobieren",
    "arti": "mencoba sesuatu (trial)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "probiere aus", "du": "probierst aus", "er_sie_es": "probiert aus", "wir": "probieren aus", "ihr": "probiert aus", "sie_Sie": "probieren aus" },
      "praeteritum": { "ich": "probierte aus", "du": "probiertest aus", "er_sie_es": "probierte aus", "wir": "probierten aus", "ihr": "probiertet aus", "sie_Sie": "probierten aus" },
      "perfekt": "hat ausprobiert",
      "imperativ": "Probier aus!/Probiert aus!/Probieren Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Probier das neue Rezept aus.", "id": "Coba resep baru itu." },
      { "de": "Er hat das Programm ausprobiert.", "id": "Dia sudah mencoba program tersebut." }
    ]
  },
  {
    "id": "vergleichen-058",
    "level": "C1",
    "infinitiv": "vergleichen",
    "arti": "membandingkan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "vergleiche", "du": "vergleichst", "er_sie_es": "vergleicht", "wir": "vergleichen", "ihr": "vergleicht", "sie_Sie": "vergleichen" },
      "praeteritum": { "ich": "verglich", "du": "verglichst", "er_sie_es": "verglich", "wir": "verglichen", "ihr": "verglicht", "sie_Sie": "verglichen" },
      "perfekt": "hat verglichen",
      "imperativ": "Vergleiche!/Vergleicht!/Vergleichen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Vergleichen Sie die beiden Angebote.", "id": "Bandingkan kedua penawaran itu." },
      { "de": "Man kann die Preise leicht vergleichen.", "id": "Kita bisa dengan mudah membandingkan harganya." }
    ]
  },
  {
    "id": "beschreiben-059",
    "level": "B2",
    "infinitiv": "beschreiben",
    "arti": "menjelaskan, menggambarkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "beschreibe", "du": "beschreibst", "er_sie_es": "beschreibt", "wir": "beschreiben", "ihr": "beschreibt", "sie_Sie": "beschreiben" },
      "praeteritum": { "ich": "beschrieb", "du": "beschriebst", "er_sie_es": "beschrieb", "wir": "beschrieben", "ihr": "beschriebt", "sie_Sie": "beschrieben" },
      "perfekt": "hat beschrieben",
      "imperativ": "Beschreibe!/Beschreibt!/Beschreiben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du mir das Fenster beschreiben?", "id": "Bisakah kamu menggambarkan jendelanya?" },
      { "de": "Er hat den Unfall genau beschrieben.", "id": "Dia menjelaskan kecelakaan itu dengan rinci." }
    ]
  },
  {
    "id": "erforschen-060",
    "level": "C2",
    "infinitiv": "erforschen",
    "arti": "meneliti, mengeksplorasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erforsche", "du": "erforschst", "er_sie_es": "erforscht", "wir": "erforschen", "ihr": "erforscht", "sie_Sie": "erforschen" },
      "praeteritum": { "ich": "erforschte", "du": "erforschtest", "er_sie_es": "erforschte", "wir": "erforschten", "ihr": "erforschtet", "sie_Sie": "erforschten" },
      "perfekt": "hat erforscht",
      "imperativ": "Erforsche!/Erforscht!/Erforschen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Wissenschaftler erforschen das Phänomen.", "id": "Para ilmuwan meneliti fenomena tersebut." },
      { "de": "Er forschte jahrelang an diesem Projekt.", "id": "Dia meneliti proyek ini selama bertahun-tahun." }
    ]
  },
  {
    "id": "nutzen-061",
    "level": "A2",
    "infinitiv": "nutzen",
    "arti": "memanfaatkan, menggunakan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "nutze", "du": "nutzt", "er_sie_es": "nutzt", "wir": "nutzen", "ihr": "nutzt", "sie_Sie": "nutzen" },
      "praeteritum": { "ich": "nutzte", "du": "nutztet", "er_sie_es": "nutzte", "wir": "nutzten", "ihr": "nutztet", "sie_Sie": "nutzten" },
      "perfekt": "hat genutzt",
      "imperativ": "Nutze!/Nutzt!/Nutzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich nutze das Internet jeden Tag.", "id": "Saya menggunakan internet setiap hari." },
      { "de": "Nutzen Sie die Gelegenheit!", "id": "Manfaatkan kesempatan itu!" }
    ]
  },
  {
    "id": "probieren-062",
    "level": "A1",
    "infinitiv": "probieren",
    "arti": "mencoba, mencicipi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "probiere", "du": "probierst", "er_sie_es": "probiert", "wir": "probieren", "ihr": "probiert", "sie_Sie": "probieren" },
      "praeteritum": { "ich": "probierte", "du": "probiertest", "er_sie_es": "probierte", "wir": "probierten", "ihr": "probiertet", "sie_Sie": "probierten" },
      "perfekt": "hat probiert",
      "imperativ": "Probier!/Probiert!/Probieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Probier das, es ist lecker.", "id": "Coba itu, enak." },
      { "de": "Ich probiere neue Rezepte.", "id": "Saya mencoba resep baru." }
    ]
  },
  {
    "id": "sitzen-063",
    "level": "A1",
    "infinitiv": "sitzen",
    "arti": "duduk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "sitze", "du": "sitzt", "er_sie_es": "sitzt", "wir": "sitzen", "ihr": "sitzt", "sie_Sie": "sitzen" },
      "praeteritum": { "ich": "saß", "du": "saßest", "er_sie_es": "saß", "wir": "saßen", "ihr": "saßt", "sie_Sie": "saßen" },
      "perfekt": "hat gesessen",
      "imperativ": "Sitz!/Sitzt!/Sitzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich sitze am Tisch.", "id": "Saya duduk di meja." },
      { "de": "Setz dich bitte.", "id": "Silakan duduk." }
    ]
  },
  {
    "id": "beginnen-064",
    "level": "B2",
    "infinitiv": "beginnen",
    "arti": "memulai",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "beginne", "du": "beginnst", "er_sie_es": "beginnt", "wir": "beginnen", "ihr": "beginnt", "sie_Sie": "beginnen" },
      "praeteritum": { "ich": "begann", "du": "begannst", "er_sie_es": "begann", "wir": "begannen", "ihr": "begannt", "sie_Sie": "begannen" },
      "perfekt": "hat begonnen",
      "imperativ": "Beginne!/Beginnt!/Beginnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Meeting beginnt pünktlich.", "id": "Rapat dimulai tepat waktu." },
      { "de": "Wir beginnen mit der Präsentation.", "id": "Kita mulai dengan presentasi." }
    ]
  },
  {
    "id": "verbessern-065",
    "level": "B1",
    "infinitiv": "verbessern",
    "arti": "memperbaiki, meningkatkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verbessere", "du": "verbesserst", "er_sie_es": "verbessert", "wir": "verbessern", "ihr": "verbessert", "sie_Sie": "verbessern" },
      "praeteritum": { "ich": "verbesserte", "du": "verbessertest", "er_sie_es": "verbesserte", "wir": "verbesserten", "ihr": "verbessertet", "sie_Sie": "verbesserten" },
      "perfekt": "hat verbessert",
      "imperativ": "Verbessere!/Verbessert!/Verbessern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich möchte meine Deutschkenntnisse verbessern.", "id": "Saya ingin meningkatkan kemampuan bahasa Jermanku." },
      { "de": "Der Lehrer verbessert die Hausaufgaben.", "id": "Guru memperbaiki PR." }
    ]
  },
  {
    "id": "erleben-066",
    "level": "B2",
    "infinitiv": "erleben",
    "arti": "mengalami (experience)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erlebe", "du": "erlebst", "er_sie_es": "erlebt", "wir": "erleben", "ihr": "erlebt", "sie_Sie": "erleben" },
      "praeteritum": { "ich": "erlebte", "du": "erlebtest", "er_sie_es": "erlebte", "wir": "erlebten", "ihr": "erlebtet", "sie_Sie": "erlebten" },
      "perfekt": "hat erlebt",
      "imperativ": "Erlebe!/Erlebt!/Erleben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir haben ein Abenteuer erlebt.", "id": "Kami mengalami sebuah petualangan." },
      { "de": "Er hat viel im Leben erlebt.", "id": "Dia sudah banyak mengalami dalam hidup." }
    ]
  },
  {
    "id": "überlegen-067",
    "level": "B2",
    "infinitiv": "überlegen",
    "arti": "memikirkan, mempertimbangkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "überlege", "du": "überlegst", "er_sie_es": "überlegt", "wir": "überlegen", "ihr": "überlegt", "sie_Sie": "überlegen" },
      "praeteritum": { "ich": "überlegte", "du": "überlegtest", "er_sie_es": "überlegte", "wir": "überlegten", "ihr": "überlegtet", "sie_Sie": "überlegten" },
      "perfekt": "hat überlegt",
      "imperativ": "Überlege!/Überlegt!/Überlegen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich überlege, ob ich mitkomme.", "id": "Saya mempertimbangkan apakah akan ikut." },
      { "de": "Überlegen Sie gut.", "id": "Pertimbangkanlah dengan baik." }
    ]
  },
  {
    "id": "unterstützen-068",
    "level": "B1",
    "infinitiv": "unterstützen",
    "arti": "mendukung, membantu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "unterstütze", "du": "unterstützt", "er_sie_es": "unterstützt", "wir": "unterstützen", "ihr": "unterstützt", "sie_Sie": "unterstützen" },
      "praeteritum": { "ich": "unterstützte", "du": "unterstütztest", "er_sie_es": "unterstützte", "wir": "unterstützten", "ihr": "unterstütztet", "sie_Sie": "unterstützten" },
      "perfekt": "hat unterstützt",
      "imperativ": "Unterstütze!/Unterstützt!/Unterstützen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir unterstützen das Projekt finanziell.", "id": "Kami mendukung proyek itu secara finansial." },
      { "de": "Kannst du mich unterstützen?", "id": "Bisakah kamu mendukung saya?" }
    ]
  },
  {
    "id": "rechnen-069",
    "level": "A2",
    "infinitiv": "rechnen",
    "arti": "menghitung",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "rechne", "du": "rechnest", "er_sie_es": "rechnet", "wir": "rechnen", "ihr": "rechnet", "sie_Sie": "rechnen" },
      "praeteritum": { "ich": "rechnete", "du": "rechtest", "er_sie_es": "rechnete", "wir": "rechneten", "ihr": "rechnetet", "sie_Sie": "rechneten" },
      "perfekt": "hat gerechnet",
      "imperativ": "Rechne!/Rechnet!/Rechnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du das schnell im Kopf rechnen?", "id": "Bisakah kamu menghitung itu dengan cepat di kepala?" },
      { "de": "Er rechnet die Kosten.", "id": "Dia menghitung biayanya." }
    ]
  },
  {
    "id": "bezahlen-070",
    "level": "B1",
    "infinitiv": "bezahlen",
    "arti": "membayar",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "bezahle", "du": "bezahlst", "er_sie_es": "bezahlt", "wir": "bezahlen", "ihr": "bezahlt", "sie_Sie": "bezahlen" },
      "praeteritum": { "ich": "bezahlte", "du": "bezahltest", "er_sie_es": "bezahlte", "wir": "bezahlten", "ihr": "bezahltet", "sie_Sie": "bezahlten" },
      "perfekt": "hat bezahlt",
      "imperativ": "Bezahl!/Bezahlt!/Bezahlen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wer bezahlt die Rechnung?", "id": "Siapa yang membayar tagihannya?" },
      { "de": "Ich muss noch bezahlen.", "id": "Saya masih harus membayar." }
    ]
  },
  {
    "id": "auswählen-071",
    "level": "B1",
    "infinitiv": "auswählen",
    "arti": "memilih dari beberapa opsi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "wähle aus", "du": "wählst aus", "er_sie_es": "wählt aus", "wir": "wählen aus", "ihr": "wählt aus", "sie_Sie": "wählen aus" },
      "praeteritum": { "ich": "wählte aus", "du": "wähltest aus", "er_sie_es": "wählte aus", "wir": "wählten aus", "ihr": "wähltet aus", "sie_Sie": "wählten aus" },
      "perfekt": "hat ausgewählt",
      "imperativ": "Wähle aus!/Wählt aus!/Wählen Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Wähle ein Bild aus.", "id": "Pilih sebuah gambar." },
      { "de": "Er hat mehrere Kandidaten ausgewählt.", "id": "Dia memilih beberapa kandidat." }
    ]
  },
  {
    "id": "aufpassen-072",
    "level": "A2",
    "infinitiv": "aufpassen",
    "arti": "memperhatikan, menjaga",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "passe auf", "du": "passt auf", "er_sie_es": "passt auf", "wir": "passen auf", "ihr": "passt auf", "sie_Sie": "passen auf" },
      "praeteritum": { "ich": "passte auf", "du": "passtest auf", "er_sie_es": "passte auf", "wir": "passten auf", "ihr": "passtet auf", "sie_Sie": "passten auf" },
      "perfekt": "hat aufgepasst",
      "imperativ": "Pass auf!/Passt auf!/Passen Sie auf!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Pass auf den Verkehr auf!", "id": "Perhatikan lalu lintas!" },
      { "de": "Ich passe auf die Kinder auf.", "id": "Saya menjaga anak-anak." }
    ]
  },
  {
    "id": "sich kümmern-073",
    "level": "B1",
    "infinitiv": "sich kümmern",
    "arti": "mengurus",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kümmere mich", "du": "kümmerst dich", "er_sie_es": "kümmert sich", "wir": "kümmern uns", "ihr": "kümmert euch", "sie_Sie": "kümmern sich" },
      "praeteritum": { "ich": "kümmerte mich", "du": "kümmerte dich", "er_sie_es": "kümmerte sich", "wir": "kümmerten uns", "ihr": "kümmmertet euch", "sie_Sie": "kümmerten sich" },
      "perfekt": "hat sich gekümmert",
      "imperativ": "Kümmere dich!/Kümmert euch!/Kümmern Sie sich!"
    },
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich kümmere mich um die Anmeldung.", "id": "Saya mengurus pendaftaran." },
      { "de": "Kümmerst du dich darum?", "id": "Apakah kamu mengurus itu?" }
    ]
  },
  {
    "id": "verlängern-074",
    "level": "B2",
    "infinitiv": "verlängern",
    "arti": "memperpanjang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verlängere", "du": "verlängerst", "er_sie_es": "verlängert", "wir": "verlängern", "ihr": "verlängert", "sie_Sie": "verlängern" },
      "praeteritum": { "ich": "verlängerte", "du": "verlängertest", "er_sie_es": "verlängerte", "wir": "verlängerten", "ihr": "verlängertet", "sie_Sie": "verlängerten" },
      "perfekt": "hat verlängert",
      "imperativ": "Verlängere!/Verlängert!/Verlängern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kann ich meinen Pass verlängern?", "id": "Bisakah saya memperpanjang paspor saya?" },
      { "de": "Sie verlängerten den Vertrag.", "id": "Mereka memperpanjang kontraknya." }
    ]
  },
  {
    "id": "vorbereiten-075",
    "level": "B1",
    "infinitiv": "vorbereiten",
    "arti": "mempersiapkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "bereite vor", "du": "bereitest vor", "er_sie_es": "bereitet vor", "wir": "bereiten vor", "ihr": "bereitet vor", "sie_Sie": "bereiten vor" },
      "praeteritum": { "ich": "bereitete vor", "du": "bereitetest vor", "er_sie_es": "bereitete vor", "wir": "bereiteten vor", "ihr": "bereitetet vor", "sie_Sie": "bereiteten vor" },
      "perfekt": "hat vorbereitet",
      "imperativ": "Bereite vor!/Bereitet vor!/Bereiten Sie vor!"
    },
    "contoh_kalimat": [
      { "de": "Ich bereite das Essen vor.", "id": "Saya menyiapkan makanannya." },
      { "de": "Bereitest du das Meeting vor?", "id": "Apakah kamu menyiapkan rapatnya?" }
    ]
  },
  {
    "id": "vergessen-076",
    "level": "A2",
    "infinitiv": "vergessen",
    "arti": "melupakan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "vergesse", "du": "vergisst", "er_sie_es": "vergisst", "wir": "vergessen", "ihr": "vergesset", "sie_Sie": "vergessen" },
      "praeteritum": { "ich": "vergaß", "du": "vergaßest", "er_sie_es": "vergaß", "wir": "vergaßen", "ihr": "vergaßt", "sie_Sie": "vergaßen" },
      "perfekt": "hat vergessen",
      "imperativ": "Vergiss!/Vergesst!/Vergessen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe den Termin vergessen.", "id": "Saya lupa janji temu itu." },
      { "de": "Vergiss die Schlüssel tidak!", "id": "Jangan lupa kuncinya!" }
    ]
  },
  {
    "id": "vereinbaren-077",
    "level": "B1",
    "infinitiv": "vereinbaren",
    "arti": "menyepakati, membuat janji",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "vereinbare", "du": "vereinbarst", "er_sie_es": "vereinbart", "wir": "vereinbaren", "ihr": "vereinbart", "sie_Sie": "vereinbaren" },
      "praeteritum": { "ich": "vereinbarte", "du": "vereinbartest", "er_sie_es": "vereinbarte", "wir": "vereinbarten", "ihr": "vereinbartet", "sie_Sie": "vereinbarten" },
      "perfekt": "hat vereinbart",
      "imperativ": "Vereinbare!/Vereinbart!/Vereinbaren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir vereinbaren einen Termin.", "id": "Kita membuat sebuah janji." },
      { "de": "Haben Sie das mit dem Kunden vereinbart?", "id": "Apakah Anda sudah menyepakatinya dengan klien?" }
    ]
  },
  {
    "id": "weisen-078",
    "level": "C1",
    "infinitiv": "weisen",
    "arti": "menunjukkan, menyingkirkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "weise", "du": "weist", "er_sie_es": "weist", "wir": "weisen", "ihr": "weist", "sie_Sie": "weisen" },
      "praeteritum": { "ich": "wies", "du": "wiesest", "er_sie_es": "wies", "wir": "wiesen", "ihr": "wiest", "sie_Sie": "wiesen" },
      "perfekt": "hat gewiesen",
      "imperativ": "Weise!/Weist!/Weisen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Lehrer weist auf einen Fehler hin.", "id": "Guru menunjukkan sebuah kesalahan." },
      { "de": "Er wurde auf die Regeln verwiesen.", "id": "Dia dirujuk pada aturan-aturan tersebut." }
    ]
  },
  {
    "id": "analysieren-079",
    "level": "C1",
    "infinitiv": "analysieren",
    "arti": "menganalisis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "analysiere", "du": "analysierst", "er_sie_es": "analysiert", "wir": "analysieren", "ihr": "analysiert", "sie_Sie": "analysieren" },
      "praeteritum": { "ich": "analysierte", "du": "analysiertest", "er_sie_es": "analysierte", "wir": "analysierten", "ihr": "analysiertet", "sie_Sie": "analysierten" },
      "perfekt": "hat analysiert",
      "imperativ": "Analysiere!/Analysiert!/Analysieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Daten wurden sorgfältig analysiert.", "id": "Data itu dianalisis dengan cermat." },
      { "de": "Analysiere das Dokument bitte.", "id": "Tolong analisis dokumennya." }
    ]
  },
  {
    "id": "entdecken-080",
    "level": "B2",
    "infinitiv": "entdecken",
    "arti": "menemukan (discover)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "entdecke", "du": "entdeckst", "er_sie_es": "entdeckt", "wir": "entdecken", "ihr": "entdeckt", "sie_Sie": "entdecken" },
      "praeteritum": { "ich": "entdeckte", "du": "entdecktest", "er_sie_es": "entdeckte", "wir": "entdeckten", "ihr": "entdecktet", "sie_Sie": "entdeckten" },
      "perfekt": "hat entdeckt",
      "imperativ": "Entdecke!/Entdeckt!/Entdecken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir haben ein neues Café entdeckt.", "id": "Kami menemukan sebuah kafe baru." },
      { "de": "Entdeckst du gern neue Orte?", "id": "Apakah kamu suka menemukan tempat baru?" }
    ]
 },
    {
    "id": "trinken-081",
    "level": "A1",
    "infinitiv": "trinken",
    "arti": "minum",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "trinke", "du": "trinkst", "er_sie_es": "trinkt", "wir": "trinken", "ihr": "trinkt", "sie_Sie": "trinken" },
      "praeteritum": { "ich": "trank", "du": "trankst", "er_sie_es": "trank", "wir": "tranken", "ihr": "trankt", "sie_Sie": "tranken" },
      "perfekt": "hat getrunken",
      "imperativ": "Trink!/Trinkt!/Trinken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich trinke morgens gern Kaffee.", "id": "Saya suka minum kopi di pagi hari." },
      { "de": "Was möchtest du trinken?", "id": "Apa yang ingin kamu minum?" }
    ]
  },
  {
    "id": "kaufen-082",
    "level": "A1",
    "infinitiv": "kaufen",
    "arti": "membeli",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kaufe", "du": "kaufst", "er_sie_es": "kauft", "wir": "kaufen", "ihr": "kauft", "sie_Sie": "kaufen" },
      "praeteritum": { "ich": "kaufte", "du": "kauftest", "er_sie_es": "kaufte", "wir": "kauften", "ihr": "kauftet", "sie_Sie": "kauften" },
      "perfekt": "hat gekauft",
      "imperativ": "Kauf!/Kauft!/Kaufen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er kauft ein neues Auto.", "id": "Dia membeli mobil baru." },
      { "de": "Wo hast du diese Jacke gekauft?", "id": "Di mana kamu membeli jaket ini?" }
    ]
  },
  {
    "id": "verkaufen-083",
    "level": "A2",
    "infinitiv": "verkaufen",
    "arti": "menjual",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verkaufe", "du": "verkaufst", "er_sie_es": "verkauft", "wir": "verkaufen", "ihr": "verkauft", "sie_Sie": "verkaufen" },
      "praeteritum": { "ich": "verkaufte", "du": "verkauftest", "er_sie_es": "verkaufte", "wir": "verkauften", "ihr": "verkauftet", "sie_Sie": "verkauften" },
      "perfekt": "hat verkauft",
      "imperativ": "Verkauf!/Verkauft!/Verkaufen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie verkauft ihr altes Fahrrad.", "id": "Dia menjual sepeda lamanya." },
      { "de": "Das Geschäft verkauft frisches Brot.", "id": "Toko itu menjual roti segar." }
    ]
  },
  {
    "id": "wohnen-084",
    "level": "A1",
    "infinitiv": "wohnen",
    "arti": "tinggal, bertempat tinggal",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "wohne", "du": "wohnst", "er_sie_es": "wohnt", "wir": "wohnen", "ihr": "wohnt", "sie_Sie": "wohnen" },
      "praeteritum": { "ich": "wohnte", "du": "wohntest", "er_sie_es": "wohnte", "wir": "wohnten", "ihr": "wohntet", "sie_Sie": "wohnten" },
      "perfekt": "hat gewohnt",
      "imperativ": "Wohn!/Wohnt!/Wohnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich wohne seit zwei Jahren in Berlin.", "id": "Saya tinggal di Berlin sejak dua tahun lalu." },
      { "de": "Wo wohnst du genau?", "id": "Di mana tepatnya kamu tinggal?" }
    ]
  },
  {
    "id": "leben-085",
    "level": "A1",
    "infinitiv": "leben",
    "arti": "hidup",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lebe", "du": "lebst", "er_sie_es": "lebt", "wir": "leben", "ihr": "lebt", "sie_Sie": "leben" },
      "praeteritum": { "ich": "lebte", "du": "lebtest", "er_sie_es": "lebte", "wir": "lebten", "ihr": "lebtet", "sie_Sie": "lebten" },
      "perfekt": "hat gelebt",
      "imperativ": "Lebe!/Lebt!/Leben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Meine Großeltern leben noch auf dem Land.", "id": "Kakek-nenek saya masih hidup di pedesaan." },
      { "de": "Man lebt nur einmal.", "id": "Orang hanya hidup sekali." }
    ]
  },
  {
    "id": "hoeren-086",
    "level": "A1",
    "infinitiv": "hören",
    "arti": "mendengar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "höre", "du": "hörst", "er_sie_es": "hört", "wir": "hören", "ihr": "hört", "sie_Sie": "hören" },
      "praeteritum": { "ich": "hörte", "du": "hörtest", "er_sie_es": "hörte", "wir": "hörten", "ihr": "hörtet", "sie_Sie": "hörten" },
      "perfekt": "hat gehört",
      "imperativ": "Hör!/Hört!/Hören Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich höre jeden Tag Musik.", "id": "Saya mendengarkan musik setiap hari." },
      { "de": "Hörst du das Geräusch?", "id": "Apakah kamu mendengar suara itu?" }
    ]
  },
  {
    "id": "sagen-087",
    "level": "A1",
    "infinitiv": "sagen",
    "arti": "mengatakan, berkata",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "sage", "du": "sagst", "er_sie_es": "sagt", "wir": "sagen", "ihr": "sagt", "sie_Sie": "sagen" },
      "praeteritum": { "ich": "sagte", "du": "sagtest", "er_sie_es": "sagte", "wir": "sagten", "ihr": "sagtet", "sie_Sie": "sagten" },
      "perfekt": "hat gesagt",
      "imperativ": "Sag!/Sagt!/Sagen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Was hat der Lehrer gesagt?", "id": "Apa yang dikatakan guru tadi?" },
      { "de": "Sag mir bitte die Wahrheit.", "id": "Tolong katakan padaku kebenarannya." }
    ]
  },
  {
    "id": "erzaehlen-088",
    "level": "A2",
    "infinitiv": "erzählen",
    "arti": "menceritakan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erzähle", "du": "erzählst", "er_sie_es": "erzählt", "wir": "erzählen", "ihr": "erzählt", "sie_Sie": "erzählen" },
      "praeteritum": { "ich": "erzählte", "du": "erzähltest", "er_sie_es": "erzählte", "wir": "erzählten", "ihr": "erzähltet", "sie_Sie": "erzählten" },
      "perfekt": "hat erzählt",
      "imperativ": "Erzähl!/Erzählt!/Erzählen Sie!"
    },
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Er erzählt gern spannende Geschichten.", "id": "Dia suka menceritakan cerita yang seru." },
      { "de": "Erzähl mir von deiner Reise!", "id": "Ceritakan padaku tentang perjalananmu!" }
    ]
  },
  {
    "id": "geben-089",
    "level": "A1",
    "infinitiv": "geben",
    "arti": "memberikan, ada (es gibt)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "gebe", "du": "gibst", "er_sie_es": "gibt", "wir": "geben", "ihr": "gebt", "sie_Sie": "geben" },
      "praeteritum": { "ich": "gab", "du": "gabst", "er_sie_es": "gab", "wir": "gaben", "ihr": "gabt", "sie_Sie": "gaben" },
      "perfekt": "hat gegeben",
      "imperativ": "Gib!/Gebt!/Geben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Gib mir bitte das Salz.", "id": "Tolong berikan garam itu padaku." },
      { "de": "Es gibt hier viele schöne Parks.", "id": "Ada banyak taman indah di sini." }
    ]
  },
  {
    "id": "nehmen-090",
    "level": "A1",
    "infinitiv": "nehmen",
    "arti": "mengambil",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "nehme", "du": "nimmst", "er_sie_es": "nimmt", "wir": "nehmen", "ihr": "nehmt", "sie_Sie": "nehmen" },
      "praeteritum": { "ich": "nahm", "du": "nahmst", "er_sie_es": "nahm", "wir": "nahmen", "ihr": "nahmt", "sie_Sie": "nahmen" },
      "perfekt": "hat genommen",
      "imperativ": "Nimm!/Nehmt!/Nehmen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich nehme den Bus zur Arbeit.", "id": "Saya naik bus ke tempat kerja." },
      { "de": "Nimmst du noch ein Stück Kuchen?", "id": "Apakah kamu mau sepotong kue lagi?" }
    ]
  },
  {
    "id": "bringen-091",
    "level": "A1",
    "infinitiv": "bringen",
    "arti": "membawa",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "bringe", "du": "bringst", "er_sie_es": "bringt", "wir": "bringen", "ihr": "bringt", "sie_Sie": "bringen" },
      "praeteritum": { "ich": "brachte", "du": "brachtest", "er_sie_es": "brachte", "wir": "brachten", "ihr": "brachtet", "sie_Sie": "brachten" },
      "perfekt": "hat gebracht",
      "imperativ": "Bring!/Bringt!/Bringen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du mir ein Glas Wasser bringen?", "id": "Bisakah kamu membawakanku segelas air?" },
      { "de": "Der Postbote bringt ein Paket.", "id": "Kurir membawakan sebuah paket." }
    ]
  },
  {
    "id": "mitbringen-092",
    "level": "A1",
    "infinitiv": "mitbringen",
    "arti": "membawa serta",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "bringe mit", "du": "bringst mit", "er_sie_es": "bringt mit", "wir": "bringen mit", "ihr": "bringt mit", "sie_Sie": "bringen mit" },
      "praeteritum": { "ich": "brachte mit", "du": "brachtest mit", "er_sie_es": "brachte mit", "wir": "brachten mit", "ihr": "brachtet mit", "sie_Sie": "brachten mit" },
      "perfekt": "hat mitgebracht",
      "imperativ": "Bring mit!/Bringt mit!/Bringen Sie mit!"
    },
    "contoh_kalimat": [
      { "de": "Ich bringe Salat zur Party mit.", "id": "Saya membawa salad ke pesta." },
      { "de": "Hast du deinen Ausweis mitgebracht?", "id": "Apakah kamu membawa serta KTP-mu?" }
    ]
  },
  {
    "id": "fliegen-093",
    "level": "A2",
    "infinitiv": "fliegen",
    "arti": "terbang",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "fliege", "du": "fliegst", "er_sie_es": "fliegt", "wir": "fliegen", "ihr": "fliegt", "sie_Sie": "fliegen" },
      "praeteritum": { "ich": "flog", "du": "flogst", "er_sie_es": "flog", "wir": "flogen", "ihr": "flogt", "sie_Sie": "flogen" },
      "perfekt": "ist geflogen",
      "imperativ": "Flieg!/Fliegt!/Fliegen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir fliegen morgen nach Frankfurt.", "id": "Kami terbang ke Frankfurt besok." },
      { "de": "Bist du schon mal geflogen?", "id": "Apakah kamu sudah pernah naik pesawat terbang?" }
    ]
  },
  {
    "id": "abfahren-094",
    "level": "A2",
    "infinitiv": "abfahren",
    "arti": "berangkat (kendaraan)",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "fahre ab", "du": "fährst ab", "er_sie_es": "fährt ab", "wir": "fahren ab", "ihr": "fahrt ab", "sie_Sie": "fahren ab" },
      "praeteritum": { "ich": "fuhr ab", "du": "fuhrst ab", "er_sie_es": "fuhr ab", "wir": "fuhren ab", "ihr": "fuhrt ab", "sie_Sie": "fuhren ab" },
      "perfekt": "ist abgefahren",
      "imperativ": "Fahr ab!/Fahrt ab!/Fahren Sie ab!"
    },
    "contoh_kalimat": [
      { "de": "Der Zug fährt um 08:30 Uhr ab.", "id": "Kereta berangkat pukul 08.30." },
      { "de": "Wann fahren wir endlich ab?", "id": "Kapan kita akhirnya berangkat?" }
    ]
  },
  {
    "id": "ankommen-095",
    "level": "A2",
    "infinitiv": "ankommen",
    "arti": "tiba, sampai",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "komme an", "du": "kommst an", "er_sie_es": "kommt an", "wir": "kommen an", "ihr": "kommt an", "sie_Sie": "kommen an" },
      "praeteritum": { "ich": "kam an", "du": "kamst an", "er_sie_es": "kam an", "wir": "kamen an", "ihr": "kamt an", "sie_Sie": "kamen an" },
      "perfekt": "ist angekommen",
      "imperativ": "Komm an!/Kommt an!/Kommen Sie an!"
    },
    "contoh_kalimat": [
      { "de": "Wir sind spät in Berlin angekommen.", "id": "Kami tiba larut di Berlin." },
      { "de": "Wann kommt dein Flug an?", "id": "Kapan penerbanganmu tiba?" }
    ]
  },
  {
    "id": "einladen-096",
    "level": "A2",
    "infinitiv": "einladen",
    "arti": "mengundang",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "lade ein", "du": "lädst ein", "er_sie_es": "lädt ein", "wir": "laden ein", "ihr": "ladet ein", "sie_Sie": "laden ein" },
      "praeteritum": { "ich": "lud ein", "du": "ludst ein", "er_sie_es": "lud ein", "wir": "luden ein", "ihr": "ludet ein", "sie_Sie": "luden ein" },
      "perfekt": "hat eingeladen",
      "imperativ": "Lade ein!/Ladet ein!/Laden Sie ein!"
    },
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich lade dich zu meiner Geburtstagsparty ein.", "id": "Saya mengundangmu ke pesta ulang tahun saya." },
      { "de": "Er hat alle Kollegen eingeladen.", "id": "Dia telah mengundang semua rekan kerja." }
    ]
  },
  {
    "id": "kochen-097",
    "level": "A1",
    "infinitiv": "kochen",
    "arti": "memasak, merebus",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "koche", "du": "kochst", "er_sie_es": "kocht", "wir": "kochen", "ihr": "kocht", "sie_Sie": "kochen" },
      "praeteritum": { "ich": "kochte", "du": "kochtest", "er_sie_es": "kochte", "wir": "kochten", "ihr": "kochtet", "sie_Sie": "kochten" },
      "perfekt": "hat gekocht",
      "imperativ": "Koch!/Kocht!/Kochen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich koche heute Abend eine Gemüsesuppe.", "id": "Saya memasak sup sayur malam ini." },
      { "de": "Kochst du gern am Wochenende?", "id": "Apakah kamu suka memasak di akhir pekan?" }
    ]
  },
  {
    "id": "backen-098",
    "level": "A2",
    "infinitiv": "backen",
    "arti": "memanggang (roti/kue)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "backe", "du": "bäckst", "er_sie_es": "bäckt", "wir": "backen", "ihr": "backt", "sie_Sie": "backen" },
      "praeteritum": { "ich": "backte", "du": "backtest", "er_sie_es": "backte", "wir": "backten", "ihr": "backtet", "sie_Sie": "backten" },
      "perfekt": "hat gebacken",
      "imperativ": "Back!/Backt!/Backen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Meine Mutter backt einen leckeren Apfelkuchen.", "id": "Ibu saya memanggang kue apel yang lezat." },
      { "de": "Wir haben zusammen Kekse gebacken.", "id": "Kami memanggang biskuit bersama." }
    ]
  },
  {
    "id": "putzen-099",
    "level": "A1",
    "infinitiv": "putzen",
    "arti": "membersihkan, menyikat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "putze", "du": "putzt", "er_sie_es": "putzt", "wir": "putzen", "ihr": "putzt", "sie_Sie": "putzen" },
      "praeteritum": { "ich": "putzte", "du": "putztest", "er_sie_es": "putzte", "wir": "putzten", "ihr": "putztet", "sie_Sie": "putzten" },
      "perfekt": "hat geputzt",
      "imperativ": "Putz!/Putzt!/Putzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich putze mir dreimal am Tag die Zähne.", "id": "Saya menyikat gigi tiga kali sehari." },
      { "de": "Er putzt am Samstag die Wohnung.", "id": "Dia membersihkan apartemen pada hari Sabtu." }
    ]
  },
  {
    "id": "waschen-100",
    "level": "A2",
    "infinitiv": "waschen",
    "arti": "mencuci",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "wasche", "du": "wäschst", "er_sie_es": "wäscht", "wir": "waschen", "ihr": "wascht", "sie_Sie": "waschen" },
      "praeteritum": { "ich": "wusch", "du": "wuschst", "er_sie_es": "wusch", "wir": "wuschen", "ihr": "wuscht", "sie_Sie": "wuschen" },
      "perfekt": "hat gewaschen",
      "imperativ": "Wasch!/Wascht!/Waschen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich muss heute meine Kleidung waschen.", "id": "Saya harus mencuci pakaian saya hari ini." },
      { "de": "Wasch dir vor dem Essen die Hände!", "id": "Cucilah tanganmu sebelum makan!" }
    ]
  },
  {
    "id": "anziehen-101",
    "level": "A2",
    "infinitiv": "anziehen",
    "arti": "mengenakan pakaian",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "ziehe an", "du": "ziehst an", "er_sie_es": "zieht an", "wir": "ziehen an", "ihr": "zieht an", "sie_Sie": "ziehen an" },
      "praeteritum": { "ich": "zog an", "du": "zogst an", "er_sie_es": "zog an", "wir": "zogen an", "ihr": "zogt an", "sie_Sie": "zogen an" },
      "perfekt": "hat angezogen",
      "imperativ": "Zieh an!/Zieht an!/Ziehen Sie an!"
    },
    "contoh_kalimat": [
      { "de": "Zieh deine warme Jacke an, es ist kalt.", "id": "Pakailah jaket tebalmu, cuaca dingin." },
      { "de": "Er hat sich schnell angezogen.", "id": "Dia berpakaian dengan cepat." }
    ]
  },
  {
    "id": "ausziehen-102",
    "level": "A2",
    "infinitiv": "ausziehen",
    "arti": "melepas pakaian, pindah keluar",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "ziehe aus", "du": "ziehst aus", "er_sie_es": "zieht aus", "wir": "ziehen aus", "ihr": "zieht aus", "sie_Sie": "ziehen aus" },
      "praeteritum": { "ich": "zog aus", "du": "zogst aus", "er_sie_es": "zog aus", "wir": "zogen aus", "ihr": "zogt aus", "sie_Sie": "zogen aus" },
      "perfekt": "hat ausgezogen",
      "imperativ": "Zieh aus!/Zieht aus!/Ziehen Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Bitte ziehen Sie Ihre Schuhe aus.", "id": "Silakan lepas sepatu Anda." },
      { "de": "Er zieht nächsten Monat aus der Wohnung aus.", "id": "Dia pindah keluar dari apartemen bulan depan." }
    ]
  },
  {
    "id": "umziehen-103",
    "level": "B1",
    "infinitiv": "umziehen",
    "arti": "pindah rumah, berganti pakaian",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "ziehe um", "du": "ziehst um", "er_sie_es": "zieht um", "wir": "ziehen um", "ihr": "zieht um", "sie_Sie": "ziehen um" },
      "praeteritum": { "ich": "zog um", "du": "zogst um", "er_sie_es": "zog um", "wir": "zogen um", "ihr": "zogt um", "sie_Sie": "zogen um" },
      "perfekt": "ist umgezogen",
      "imperativ": "Zieh um!/Zieht um!/Ziehen Sie um!"
    },
    "contoh_kalimat": [
      { "de": "Wir ziehen bald nach München um.", "id": "Kami segera pindah rumah ke Munich." },
      { "de": "Ich muss mich vor dem Abendessen noch umziehen.", "id": "Saya harus ganti pakaian sebelum makan malam." }
    ]
  },
  {
    "id": "interessieren-104",
    "level": "A2",
    "infinitiv": "sich interessieren",
    "arti": "tertarik pada",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "interessiere mich", "du": "interessierst dich", "er_sie_es": "interessiert sich", "wir": "interessieren uns", "ihr": "interessiert euch", "sie_Sie": "interessieren sich" },
      "praeteritum": { "ich": "interessierte mich", "du": "interessiertest dich", "er_sie_es": "interessierte sich", "wir": "interessierten uns", "ihr": "interessiertet euch", "sie_Sie": "interessierten sich" },
      "perfekt": "hat sich interessiert",
      "imperativ": "Interessiere dich!/Interessiert euch!/Interessieren Sie sich!"
    },
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich interessiere mich sehr für Kunst.", "id": "Saya sangat tertarik pada seni." },
      { "de": "Interessierst du dich für Sprachen?", "id": "Apakah kamu tertarik pada bahasa?" }
    ]
  },
  {
    "id": "gehoeren-105",
    "level": "A2",
    "infinitiv": "gehören",
    "arti": "milik, kepunyaan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "gehöre", "du": "gehörst", "er_sie_es": "gehört", "wir": "gehören", "ihr": "gehört", "sie_Sie": "gehören" },
      "praeteritum": { "ich": "gehörte", "du": "gehörtest", "er_sie_es": "gehörte", "wir": "gehörten", "ihr": "gehörtet", "sie_Sie": "gehörten" },
      "perfekt": "hat gehört",
      "imperativ": "Gehör!/Gehört!/Gehören Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wem gehört dieses Buch?", "id": "Buku ini milik siapa?" },
      { "de": "Das Auto gehört meinem Vater.", "id": "Mobil itu milik ayah saya." }
    ]
  },
  {
    "id": "passen-106",
    "level": "A2",
    "infinitiv": "passen",
    "arti": "pas, cocok (ukuran/waktu)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "passe", "du": "passt", "er_sie_es": "passt", "wir": "passen", "ihr": "passt", "sie_Sie": "passen" },
      "praeteritum": { "ich": "passte", "du": "passtest", "er_sie_es": "passte", "wir": "passten", "ihr": "passtet", "sie_Sie": "passten" },
      "perfekt": "hat gepasst",
      "imperativ": "Pass!/Passt!/Passen Sie!"
    },
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Passt es dir morgen um drei?", "id": "Apakah waktunya cocok untukmu besok jam tiga?" },
      { "de": "Die Schuhe passen mir perfekt.", "id": "Sepatu ini pas sekali ukurannya untukku." }
    ]
  },
  {
    "id": "fehlen-107",
    "level": "B1",
    "infinitiv": "fehlen",
    "arti": "kurang, absen, dirindukan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "fehle", "du": "fehlst", "er_sie_es": "fehlt", "wir": "fehlen", "ihr": "fehlt", "sie_Sie": "fehlen" },
      "praeteritum": { "ich": "fehlte", "du": "fehltest", "er_sie_es": "fehlte", "wir": "fehlten", "ihr": "fehltet", "sie_Sie": "fehlten" },
      "perfekt": "hat gefehlt",
      "imperativ": "Fehle!/Fehlt!/Fehlen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Mir fehlen die passenden Worte.", "id": "Saya kekurangan kata-kata yang tepat." },
      { "de": "Du fehlst mir sehr.", "id": "Aku sangat merindukanmu." }
    ]
  },
  {
    "id": "gefallen-108",
    "level": "A2",
    "infinitiv": "gefallen",
    "arti": "menyenangkan, disukai",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "gefalle", "du": "gefällst", "er_sie_es": "gefällt", "wir": "gefallen", "ihr": "gefallt", "sie_Sie": "gefallen" },
      "praeteritum": { "ich": "gefiel", "du": "gefielst", "er_sie_es": "gefiel", "wir": "gefielen", "ihr": "gefielt", "sie_Sie": "gefielen" },
      "perfekt": "hat gefallen",
      "imperativ": "Gefall!/Gefallt!/Gefallen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Stadt gefällt mir sehr gut.", "id": "Saya sangat menyukai kota ini." },
      { "de": "Gefällt dir dein neues Zimmer?", "id": "Apakah kamu menyukai kamar barumu?" }
    ]
  },
  {
    "id": "passieren-109",
    "level": "A2",
    "infinitiv": "passieren",
    "arti": "terjadi",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "passiere", "du": "passierst", "er_sie_es": "passiert", "wir": "passieren", "ihr": "passiert", "sie_Sie": "passieren" },
      "praeteritum": { "ich": "passierte", "du": "passiertest", "er_sie_es": "passierte", "wir": "passierten", "ihr": "passiertet", "sie_Sie": "passierten" },
      "perfekt": "ist passiert",
      "imperativ": "Passiere!/Passiert!/Passieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Was ist gestern passiert?", "id": "Apa yang terjadi kemarin?" },
      { "de": "Keine Sorge, es ist nichts Schlimmes passiert.", "id": "Jangan khawatir, tidak ada hal buruk yang terjadi." }
    ]
  },
  {
    "id": "geschehen-110",
    "level": "B2",
    "infinitiv": "geschehen",
    "arti": "terjadi (lebih formal/sastra)",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "geschehe", "du": "geschiehst", "er_sie_es": "geschieht", "wir": "geschehen", "ihr": "gescheht", "sie_Sie": "geschehen" },
      "praeteritum": { "ich": "geschah", "du": "geschahst", "er_sie_es": "geschah", "wir": "geschahen", "ihr": "geschaht", "sie_Sie": "geschahen" },
      "perfekt": "ist geschehen",
      "imperativ": "Geschehe!/Gescheht!/Geschehen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Unglück geschah am frühen Morgen.", "id": "Kecelakaan itu terjadi di pagi buta." },
      { "de": "Gern geschehen!", "id": "Sama-sama! / Dengan senang hati!" }
    ]
  },
  {
    "id": "verpassen-111",
    "level": "B1",
    "infinitiv": "verpassen",
    "arti": "ketinggalan, melewatkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verpasse", "du": "verpasst", "er_sie_es": "verpasst", "wir": "verpassen", "ihr": "verpasst", "sie_Sie": "verpassen" },
      "praeteritum": { "ich": "verpasste", "du": "verpasstest", "er_sie_es": "verpasste", "wir": "verpassten", "ihr": "verpasstet", "sie_Sie": "verpassten" },
      "perfekt": "hat verpasst",
      "imperativ": "Verpass!/Verpasst!/Verpassen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe den Zug knapp verpasst.", "id": "Saya nyaris ketinggalan kereta." },
      { "de": "Verpass diese Chance nicht!", "id": "Jangan lewatkan kesempatan ini!" }
    ]
  },
  {
    "id": "teilnehmen-112",
    "level": "B1",
    "infinitiv": "teilnehmen",
    "arti": "berpartisipasi, ikut serta",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "nehme teil", "du": "nimmst teil", "er_sie_es": "nimmt teil", "wir": "nehmen teil", "ihr": "nehmt teil", "sie_Sie": "nehmen teil" },
      "praeteritum": { "ich": "nahm teil", "du": "nahmst teil", "er_sie_es": "nahm teil", "wir": "nahmen teil", "ihr": "nahmt teil", "sie_Sie": "nahmen teil" },
      "perfekt": "hat teilgenommen",
      "imperativ": "Nimm teil!/Nehmt teil!/Nehmen Sie teil!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich nehme an einem Deutschkurs teil.", "id": "Saya mengikuti sebuah kursus bahasa Jerman." },
      { "de": "Wer möchte am Seminar teilnehmen?", "id": "Siapa yang ingin berpartisipasi dalam seminar ini?" }
    ]
  },
  {
    "id": "teilhaben-113",
    "level": "C1",
    "infinitiv": "teilhaben",
    "arti": "turut ambil bagian, menikmati bersama",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "habe teil", "du": "hast teil", "er_sie_es": "hat teil", "wir": "haben teil", "ihr": "habt teil", "sie_Sie": "haben teil" },
      "praeteritum": { "ich": "hatte teil", "du": "hattest teil", "er_sie_es": "hatte teil", "wir": "hatten teil", "ihr": "hattet teil", "sie_Sie": "hatten teil" },
      "perfekt": "hat teilgehabt",
      "imperativ": "Hab teil!/Habt teil!/Haben Sie teil!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Jeder Bürger sollte am gesellschaftlichen Leben teilhaben.", "id": "Setiap warga negara semestinya turut ambil bagian dalam kehidupan bermasyarakat." },
      { "de": "Er ließ uns an seiner Freude teilhaben.", "id": "Dia membagikan kebahagiaannya kepada kami." }
    ]
  },
  {
    "id": "verhandeln-114",
    "level": "B2",
    "infinitiv": "verhandeln",
    "arti": "bernegosiasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verhandle", "du": "verhandelst", "er_sie_es": "verhandelt", "wir": "verhandeln", "ihr": "verhandelt", "sie_Sie": "verhandeln" },
      "praeteritum": { "ich": "verhandelte", "du": "verhandeltest", "er_sie_es": "verhandelte", "wir": "verhandelten", "ihr": "verhandeltet", "sie_Sie": "verhandelten" },
      "perfekt": "hat verhandelt",
      "imperativ": "Verhandle!/Verhandelt!/Verhandeln Sie!"
    },
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Die beiden Parteien verhandeln über den Vertrag.", "id": "Kedua belah pihak sedang bernegosiasi tentang kontrak kerja." },
      { "de": "Wir müssen über den Preis noch verhandeln.", "id": "Kita masih harus menegosiasikan harganya." }
    ]
  },
  {
    "id": "beeinflussen-115",
    "level": "B2",
    "infinitiv": "beeinflussen",
    "arti": "memengaruhi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "beeinflusse", "du": "beeinflusst", "er_sie_es": "beeinflusst", "wir": "beeinflussen", "ihr": "beeinflusst", "sie_Sie": "beeinflussen" },
      "praeteritum": { "ich": "beeinflusste", "du": "beeinflusstest", "er_sie_es": "beeinflusste", "wir": "beeinflussten", "ihr": "beeinflusstet", "sie_Sie": "beeinflussten" },
      "perfekt": "hat beeinflusst",
      "imperativ": "Beeinflusse!/Beeinflusst!/Beeinflussen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Wetter beeinflusst unsere Stimmung oft stark.", "id": "Cuaca sering kali sangat memengaruhi suasana hati kita." },
      { "de": "Lass dich nicht von anderen negativ beeinflussen.", "id": "Jangan biarkan dirimu dipengaruhi secara negatif oleh orang lain." }
    ]
  },
  {
    "id": "begruenden-116",
    "level": "B2",
    "infinitiv": "begründen",
    "arti": "memberikan alasan, mendasari",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "begründe", "du": "begründest", "er_sie_es": "begründet", "wir": "begründen", "ihr": "begründet", "sie_Sie": "begründen" },
      "praeteritum": { "ich": "begründete", "du": "begründetest", "er_sie_es": "begründete", "wir": "begründeten", "ihr": "begründetet", "sie_Sie": "begründeten" },
      "perfekt": "hat begründet",
      "imperativ": "Begründe!/Begründet!/Begründen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Können Sie Ihre Entscheidung bitte näher begründen?", "id": "Bisakah Anda memberikan alasan lebih rinci mengenai keputusan Anda?" },
      { "de": "Er begründete seine Abwesenheit mit Krankheit.", "id": "Dia beralasan ketidakhadirannya dikarenakan sakit." }
    ]
  },
  {
    "id": "widersprechen-117",
    "level": "C1",
    "infinitiv": "widersprechen",
    "arti": "membantah, menyangkal",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "widerspreche", "du": "widersprichst", "er_sie_es": "widerspricht", "wir": "widersprechen", "ihr": "widersprecht", "sie_Sie": "widersprechen" },
      "praeteritum": { "ich": "widersprach", "du": "widersprachst", "er_sie_es": "widersprach", "wir": "widersprachen", "ihr": "widerspracht", "sie_Sie": "widersprachen" },
      "perfekt": "hat widersprochen",
      "imperativ": "Widersprich!/Widersprecht!/Widersprechen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Niemand wagte es, dem Chef zu widersprechen.", "id": "Tidak ada yang berani membantah atasan tersebut." },
      { "de": "Die Aussagen widersprechen den Tatsachen.", "id": "Pernyataan-pernyataan itu bertentangan dengan fakta nyata." }
    ]
  },
  {
    "id": "bewaeltigen-118",
    "level": "C1",
    "infinitiv": "bewältigen",
    "arti": "mengatasi, menuntaskan kesulitan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bewältige", "du": "bewältigst", "er_sie_es": "bewältigt", "wir": "bewältigen", "ihr": "bewältigt", "sie_Sie": "bewältigen" },
      "praeteritum": { "ich": "bewältigte", "du": "bewältigtest", "er_sie_es": "bewältigte", "wir": "bewältigten", "ihr": "bewältigtet", "sie_Sie": "bewältigten" },
      "perfekt": "hat bewältigt",
      "imperativ": "Bewältige!/Bewältigt!/Bewältigen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie hat die Krise mit Bravour bewältigt.", "id": "Dia berhasil mengatasi krisis tersebut dengan gemilang." },
      { "de": "Wir müssen gemeinsam diese Aufgabe bewältigen.", "id": "Kita harus menuntaskan tugas ini bersama-sama." }
    ]
  },
  {
    "id": "gewaehrleisten-119",
    "level": "C2",
    "infinitiv": "gewährleisten",
    "arti": "menjamin, memastikan keamanan/kelangsungan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "gewährleiste", "du": "gewährleistest", "er_sie_es": "gewährleistet", "wir": "gewährleisten", "ihr": "gewährleistet", "sie_Sie": "gewährleisten" },
      "praeteritum": { "ich": "gewährleistete", "du": "gewährleistetest", "er_sie_es": "gewährleistete", "wir": "gewährleisteten", "ihr": "gewährleistetet", "sie_Sie": "gewährleisteten" },
      "perfekt": "hat gewährleistet",
      "imperativ": "Gewährleiste!/Gewährleistet!/Gewährleisten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Behörden müssen die Sicherheit aller Bürger gewährleisten.", "id": "Pihak berwenang wajib menjamin keselamatan seluruh warga." },
      { "de": "Neue Technologien gewährleisten eine höhere Effizienz.", "id": "Teknologi baru memastikan efisiensi yang lebih tinggi." }
    ]
  },
  {
    "id": "hinterfragen-120",
    "level": "C2",
    "infinitiv": "hinterfragen",
    "arti": "mempertanyakan secara kritis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "hinterfrage", "du": "hinterfragst", "er_sie_es": "hinterfragt", "wir": "hinterfragen", "ihr": "hinterfragt", "sie_Sie": "hinterfragen" },
      "praeteritum": { "ich": "hinterfragte", "du": "hinterfragtest", "er_sie_es": "hinterfragte", "wir": "hinterfragten", "ihr": "hinterfragtet", "sie_Sie": "hinterfragten" },
      "perfekt": "hat hinterfragt",
      "imperativ": "Hinterfrage!/Hinterfragt!/Hinterfragen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Man sollte überlieferte Annahmen stets kritisch hinterfragen.", "id": "Orang semestinya selalu mempertanyakan asumsi lama secara kritis." },
      { "de": "Der Forscher hinterfragte die gängigen Methoden.", "id": "Peneliti tersebut mempertanyakan metode-metode konvensional yang biasa dipakai." }
    ]
  },
    {
    "id": "treffen-121",
    "level": "A1",
    "infinitiv": "treffen",
    "arti": "bertemu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "treffe", "du": "triffst", "er_sie_es": "trifft", "wir": "treffen", "ihr": "trefft", "sie_Sie": "treffen" },
      "praeteritum": { "ich": "traf", "du": "trafst", "er_sie_es": "traf", "wir": "trafen", "ihr": "traft", "sie_Sie": "trafen" },
      "perfekt": "hat getroffen",
      "imperativ": "Triff!/Trefft!/Treffen Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich treffe heute Abend meine Freunde.", "id": "Saya bertemu teman-teman saya malam ini." },
      { "de": "Wo treffen wir uns?", "id": "Di mana kita bertemu?" }
    ]
  },
  {
    "id": "kennenlernen-122",
    "level": "A1",
    "infinitiv": "kennenlernen",
    "arti": "berkenalan, mengenal untuk pertama kali",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "lerne kennen", "du": "lernst kennen", "er_sie_es": "lernt kennen", "wir": "lernen kennen", "ihr": "lernt kennen", "sie_Sie": "lernen kennen" },
      "praeteritum": { "ich": "lernte kennen", "du": "lerntest kennen", "er_sie_es": "lernte kennen", "wir": "lernten kennen", "ihr": "lerntet kennen", "sie_Sie": "lernten kennen" },
      "perfekt": "hat kennengelernt",
      "imperativ": "Lern kennen!/Lernt kennen!/Lernen Sie kennen!"
    },
    "contoh_kalimat": [
      { "de": "Schön, dich kennenzulernen!", "id": "Senang berkenalan denganmu!" },
      { "de": "Wir haben uns an der Uni kennengelernt.", "id": "Kami saling mengenal di kampus." }
    ]
  },
  {
    "id": "helfen-123",
    "level": "A1",
    "infinitiv": "helfen",
    "arti": "menolong",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "helfe", "du": "hilfst", "er_sie_es": "hilft", "wir": "helfen", "ihr": "helft", "sie_Sie": "helfen" },
      "praeteritum": { "ich": "half", "du": "halfst", "er_sie_es": "half", "wir": "halfen", "ihr": "halft", "sie_Sie": "halfen" },
      "perfekt": "hat geholfen",
      "imperativ": "Hilf!/Helft!/Helfen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Können Sie mir bitte helfen?", "id": "Bisakah Anda menolong saya?" },
      { "de": "Ich helfe meinem Bruder beim Umzug.", "id": "Saya menolong saudara laki-laki saya pindahan." }
    ]
  },
  {
    "id": "vergessen-124",
    "level": "A1",
    "infinitiv": "vergessen",
    "arti": "lupa",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "vergesse", "du": "vergisst", "er_sie_es": "vergisst", "wir": "vergessen", "ihr": "vergesst", "sie_Sie": "vergessen" },
      "praeteritum": { "ich": "vergaß", "du": "vergaßest", "er_sie_es": "vergaß", "wir": "vergaßen", "ihr": "vergaßt", "sie_Sie": "vergaßen" },
      "perfekt": "hat vergessen",
      "imperativ": "Vergiss!/Vergesst!/Vergessen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe meine Brille vergessen.", "id": "Saya lupa kacamata saya." },
      { "de": "Vergiss nicht, mich anzurufen!", "id": "Jangan lupa menelpon saya!" }
    ]
  },
  {
    "id": "wissen-125",
    "level": "A1",
    "infinitiv": "wissen",
    "arti": "mengetahui (fakta/informasi)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "weiß", "du": "weißt", "er_sie_es": "weiß", "wir": "wissen", "ihr": "wisst", "sie_Sie": "wissen" },
      "praeteritum": { "ich": "wusste", "du": "wusstest", "er_sie_es": "wusste", "wir": "wussten", "ihr": "wusstet", "sie_Sie": "wussten" },
      "perfekt": "hat gewusst",
      "imperativ": "Wisse!/Wisst!/Wissen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich weiß die Antwort nicht.", "id": "Saya tidak tahu jawabannya." },
      { "de": "Weißt du, wann der Bus kommt?", "id": "Tahukah kamu kapan busnya tiba?" }
    ]
  },
  {
    "id": "muessen-126",
    "level": "A1",
    "infinitiv": "müssen",
    "arti": "harus (keharusan mutlak)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "muss", "du": "musst", "er_sie_es": "muss", "wir": "müssen", "ihr": "müsst", "sie_Sie": "müssen" },
      "praeteritum": { "ich": "musste", "du": "musstest", "er_sie_es": "musste", "wir": "mussten", "ihr": "musstet", "sie_Sie": "mussten" },
      "perfekt": "hat gemusst",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Ich muss jetzt nach Hause gehen.", "id": "Saya harus pulang ke rumah sekarang." },
      { "de": "Wir müssen für die Prüfung lernen.", "id": "Kita harus belajar untuk ujian." }
    ]
  },
  {
    "id": "koennen-127",
    "level": "A1",
    "infinitiv": "können",
    "arti": "bisa, mampu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "kann", "du": "kannst", "er_sie_es": "kann", "wir": "können", "ihr": "könnt", "sie_Sie": "können" },
      "praeteritum": { "ich": "konnte", "du": "konntest", "er_sie_es": "konnte", "wir": "konnten", "ihr": "konntet", "sie_Sie": "konnten" },
      "perfekt": "hat gekonnt",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Ich kann gut schwimmen.", "id": "Saya bisa berenang dengan baik." },
      { "de": "Kannst du Deutsch sprechen?", "id": "Bisakah kamu berbicara bahasa Jerman?" }
    ]
  },
  {
    "id": "wollen-128",
    "level": "A1",
    "infinitiv": "wollen",
    "arti": "ingin, mau",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "will", "du": "willst", "er_sie_es": "will", "wir": "wollen", "ihr": "wollt", "sie_Sie": "wollen" },
      "praeteritum": { "ich": "wollte", "du": "wolltest", "er_sie_es": "wollte", "wir": "wollten", "ihr": "wolltet", "sie_Sie": "wollten" },
      "perfekt": "hat gewollt",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Ich will ein Eis essen.", "id": "Saya ingin makan es krim." },
      { "de": "Was wollt ihr am Wochenende machen?", "id": "Apa yang ingin kalian lakukan di akhir pekan?" }
    ]
  },
  {
    "id": "duerfen-129",
    "level": "A1",
    "infinitiv": "dürfen",
    "arti": "boleh (izin)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "darf", "du": "darfst", "er_sie_es": "darf", "wir": "dürfen", "ihr": "dürft", "sie_Sie": "dürfen" },
      "praeteritum": { "ich": "durfte", "du": "durftest", "er_sie_es": "durfte", "wir": "durften", "ihr": "durftet", "sie_Sie": "durften" },
      "perfekt": "hat gedurft",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Darf ich hier parken?", "id": "Bolehkah saya parkir di sini?" },
      { "de": "Hier darf man nicht rauchen.", "id": "Orang tidak boleh merokok di sini." }
    ]
  },
  {
    "id": "sollen-130",
    "level": "A1",
    "infinitiv": "sollen",
    "arti": "seharusnya",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "soll", "du": "sollst", "er_sie_es": "soll", "wir": "sollen", "ihr": "sollt", "sie_Sie": "sollen" },
      "praeteritum": { "ich": "sollte", "du": "solltest", "er_sie_es": "sollte", "wir": "sollten", "ihr": "solltet", "sie_Sie": "sollten" },
      "perfekt": "hat gesollt",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Der Arzt sagt, ich soll viel Wasser trinken.", "id": "Dokter bilang saya seharusnya minum banyak air." },
      { "de": "Soll ich das Fenster öffnen?", "id": "Haruskah saya membuka jendelanya?" }
    ]
  },
  {
    "id": "moegen-131",
    "level": "A1",
    "infinitiv": "mögen",
    "arti": "suka, menggemari",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "mag", "du": "magst", "er_sie_es": "mag", "wir": "mögen", "ihr": "mögt", "sie_Sie": "mögen" },
      "praeteritum": { "ich": "mochte", "du": "mochtest", "er_sie_es": "mochte", "wir": "mochten", "ihr": "mochtet", "sie_Sie": "mochten" },
      "perfekt": "hat gemocht",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Ich mag Schokolade.", "id": "Saya suka cokelat." },
      { "de": "Magst du klassische Musik?", "id": "Apakah kamu suka musik klasik?" }
    ]
  },
  {
    "id": "moechten-132",
    "level": "A1",
    "infinitiv": "möchten",
    "arti": "ingin (sopan)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "möchte", "du": "möchtest", "er_sie_es": "möchte", "wir": "möchten", "ihr": "möchtet", "sie_Sie": "möchten" },
      "praeteritum": { "ich": "wollte", "du": "wolltest", "er_sie_es": "wollte", "wir": "wollten", "ihr": "wolltet", "sie_Sie": "wollten" },
      "perfekt": "hat gewollt",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Ich möchte einen Kaffee bestellen.", "id": "Saya ingin memesan secangkir kopi." },
      { "de": "Möchten Sie noch etwas Brot?", "id": "Apakah Anda menginginkan roti lagi?" }
    ]
  },
  {
    "id": "singen-133",
    "level": "A1",
    "infinitiv": "singen",
    "arti": "bernyanyi",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "singe", "du": "singst", "er_sie_es": "singt", "wir": "singen", "ihr": "singt", "sie_Sie": "singen" },
      "praeteritum": { "ich": "sang", "du": "sangst", "er_sie_es": "sang", "wir": "sangen", "ihr": "sangt", "sie_Sie": "sangen" },
      "perfekt": "hat gesungen",
      "imperativ": "Sing!/Singt!/Singen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Kinder singen ein Lied.", "id": "Anak-anak menyanyikan sebuah lagu." },
      { "de": "Sie singt sehr schön.", "id": "Dia bernyanyi dengan sangat indah." }
    ]
  },
  {
    "id": "tanzen-134",
    "level": "A1",
    "infinitiv": "tanzen",
    "arti": "menari",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "tanze", "du": "tanzt", "er_sie_es": "tanzt", "wir": "tanzen", "ihr": "tanzt", "sie_Sie": "tanzen" },
      "praeteritum": { "ich": "tanzte", "du": "tanztest", "er_sie_es": "tanzte", "wir": "tanzten", "ihr": "tanztet", "sie_Sie": "tanzten" },
      "perfekt": "hat getanzt",
      "imperativ": "Tanz!/Tanzt!/Tanzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir tanzen gern auf Partys.", "id": "Kami suka menari di pesta." },
      { "de": "Möchtest du mit mir tanzen?", "id": "Maukah kamu menari denganku?" }
    ]
  },
  {
    "id": "schwimmen-135",
    "level": "A1",
    "infinitiv": "schwimmen",
    "arti": "berenang",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "schwimme", "du": "schwimmst", "er_sie_es": "schwimmt", "wir": "schwimmen", "ihr": "schwimmt", "sie_Sie": "schwimmen" },
      "praeteritum": { "ich": "schwamm", "du": "schwammst", "er_sie_es": "schwamm", "wir": "schwammen", "ihr": "schwammt", "sie_Sie": "schwammen" },
      "perfekt": "ist geschwommen",
      "imperativ": "Schwimm!/Schwimmt!/Schwimmen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Im Sommer schwimme ich oft im See.", "id": "Di musim panas saya sering berenang di danau." },
      { "de": "Er schwimmt sehr schnell.", "id": "Dia berenang sangat cepat." }
    ]
  },
  {
    "id": "reisen-136",
    "level": "A2",
    "infinitiv": "reisen",
    "arti": "bepergian, keliling",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "reise", "du": "reist", "er_sie_es": "reist", "wir": "reisen", "ihr": "reist", "sie_Sie": "reisen" },
      "praeteritum": { "ich": "reiste", "du": "reistest", "er_sie_es": "reiste", "wir": "reisten", "ihr": "reistet", "sie_Sie": "reisten" },
      "perfekt": "ist gereist",
      "imperativ": "Reise!/Reist!/Reisen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich reise sehr gern in andere Länder.", "id": "Saya sangat suka bepergian ke negara lain." },
      { "de": "Sie sind durch ganz Europa gereist.", "id": "Mereka telah berkeliling ke seluruh Eropa." }
    ]
  },
  {
    "id": "buchen-137",
    "level": "A2",
    "infinitiv": "buchen",
    "arti": "memesan (tiket/hotel)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "buche", "du": "buchst", "er_sie_es": "bucht", "wir": "buchen", "ihr": "bucht", "sie_Sie": "buchen" },
      "praeteritum": { "ich": "buchte", "du": "buchtest", "er_sie_es": "buchte", "wir": "buchten", "ihr": "buchtet", "sie_Sie": "buchten" },
      "perfekt": "hat gebucht",
      "imperativ": "Buch!/Bucht!/Buchen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir haben ein Hotelzimmer in Hamburg gebucht.", "id": "Kami telah memesan kamar hotel di Hamburg." },
      { "de": "Hast du den Flug schon gebucht?", "id": "Apakah kamu sudah memesan tiket pesawatnya?" }
    ]
  },
  {
    "id": "reservieren-138",
    "level": "A2",
    "infinitiv": "reservieren",
    "arti": "mereservasi (meja)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "reserviere", "du": "reservierst", "er_sie_es": "reserviert", "wir": "reservieren", "ihr": "reserviert", "sie_Sie": "reservieren" },
      "praeteritum": { "ich": "reservierte", "du": "reserviertest", "er_sie_es": "reservierte", "wir": "reservierten", "ihr": "reserviertet", "sie_Sie": "reservierten" },
      "perfekt": "hat reserviert",
      "imperativ": "Reservier!/Reserviert!/Reservieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich möchte einen Tisch für zwei Personen reservieren.", "id": "Saya ingin mereservasi meja untuk dua orang." },
      { "de": "Der Platz ist bereits reserviert.", "id": "Tempat tersebut sudah direservasi." }
    ]
  },
  {
    "id": "bestellen-139",
    "level": "A2",
    "infinitiv": "bestellen",
    "arti": "memesan barang atau makanan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bestelle", "du": "bestellst", "er_sie_es": "bestellt", "wir": "bestellen", "ihr": "bestellt", "sie_Sie": "bestellen" },
      "praeteritum": { "ich": "bestellte", "du": "bestelltest", "er_sie_es": "bestellte", "wir": "bestellten", "ihr": "bestelltet", "sie_Sie": "bestellten" },
      "perfekt": "hat bestellt",
      "imperativ": "Bestell!/Bestellt!/Bestellen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir bestellen eine Pizza.", "id": "Kami memesan piza." },
      { "de": "Ich habe ein Buch im Internet bestellt.", "id": "Saya memesan sebuah buku di internet." }
    ]
  },
  {
    "id": "liefern-140",
    "level": "A2",
    "infinitiv": "liefern",
    "arti": "mengantarkan, mengirimkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "liefere", "du": "lieferst", "er_sie_es": "liefert", "wir": "liefern", "ihr": "liefert", "sie_Sie": "liefern" },
      "praeteritum": { "ich": "lieferte", "du": "liefertest", "er_sie_es": "lieferte", "wir": "lieferten", "ihr": "liefertet", "sie_Sie": "lieferten" },
      "perfekt": "hat geliefert",
      "imperativ": "Liefere!/Liefert!/Liefern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Paketdienst liefert das Paket heute.", "id": "Layanan kurir mengantarkan paket hari ini." },
      { "de": "Liefern Sie auch ins Ausland?", "id": "Apakah Anda juga melayani pengiriman ke luar negeri?" }
    ]
  },
  {
    "id": "gewinnen-141",
    "level": "A2",
    "infinitiv": "gewinnen",
    "arti": "menang",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "gewinne", "du": "gewinnst", "er_sie_es": "gewinnt", "wir": "gewinnen", "ihr": "gewinnt", "sie_Sie": "gewinnen" },
      "praeteritum": { "ich": "gewann", "du": "gewannst", "er_sie_es": "gewann", "wir": "gewannen", "ihr": "gewannt", "sie_Sie": "gewannen" },
      "perfekt": "hat gewonnen",
      "imperativ": "Gewinn!/Gewinnt!/Gewinnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Unsere Mannschaft hat das Spiel gewonnen.", "id": "Tim kami memenangkan pertandingan itu." },
      { "de": "Wer gewinnt das Finale?", "id": "Siapa yang akan memenangkan babak final?" }
    ]
  },
  {
    "id": "funktionieren-142",
    "level": "A2",
    "infinitiv": "funktionieren",
    "arti": "berfungsi, berjalan baik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "funktioniere", "du": "funktionierst", "er_sie_es": "funktioniert", "wir": "funktionieren", "ihr": "funktioniert", "sie_Sie": "funktionieren" },
      "praeteritum": { "ich": "funktionierte", "du": "funktioniertest", "er_sie_es": "funktionierte", "wir": "funktionierten", "ihr": "funktioniertet", "sie_Sie": "funktionierten" },
      "perfekt": "hat funktioniert",
      "imperativ": "Funktioniere!/Funktioniert!/Funktionieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Drucker funktioniert leider nicht mehr.", "id": "Sayang sekali printernya sudah tidak berfungsi lagi." },
      { "de": "Alles hat super funktioniert.", "id": "Semuanya berjalan dengan sangat lancar." }
    ]
  },
  {
    "id": "reparieren-143",
    "level": "A2",
    "infinitiv": "reparieren",
    "arti": "memperbaiki",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "repariere", "du": "reparierst", "er_sie_es": "repariert", "wir": "reparieren", "ihr": "repariert", "sie_Sie": "reparieren" },
      "praeteritum": { "ich": "reparierte", "du": "repariertest", "er_sie_es": "reparierte", "wir": "reparierten", "ihr": "repariertet", "sie_Sie": "reparierten" },
      "perfekt": "hat repariert",
      "imperativ": "Reparier!/Repariert!/Reparieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du mein Fahrrad reparieren?", "id": "Bisakah kamu memperbaiki sepedaku?" },
      { "de": "Der Mechaniker repariert das Auto.", "id": "Mekanik sedang memperbaiki mobil." }
    ]
  },
  {
    "id": "dauern-144",
    "level": "A1",
    "infinitiv": "dauern",
    "arti": "berlangsung, memakan waktu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "dauere", "du": "dauerst", "er_sie_es": "dauert", "wir": "dauern", "ihr": "dauert", "sie_Sie": "dauern" },
      "praeteritum": { "ich": "dauerte", "du": "dauertest", "er_sie_es": "dauerte", "wir": "dauerten", "ihr": "dauertet", "sie_Sie": "dauerten" },
      "perfekt": "hat gedauert",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Wie lange dauert der Film?", "id": "Berapa lama filmnya berlangsung?" },
      { "de": "Die Fahrt dauert etwa zwei Stunden.", "id": "Perjalanannya memakan waktu sekitar dua jam." }
    ]
  },
  {
    "id": "gehoeren-145",
    "level": "A2",
    "infinitiv": "gehören",
    "arti": "milik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "gehöre", "du": "gehörst", "er_sie_es": "gehört", "wir": "gehören", "ihr": "gehört", "sie_Sie": "gehören" },
      "praeteritum": { "ich": "gehörte", "du": "gehörtest", "er_sie_es": "gehörte", "wir": "gehörten", "ihr": "gehörtet", "sie_Sie": "gehörten" },
      "perfekt": "hat gehört",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Wem gehört dieses Heft?", "id": "Buku tulis ini milik siapa?" },
      { "de": "Das Haus gehört meinen Eltern.", "id": "Rumah itu milik orang tua saya." }
    ]
  },
  {
    "id": "gefallen-146",
    "level": "A2",
    "infinitiv": "gefallen",
    "arti": "disukai",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "gefalle", "du": "gefällst", "er_sie_es": "gefällt", "wir": "gefallen", "ihr": "gefallt", "sie_Sie": "gefallen" },
      "praeteritum": { "ich": "gefiel", "du": "gefielst", "er_sie_es": "gefiel", "wir": "gefielen", "ihr": "gefielt", "sie_Sie": "gefielen" },
      "perfekt": "hat gefallen",
      "imperativ": "Gefall!/Gefallt!/Gefallen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das rote Kleid gefällt mir sehr.", "id": "Gaun merah itu sangat saya sukai." },
      { "de": "Wie gefällt Ihnen Deutschland?", "id": "Bagaimana kesan Anda menyukai Jerman?" }
    ]
  },
  {
    "id": "schmecken-147",
    "level": "A1",
    "infinitiv": "schmecken",
    "arti": "terasa lezat / berasa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schmecke", "du": "schmeckst", "er_sie_es": "schmeckt", "wir": "schmecken", "ihr": "schmeckt", "sie_Sie": "schmecken" },
      "praeteritum": { "ich": "schmeckte", "du": "schmecktest", "er_sie_es": "schmeckte", "wir": "schmeckten", "ihr": "schmecktet", "sie_Sie": "schmeckten" },
      "perfekt": "hat geschmeckt",
      "imperativ": "Schmecke!/Schmeckt!/Schmecken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Essen schmeckt hervorragend!", "id": "Makanannya terasa luar biasa enak!" },
      { "de": "Schmeckt dir die Suppe?", "id": "Apakah kamu menyukai rasa supnya?" }
    ]
  },
  {
    "id": "riechen-148",
    "level": "B1",
    "infinitiv": "riechen",
    "arti": "mencium aroma / berbau",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "rieche", "du": "riechst", "er_sie_es": "riecht", "wir": "riechen", "ihr": "riecht", "sie_Sie": "riechen" },
      "praeteritum": { "ich": "roch", "du": "rochst", "er_sie_es": "roch", "wir": "rochen", "ihr": "rocht", "sie_Sie": "rochen" },
      "perfekt": "hat gerochen",
      "imperativ": "Riech!/Riecht!/Riechen Sie!"
    },
    "praepositionen": [{ "präposition": "nach", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Es riecht hier nach frischem Kaffee.", "id": "Di sini beraroma kopi segar." },
      { "de": "Riech mal an dieser Blume!", "id": "Coba cium bunga ini!" }
    ]
  },
  {
    "id": "scheinen-149",
    "level": "A2",
    "infinitiv": "scheinen",
    "arti": "bersinar, tampak seperti",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "scheine", "du": "scheinst", "er_sie_es": "scheint", "wir": "scheinen", "ihr": "scheint", "sie_Sie": "scheinen" },
      "praeteritum": { "ich": "schien", "du": "schienst", "er_sie_es": "schien", "wir": "schienen", "ihr": "schient", "sie_Sie": "schienen" },
      "perfekt": "hat geschienen",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Die Sonne scheint den ganzen Tag.", "id": "Matahari bersinar sepanjang hari." },
      { "de": "Es scheint ein Problem zu geben.", "id": "Tampaknya ada masalah." }
    ]
  },
  {
    "id": "regnen-150",
    "level": "A1",
    "infinitiv": "regnen",
    "arti": "hujan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "-", "du": "-", "er_sie_es": "regnet", "wir": "-", "ihr": "-", "sie_Sie": "-" },
      "praeteritum": { "ich": "-", "du": "-", "er_sie_es": "regnete", "wir": "-", "ihr": "-", "sie_Sie": "-" },
      "perfekt": "hat geregnet",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Es regnet heute sehr stark.", "id": "Hari ini hujan turun sangat deras." },
      { "de": "Gestern hat es den ganzen Tag geregnet.", "id": "Kemarin hujan turun seharian penuh." }
    ]
  },
  {
    "id": "schneien-151",
    "level": "A1",
    "infinitiv": "schneien",
    "arti": "turun salju",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "-", "du": "-", "er_sie_es": "schneit", "wir": "-", "ihr": "-", "sie_Sie": "-" },
      "praeteritum": { "ich": "-", "du": "-", "er_sie_es": "schneite", "wir": "-", "ihr": "-", "sie_Sie": "-" },
      "perfekt": "hat geschneit",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Im Winter schneit es in den Bergen.", "id": "Di musim dingin turun salju di pegunungan." },
      { "de": "Schau mal, es schneit!", "id": "Lihatlah, salju sedang turun!" }
    ]
  },
  {
    "id": "gewoehnen-152",
    "level": "B1",
    "infinitiv": "sich gewöhnen",
    "arti": "terbiasa dengan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "gewöhne mich", "du": "gewöhnst dich", "er_sie_es": "gewöhnt sich", "wir": "gewöhnen uns", "ihr": "gewöhnt euch", "sie_Sie": "gewöhnen sich" },
      "praeteritum": { "ich": "gewöhnte mich", "du": "gewöhntest dich", "er_sie_es": "gewöhnte sich", "wir": "gewöhnten uns", "ihr": "gewöhntet euch", "sie_Sie": "gewöhnten sich" },
      "perfekt": "hat sich gewöhnt",
      "imperativ": "Gewöhne dich!/Gewöhnt euch!/Gewöhnen Sie sich!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich habe mich schnell an das kalte Wetter gewöhnt.", "id": "Saya cepat terbiasa dengan cuaca dingin ini." },
      { "de": "Man gewöhnt sich an alles.", "id": "Orang akan terbiasa dengan segala hal." }
    ]
  },
  {
    "id": "entschuldigen-153",
    "level": "A1",
    "infinitiv": "sich entschuldigen",
    "arti": "meminta maaf",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "entschuldige mich", "du": "entschuldigst dich", "er_sie_es": "entschuldigt sich", "wir": "entschuldigen uns", "ihr": "entschuldigt euch", "sie_Sie": "entschuldigen sich" },
      "praeteritum": { "ich": "entschuldigte mich", "du": "entschuldigtest dich", "er_sie_es": "entschuldigte sich", "wir": "entschuldigten uns", "ihr": "entschuldigtet euch", "sie_Sie": "entschuldigten sich" },
      "perfekt": "hat sich entschuldigt",
      "imperativ": "Entschuldige dich!/Entschuldigt euch!/Entschuldigen Sie sich!"
    },
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich möchte mich für meine Verspätung entschuldigen.", "id": "Saya ingin meminta maaf atas keterlambatan saya." },
      { "de": "Er hat sich bei mir entschuldigt.", "id": "Dia sudah meminta maaf kepada saya." }
    ]
  },
  {
    "id": "bedanken-154",
    "level": "A2",
    "infinitiv": "sich bedanken",
    "arti": "berterima kasih",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bedanke mich", "du": "bedankst dich", "er_sie_es": "bedankt sich", "wir": "bedanken uns", "ihr": "bedankt euch", "sie_Sie": "bedanken sich" },
      "praeteritum": { "ich": "bedankte mich", "du": "bedanktest dich", "er_sie_es": "bedankte sich", "wir": "bedankten uns", "ihr": "bedanktet euch", "sie_Sie": "bedankten sich" },
      "perfekt": "hat sich bedankt",
      "imperativ": "Bedanke dich!/Bedankt euch!/Bedanken Sie sich!"
    },
    "praepositionen": [{ "präposition": "bei", "kasus": "Dativ" }, { "präposition": "für", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Wir möchten uns herzlich bei Ihnen bedanken.", "id": "Kami ingin berterima kasih dengan tulus kepada Anda." },
      { "de": "Hast du dich für das Geschenk bedankt?", "id": "Apakah kamu sudah berterima kasih atas hadiah tersebut?" }
    ]
  },
  {
    "id": "bewerben-155",
    "level": "B1",
    "infinitiv": "sich bewerben",
    "arti": "melamar (pekerjaan/beasiswa)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "bewerbe mich", "du": "bewirbst dich", "er_sie_es": "bewirbt sich", "wir": "bewerben uns", "ihr": "bewerbt euch", "sie_Sie": "bewerben sich" },
      "praeteritum": { "ich": "bewarb mich", "du": "bewarbst dich", "er_sie_es": "bewarb sich", "wir": "bewarben uns", "ihr": "bewarbt euch", "sie_Sie": "bewarben sich" },
      "perfekt": "hat sich beworben",
      "imperativ": "Bewirb dich!/Bewerbt euch!/Bewerben Sie sich!"
    },
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich bewerbe mich um die Stelle als Softwareentwickler.", "id": "Saya melamar pekerjaan sebagai pengembang perangkat lunak." },
      { "de": "Er hat sich bei einer deutschen Firma beworben.", "id": "Dia telah melamar di sebuah perusahaan Jerman." }
    ]
  },
  {
    "id": "aergern-156",
    "level": "A2",
    "infinitiv": "sich ärgern",
    "arti": "jengkel, kesal",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "ärgere mich", "du": "ärgerst dich", "er_sie_es": "ärgert sich", "wir": "ärgern uns", "ihr": "ärgert euch", "sie_Sie": "ärgern sich" },
      "praeteritum": { "ich": "ärgerte mich", "du": "ärgertest dich", "er_sie_es": "ärgerte sich", "wir": "ärgerten uns", "ihr": "ärgertet euch", "sie_Sie": "ärgerten sich" },
      "perfekt": "hat sich geärgert",
      "imperativ": "Ärgere dich nicht!/Ärgert euch nicht!"
    },
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich ärgere mich über den Stau.", "id": "Saya jengkel dengan kemacetan ini." },
      { "de": "Ärgere dich nicht über Kleinigkeiten!", "id": "Jangan jengkel hanya karena hal-hal sepele!" }
    ]
  },
  {
    "id": "freuen-157",
    "level": "A2",
    "infinitiv": "sich freuen (über)",
    "arti": "senang atas (kejadian saat ini / masa lalu)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "freue mich", "du": "freust dich", "er_sie_es": "freut sich", "wir": "freuen uns", "ihr": "freut euch", "sie_Sie": "freuen sich" },
      "praeteritum": { "ich": "freute mich", "du": "freutest dich", "er_sie_es": "freute sich", "wir": "freuten uns", "ihr": "freutet euch", "sie_Sie": "freuten sich" },
      "perfekt": "hat sich gefreut",
      "imperativ": "Freu dich!/Freut euch!/Freuen Sie sich!"
    },
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich freue mich über deinen Besuch.", "id": "Saya senang atas kunjunganmu." },
      { "de": "Er hat sich riesig über die Nachricht gefreut.", "id": "Dia sangat senang mendengar berita itu." }
    ]
  },
  {
    "id": "erholen-158",
    "level": "B1",
    "infinitiv": "sich erholen",
    "arti": "beristirahat, memulihkan diri",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erhole mich", "du": "erholst dich", "er_sie_es": "erholt sich", "wir": "erholen uns", "ihr": "erholt euch", "sie_Sie": "erholen sich" },
      "praeteritum": { "ich": "erholte mich", "du": "erholtest dich", "er_sie_es": "erholte sich", "wir": "erholten uns", "ihr": "erholtet euch", "sie_Sie": "erholten sich" },
      "perfekt": "hat sich erholt",
      "imperativ": "Erhole dich gut!/Erholt euch gut!"
    },
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Im Urlaub habe ich mich gut erholt.", "id": "Saat liburan saya memulihkan diri dengan baik." },
      { "de": "Er muss sich noch von der Operation erholen.", "id": "Dia masih harus memulihkan diri pascaoperasi." }
    ]
  },
  {
    "id": "gewaehren-159",
    "level": "C1",
    "infinitiv": "gewähren",
    "arti": "mengabulkan, memberikan (hak/diskon)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "gewähre", "du": "gewährst", "er_sie_es": "gewährt", "wir": "gewähren", "ihr": "gewährt", "sie_Sie": "gewähren" },
      "praeteritum": { "ich": "gewährte", "du": "gewährtest", "er_sie_es": "gewährte", "wir": "gewährten", "ihr": "gewährtet", "sie_Sie": "gewährten" },
      "perfekt": "hat gewährt",
      "imperativ": "Gewähre!/Gewährt!/Gewähren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Bank gewährt einen zinsgünstigen Kredit.", "id": "Bank tersebut mengabulkan pinjaman dengan bunga rendah." },
      { "de": "Ihm wurde Asyl gewährt.", "id": "Suaka telah dikabulkan untuknya." }
    ]
  },
  {
    "id": "erwaegen-160",
    "level": "C2",
    "infinitiv": "erwägen",
    "arti": "menimbang-nimbang secara mendalam",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "erwäge", "du": "erwägst", "er_sie_es": "erwägt", "wir": "erwägen", "ihr": "erwägt", "sie_Sie": "erwägen" },
      "praeteritum": { "ich": "erwog", "du": "erwogst", "er_sie_es": "erwog", "wir": "erwogen", "ihr": "erwogt", "sie_Sie": "erwogen" },
      "perfekt": "hat erwogen",
      "imperativ": "Erwäge!/Erwägt!/Erwägen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Unternehmen erwägt eine Expansion nach Asien.", "id": "Perusahaan sedang menimbang-nimbang secara mendalam ekspansi ke Asia." },
      { "de": "Wir müssen alle Optionen sorgfältig erwägen.", "id": "Kita wajib menimbang semua opsi dengan sangat cermat." }
    ]
  },
  {
    "id": "gewoehnen-161",
    "level": "B1",
    "infinitiv": "gewöhnen",
    "arti": "membiasakan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "gewöhne", "du": "gewöhnst", "er_sie_es": "gewöhnt", "wir": "gewöhnen", "ihr": "gewöhnt", "sie_Sie": "gewöhnen" },
      "praeteritum": { "ich": "gewöhnte", "du": "gewöhntest", "er_sie_es": "gewöhnte", "wir": "gewöhnten", "ihr": "gewöhntet", "sie_Sie": "gewöhnten" },
      "perfekt": "hat gewöhnt",
      "imperativ": "Gewöhne!/Gewöhnt!/Gewöhnen Sie!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich gewöhne das Kind an feste Schlafenszeiten.", "id": "Saya membiasakan anak itu dengan waktu tidur yang teratur." },
      { "de": "Man muss die Augen an die Dunkelheit gewöhnen.", "id": "Orang harus membiasakan mata dengan kegelapan." }
    ]
  },
  {
    "id": "leihen-162",
    "level": "A2",
    "infinitiv": "leihen",
    "arti": "meminjamkan, meminjam",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "leihe", "du": "leihst", "er_sie_es": "leiht", "wir": "leihen", "ihr": "leiht", "sie_Sie": "leihen" },
      "praeteritum": { "ich": "lieh", "du": "liehst", "er_sie_es": "lieh", "wir": "liehen", "ihr": "lieht", "sie_Sie": "liehen" },
      "perfekt": "hat geliehen",
      "imperativ": "Leih!/Leiht!/Leihen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du mir deinen Stift leihen?", "id": "Bisakah kamu meminjamkan pulpenmu padaku?" },
      { "de": "Ich habe mir ein Buch aus der Bibliothek geliehen.", "id": "Saya meminjam sebuah buku dari perpustakaan." }
    ]
  },
  {
    "id": "schenken-163",
    "level": "A1",
    "infinitiv": "schenken",
    "arti": "memberi hadiah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schenke", "du": "schenkst", "er_sie_es": "schenkt", "wir": "schenken", "ihr": "schenkt", "sie_Sie": "schenken" },
      "praeteritum": { "ich": "schenkte", "du": "schenktest", "er_sie_es": "schenkte", "wir": "schenkten", "ihr": "schenktet", "sie_Sie": "schenkten" },
      "perfekt": "hat geschenkt",
      "imperativ": "Schenk!/Schenkt!/Schenken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Was schenkst du deiner Mutter zum Geburtstag?", "id": "Apa yang kamu hadiahkan untuk ibumu saat ulang tahunnya?" },
      { "de": "Er hat mir eine schöne Uhr geschenkt.", "id": "Dia menghadiahi saya sebuah jam tangan yang indah." }
    ]
  },
  {
    "id": "feiern-164",
    "level": "A1",
    "infinitiv": "feiern",
    "arti": "merayakan, berpesta",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "feiere", "du": "feierst", "er_sie_es": "feiert", "wir": "feiern", "ihr": "feiert", "sie_Sie": "feiern" },
      "praeteritum": { "ich": "feierte", "du": "feiertest", "er_sie_es": "feierte", "wir": "feierten", "ihr": "feiertet", "sie_Sie": "feierten" },
      "perfekt": "hat gefeiert",
      "imperativ": "Feiere!/Feiert!/Feiern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir feiern heute meinen Geburtstag.", "id": "Kami merayakan hari ulang tahun saya hari ini." },
      { "de": "Wo habt ihr Silvester gefeiert?", "id": "Di mana kalian merayakan malam tahun baru?" }
    ]
  },
  {
    "id": "gratulieren-165",
    "level": "A2",
    "infinitiv": "gratulieren",
    "arti": "memberi selamat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "gratuliere", "du": "gratulierst", "er_sie_es": "gratuliert", "wir": "gratulieren", "ihr": "gratuliert", "sie_Sie": "gratulieren" },
      "praeteritum": { "ich": "gratulierte", "du": "gratuliertest", "er_sie_es": "gratulierte", "wir": "gratulierten", "ihr": "gratuliertet", "sie_Sie": "gratulierten" },
      "perfekt": "hat gratuliert",
      "imperativ": "Gratuliere!/Gratuliert!/Gratulieren Sie!"
    },
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich gratuliere dir herzlich zur bestandenen Prüfung!", "id": "Saya mengucapkan selamat dengan tulus atas kelulusan ujianmu!" },
      { "de": "Wir gratulieren dem Brautpaar.", "id": "Kami memberi selamat kepada kedua mempelai." }
    ]
  },
  {
    "id": "hoffen-166",
    "level": "A2",
    "infinitiv": "hoffen",
    "arti": "mengharap",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "hoffe", "du": "hoffst", "er_sie_es": "hofft", "wir": "hoffen", "ihr": "hofft", "sie_Sie": "hoffen" },
      "praeteritum": { "ich": "hoffte", "du": "hofftest", "er_sie_es": "hoffte", "wir": "hofften", "ihr": "hofftet", "sie_Sie": "hofften" },
      "perfekt": "hat gehofft",
      "imperativ": "Hoffe!/Hofft!/Hoffen Sie!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Wir hoffen auf eine baldige Besserung.", "id": "Kami mengharapkan pemulihan yang segera." },
      { "de": "Ich hoffe, wir sehen uns bald wieder.", "id": "Saya berharap kita segera bertemu lagi." }
    ]
  },
  {
    "id": "glauben-167",
    "level": "A1",
    "infinitiv": "glauben",
    "arti": "percaya, mengira",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "glaube", "du": "glaubst", "er_sie_es": "glaubt", "wir": "glauben", "ihr": "glaubt", "sie_Sie": "glauben" },
      "praeteritum": { "ich": "glaubte", "du": "glaubtest", "er_sie_es": "glaubte", "wir": "glaubten", "ihr": "glaubtet", "sie_Sie": "glaubten" },
      "perfekt": "hat geglaubt",
      "imperativ": "Glaub!/Glaubt!/Glauben Sie!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich glaube dir jedes Wort.", "id": "Saya percaya setiap kata yang kamu ucapkan." },
      { "de": "Glaubst du an Wunder?", "id": "Apakah kamu percaya pada keajaiban?" }
    ]
  },
  {
    "id": "meinen-168",
    "level": "A1",
    "infinitiv": "meinen",
    "arti": "berpendapat, bermaksud",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "meine", "du": "meinst", "er_sie_es": "meint", "wir": "meinen", "ihr": "meint", "sie_Sie": "meinen" },
      "praeteritum": { "ich": "meinte", "du": "meintest", "er_sie_es": "meinte", "wir": "meinten", "ihr": "meintet", "sie_Sie": "meinten" },
      "perfekt": "hat gemeint",
      "imperativ": "Meine!/Meint!/Meinen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Was meinst du dazu?", "id": "Apa pendapatmu tentang hal itu?" },
      { "de": "Ich habe das nicht so gemeint.", "id": "Bukan itu yang saya maksud." }
    ]
  },
  {
    "id": "erlauben-169",
    "level": "B1",
    "infinitiv": "erlauben",
    "arti": "mengizinkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erlaube", "du": "erlaubst", "er_sie_es": "erlaubt", "wir": "erlauben", "ihr": "erlaubt", "sie_Sie": "erlauben" },
      "praeteritum": { "ich": "erlaubte", "du": "erlaubtest", "er_sie_es": "erlaubte", "wir": "erlaubten", "ihr": "erlaubtet", "sie_Sie": "erlaubten" },
      "perfekt": "hat erlaubt",
      "imperativ": "Erlaube!/Erlaubt!/Erlauben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Meine Eltern erlauben mir die Reise.", "id": "Orang tua saya mengizinkan saya melakukan perjalanan itu." },
      { "de": "Rauchen ist hier nicht erlaubt.", "id": "Merokok tidak diizinkan di sini." }
    ]
  },
  {
    "id": "verbieten-170",
    "level": "B1",
    "infinitiv": "verbieten",
    "arti": "melarang",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verbiete", "du": "verbietest", "er_sie_es": "verbietet", "wir": "verbieten", "ihr": "verbietet", "sie_Sie": "verbieten" },
      "praeteritum": { "ich": "verbot", "du": "verbotest", "er_sie_es": "verbot", "wir": "verboten", "ihr": "verbotet", "sie_Sie": "verboten" },
      "perfekt": "hat verboten",
      "imperativ": "Verbiete!/Verbietet!/Verbieten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Arzt hat ihm das Rauchen verboten.", "id": "Dokter melarangnya untuk merokok." },
      { "de": "Parken ist hier streng verboten.", "id": "Parkir dilarang keras di sini." }
    ]
  },
  {
    "id": "versprechen-171",
    "level": "B1",
    "infinitiv": "versprechen",
    "arti": "berjanji",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verspreche", "du": "versprichst", "er_sie_es": "verspricht", "wir": "versprechen", "ihr": "versprecht", "sie_Sie": "versprechen" },
      "praeteritum": { "ich": "versprach", "du": "versprachst", "er_sie_es": "versprach", "wir": "versprachen", "ihr": "verspracht", "sie_Sie": "versprachen" },
      "perfekt": "hat versprochen",
      "imperativ": "Versprich!/Versprecht!/Versprechen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich verspreche dir, dass ich pünktlich bin.", "id": "Saya berjanji padamu bahwa saya akan tepat waktu." },
      { "de": "Er hat sein Versprechen gehalten.", "id": "Dia telah menepati janjinya." }
    ]
  },
  {
    "id": "brechen-172",
    "level": "B1",
    "infinitiv": "brechen",
    "arti": "mematahkan, memecahkan, melanggar",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "breche", "du": "brichst", "er_sie_es": "bricht", "wir": "brechen", "ihr": "brecht", "sie_Sie": "brechen" },
      "praeteritum": { "ich": "brach", "du": "brachst", "er_sie_es": "brach", "wir": "brachen", "ihr": "bracht", "sie_Sie": "brachen" },
      "perfekt": "hat gebrochen",
      "imperativ": "Brich!/Brecht!/Brechen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er hat sich beim Skifahren das Bein gebrochen.", "id": "Kakinya patah saat bermain ski." },
      { "de": "Du darfst die Regeln nicht brechen.", "id": "Kamu tidak boleh melanggar aturan." }
    ]
  },
  {
    "id": "tragen-173",
    "level": "A2",
    "infinitiv": "tragen",
    "arti": "membawa beban, memakai baju",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "trage", "du": "trägst", "er_sie_es": "trägt", "wir": "tragen", "ihr": "tragt", "sie_Sie": "tragen" },
      "praeteritum": { "ich": "trug", "du": "trugst", "er_sie_es": "trug", "wir": "trugen", "ihr": "trugt", "sie_Sie": "trugen" },
      "perfekt": "hat getragen",
      "imperativ": "Trag!/Tragt!/Tragen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er trägt einen schweren Koffer.", "id": "Dia membawa koper yang berat." },
      { "de": "Sie trägt heute ein schönes blaues Kleid.", "id": "Dia mengenakan gaun biru yang cantik hari ini." }
    ]
  },
  {
    "id": "ziehen-174",
    "level": "A2",
    "infinitiv": "ziehen",
    "arti": "menarik, berpindah",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "ziehe", "du": "ziehst", "er_sie_es": "zieht", "wir": "ziehen", "ihr": "zieht", "sie_Sie": "ziehen" },
      "praeteritum": { "ich": "zog", "du": "zogst", "er_sie_es": "zog", "wir": "zogen", "ihr": "zogt", "sie_Sie": "zogen" },
      "perfekt": "hat gezogen",
      "imperativ": "Zieh!/Zieht!/Ziehen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ziehen Sie bitte an der Tür, nicht drücken.", "id": "Silakan tarik pintunya, jangan didorong." },
      { "de": "Das Pferd zieht den Wagen.", "id": "Kuda itu menarik gerobak." }
    ]
  },
  {
    "id": "druecken-175",
    "level": "A2",
    "infinitiv": "drücken",
    "arti": "menekan, memencet, memeluk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "drücke", "du": "drückst", "er_sie_es": "drückt", "wir": "drücken", "ihr": "drückt", "sie_Sie": "drücken" },
      "praeteritum": { "ich": "drückte", "du": "drücktest", "er_sie_es": "drückte", "wir": "drückten", "ihr": "drücktet", "sie_Sie": "drückten" },
      "perfekt": "hat gedrückt",
      "imperativ": "Drück!/Drückt!/Drücken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Drücken Sie den roten Knopf!", "id": "Tekan tombol merah itu!" },
      { "de": "Sie drückte ihr Kind fest an sich.", "id": "Dia memeluk erat anaknya." }
    ]
  },
  {
    "id": "schieben-176",
    "level": "B1",
    "infinitiv": "schieben",
    "arti": "mendorong perlahan/menggeser",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "schiebe", "du": "schiebst", "er_sie_es": "schiebt", "wir": "schieben", "ihr": "schiebt", "sie_Sie": "schieben" },
      "praeteritum": { "ich": "schob", "du": "schobst", "er_sie_es": "schob", "wir": "schoben", "ihr": "schobt", "sie_Sie": "schoben" },
      "perfekt": "hat geschoben",
      "imperativ": "Schieb!/Schiebt!/Schieben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er schiebt sein kaputtes Fahrrad.", "id": "Dia mendorong sepedanya yang rusak." },
      { "de": "Schieb den Stuhl etwas näher an den Tisch.", "id": "Geser kursi itu sedikit lebih dekat ke meja." }
    ]
  },
  {
    "id": "werfen-177",
    "level": "A2",
    "infinitiv": "werfen",
    "arti": "melempar",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "werfe", "du": "wirfst", "er_sie_es": "wirft", "wir": "werfen", "ihr": "werft", "sie_Sie": "werfen" },
      "praeteritum": { "ich": "warf", "du": "warfst", "er_sie_es": "warf", "wir": "warfen", "ihr": "warft", "sie_Sie": "warfen" },
      "perfekt": "hat geworfen",
      "imperativ": "Wirf!/Werft!/Werfen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wirf mir bitte den Ball zu!", "id": "Tolong lemparkan bolanya padaku!" },
      { "de": "Er warf den Brief in den Mülleimer.", "id": "Dia melempar surat itu ke tempat sampah." }
    ]
  },
  {
    "id": "fangen-178",
    "level": "A2",
    "infinitiv": "fangen",
    "arti": "menangkap",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "fange", "du": "fängst", "er_sie_es": "fängt", "wir": "fangen", "ihr": "fangt", "sie_Sie": "fangen" },
      "praeteritum": { "ich": "fing", "du": "fingst", "er_sie_es": "fing", "wir": "fingen", "ihr": "fingt", "sie_Sie": "fingen" },
      "perfekt": "hat gefangen",
      "imperativ": "Fang!/Fangt!/Fangen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Katze hat eine Maus gefangen.", "id": "Kucing itu menangkap seekor tikus." },
      { "de": "Kannst du den Ball fangen?", "id": "Bisakah kamu menangkap bolanya?" }
    ]
  },
  {
    "id": "halten-179",
    "level": "A2",
    "infinitiv": "halten",
    "arti": "memegang, berhenti (kendaraan)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "halte", "du": "hältst", "er_sie_es": "hält", "wir": "halten", "ihr": "haltet", "sie_Sie": "halten" },
      "praeteritum": { "ich": "hielt", "du": "hieltst", "er_sie_es": "hielt", "wir": "hielten", "ihr": "hieltet", "sie_Sie": "hielten" },
      "perfekt": "hat gehalten",
      "imperativ": "Halt!/Haltet!/Halten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Bus hält direkt vor dem Bahnhof.", "id": "Busnya berhenti tepat di depan stasiun." },
      { "de": "Halte bitte kurz meine Tasche.", "id": "Tolong pegang tas saya sebentar." }
    ]
  },
  {
    "id": "behalten-180",
    "level": "B1",
    "infinitiv": "behalten",
    "arti": "menyimpan, menahan untuk diri sendiri",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "behalte", "du": "behältst", "er_sie_es": "behält", "wir": "behalten", "ihr": "behaltet", "sie_Sie": "behalten" },
      "praeteritum": { "ich": "behielt", "du": "behieltst", "er_sie_es": "behielt", "wir": "behielten", "ihr": "behieltet", "sie_Sie": "behielten" },
      "perfekt": "hat behalten",
      "imperativ": "Behalt!/Behaltet!/Behalten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Du kannst das Restgeld behalten.", "id": "Kamu boleh menyimpan uang kembaliannya." },
      { "de": "Ich kann mir Namen nur schwer behalten.", "id": "Saya sulit mengingat/menyimpan nama di memori." }
    ]
  },
  {
    "id": "erhalten-181",
    "level": "B1",
    "infinitiv": "erhalten",
    "arti": "menerima (formal), melestarikan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "erhalte", "du": "erhältst", "er_sie_es": "erhält", "wir": "erhalten", "ihr": "erhaltet", "sie_Sie": "erhalten" },
      "praeteritum": { "ich": "erhielt", "du": "erhieltst", "er_sie_es": "erhielt", "wir": "erhielten", "ihr": "erhieltet", "sie_Sie": "erhielten" },
      "perfekt": "hat erhalten",
      "imperativ": "Erhalte!/Erhaltet!/Erhalten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Haben Sie meine E-Mail erhalten?", "id": "Apakah Anda telah menerima email saya?" },
      { "de": "Wir müssen historische Gebäude erhalten.", "id": "Kita harus melestarikan bangunan-bangunan bersejarah." }
    ]
  },
  {
    "id": "unterhalten-182",
    "level": "B1",
    "infinitiv": "sich unterhalten",
    "arti": "mengobrol, berbincang",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "unterhalte mich", "du": "unterhältst dich", "er_sie_es": "unterhält sich", "wir": "unterhalten uns", "ihr": "unterhaltet euch", "sie_Sie": "unterhalten sich" },
      "praeteritum": { "ich": "unterhielt mich", "du": "unterhieltst dich", "er_sie_es": "unterhielt sich", "wir": "unterhielten uns", "ihr": "unterhieltet euch", "sie_Sie": "unterhielten sich" },
      "perfekt": "hat sich unterhalten",
      "imperativ": "Unterhalte dich!/Unterhaltet euch!/Unterhalten Sie sich!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }, { "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Wir haben uns lange über Politik unterhalten.", "id": "Kami telah berbincang lama mengenai politik." },
      { "de": "Ich unterhalte mich gern mit meinen Nachbarn.", "id": "Saya senang mengobrol dengan tetangga saya." }
    ]
  },
  {
    "id": "lassen-183",
    "level": "B1",
    "infinitiv": "lassen",
    "arti": "membiarkan, menyuruh (orang lain melakukan sesuatu)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "lasse", "du": "lässt", "er_sie_es": "lässt", "wir": "lassen", "ihr": "lasst", "sie_Sie": "lassen" },
      "praeteritum": { "ich": "ließ", "du": "ließest", "er_sie_es": "ließ", "wir": "ließen", "ihr": "ließt", "sie_Sie": "ließen" },
      "perfekt": "hat gelassen",
      "imperativ": "Lass!/Lasst!/Lassen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Lass mich bitte in Ruhe!", "id": "Tolong biarkan saya tenang!" },
      { "de": "Ich lasse mein Auto in der Werkstatt reparieren.", "id": "Saya menyuruh bengkel memperbaiki mobil saya." }
    ]
  },
  {
    "id": "verlassen-184",
    "level": "B1",
    "infinitiv": "verlassen",
    "arti": "meninggalkan tempat, mengandalkan (sich verlassen)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verlasse", "du": "verlässt", "er_sie_es": "verlässt", "wir": "verlassen", "ihr": "verlasst", "sie_Sie": "verlassen" },
      "praeteritum": { "ich": "verließ", "du": "verließest", "er_sie_es": "verließ", "wir": "verließen", "ihr": "verließt", "sie_Sie": "verließen" },
      "perfekt": "hat verlassen",
      "imperativ": "Verlass!/Verlasst!/Verlassen Sie!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Er hat das Haus früh am Morgen verlassen.", "id": "Dia meninggalkan rumah pada pagi-pagi sekali." },
      { "de": "Du kannst dich voll auf mich verlassen.", "id": "Kamu bisa mengandalkan saya sepenuhnya." }
    ]
  },
  {
    "id": "zulassen-185",
    "level": "B2",
    "infinitiv": "zulassen",
    "arti": "mengizinkan secara resmi, mendaftarkan kendaraan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "lasse zu", "du": "lässt zu", "er_sie_es": "lässt zu", "wir": "lassen zu", "ihr": "lasst zu", "sie_Sie": "lassen zu" },
      "praeteritum": { "ich": "ließ zu", "du": "ließest zu", "er_sie_es": "ließ zu", "wir": "ließen zu", "ihr": "ließt zu", "sie_Sie": "ließen zu" },
      "perfekt": "hat zugelassen",
      "imperativ": "Lass zu!/Lasst zu!/Lassen Sie zu!"
    },
    "contoh_kalimat": [
      { "de": "Zur Prüfung sind nur eingeschriebene Studenten zugelassen.", "id": "Hanya mahasiswa terdaftar yang diizinkan ikut ujian." },
      { "de": "Das neue Medikament wurde endlich zugelassen.", "id": "Obat baru itu akhirnya disetujui secara resmi." }
    ]
  },
  {
    "id": "nachlassen-186",
    "level": "B2",
    "infinitiv": "nachlassen",
    "arti": "mereda, menurun intensitasnya",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "lasse nach", "du": "lässt nach", "er_sie_es": "lässt nach", "wir": "lassen nach", "ihr": "lasst nach", "sie_Sie": "lassen nach" },
      "praeteritum": { "ich": "ließ nach", "du": "ließest nach", "er_sie_es": "ließ nach", "wir": "ließen nach", "ihr": "ließt nach", "sie_Sie": "ließen nach" },
      "perfekt": "hat nachgelassen",
      "imperativ": "Lass nach!/Lasst nach!/Lassen Sie nach!"
    },
    "contoh_kalimat": [
      { "de": "Der Regen lässt allmählich nach.", "id": "Hujan perlahan-lahan mulai mereda." },
      { "de": "Seine Konzentration hat spürbar nachgelassen.", "id": "Konsentrasinya menurun drastis." }
    ]
  },
  {
    "id": "scheiden-187",
    "level": "B2",
    "infinitiv": "scheiden",
    "arti": "bercerai, memisahkan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "scheide", "du": "scheidest", "er_sie_es": "scheidet", "wir": "scheiden", "ihr": "scheidet", "sie_Sie": "scheiden" },
      "praeteritum": { "ich": "schied", "du": "schiedest", "er_sie_es": "schied", "wir": "schieden", "ihr": "schiedet", "sie_Sie": "schieden" },
      "perfekt": "hat geschieden",
      "imperativ": "Scheide!/Scheidet!/Scheiden Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Ehepaar hat sich nach zehn Jahren scheiden lassen.", "id": "Pasangan suami-istri itu bercerai setelah sepuluh tahun." },
      { "de": "Hier scheiden sich die Geister.", "id": "Di sini pendapat mulai berbeda-beda." }
    ]
  },
  {
    "id": "unterscheiden-188",
    "level": "B1",
    "infinitiv": "unterscheiden",
    "arti": "membedakan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "unterscheide", "du": "unterscheidest", "er_sie_es": "unterscheidet", "wir": "unterscheiden", "ihr": "unterscheidet", "sie_Sie": "unterscheiden" },
      "praeteritum": { "ich": "unterschied", "du": "unterschiedest", "er_sie_es": "unterschied", "wir": "unterschieden", "ihr": "unterschiedet", "sie_Sie": "unterschieden" },
      "perfekt": "hat unterschieden",
      "imperativ": "Unterscheide!/Unterscheidet!/Unterscheiden Sie!"
    },
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Man muss zwischen Theorie und Praxis unterscheiden.", "id": "Orang harus membedakan antara teori dan praktik." },
      { "de": "Die Zwillinge lassen sich kaum unterscheiden.", "id": "Si kembar hampir tidak bisa dibedakan." }
    ]
  },
  {
    "id": "ausscheiden-189",
    "level": "C1",
    "infinitiv": "ausscheiden",
    "arti": "gugur (kompetisi), mengundurkan diri",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "scheide aus", "du": "scheidest aus", "er_sie_es": "scheidet aus", "wir": "scheiden aus", "ihr": "scheidet aus", "sie_Sie": "scheiden aus" },
      "praeteritum": { "ich": "schied aus", "du": "schiedest aus", "er_sie_es": "schied aus", "wir": "schieden aus", "ihr": "schiedet aus", "sie_Sie": "schieden aus" },
      "perfekt": "ist ausgeschieden",
      "imperativ": "Scheide aus!/Scheidet aus!/Scheiden Sie aus!"
    },
    "praepositionen": [{ "präposition": "aus", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Die Mannschaft ist bereits im Viertelfinale ausgeschieden.", "id": "Tim tersebut sudah gugur di babak perempat final." },
      { "de": "Er scheidet Ende des Monats aus dem Unternehmen aus.", "id": "Dia mengundurkan diri dari perusahaan pada akhir bulan." }
    ]
  },
  {
    "id": "schweigen-190",
    "level": "B2",
    "infinitiv": "schweigen",
    "arti": "diam, bungkam",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "schweige", "du": "schweigst", "er_sie_es": "schweigt", "wir": "schweigen", "ihr": "schweigt", "sie_Sie": "schweigen" },
      "praeteritum": { "ich": "schwieg", "du": "wiegst", "er_sie_es": "schwieg", "wir": "schwiegen", "ihr": "schwiegt", "sie_Sie": "schwiegen" },
      "perfekt": "hat geschwiegen",
      "imperativ": "Schweig!/Schweigt!/Schweigen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Angeklagte schwieg vor Gericht.", "id": "Terdakwa bungkam di depan pengadilan." },
      { "de": "Reden ist Silber, Schweigen ist Gold.", "id": "Bicara itu perak, diam itu emas." }
    ]
  },
  {
    "id": "verschweigen-191",
    "level": "C1",
    "infinitiv": "verschweigen",
    "arti": "merahasiakan fakta, menyembunyikan kebenaran",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verschweige", "du": "verschweigst", "er_sie_es": "verschweigt", "wir": "verschweigen", "ihr": "verschweigt", "sie_Sie": "verschweigen" },
      "praeteritum": { "ich": "verschwieg", "du": "verschwiegst", "er_sie_es": "verschwieg", "wir": "verschwiegen", "ihr": "verschwiegt", "sie_Sie": "verschwiegen" },
      "perfekt": "hat verschwiegen",
      "imperativ": "Verschweige!/Verschweigt!/Verschweigen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er hat mir diesen wichtigen Fehler wissentlich verschwiegen.", "id": "Dia sengaja merahasiakan kesalahan penting ini dari saya." },
      { "de": "Die Wahrheit lässt sich nicht auf Dauer verschweigen.", "id": "Kebenaran tidak bisa disembunyikan selamanya." }
    ]
  },
  {
    "id": "leiden-192",
    "level": "B1",
    "infinitiv": "leiden",
    "arti": "menderita",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "leide", "du": "leidest", "er_sie_es": "leidet", "wir": "leiden", "ihr": "leidet", "sie_Sie": "leiden" },
      "praeteritum": { "ich": "litt", "du": "littest", "er_sie_es": "litt", "wir": "litten", "ihr": "littet", "sie_Sie": "litten" },
      "perfekt": "hat gelitten",
      "imperativ": "Leide!/Leidet!/Leiden Sie!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }, { "präposition": "unter", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Viele Menschen leiden an Heuschnupfen.", "id": "Banyak orang menderita alergi serbuk sari." },
      { "de": "Er leidet sehr unter dem enormen Arbeitsdruck.", "id": "Dia sangat menderita di bawah tekanan kerja yang besar." }
    ]
  },
  {
    "id": "vermeiden-193",
    "level": "B2",
    "infinitiv": "vermeiden",
    "arti": "menghindari",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "vermeide", "du": "vermeidest", "er_sie_es": "vermeidet", "wir": "vermeiden", "ihr": "vermeidet", "sie_Sie": "vermeiden" },
      "praeteritum": { "ich": "vermied", "du": "vermiedest", "er_sie_es": "vermied", "wir": "vermieden", "ihr": "vermietet", "sie_Sie": "vermieden" },
      "perfekt": "hat vermieden",
      "imperativ": "Vermeide!/Vermeidet!/Vermeiden Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir sollten unnötigen Stress möglichst vermeiden.", "id": "Kita sebaiknya sebisa mungkin menghindari stres yang tidak perlu." },
      { "de": "Der Unfall konnte zum Glück vermieden werden.", "id": "Untunglah kecelakaan itu berhasil dihindari." }
    ]
  },
  {
    "id": "streiten-194",
    "level": "A2",
    "infinitiv": "streiten",
    "arti": "bertengkar",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "streite", "du": "streitest", "er_sie_es": "streitet", "wir": "streiten", "ihr": "streitet", "sie_Sie": "streiten" },
      "praeteritum": { "ich": "stritt", "du": "strittest", "er_sie_es": "stritt", "wir": "stritten", "ihr": "strittet", "sie_Sie": "stritten" },
      "perfekt": "hat gestritten",
      "imperativ": "Streite!/Streitet!/Streiten Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }, { "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Die Geschwister streiten sich oft um Spielzeug.", "id": "Kakak-beradik itu sering bertengkar memperebutkan mainan." },
      { "de": "Streitet bitte nicht vor den Kindern!", "id": "Tolong jangan bertengkar di depan anak-anak!" }
    ]
  },
  {
    "id": "abstreiten-195",
    "level": "C1",
    "infinitiv": "abstreiten",
    "arti": "menyangkal keterlibatan/kesalahan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "streite ab", "du": "streitest ab", "er_sie_es": "streitet ab", "wir": "streiten ab", "ihr": "streitet ab", "sie_Sie": "streiten ab" },
      "praeteritum": { "ich": "stritt ab", "du": "strittest ab", "er_sie_es": "stritt ab", "wir": "stritten ab", "ihr": "strittet ab", "sie_Sie": "stritten ab" },
      "perfekt": "hat abgestritten",
      "imperativ": "Streite ab!/Streitet ab!/Streiten Sie ab!"
    },
    "contoh_kalimat": [
      { "de": "Der Verdächtige stritt alle Vorwürfe entschieden ab.", "id": "Tersangka menyangkal semua tuduhan dengan tegas." },
      { "de": "Es lässt sich nicht abstreiten, dass Fehler gemacht wurden.", "id": "Tidak bisa disangkal bahwa kesalahan memang telah terjadi." }
    ]
  },
  {
    "id": "bieten-196",
    "level": "B1",
    "infinitiv": "bieten",
    "arti": "menawarkan peluang/pemandangan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "biete", "du": "bietest", "er_sie_es": "bietet", "wir": "bieten", "ihr": "bietet", "sie_Sie": "bieten" },
      "praeteritum": { "ich": "bot", "du": "botest", "er_sie_es": "bot", "wir": "boten", "ihr": "botet", "sie_Sie": "boten" },
      "perfekt": "hat geboten",
      "imperativ": "Biete!/Bietet!/Bieten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Hotel bietet einen herrlichen Blick auf die Alpen.", "id": "Hotel itu menawarkan pemandangan indah ke arah Pegunungan Alpen." },
      { "de": "Dieses Projekt bietet uns eine große Chance.", "id": "Proyek ini menawarkan kita sebuah peluang besar." }
    ]
  },
  {
    "id": "anbieten-197",
    "level": "A2",
    "infinitiv": "anbieten",
    "arti": "menawarkan (makanan/jasa secara langsung)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "biete an", "du": "bietest an", "er_sie_es": "bietet an", "wir": "bieten an", "ihr": "bietet an", "sie_Sie": "bieten an" },
      "praeteritum": { "ich": "bot an", "du": "botest an", "er_sie_es": "bot an", "wir": "boten an", "ihr": "botet an", "sie_Sie": "boten an" },
      "perfekt": "hat angeboten",
      "imperativ": "Biete an!/Bietet an!/Bieten Sie an!"
    },
    "contoh_kalimat": [
      { "de": "Darf ich Ihnen eine Tasse Tee anbieten?", "id": "Bolehkah saya menawarkan secangkir teh kepada Anda?" },
      { "de": "Die Firma bietet gute Weiterbildungen an.", "id": "Perusahaan itu menawarkan pelatihan lanjutan yang bagus." }
    ]
  },
  {
    "id": "verbieten-198",
    "level": "B2",
    "infinitiv": "unterbieten",
    "arti": "menawar dengan harga lebih rendah",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "unterbiete", "du": "unterbietest", "er_sie_es": "unterbietet", "wir": "unterbieten", "ihr": "unterbietet", "sie_Sie": "unterbieten" },
      "praeteritum": { "ich": "unterbot", "du": "unterbotest", "er_sie_es": "unterbot", "wir": "unterboten", "ihr": "unterbotet", "sie_Sie": "unterboten" },
      "perfekt": "hat unterboten",
      "imperativ": "Unterbiete!/Unterbietet!/Unterbieten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Konkurrenz versuchte, unseren Preis zu unterbieten.", "id": "Pesaing mencoba menawar harga lebih rendah dari kami." },
      { "de": "Der Sportler hat den bisherigen Weltrekord unterboten.", "id": "Atlet itu mempertajam/memperpendek rekor dunia sebelumnya." }
    ]
  },
  {
    "id": "gebieten-199",
    "level": "C2",
    "infinitiv": "gebieten",
    "arti": "menuntut kepatuhan, memerintahkan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "gebiete", "du": "gebietest", "er_sie_es": "gebietet", "wir": "gebieten", "ihr": "gebietet", "sie_Sie": "gebieten" },
      "praeteritum": { "ich": "gebot", "du": "gebotest", "er_sie_es": "gebot", "wir": "geboten", "ihr": "gebotet", "sie_Sie": "geboten" },
      "perfekt": "hat geboten",
      "imperativ": "Gebiete!/Gebietet!/Gebieten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Anstand gebietet es, pünktlich zu erscheinen.", "id": "Kesopanan menuntut seseorang untuk hadir tepat waktu." },
      { "de": "Man muss dieser verhängnisvollen Entwicklung Einhalt gebieten.", "id": "Orang harus menghentikan perkembangan yang membawa bencana ini." }
    ]
  },
  {
    "id": "widerrufen-200",
    "level": "C2",
    "infinitiv": "widerrufen",
    "arti": "mencabut kembali pernyataan/kontrak",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "widerrufe", "du": "widerrufst", "er_sie_es": "widerruft", "wir": "widerrufen", "ihr": "widerruft", "sie_Sie": "widerrufen" },
      "praeteritum": { "ich": "widerrief", "du": "widerriefst", "er_sie_es": "widerrief", "wir": "widerriefen", "ihr": "widerrieft", "sie_Sie": "widerriefen" },
      "perfekt": "hat widerrufen",
      "imperativ": "Widerrufe!/Widerruft!/Widerrufen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Zeuge hat seine frühere Aussage vollständig widerrufen.", "id": "Saksi itu telah mencabut kembali seluruh keterangan sebelumnya." },
      { "de": "Sie haben das Recht, diesen Vertrag innerhalb von vierzehn Tagen zu widerrufen.", "id": "Anda berhak mencabut kontrak ini dalam kurun waktu empat belas hari." }
    ]
  },
  {
    "id": "leben-201",
    "level": "A1",
    "infinitiv": "leben",
    "arti": "hidup, tinggal",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lebe", "du": "lebst", "er_sie_es": "lebt", "wir": "leben", "ihr": "lebt", "sie_Sie": "leben" },
      "praeteritum": { "ich": "lebte", "du": "lebtest", "er_sie_es": "lebte", "wir": "lebten", "ihr": "lebtet", "sie_Sie": "lebten" },
      "perfekt": "hat gelebt",
      "imperativ": "Lebe!/Lebt!/Leben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich lebe seit fünf Jahren in Köln.", "id": "Saya hidup sejak lima tahun di Köln." },
      { "de": "Er lebt sehr gesund.", "id": "Dia hidup dengan sangat sehat." }
    ]
  },
  {
    "id": "ueberleben-202",
    "level": "B2",
    "infinitiv": "überleben",
    "arti": "bertahan hidup, selamat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "überlebe", "du": "überlebst", "er_sie_es": "überlebt", "wir": "überleben", "ihr": "überlebt", "sie_Sie": "überleben" },
      "praeteritum": { "ich": "überlebte", "du": "überlebtest", "er_sie_es": "überlebte", "wir": "überlebten", "ihr": "überlebtet", "sie_Sie": "überlebten" },
      "perfekt": "hat überlebt",
      "imperativ": "Überlebe!/Überlebt!/Überleben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Alle Passagiere haben das Unglück überlebt.", "id": "Semua penumpang selamat dari kecelakaan itu." },
      { "de": "Diese Pflanze kann ohne viel Wasser überleben.", "id": "Tanaman ini bisa bertahan hidup tanpa banyak air." }
    ]
  },
  {
    "id": "sterben-203",
    "level": "A2",
    "infinitiv": "sterben",
    "arti": "meninggal dunia",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "sterbe", "du": "stirbst", "er_sie_es": "stirbt", "wir": "sterben", "ihr": "sterbt", "sie_Sie": "sterben" },
      "praeteritum": { "ich": "starb", "du": "starbst", "er_sie_es": "starb", "wir": "starben", "ihr": "starbt", "sie_Sie": "starben" },
      "perfekt": "ist gestorben",
      "imperativ": "Stirb!/Sterbt!/Sterben Sie!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Sein Großvater starb im hohen Alter.", "id": "Kakeknya meninggal di usia lanjut." },
      { "de": "Er ist an einer schweren Krankheit gestorben.", "id": "Dia meninggal karena penyakit yang parah." }
    ]
  },
  {
    "id": "geboren-werden-204",
    "level": "A1",
    "infinitiv": "geboren werden",
    "arti": "dilahirkan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "werde geboren", "du": "wirst geboren", "er_sie_es": "wird geboren", "wir": "werden geboren", "ihr": "werdet geboren", "sie_Sie": "werden geboren" },
      "praeteritum": { "ich": "wurde geboren", "du": "wurdest geboren", "er_sie_es": "wurde geboren", "wir": "wurden geboren", "ihr": "wurdet geboren", "sie_Sie": "wurden geboren" },
      "perfekt": "ist geboren worden",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Ich bin in Jakarta geboren.", "id": "Saya lahir di Jakarta." },
      { "de": "Wann wurdest du geboren?", "id": "Kapan kamu dilahirkan?" }
    ]
  },
  {
    "id": "wachsen-205",
    "level": "B1",
    "infinitiv": "wachsen",
    "arti": "tumbuh, berkembang",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "wachse", "du": "wächst", "er_sie_es": "wächst", "wir": "wachsen", "ihr": "wachst", "sie_Sie": "wachsen" },
      "praeteritum": { "ich": "wuchs", "du": "wuchsest", "er_sie_es": "wuchs", "wir": "wuchsen", "ihr": "wuchst", "sie_Sie": "wuchsen" },
      "perfekt": "ist gewachsen",
      "imperativ": "Wachse!/Wachst!/Wachsen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Kinder wachsen erstaunlich schnell.", "id": "Anak-anak tumbuh dengan sangat cepat." },
      { "de": "Die Wirtschaft wächst in diesem Jahr stetig.", "id": "Perekonomian tumbuh stabil tahun ini." }
    ]
  },
  {
    "id": "aufwachsen-206",
    "level": "B1",
    "infinitiv": "aufwachsen",
    "arti": "tumbuh besar (masa kanak-kanak)",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "wachse auf", "du": "wächst auf", "er_sie_es": "wächst auf", "wir": "wachsen auf", "ihr": "wachst auf", "sie_Sie": "wachsen auf" },
      "praeteritum": { "ich": "wuchs auf", "du": "wuchsest auf", "er_sie_es": "wuchs auf", "wir": "wuchsen auf", "ihr": "wuchst auf", "sie_Sie": "wuchsen auf" },
      "perfekt": "ist aufgewachsen",
      "imperativ": "Wachse auf!/Wachst auf!/Wachsen Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Ich bin zweisprachig aufgewachsen.", "id": "Saya tumbuh besar menguasai dua bahasa." },
      { "de": "Er ist auf dem Land aufgewachsen.", "id": "Dia dibesarkan di pedesaan." }
    ]
  },
  {
    "id": "erziehen-207",
    "level": "B2",
    "infinitiv": "erziehen",
    "arti": "mendidik, mengasuh",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "erziehe", "du": "erziehst", "er_sie_es": "erzieht", "wir": "erziehen", "ihr": "erzieht", "sie_Sie": "erziehen" },
      "praeteritum": { "ich": "erzog", "du": "erzogst", "er_sie_es": "erzog", "wir": "erzogen", "ihr": "erzogt", "sie_Sie": "erzogen" },
      "perfekt": "hat erzogen",
      "imperativ": "Erziehe!/Erzieht!/Erziehen Sie!"
    },
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Die Eltern erziehen ihre Kinder zur Selbstständigkeit.", "id": "Orang tua mendidik anak-anak mereka agar mandiri." },
      { "de": "Er wurde sehr streng erzogen.", "id": "Dia diasuh dengan sangat disiplin/ketat." }
    ]
  },
  {
    "id": "heiraten-208",
    "level": "A2",
    "infinitiv": "heiraten",
    "arti": "menikah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "heirate", "du": "heiratest", "er_sie_es": "heiratet", "wir": "heiraten", "ihr": "heiratet", "sie_Sie": "heiraten" },
      "praeteritum": { "ich": "heiratete", "du": "heiratetest", "er_sie_es": "heiratete", "wir": "heirateten", "ihr": "heiratetet", "sie_Sie": "heirateten" },
      "perfekt": "hat geheiratet",
      "imperativ": "Heirate!/Heiratet!/Heiraten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie heiraten nächsten Monat in Italien.", "id": "Mereka menikah bulan depan di Italia." },
      { "de": "Willst du mich heiraten?", "id": "Maukah kamu menikah denganku?" }
    ]
  },
  {
    "id": "lieben-209",
    "level": "A1",
    "infinitiv": "lieben",
    "arti": "mencintai",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "liebe", "du": "liebst", "er_sie_es": "liebt", "wir": "lieben", "ihr": "liebt", "sie_Sie": "lieben" },
      "praeteritum": { "ich": "liebte", "du": "liebtest", "er_sie_es": "liebte", "wir": "liebten", "ihr": "liebtet", "sie_Sie": "liebten" },
      "perfekt": "hat geliebt",
      "imperativ": "Liebe!/Liebt!/Lieben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich liebe dich von ganzem Herzen.", "id": "Aku mencintaimu dengan sepenuh hati." },
      { "de": "Er liebt klassische Musik über alles.", "id": "Dia mencintai musik klasik di atas segalanya." }
    ]
  },
  {
    "id": "hassen-210",
    "level": "A2",
    "infinitiv": "hassen",
    "arti": "membenci",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "hasse", "du": "hasst", "er_sie_es": "hasst", "wir": "hassen", "ihr": "hasst", "sie_Sie": "hassen" },
      "praeteritum": { "ich": "hasste", "du": "hasstest", "er_sie_es": "hasste", "wir": "hassten", "ihr": "hasstet", "sie_Sie": "hassten" },
      "perfekt": "hat gehasst",
      "imperativ": "Hasse!/Hasst!/Hassen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich hasse es, früh am Morgen aufzustehen.", "id": "Saya benci bangun pagi-pagi sekali." },
      { "de": "Niemand sollte aus Vorurteilen hassen.", "id": "Tidak seorang pun boleh membenci karena prasangka." }
    ]
  },
  {
    "id": "lachen-211",
    "level": "A1",
    "infinitiv": "lachen",
    "arti": "tertawa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lache", "du": "lachst", "er_sie_es": "lacht", "wir": "lachen", "ihr": "lacht", "sie_Sie": "lachen" },
      "praeteritum": { "ich": "lachte", "du": "lachtest", "er_sie_es": "lachte", "wir": "lachten", "ihr": "lachtet", "sie_Sie": "lachten" },
      "perfekt": "hat gelacht",
      "imperativ": "Lach!/Lacht!/Lachen Sie!"
    },
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Wir haben viel über den Witz gelacht.", "id": "Kami banyak tertawa mendengar lelucon itu." },
      { "de": "Lachen ist die beste Medizin.", "id": "Tertawa adalah obat terbaik." }
    ]
  },
  {
    "id": "laecheln-212",
    "level": "A2",
    "infinitiv": "lächeln",
    "arti": "tersenyum",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lächle", "du": "lächelst", "er_sie_es": "lächelt", "wir": "lächeln", "ihr": "lächelt", "sie_Sie": "lächeln" },
      "praeteritum": { "ich": "lächelte", "du": "lächeltest", "er_sie_es": "lächelte", "wir": "lächelten", "ihr": "lächeltet", "sie_Sie": "lächelten" },
      "perfekt": "hat gelächelt",
      "imperativ": "Lächle!/Lächelt!/Lächeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie lächelte freundlich in die Kamera.", "id": "Dia tersenyum ramah ke arah kamera." },
      { "de": "Er lächelte, als er die Nachricht las.", "id": "Dia tersenyum saat membaca pesan itu." }
    ]
  },
  {
    "id": "weinen-213",
    "level": "A2",
    "infinitiv": "weinen",
    "arti": "menangis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "weine", "du": "weinst", "er_sie_es": "weint", "wir": "weinen", "ihr": "weint", "sie_Sie": "weinen" },
      "praeteritum": { "ich": "weinte", "du": "weintest", "er_sie_es": "weinte", "wir": "weinten", "ihr": "weintet", "sie_Sie": "weinten" },
      "perfekt": "hat geweint",
      "imperativ": "Weine nicht!/Weint nicht!"
    },
    "contoh_kalimat": [
      { "de": "Das kleine Kind weint nach seiner Mutter.", "id": "Anak kecil itu menangis mencari ibunya." },
      { "de": "Sie weinte vor Freude.", "id": "Dia menangis karena bahagia." }
    ]
  },
  {
    "id": "schreien-214",
    "level": "B1",
    "infinitiv": "schreien",
    "arti": "berteriak keras",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "schreie", "du": "schreist", "er_sie_es": "schreit", "wir": "schreien", "ihr": "schreit", "sie_Sie": "schreien" },
      "praeteritum": { "ich": "schrie", "du": "schriest", "er_sie_es": "schrie", "wir": "schrien", "ihr": "schriet", "sie_Sie": "schrien" },
      "perfekt": "hat geschrien",
      "imperativ": "Schrei nicht!/Schreit nicht!"
    },
    "contoh_kalimat": [
      { "de": "Schrei mich bitte nicht so an!", "id": "Tolong jangan berteriak padaku seperti itu!" },
      { "de": "Die Fans schrien vor Begeisterung.", "id": "Para penggemar berteriak saking antusiasnya." }
    ]
  },
  {
    "id": "fluestern-215",
    "level": "B2",
    "infinitiv": "flüstern",
    "arti": "berbisik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "flüstere", "du": "flüsterst", "er_sie_es": "flüstert", "wir": "flüstern", "ihr": "flüstert", "sie_Sie": "flüstern" },
      "praeteritum": { "ich": "flüsterte", "du": "flüstertest", "er_sie_es": "flüsterte", "wir": "flüsterten", "ihr": "flüstertet", "sie_Sie": "flüsterten" },
      "perfekt": "hat geflüstert",
      "imperativ": "Flüstere!/Flüstert!/Flüstern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie flüsterte ihm ein Geheimnis ins Ohr.", "id": "Dia membisikkan sebuah rahasia ke telinganya." },
      { "de": "In der Bibliothek muss man flüstern.", "id": "Di perpustakaan orang harus berbisik." }
    ]
  },
  {
    "id": "atmen-216",
    "level": "A2",
    "infinitiv": "atmen",
    "arti": "bernapas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "atme", "du": "atmest", "er_sie_es": "atmet", "wir": "atmen", "ihr": "atmet", "sie_Sie": "atmen" },
      "praeteritum": { "ich": "atmete", "du": "atmetest", "er_sie_es": "atmete", "wir": "atmeten", "ihr": "atmetet", "sie_Sie": "atmeten" },
      "perfekt": "hat geatmet",
      "imperativ": "Atme!/Atmet!/Atmen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Atmen Sie bitte tief ein und aus.", "id": "Tolong tarik dan hembuskan napas dalam-dalam." },
      { "de": "Es war schwer, in dem dichten Rauch zu atmen.", "id": "Sulit bernapas di tengah asap yang pekat." }
    ]
  },
  {
    "id": "einatmen-217",
    "level": "B1",
    "infinitiv": "einatmen",
    "arti": "menghirup napas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "atme ein", "du": "atmest ein", "er_sie_es": "atmet ein", "wir": "atmen ein", "ihr": "atmet ein", "sie_Sie": "atmen ein" },
      "praeteritum": { "ich": "atmete ein", "du": "atmetest ein", "er_sie_es": "atmete ein", "wir": "atmeten ein", "ihr": "atmetet ein", "sie_Sie": "atmeten ein" },
      "perfekt": "hat eingeatmet",
      "imperativ": "Atme ein!/Atmet ein!/Atmen Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Atmen Sie die frische Waldluft tief ein.", "id": "Hirup udara segar hutan ini dalam-dalam." },
      { "de": "Er hat giftigen Rauch eingeatmet.", "id": "Dia telah menghirup asap beracun." }
    ]
  },
  {
    "id": "ausatmen-218",
    "level": "B1",
    "infinitiv": "ausatmen",
    "arti": "mengembuskan napas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "atme aus", "du": "atmest aus", "er_sie_es": "atmet aus", "wir": "atmen aus", "ihr": "atmet aus", "sie_Sie": "atmen aus" },
      "praeteritum": { "ich": "atmete aus", "du": "atmetest aus", "er_sie_es": "atmete aus", "wir": "atmeten aus", "ihr": "atmetet aus", "sie_Sie": "atmeten aus" },
      "perfekt": "hat ausgeatmet",
      "imperativ": "Atme aus!/Atmet aus!/Atmen Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Halten Sie kurz an und atmen Sie langsam aus.", "id": "Tahan sebentar dan embuskan perlahan." },
      { "de": "Er atmete erleichtert aus.", "id": "Dia mengembuskan napas lega." }
    ]
  },
  {
    "id": "bewegen-219",
    "level": "A2",
    "infinitiv": "bewegen",
    "arti": "menggerakkan, berolahraga (sich bewegen)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bewege", "du": "bewegst", "er_sie_es": "bewegt", "wir": "bewegen", "ihr": "bewegt", "sie_Sie": "bewegen" },
      "praeteritum": { "ich": "bewegte", "du": "bewegtest", "er_sie_es": "bewegte", "wir": "bewegten", "ihr": "bewegtet", "sie_Sie": "bewegten" },
      "perfekt": "hat bewegt",
      "imperativ": "Bewege!/Bewegt!/Bewegen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich bewege mich im Alltag zu wenig.", "id": "Saya terlalu sedikit bergerak/olahraga sehari-hari." },
      { "de": "Der Wind bewegt die Zweige.", "id": "Angin menggerakkan ranting-ranting pohon." }
    ]
  },
  {
    "id": "biegen-220",
    "level": "B1",
    "infinitiv": "biegen",
    "arti": "menekuk, membelok",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "biege", "du": "biegst", "er_sie_es": "biegt", "wir": "biegen", "ihr": "biegt", "sie_Sie": "biegen" },
      "praeteritum": { "ich": "bog", "du": "bogst", "er_sie_es": "bog", "wir": "bogen", "ihr": "bogt", "sie_Sie": "bogen" },
      "perfekt": "hat gebogen",
      "imperativ": "Biege!/Biegt!/Biegen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Draht lässt sich leicht biegen.", "id": "Kawat itu mudah ditekuk." },
      { "de": "Das Auto bog mit hoher Geschwindigkeit um die Ecke.", "id": "Mobil itu membelok di tikungan dengan kecepatan tinggi." }
    ]
  },
  {
    "id": "abbiegen-221",
    "level": "A2",
    "infinitiv": "abbiegen",
    "arti": "belok arah (jalan)",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "biege ab", "du": "biegst ab", "er_sie_es": "biegt ab", "wir": "biegen ab", "ihr": "biegt ab", "sie_Sie": "biegen ab" },
      "praeteritum": { "ich": "bog ab", "du": "bogst ab", "er_sie_es": "bog ab", "wir": "bogen ab", "ihr": "bogt ab", "sie_Sie": "bogen ab" },
      "perfekt": "ist abgebogen",
      "imperativ": "Bieg ab!/Biegt ab!/Biegen Sie ab!"
    },
    "contoh_kalimat": [
      { "de": "Biegen Sie an der Kreuzung links ab.", "id": "Beloklah ke kiri di persimpangan itu." },
      { "de": "Der LKW ist vorsichtig abgebogen.", "id": "Truk itu berbelok dengan hati-hati." }
    ]
  },
  {
    "id": "drehen-222",
    "level": "A2",
    "infinitiv": "drehen",
    "arti": "memutar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "drehe", "du": "drehst", "er_sie_es": "dreht", "wir": "drehen", "ihr": "dreht", "sie_Sie": "drehen" },
      "praeteritum": { "ich": "drehte", "du": "drehtest", "er_sie_es": "drehte", "wir": "drehten", "ihr": "drehtet", "sie_Sie": "drehten" },
      "perfekt": "hat gedreht",
      "imperativ": "Dreh!/Dreht!/Drehen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Drehen Sie den Schlüssel nach rechts.", "id": "Putar kuncinya ke arah kanan." },
      { "de": "Die Erde dreht sich um die Sonne.", "id": "Bumi berputar mengelilingi matahari." }
    ]
  },
  {
    "id": "umdrehen-223",
    "level": "B1",
    "infinitiv": "umdrehen",
    "arti": "membalikkan badan, membalik arah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "drehe um", "du": "drehst um", "er_sie_es": "dreht um", "wir": "drehen um", "ihr": "dreht um", "sie_Sie": "drehen um" },
      "praeteritum": { "ich": "drehte um", "du": "drehtest um", "er_sie_es": "drehte um", "wir": "drehten um", "ihr": "drehtet um", "sie_Sie": "drehten um" },
      "perfekt": "hat umgedreht",
      "imperativ": "Dreh um!/Dreht um!/Drehen Sie um!"
    },
    "contoh_kalimat": [
      { "de": "Dreh dich nicht um, geh einfach weiter!", "id": "Jangan berbalik badan, jalan terus saja!" },
      { "de": "Wir müssen umdrehen, wir haben uns verfahren.", "id": "Kita harus putar balik, kita tersesat." }
    ]
  },
  {
    "id": "druecken-224",
    "level": "A2",
    "infinitiv": "drücken",
    "arti": "menindih, mencetak",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "drücke", "du": "drückst", "er_sie_es": "drückt", "wir": "drücken", "ihr": "drückt", "sie_Sie": "drücken" },
      "praeteritum": { "ich": "drückte", "du": "drücktest", "er_sie_es": "drückte", "wir": "drückten", "ihr": "drücktet", "sie_Sie": "drückten" },
      "perfekt": "hat gedrückt",
      "imperativ": "Drück!/Drückt!/Drücken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die neuen Schuhe drücken an den Fersen.", "id": "Sepatu baru ini menekan/menjepit tumit." },
      { "de": "Ich drücke dir ganz fest die Daumen!", "id": "Saya mendoakan semoga kamu sukses!" }
    ]
  },
  {
    "id": "ausdruecken-225",
    "level": "B2",
    "infinitiv": "ausdrücken",
    "arti": "mengekspresikan perasaan/pikiran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "drücke aus", "du": "drückst aus", "er_sie_es": "drückt aus", "wir": "drücken aus", "ihr": "drückt aus", "sie_Sie": "drücken aus" },
      "praeteritum": { "ich": "drückte aus", "du": "drücktest aus", "er_sie_es": "drückte aus", "wir": "drückten aus", "ihr": "drücktet aus", "sie_Sie": "drückten aus" },
      "perfekt": "hat ausgedrückt",
      "imperativ": "Drücke aus!/Drückt aus!/Drücken Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Er kann seine Gefühle nur schwer ausdrücken.", "id": "Dia sulit mengekspresikan perasaannya." },
      { "de": "Wie drückt man das am besten auf Deutsch aus?", "id": "Bagaimana cara terbaik mengungkapkan hal ini dalam bahasa Jerman?" }
    ]
  },
  {
    "id": "drucken-226",
    "level": "A1",
    "infinitiv": "drucken",
    "arti": "mencetak dokumen (print)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "drucke", "du": "druckst", "er_sie_es": "druckt", "wir": "drucken", "ihr": "druckt", "sie_Sie": "drucken" },
      "praeteritum": { "ich": "druckte", "du": "drucktest", "er_sie_es": "druckte", "wir": "druckten", "ihr": "drucktet", "sie_Sie": "druckten" },
      "perfekt": "hat gedruckt",
      "imperativ": "Druck!/Druckt!/Drucken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich muss diese Fahrkarte noch drucken.", "id": "Saya masih harus mencetak tiket perjalanan ini." },
      { "de": "Der Drucker druckt die Dokumente beidseitig.", "id": "Mesin cetak itu mencetak dokumen bolak-balik." }
    ]
  },
  {
    "id": "ausdrucken-227",
    "level": "A2",
    "infinitiv": "ausdrucken",
    "arti": "mencetak tuntas (print out)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "drucke aus", "du": "druckst aus", "er_sie_es": "druckt aus", "wir": "drucken aus", "ihr": "druckt aus", "sie_Sie": "drucken aus" },
      "praeteritum": { "ich": "druckte aus", "du": "drucktest aus", "er_sie_es": "druckte aus", "wir": "druckten aus", "ihr": "drucktet aus", "sie_Sie": "druckten aus" },
      "perfekt": "hat ausgedruckt",
      "imperativ": "Druck aus!/Druckt aus!/Drucken Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Hast du die Bestätigung ausgedruckt?", "id": "Sudahkah kamu mencetak bukti konfirmasinya?" },
      { "de": "Ich drucke den Vertrag sofort aus.", "id": "Saya akan langsung mencetak kontrak tersebut." }
    ]
  },
  {
    "id": "packen-228",
    "level": "A2",
    "infinitiv": "packen",
    "arti": "mengemasi barang, mencengkeram",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "packe", "du": "packst", "er_sie_es": "packt", "wir": "packen", "ihr": "packt", "sie_Sie": "packen" },
      "praeteritum": { "ich": "packte", "du": "packtest", "er_sie_es": "packte", "wir": "packten", "ihr": "packtet", "sie_Sie": "packten" },
      "perfekt": "hat gepackt",
      "imperativ": "Pack!/Packt!/Packen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich muss noch meinen Koffer für den Urlaub packen.", "id": "Saya masih harus mengemasi koper untuk liburan." },
      { "de": "Wir haben es endlich gepackt!", "id": "Kita akhirnya berhasil menuntaskannya!" }
    ]
  },
  {
    "id": "auspacken-229",
    "level": "A2",
    "infinitiv": "auspacken",
    "arti": "membongkar muatan, membuka kado",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "packe aus", "du": "packst aus", "er_sie_es": "packt aus", "wir": "packen aus", "ihr": "packt aus", "sie_Sie": "packen aus" },
      "praeteritum": { "ich": "packte aus", "du": "packtest aus", "er_sie_es": "packte aus", "wir": "packten aus", "ihr": "packtet aus", "sie_Sie": "packten aus" },
      "perfekt": "hat ausgepackt",
      "imperativ": "Pack aus!/Packt aus!/Packen Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Das Kind packt neugierig die Geschenke aus.", "id": "Anak itu membuka kado-kadonya dengan penasaran." },
      { "de": "Nach der Ankunft haben wir sofort ausgepackt.", "id": "Setelah tiba kami langsung membongkar barang bawaan." }
    ]
  },
  {
    "id": "einpacken-230",
    "level": "A2",
    "infinitiv": "einpacken",
    "arti": "membungkus rapi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "packe ein", "du": "packst ein", "er_sie_es": "packt ein", "wir": "packen ein", "ihr": "packt ein", "sie_Sie": "packen ein" },
      "praeteritum": { "ich": "packte ein", "du": "packtest ein", "er_sie_es": "packte ein", "wir": "packten ein", "ihr": "packtet ein", "sie_Sie": "packten ein" },
      "perfekt": "hat eingepackt",
      "imperativ": "Pack ein!/Packt ein!/Packen Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Können Sie das bitte als Geschenk einpacken?", "id": "Bisakah Anda membungkus ini sebagai kado?" },
      { "de": "Vergiss nicht, deinen Ausweis einzupacken!", "id": "Jangan lupa memasukkan KTP-mu ke dalam tas!" }
    ]
  },
  {
    "id": "stehlen-231",
    "level": "B1",
    "infinitiv": "stehlen",
    "arti": "mencuri",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "stehle", "du": "stiehlst", "er_sie_es": "stiehlt", "wir": "stehlen", "ihr": "stehlt", "sie_Sie": "stehlen" },
      "praeteritum": { "ich": "stahl", "du": "stahlst", "er_sie_es": "stahl", "wir": "stahlen", "ihr": "stahlt", "sie_Sie": "stahlen" },
      "perfekt": "hat gestohlen",
      "imperativ": "Stiehl!/Stehlt!/Stehlen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Jemand hat gestern mein Portemonnaie gestohlen.", "id": "Seseorang telah mencuri dompet saya kemarin." },
      { "de": "Wer stiehlt, begeht eine Straftat.", "id": "Barang siapa mencuri, dia melakukan tindak pidana." }
    ]
  },
  {
    "id": "rauben-232",
    "level": "B2",
    "infinitiv": "rauben",
    "arti": "merampok, merampas ketenangan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "raube", "du": "raubst", "er_sie_es": "raubt", "wir": "rauben", "ihr": "raubt", "sie_Sie": "rauben" },
      "praeteritum": { "ich": "raubte", "du": "raubtest", "er_sie_es": "raubte", "wir": "raubten", "ihr": "raubtet", "sie_Sie": "raubten" },
      "perfekt": "hat geraubt",
      "imperativ": "Raube!/Raubt!/Rauben Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Täter raubten Schmuck im Wert von Millionen.", "id": "Pelaku merampok perhiasan bernilai jutaan." },
      { "de": "Dieser Lärm raubt mir noch den Verstand.", "id": "Kebisingan ini benar-benar merampas ketenanganku." }
    ]
  },
  {
    "id": "betruegen-233",
    "level": "B2",
    "infinitiv": "betrügen",
    "arti": "menipu, selingkuh",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "betrüge", "du": "betrügst", "er_sie_es": "betrügt", "wir": "betrügen", "ihr": "betrügt", "sie_Sie": "betrügen" },
      "praeteritum": { "ich": "betrog", "du": "betrogst", "er_sie_es": "betrog", "wir": "betrogen", "ihr": "betrogt", "sie_Sie": "betrogen" },
      "perfekt": "hat betrogen",
      "imperativ": "Betrüge!/Betrügt!/Betrügen Sie!"
    },
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Er hat seine Geschäftspartner um viel Geld betrogen.", "id": "Dia menipu mitra bisnisnya dalam jumlah uang yang besar." },
      { "de": "Sie würde ihren Partner niemals betrügen.", "id": "Dia tidak akan pernah mengkhianati pasangannya." }
    ]
  },
  {
    "id": "luegen-234",
    "level": "B1",
    "infinitiv": "lügen",
    "arti": "berbohong",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "lüge", "du": "lügst", "er_sie_es": "lügt", "wir": "lügen", "ihr": "lügt", "sie_Sie": "lügen" },
      "praeteritum": { "ich": "log", "du": "logst", "er_sie_es": "log", "wir": "logen", "ihr": "logt", "sie_Sie": "logen" },
      "perfekt": "hat gelogen",
      "imperativ": "Lüg nicht!/Lügt nicht!"
    },
    "contoh_kalimat": [
      { "de": "Lüg mich bitte nicht an!", "id": "Tolong jangan berbohong padaku!" },
      { "de": "Wer einmal lügt, dem glaubt man nicht.", "id": "Sekali lancung ke ujian, seumur hidup orang tak percaya." }
    ]
  },
  {
    "id": "warnen-235",
    "level": "B1",
    "infinitiv": "warnen",
    "arti": "memperingatkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "warne", "du": "warnst", "er_sie_es": "warnt", "wir": "warnen", "ihr": "warnt", "sie_Sie": "warnen" },
      "praeteritum": { "ich": "warnte", "du": "warntest", "er_sie_es": "warnte", "wir": "warnten", "ihr": "warntet", "sie_Sie": "warnten" },
      "perfekt": "hat gewarnt",
      "imperativ": "Warne!/Warnt!/Warnen Sie!"
    },
    "praepositionen": [{ "präposition": "vor", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich habe dich rechtzeitig vor der Gefahr gewarnt.", "id": "Saya sudah memperingatkanmu tepat waktu tentang bahaya itu." },
      { "de": "Der Wetterdienst warnt vor schwerem Sturm.", "id": "Badan meteorologi memperingatkan akan datangnya badai besar." }
    ]
  },
  {
    "id": "drohen-236",
    "level": "B2",
    "infinitiv": "drohen",
    "arti": "mengancam",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "drohe", "du": "drohst", "er_sie_es": "droht", "wir": "drohen", "ihr": "droht", "sie_Sie": "drohen" },
      "praeteritum": { "ich": "drohte", "du": "drohtest", "er_sie_es": "drohte", "wir": "drohten", "ihr": "drohtet", "sie_Sie": "drohten" },
      "perfekt": "hat gedroht",
      "imperativ": "Droh!/Droht!/Drohen Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Er drohte damit, zur Polizei zu gehen.", "id": "Dia mengancam akan melapor ke polisi." },
      { "de": "Dem Unternehmen droht die Insolvenz.", "id": "Perusahaan itu terancam bangkrut." }
    ]
  },
  {
    "id": "retten-237",
    "level": "A2",
    "infinitiv": "retten",
    "arti": "menyelamatkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "rette", "du": "rettest", "er_sie_es": "rettet", "wir": "retten", "ihr": "rettet", "sie_Sie": "retten" },
      "praeteritum": { "ich": "rettete", "du": "rettetest", "er_sie_es": "rettete", "wir": "retteten", "ihr": "rettetet", "sie_Sie": "retteten" },
      "perfekt": "hat gerettet",
      "imperativ": "Rette!/Rettet!/Retten Sie!"
    },
    "praepositionen": [{ "präposition": "vor", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Die Feuerwehr rettete die Familie aus dem brennenden Haus.", "id": "Pemadam kebakaran menyelamatkan keluarga itu dari rumah yang terbakar." },
      { "de": "Er hat dem Hund das Leben gerettet.", "id": "Dia telah menyelamatkan nyawa anjing itu." }
    ]
  },
  {
    "id": "schuetzen-238",
    "level": "B1",
    "infinitiv": "schützen",
    "arti": "melindungi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schütze", "du": "schützt", "er_sie_es": "schützt", "wir": "schützen", "ihr": "schützt", "sie_Sie": "schützen" },
      "praeteritum": { "ich": "schützte", "du": "schütztest", "er_sie_es": "schützte", "wir": "schützten", "ihr": "schütztet", "sie_Sie": "schützten" },
      "perfekt": "hat geschützt",
      "imperativ": "Schütze!/Schützt!/Schützen Sie!"
    },
    "praepositionen": [{ "präposition": "vor", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Eine Sonnenbrille schützt die Augen vor UV-Strahlen.", "id": "Kacamata hitam melindungi mata dari sinar UV." },
      { "de": "Wir müssen die Umwelt besser schützen.", "id": "Kita harus melindungi lingkungan hidup dengan lebih baik." }
    ]
  },
  {
    "id": "verteidigen-239",
    "level": "B2",
    "infinitiv": "verteidigen",
    "arti": "mempertahankan, membela",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verteidige", "du": "verteidigst", "er_sie_es": "verteidigt", "wir": "verteidigen", "ihr": "verteidigt", "sie_Sie": "verteidigen" },
      "praeteritum": { "ich": "verteidigte", "du": "verteidigtest", "er_sie_es": "verteidigte", "wir": "verteidigten", "ihr": "verteidigtet", "sie_Sie": "verteidigten" },
      "perfekt": "hat verteidigt",
      "imperativ": "Verteidige!/Verteidigt!/Verteidigen Sie!"
    },
    "praepositionen": [{ "präposition": "gegen", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Der Anwalt verteidigt den Angeklagten vor Gericht.", "id": "Pengacara membela terdakwa di pengadilan." },
      { "de": "Die Mannschaft verteidigte ihren Titel erfolgreich.", "id": "Tim tersebut sukses mempertahankan gelarnya." }
    ]
  },
  {
    "id": "unterdruecken-240",
    "level": "C1",
    "infinitiv": "unterdrücken",
    "arti": "menindas, menahan emosi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "unterdrücke", "du": "unterdrückst", "er_sie_es": "unterdrückt", "wir": "unterdrücken", "ihr": "unterdrückt", "sie_Sie": "unterdrücken" },
      "praeteritum": { "ich": "unterdrückte", "du": "unterdrücktest", "er_sie_es": "unterdrückte", "wir": "unterdrückten", "ihr": "unterdrücktet", "sie_Sie": "unterdrückten" },
      "perfekt": "hat unterdrückt",
      "imperativ": "Unterdrücke!/Unterdrückt!/Unterdrücken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie konnte ihre Tränen kaum unterdrücken.", "id": "Dia hampir tidak sanggup menahan air matanya." },
      { "de": "Das Regime unterdrückte jede Opposition.", "id": "Rezim tersebut menindas setiap oposisi." }
    ]
  },
  {
    "id": "gewinnen-241",
    "level": "A2",
    "infinitiv": "gewinnen",
    "arti": "memenangkan, memperoleh",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "gewinne", "du": "gewinnst", "er_sie_es": "gewinnt", "wir": "gewinnen", "ihr": "gewinnt", "sie_Sie": "gewinnen" },
      "praeteritum": { "ich": "gewann", "du": "gewannst", "er_sie_es": "gewann", "wir": "gewannen", "ihr": "gewannt", "sie_Sie": "gewannen" },
      "perfekt": "hat gewonnen",
      "imperativ": "Gewinn!/Gewinnt!/Gewinnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie hat im Lotto eine Million Euro gewonnen.", "id": "Dia memenangkan satu juta euro dalam lotre." },
      { "de": "Das Unternehmen konnte neue Kunden gewinnen.", "id": "Perusahaan berhasil memperoleh pelanggan-pelanggan baru." }
    ]
  },
  {
    "id": "siegen-242",
    "level": "B2",
    "infinitiv": "siegen",
    "arti": "menang, unggul atas lawan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "siege", "du": "siegst", "er_sie_es": "siegt", "wir": "siegen", "ihr": "siegt", "sie_Sie": "siegen" },
      "praeteritum": { "ich": "siegte", "du": "siegtest", "er_sie_es": "siegte", "wir": "siegten", "ihr": "siegtet", "sie_Sie": "siegten" },
      "perfekt": "hat gesiegt",
      "imperativ": "Siege!/Siegt!/Siegen Sie!"
    },
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Am Ende siegte die Gerechtigkeit.", "id": "Pada akhirnya keadilanlah yang menang." },
      { "de": "Er siegte über seinen stärksten Konkurrenten.", "id": "Dia menang atas pesaing terberatnya." }
    ]
  },
  {
    "id": "besiegen-243",
    "level": "B2",
    "infinitiv": "besiegen",
    "arti": "mengalahkan musuh/penyakit",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "besiege", "du": "besiegst", "er_sie_es": "besiegt", "wir": "besiegen", "ihr": "besiegt", "sie_Sie": "besiegen" },
      "praeteritum": { "ich": "besiegte", "du": "besiegtest", "er_sie_es": "besiegte", "wir": "besiegten", "ihr": "besiegtet", "sie_Sie": "besiegten" },
      "perfekt": "hat besiegt",
      "imperativ": "Besiege!/Besiegt!/Besiegen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie hat die schwere Krankheit tapfer besiegt.", "id": "Dia dengan berani mengalahkan penyakit berat itu." },
      { "de": "Der Meister besiegte den Herausforderer mühelos.", "id": "Sang juara menaklukkan penantangnya tanpa kesulitan." }
    ]
  },
  {
    "id": "kaempfen-244",
    "level": "B1",
    "infinitiv": "kämpfen",
    "arti": "berjuang, bertarung",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kämpfe", "du": "kämpfst", "er_sie_es": "kämpft", "wir": "kämpfen", "ihr": "kämpft", "sie_Sie": "kämpfen" },
      "praeteritum": { "ich": "kämpfte", "du": "kämpftest", "er_sie_es": "kämpfte", "wir": "kämpften", "ihr": "kämpftet", "sie_Sie": "kämpften" },
      "perfekt": "hat gekämpft",
      "imperativ": "Kämpfe!/Kämpft!/Kämpfen Sie!"
    },
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }, { "präposition": "gegen", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Die Bürger kämpfen für ihre Grundrechte.", "id": "Para warga berjuang demi hak-hak dasar mereka." },
      { "de": "Die Ärzte kämpfen gegen die Ausbreitung des Virus.", "id": "Para dokter bertarung melawan penyebaran virus." }
    ]
  },
  {
    "id": "fliehen-245",
    "level": "B2",
    "infinitiv": "fliehen",
    "arti": "melarikan diri, mengungsi",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "fliehe", "du": "fliehst", "er_sie_es": "flieht", "wir": "fliehen", "ihr": "flieht", "sie_Sie": "fliehen" },
      "praeteritum": { "ich": "floh", "du": "flohst", "er_sie_es": "floh", "wir": "flohen", "ihr": "floht", "sie_Sie": "flohen" },
      "perfekt": "ist geflohen",
      "imperativ": "Fliehe!/Flieht!/Fliehen Sie!"
    },
    "praepositionen": [{ "präposition": "vor", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Tausende Menschen flohen vor dem Krieg.", "id": "Ribuan orang mengungsi melarikan diri dari perang." },
      { "de": "Der Gefangene ist aus der Haft geflohen.", "id": "Narapidana itu melarikan diri dari tahanan." }
    ]
  },
  {
    "id": "brennen-246",
    "level": "A2",
    "infinitiv": "brennen",
    "arti": "terbakar, menyala",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "brenne", "du": "brennst", "er_sie_es": "brennt", "wir": "brennen", "ihr": "brennt", "sie_Sie": "brennen" },
      "praeteritum": { "ich": "brannte", "du": "branntest", "er_sie_es": "brannte", "wir": "brannten", "ihr": "branntet", "sie_Sie": "brannten" },
      "perfekt": "hat gebrannt",
      "imperativ": "Brenne!/Brennt!/Brennen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Im Kamin brennt ein wärmendes Feuer.", "id": "Di perapian menyala api yang menghangatkan." },
      { "de": "Das ganze Gebäude hat lichterloh gebrannt.", "id": "Seluruh bangunan terbakar hebat." }
    ]
  },
  {
    "id": "verbrennen-247",
    "level": "B1",
    "infinitiv": "verbrennen",
    "arti": "membakar hangus, mengalami luka bakar",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verbrenne", "du": "verbrennst", "er_sie_es": "verbrennt", "wir": "verbrennen", "ihr": "verbrennt", "sie_Sie": "verbrennen" },
      "praeteritum": { "ich": "verbrannte", "du": "verbranntest", "er_sie_es": "verbrannte", "wir": "verbrannten", "ihr": "verbranntet", "sie_Sie": "verbrannten" },
      "perfekt": "hat verbrannt",
      "imperativ": "Verbrenne!/Verbrennt!/Verbrennen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er hat alte Dokumente im Garten verbrannt.", "id": "Dia membakar dokumen-dokumen lama di kebun." },
      { "de": "Pass auf, sonst verbrennst du dir die Hand!", "id": "Hati-hati, nanti tanganmu terkena luka bakar!" }
    ]
  },
  {
    "id": "loeschen-248",
    "level": "A2",
    "infinitiv": "löschen",
    "arti": "memadamkan api, menghapus data",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lösche", "du": "löschst", "er_sie_es": "löscht", "wir": "löschen", "ihr": "löscht", "sie_Sie": "löschen" },
      "praeteritum": { "ich": "löschte", "du": "löschtest", "er_sie_es": "löschte", "wir": "löschten", "ihr": "löschtet", "sie_Sie": "löschten" },
      "perfekt": "hat gelöscht",
      "imperativ": "Lösch!/Löscht!/Löschen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Feuerwehr konnte das Feuer rasch löschen.", "id": "Pemadam kebakaran berhasil memadamkan api dengan cepat." },
      { "de": "Ich habe die Datei versehentlich gelöscht.", "id": "Saya tidak sengaja menghapus berkas itu." }
    ]
  },
  {
    "id": "retten-249",
    "level": "A2",
    "infinitiv": "retten",
    "arti": "menyelamatkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "rette", "du": "rettest", "er_sie_es": "rettet", "wir": "retten", "ihr": "rettet", "sie_Sie": "retten" },
      "praeteritum": { "ich": "rettete", "du": "rettetest", "er_sie_es": "rettete", "wir": "retteten", "ihr": "rettetet", "sie_Sie": "retteten" },
      "perfekt": "hat gerettet",
      "imperativ": "Rette!/Rettet!/Retten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Rettungsschwimmer rettete das ertrinkende Kind.", "id": "Penjaga pantai menyelamatkan anak yang tenggelam itu." },
      { "de": "Diese Entscheidung hat unsere Firma gerettet.", "id": "Keputusan ini telah menyelamatkan perusahaan kita." }
    ]
  },
  {
    "id": "sinken-250",
    "level": "B1",
    "infinitiv": "sinken",
    "arti": "tenggelam, menurun nilainya",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "sinke", "du": "sinkst", "er_sie_es": "sinkt", "wir": "sinken", "ihr": "sinkt", "sie_Sie": "sinken" },
      "praeteritum": { "ich": "sank", "du": "sankst", "er_sie_es": "sank", "wir": "sanken", "ihr": "sankt", "sie_Sie": "sanken" },
      "perfekt": "ist gesunken",
      "imperativ": "Sinke!/Sinkt!/Sinken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Schiff sank nach einer schweren Kollision.", "id": "Kapal itu tenggelam seusai tabrakan dahsyat." },
      { "de": "Die Benzinpreise sind in den letzten Tagen gesunken.", "id": "Harga bensin telah turun dalam beberapa hari terakhir." }
    ]
  },
  {
    "id": "steigen-251",
    "level": "A2",
    "infinitiv": "steigen",
    "arti": "naik, bertambah tinggi",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "steige", "du": "steigst", "er_sie_es": "steigt", "wir": "steigen", "ihr": "steigt", "sie_Sie": "steigen" },
      "praeteritum": { "ich": "stieg", "du": "stiegst", "er_sie_es": "stieg", "wir": "stiegen", "ihr": "stiegt", "sie_Sie": "stiegen" },
      "perfekt": "ist gestiegen",
      "imperativ": "Steig!/Steigt!/Steigen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Temperaturen steigen am Nachmittag auf 30 Grad.", "id": "Suhu udara naik hingga 30 derajat di sore hari." },
      { "de": "Wir steigen auf den höchsten Berg der Region.", "id": "Kami mendaki gunung tertinggi di wilayah tersebut." }
    ]
  },
  {
    "id": "einsteigen-252",
    "level": "A1",
    "infinitiv": "einsteigen",
    "arti": "naik ke dalam kendaraan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "steige ein", "du": "steigst ein", "er_sie_es": "steigt ein", "wir": "steigen ein", "ihr": "steigt ein", "sie_Sie": "steigen ein" },
      "praeteritum": { "ich": "stieg ein", "du": "stiegst ein", "er_sie_es": "stieg ein", "wir": "stiegen ein", "ihr": "stiegt ein", "sie_Sie": "stiegen ein" },
      "perfekt": "ist eingestiegen",
      "imperativ": "Steig ein!/Steigt ein!/Steigen Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Bitte steigen Sie zügig in den Zug ein!", "id": "Silakan segera naik ke dalam kereta!" },
      { "de": "Wir sind an der falschen Haltestelle eingestiegen.", "id": "Kami naik di halte yang salah." }
    ]
  },
  {
    "id": "aussteigen-253",
    "level": "A1",
    "infinitiv": "aussteigen",
    "arti": "turun dari kendaraan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "steige aus", "du": "steigst aus", "er_sie_es": "steigt aus", "wir": "steigen aus", "ihr": "steigt aus", "sie_Sie": "steigen aus" },
      "praeteritum": { "ich": "stieg aus", "du": "stiegst aus", "er_sie_es": "stieg aus", "wir": "stiegen aus", "ihr": "stiegt aus", "sie_Sie": "stiegen aus" },
      "perfekt": "ist ausgestiegen",
      "imperativ": "Steig aus!/Steigt aus!/Steigen Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "An der nächsten Station müssen wir aussteigen.", "id": "Kita harus turun di stasiun berikutnya." },
      { "de": "Er stieg vorsichtig aus dem Bus aus.", "id": "Dia turun dari bus dengan berhati-hati." }
    ]
  },
  {
    "id": "umsteigen-254",
    "level": "A2",
    "infinitiv": "umsteigen",
    "arti": "transit, berganti armada transportasi",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "steige um", "du": "steigst um", "er_sie_es": "steigt um", "wir": "steigen um", "ihr": "steigt um", "sie_Sie": "steigen um" },
      "praeteritum": { "ich": "stieg um", "du": "stiegst um", "er_sie_es": "stieg um", "wir": "stiegen um", "ihr": "stiegt um", "sie_Sie": "stiegen um" },
      "perfekt": "ist umgestiegen",
      "imperativ": "Steig um!/Steigt um!/Steigen Sie um!"
    },
    "contoh_kalimat": [
      { "de": "In Frankfurt müssen Sie in die S-Bahn umsteigen.", "id": "Di Frankfurt Anda harus berganti kereta ke S-Bahn." },
      { "de": "Haben wir genug Zeit zum Umsteigen?", "id": "Apakah kita memiliki cukup waktu untuk transit?" }
    ]
  },
  {
    "id": "landen-255",
    "level": "A2",
    "infinitiv": "landen",
    "arti": "mendarat (pesawat)",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lande", "du": "landest", "er_sie_es": "landet", "wir": "landen", "ihr": "landet", "sie_Sie": "landen" },
      "praeteritum": { "ich": "landete", "du": "landetest", "er_sie_es": "landete", "wir": "landeten", "ihr": "landetet", "sie_Sie": "landeten" },
      "perfekt": "ist gelandet",
      "imperativ": "Lande!/Landet!/Landen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Flugzeug landet pünktlich um 14 Uhr.", "id": "Pesawat mendarat tepat waktu pada pukul 14.00." },
      { "de": "Wir sind wohlbehalten in München gelandet.", "id": "Kami mendarat dengan selamat di Munich." }
    ]
  },
  {
    "id": "starten-256",
    "level": "A2",
    "infinitiv": "starten",
    "arti": "lepas landas, memulai komputer/mesin",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "starte", "du": "startest", "er_sie_es": "startet", "wir": "starten", "ihr": "startet", "sie_Sie": "starten" },
      "praeteritum": { "ich": "startete", "du": "startetest", "er_sie_es": "startete", "wir": "starteten", "ihr": "startetet", "sie_Sie": "starteten" },
      "perfekt": "ist gestartet",
      "imperativ": "Starte!/Startet!/Starten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Maschine startet in wenigen Minuten.", "id": "Pesawat lepas landas dalam beberapa menit." },
      { "de": "Ich starte den Computer neu.", "id": "Saya menyalakan ulang komputer." }
    ]
  },
  {
    "id": "reisen-257",
    "level": "A2",
    "infinitiv": "verreisen",
    "arti": "bepergian ke luar kota/negeri",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verreise", "du": "verreist", "er_sie_es": "verreist", "wir": "verreisen", "ihr": "verreist", "sie_Sie": "verreisen" },
      "praeteritum": { "ich": "verreiste", "du": "verreistest", "er_sie_es": "verreiste", "wir": "verreisten", "ihr": "verreistet", "sie_Sie": "verreisten" },
      "perfekt": "ist verreist",
      "imperativ": "Verreise!/Verreist!/Verreisen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Frau Weber ist derzeit für zwei Wochen verreist.", "id": "Ibu Weber saat ini sedang bepergian selama dua pekan." },
      { "de": "Verreist ihr über die Feiertage?", "id": "Apakah kalian bepergian selama masa liburan?" }
    ]
  },
  {
    "id": "wandern-258",
    "level": "A2",
    "infinitiv": "wandern",
    "arti": "mendaki santai, jalan kaki di alam (hiking)",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "wandere", "du": "wanderst", "er_sie_es": "wandert", "wir": "wandern", "ihr": "wandert", "sie_Sie": "wandern" },
      "praeteritum": { "ich": "wanderte", "du": "wandertest", "er_sie_es": "wanderte", "wir": "wanderten", "ihr": "wandertet", "sie_Sie": "wanderten" },
      "perfekt": "ist gewandert",
      "imperativ": "Wandere!/Wandert!/Wandern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Am Wochenende wandern wir gern durch den Schwarzwald.", "id": "Di akhir pekan kami senang berjalan lintas alam mengelilingi Black Forest." },
      { "de": "Sie sind stundenlang in den Bergen gewandert.", "id": "Mereka mendaki berjam-jam di pegunungan." }
    ]
  },
  {
    "id": "klettern-259",
    "level": "B1",
    "infinitiv": "klettern",
    "arti": "memanjat dinding/tebing",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "klettere", "du": "kletterst", "er_sie_es": "klettert", "wir": "klettern", "ihr": "klettert", "sie_Sie": "klettern" },
      "praeteritum": { "ich": "kletterte", "du": "klettertest", "er_sie_es": "kletterte", "wir": "kletterten", "ihr": "klettertet", "sie_Sie": "kletterten" },
      "perfekt": "ist geklettert",
      "imperativ": "Klettere!/Klettert!/Klettern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Kinder klettern geschickt auf den Baum.", "id": "Anak-anak memanjat pohon itu dengan terampil." },
      { "de": "Er klettert regelmäßig in der Kletterhalle.", "id": "Dia rutin panjat tebing di arena indoor." }
    ]
  },
  {
    "id": "tauchen-260",
    "level": "B1",
    "infinitiv": "tauchen",
    "arti": "menyelam ke dasar air",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "tauche", "du": "tauchst", "er_sie_es": "taucht", "wir": "tauchen", "ihr": "taucht", "sie_Sie": "tauchen" },
      "praeteritum": { "ich": "tauchte", "du": "tauchtest", "er_sie_es": "tauchte", "wir": "tauchten", "ihr": "tauchtet", "sie_Sie": "tauchten" },
      "perfekt": "ist getaucht",
      "imperativ": "Tauche!/Taucht!/Tauchen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Im Urlaub ist er nach bunten Korallen getaucht.", "id": "Saat liburan dia menyelam melihat terumbu karang berwarna-warni." },
      { "de": "Der Rettungstaucher tauchte tief in den See.", "id": "Penyelam penyelamat itu menyelam jauh ke dasar danau." }
    ]
  },
  {
    "id": "segeln-261",
    "level": "B1",
    "infinitiv": "segeln",
    "arti": "berlayar",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "segle", "du": "segelst", "er_sie_es": "segelt", "wir": "segeln", "ihr": "segelt", "sie_Sie": "segeln" },
      "praeteritum": { "ich": "segelte", "du": "segeltest", "er_sie_es": "segelte", "wir": "segelten", "ihr": "segeltet", "sie_Sie": "segelten" },
      "perfekt": "ist gesegelt",
      "imperativ": "Segle!/Segelt!/Segeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir segeln am liebsten auf der Ostsee.", "id": "Kami paling suka berlayar di Laut Baltik." },
      { "de": "Er hat das Boot sicher durch den Sturm gesegelt.", "id": "Dia mengemudikan perahu layar itu dengan aman melintasi badai." }
    ]
  },
  {
    "id": "reiten-262",
    "level": "A2",
    "infinitiv": "reiten",
    "arti": "menunggang kuda",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "reite", "du": "reitest", "er_sie_es": "reitet", "wir": "reiten", "ihr": "reitet", "sie_Sie": "reiten" },
      "praeteritum": { "ich": "ritt", "du": "rittest", "er_sie_es": "ritt", "wir": "ritten", "ihr": "rittet", "sie_Sie": "ritten" },
      "perfekt": "ist geritten",
      "imperativ": "Reite!/Reitet!/Reiten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Meine Schwester reitet jeden Samstagnachmittag.", "id": "Adik perempuan saya berkuda setiap Sabtu siang." },
      { "de": "Kannst du reiten?", "id": "Bisakah kamu menunggang kuda?" }
    ]
  },
  {
    "id": "jagen-263",
    "level": "B2",
    "infinitiv": "jagen",
    "arti": "berburu mangsa, mengejar buruan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "jage", "du": "jagst", "er_sie_es": "jagt", "wir": "jagen", "ihr": "jagt", "sie_Sie": "jagen" },
      "praeteritum": { "ich": "jagte", "du": "jagtest", "er_sie_es": "jagte", "wir": "jagten", "ihr": "jagtet", "sie_Sie": "jagten" },
      "perfekt": "hat gejagt",
      "imperativ": "Jage!/Jagt!/Jagen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Hund jagt die Katze durch den Garten.", "id": "Anjing itu mengejar kucing melintasi halaman kebun." },
      { "de": "Früher jagten die Menschen Tiere zum Überleben.", "id": "Dahulu manusia berburu binatang untuk bertahan hidup." }
    ]
  },
  {
    "id": "angeln-264",
    "level": "A2",
    "infinitiv": "angeln",
    "arti": "memancing ikan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "angle", "du": "angelst", "er_sie_es": "angelt", "wir": "angeln", "ihr": "angelt", "sie_Sie": "angeln" },
      "praeteritum": { "ich": "angelte", "du": "angeltest", "er_sie_es": "angelte", "wir": "angelten", "ihr": "angeltet", "sie_Sie": "angelten" },
      "perfekt": "hat geangelt",
      "imperativ": "Angle!/Angelt!/Angeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Mein Vater angelt sonntags stundenlang am Fluss.", "id": "Ayah saya memancing berjam-jam di tepi sungai tiap hari Minggu." },
      { "de": "Heute haben wir keinen einzigen Fisch geangelt.", "id": "Hari ini kami sama sekali tidak memancing seekor ikan pun." }
    ]
  },
  {
    "id": "sammeln-265",
    "level": "A2",
    "infinitiv": "sammeln",
    "arti": "mengoleksi, menghimpun",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "sammle", "du": "sammelst", "er_sie_es": "sammelt", "wir": "sammeln", "ihr": "sammelt", "sie_Sie": "sammeln" },
      "praeteritum": { "ich": "sammelte", "du": "sammeltest", "er_sie_es": "sammelte", "wir": "sammelten", "ihr": "sammeltet", "sie_Sie": "sammelten" },
      "perfekt": "hat gesammelt",
      "imperativ": "Sammle!/Sammelt!/Sammeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er sammelt seit seiner Kindheit Briefmarken.", "id": "Dia mengoleksi prangko sejak masa kanak-kanaknya." },
      { "de": "Wir sammeln Spenden für das Waisenhaus.", "id": "Kami menghimpun sumbangan untuk panti asuhan." }
    ]
  },
  {
    "id": "sparen-266",
    "level": "A2",
    "infinitiv": "sparen",
    "arti": "menabung, berhemat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "spare", "du": "sparst", "er_sie_es": "spart", "wir": "sparen", "ihr": "spart", "sie_Sie": "sparen" },
      "praeteritum": { "ich": "sparte", "du": "spartest", "er_sie_es": "sparte", "wir": "sparten", "ihr": "spartet", "sie_Sie": "sparten" },
      "perfekt": "hat gespart",
      "imperativ": "Spare!/Spart!/Sparen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich spare jeden Monat einen Teil meines Gehalts.", "id": "Saya menabung sebagian dari gaji saya setiap bulan." },
      { "de": "Mit dieser Lampe sparen Sie viel Strom.", "id": "Dengan lampu ini Anda menghemat banyak listrik." }
    ]
  },
  {
    "id": "ausgeben-267",
    "level": "A2",
    "infinitiv": "ausgeben",
    "arti": "membelanjakan uang, mengeluarkan dana",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "gebe aus", "du": "gibst aus", "er_sie_es": "gibt aus", "wir": "geben aus", "ihr": "gebt aus", "sie_Sie": "geben aus" },
      "praeteritum": { "ich": "gab aus", "du": "gabst aus", "er_sie_es": "gab aus", "wir": "gaben aus", "ihr": "gabt aus", "sie_Sie": "gaben aus" },
      "perfekt": "hat ausgegeben",
      "imperativ": "Gib aus!/Gebt aus!/Geben Sie aus!"
    },
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Er gibt viel Geld für teure Kleidung aus.", "id": "Dia membelanjakan banyak uang untuk pakaian mahal." },
      { "de": "Wie viel hast du im Urlaub ausgegeben?", "id": "Berapa banyak uang yang kamu habiskan saat liburan?" }
    ]
  },
  {
    "id": "verschwenden-268",
    "level": "B2",
    "infinitiv": "verschwenden",
    "arti": "menyia-nyiakan, menghamburkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verschwende", "du": "verschwendest", "er_sie_es": "verschwendet", "wir": "verschwenden", "ihr": "verschwendet", "sie_Sie": "verschwenden" },
      "praeteritum": { "ich": "verschwendete", "du": "verschwendetest", "er_sie_es": "verschwendete", "wir": "verschwendeten", "ihr": "verschwendetet", "sie_Sie": "verschwendeten" },
      "perfekt": "hat verschwendet",
      "imperativ": "Verschwende!/Verschwendet!/Verschwenden Sie!"
    },
    "contoh_kalimat": [
      { "de": "Verschwende nicht deine kostbare Zeit!", "id": "Jangan sia-siakan waktumu yang berharga!" },
      { "de": "Wir dürfen keine Lebensmittel verschwenden.", "id": "Kita tidak boleh membuang-buang makanan." }
    ]
  },
  {
    "id": "verdienen-269",
    "level": "A2",
    "infinitiv": "verdienen",
    "arti": "menghasilkan uang/gaji, pantas menerima",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verdiene", "du": "verdienst", "er_sie_es": "verdient", "wir": "verdienen", "ihr": "verdient", "sie_Sie": "verdienen" },
      "praeteritum": { "ich": "verdiente", "du": "verdientest", "er_sie_es": "verdiente", "wir": "verdienten", "ihr": "verdientet", "sie_Sie": "verdienten" },
      "perfekt": "hat verdient",
      "imperativ": "Verdiene!/Verdient!/Verdienen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er verdient als Ingenieur ein gutes Gehalt.", "id": "Dia menghasilkan gaji yang bagus sebagai insinyur." },
      { "de": "Du hast nach all der harten Arbeit eine Pause verdient.", "id": "Kamu pantas mendapatkan istirahat setelah semua kerja keras itu." }
    ]
  },
  {
    "id": "kosten-270",
    "level": "A1",
    "infinitiv": "kosten",
    "arti": "berharga (tarif), mencicipi makanan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "koste", "du": "kostest", "er_sie_es": "kostet", "wir": "kosten", "ihr": "kostet", "sie_Sie": "kosten" },
      "praeteritum": { "ich": "kostete", "du": "kostetest", "er_sie_es": "kostete", "wir": "kosteten", "ihr": "kostetet", "sie_Sie": "kosteten" },
      "perfekt": "hat gekostet",
      "imperativ": "Koste!/Kostet!/Kosten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wie viel kostet dieses Buch?", "id": "Berapa harga buku ini?" },
      { "de": "Koste mal die Suppe, ob genug Salz drin ist.", "id": "Cicipilah supnya, apakah garamnya sudah pas." }
    ]
  },
  {
    "id": "schulden-271",
    "level": "B1",
    "infinitiv": "schulden",
    "arti": "berutang (uang/terima kasih)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schulde", "du": "schuldest", "er_sie_es": "schuldet", "wir": "schulden", "ihr": "schuldet", "sie_Sie": "schulden" },
      "praeteritum": { "ich": "schuldete", "du": "schuldetest", "er_sie_es": "schuldete", "wir": "schuldeten", "ihr": "schuldetet", "sie_Sie": "schuldeten" },
      "perfekt": "hat geschuldet",
      "imperativ": "Schulde!/Schuldet!/Schulden Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich schulde dir noch zwanzig Euro vom Mittagessen.", "id": "Saya masih berutang dua puluh euro padamu dari makan siang tadi." },
      { "de": "Er schuldet seinem Retter großen Dank.", "id": "Dia berutang rasa terima kasih yang besar kepada penyelamatnya." }
    ]
  },
  {
    "id": "leihen-272",
    "level": "A2",
    "infinitiv": "verleihen",
    "arti": "meminjamkan aset, menganugerahkan medali",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verleihe", "du": "verleihst", "er_sie_es": "verleiht", "wir": "verleihen", "ihr": "verleiht", "sie_Sie": "verleihen" },
      "praeteritum": { "ich": "verlieh", "du": "verliehst", "er_sie_es": "verlieh", "wir": "verliehen", "ihr": "verlieht", "sie_Sie": "verliehen" },
      "perfekt": "hat verliehen",
      "imperativ": "Verleih!/Verleiht!/Verleihen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Bibliothek verleiht Bücher und DVDs.", "id": "Perpustakaan itu meminjamkan buku dan DVD." },
      { "de": "Dem Wissenschaftler wurde ein renommierter Preis verliehen.", "id": "Kepada ilmuwan tersebut dianugerahkan penghargaan bergengsi." }
    ]
  },
  {
    "id": "mieten-273",
    "level": "A2",
    "infinitiv": "mieten",
    "arti": "menyewa (rumah/mobil)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "miete", "du": "mietest", "er_sie_es": "mietet", "wir": "mieten", "ihr": "mietet", "sie_Sie": "mieten" },
      "praeteritum": { "ich": "mietete", "du": "mietetest", "er_sie_es": "mietete", "wir": "mieteten", "ihr": "mietetet", "sie_Sie": "mieteten" },
      "perfekt": "hat gemietet",
      "imperativ": "Miete!/Mietet!/Mieten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir mieten eine kleine Wohnung in der Innenstadt.", "id": "Kami menyewa sebuah apartemen kecil di pusat kota." },
      { "de": "Im Urlaub haben wir uns ein Cabrio gemietet.", "id": "Saat liburan kami menyewa sebuah mobil konvertibel." }
    ]
  },
  {
    "id": "vermieten-274",
    "level": "A2",
    "infinitiv": "vermieten",
    "arti": "menyewakan properti kepada penyewa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "vermiete", "du": "vermietest", "er_sie_es": "vermietet", "wir": "vermieten", "ihr": "vermietet", "sie_Sie": "vermieten" },
      "praeteritum": { "ich": "vermietete", "du": "vermietetest", "er_sie_es": "vermietete", "wir": "vermieteten", "ihr": "vermietetet", "sie_Sie": "vermieteten" },
      "perfekt": "hat vermietet",
      "imperativ": "Vermiete!/Vermietet!/Vermieten Sie!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Der Vermieter vermietet das Zimmer an Studenten.", "id": "Pemilik menyewakan kamar itu kepada mahasiswa." },
      { "de": "Die Wohnung ist bereits ab Mai vermietet.", "id": "Apartemen itu sudah tersewakan mulai bulan Mei." }
    ]
  },
  {
    "id": "kuendigen-275",
    "level": "B1",
    "infinitiv": "kündigen",
    "arti": "mengundurkan diri, memecat, membatalkan kontrak",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kündige", "du": "kündigst", "er_sie_es": "kündigt", "wir": "kündigen", "ihr": "kündigt", "sie_Sie": "kündigen" },
      "praeteritum": { "ich": "kündigte", "du": "kündigtest", "er_sie_es": "kündigte", "wir": "kündigten", "ihr": "kündigtet", "sie_Sie": "kündigten" },
      "perfekt": "hat gekündigt",
      "imperativ": "Kündige!/Kündigt!/Kündigen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er hat gestern seine Stelle beim Finanzamt gekündigt.", "id": "Dia mengundurkan diri kemarin dari kantor pajak." },
      { "de": "Ich muss mein Zeitschriften-Abonnement rechtzeitig kündigen.", "id": "Saya harus membatalkan langganan majalah tepat waktu." }
    ]
  },
  {
    "id": "einstellen-276",
    "level": "B2",
    "infinitiv": "einstellen",
    "arti": "merekrut pegawai, menghentikan produksi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "stelle ein", "du": "stellst ein", "er_sie_es": "stellt ein", "wir": "stellen ein", "ihr": "stellt ein", "sie_Sie": "stellen ein" },
      "praeteritum": { "ich": "stellte ein", "du": "stelltest ein", "er_sie_es": "stellte ein", "wir": "stellten ein", "ihr": "stelltet ein", "sie_Sie": "stellten ein" },
      "perfekt": "hat eingestellt",
      "imperativ": "Stell ein!/Stellt ein!/Stellen Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Die Firma will dieses Jahr fünfzig neue Ingenieure einstellen.", "id": "Perusahaan berencana merekrut lima puluh insinyur baru tahun ini." },
      { "de": "Das Werk hat die Produktion vorübergehend eingestellt.", "id": "Pabrik tersebut menghentikan kegiatan produksi untuk sementara." }
    ]
  },
  {
    "id": "entlassen-277",
    "level": "B2",
    "infinitiv": "entlassen",
    "arti": "mem-PHK karyawan, memulangkan pasien RS",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "entlasse", "du": "entlässt", "er_sie_es": "entlässt", "wir": "entlassen", "ihr": "entlasst", "sie_Sie": "entlassen" },
      "praeteritum": { "ich": "entließ", "du": "entließest", "er_sie_es": "entließ", "wir": "entließen", "ihr": "entließt", "sie_Sie": "entließen" },
      "perfekt": "hat entlassen",
      "imperativ": "Entlass!/Entlasst!/Entlassen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wegen der Krise mussten viele Mitarbeiter entlassen werden.", "id": "Karena krisis, banyak karyawan terpaksa di-PHK." },
      { "de": "Der Patient wird morgen aus dem Krankenhaus entlassen.", "id": "Pasien itu akan dipulangkan dari rumah sakit besok." }
    ]
  },
  {
    "id": "beschaeftigen-278",
    "level": "B1",
    "infinitiv": "beschäftigen",
    "arti": "mempekerjakan, menyibukkan diri (sich beschäftigen)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "beschäftige", "du": "beschäftigst", "er_sie_es": "beschäftigt", "wir": "beschäftigen", "ihr": "beschäftigt", "sie_Sie": "beschäftigen" },
      "praeteritum": { "ich": "beschäftigte", "du": "beschäftigtest", "er_sie_es": "beschäftigte", "wir": "beschäftigten", "ihr": "beschäftigtet", "sie_Sie": "beschäftigten" },
      "perfekt": "hat beschäftigt",
      "imperativ": "Beschäftige!/Beschäftigt!/Beschäftigen Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "In seiner Freizeit beschäftigt er sich mit Philosophie.", "id": "Di waktu luangnya dia menyibukkan diri dengan filsafat." },
      { "de": "Das Unternehmen beschäftigt über tausend Mitarbeiter.", "id": "Perusahaan itu mempekerjakan lebih dari seribu karyawan." }
    ]
  },
  {
    "id": "organisieren-279",
    "level": "A2",
    "infinitiv": "organisieren",
    "arti": "mengatur, mengorganisasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "organisiere", "du": "organisierst", "er_sie_es": "organisiert", "wir": "organisieren", "ihr": "organisiert", "sie_Sie": "organisieren" },
      "praeteritum": { "ich": "organisierte", "du": "organisiertest", "er_sie_es": "organisierte", "wir": "organisierten", "ihr": "organisiertet", "sie_Sie": "organisierten" },
      "perfekt": "hat organisiert",
      "imperativ": "Organisiere!/Organisiert!/Organisieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wer organisiert die diesjährige Weihnachtsfeier?", "id": "Siapa yang mengorganisasi pesta Natal tahun ini?" },
      { "de": "Sie hat die Konferenz hervorragend organisiert.", "id": "Dia mengatur jalannya konferensi dengan luar biasa baik." }
    ]
  },
  {
    "id": "planen-280",
    "level": "A2",
    "infinitiv": "planen",
    "arti": "merencanakan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "plane", "du": "planst", "er_sie_es": "plant", "wir": "planen", "ihr": "plant", "sie_Sie": "planen" },
      "praeteritum": { "ich": "plante", "du": "plantest", "er_sie_es": "plante", "wir": "planten", "ihr": "plantet", "sie_Sie": "planten" },
      "perfekt": "hat geplant",
      "imperativ": "Plane!/Plant!/Planen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir planen eine große Reise durch Südamerika.", "id": "Kami merencanakan perjalanan besar menjelajahi Amerika Selatan." },
      { "de": "Alles lief genau so, wie wir es geplant hatten.", "id": "Semua berjalan persis seperti apa yang telah kami rencanakan." }
    ]
  },
  {
    "id": "bauen-281",
    "level": "A1",
    "infinitiv": "bauen",
    "arti": "membangun, mendirikan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "baue", "du": "baust", "er_sie_es": "baut", "wir": "bauen", "ihr": "baut", "sie_Sie": "bauen" },
      "praeteritum": { "ich": "baute", "du": "bautest", "er_sie_es": "baute", "wir": "bauten", "ihr": "bautet", "sie_Sie": "bauten" },
      "perfekt": "hat gebaut",
      "imperativ": "Bau!/Baut!/Bauen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie bauen ein modernes Haus am Stadtrand.", "id": "Mereka membangun rumah modern di pinggiran kota." },
      { "de": "Die Stadt baut eine neue Brücke über den Fluss.", "id": "Pemerintah kota mendirikan jembatan baru di atas sungai." }
    ]
  },
  {
    "id": "abbauen-282",
    "level": "B2",
    "infinitiv": "abbauen",
    "arti": "membongkar, mereduksi stres/staf",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "baue ab", "du": "baust ab", "er_sie_es": "baut ab", "wir": "bauen ab", "ihr": "baut ab", "sie_Sie": "bauen ab" },
      "praeteritum": { "ich": "baute ab", "du": "bautest ab", "er_sie_es": "baute ab", "wir": "bauten ab", "ihr": "bautet ab", "sie_Sie": "bauten ab" },
      "perfekt": "hat abgebaut",
      "imperativ": "Bau ab!/Baut ab!/Bauen Sie ab!"
    },
    "contoh_kalimat": [
      { "de": "Sport hilft dabei, Stress abzubauen.", "id": "Olahraga membantu meredakan stres." },
      { "de": "Das Unternehmen muss Stellen abbauen.", "id": "Perusahaan terpaksa mengurangi posisi kerja/karyawan." }
    ]
  },
  {
    "id": "aufbauen-283",
    "level": "B1",
    "infinitiv": "aufbauen",
    "arti": "merakit, mendirikan relasi/karier",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "baue auf", "du": "baust auf", "er_sie_es": "baut auf", "wir": "bauen auf", "ihr": "baut auf", "sie_Sie": "bauen auf" },
      "praeteritum": { "ich": "baute auf", "du": "bautest auf", "er_sie_es": "baute auf", "wir": "bauten auf", "ihr": "bautet auf", "sie_Sie": "bauten auf" },
      "perfekt": "hat aufgebaut",
      "imperativ": "Bau auf!/Baut auf!/Bauen Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Wir müssen das Zelt vor Einbruch der Dunkelheit aufbauen.", "id": "Kita harus merakit tenda sebelum hari gelap." },
      { "de": "Er hat sich ein erfolgreiches Geschäft aufgebaut.", "id": "Dia telah membangun bisnis yang sukses." }
    ]
  },
  {
    "id": "zerstoeren-284",
    "level": "B1",
    "infinitiv": "zerstören",
    "arti": "menghancurkan, merusak total",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "zerstöre", "du": "zerstörst", "er_sie_es": "zerstört", "wir": "zerstören", "ihr": "zerstört", "sie_Sie": "zerstören" },
      "praeteritum": { "ich": "zerstörte", "du": "zerstörtest", "er_sie_es": "zerstörte", "wir": "zerstörten", "ihr": "zerstörtet", "sie_Sie": "zerstörten" },
      "perfekt": "hat zerstört",
      "imperativ": "Zerstöre!/Zerstört!/Zerstören Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das schwere Erdbeben zerstörte viele Häuser.", "id": "Gempa bumi dahsyat itu menghancurkan banyak rumah." },
      { "de": "Lügen können jedes Vertrauen zerstören.", "id": "Kebohongan dapat merusak rasa percaya apa pun." }
    ]
  },
  {
    "id": "beschädigen-285",
    "level": "B2",
    "infinitiv": "beschädigen",
    "arti": "merusakkan sebagian aset",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "beschädige", "du": "beschädigst", "er_sie_es": "beschädigt", "wir": "beschädigen", "ihr": "beschädigt", "sie_Sie": "beschädigen" },
      "praeteritum": { "ich": "beschädigte", "du": "beschädigtest", "er_sie_es": "beschädigte", "wir": "beschädigten", "ihr": "beschädigtet", "sie_Sie": "beschädigten" },
      "perfekt": "hat beschädigt",
      "imperativ": "Beschädige!/Beschädigt!/Beschädigen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Hagel hat das Dach beschädigt.", "id": "Hujan es merusak bagian atap rumah." },
      { "de": "Das Paket kam leider beschädigt an.", "id": "Sayang sekali paket itu tiba dalam keadaan rusak." }
    ]
  },
  {
    "id": "renovieren-286",
    "level": "A2",
    "infinitiv": "renovieren",
    "arti": "merenovasi bangunan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "renoviere", "du": "renovierst", "er_sie_es": "renoviert", "wir": "renovieren", "ihr": "renoviert", "sie_Sie": "renovieren" },
      "praeteritum": { "ich": "renovierte", "du": "renoviertest", "er_sie_es": "renovierte", "wir": "renovierten", "ihr": "renoviertet", "sie_Sie": "renovierten" },
      "perfekt": "hat renoviert",
      "imperativ": "Renoviere!/Renoviert!/Renovieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir renovieren unsere Küche im Sommer.", "id": "Kami merenovasi dapur kami pada musim panas." },
      { "de": "Die alte Wohnung muss dringend renoviert werden.", "id": "Apartemen tua itu harus segera direnovasi." }
    ]
  },
  {
    "id": "streichen-287",
    "level": "B1",
    "infinitiv": "streichen",
    "arti": "mengecat dinding, membatalkan jadwal",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "streiche", "du": "streichst", "er_sie_es": "streicht", "wir": "streichen", "ihr": "streicht", "sie_Sie": "streichen" },
      "praeteritum": { "ich": "strich", "du": "strichst", "er_sie_es": "strich", "wir": "strichen", "ihr": "stricht", "sie_Sie": "strichen" },
      "perfekt": "hat gestrichen",
      "imperativ": "Streich!/Streicht!/Streichen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er streicht die Wände weiß.", "id": "Dia mengecat dinding-dinding itu dengan warna putih." },
      { "de": "Der Flug wurde wegen des Sturms gestrichen.", "id": "Penerbangan dibatalkan akibat badai." }
    ]
  },
  {
    "id": "malen-288",
    "level": "A1",
    "infinitiv": "malen",
    "arti": "melukis gambar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "male", "du": "malst", "er_sie_es": "malt", "wir": "malen", "ihr": "malt", "sie_Sie": "malen" },
      "praeteritum": { "ich": "malte", "du": "maltest", "er_sie_es": "malte", "wir": "malten", "ihr": "maltet", "sie_Sie": "malten" },
      "perfekt": "hat gemalt",
      "imperativ": "Male!/Malt!/Malen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Kind malt ein Bild für seine Oma.", "id": "Anak itu melukis gambar untuk neneknya." },
      { "de": "Sie malt gerne Porträts mit Ölfarben.", "id": "Dia gemar melukis potret dengan cat minyak." }
    ]
  },
  {
    "id": "zeichnen-289",
    "level": "A2",
    "infinitiv": "zeichnen",
    "arti": "menggambar sketsa garis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "zeichne", "du": "zeichnest", "er_sie_es": "zeichnet", "wir": "zeichnen", "ihr": "zeichnet", "sie_Sie": "zeichnen" },
      "praeteritum": { "ich": "zeichnete", "du": "zeichnetest", "er_sie_es": "zeichnete", "wir": "zeichneten", "ihr": "zeichnetet", "sie_Sie": "zeichneten" },
      "perfekt": "hat gezeichnet",
      "imperativ": "Zeichne!/Zeichnet!/Zeichnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Architekt zeichnet den Grundriss des Hauses.", "id": "Arsitek itu menggambar denah rumah." },
      { "de": "Er kann Tiere sehr realistisch zeichnen.", "id": "Dia bisa menggambar hewan secara sangat realistis." }
    ]
  },
  {
    "id": "basteln-290",
    "level": "A2",
    "infinitiv": "basteln",
    "arti": "membuat kerajinan tangan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bastele", "du": "bastelst", "er_sie_es": "bastelt", "wir": "basteln", "ihr": "bastelt", "sie_Sie": "basteln" },
      "praeteritum": { "ich": "bastelte", "du": "basteltest", "er_sie_es": "bastelte", "wir": "bastelten", "ihr": "basteltet", "sie_Sie": "bastelten" },
      "perfekt": "hat gebastelt",
      "imperativ": "Bastele!/Bastelt!/Basteln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Zu Weihnachten basteln wir Dekorationen aus Papier.", "id": "Menjelang Natal kami membuat hiasan dari kertas." },
      { "de": "Er bastelt am liebsten an Modellautos.", "id": "Dia paling suka merakit mobil-mobilan miniatur." }
    ]
  },
  {
    "id": "naehen-291",
    "level": "A2",
    "infinitiv": "nähen",
    "arti": "menjahit pakaian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "nähe", "du": "nähst", "er_sie_es": "näht", "wir": "nähen", "ihr": "näht", "sie_Sie": "nähen" },
      "praeteritum": { "ich": "nähte", "du": "nähtest", "er_sie_es": "nähte", "wir": "nähten", "ihr": "nähtet", "sie_Sie": "nähten" },
      "perfekt": "hat genäht",
      "imperativ": "Nähe!/Näht!/Nähen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Meine Großmutter näht ihre Kleider selbst.", "id": "Nenek saya menjahit pakaiannya sendiri." },
      { "de": "Kannst du den Knopf wieder annähen?", "id": "Bisakah kamu menjahitkan kembali kancing ini?" }
    ]
  },
  {
    "id": "stricken-292",
    "level": "A2",
    "infinitiv": "stricken",
    "arti": "merajut wol",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "stricke", "du": "strickst", "er_sie_es": "strickt", "wir": "stricken", "ihr": "strickt", "sie_Sie": "stricken" },
      "praeteritum": { "ich": "strickte", "du": "stricktest", "er_sie_es": "strickte", "wir": "strickten", "ihr": "stricktet", "sie_Sie": "strickten" },
      "perfekt": "hat gestrickt",
      "imperativ": "Stricke!/Strickt!/Stricken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie strickt einen dicken Schal für den Winter.", "id": "Dia merajut syal tebal untuk musim dingin." },
      { "de": "Stricken entspannt mich am Abend.", "id": "Merajut membuat saya rileks di malam hari." }
    ]
  },
  {
    "id": "waschen-293",
    "level": "A1",
    "infinitiv": "abwaschen",
    "arti": "mencuci perabotan makan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "wasche ab", "du": "wäschst ab", "er_sie_es": "wäscht ab", "wir": "waschen ab", "ihr": "wascht ab", "sie_Sie": "waschen ab" },
      "praeteritum": { "ich": "wusch ab", "du": "wuschst ab", "er_sie_es": "wusch ab", "wir": "wuschen ab", "ihr": "wuscht ab", "sie_Sie": "wuschen ab" },
      "perfekt": "hat abgewaschen",
      "imperativ": "Wasch ab!/Wascht ab!/Waschen Sie ab!"
    },
    "contoh_kalimat": [
      { "de": "Wer wäscht heute das Geschirr ab?", "id": "Siapa yang mencuci piring hari ini?" },
      { "de": "Ich habe nach dem Essen sofort abgewaschen.", "id": "Saya langsung mencuci perabot makan seusai santap." }
    ]
  },
  {
    "id": "spuelen-294",
    "level": "A2",
    "infinitiv": "spülen",
    "arti": "membilas, mencuci piring",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "spüle", "du": "spülst", "er_sie_es": "spült", "wir": "spülen", "ihr": "spült", "sie_Sie": "spülen" },
      "praeteritum": { "ich": "spülte", "du": "spültest", "er_sie_es": "spülte", "wir": "spülten", "ihr": "spültet", "sie_Sie": "spülten" },
      "perfekt": "hat gespült",
      "imperativ": "Spül!/Spült!/Spülen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Spülmaschine spült das Geschirr gründlich.", "id": "Mesin pencuci membilas piring-piring dengan bersih." },
      { "de": "Spül bitte die Gläser mit kaltem Wasser aus.", "id": "Bilaslah gelas-gelas itu dengan air dingin." }
    ]
  },
  {
    "id": "buegeln-295",
    "level": "A2",
    "infinitiv": "bügeln",
    "arti": "menyetrika pakaian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bügele", "du": "bügelst", "er_sie_es": "bügelt", "wir": "bügeln", "ihr": "bügelt", "sie_Sie": "bügeln" },
      "praeteritum": { "ich": "bügelte", "du": "bügeltest", "er_sie_es": "bügelte", "wir": "bügelten", "ihr": "bügeltet", "sie_Sie": "bügelten" },
      "perfekt": "hat gebügelt",
      "imperativ": "Bügele!/Bügelt!/Bügeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich muss noch fünf Hemden für die Arbeit bügeln.", "id": "Saya masih harus menyetrika lima kemeja untuk kerja." },
      { "de": "Bügelst du deine T-Shirts?", "id": "Apakah kamu menyetrika kausmu?" }
    ]
  },
  {
    "id": "saugen-296",
    "level": "A2",
    "infinitiv": "staubsaugen",
    "arti": "menyedot debu ruangan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "staubsauge", "du": "staubsaugst", "er_sie_es": "staubsaugt", "wir": "staubsaugen", "ihr": "staubsaugt", "sie_Sie": "staubsaugen" },
      "praeteritum": { "ich": "staubsaugte", "du": "staubsaugtest", "er_sie_es": "staubsaugte", "wir": "staubsaugten", "ihr": "staubsaugtet", "sie_Sie": "staubsaugten" },
      "perfekt": "hat gestaubsaugt",
      "imperativ": "Staubsauge!/Staubsaugt!/Staubsaugen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Samstags staubsauge ich das gesamte Wohnzimmer.", "id": "Setiap hari Sabtu saya menyedot debu seluruh ruang tamu." },
      { "de": "Der Teppich muss dringend gestaubsaugt werden.", "id": "Karpet itu harus segera disedot debunya." }
    ]
  },
  {
    "id": "wischen-297",
    "level": "A2",
    "infinitiv": "wischen",
    "arti": "mengepel lantai, mengusap",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "wische", "du": "wischst", "er_sie_es": "wischt", "wir": "wischen", "ihr": "wischt", "sie_Sie": "wischen" },
      "praeteritum": { "ich": "wischte", "du": "wischtest", "er_sie_es": "wischte", "wir": "wischten", "ihr": "wischtet", "sie_Sie": "wischen" },
      "perfekt": "hat gewischt",
      "imperativ": "Wisch!/Wischt!/Wischen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie wischt den Boden mit einem feuchten Tuch.", "id": "Dia mengepel lantai dengan kain basah." },
      { "de": "Wisch dir bitte den Mund ab!", "id": "Usaplah mulutmu!" }
    ]
  },
  {
    "id": "aufraeumen-298",
    "level": "A1",
    "infinitiv": "aufräumen",
    "arti": "merapikan kamar/barang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "räume auf", "du": "räumst auf", "er_sie_es": "räumt auf", "wir": "räumen auf", "ihr": "räumt auf", "sie_Sie": "räumen auf" },
      "praeteritum": { "ich": "räumte auf", "du": "räumtest auf", "er_sie_es": "räumte auf", "wir": "räumten auf", "ihr": "räumtet auf", "sie_Sie": "räumten auf" },
      "perfekt": "hat aufgeräumt",
      "imperativ": "Räum auf!/Räumt auf!/Räumen Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Räum bitte dein Zimmer auf!", "id": "Rapikan kamarmu, tolong!" },
      { "de": "Ich habe den ganzen Schreibtisch aufgeräumt.", "id": "Saya sudah merapikan seluruh meja tulis." }
    ]
  },
  {
    "id": "ordnen-299",
    "level": "A2",
    "infinitiv": "ordnen",
    "arti": "menyusun secara teratur",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "ordne", "du": "ordnest", "er_sie_es": "ordnet", "wir": "ordnen", "ihr": "ordnet", "sie_Sie": "ordnen" },
      "praeteritum": { "ich": "ordnete", "du": "ordnetest", "er_sie_es": "ordnete", "wir": "ordneten", "ihr": "ordnetet", "sie_Sie": "ordneten" },
      "perfekt": "hat geordnet",
      "imperativ": "Ordne!/Ordnet!/Ordnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er ordnet die Dokumente alphabetisch.", "id": "Dia menyusun dokumen-dokumen itu menurut abjad." },
      { "de": "Ich muss zuerst meine Gedanken ordnen.", "id": "Saya harus menata pikiran saya terlebih dahulu." }
    ]
  },
  {
    "id": "sortieren-300",
    "level": "A2",
    "infinitiv": "sortieren",
    "arti": "menyortir, memilah kelompok",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "sortiere", "du": "sortierst", "er_sie_es": "sortiert", "wir": "sortieren", "ihr": "sortiert", "sie_Sie": "sortieren" },
      "praeteritum": { "ich": "sortierte", "du": "sortiertest", "er_sie_es": "sortierte", "wir": "sortierten", "ihr": "sortiertet", "sie_Sie": "sortierten" },
      "perfekt": "hat sortiert",
      "imperativ": "Sortiere!/Sortiert!/Sortieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "In Deutschland sortiert man den Müll sorgfältig.", "id": "Di Jerman orang memilah sampah dengan cermat." },
      { "de": "Sie sortiert ihre Kleidung nach Farben.", "id": "Dia menyortir pakaiannya berdasarkan warna." }
    ]
  },
  {
    "id": "trennen-301",
    "level": "B1",
    "infinitiv": "trennen",
    "arti": "memisahkan, berpisah hubungan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "trenne", "du": "trennst", "er_sie_es": "trennt", "wir": "trennen", "ihr": "trennt", "sie_Sie": "trennen" },
      "praeteritum": { "ich": "trennte", "du": "trenntest", "er_sie_es": "trennte", "wir": "trennten", "ihr": "trenntet", "sie_Sie": "trennten" },
      "perfekt": "hat getrennt",
      "imperativ": "Trenne!/Trennt!/Trennen Sie!"
    },
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ein Fluss trennt die beiden Stadtteile.", "id": "Sebuah sungai memisahkan kedua kawasan kota itu." },
      { "de": "Das Paar hat sich nach vielen Jahren getrennt.", "id": "Pasangan itu berpisah setelah bertahun-tahun bersama." }
    ]
  },
  {
    "id": "verbinden-302",
    "level": "A2",
    "infinitiv": "verbinden",
    "arti": "menghubungkan rute/telepon, membalut luka",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verbinde", "du": "verbindest", "er_sie_es": "verbindet", "wir": "verbinden", "ihr": "verbindet", "sie_Sie": "verbinden" },
      "praeteritum": { "ich": "verband", "du": "verbandst", "er_sie_es": "verband", "wir": "verbanden", "ihr": "verbandet", "sie_Sie": "verbanden" },
      "perfekt": "hat verbunden",
      "imperativ": "Verbinde!/Verbindet!/Verbinden Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Die Autobahn verbindet die beiden Metropolen.", "id": "Jalan tol itu menghubungkan kedua kota metropolitan." },
      { "de": "Können Sie mich bitte mit Herrn Schmidt verbinden?", "id": "Bisakah Anda menyambungkan panggilan saya ke Tuan Schmidt?" }
    ]
  },
  {
    "id": "anschliessen-303",
    "level": "B1",
    "infinitiv": "anschließen",
    "arti": "menyambungkan kabel/perangkat",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "schließe an", "du": "schließt an", "er_sie_es": "schließt an", "wir": "schließen an", "ihr": "schließt an", "sie_Sie": "schließen an" },
      "praeteritum": { "ich": "schloss an", "du": "schlossest an", "er_sie_es": "schloss an", "wir": "schlossen an", "ihr": "schlosst an", "sie_Sie": "schlossen an" },
      "perfekt": "hat angeschlossen",
      "imperativ": "Schließ an!/Schließt an!/Schließen Sie an!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich schließe den Monitor an den Laptop an.", "id": "Saya menyambungkan monitor ke laptop." },
      { "de": "Wir möchten uns Ihrer Meinung voll anschließen.", "id": "Kami ingin turut menyetujui pendapat Anda." }
    ]
  },
  {
    "id": "einschalten-304",
    "level": "A2",
    "infinitiv": "einschalten",
    "arti": "menyalakan alat elektronik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "schalte ein", "du": "schaltest ein", "er_sie_es": "schaltet ein", "wir": "schalten ein", "ihr": "schaltet ein", "sie_Sie": "schalten ein" },
      "praeteritum": { "ich": "schaltete ein", "du": "schaltetest ein", "er_sie_es": "schaltete ein", "wir": "schalteten ein", "ihr": "schaltetet ein", "sie_Sie": "schalteten ein" },
      "perfekt": "hat eingeschaltet",
      "imperativ": "Schalte ein!/Schaltet ein!/Schalten Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Schalte bitte das Licht ein, es wird dunkel.", "id": "Tolong nyalakan lampu, hari mulai gelap." },
      { "de": "Er hat das Radio eingeschaltet.", "id": "Dia menyalakan radio." }
    ]
  },
  {
    "id": "ausschalten-305",
    "level": "A2",
    "infinitiv": "ausschalten",
    "arti": "mematikan alat elektronik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "schalte aus", "du": "schaltest aus", "er_sie_es": "schaltet aus", "wir": "schalten aus", "ihr": "schaltet aus", "sie_Sie": "schalten aus" },
      "praeteritum": { "ich": "schaltete aus", "du": "schaltetest aus", "er_sie_es": "schaltete aus", "wir": "schalteten aus", "ihr": "schaltetet aus", "sie_Sie": "schalteten aus" },
      "perfekt": "hat ausgeschaltet",
      "imperativ": "Schalte aus!/Schaltet aus!/Schalten Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Vergiss nicht, den Fernseher auszuschalten!", "id": "Jangan lupa mematikan televisi!" },
      { "de": "Schalten Sie bitte Ihr Handy während des Flugs aus.", "id": "Silakan matikan ponsel Anda selama penerbangan." }
    ]
  },
  {
    "id": "anmachen-306",
    "level": "A1",
    "infinitiv": "anmachen",
    "arti": "menyalakan (lampu/mesin/musik)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "mache an", "du": "machst an", "er_sie_es": "macht an", "wir": "machen an", "ihr": "macht an", "sie_Sie": "machen an" },
      "praeteritum": { "ich": "machte an", "du": "machtest an", "er_sie_es": "machte an", "wir": "machten an", "ihr": "machtet an", "sie_Sie": "machten an" },
      "perfekt": "hat angemacht",
      "imperativ": "Mach an!/Macht an!/Machen Sie an!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du bitte die Heizung anmachen?", "id": "Bisakah kamu menyalakan pemanas ruangannya?" },
      { "de": "Er macht gern laute Musik an.", "id": "Dia suka menyetel musik keras-keras." }
    ]
  },
  {
    "id": "ausmachen-307",
    "level": "A1",
    "infinitiv": "ausmachen",
    "arti": "memadamkan, menyepakati janji",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "mache aus", "du": "machst aus", "er_sie_es": "macht aus", "wir": "machen aus", "ihr": "macht aus", "sie_Sie": "machen aus" },
      "praeteritum": { "ich": "machte aus", "du": "machtest aus", "er_sie_es": "machte aus", "wir": "machten aus", "ihr": "machtet aus", "sie_Sie": "machten aus" },
      "perfekt": "hat ausgemacht",
      "imperativ": "Mach aus!/Macht aus!/Machen Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Mach bitte das Licht aus, wenn du gehst.", "id": "Matikan lampu jika kamu pergi." },
      { "de": "Wir haben einen neuen Termin ausgemacht.", "id": "Kami telah menyepakati jadwal janji temu baru." }
    ]
  },
  {
    "id": "aufmachen-308",
    "level": "A1",
    "infinitiv": "aufmachen",
    "arti": "membuka pintu/jendela",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "mache auf", "du": "machst auf", "er_sie_es": "macht auf", "wir": "machen auf", "ihr": "macht auf", "sie_Sie": "machen auf" },
      "praeteritum": { "ich": "machte auf", "du": "machtest auf", "er_sie_es": "machte auf", "wir": "machten auf", "ihr": "machtet auf", "sie_Sie": "machten auf" },
      "perfekt": "hat aufgemacht",
      "imperativ": "Mach auf!/Macht auf!/Machen Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Kannst du bitte die Tür aufmachen?", "id": "Bisakah kamu membukakan pintunya?" },
      { "de": "Er macht das Fenster auf, um frische Luft hereinzulassen.", "id": "Dia membuka jendela agar udara segar masuk." }
    ]
  },
  {
    "id": "zumachen-309",
    "level": "A1",
    "infinitiv": "zumachen",
    "arti": "menutup pintu/jendela",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "mache zu", "du": "machst zu", "er_sie_es": "macht zu", "wir": "machen zu", "ihr": "macht zu", "sie_Sie": "machen zu" },
      "praeteritum": { "ich": "machte zu", "du": "machtest zu", "er_sie_es": "machte zu", "wir": "machten zu", "ihr": "machtet zu", "sie_Sie": "machten zu" },
      "perfekt": "hat zugemacht",
      "imperativ": "Mach zu!/Macht zu!/Machen Sie zu!"
    },
    "contoh_kalimat": [
      { "de": "Mach bitte das Fenster zu, es zieht!", "id": "Tolong tutup jendelanya, ada angin kencang masuk!" },
      { "de": "Die Geschäfte machen sonntags zu.", "id": "Toko-toko tutup pada hari Minggu." }
    ]
  },
  {
    "id": "schliessen-310",
    "level": "B1",
    "infinitiv": "abschließen",
    "arti": "mengunci pintu, menamatkan studi",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "schließe ab", "du": "schließt ab", "er_sie_es": "schließt ab", "wir": "schließen an", "ihr": "schließt ab", "sie_Sie": "schließen ab" },
      "praeteritum": { "ich": "schloss ab", "du": "schlossest ab", "er_sie_es": "schloss ab", "wir": "schlossen ab", "ihr": "schlosst ab", "sie_Sie": "schlossen ab" },
      "perfekt": "hat abgeschlossen",
      "imperativ": "Schließ ab!/Schließt ab!/Schließen Sie ab!"
    },
    "contoh_kalimat": [
      { "de": "Hast du die Wohnungstür abgeschlossen?", "id": "Sudahkah kamu mengunci pintu apartemen?" },
      { "de": "Sie hat ihr Masterstudium erfolgreich abgeschlossen.", "id": "Dia berhasil menamatkan studi magisternya." }
    ]
  },
  {
    "id": "aufschliessen-311",
    "level": "B1",
    "infinitiv": "aufschließen",
    "arti": "membuka pintu dengan kunci",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "schließe auf", "du": "schließt auf", "er_sie_es": "schließt auf", "wir": "schließen auf", "ihr": "schließt auf", "sie_Sie": "schließen auf" },
      "praeteritum": { "ich": "schloss auf", "du": "schlossest auf", "er_sie_es": "schloss auf", "wir": "schlossen auf", "ihr": "schlosst auf", "sie_Sie": "schlossen auf" },
      "perfekt": "hat aufgeschlossen",
      "imperativ": "Schließ auf!/Schließt auf!/Schließen Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Er schließt die Haustür mit dem Schlüssel auf.", "id": "Dia membuka kunci pintu rumah dengan anak kuncinya." },
      { "de": "Kannst du das Büro schon aufschließen?", "id": "Bisakah kamu membuka kunci ruang kantor itu sekarang?" }
    ]
  },
  {
    "id": "verstecken-312",
    "level": "A2",
    "infinitiv": "verstecken",
    "arti": "menyembunyikan barang/diri",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verstecke", "du": "versteckst", "er_sie_es": "versteckt", "wir": "verstecken", "ihr": "versteckt", "sie_Sie": "verstecken" },
      "praeteritum": { "ich": "versteckte", "du": "verstecktest", "er_sie_es": "versteckte", "wir": "versteckten", "ihr": "verstecktet", "sie_Sie": "versteckten" },
      "perfekt": "hat versteckt",
      "imperativ": "Verstecke!/Versteckt!/Verstecken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Kinder verstecken sich hinter dem großen Schrank.", "id": "Anak-anak bersembunyi di balik lemari besar." },
      { "de": "Wo hast du das Geschenk versteckt?", "id": "Di mana kamu menyembunyikan kado itu?" }
    ]
  },
  {
    "id": "entdecken-313",
    "level": "B1",
    "infinitiv": "wiederentdecken",
    "arti": "menemukan kembali minat/benda",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "entdecke wieder", "du": "entdeckst wieder", "er_sie_es": "entdeckt wieder", "wir": "entdecken wieder", "ihr": "entdeckt wieder", "sie_Sie": "entdecken wieder" },
      "praeteritum": { "ich": "entdeckte wieder", "du": "entdecktest wieder", "er_sie_es": "entdeckte wieder", "wir": "entdeckten wieder", "ihr": "entdecktet wieder", "sie_Sie": "entdeckten wieder" },
      "perfekt": "hat wiederentdeckt",
      "imperativ": "Entdecke wieder!/Entdeckt wieder!/Entdecken Sie wieder!"
    },
    "contoh_kalimat": [
      { "de": "Er hat seine alte Leidenschaft fürs Klavierspielen wiederentdeckt.", "id": "Dia menemukan kembali kecintaannya bermain piano." },
      { "de": "Viele Menschen wiederentdecken die Natur als Erholungsort.", "id": "Banyak orang menemukan kembali alam sebagai tempat pemulihan diri." }
    ]
  },
  {
    "id": "erfinden-314",
    "level": "B1",
    "infinitiv": "erfinden",
    "arti": "menciptakan teknologi baru, mengarang cerita",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "erfinde", "du": "erfindest", "er_sie_es": "erfindet", "wir": "erfinden", "ihr": "erfindet", "sie_Sie": "erfinden" },
      "praeteritum": { "ich": "erfand", "du": "erfandest", "er_sie_es": "erfand", "wir": "erfanden", "ihr": "erfandet", "sie_Sie": "erfanden" },
      "perfekt": "hat erfunden",
      "imperativ": "Erfinde!/Erfindet!/Erfinden Sie!"
    },
    "contoh_kalimat": [
      { "de": "Gutenberg erfand den modernen Buchdruck.", "id": "Gutenberg menciptakan mesin cetak buku modern." },
      { "de": "Diese Ausrede hast du doch frei erfunden!", "id": "Alasan ini pasti cuma kamu karang-karang saja!" }
    ]
  },
  {
    "id": "entwickeln-315",
    "level": "B1",
    "infinitiv": "entwickeln",
    "arti": "mengembangkan software/produk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "entwickle", "du": "entwickelst", "er_sie_es": "entwickelt", "wir": "entwickeln", "ihr": "entwickelt", "sie_Sie": "entwickeln" },
      "praeteritum": { "ich": "entwickelte", "du": "entwickeltest", "er_sie_es": "entwickelte", "wir": "entwickelten", "ihr": "entwickeltet", "sie_Sie": "entwickelten" },
      "perfekt": "hat entwickelt",
      "imperativ": "Entwickle!/Entwickelt!/Entwickeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Softwareteam entwickelt eine neue mobile Anwendung.", "id": "Tim perangkat lunak sedang mengembangkan aplikasi ponsel baru." },
      { "de": "Die Situation hat sich sehr positiv entwickelt.", "id": "Situasinya berkembang secara amat positif." }
    ]
  },
  {
    "id": "produzieren-316",
    "level": "A2",
    "infinitiv": "produzieren",
    "arti": "memproduksi komoditas pabrik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "produziere", "du": "produzierst", "er_sie_es": "produziert", "wir": "produzieren", "ihr": "produziert", "sie_Sie": "produzieren" },
      "praeteritum": { "ich": "produzierte", "du": "produziertest", "er_sie_es": "produzierte", "wir": "produzierten", "ihr": "produziertet", "sie_Sie": "produzierten" },
      "perfekt": "hat produziert",
      "imperativ": "Produziere!/Produziert!/Produzieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Werk produziert täglich tausende Autos.", "id": "Pabrik itu memproduksi ribuan unit mobil setiap hari." },
      { "de": "Deutschland produziert hochwertige Maschinen.", "id": "Jerman memproduksi mesin-mesin berkualitas tinggi." }
    ]
  },
  {
    "id": "herstellen-317",
    "level": "B1",
    "infinitiv": "herstellen",
    "arti": "membuat barang buatan tangan/industri",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "stelle her", "du": "stellst her", "er_sie_es": "stellt her", "wir": "stellen her", "ihr": "stellt her", "sie_Sie": "stellen her" },
      "praeteritum": { "ich": "stellte her", "du": "stelltest her", "er_sie_es": "stellte her", "wir": "stellten her", "ihr": "stelltet her", "sie_Sie": "stellten her" },
      "perfekt": "hat hergestellt",
      "imperativ": "Stell her!/Stellt her!/Stellen Sie her!"
    },
    "contoh_kalimat": [
      { "de": "Dieser Käse wird traditionell in den Alpen hergestellt.", "id": "Keju ini dibuat secara tradisional di Pegunungan Alpen." },
      { "de": "Wir müssen sofort Kontakt zum Kunden herstellen.", "id": "Kita harus segera menjalin kontak dengan pelanggan." }
    ]
  },
  {
    "id": "liefern-318",
    "level": "A2",
    "infinitiv": "ausliefern",
    "arti": "mendistribusikan pesanan, mengekstradisi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "liefere aus", "du": "lieferst aus", "er_sie_es": "liefert aus", "wir": "liefern aus", "ihr": "liefert aus", "sie_Sie": "liefern aus" },
      "praeteritum": { "ich": "lieferte aus", "du": "liefertest aus", "er_sie_es": "lieferte aus", "wir": "lieferten aus", "ihr": "liefertet aus", "sie_Sie": "lieferten aus" },
      "perfekt": "hat ausgeliefert",
      "imperativ": "Liefere aus!/Liefert aus!/Liefern Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Die Ware wird noch im Laufe des Tages ausgeliefert.", "id": "Barang dagangan akan didistribusikan sepanjang hari ini." },
      { "de": "Der Bote liefert die warmen Pizzen aus.", "id": "Kurir mengantarkan piza-piza hangat tersebut." }
    ]
  },
  {
    "id": "transportieren-319",
    "level": "B1",
    "infinitiv": "transportieren",
    "arti": "mengangkut logistik/kargo",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "transportiere", "du": "transportierst", "er_sie_es": "transportiert", "wir": "transportieren", "ihr": "transportiert", "sie_Sie": "transportieren" },
      "praeteritum": { "ich": "transportierte", "du": "transportiertest", "er_sie_es": "transportierte", "wir": "transportierten", "ihr": "transportiertet", "sie_Sie": "transportierten" },
      "perfekt": "hat transportiert",
      "imperativ": "Transportiere!/Transportiert!/Transportieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Güterzug transportiert schwere Maschinen.", "id": "Kereta barang mengangkut mesin-mesin berat." },
      { "de": "Wie transportieren wir das große Sofa nach Hause?", "id": "Bagaimana cara kita mengangkut sofa besar ini pulang ke rumah?" }
    ]
  },
  {
    "id": "lagern-320",
    "level": "B1",
    "infinitiv": "lagern",
    "arti": "menyimpan stok di gudang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lagere", "du": "lagerst", "er_sie_es": "lagert", "wir": "lagern", "ihr": "lagert", "sie_Sie": "lagern" },
      "praeteritum": { "ich": "lagerte", "du": "lagertest", "er_sie_es": "lagerte", "wir": "lagerten", "ihr": "lagertet", "sie_Sie": "lagerten" },
      "perfekt": "hat gelagert",
      "imperativ": "Lagere!/Lagert!/Lagern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Medikamente sollte man kühl und trocken lagern.", "id": "Obat-obatan sebaiknya disimpan di tempat yang sejuk dan kering." },
      { "de": "Die Kartons lagern seit Monaten im Keller.", "id": "Kardus-kardus itu tersimpan di ruang bawah tanah selama berbulan-bulan." }
    ]
  },
  {
    "id": "speichern-321",
    "level": "A2",
    "infinitiv": "speichern",
    "arti": "menyimpan data digital",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "speichere", "du": "speicherst", "er_sie_es": "speichert", "wir": "speichern", "ihr": "speichert", "sie_Sie": "speichern" },
      "praeteritum": { "ich": "speicherte", "du": "speichertest", "er_sie_es": "speicherte", "wir": "speicherten", "ihr": "speichertet", "sie_Sie": "speicherten" },
      "perfekt": "hat gespeichert",
      "imperativ": "Speichere!/Speichert!/Speichern Sie!"
    },
    "contoh_kalimat": [
      { "de": "Vergiss nicht, das Dokument vor dem Schließen zu speichern.", "id": "Jangan lupa menyimpan dokumen sebelum menutupnya." },
      { "de": "Die Fotos werden automatisch in der Cloud gespeichert.", "id": "Foto-foto tersebut disimpan secara otomatis di penyimpanan cloud." }
    ]
  },
  {
    "id": "herunterladen-322",
    "level": "A2",
    "infinitiv": "herunterladen",
    "arti": "mengunduh (download)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "lade herunter", "du": "lädst herunter", "er_sie_es": "lädt herunter", "wir": "laden herunter", "ihr": "ladet herunter", "sie_Sie": "laden herunter" },
      "praeteritum": { "ich": "lud herunter", "du": "ludst herunter", "er_sie_es": "lud herunter", "wir": "luden herunter", "ihr": "ludet herunter", "sie_Sie": "luden herunter" },
      "perfekt": "hat heruntergeladen",
      "imperativ": "Lade herunter!/Ladet herunter!/Laden Sie herunter!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe die neue App auf mein Handy heruntergeladen.", "id": "Saya mengunduh aplikasi baru tersebut ke ponsel saya." },
      { "de": "Wo kann man diese PDF-Datei herunterladen?", "id": "Di mana kita bisa mengunduh berkas PDF ini?" }
    ]
  },
  {
    "id": "hochladen-323",
    "level": "A2",
    "infinitiv": "hochladen",
    "arti": "mengunggah (upload)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "lade hoch", "du": "lädst hoch", "er_sie_es": "lädt hoch", "wir": "laden hoch", "ihr": "ladet hoch", "sie_Sie": "laden hoch" },
      "praeteritum": { "ich": "lud hoch", "du": "ludst hoch", "er_sie_es": "lud hoch", "wir": "luden hoch", "ihr": "ludet hoch", "sie_Sie": "luden hoch" },
      "perfekt": "hat hochgeladen",
      "imperativ": "Lade hoch!/Ladet hoch!/Laden Sie hoch!"
    },
    "contoh_kalimat": [
      { "de": "Er lädt ein kurzes Video auf Instagram hoch.", "id": "Dia mengunggah video pendek ke Instagram." },
      { "de": "Laden Sie Ihren Lebenslauf bitte als PDF hoch.", "id": "Unggahlah riwayat hidup Anda dalam format PDF." }
    ]
  },
  {
    "id": "installieren-324",
    "level": "A2",
    "infinitiv": "installieren",
    "arti": "memasang aplikasi/perangkat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "installiere", "du": "installierst", "er_sie_es": "installiert", "wir": "installieren", "ihr": "installiert", "sie_Sie": "installieren" },
      "praeteritum": { "ich": "installierte", "du": "installiertest", "er_sie_es": "installierte", "wir": "installierten", "ihr": "installiertet", "sie_Sie": "installierten" },
      "perfekt": "hat installiert",
      "imperativ": "Installiere!/Installiert!/Installieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich muss das neueste Sicherheits-Update installieren.", "id": "Saya harus memasang pembaruan keamanan terbaru." },
      { "de": "Der Techniker hat die Klimaanlage fachgerecht installiert.", "id": "Teknisi memasang pendingin ruangan secara profesional." }
    ]
  },
  {
    "id": "loeschen-325",
    "level": "A2",
    "infinitiv": "löschen",
    "arti": "menghapus pesan/kontak",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lösche", "du": "löschst", "er_sie_es": "löscht", "wir": "löschen", "ihr": "löscht", "sie_Sie": "löschen" },
      "praeteritum": { "ich": "löschte", "du": "löschtest", "er_sie_es": "löschte", "wir": "löschten", "ihr": "löschtet", "sie_Sie": "löschten" },
      "perfekt": "hat gelöscht",
      "imperativ": "Lösch!/Löscht!/Löschen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe die E-Mail aus Versehen gelöscht.", "id": "Saya tidak sengaja menghapus email tersebut." },
      { "de": "Löschen Sie bitte den Browser-Verlauf regelmäßig.", "id": "Hapuslah riwayat peramban secara berkala." }
    ]
  },
  {
    "id": "aktualisieren-326",
    "level": "B1",
    "infinitiv": "aktualisieren",
    "arti": "memperbarui sistem/halaman",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "aktualisiere", "du": "aktualisierst", "er_sie_es": "aktualisiert", "wir": "aktualisieren", "ihr": "aktualisiert", "sie_Sie": "aktualisieren" },
      "praeteritum": { "ich": "aktualisierte", "du": "aktualisiertest", "er_sie_es": "aktualisierte", "wir": "aktualisierten", "ihr": "aktualisiertet", "sie_Sie": "aktualisierten" },
      "perfekt": "hat aktualisiert",
      "imperativ": "Aktualisiere!/Aktualisiert!/Aktualisieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Bitte aktualisieren Sie die Webseite noch einmal.", "id": "Tolong muat ulang dan perbarui halaman situs sekali lagi." },
      { "de": "Wir müssen unsere Kontaktdaten in der Datenbank aktualisieren.", "id": "Kita harus memperbarui data kontak kita di basis data." }
    ]
  },
  {
    "id": "kopieren-327",
    "level": "A1",
    "infinitiv": "kopieren",
    "arti": "menyalin dokumen/teks",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kopiere", "du": "kopierst", "er_sie_es": "kopiert", "wir": "kopieren", "ihr": "kopiert", "sie_Sie": "kopieren" },
      "praeteritum": { "ich": "kopierte", "du": "kopiertest", "er_sie_es": "kopierte", "wir": "kopierten", "ihr": "kopiertet", "sie_Sie": "kopierten" },
      "perfekt": "hat kopiert",
      "imperativ": "Kopiere!/Kopiert!/Kopieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kopieren Sie bitte diesen Text in die Zwischenablage.", "id": "Salinlah teks ini ke papan klip." },
      { "de": "Kannst du mir die Unterlagen schnell kopieren?", "id": "Bisakah kamu menyalin dokumen-dokumen itu untukku dengan cepat?" }
    ]
  },
  {
    "id": "einfuegen-328",
    "level": "A2",
    "infinitiv": "einfügen",
    "arti": "menempelkan teks (paste), menyisipkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "füge ein", "du": "fügst ein", "er_sie_es": "fügt ein", "wir": "fügen ein", "ihr": "fügt ein", "sie_Sie": "fügen ein" },
      "praeteritum": { "ich": "fügte ein", "du": "fügtest ein", "er_sie_es": "fügte ein", "wir": "fügten ein", "ihr": "fügtet ein", "sie_Sie": "fügten ein" },
      "perfekt": "hat eingefügt",
      "imperativ": "Füge ein!/Fügt ein!/Fügen Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Fügen Sie das Bild in die Word-Datei ein.", "id": "Sisipkan gambar itu ke dalam berkas Word." },
      { "de": "Mit Strg+V kannst du den kopierten Text einfügen.", "id": "Dengan tombol Ctrl+V kamu bisa menempelkan teks yang disalin." }
    ]
  },
  {
    "id": "ausschneiden-329",
    "level": "B1",
    "infinitiv": "ausschneiden",
    "arti": "memotong bagian teks (cut), menggunting",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "schneide aus", "du": "schneidest aus", "er_sie_es": "schneidet aus", "wir": "schneiden aus", "ihr": "schneidet aus", "sie_Sie": "schneiden aus" },
      "praeteritum": { "ich": "schnitt aus", "du": "schnittest aus", "er_sie_es": "schnitt aus", "wir": "schnitten aus", "ihr": "schnittet aus", "sie_Sie": "schnitten aus" },
      "perfekt": "hat ausgeschnitten",
      "imperativ": "Schneide aus!/Schneidet aus!/Schneiden Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Er hat den Artikel sorgfältig aus der Zeitung ausgeschnitten.", "id": "Dia menggunting artikel itu dari koran dengan rapi." },
      { "de": "Schneide den Absatz aus und füge ihn unten wieder ein.", "id": "Potong paragraf tersebut dan tempelkan kembali di bagian bawah." }
    ]
  },
  {
    "id": "weiterleiten-330",
    "level": "B1",
    "infinitiv": "weiterleiten",
    "arti": "meneruskan pesan/email (forward)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "leite weiter", "du": "leitest weiter", "er_sie_es": "leitet weiter", "wir": "leiten weiter", "ihr": "leitet weiter", "sie_Sie": "leiten weiter" },
      "praeteritum": { "ich": "leitete weiter", "du": "leitetest weiter", "er_sie_es": "leitete weiter", "wir": "leiteten weiter", "ihr": "leitetet weiter", "sie_Sie": "leiteten weiter" },
      "perfekt": "hat weitergeleitet",
      "imperativ": "Leite weiter!/Leitet weiter!/Leiten Sie weiter!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich habe die E-Mail an alle Kollegen weitergeleitet.", "id": "Saya meneruskan email tersebut ke semua rekan kerja." },
      { "de": "Bitte leiten Sie diesen Anruf an die Buchhaltung weiter.", "id": "Tolong teruskan panggilan telepon ini ke bagian akuntansi." }
    ]
  },
  {
    "id": "tippen-331",
    "level": "A2",
    "infinitiv": "tippen",
    "arti": "mengetik pada keyboard",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "tippe", "du": "tippst", "er_sie_es": "tippt", "wir": "tippen", "ihr": "tippt", "sie_Sie": "tippen" },
      "praeteritum": { "ich": "tippte", "du": "tipptest", "er_sie_es": "tippte", "wir": "tippten", "ihr": "tipptet", "sie_Sie": "tippten" },
      "perfekt": "hat getippt",
      "imperativ": "Tippe!/Tippt!/Tippen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie tippt blitzschnell auf der Tastatur.", "id": "Dia mengetik di papan ketik dengan sangat cepat." },
      { "de": "Er tippt eine kurze Nachricht an seine Schwester.", "id": "Dia mengetik pesan singkat untuk adik perempuannya." }
    ]
  },
  {
    "id": "klicken-332",
    "level": "A1",
    "infinitiv": "klicken",
    "arti": "mengeklik mouse",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "klicke", "du": "klickst", "er_sie_es": "klickt", "wir": "klicken", "ihr": "klickt", "sie_Sie": "klicken" },
      "praeteritum": { "ich": "klickte", "du": "klicktest", "er_sie_es": "klickte", "wir": "klickten", "ihr": "klicktet", "sie_Sie": "klickten" },
      "perfekt": "hat geklickt",
      "imperativ": "Klicke!/Klickt!/Klicken Sie!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Klicken Sie auf den Link, um das Formular zu öffnen.", "id": "Klik tautan itu untuk membuka formulir." },
      { "de": "Ich habe versehentlich auf die Werbung geklickt.", "id": "Saya tidak sengaja mengeklik iklan tersebut." }
    ]
  },
  {
    "id": "surfen-333",
    "level": "A1",
    "infinitiv": "surfen",
    "arti": "berselancar di internet, selancar air",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "surfe", "du": "surfst", "er_sie_es": "surft", "wir": "surfen", "ihr": "surft", "sie_Sie": "surfen" },
      "praeteritum": { "ich": "surfte", "du": "surftest", "er_sie_es": "surfte", "wir": "surften", "ihr": "surftet", "sie_Sie": "surften" },
      "perfekt": "hat gesurft",
      "imperativ": "Surfe!/Surft!/Surfen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Am Abend surfe ich oft stundenlang im Internet.", "id": "Di malam hari saya kerap berselancar berjam-jam di internet." },
      { "de": "Er surft leidenschaftlich gern auf hohen Wellen.", "id": "Dia sangat gemar berselancar di atas ombak tinggi." }
    ]
  },
  {
    "id": "chatten-334",
    "level": "A1",
    "infinitiv": "chatten",
    "arti": "mengobrol via chat digital",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "chatte", "du": "chattest", "er_sie_es": "chattet", "wir": "chatten", "ihr": "chattet", "sie_Sie": "chatten" },
      "praeteritum": { "ich": "chattete", "du": "chattetest", "er_sie_es": "chattete", "wir": "chatteten", "ihr": "chattetet", "sie_Sie": "chatteten" },
      "perfekt": "hat gechattet",
      "imperativ": "Chatte!/Chattet!/Chatten Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich chatte fast jeden Tag mit meinen Freunden.", "id": "Saya saling berkirim pesan daring hampir tiap hari dengan teman-teman." },
      { "de": "Sie haben stundenlang über WhatsApp gechattet.", "id": "Mereka mengobrol lewat WhatsApp selama berjam-jam." }
    ]
  },
  {
    "id": "streamen-335",
    "level": "A2",
    "infinitiv": "streamen",
    "arti": "menonton/menayangkan video daring (streaming)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "streame", "du": "streamst", "er_sie_es": "streamt", "wir": "streamen", "ihr": "streamt", "sie_Sie": "streamen" },
      "praeteritum": { "ich": "streamte", "du": "streamtest", "er_sie_es": "streamte", "wir": "streamten", "ihr": "streamtet", "sie_Sie": "streamten" },
      "perfekt": "hat gestreamt",
      "imperativ": "Streame!/Streamt!/Streamen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir streamen heute Abend einen spannenden Film.", "id": "Kami menonton streaming film yang menegangkan malam ini." },
      { "de": "Er streamt seine Videospiele live auf Twitch.", "id": "Dia menyiarkan langsung permainannya di Twitch." }
    ]
  },
  {
    "id": "programmieren-336",
    "level": "B1",
    "infinitiv": "programmieren",
    "arti": "memprogram kode perangkat lunak",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "programmiere", "du": "programmierst", "er_sie_es": "programmiert", "wir": "programmieren", "ihr": "programmiert", "sie_Sie": "programmieren" },
      "praeteritum": { "ich": "programmierte", "du": "programmiertest", "er_sie_es": "programmierte", "wir": "programmierten", "ihr": "programmiertet", "sie_Sie": "programmierten" },
      "perfekt": "hat programmiert",
      "imperativ": "Programmiere!/Programmiert!/Programmieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er programmiert seit drei Jahren mit JavaScript.", "id": "Dia memprogram dengan JavaScript sejak tiga tahun lalu." },
      { "de": "Wir programmieren eine eigene Schnittstelle.", "id": "Kami membuat antarmuka perangkat lunak sendiri." }
    ]
  },
  {
    "id": "testen-337",
    "level": "A2",
    "infinitiv": "testen",
    "arti": "menguji mutu produk/kesehatan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "teste", "du": "testest", "er_sie_es": "testet", "wir": "testen", "ihr": "testet", "sie_Sie": "testen" },
      "praeteritum": { "ich": "testete", "du": "testetest", "er_sie_es": "testete", "wir": "testeten", "ihr": "testetet", "sie_Sie": "testeten" },
      "perfekt": "hat getestet",
      "imperativ": "Teste!/Testet!/Testen Sie!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Das Labor testet das neue Medikament gründlich.", "id": "Laboratorium menguji obat baru itu dengan teliti." },
      { "de": "Lassen Sie sich vor der Reise auf Corona testen?", "id": "Apakah Anda memeriksakan diri terhadap infeksi Corona sebelum berangkat?" }
    ]
  },
  {
    "id": "pruefen-338",
    "level": "B1",
    "infinitiv": "prüfen",
    "arti": "memeriksa dokumen/keaslian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "prüfe", "du": "prüfst", "er_sie_es": "prüft", "wir": "prüfen", "ihr": "prüft", "sie_Sie": "prüfen" },
      "praeteritum": { "ich": "prüfte", "du": "prüftest", "er_sie_es": "prüfte", "wir": "prüften", "ihr": "prüftet", "sie_Sie": "prüften" },
      "perfekt": "hat geprüft",
      "imperativ": "Prüfe!/Prüft!/Prüfen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Zollbeamte prüft die Pässe der Passagiere.", "id": "Petugas bea cukai memeriksa paspor-paspor penumpang." },
      { "de": "Wir müssen alle Rechnungen genau prüfen.", "id": "Kita harus memeriksa semua tagihan secara akurat." }
    ]
  },
  {
    "id": "kontrollieren-339",
    "level": "A2",
    "infinitiv": "kontrollieren",
    "arti": "mengontrol tiket, memantau situasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kontrolliere", "du": "kontrollierst", "er_sie_es": "kontrolliert", "wir": "kontrollieren", "ihr": "kontrolliert", "sie_Sie": "kontrollieren" },
      "praeteritum": { "ich": "kontrollierte", "du": "kontrolliertest", "er_sie_es": "kontrollierte", "wir": "kontrollierten", "ihr": "kontrolliertet", "sie_Sie": "kontrollierten" },
      "perfekt": "hat kontrolliert",
      "imperativ": "Kontrolliere!/Kontrolliert!/Kontrollieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Schaffner kontrolliert im Zug die Fahrscheine.", "id": "Kondektur memeriksa karcis-karcis di dalam kereta." },
      { "de": "Die Polizei kontrolliert den Verkehr an der Kreuzung.", "id": "Polisi memantau lalu lintas di persimpangan itu." }
    ]
  },
  {
    "id": "ueberpruefen-340",
    "level": "B2",
    "infinitiv": "überprüfen",
    "arti": "meninjau ulang secara mendalam",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "überprüfe", "du": "überprüfst", "er_sie_es": "überprüft", "wir": "überprüfen", "ihr": "überprüft", "sie_Sie": "überprüfen" },
      "praeteritum": { "ich": "überprüfte", "du": "überprüftest", "er_sie_es": "überprüfte", "wir": "überprüften", "ihr": "überprüftet", "sie_Sie": "überprüften" },
      "perfekt": "hat überprüft",
      "imperativ": "Überprüfe!/Überprüft!/Überprüfen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Bitte überprüfen Sie die Angaben noch einmal auf Richtigkeit.", "id": "Mohon tinjau ulang rincian data tersebut demi memastikan kebenarannya." },
      { "de": "Die Sicherheitsvorkehrungen wurden sorgfältig überprüft.", "id": "Langkah-langkah pengamanan telah ditinjau dengan cermat." }
    ]
  },
  {
    "id": "korrigieren-341",
    "level": "A2",
    "infinitiv": "korrigieren",
    "arti": "mengoreksi kesalahan tulisan/tugas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "korrigiere", "du": "korrigierst", "er_sie_es": "korrigiert", "wir": "korrigieren", "ihr": "korrigiert", "sie_Sie": "korrigieren" },
      "praeteritum": { "ich": "korrigierte", "du": "korrigiertest", "er_sie_es": "korrigierte", "wir": "korrigierten", "ihr": "korrigiertet", "sie_Sie": "korrigierten" },
      "perfekt": "hat korrigiert",
      "imperativ": "Korrigiere!/Korrigiert!/Korrigieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Lehrerin korrigiert die Klassenarbeiten am Wochenende.", "id": "Ibu guru mengoreksi ujian murid di akhir pekan." },
      { "de": "Darf ich dich kurz korrigieren?", "id": "Bolehkah saya meluruskan ucapanmu sebentar?" }
    ]
  },
  {
    "id": "bessern-342",
    "level": "B2",
    "infinitiv": "sich bessern",
    "arti": "membaik kondisinya, berubah menjadi lebih baik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bessere mich", "du": "besserst dich", "er_sie_es": "bessert sich", "wir": "bessern uns", "ihr": "bessert euch", "sie_Sie": "bessern sich" },
      "praeteritum": { "ich": "besserte mich", "du": "bessertest dich", "er_sie_es": "besserte sich", "wir": "besserten uns", "ihr": "bessertet euch", "sie_Sie": "besserten sich" },
      "perfekt": "hat sich gebessert",
      "imperativ": "Bessere dich!/Bessert euch!"
    },
    "contoh_kalimat": [
      { "de": "Das Wetter bessert sich hoffentlich bald.", "id": "Semoga kondisi cuaca segera membaik." },
      { "de": "Sein Gesundheitszustand hat sich spürbar gebessert.", "id": "Kondisi kesehatannya membaik secara nyata." }
    ]
  },
  {
    "id": "verschlechtern-343",
    "level": "B2",
    "infinitiv": "sich verschlechtern",
    "arti": "memburuk, mengalami kemunduran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verschlechtere mich", "du": "verschlechterst dich", "er_sie_es": "verschlechtert sich", "wir": "verschlechtern uns", "ihr": "verschlechtert euch", "sie_Sie": "verschlechtern sich" },
      "praeteritum": { "ich": "verschlechterte mich", "du": "verschlechtertest dich", "er_sie_es": "verschlechterte sich", "wir": "verschlechterten uns", "ihr": "verschlechtertet euch", "sie_Sie": "verschlechterten sich" },
      "perfekt": "hat sich verschlechtert",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Die wirtschaftliche Lage hat sich drastisch verschlechtert.", "id": "Kondisi perekonomian memburuk secara drastis." },
      { "de": "Seine Sehkraft verschlechterte sich im Alter immer mehr.", "id": "Daya penglihatannya semakin memburuk di usia senja." }
    ]
  },
  {
    "id": "erhoehen-344",
    "level": "B1",
    "infinitiv": "erhöhen",
    "arti": "menaikkan tarif/volume",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "erhöhe", "du": "erhöhst", "er_sie_es": "erhöht", "wir": "erhöhen", "ihr": "erhöht", "sie_Sie": "erhöhen" },
      "praeteritum": { "ich": "erhöhte", "du": "erhöhtest", "er_sie_es": "erhöhte", "wir": "erhöhten", "ihr": "erhöhtet", "sie_Sie": "erhöhten" },
      "perfekt": "hat erhöht",
      "imperativ": "Erhöhe!/Erhöht!/Erhöhen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Regierung erhöht die Steuern auf Tabakwaren.", "id": "Pemerintah menaikkan pajak produk tembakau." },
      { "de": "Die Miete wurde um zehn Prozent erhöht.", "id": "Uang sewa dinaikkan sebesar sepuluh persen." }
    ]
  },
  {
    "id": "senken-345",
    "level": "B1",
    "infinitiv": "senken",
    "arti": "menurunkan harga/kepala secara aktif",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "senke", "du": "senkst", "er_sie_es": "senkt", "wir": "senken", "ihr": "senkt", "sie_Sie": "senken" },
      "praeteritum": { "ich": "senkte", "du": "senktest", "er_sie_es": "senkte", "wir": "senkten", "ihr": "senktet", "sie_Sie": "senkten" },
      "perfekt": "hat gesenkt",
      "imperativ": "Senke!/Senkt!/Senken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Supermarkt senkt die Preise für Grundnahrungsmittel.", "id": "Pasar swalayan menurunkan harga bahan makanan pokok." },
      { "de": "Er senkte beschämt den Kopf.", "id": "Dia menundukkan kepala karena malu." }
    ]
  },
  {
    "id": "verdoppeln-346",
    "level": "B2",
    "infinitiv": "verdoppeln",
    "arti": "melipatgandakan dua kali lipat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verdopple", "du": "verdoppelst", "er_sie_es": "verdoppelt", "wir": "verdoppeln", "ihr": "verdoppelt", "sie_Sie": "verdoppeln" },
      "praeteritum": { "ich": "verdoppelte", "du": "verdoppeltest", "er_sie_es": "verdoppelte", "wir": "verdoppelten", "ihr": "verdoppeltet", "sie_Sie": "verdoppelten" },
      "perfekt": "hat verdoppelt",
      "imperativ": "Verdopple!/Verdoppelt!/Verdoppeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Unternehmen hat seinen Gewinn im Vorjahr verdoppelt.", "id": "Perusahaan melipatgandakan labanya dua kali lipat tahun lalu." },
      { "de": "Die Teilnehmerzahl hat sich innerhalb weniger Monate verdoppelt.", "id": "Jumlah peserta melonjak dua kali lipat dalam hitungan bulan." }
    ]
  },
  {
    "id": "halbieren-347",
    "level": "B2",
    "infinitiv": "halbieren",
    "arti": "membagi dua sama rata",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "halbiere", "du": "halbierst", "er_sie_es": "halbiert", "wir": "halbieren", "ihr": "halbiert", "sie_Sie": "halbieren" },
      "praeteritum": { "ich": "halbierte", "du": "halbiertest", "er_sie_es": "halbierte", "wir": "halbierten", "ihr": "halbiertet", "sie_Sie": "halbierten" },
      "perfekt": "hat halbiert",
      "imperativ": "Halbiere!/Halbiert!/Halbieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Halbieren Sie den Apfel mit einem scharfen Messer.", "id": "Potong apel itu menjadi dua bagian dengan pisau tajam." },
      { "de": "Die Arbeitszeit wurde um die Hälfte halbiert.", "id": "Waktu kerja dipotong separuh." }
    ]
  },
  {
    "id": "verteilen-348",
    "level": "B1",
    "infinitiv": "verteilen",
    "arti": "membagi-bagikan selebaran/porsi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verteile", "du": "verteilst", "er_sie_es": "verteilt", "wir": "verteilen", "ihr": "verteilt", "sie_Sie": "verteilen" },
      "praeteritum": { "ich": "verteilte", "du": "verteiltest", "er_sie_es": "verteilte", "wir": "verteilten", "ihr": "verteiltet", "sie_Sie": "verteilten" },
      "perfekt": "hat verteilt",
      "imperativ": "Verteile!/Verteilt!/Verteilen Sie!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Er verteilt Broschüren in der Fußgängerzone.", "id": "Dia membagikan brosur di kawasan pejalan kaki." },
      { "de": "Die Spenden wurden gerecht an die Hilfsbedürftigen verteilt.", "id": "Bantuan disalurkan secara adil kepada warga yang membutuhkan." }
    ]
  },
  {
    "id": "teilen-349",
    "level": "A1",
    "infinitiv": "teilen",
    "arti": "berbagi makanan, membagi porsi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "teile", "du": "teilst", "er_sie_es": "teilt", "wir": "teilen", "ihr": "teilt", "sie_Sie": "teilen" },
      "praeteritum": { "ich": "teilte", "du": "teiltest", "er_sie_es": "teilte", "wir": "teilten", "ihr": "teiltet", "sie_Sie": "teilten" },
      "perfekt": "hat geteilt",
      "imperativ": "Teile!/Teilt!/Teilen Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich teile mein Sandwich gerne mit dir.", "id": "Saya senang membagi roti lapis saya denganmu." },
      { "de": "Wir teilen uns die Kosten für die Wohnung.", "id": "Kami membagi berdua biaya sewa apartemen." }
    ]
  },
  {
    "id": "sammeln-350",
    "level": "A2",
    "infinitiv": "einsammeln",
    "arti": "mengumpulkan kertas ujian/donasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "sammle ein", "du": "sammelst ein", "er_sie_es": "sammelt ein", "wir": "sammeln ein", "ihr": "sammelt ein", "sie_Sie": "sammeln ein" },
      "praeteritum": { "ich": "sammelte ein", "du": "sammeltest ein", "er_sie_es": "sammelte ein", "wir": "sammelten ein", "ihr": "sammeltet ein", "sie_Sie": "sammelten ein" },
      "perfekt": "hat eingesammelt",
      "imperativ": "Sammle ein!/Sammelt ein!/Sammeln Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Der Lehrer sammelt am Ende der Stunde die Testhefte ein.", "id": "Guru mengumpulkan lembar tes pada akhir pelajaran." },
      { "de": "Wir haben Müll im Park eingesammelt.", "id": "Kami memunguti sampah yang berserakan di taman." }
    ]
  },
  {
    "id": "wegwerfen-351",
    "level": "A2",
    "infinitiv": "wegwerfen",
    "arti": "membuang ke tempat sampah",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "werfe weg", "du": "wirfst weg", "er_sie_es": "wirft weg", "wir": "werfen weg", "ihr": "werft weg", "sie_Sie": "werfen weg" },
      "praeteritum": { "ich": "warf weg", "du": "warfst weg", "er_sie_es": "warf weg", "wir": "warfen weg", "ihr": "warft weg", "sie_Sie": "warfen weg" },
      "perfekt": "hat weggeworfen",
      "imperativ": "Wirf weg!/Werft weg!/Werfen Sie weg!"
    },
    "contoh_kalimat": [
      { "de": "Wirf das alte Brot bitte nicht in den Müll!", "id": "Tolong jangan buang roti lama itu ke tempat sampah!" },
      { "de": "Brauchst du diese Zeitungen noch, oder kann ich sie wegwerfen?", "id": "Apakah kamu masih butuh koran-koran ini, atau boleh saya buang?" }
    ]
  },
  {
    "id": "behalten-352",
    "level": "B1",
    "infinitiv": "aufbewahren",
    "arti": "menyimpan rapi demi keamanan/arsip",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "bewahre auf", "du": "bewahrst auf", "er_sie_es": "bewahrt auf", "wir": "bewahren auf", "ihr": "bewahrt auf", "sie_Sie": "bewahren auf" },
      "praeteritum": { "ich": "bewahrte auf", "du": "bewahrtest auf", "er_sie_es": "bewahrte auf", "wir": "bewahrten auf", "ihr": "bewahrtet auf", "sie_Sie": "bewahrten auf" },
      "perfekt": "hat aufbewahrt",
      "imperativ": "Bewahre auf!/Bewahrt auf!/Bewahren Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Wichtige Dokumente bewahre ich stets im Tresor auf.", "id": "Dokumen penting selalu saya simpan di dalam brankas." },
      { "de": "Bitte bewahren Sie die Quittung gut auf.", "id": "Mohon simpan kuitansi pembayaran dengan baik." }
    ]
  },
  {
    "id": "aufgeben-353",
    "level": "B1",
    "infinitiv": "aufgeben",
    "arti": "menyerah, mengirim bagasi",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "gebe auf", "du": "gibst auf", "er_sie_es": "gibt auf", "wir": "geben auf", "ihr": "gebt auf", "sie_Sie": "geben auf" },
      "praeteritum": { "ich": "gab auf", "du": "gabst auf", "er_sie_es": "gab auf", "wir": "gaben auf", "ihr": "gabt auf", "sie_Sie": "gaben auf" },
      "perfekt": "hat aufgegeben",
      "imperativ": "Gib auf!/Gebt auf!/Geben Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Gib niemals deine Träume auf!", "id": "Jangan pernah menyerah meraih impianmu!" },
      { "de": "Wir müssen am Schalter unser Gepäck aufgeben.", "id": "Kita harus menitipkan bagasi di loket." }
    ]
  },
  {
    "id": "durchhalten-354",
    "level": "B2",
    "infinitiv": "durchhalten",
    "arti": "bertahan hingga akhir",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "halte durch", "du": "hältst durch", "er_sie_es": "hält durch", "wir": "halten durch", "ihr": "haltet durch", "sie_Sie": "halten durch" },
      "praeteritum": { "ich": "hielt durch", "du": "hieltst durch", "er_sie_es": "hielt durch", "wir": "hielten durch", "ihr": "hieltet durch", "sie_Sie": "hielten durch" },
      "perfekt": "hat durchgehalten",
      "imperativ": "Halte durch!/Haltet durch!/Halten Sie durch!"
    },
    "contoh_kalimat": [
      { "de": "Trotz der enormen Schmerzen hat er den Marathon durchgehalten.", "id": "Kendati sangat kesakitan, dia bertahan hingga akhir maraton." },
      { "de": "Halt durch, wir haben es bald geschafft!", "id": "Bertahanlah, sebentar lagi kita akan berhasil menyelesaikannya!" }
    ]
  },
  {
    "id": "scheitern-355",
    "level": "B2",
    "infinitiv": "scheitern",
    "arti": "mengalami kegagalan total",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "scheitere", "du": "scheiterst", "er_sie_es": "scheitert", "wir": "scheitern", "ihr": "scheitert", "sie_Sie": "scheitern" },
      "praeteritum": { "ich": "scheiterte", "du": "scheitertest", "er_sie_es": "scheiterte", "wir": "scheiterten", "ihr": "scheitertet", "sie_Sie": "scheiterten" },
      "perfekt": "ist gescheitert",
      "imperativ": "-"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Das ehrgeizige Vorhaben ist leider am Geld gescheitert.", "id": "Rencana ambisius itu sayang sekali gagal akibat kendala dana." },
      { "de": "Die Verhandlungen sind endgültig gescheitert.", "id": "Negosiasi tersebut telah berujung pada kegagalan total." }
    ]
  },
  {
    "id": "gelingen-356",
    "level": "B1",
    "infinitiv": "gelingen",
    "arti": "berhasil terwujud",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "gelinge", "du": "gelingst", "er_sie_es": "gelingt", "wir": "gelingen", "ihr": "gelingt", "sie_Sie": "gelingen" },
      "praeteritum": { "ich": "gelang", "du": "gelangst", "er_sie_es": "gelang", "wir": "gelangen", "ihr": "gelangt", "sie_Sie": "gelangen" },
      "perfekt": "ist gelungen",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Der Kuchen ist dir heute hervorragend gelungen!", "id": "Kue buatanmu hari ini berhasil matang dengan luar biasa!" },
      { "de": "Es gelang ihm schließlich, das Problem zu lösen.", "id": "Akhirnya dia berhasil memecahkan masalah itu." }
    ]
  },
  {
    "id": "misslingen-357",
    "level": "B2",
    "infinitiv": "misslingen",
    "arti": "gagal terbentuk/terbuat",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "misslinge", "du": "misslingst", "er_sie_es": "misslingt", "wir": "misslingen", "ihr": "misslingt", "sie_Sie": "misslingen" },
      "praeteritum": { "ich": "misslang", "du": "misslangst", "er_sie_es": "misslang", "wir": "misslangen", "ihr": "misslangt", "sie_Sie": "misslangen" },
      "perfekt": "ist misslungen",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Das Experiment ist leider völlig misslungen.", "id": "Eksperimen tersebut sayangnya gagal total." },
      { "de": "Der erste Versuch ist ihm gründlich misslungen.", "id": "Percobaan pertamanya gagal total." }
    ]
  },
  {
    "id": "schaffen-358",
    "level": "A2",
    "infinitiv": "schaffen",
    "arti": "berhasil meraih, menciptakan sesuatu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schaffe", "du": "schaffst", "er_sie_es": "schafft", "wir": "schaffen", "ihr": "schafft", "sie_Sie": "schaffen" },
      "praeteritum": { "ich": "schaffte", "du": "schafftest", "er_sie_es": "schaffte", "wir": "schafften", "ihr": "schafftet", "sie_Sie": "schafften" },
      "perfekt": "hat geschafft",
      "imperativ": "Schaffe!/Schafft!/Schaffen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir haben die schwere Prüfung endlich geschafft!", "id": "Kita akhirnya berhasil lulus ujian yang sulit itu!" },
      { "de": "Künstler schaffen neue Werke aus Inspiration.", "id": "Seniman menciptakan karya baru dari inspirasi." }
    ]
  },
  {
    "id": "probieren-359",
    "level": "A1",
    "infinitiv": "anprobieren",
    "arti": "mencoba pakaian di kamar pas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "probiere an", "du": "probierst an", "er_sie_es": "probiert an", "wir": "probieren an", "ihr": "probiert an", "sie_Sie": "probieren an" },
      "praeteritum": { "ich": "probierte an", "du": "probiertest an", "er_sie_es": "probierte an", "wir": "probierten an", "ihr": "probiertet an", "sie_Sie": "probierten an" },
      "perfekt": "hat anprobiert",
      "imperativ": "Probiere an!/Probiert an!/Probieren Sie an!"
    },
    "contoh_kalimat": [
      { "de": "Wo kann ich diese Jacke anprobieren?", "id": "Di mana saya bisa mencoba jaket ini?" },
      { "de": "Sie probiert mehrere Kleider an, bevor sie sich entscheidet.", "id": "Dia mencoba beberapa gaun sebelum memutuskan membeli." }
    ]
  },
  {
    "id": "ausprobieren-360",
    "level": "A2",
    "infinitiv": "durchprobieren",
    "arti": "mencoba semua opsi satu per satu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "probiere durch", "du": "probierst durch", "er_sie_es": "probiert durch", "wir": "probieren durch", "ihr": "probiert durch", "sie_Sie": "probieren durch" },
      "praeteritum": { "ich": "probierte durch", "du": "probiertest durch", "er_sie_es": "probierte durch", "wir": "probierten durch", "ihr": "probiertet durch", "sie_Sie": "probierten durch" },
      "perfekt": "hat durchprobiert",
      "imperativ": "Probiere durch!/Probiert durch!/Probieren Sie durch!"
    },
    "contoh_kalimat": [
      { "de": "Ich habe alle Schlüssel am Bund durchprobiert.", "id": "Saya sudah mencoba semua kunci yang ada di gantungan satu per satu." },
      { "de": "Wir probieren verschiedene Eissorten durch.", "id": "Kami mencicipi aneka macam varian rasa es krim." }
    ]
  },
  {
    "id": "fehlen-361",
    "level": "A2",
    "infinitiv": "ausfallen",
    "arti": "batal terlaksana, ditiadakan (acara)",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "falle aus", "du": "fällst aus", "er_sie_es": "fällt aus", "wir": "fallen aus", "ihr": "fallt aus", "sie_Sie": "fallen aus" },
      "praeteritum": { "ich": "fiel aus", "du": "fielst aus", "er_sie_es": "fiel aus", "wir": "fielen aus", "ihr": "fielt aus", "sie_Sie": "fielen aus" },
      "perfekt": "ist ausgefallen",
      "imperativ": "Fall aus!/Fallt aus!/Fallen Sie aus!"
    },
    "contoh_kalimat": [
      { "de": "Der heutige Unterricht fällt leider aus.", "id": "Pelajaran hari ini sayang sekali ditiadakan." },
      { "de": "Das Konzert musste wegen Krankheit des Sängers ausfallen.", "id": "Konser terpaksa batal akibat penyanyinya sakit." }
    ]
  },
  {
    "id": "verschieben-362",
    "level": "B1",
    "infinitiv": "verschieben",
    "arti": "menunda jadwal ke hari lain",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "verschiebe", "du": "verschiebst", "er_sie_es": "verschiebt", "wir": "verschieben", "ihr": "verschiebt", "sie_Sie": "verschieben" },
      "praeteritum": { "ich": "verschob", "du": "verschobst", "er_sie_es": "verschob", "wir": "verschoben", "ihr": "verschobt", "sie_Sie": "verschoben" },
      "perfekt": "hat verschoben",
      "imperativ": "Verschiebe!/Verschiebt!/Verschieben Sie!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Können wir den Termin auf nächsten Montag verschieben?", "id": "Bisakah kita menunda jadwal pertemuannya ke hari Senin depan?" },
      { "de": "Das Meeting wurde um eine Stunde verschoben.", "id": "Rapat diundur selama satu jam." }
    ]
  },
  {
    "id": "absagen-363",
    "level": "A2",
    "infinitiv": "absagen",
    "arti": "membatalkan janji/reservasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "sage ab", "du": "sagst ab", "er_sie_es": "sagt ab", "wir": "sagen ab", "ihr": "sagt ab", "sie_Sie": "sagen ab" },
      "praeteritum": { "ich": "sagte ab", "du": "sagtest ab", "er_sie_es": "sagte ab", "wir": "sagten ab", "ihr": "sagtet ab", "sie_Sie": "sagten ab" },
      "perfekt": "hat abgesagt",
      "imperativ": "Sag ab!/Sagt ab!/Sagen Sie ab!"
    },
    "contoh_kalimat": [
      { "de": "Ich muss unseren Termin heute leider absagen.", "id": "Saya terpaksa membatalkan janji temu kita hari ini." },
      { "de": "Der Veranstalter hat das Fest kurzfristig abgesagt.", "id": "Pihak penyelenggara membatalkan festival dalam waktu mendadak." }
    ]
  },
  {
    "id": "zusagen-364",
    "level": "B1",
    "infinitiv": "zusagen",
    "arti": "mengonfirmasi kehadiran, menyetujui tawaran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "sage zu", "du": "sagst zu", "er_sie_es": "sagt zu", "wir": "sagen zu", "ihr": "sagt zu", "sie_Sie": "sagen zu" },
      "praeteritum": { "ich": "sagte zu", "du": "sagtest zu", "er_sie_es": "sagte zu", "wir": "sagten zu", "ihr": "sagtet zu", "sie_Sie": "sagten zu" },
      "perfekt": "hat zugesagt",
      "imperativ": "Sag zu!/Sagt zu!/Sagen Sie zu!"
    },
    "contoh_kalimat": [
      { "de": "Er hat mir seine Hilfe fest zugesagt.", "id": "Dia telah memastikan bantuannya kepada saya." },
      { "de": "Haben schon viele Gäste für die Feier zugesagt?", "id": "Apakah sudah banyak tamu yang mengonfirmasi kehadiran untuk pesta?" }
    ]
  },
  {
    "id": "teilnehmen-365",
    "level": "B1",
    "infinitiv": "mitmachen",
    "arti": "turut serta, ikut berpartisipasi santai",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "mache mit", "du": "machst mit", "er_sie_es": "macht mit", "wir": "machen mit", "ihr": "macht mit", "sie_Sie": "machen mit" },
      "praeteritum": { "ich": "machte mit", "du": "machtest mit", "er_sie_es": "machte mit", "wir": "machten mit", "ihr": "machtet mit", "sie_Sie": "machten mit" },
      "perfekt": "hat mitgemacht",
      "imperativ": "Mach mit!/Macht mit!/Machen Sie mit!"
    },
    "praepositionen": [{ "präposition": "bei", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Wer möchte bei diesem Spiel mitmachen?", "id": "Siapa yang ingin ikut serta dalam permainan ini?" },
      { "de": "Ich habe gerne an dem Projekt mitgemacht.", "id": "Saya dengan senang hati turut serta dalam proyek tersebut." }
    ]
  },
  {
    "id": "beitreten-366",
    "level": "B2",
    "infinitiv": "beitreten",
    "arti": "bergabung sebagai anggota organisasi/klub",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "trete bei", "du": "trittst bei", "er_sie_es": "tritt bei", "wir": "treten bei", "ihr": "tretet bei", "sie_Sie": "treten bei" },
      "praeteritum": { "ich": "trat bei", "du": "tratest bei", "er_sie_es": "trat bei", "wir": "traten bei", "ihr": "tratet bei", "sie_Sie": "traten bei" },
      "perfekt": "ist beigetreten",
      "imperativ": "Tritt bei!/Tretet bei!/Treten Sie bei!"
    },
    "contoh_kalimat": [
      { "de": "Er ist vor zwei Jahren einem Sportverein beigetreten.", "id": "Dia bergabung dengan sebuah klub olahraga dua tahun yang lalu." },
      { "de": "Das Land möchte der Europäischen Union beitreten.", "id": "Negara itu ingin bergabung dengan Uni Eropa." }
    ]
  },
  {
    "id": "austreten-367",
    "level": "B2",
    "infinitiv": "austreten",
    "arti": "keluar dari keanggotaan organisasi",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "trete aus", "du": "trittst aus", "er_sie_es": "tritt aus", "wir": "treten aus", "ihr": "tretet aus", "sie_Sie": "treten aus" },
      "praeteritum": { "ich": "trat aus", "du": "tratest aus", "er_sie_es": "trat aus", "wir": "traten aus", "ihr": "tratet aus", "sie_Sie": "traten aus" },
      "perfekt": "ist ausgetreten",
      "imperativ": "Tritt aus!/Tretet aus!/Treten Sie aus!"
    },
    "praepositionen": [{ "präposition": "aus", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Er ist aus der Partei ausgetreten.", "id": "Dia telah keluar dari keanggotaan partai itu." },
      { "de": "Gas tritt aus der defekten Leitung aus.", "id": "Gas bocor keluar dari pipa yang rusak." }
    ]
  },
  {
    "id": "begegnen-368",
    "level": "A2",
    "infinitiv": "begegnen",
    "arti": "berpapasan, berjumpa kebetulan",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "begegne", "du": "begegnest", "er_sie_es": "begegnet", "wir": "begegnen", "ihr": "begegnet", "sie_Sie": "begegnen" },
      "praeteritum": { "ich": "begegnete", "du": "begegnetest", "er_sie_es": "begegnete", "wir": "begegneten", "ihr": "begegnetet", "sie_Sie": "begegneten" },
      "perfekt": "ist begegnet",
      "imperativ": "Begegne!/Begegnet!/Begegnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich bin gestern im Park meinem alten Schullehrer begegnet.", "id": "Kemarin saya berpapasan dengan mantan guru sekolah saya di taman." },
      { "de": "Man sollte fremden Kulturen mit Respekt begegnen.", "id": "Orang semestinya memperlakukan kebudayaan asing dengan rasa hormat." }
    ]
  },
  {
    "id": "verabreden-369",
    "level": "A2",
    "infinitiv": "sich verabreden",
    "arti": "membuat janji temu santai",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verabrede mich", "du": "verabredest dich", "er_sie_es": "verabredet sich", "wir": "verabreden uns", "ihr": "verabredet euch", "sie_Sie": "verabreden sich" },
      "praeteritum": { "ich": "verabredete mich", "du": "verabredetest dich", "er_sie_es": "verabredete sich", "wir": "verabredeten uns", "ihr": "verabredetet euch", "sie_Sie": "verabredeten sich" },
      "perfekt": "hat sich verabredet",
      "imperativ": "Verabrede dich!/Verabredet euch!/Verabreden Sie sich!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich habe mich für heute Abend mit Lisa verabredet.", "id": "Saya sudah membuat janji bertemu Lisa malam ini." },
      { "de": "Wir haben uns im Café verabredet.", "id": "Kami sepakat bertemu di kafe." }
    ]
  },
  {
    "id": "begleiten-370",
    "level": "B1",
    "infinitiv": "begleiten",
    "arti": "menemani, mengantarkan jalan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "begleite", "du": "begleitest", "er_sie_es": "begleitet", "wir": "begleiten", "ihr": "begleitet", "sie_Sie": "begleiten" },
      "praeteritum": { "ich": "begleitete", "du": "begleitetest", "er_sie_es": "begleitete", "wir": "begleiteten", "ihr": "begleitetet", "sie_Sie": "begleiteten" },
      "perfekt": "hat begleitet",
      "imperativ": "Begleite!/Begleitet!/Begleiten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Darf ich dich nach Hause begleiten?", "id": "Bolehkah saya menemanimu pulang ke rumah?" },
      { "de": "Er begleitet ihren Gesang am Klavier.", "id": "Dia mengiringi nyanyiannya dengan piano." }
    ]
  },
  {
    "id": "abholen-371",
    "level": "A1",
    "infinitiv": "abholen",
    "arti": "menjemput seseorang, mengambil paket",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "hole ab", "du": "holst ab", "er_sie_es": "holt ab", "wir": "holen ab", "ihr": "holt ab", "sie_Sie": "holen ab" },
      "praeteritum": { "ich": "holte ab", "du": "holtest ab", "er_sie_es": "holte ab", "wir": "holten ab", "ihr": "holtet ab", "sie_Sie": "holten ab" },
      "perfekt": "hat abgeholt",
      "imperativ": "Hol ab!/Holt ab!/Holen Sie ab!"
    },
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Ich hole dich um acht Uhr vom Bahnhof ab.", "id": "Saya akan menjemputmu jam delapan di stasiun." },
      { "de": "Hast du das Paket bei der Post abgeholt?", "id": "Apakah kamu sudah mengambil paket di kantor pos?" }
    ]
  },
  {
    "id": "wegbringen-372",
    "level": "A2",
    "infinitiv": "wegbringen",
    "arti": "menyingkirkan, membawa pergi",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "bringe weg", "du": "bringst weg", "er_sie_es": "bringt weg", "wir": "bringen weg", "ihr": "bringt weg", "sie_Sie": "bringen weg" },
      "praeteritum": { "ich": "brachte weg", "du": "brachtest weg", "er_sie_es": "brachte weg", "wir": "brachten weg", "ihr": "brachtet weg", "sie_Sie": "brachten weg" },
      "perfekt": "hat weggebracht",
      "imperativ": "Bring weg!/Bringt weg!/Bringen Sie weg!"
    },
    "contoh_kalimat": [
      { "de": "Bring bitte den Müll weg!", "id": "Tolong bawa dan buang sampah itu keluar!" },
      { "de": "Er hat das Auto zur Reparatur weggebracht.", "id": "Dia membawa pergi mobilnya untuk diperbaiki ke bengkel." }
    ]
  },
  {
    "id": "vorbeikommen-373",
    "level": "A2",
    "infinitiv": "vorbeikommen",
    "arti": "mampir sebentar",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "komme vorbei", "du": "kommst vorbei", "er_sie_es": "kommt vorbei", "wir": "kommen vorbei", "ihr": "kommt vorbei", "sie_Sie": "kommen vorbei" },
      "praeteritum": { "ich": "kam vorbei", "du": "kamst vorbei", "er_sie_es": "kam vorbei", "wir": "kamen vorbei", "ihr": "kamt vorbei", "sie_Sie": "kamen vorbei" },
      "perfekt": "ist vorbeigekommen",
      "imperativ": "Komm vorbei!/Kommt vorbei!/Kommen Sie vorbei!"
    },
    "praepositionen": [{ "präposition": "bei", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Kommst du heute Abend kurz bei mir vorbei?", "id": "Maukah kamu mampir sebentar ke rumahku malam ini?" },
      { "de": "Ich bin zufällig an deinem Büro vorbeigekommen.", "id": "Secara kebetulan saya melewati kantormu." }
    ]
  },
  {
    "id": "vorbeigehen-374",
    "level": "A2",
    "infinitiv": "vorbeigehen",
    "arti": "berlalu, lewat begitu saja",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "gehe vorbei", "du": "gehst vorbei", "er_sie_es": "geht vorbei", "wir": "gehen vorbei", "ihr": "geht vorbei", "sie_Sie": "gehen vorbei" },
      "praeteritum": { "ich": "ging vorbei", "du": "gingst vorbei", "er_sie_es": "ging vorbei", "wir": "gingen vorbei", "ihr": "gingt vorbei", "sie_Sie": "gingen vorbei" },
      "perfekt": "ist vorbeigegangen",
      "imperativ": "Geh vorbei!/Geht vorbei!/Gehen Sie vorbei!"
    },
    "contoh_kalimat": [
      { "de": "Die Zeit ist wie im Flug vorbeigegangen.", "id": "Waktu berlalu begitu cepat." },
      { "de": "Er ging wortlos an mir vorbei.", "id": "Dia lewat di sebelahku tanpa berucap sepatah kata pun." }
    ]
  },
  {
    "id": "folgen-375",
    "level": "A2",
    "infinitiv": "folgen",
    "arti": "mengikuti jejak/petunjuk",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "folge", "du": "folgst", "er_sie_es": "folgt", "wir": "folgen", "ihr": "folgt", "sie_Sie": "folgen" },
      "praeteritum": { "ich": "folgte", "du": "folgtest", "er_sie_es": "folgte", "wir": "folgten", "ihr": "folgtet", "sie_Sie": "folgten" },
      "perfekt": "ist gefolgt",
      "imperativ": "Folge!/Folgt!/Folgen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Folgen Sie bitte den Schildern zum Ausgang!", "id": "Silakan ikuti petunjuk rambu menuju pintu keluar!" },
      { "de": "Der Hund folgt seinem Herrchen überallhin.", "id": "Anjing itu mengikuti majikannya ke mana pun." }
    ]
  },
  {
    "id": "verfolgen-376",
    "level": "B1",
    "infinitiv": "verfolgen",
    "arti": "mengejar buronan, memantau perkembangan berita",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "verfolge", "du": "verfolgst", "er_sie_es": "verfolgt", "wir": "verfolgen", "ihr": "verfolgt", "sie_Sie": "verfolgen" },
      "praeteritum": { "ich": "verfolgte", "du": "verfolgtest", "er_sie_es": "verfolgte", "wir": "verfolgten", "ihr": "verfolgtet", "sie_Sie": "verfolgten" },
      "perfekt": "hat verfolgt",
      "imperativ": "Verfolge!/Verfolgt!/Verfolgen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Polizei verfolgte das flüchtende Auto.", "id": "Polisi mengejar mobil buronan yang kabur itu." },
      { "de": "Ich verfolge die politischen Nachrichten täglich.", "id": "Saya memantau kabar berita politik setiap hari." }
    ]
  },
  {
    "id": "einholen-377",
    "level": "B2",
    "infinitiv": "einholen",
    "arti": "menyusul ketertinggalan, mengumpulkan informasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "hole ein", "du": "holst ein", "er_sie_es": "holt ein", "wir": "holen ein", "ihr": "holt ein", "sie_Sie": "holen ein" },
      "praeteritum": { "ich": "holte ein", "du": "holtest ein", "er_sie_es": "holte ein", "wir": "holten ein", "ihr": "holtet ein", "sie_Sie": "holten ein" },
      "perfekt": "hat eingeholt",
      "imperativ": "Hol ein!/Holt ein!/Holen Sie ein!"
    },
    "contoh_kalimat": [
      { "de": "Der Läufer hat den Führenden kurz vor dem Ziel eingeholt.", "id": "Pelari itu menyusul pemimpin lomba menjelang garis finis." },
      { "de": "Wir müssen erst Erkundigungen über die Firma einholen.", "id": "Kita harus mengumpulkan keterangan terlebih dahulu mengenai perusahaan tersebut." }
    ]
  },
  {
    "id": "ueberholen-378",
    "level": "B1",
    "infinitiv": "überholen",
    "arti": "menyalip kendaraan di jalan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "überhole", "du": "überholst", "er_sie_es": "überholt", "wir": "überholen", "ihr": "überholt", "sie_Sie": "überholen" },
      "praeteritum": { "ich": "überholte", "du": "überholtest", "er_sie_es": "überholte", "wir": "überholten", "ihr": "überholtet", "sie_Sie": "überholten" },
      "perfekt": "hat überholt",
      "imperativ": "Überhole!/Überholt!/Überholen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Auf dieser engen Straße darf man nicht überholen.", "id": "Di jalan yang sempit ini dilarang menyalip." },
      { "de": "Der Sportwagen überholte den langsamen LKW.", "id": "Mobil sport itu menyalip truk yang lambat." }
    ]
  },
  {
    "id": "anhalten-379",
    "level": "A2",
    "infinitiv": "anhalten",
    "arti": "menghentikan kendaraan, berlangsung terus",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "halte an", "du": "hältst an", "er_sie_es": "hält an", "wir": "halten an", "ihr": "haltet an", "sie_Sie": "halten an" },
      "praeteritum": { "ich": "hielt an", "du": "hieltst an", "er_sie_es": "hielt an", "wir": "hielten an", "ihr": "hieltet an", "sie_Sie": "hielten an" },
      "perfekt": "hat angehalten",
      "imperativ": "Halt an!/Haltet an!/Halten Sie an!"
    },
    "contoh_kalimat": [
      { "de": "Der Fahrer hielt rechtzeitig an der roten Ampel an.", "id": "Pengemudi berhenti tepat waktu di lampu merah." },
      { "de": "Die Kältewelle hält weiter an.", "id": "Gelombang hawa dingin terus berlangsung." }
    ]
  },
  {
    "id": "aufhalten-380",
    "level": "B1",
    "infinitiv": "aufhalten",
    "arti": "menghambat laju, berada di suatu tempat (sich aufhalten)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "halte auf", "du": "hältst auf", "er_sie_es": "hält auf", "wir": "halten auf", "ihr": "haltet auf", "sie_Sie": "halten auf" },
      "praeteritum": { "ich": "hielt auf", "du": "hieltst auf", "er_sie_es": "hielt auf", "wir": "hielten auf", "ihr": "hieltet auf", "sie_Sie": "hielten auf" },
      "perfekt": "hat aufgehalten",
      "imperativ": "Halt auf!/Haltet auf!/Halten Sie auf!"
    },
    "contoh_kalimat": [
      { "de": "Entschuldigung, ich wollte dich nicht bei der Arbeit aufhalten.", "id": "Maaf, saya tidak bermaksud menghambat pekerjaanmu." },
      { "de": "Er hält sich derzeit für ein Jahr in Berlin auf.", "id": "Dia saat ini tengah menetap selama satu tahun di Berlin." }
    ]
  },
  {
    "id": "durchqueren-381",
    "level": "B2",
    "infinitiv": "durchqueren",
    "arti": "melintasi, menyeberangi kawasan luas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "durchquere", "du": "durchquerst", "er_sie_es": "durchquert", "wir": "durchqueren", "ihr": "durchquert", "sie_Sie": "durchqueren" },
      "praeteritum": { "ich": "durchquerte", "du": "durchquertest", "er_sie_es": "durchquerte", "wir": "durchquerten", "ihr": "durchquertet", "sie_Sie": "durchquerten" },
      "perfekt": "hat durchquert",
      "imperativ": "Durchquere!/Durchquert!/Durchqueren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Forscher durchquerten die weite Wüste zu Fuß.", "id": "Para peneliti melintasi padang gurun yang luas itu dengan berjalan kaki." },
      { "de": "Der Zug durchquert mehrere europäische Länder.", "id": "Kereta api itu melintasi sejumlah negara Eropa." }
    ]
  },
  {
    "id": "ueberqueren-382",
    "level": "A2",
    "infinitiv": "überqueren",
    "arti": "menyeberang jalan/jembatan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "überquere", "du": "überquerst", "er_sie_es": "überquert", "wir": "überqueren", "ihr": "überquert", "sie_Sie": "überqueren" },
      "praeteritum": { "ich": "überquerte", "du": "überquertest", "er_sie_es": "überquerte", "wir": "überquerten", "ihr": "überquertet", "sie_Sie": "überquerten" },
      "perfekt": "hat überquert",
      "imperativ": "Überquere!/Überquert!/Überqueren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Überqueren Sie die Straße bitte nur am Zebrastreifen!", "id": "Menyeberanglah jalan hanya melalui garis penyeberangan!" },
      { "de": "Wir überquerten den Fluss mit einer kleinen Fähre.", "id": "Kami menyeberangi sungai dengan perahu feri kecil." }
    ]
  },
  {
    "id": "wenden-383",
    "level": "B1",
    "infinitiv": "wenden",
    "arti": "memutar balik arah kendaraan, meminta bantuan (sich wenden)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "wende", "du": "wendest", "er_sie_es": "wendet", "wir": "wenden", "ihr": "wendet", "sie_Sie": "wenden" },
      "praeteritum": { "ich": "wendete", "du": "wendetest", "er_sie_es": "wendete", "wir": "wendeten", "ihr": "wendetet", "sie_Sie": "wendeten" },
      "perfekt": "hat gewendet",
      "imperativ": "Wende!/Wendet!/Wenden Sie!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Hier ist das Wenden verboten.", "id": "Di sini dilarang putar balik." },
      { "de": "Bei Fragen können Sie sich jederzeit an mich wenden.", "id": "Jika ada pertanyaan Anda bisa menghubungi saya kapan saja." }
    ]
  },
  {
    "id": "bremsen-384",
    "level": "A2",
    "infinitiv": "bremsen",
    "arti": "mengerem laju kendaraan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bremse", "du": "bremst", "er_sie_es": "bremst", "wir": "bremsen", "ihr": "bremst", "sie_Sie": "bremsen" },
      "praeteritum": { "ich": "bremste", "du": "bremstest", "er_sie_es": "bremste", "wir": "bremsten", "ihr": "bremstet", "sie_Sie": "bremsten" },
      "perfekt": "hat gebremst",
      "imperativ": "Bremse!/Bremst!/Bremsen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Wagen bremste mit quietschenden Reifen.", "id": "Mobil itu mengerem dengan ban berdecit keras." },
      { "de": "Bremse rechtzeitig vor der scharfen Kurve!", "id": "Remlah tepat waktu sebelum tikungan tajam!" }
    ]
  },
  {
    "id": "beschleunigen-385",
    "level": "B2",
    "infinitiv": "beschleunigen",
    "arti": "menambah kecepatan, mengakselerasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "beschleunige", "du": "beschleunigst", "er_sie_es": "beschleunigt", "wir": "beschleunigen", "ihr": "beschleunigt", "sie_Sie": "beschleunigen" },
      "praeteritum": { "ich": "beschleunigte", "du": "beschleunigtest", "er_sie_es": "beschleunigte", "wir": "beschleunigten", "ihr": "beschleunigtet", "sie_Sie": "beschleunigten" },
      "perfekt": "hat beschleunigt",
      "imperativ": "Beschleunige!/Beschleunigt!/Beschleunigen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Elektroauto beschleunigt in drei Sekunden auf hundert.", "id": "Mobil listrik itu berakselerasi ke kecepatan seratus dalam tiga detik." },
      { "de": "Wir müssen die bürokratischen Verfahren beschleunigen.", "id": "Kita wajib mempercepat prosedur birokrasi ini." }
    ]
  },
  {
    "id": "schleichen-386",
    "level": "B2",
    "infinitiv": "schleichen",
    "arti": "mengendap-endap berjalan perlahan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "schleiche", "du": "schleichst", "er_sie_es": "schleicht", "wir": "schleichen", "ihr": "schleicht", "sie_Sie": "schleichen" },
      "praeteritum": { "ich": "schlich", "du": "schlichst", "er_sie_es": "schlich", "wir": "schlichen", "ihr": "schlicht", "sie_Sie": "schlichen" },
      "perfekt": "ist geschlichen",
      "imperativ": "Schleiche!/Schleicht!/Schleichen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Katze schleicht leise an den Vogel heran.", "id": "Kucing itu mengendap-endap mendekati burung tanpa suara." },
      { "de": "Er schlich nachts heimlich ins Zimmer.", "id": "Dia mengendap masuk ke dalam kamar secara diam-diam saat malam." }
    ]
  },
  {
    "id": "stolpern-387",
    "level": "B1",
    "infinitiv": "stolpern",
    "arti": "tersandung kaki",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "stolpere", "du": "stolperst", "er_sie_es": "stolpert", "wir": "stolpern", "ihr": "stolpert", "sie_Sie": "stolpern" },
      "praeteritum": { "ich": "stolperte", "du": "stolpertest", "er_sie_es": "stolperte", "wir": "stolperten", "ihr": "stolpertet", "sie_Sie": "stolperten" },
      "perfekt": "ist gestolpert",
      "imperativ": "Stolpere!/Stolpert!/Stolpern Sie!"
    },
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Ich bin über eine Baumwurzel gestolpert.", "id": "Saya tersandung akar pohon." },
      { "de": "Er stolperte auf der Treppe, fiel aber zum Glück nicht hin.", "id": "Dia tersandung di tangga namun untunglah tidak terjatuh." }
    ]
  },
  {
    "id": "ausrutschen-388",
    "level": "A2",
    "infinitiv": "ausrutschen",
    "arti": "terpeleset karena licin",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "rutsche aus", "du": "rutschst aus", "er_sie_es": "rutscht aus", "wir": "rutschen aus", "ihr": "rutscht aus", "sie_Sie": "rutschen aus" },
      "praeteritum": { "ich": "rutschte aus", "du": "rutschtest aus", "er_sie_es": "rutschte aus", "wir": "rutschten aus", "ihr": "rutschtet aus", "sie_Sie": "rutschten aus" },
      "perfekt": "ist ausgerutscht",
      "imperativ": "Rutsch aus!/Rutscht aus!/Rutschen Sie aus!"
    },
    "praepositionen": [{ "präposition": "auf", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Pass auf, dass du auf dem nassen Boden nicht ausrutschst!", "id": "Hati-hati jangan sampai kamu terpeleset di lantai yang basah!" },
      { "de": "Sie ist auf dem Glatteis ausgerutscht.", "id": "Dia terpeleset di atas lapisan es yang licin." }
    ]
  },
  {
    "id": "stuerzen-389",
    "level": "B1",
    "infinitiv": "stürzen",
    "arti": "jatuh terhempas, menggulingkan kekuasaan",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "stürze", "du": "stürzt", "er_sie_es": "stürzt", "wir": "stürzen", "ihr": "stürzt", "sie_Sie": "stürzen" },
      "praeteritum": { "ich": "stürzte", "du": "stürztest", "er_sie_es": "stürzte", "wir": "stürzten", "ihr": "stürztet", "sie_Sie": "stürzten" },
      "perfekt": "ist gestürzt",
      "imperativ": "Stürze!/Stürzt!/Stürzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Radfahrer stürzte schwer auf den Asphalt.", "id": "Pesepeda itu jatuh terhempas keras ke aspal." },
      { "de": "Die Rebellen stürzten die Regierung.", "id": "Pemberontak menggulingkan tampuk pemerintahan." }
    ]
  },
  {
    "id": "kollidieren-390",
    "level": "B2",
    "infinitiv": "kollidieren",
    "arti": "bertabrakan kendaraan/jadwal",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kollidiere", "du": "kollidierst", "er_sie_es": "kollidiert", "wir": "kollidieren", "ihr": "kollidiert", "sie_Sie": "kollidieren" },
      "praeteritum": { "ich": "kollidierte", "du": "kollidiertest", "er_sie_es": "kollidierte", "wir": "kollidierten", "ihr": "kollidiertet", "sie_Sie": "kollidierten" },
      "perfekt": "ist kollidiert",
      "imperativ": "Kollidiere!/Kollidiert!/Kollidieren Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Zwei PKW sind an der Kreuzung miteinander kollidiert.", "id": "Dua mobil bertabrakan di persimpangan jalan." },
      { "de": "Dieser Termin kollidiert leider mit meinem Arztbesuch.", "id": "Jadwal ini sayangnya bertabrakan dengan jadwal periksa ke dokter." }
    ]
  },
  {
    "id": "prallen-391",
    "level": "B2",
    "infinitiv": "prallen",
    "arti": "menabrak keras membentur permukaan",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "pralle", "du": "prallst", "er_sie_es": "prallt", "wir": "prallen", "ihr": "prallt", "sie_Sie": "prallen" },
      "praeteritum": { "ich": "prallte", "du": "pralltest", "er_sie_es": "prallte", "wir": "prallten", "ihr": "pralltet", "sie_Sie": "prallten" },
      "perfekt": "ist geprallt",
      "imperativ": "Pralle!/Prallt!/Prallen Sie!"
    },
    "praepositionen": [{ "präposition": "gegen", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Das Auto prallte ungebremst gegen einen Baum.", "id": "Mobil itu membentur pohon tanpa sempat mengerem." },
      { "de": "Die Meinungen prallten hart aufeinander.", "id": "Perbedaan pendapat saling berbenturan dengan keras." }
    ]
  },
  {
    "id": "platzen-392",
    "level": "B1",
    "infinitiv": "platzen",
    "arti": "meletus balon/ban, batal mendadak kesepakatan",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "platze", "du": "platzt", "er_sie_es": "platzt", "wir": "platzen", "ihr": "platzt", "sie_Sie": "platzen" },
      "praeteritum": { "ich": "platzte", "du": "platztest", "er_sie_es": "platzte", "wir": "platzten", "ihr": "platztet", "sie_Sie": "platzten" },
      "perfekt": "ist geplatzt",
      "imperativ": "Platze!/Platzt!/Platzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Luftballon ist mit lautem Knall geplatzt.", "id": "Balon meletus dengan suara ledakan keras." },
      { "de": "Der wichtige Vertrag ist im letzten Moment geplatzt.", "id": "Kesepakatan penting itu batal di saat-saat terakhir." }
    ]
  },
  {
    "id": "explodieren-393",
    "level": "B1",
    "infinitiv": "explodieren",
    "arti": "meledak bom/harga komoditas",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "explodiere", "du": "explodierst", "er_sie_es": "explodiert", "wir": "explodieren", "ihr": "explodiert", "sie_Sie": "explodieren" },
      "praeteritum": { "ich": "explodierte", "du": "explodiertest", "er_sie_es": "explodierte", "wir": "explodierten", "ihr": "explodiertet", "sie_Sie": "explodierten" },
      "perfekt": "ist explodiert",
      "imperativ": "Explodiere!/Explodiert!/Explodieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Gasflasche ist plötzlich explodiert.", "id": "Tabung gas tiba-tiba meledak." },
      { "de": "Die Energiekosten sind im vergangenen Winter förmlich explodiert.", "id": "Biaya energi melonjak meledak pada musim dingin lalu." }
    ]
  },
  {
    "id": "qualmen-394",
    "level": "B2",
    "infinitiv": "qualmen",
    "arti": "mengepulkan asap tebal",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "qualme", "du": "qualmst", "er_sie_es": "qualmt", "wir": "qualmen", "ihr": "qualmt", "sie_Sie": "qualmen" },
      "praeteritum": { "ich": "qualmte", "du": "qualmtest", "er_sie_es": "qualmte", "wir": "qualmten", "ihr": "qualmtet", "sie_Sie": "qualmten" },
      "perfekt": "hat gequalmt",
      "imperativ": "Qualme!/Qualmt!/Qualmen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Motor fing plötzlich an, stark zu qualmen.", "id": "Mesin tiba-tiba mulai mengepulkan asap tebal." },
      { "de": "Der Kamin qualmt, weil das Holz noch nass ist.", "id": "Cerobong asap mengepul karena kayunya masih basah." }
    ]
  },
  {
    "id": "rauchen-395",
    "level": "A1",
    "infinitiv": "rauchen",
    "arti": "merokok, berasap",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "rauche", "du": "rauchst", "er_sie_es": "raucht", "wir": "rauchen", "ihr": "raucht", "sie_Sie": "rauchen" },
      "praeteritum": { "ich": "rauchte", "du": "rauchtest", "er_sie_es": "rauchte", "wir": "rauchten", "ihr": "rauchtet", "sie_Sie": "rauchten" },
      "perfekt": "hat geraucht",
      "imperativ": "Rauche!/Raucht!/Rauchen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Rauchen ist der Gesundheit schädlich.", "id": "Merokok berbahaya bagi kesehatan." },
      { "de": "Er raucht seit vielen Jahren nicht mehr.", "id": "Dia sudah tidak merokok lagi sejak bertahun-tahun." }
    ]
  },
  {
    "id": "stinken-396",
    "level": "A2",
    "infinitiv": "stinken",
    "arti": "berbau busuk menyengat",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "stinke", "du": "stinkst", "er_sie_es": "stinkt", "wir": "stinken", "ihr": "stinkt", "sie_Sie": "stinken" },
      "praeteritum": { "ich": "stank", "du": "stankst", "er_sie_es": "stank", "wir": "stanken", "ihr": "stankt", "sie_Sie": "stanken" },
      "perfekt": "hat gestunken",
      "imperativ": "Stinke!/Stinkt!/Stinken Sie!"
    },
    "praepositionen": [{ "präposition": "nach", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Hier stinkt es fürchterlich nach altem Fisch.", "id": "Di sini berbau busuk menyengat seperti ikan basi." },
      { "de": "Der Müll fängt an zu stinken.", "id": "Sampah mulai membusuk dan menyengat baunya." }
    ]
  },
  {
    "id": "duften-397",
    "level": "A2",
    "infinitiv": "duften",
    "arti": "beraroma wangi harum",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "dufte", "du": "duftest", "er_sie_es": "duftet", "wir": "duften", "ihr": "duftet", "sie_Sie": "duften" },
      "praeteritum": { "ich": "duftete", "du": "duftetest", "er_sie_es": "duftete", "wir": "dufteten", "ihr": "duftetet", "sie_Sie": "dufteten" },
      "perfekt": "hat geduftet",
      "imperativ": "Dufte!/Duftet!/Duften Sie!"
    },
    "praepositionen": [{ "präposition": "nach", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "In der Küche duftet es herrlich nach frischem Brot.", "id": "Di dapur tercium aroma harum lezat dari roti segar." },
      { "de": "Die Rosen duften wunderbar im Garten.", "id": "Bunga-bunga mawar beraroma wangi semerbak di kebun." }
    ]
  },
  {
    "id": "glänzen-398",
    "level": "B1",
    "infinitiv": "glänzen",
    "arti": "mengilap berkilauan, berprestasi cemerlang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "glänze", "du": "glänzt", "er_sie_es": "glänzt", "wir": "glänzen", "ihr": "glänzt", "sie_Sie": "glänzen" },
      "praeteritum": { "ich": "glänzte", "du": "glänztest", "er_sie_es": "glänzte", "wir": "glänzten", "ihr": "glänztet", "sie_Sie": "glänzten" },
      "perfekt": "hat geglänzt",
      "imperativ": "Glänze!/Glänzt!/Glänzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ihre Augen glänzten vor lauter Freude.", "id": "Matanya berbinar-binar penuh kegembiraan." },
      { "de": "Er glänzte bei der Prüfung mit hervorragendem Fachwissen.", "id": "Dia tampil cemerlang dalam ujian dengan wawasan luas." }
    ]
  },
  {
    "id": "leuchten-399",
    "level": "A2",
    "infinitiv": "leuchten",
    "arti": "memancarkan sinar cahaya",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "leuchte", "du": "leuchtest", "er_sie_es": "leuchtet", "wir": "leuchten", "ihr": "leuchtet", "sie_Sie": "leuchten" },
      "praeteritum": { "ich": "leuchtete", "du": "leuchtetest", "er_sie_es": "leuchtete", "wir": "leuchteten", "ihr": "leuchtetet", "sie_Sie": "leuchteten" },
      "perfekt": "hat geleuchtet",
      "imperativ": "Leuchte!/Leuchtet!/Leuchten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Sterne leuchten am klaren Nachthimmel.", "id": "Bintang-bintang bersinar terang di langit malam yang cerah." },
      { "de": "Die Warnlampe leuchtet rot auf.", "id": "Lampu peringatan memancarkan cahaya merah." }
    ]
  },
  {
    "id": "funkeln-400",
    "level": "B2",
    "infinitiv": "funkeln",
    "arti": "berkerlip gemerlap seperti permata",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "funkele", "du": "funkelst", "er_sie_es": "funkelt", "wir": "funkeln", "ihr": "funkelt", "sie_Sie": "funkeln" },
      "praeteritum": { "ich": "funkelte", "du": "funkeltest", "er_sie_es": "funkelte", "wir": "funkelten", "ihr": "funkeltet", "sie_Sie": "funkelten" },
      "perfekt": "hat gefunkelt",
      "imperativ": "Funkele!/Funkelt!/Funkeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Diamantring funkelt wunderschön im Sonnenlicht.", "id": "Cincin berlian itu berkilauan indah di bawah sinar matahari." },
      { "de": "In der Ferne funkelten die Lichter der Großstadt.", "id": "Di kejauhan lampu-lampu kota metropolitan berkerlip gemerlap." }
    ]
  },
  {
    "id": "blitzen-401",
    "level": "A2",
    "infinitiv": "blitzen",
    "arti": "berkilat (petir), terkena kamera tilang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "blitze", "du": "blitzt", "er_sie_es": "blitzt", "wir": "blitzen", "ihr": "blitzt", "sie_Sie": "blitzen" },
      "praeteritum": { "ich": "blitzte", "du": "blitztest", "er_sie_es": "blitzte", "wir": "blitzten", "ihr": "blitztet", "sie_Sie": "blitzten" },
      "perfekt": "hat geblitzt",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Es donnert und blitzt am Himmel.", "id": "Langit bergemuruh dan berkilat." },
      { "de": "Er fuhr zu schnell und wurde geblitzt.", "id": "Dia mengemudi terlalu kencang dan terkena kamera tilang." }
    ]
  },
  {
    "id": "donnern-402",
    "level": "A2",
    "infinitiv": "donnern",
    "arti": "menggelegar guntur",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "-", "du": "-", "er_sie_es": "donnert", "wir": "-", "ihr": "-", "sie_Sie": "-" },
      "praeteritum": { "ich": "-", "du": "-", "er_sie_es": "donnerte", "wir": "-", "ihr": "-", "sie_Sie": "-" },
      "perfekt": "hat gedonnert",
      "imperativ": "-"
    },
    "contoh_kalimat": [
      { "de": "Draußen donnert es gewaltig.", "id": "Di luar suara guntur menggelegar hebat." },
      { "de": "Kurz nach dem Blitz donnerte es laut.", "id": "Tak lama setelah kilat, guntur bergemuruh kencang." }
    ]
  },
  {
    "id": "wehen-403",
    "level": "B1",
    "infinitiv": "wehen",
    "arti": "berembus (angin), berkibar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "wehe", "du": "wehst", "er_sie_es": "weht", "wir": "wehen", "ihr": "weht", "sie_Sie": "wehen" },
      "praeteritum": { "ich": "wehte", "du": "wehtest", "er_sie_es": "wehte", "wir": "wehten", "ihr": "wehtet", "sie_Sie": "wehten" },
      "perfekt": "hat geweht",
      "imperativ": "Wehe!/Weht!/Wehen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ein kühler Wind weht vom Meer herüber.", "id": "Angin sejuk berembus dari arah laut." },
      { "de": "Die Flagge weht stolz im Wind.", "id": "Bendera itu berkibar dengan gagah dihembus angin." }
    ]
  },
  {
    "id": "stürmen-404",
    "level": "B1",
    "infinitiv": "stürmen",
    "arti": "berbadai, menyerbu masuk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "stürme", "du": "stürmst", "er_sie_es": "stürmt", "wir": "stürmen", "ihr": "stürmt", "sie_Sie": "stürmen" },
      "praeteritum": { "ich": "stürmte", "du": "stürmtest", "er_sie_es": "stürmte", "wir": "stürmten", "ihr": "stürmtet", "sie_Sie": "stürmten" },
      "perfekt": "hat gestürmt",
      "imperativ": "Stürme!/Stürmt!/Stürmen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Es stürmt und regnet den ganzen Nachmittag.", "id": "Badai dan hujan melanda sepanjang siang." },
      { "de": "Die Polizei stürmte das verlassene Gebäude.", "id": "Polisi menyerbu masuk ke gedung telantar itu." }
    ]
  },
  {
    "id": "frieren-405",
    "level": "A2",
    "infinitiv": "frieren",
    "arti": "kedinginan, membeku",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "friere", "du": "frierst", "er_sie_es": "friert", "wir": "frieren", "ihr": "friert", "sie_Sie": "frieren" },
      "praeteritum": { "ich": "fror", "du": "frorst", "er_sie_es": "fror", "wir": "froren", "ihr": "frort", "sie_Sie": "froren" },
      "perfekt": "hat gefroren",
      "imperativ": "Friere!/Friert!/Frieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Zieh eine Mütze auf, sonst frierst du.", "id": "Pakailah kupluk, kalau tidak kamu akan kedinginan." },
      { "de": "Im Winter friert der See oft komplett zu.", "id": "Di musim dingin danau itu kerap membeku seutuhnya." }
    ]
  },
  {
    "id": "schwitzen-406",
    "level": "A2",
    "infinitiv": "schwitzen",
    "arti": "berkeringat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schwitze", "du": "schwitzt", "er_sie_es": "schwitzt", "wir": "schwitzen", "ihr": "schwitzt", "sie_Sie": "schwitzen" },
      "praeteritum": { "ich": "schwitzte", "du": "schwitztest", "er_sie_es": "schwitzte", "wir": "schwitzten", "ihr": "schwitztet", "sie_Sie": "schwitzten" },
      "perfekt": "hat geschwitzt",
      "imperativ": "Schwitze!/Schwitzt!/Schwitzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Beim Sport schwitzt man natürlich stark.", "id": "Saat berolahraga orang tentu berkeringat banyak." },
      { "de": "Wegen der Sommerhitze schwitze ich ununterbrochen.", "id": "Karena terik musim panas saya berkeringat tanpa henti." }
    ]
  },
  {
    "id": "zittern-407",
    "level": "B1",
    "infinitiv": "zittern",
    "arti": "menggigil kedinginan/ketakutan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "zittere", "du": "zitterst", "er_sie_es": "zittert", "wir": "zittern", "ihr": "zittert", "sie_Sie": "zittern" },
      "praeteritum": { "ich": "zitterte", "du": "zittertest", "er_sie_es": "zitterte", "wir": "zitterten", "ihr": "zittertet", "sie_Sie": "zitterten" },
      "perfekt": "hat gezittert",
      "imperativ": "Zittere!/Zittert!/Zittern Sie!"
    },
    "praepositionen": [{ "präposition": "vor", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Sie zitterte vor Kälte am ganzen Körper.", "id": "Sekujur tubuhnya menggigil kedinginan." },
      { "de": "Seine Hände zitterten vor Aufregung.", "id": "Kedua tangannya gemetar karena gugup." }
    ]
  },
  {
    "id": "gähnen-408",
    "level": "A2",
    "infinitiv": "gähnen",
    "arti": "menguap karena kantuk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "gähne", "du": "gähnst", "er_sie_es": "gähnt", "wir": "gähnen", "ihr": "gähnt", "sie_Sie": "gähnen" },
      "praeteritum": { "ich": "gähnte", "du": "gähntest", "er_sie_es": "gähnte", "wir": "gähnten", "ihr": "gähntet", "sie_Sie": "gähnten" },
      "perfekt": "hat gegähnt",
      "imperativ": "Gähne!/Gähnt!/Gähnen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er war so müde, dass er ununterbrochen gähnte.", "id": "Dia begitu mengantuk sampai-sampai menguap tanpa henti." },
      { "de": "Halte dir bitte die Hand vor den Mund, wenn du gähnst!", "id": "Tutuplah mulutmu dengan tangan saat kamu menguap!" }
    ]
  },
  {
    "id": "husten-409",
    "level": "A2",
    "infinitiv": "husten",
    "arti": "batuk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "huste", "du": "hustest", "er_sie_es": "hustet", "wir": "husten", "ihr": "hustet", "sie_Sie": "husten" },
      "praeteritum": { "ich": "hustete", "du": "hustetest", "er_sie_es": "hustete", "wir": "husteten", "ihr": "hustetet", "sie_Sie": "husteten" },
      "perfekt": "hat gehustet",
      "imperativ": "Huste!/Hustet!/Husten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Kind hustet die ganze Nacht.", "id": "Anak itu batuk sepanjang malam." },
      { "de": "Ich habe Hustensaft genommen, weil ich stark huste.", "id": "Saya meminum sirup batuk karena batuk parah." }
    ]
  },
  {
    "id": "niesen-410",
    "level": "A2",
    "infinitiv": "niesen",
    "arti": "bersin",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "niese", "du": "niest", "er_sie_es": "niest", "wir": "niesen", "ihr": "niest", "sie_Sie": "niesen" },
      "praeteritum": { "ich": "nieste", "du": "niestest", "er_sie_es": "nieste", "wir": "niesten", "ihr": "niestet", "sie_Sie": "niesten" },
      "perfekt": "hat geniest",
      "imperativ": "Niese!/Niest!/Niesen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Gesundheit! Hast du eine Erkältung?", "id": "Semoga lekas sembuh! Apakah kamu masuk angin?" },
      { "de": "Er muss immer niesen, wenn er Staub einatmet.", "id": "Dia selalu bersin bila menghirup debu." }
    ]
  },
  {
    "id": "schlucken-411",
    "level": "B1",
    "infinitiv": "schlucken",
    "arti": "menelan obat/makanan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schlucke", "du": "schluckst", "er_sie_es": "schluckt", "wir": "schlucken", "ihr": "schluckt", "sie_Sie": "schlucken" },
      "praeteritum": { "ich": "schluckte", "du": "schlucktest", "er_sie_es": "schluckte", "wir": "schluckten", "ihr": "schlucktet", "sie_Sie": "schluckten" },
      "perfekt": "hat geschluckt",
      "imperativ": "Schlucke!/Schluckt!/Schlucken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Schlucken Sie die Tablette mit reichlich Wasser.", "id": "Telanlah tablet obat itu dengan banyak air." },
      { "de": "Er hatte Halsschmerzen und konnte kaum schlucken.", "id": "Dia sakit tenggorokan dan hampir tidak bisa menelan." }
    ]
  },
  {
    "id": "kauen-412",
    "level": "A2",
    "infinitiv": "kauen",
    "arti": "mengunyah makanan/permen karet",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kaue", "du": "kaust", "er_sie_es": "kaut", "wir": "kauen", "ihr": "kaut", "sie_Sie": "kauen" },
      "praeteritum": { "ich": "kaute", "du": "kautest", "er_sie_es": "kaute", "wir": "kauten", "ihr": "kautet", "sie_Sie": "kauten" },
      "perfekt": "hat gekaut",
      "imperativ": "Kaue!/Kaut!/Kauen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kau dein Essen gründlich, bevor du es schluckst!", "id": "Kunyah makananmu dengan lembut sebelum menelannya!" },
      { "de": "Er kaut im Unterricht heimlich Kaugummi.", "id": "Dia diam-diam mengunyah permen karet saat jam pelajaran." }
    ]
  },
  {
    "id": "beissen-413",
    "level": "B1",
    "infinitiv": "beißen",
    "arti": "menggigit",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "beiße", "du": "beißt", "er_sie_es": "beißt", "wir": "beißen", "ihr": "beißt", "sie_Sie": "beißen" },
      "praeteritum": { "ich": "biss", "du": "bissest", "er_sie_es": "biss", "wir": "bissen", "ihr": "bisst", "sie_Sie": "bissen" },
      "perfekt": "hat gebissen",
      "imperativ": "Beiß!/Beißt!/Beißen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Vorsicht, der Hund beißt Fremde!", "id": "Awas, anjing itu suka menggigit orang asing!" },
      { "de": "Er biss herzhaft in den frischen Apfel.", "id": "Dia menggigit buah apel segar itu dengan lahap." }
    ]
  },
  {
    "id": "lecken-414",
    "level": "B1",
    "infinitiv": "lecken",
    "arti": "menjilat, bocor (pipa)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lecke", "du": "leckst", "er_sie_es": "leckt", "wir": "lecken", "ihr": "leckt", "sie_Sie": "lecken" },
      "praeteritum": { "ich": "leckte", "du": "lecktest", "er_sie_es": "leckte", "wir": "leckten", "ihr": "lecktet", "sie_Sie": "leckten" },
      "perfekt": "hat geleckt",
      "imperativ": "Lecke!/Leckt!/Lecken Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Katze leckt ihre Pfoten sauber.", "id": "Kucing itu menjilati telapak kakinya hingga bersih." },
      { "de": "Die Wasserleitung im Bad leckt seit gestern.", "id": "Pipa air di kamar mandi bocor sejak kemarin." }
    ]
  },
  {
    "id": "kratzen-415",
    "level": "B1",
    "infinitiv": "kratzen",
    "arti": "menggaruk, mencakar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kratze", "du": "kratzt", "er_sie_es": "kratzt", "wir": "kratzen", "ihr": "kratzt", "sie_Sie": "kratzen" },
      "praeteritum": { "ich": "kratzte", "du": "kratztest", "er_sie_es": "kratzte", "wir": "kratzten", "ihr": "kratztet", "sie_Sie": "kratzten" },
      "perfekt": "hat gekratzt",
      "imperativ": "Kratze!/Kratzt!/Kratzen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Kratz den Mückenstich nicht auf!", "id": "Jangan garuk bekas gigitan nyamuk itu sampai luka!" },
      { "de": "Die Katze hat am Sofa gekratzt.", "id": "Kucing itu mencakar-cakar sofa." }
    ]
  },
  {
    "id": "streicheln-416",
    "level": "A2",
    "infinitiv": "streicheln",
    "arti": "mengelus hewan peliharaan/pipi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "streichle", "du": "streichelst", "er_sie_es": "streichelt", "wir": "streicheln", "ihr": "streichelt", "sie_Sie": "streicheln" },
      "praeteritum": { "ich": "streichelte", "du": "streicheltest", "er_sie_es": "streichelte", "wir": "streichelten", "ihr": "streicheltet", "sie_Sie": "streichelten" },
      "perfekt": "hat gestreichelt",
      "imperativ": "Streichle!/Streichelt!/Streicheln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Kind streichelt den schlafenden Hund.", "id": "Anak itu mengelus anjing yang sedang tidur." },
      { "de": "Er streichelte sanft über ihre Wange.", "id": "Dia mengelus pipinya dengan lembut." }
    ]
  },
  {
    "id": "umarmen-417",
    "level": "A2",
    "infinitiv": "umarmen",
    "arti": "memeluk seseorang erat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "umarme", "du": "umarmst", "er_sie_es": "umarmt", "wir": "umarmen", "ihr": "umarmt", "sie_Sie": "umarmen" },
      "praeteritum": { "ich": "umarmte", "du": "umarmtest", "er_sie_es": "umarmte", "wir": "umarmten", "ihr": "umarmtet", "sie_Sie": "umarmten" },
      "perfekt": "hat umarmt",
      "imperativ": "Umarme!/Umarmt!/Umarmen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Sie umarmten sich herzlich am Flughafen.", "id": "Mereka berpelukan hangat di bandara." },
      { "de": "Komm her, lass dich umarmen!", "id": "Kemarilah, biar kupeluk kamu!" }
    ]
  },
  {
    "id": "kuesst-418",
    "level": "A1",
    "infinitiv": "küssen",
    "arti": "mencium bibir/pipi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "küsse", "du": "küsst", "er_sie_es": "küsst", "wir": "küssen", "ihr": "küsst", "sie_Sie": "küssen" },
      "praeteritum": { "ich": "küsste", "du": "küsstest", "er_sie_es": "küsste", "wir": "küssten", "ihr": "küsstet", "sie_Sie": "küssten" },
      "perfekt": "hat geküsst",
      "imperativ": "Küsse!/Küsst!/Küssen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er küsste seine Braut nach der Trauung.", "id": "Dia mencium pengantin wanitanya usai upacara pernikahan." },
      { "de": "Sie küssten sich zum Abschied auf die Wange.", "id": "Mereka saling mencium pipi sebagai tanda perpisahan." }
    ]
  },
  {
    "id": "schlagen-419",
    "level": "A2",
    "infinitiv": "schlagen",
    "arti": "memukul, mengalahkan lawan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "schlage", "du": "schlägst", "er_sie_es": "schlägt", "wir": "schlagen", "ihr": "schlagt", "sie_Sie": "schlagen" },
      "praeteritum": { "ich": "schlug", "du": "schlugst", "er_sie_es": "schlug", "wir": "schlugen", "ihr": "schlugt", "sie_Sie": "schlugen" },
      "perfekt": "hat geschlagen",
      "imperativ": "Schlag!/Schlagt!/Schlagen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Turmuhr schlägt gerade zwölf.", "id": "Jam menara baru saja berdentang dua belas kali." },
      { "de": "Unser Team hat den Favoriten geschlagen.", "id": "Tim kami mengalahkan tim unggulan tersebut." }
    ]
  },
  {
    "id": "treten-420",
    "level": "B1",
    "infinitiv": "treten",
    "arti": "menendang bola/pintu, melangkah",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "trete", "du": "trittst", "er_sie_es": "tritt", "wir": "treten", "ihr": "tretet", "sie_Sie": "treten" },
      "praeteritum": { "ich": "trat", "du": "tratest", "er_sie_es": "trat", "wir": "traten", "ihr": "tratet", "sie_Sie": "traten" },
      "perfekt": "hat getreten",
      "imperativ": "Tritt!/Tretet!/Treten Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er trat den Fußball kraftvoll ins Tor.", "id": "Dia menendang bola sepak dengan bertenaga ke dalam gawang." },
      { "de": "Treten Sie bitte vorsichtig ein!", "id": "Silakan melangkah masuk dengan berhati-hati!" }
    ]
  },
  {
    "id": "boxen-421",
    "level": "B1",
    "infinitiv": "boxen",
    "arti": "bertinju di ring",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "boxe", "du": "boxst", "er_sie_es": "boxt", "wir": "boxen", "ihr": "boxt", "sie_Sie": "boxen" },
      "praeteritum": { "ich": "boxte", "du": "boxtest", "er_sie_es": "boxte", "wir": "boxten", "ihr": "boxtet", "sie_Sie": "boxten" },
      "perfekt": "hat geboxt",
      "imperativ": "Boxe!/Boxt!/Boxen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er boxt dreimal pro Woche im Sportclub.", "id": "Dia berlatih tinju tiga kali seminggu di klub olahraga." },
      { "de": "Die beiden Athleten boxten um den Meistertitel.", "id": "Kedua atlet itu bertinju memperebutkan gelar juara." }
    ]
  },
  {
    "id": "ringen-422",
    "level": "B2",
    "infinitiv": "ringen",
    "arti": "bergulat, berjuang keras demi sesuatu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "ringe", "du": "ringst", "er_sie_es": "ringt", "wir": "ringen", "ihr": "ringt", "sie_Sie": "ringen" },
      "praeteritum": { "ich": "rang", "du": "rangst", "er_sie_es": "rang", "wir": "rangen", "ihr": "rangt", "sie_Sie": "rangen" },
      "perfekt": "hat gerungen",
      "imperativ": "Ringe!/Ringt!/Ringen Sie!"
    },
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Die Politiker ringen um einen Kompromiss.", "id": "Para politisi berjuang keras mencapai titik kompromi." },
      { "de": "Er rang nach Luft nach dem Sprint.", "id": "Dia terengah-engah mencari udara seusai lari cepat." }
    ]
  },
  {
    "id": "siegen-423",
    "level": "B2",
    "infinitiv": "triumphieren",
    "arti": "merayakan kemenangan gemilang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "triumphiere", "du": "triumphierst", "er_sie_es": "triumphiert", "wir": "triumphieren", "ihr": "triumphiert", "sie_Sie": "triumphieren" },
      "praeteritum": { "ich": "triumphierte", "du": "triumphiertest", "er_sie_es": "triumphierte", "wir": "triumphierten", "ihr": "triumphiertet", "sie_Sie": "triumphierten" },
      "perfekt": "hat triumphiert",
      "imperativ": "Triumphiere!/Triumphiert!/Triumphieren Sie!"
    },
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Die Mannschaft triumphierte im Endspiel.", "id": "Tim tersebut merayakan kemenangan gemilang di partai final." },
      { "de": "Die Vernunft triumphierte am Ende über das Chaos.", "id": "Akal sehat pada akhirnya menang atas kekacauan." }
    ]
  },
  {
    "id": "jubeln-424",
    "level": "B1",
    "infinitiv": "jubeln",
    "arti": "bersorak gembira",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "juble", "du": "jubelst", "er_sie_es": "jubelt", "wir": "jubeln", "ihr": "jubelt", "sie_Sie": "jubeln" },
      "praeteritum": { "ich": "jubelte", "du": "jubeltest", "er_sie_es": "jubelte", "wir": "jubelten", "ihr": "jubeltet", "sie_Sie": "jubelten" },
      "perfekt": "hat gejubelt",
      "imperativ": "Juble!/Jubelt!/Jubeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Zuschauer jubelten laut beim Siegtor.", "id": "Para penonton bersorak kencang menyambut gol kemenangan." },
      { "de": "Wir jubelten vor Freude, als die Noten kamen.", "id": "Kami bersorak gembira saat hasil nilai dibagikan." }
    ]
  },
  {
    "id": "klatschen-425",
    "level": "A2",
    "infinitiv": "klatschen",
    "arti": "bertepuk tangan, bergosip",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "klatsche", "du": "klatschst", "er_sie_es": "klatscht", "wir": "klatschen", "ihr": "klatscht", "sie_Sie": "klatschen" },
      "praeteritum": { "ich": "klatschte", "du": "klatschtest", "er_sie_es": "klatschte", "wir": "klatschen", "ihr": "klatschtet", "sie_Sie": "klatschten" },
      "perfekt": "hat geklatscht",
      "imperativ": "Klatsche!/Klatscht!/Klatschen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Das Publikum klatschte begeistert Beifall.", "id": "Penonton bertepuk tangan memberikan apresiasi meriah." },
      { "de": "Die Nachbarn klatschen gern über andere Leute.", "id": "Tetangga-tetangga suka bergosip membicarakan orang lain." }
    ]
  },
  {
    "id": "pfeifen-426",
    "level": "B1",
    "infinitiv": "pfeifen",
    "arti": "bersiul, meniup peluit wasit",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "pfeife", "du": "pfeifst", "er_sie_es": "pfeift", "wir": "pfeifen", "ihr": "pfeift", "sie_Sie": "pfeifen" },
      "praeteritum": { "ich": "pfiff", "du": "pfiffst", "er_sie_es": "pfiff", "wir": "pfiffen", "ihr": "pfft", "sie_Sie": "pfiffen" },
      "perfekt": "hat gepfiffen",
      "imperativ": "Pfeif!/Pfeift!/Pfeifen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Er pfeift immer fröhlich ein Lied bei der Arbeit.", "id": "Dia selalu bersiul menyanyikan lagu dengan riang saat bekerja." },
      { "de": "Der Schiedsrichter pfiff das Spiel pünktlich ab.", "id": "Wasit meniup peluit tanda pertandingan berakhir tepat waktu." }
    ]
  },
  {
    "id": "brüllen-427",
    "level": "B2",
    "infinitiv": "brüllen",
    "arti": "mengaum singa, membentak berteriak",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "brülle", "du": "brüllst", "er_sie_es": "brüllt", "wir": "brüllen", "ihr": "brüllt", "sie_Sie": "brüllen" },
      "praeteritum": { "ich": "brüllte", "du": "brülltest", "er_sie_es": "brüllte", "wir": "brüllten", "ihr": "brülltet", "sie_Sie": "brüllten" },
      "perfekt": "hat gebrüllt",
      "imperativ": "Brülle!/Brüllt!/Brüllen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Löwe brüllte laut in der Savanne.", "id": "Singa itu mengaum keras di padang sabana." },
      { "de": "Brüll mich bitte nicht so grundlos an!", "id": "Tolong jangan membentak saya tanpa alasan seperti itu!" }
    ]
  },
  {
    "id": "schimpfen-428",
    "level": "A2",
    "infinitiv": "schimpfen",
    "arti": "memarahi, mengomel",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "schimpfe", "du": "schimpfst", "er_sie_es": "schimpft", "wir": "schimpfen", "ihr": "schimpft", "sie_Sie": "schimpfen" },
      "praeteritum": { "ich": "schimpfte", "du": "schimpftest", "er_sie_es": "schimpfte", "wir": "schimpften", "ihr": "schimpftet", "sie_Sie": "schimpften" },
      "perfekt": "hat geschimpft",
      "imperativ": "Schimpfe!/Schimpft!/Schimpfen Sie!"
    },
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }, { "präposition": "über", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Der Vater schimpft mit dem ungezogenen Sohn.", "id": "Ayah memarahi anak laki-lakinya yang nakal." },
      { "de": "Er schimpft ständig über die hohen Benzinpreise.", "id": "Dia terus-menerus mengomel soal mahalnya harga bensin." }
    ]
  },
  {
    "id": "tadeln-429",
    "level": "C1",
    "infinitiv": "tadeln",
    "arti": "mencela kesalahan secara formal",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "tadle", "du": "tadelst", "er_sie_es": "tadelt", "wir": "tadeln", "ihr": "tadelt", "sie_Sie": "tadeln" },
      "praeteritum": { "ich": "tadelte", "du": "tadeltest", "er_sie_es": "tadelte", "wir": "tadelten", "ihr": "tadeltet", "sie_Sie": "tadelten" },
      "perfekt": "hat getadelt",
      "imperativ": "Tadle!/Tadelt!/Tadeln Sie!"
    },
    "praepositionen": [{ "präposition": "wegen", "kasus": "Genitiv" }],
    "contoh_kalimat": [
      { "de": "Der Lehrer tadelte den Schüler wegen seiner Unaufmerksamkeit.", "id": "Guru menegur murid itu karena sikapnya yang tidak fokus." },
      { "de": "Sein Verhalten wurde von allen scharf getadelt.", "id": "Perilakunya dicela dengan keras oleh semua pihak." }
    ]
  },
  {
    "id": "loben-430",
    "level": "A2",
    "infinitiv": "loben",
    "arti": "memuji prestasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "lobe", "du": "lobst", "er_sie_es": "lobt", "wir": "loben", "ihr": "lobt", "sie_Sie": "loben" },
      "praeteritum": { "ich": "lobte", "du": "lobtest", "er_sie_es": "lobte", "wir": "lobten", "ihr": "lobtet", "sie_Sie": "lobten" },
      "perfekt": "hat gelobt",
      "imperativ": "Lobe!/Lobt!/Loben Sie!"
    },
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Die Chefin lobte ihn für seine exzellente Arbeit.", "id": "Atasan memujinya atas hasil kerjanya yang luar biasa." },
      { "de": "Kinder sollten für gute Taten gelobt werden.", "id": "Anak-anak semestinya dipuji bila berbuat kebaikan." }
    ]
  },
  {
    "id": "preisen-431",
    "level": "C1",
    "infinitiv": "preisen",
    "arti": "menyanjung tinggi, memuliakan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": {
      "praesens": { "ich": "preise", "du": "preist", "er_sie_es": "preist", "wir": "preisen", "ihr": "preist", "sie_Sie": "preisen" },
      "praeteritum": { "ich": "pries", "du": "priest", "er_sie_es": "pries", "wir": "priesen", "ihr": "priest", "sie_Sie": "priesen" },
      "perfekt": "hat gepriesen",
      "imperativ": "Preise!/Preist!/Preisen Sie!"
    },
    "contoh_kalimat": [
      { "de": "Die Kritiker priesen den Roman als Meisterwerk.", "id": "Para kritikus menyanjung novel tersebut sebagai mahakarya." },
      { "de": "Er pries die Vorzüge des einfachen Landlebens.", "id": "Dia memuji-muji keunggulan hidup sederhana di desa." }
    ]
  },
  {
    "id": "kritisieren-432",
    "level": "B1",
    "infinitiv": "kritisieren",
    "arti": "mengkritik kekurangan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "kritisiere", "du": "kritisierst", "er_sie_es": "kritisiert", "wir": "kritisieren", "ihr": "kritisiert", "sie_Sie": "kritisieren" },
      "praeteritum": { "ich": "kritisierte", "du": "kritisiertest", "er_sie_es": "kritisierte", "wir": "kritisierten", "ihr": "kritisiertet", "sie_Sie": "kritisierten" },
      "perfekt": "hat kritisiert",
      "imperativ": "Kritisiere!/Kritisiert!/Kritisieren Sie!"
    },
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "contoh_kalimat": [
      { "de": "Die Opposition kritisiert die Pläne der Regierung.", "id": "Oposisi mengkritik rencana-rencana pemerintah." },
      { "de": "Er kritisiert ständig die Arbeit seiner Kollegen.", "id": "Dia selalu saja mengkritik pekerjaan rekan-rekannya." }
    ]
  },
  {
    "id": "bemängeln-433",
    "level": "C1",
    "infinitiv": "bemängeln",
    "arti": "mempermasalahkan cacat produk/layanan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "bemängle", "du": "bemängelst", "er_sie_es": "bemängelt", "wir": "bemängeln", "ihr": "bemängelt", "sie_Sie": "bemängeln" },
      "praeteritum": { "ich": "bemängelte", "du": "bemängeltest", "er_sie_es": "bemängelte", "wir": "bemängelten", "ihr": "bemängeltet", "sie_Sie": "bemängelten" },
      "perfekt": "hat bemängelt",
      "imperativ": "Bemängle!/Bemängelt!/Bemängeln Sie!"
    },
    "contoh_kalimat": [
      { "de": "Der Prüfer bemängelte mehrere Sicherheitslücken.", "id": "Penguji mempermasalahkan sejumlah celah keamanan." },
      { "de": "Kunden bemängelten die unzureichende Verpackung.", "id": "Pelanggan mengeluhkan pengemasan produk yang dinilai kurang baik." }
    ]
  },
  {
    "id": "akzeptieren-434",
    "level": "A2",
    "infinitiv": "akzeptieren",
    "arti": "menerima syarat/keadaan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "akzeptiere", "du": "akzeptierst", "er_sie_es": "akzeptiert", "wir": "akzeptieren", "ihr": "akzeptiert", "sie_Sie": "akzeptieren" },
      "praeteritum": { "ich": "akzeptierte", "du": "akzeptiertest", "er_sie_es": "akzeptierte", "wir": "akzeptierten", "ihr": "akzeptiertet", "sie_Sie": "akzeptierten" },
      "perfekt": "hat akzeptiert",
      "imperativ": "Akzeptiere!/Akzeptiert!/Akzeptieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "Ich kann diese unfairen Bedingungen nicht akzeptieren.", "id": "Saya tidak bisa menerima syarat-syarat yang tidak adil ini." },
      { "de": "Wir akzeptieren Zahlungen per Kreditkarte.", "id": "Kami menerima pembayaran menggunakan kartu kredit." }
    ]
  },
  {
    "id": "ablehnen-435",
    "level": "B1",
    "infinitiv": "ablehnen",
    "arti": "menolak usulan/lamaran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "lehne ab", "du": "lehnst ab", "er_sie_es": "lehnt ab", "wir": "lehnen ab", "ihr": "lehnt ab", "sie_Sie": "lehnen ab" },
      "praeteritum": { "ich": "lehnte ab", "du": "lehntest ab", "er_sie_es": "lehnte ab", "wir": "lehnten ab", "ihr": "lehntet ab", "sie_Sie": "lehnten ab" },
      "perfekt": "hat abgelehnt",
      "imperativ": "Lehne ab!/Lehnt ab!/Lehnen Sie ab!"
    },
    "contoh_kalimat": [
      { "de": "Er hat das Jobangebot leider abgelehnt.", "id": "Sayang sekali dia menolak tawaran pekerjaan tersebut." },
      { "de": "Der Antrag wurde vom Ausschuss abgelehnt.", "id": "Permohonan itu ditolak oleh komite." }
    ]
  },
  {
    "id": "zustimmen-436",
    "level": "B1",
    "infinitiv": "zustimmen",
    "arti": "menyetujui argumen seseorang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "stimme zu", "du": "stimmst zu", "er_sie_es": "stimmt zu", "wir": "stimmen zu", "ihr": "stimmt zu", "sie_Sie": "stimmen zu" },
      "praeteritum": { "ich": "stimmte zu", "du": "stimmtest zu", "er_sie_es": "stimmte zu", "wir": "stimmten zu", "ihr": "stimmtet zu", "sie_Sie": "stimmten zu" },
      "perfekt": "hat zugestimmt",
      "imperativ": "Stimme zu!/Stimmt zu!/Stimmen Sie zu!"
    },
    "contoh_kalimat": [
      { "de": "Ich stimme deinem Vorschlag voll und ganz zu.", "id": "Saya sangat menyetujui usulanmu sepenuhnya." },
      { "de": "Der Vorstand stimmte den Haushaltsplänen zu.", "id": "Dewan direksi menyetujui rencana anggaran belanja tersebut." }
    ]
  },
  {
    "id": "ablehnen-437",
    "level": "B2",
    "infinitiv": "widersetzen",
    "arti": "menentang aturan, membangkang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "widersetze mich", "du": "widersetzt dich", "er_sie_es": "widersetzt sich", "wir": "widersetzen uns", "ihr": "widersetzt euch", "sie_Sie": "widersetzen sich" },
      "praeteritum": { "ich": "widersetzte mich", "du": "widersetztest dich", "er_sie_es": "widersetzte sich", "wir": "widersetzten uns", "ihr": "widersetztet euch", "sie_Sie": "widersetzten sich" },
      "perfekt": "hat sich widersetzt",
      "imperativ": "Widersetze dich!/Widersetzt euch!/Widersetzen Sie sich!"
    },
    "contoh_kalimat": [
      { "de": "Der Bürger widersetzte sich den unrechtmäßigen Anweisungen.", "id": "Warga tersebut menentang instruksi yang melanggar hukum." },
      { "de": "Niemand wagte es, sich dem Befehl zu widersetzen.", "id": "Tidak seorang pun berani membangkang dari perintah itu." }
    ]
  },
  {
    "id": "einwilligen-438",
    "level": "B2",
    "infinitiv": "einwilligen",
    "arti": "memberi persetujuan resmi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": {
      "praesens": { "ich": "willige ein", "du": "willigst ein", "er_sie_es": "willigt ein", "wir": "willigen ein", "ihr": "willigt ein", "sie_Sie": "willigen ein" },
      "praeteritum": { "ich": "willigte ein", "du": "willigtest ein", "er_sie_es": "willigte ein", "wir": "willigten ein", "ihr": "willigtet ein", "sie_Sie": "willigten ein" },
      "perfekt": "hat eingewilligt",
      "imperativ": "Willige ein!/Willigt ein!/Willigen Sie ein!"
    },
    "praepositionen": [{ "präposition": "in", "kasus": "Akkusativ" }],
    "contoh_kalimat": [
      { "de": "Der Patient willigte in die Operation ein.", "id": "Pasien memberikan persetujuan untuk operasi tersebut." },
      { "de": "Die Eltern haben in die Heirat eingewilligt.", "id": "Orang tua telah merestui pernikahan itu." }
    ]
  },
  {
    "id": "dulden-439",
    "level": "C1",
    "infinitiv": "dulden",
    "arti": "mentoleransi, membiarkan terjadi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "dulde", "du": "duldest", "er_sie_es": "duldet", "wir": "dulden", "ihr": "duldet", "sie_Sie": "dulden" },
      "praeteritum": { "ich": "duldete", "du": "duldetest", "er_sie_es": "duldete", "wir": "duldeten", "ihr": "duldetet", "sie_Sie": "duldeten" },
      "perfekt": "hat geduldet",
      "imperativ": "Dulde!/Duldet!/Dulden Sie!"
    },
    "contoh_kalimat": [
      { "de": "Wir dulden keinerlei Diskriminierung an dieser Schule.", "id": "Kami tidak mentoleransi segala bentuk diskriminasi di sekolah ini." },
      { "de": "Sein respektloses Verhalten wird hier nicht geduldet.", "id": "Perilakunya yang tidak sopan tidak akan dibiarkan di sini." }
    ]
  },
  {
    "id": "tolerieren-440",
    "level": "B2",
    "infinitiv": "tolerieren",
    "arti": "menerima perbedaan sudut pandang (toleransi)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": {
      "praesens": { "ich": "toleriere", "du": "tolerierst", "er_sie_es": "toleriert", "wir": "tolerieren", "ihr": "toleriert", "sie_Sie": "tolerieren" },
      "praeteritum": { "ich": "tolerierte", "du": "toleriertest", "er_sie_es": "tolerierte", "wir": "tolerierten", "ihr": "toleriertet", "sie_Sie": "tolerierten" },
      "perfekt": "hat toleriert",
      "imperativ": "Toleriere!/Toleriert!/Tolerieren Sie!"
    },
    "contoh_kalimat": [
      { "de": "In einer Demokratie muss man andere Meinungen tolerieren.", "id": "Dalam alam demokrasi orang wajib bertoleransi atas perbedaan pendapat." },
      { "de": "Fehlverhalten am Arbeitsplatz wird nicht toleriert.", "id": "Pelanggaran aturan di tempat kerja tidak akan ditoleransi." }
    ]
  },
  {
    "id": "anerkennen-441",
    "level": "A2",
    "infinitiv": "anerkennen",
    "arti": "mengakui ijazah/hak",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "erkenne an", "du": "erkennst an", "er_sie_es": "erkennt an", "wir": "erkennen an", "ihr": "erkennt an", "sie_Sie": "erkennen an" }, "praeteritum": { "ich": "erkannte an", "du": "erkanntest an", "er_sie_es": "erkannte an", "wir": "erkannten an", "ihr": "erkanntet an", "sie_Sie": "erkannten an" }, "perfekt": "hat anerkannt", "imperativ": "Erkenne an!/Erkennt an!/Erkennen Sie an!" },
    "contoh_kalimat": [{ "de": "Wird mein Abschluss in Deutschland anerkannt?", "id": "Apakah ijazah saya diakui di Jerman?" }]
  },
  {
    "id": "abweisen-442",
    "level": "B2",
    "infinitiv": "abweisen",
    "arti": "menolak permohonan/tamu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "weise ab", "du": "weist ab", "er_sie_es": "weist ab", "wir": "weisen ab", "ihr": "weist ab", "sie_Sie": "weisen ab" }, "praeteritum": { "ich": "wies ab", "du": "wiesest ab", "er_sie_es": "wies ab", "wir": "wiesen ab", "ihr": "wiest ab", "sie_Sie": "wiesen ab" }, "perfekt": "hat abgewiesen", "imperativ": "Weise ab!/Weist ab!/Weisen Sie ab!" },
    "contoh_kalimat": [{ "de": "Die Klage wurde vom Richter abgewiesen.", "id": "Gugatan itu ditolak oleh hakim." }]
  },
  {
    "id": "bestaetigen-443",
    "level": "B1",
    "infinitiv": "bestätigen",
    "arti": "mengonfirmasi kebenaran/pesanan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bestätige", "du": "bestätigst", "er_sie_es": "bestätigt", "wir": "bestätigen", "ihr": "bestätigt", "sie_Sie": "bestätigen" }, "praeteritum": { "ich": "bestätigte", "du": "bestätigtest", "er_sie_es": "bestätigte", "wir": "bestätigten", "ihr": "bestätigtet", "sie_Sie": "bestätigten" }, "perfekt": "hat bestätigt", "imperativ": "Bestätige!/Bestätigt!/Bestätigen Sie!" },
    "contoh_kalimat": [{ "de": "Bitte bestätigen Sie Ihre Reservierung per Mail.", "id": "Mohon konfirmasi reservasi Anda melalui email." }]
  },
  {
    "id": "bezweifeln-444",
    "level": "B2",
    "infinitiv": "bezweifeln",
    "arti": "meragukan kebenaran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bezweifle", "du": "bezweifelst", "er_sie_es": "bezweifelt", "wir": "bezweifeln", "ihr": "bezweifelt", "sie_Sie": "bezweifeln" }, "praeteritum": { "ich": "bezweifelte", "du": "bezweifeltest", "er_sie_es": "bezweifelte", "wir": "bezweifelten", "ihr": "bezweifeltet", "sie_Sie": "bezweifelten" }, "perfekt": "hat bezweifelt", "imperativ": "Bezweifle!/Bezweifelt!/Bezweifeln Sie!" },
    "contoh_kalimat": [{ "de": "Ich bezweifle, dass dieser Plan funktioniert.", "id": "Saya meragukan rencana ini akan berhasil." }]
  },
  {
    "id": "zweifeln-445",
    "level": "B1",
    "infinitiv": "zweifeln",
    "arti": "ragu-ragu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "zweifle", "du": "zweifelst", "er_sie_es": "zweifelt", "wir": "zweifeln", "ihr": "zweifelt", "sie_Sie": "zweifeln" }, "praeteritum": { "ich": "zweifelte", "du": "zweifeltest", "er_sie_es": "zweifelte", "wir": "zweifeln", "ihr": "zweifeltet", "sie_Sie": "zweifelten" }, "perfekt": "hat gezweifelt", "imperativ": "Zweifle!/Zweifelt!/Zweifeln Sie!" },
    "contoh_kalimat": [{ "de": "Er zweifelt an seinen eigenen Fähigkeiten.", "id": "Dia meragukan kemampuannya sendiri." }]
  },
  {
    "id": "vermuten-446",
    "level": "B1",
    "infinitiv": "vermuten",
    "arti": "menduga",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "vermute", "du": "vermutest", "er_sie_es": "vermutet", "wir": "vermuten", "ihr": "vermutet", "sie_Sie": "vermuten" }, "praeteritum": { "ich": "vermutete", "du": "vermutetest", "er_sie_es": "vermutete", "wir": "vermuteten", "ihr": "vermutetet", "sie_Sie": "vermuteten" }, "perfekt": "hat vermutet", "imperativ": "Vermute!/Vermutet!/Vermuten Sie!" },
    "contoh_kalimat": [{ "de": "Wir vermuten, dass der Zug Verspätung hat.", "id": "Kami menduga keretanya terlambat." }]
  },
  {
    "id": "ahnen-447",
    "level": "B2",
    "infinitiv": "ahnen",
    "arti": "firasat, menduga samar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "ahne", "du": "ahnst", "er_sie_es": "ahnt", "wir": "ahnen", "ihr": "ahnt", "sie_Sie": "ahnen" }, "praeteritum": { "ich": "ahnte", "du": "ahntest", "er_sie_es": "ahnte", "wir": "ahnten", "ihr": "ahntet", "sie_Sie": "ahnten" }, "perfekt": "hat geahnt", "imperativ": "Ahne!/Ahnt!/Ahnen Sie!" },
    "contoh_kalimat": [{ "de": "Ich habe so etwas schon geahnt.", "id": "Saya sudah punya firasat akan hal seperti ini." }]
  },
  {
    "id": "verraten-448",
    "level": "B1",
    "infinitiv": "verraten",
    "arti": "membocorkan rahasia, mengkhianati",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "verrate", "du": "verrätst", "er_sie_es": "verrät", "wir": "verraten", "ihr": "verratet", "sie_Sie": "verraten" }, "praeteritum": { "ich": "verriet", "du": "verrietest", "er_sie_es": "verriet", "wir": "verrieten", "ihr": "verrietet", "sie_Sie": "verrieten" }, "perfekt": "hat verraten", "imperativ": "Verrate!/Verratet!/Verraten Sie!" },
    "contoh_kalimat": [{ "de": "Verrate niemandem mein Geheimnis!", "id": "Jangan bocorkan rahasiaku kepada siapa pun!" }]
  },
  {
    "id": "enthuellen-449",
    "level": "C1",
    "infinitiv": "enthüllen",
    "arti": "mengungkap skandal/monumen",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "enthülle", "du": "enthüllst", "er_sie_es": "enthüllt", "wir": "enthüllen", "ihr": "enthüllt", "sie_Sie": "enthüllen" }, "praeteritum": { "ich": "enthüllte", "du": "enthülltest", "er_sie_es": "enthüllte", "wir": "enthüllten", "ihr": "enthülltet", "sie_Sie": "enthüllten" }, "perfekt": "hat enthüllt", "imperativ": "Enthülle!/Enthüllt!/Enthüllen Sie!" },
    "contoh_kalimat": [{ "de": "Der Journalist enthüllte die Wahrheit.", "id": "Jurnalis itu mengungkap kebenaran." }]
  },
  {
    "id": "verbergen-450",
    "level": "B2",
    "infinitiv": "verbergen",
    "arti": "menyembunyikan perasaan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "verberge", "du": "verbirgst", "er_sie_es": "verbirgt", "wir": "verbergen", "ihr": "verbergt", "sie_Sie": "verbergen" }, "praeteritum": { "ich": "verbarg", "du": "verbargst", "er_sie_es": "verbarg", "wir": "verbargen", "ihr": "verbargt", "sie_Sie": "verbargen" }, "perfekt": "hat verborgen", "imperativ": "Verbirg!/Verbergt!/Verbergen Sie!" },
    "contoh_kalimat": [{ "de": "Sie konnte ihre Enttäuschung kaum verbergen.", "id": "Dia hampir tidak bisa menyembunyikan kekecewaannya." }]
  },
  {
    "id": "gestehen-451",
    "level": "B2",
    "infinitiv": "gestehen",
    "arti": "mengakui kesalahan/cinta",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "gestehe", "du": "gestehst", "er_sie_es": "gesteht", "wir": "gestehen", "ihr": "gesteht", "sie_Sie": "gestehen" }, "praeteritum": { "ich": "gestand", "du": "gestandst", "er_sie_es": "gestand", "wir": "gestanden", "ihr": "gestandet", "sie_Sie": "gestanden" }, "perfekt": "hat gestanden", "imperativ": "Gestehe!/Gesteht!/Gestehen Sie!" },
    "contoh_kalimat": [{ "de": "Der Täter hat die Tat voll gestanden.", "id": "Pelaku mengakui perbuatannya secara penuh." }]
  },
  {
    "id": "leugnen-452",
    "level": "C1",
    "infinitiv": "leugnen",
    "arti": "menyangkal fakta nyata",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "leugne", "du": "leugnest", "er_sie_es": "leugnet", "wir": "leugnen", "ihr": "leugnet", "sie_Sie": "leugnen" }, "praeteritum": { "ich": "leugnete", "du": "leugnetest", "er_sie_es": "leugnete", "wir": "leugneten", "ihr": "leugnetet", "sie_Sie": "leugneten" }, "perfekt": "hat geleugnet", "imperativ": "Leugne!/Leugnet!/Leugnen Sie!" },
    "contoh_kalimat": [{ "de": "Niemand kann den Klimawandel leugnen.", "id": "Tidak ada yang bisa menyangkal perubahan iklim." }]
  },
  {
    "id": "bemerken-453",
    "level": "A2",
    "infinitiv": "bemerken",
    "arti": "menyadari, mencermati",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bemerke", "du": "bemerkst", "er_sie_es": "bemerkt", "wir": "bemerken", "ihr": "bemerkt", "sie_Sie": "bemerken" }, "praeteritum": { "ich": "bemerkte", "du": "bemerktest", "er_sie_es": "bemerkte", "wir": "bemerkten", "ihr": "bemerktet", "sie_Sie": "bemerkten" }, "perfekt": "hat bemerkt", "imperativ": "Bemerke!/Bemerkt!/Bemerken Sie!" },
    "contoh_kalimat": [{ "de": "Ich habe den Fehler sofort bemerkt.", "id": "Saya langsung menyadari kesalahan itu." }]
  },
  {
    "id": "uebersehen-454",
    "level": "B1",
    "infinitiv": "übersehen",
    "arti": "luput melihat, mengabaikan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "übersehe", "du": "übersiehst", "er_sie_es": "übersieht", "wir": "übersehen", "ihr": "überseht", "sie_Sie": "übersehen" }, "praeteritum": { "ich": "übersah", "du": "übersahst", "er_sie_es": "übersah", "wir": "übersahen", "ihr": "übersaht", "sie_Sie": "übersahen" }, "perfekt": "hat übersehen", "imperativ": "Übersieh!/Überseht!/Übersehen Sie!" },
    "contoh_kalimat": [{ "de": "Er hat das Stoppschild übersehen.", "id": "Dia luput melihat rambu stop itu." }]
  },
  {
    "id": "ignorieren-455",
    "level": "B1",
    "infinitiv": "ignorieren",
    "arti": "mengabaikan sengaja",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "ignoriere", "du": "ignorierst", "er_sie_es": "ignoriert", "wir": "ignorieren", "ihr": "ignoriert", "sie_Sie": "ignorieren" }, "praeteritum": { "ich": "ignorierte", "du": "ignoriertest", "er_sie_es": "ignorierte", "wir": "ignorierten", "ihr": "ignoriertet", "sie_Sie": "ignorierten" }, "perfekt": "hat ignoriert", "imperativ": "Ignoriere!/Ignoriert!/Ignorieren Sie!" },
    "contoh_kalimat": [{ "de": "Ignoriere einfach böse Kommentare.", "id": "Abaikan saja komentar-komentar jahat." }]
  },
  {
    "id": "beachten-456",
    "level": "B1",
    "infinitiv": "beachten",
    "arti": "memperhatikan instruksi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beachte", "du": "beachtest", "er_sie_es": "beachtet", "wir": "beachten", "ihr": "beachtet", "sie_Sie": "beachten" }, "praeteritum": { "ich": "beachtete", "du": "beachtetest", "er_sie_es": "beachtete", "wir": "beachteten", "ihr": "beachtetet", "sie_Sie": "beachteten" }, "perfekt": "hat beachtet", "imperativ": "Beachte!/Beachtet!/Beachten Sie!" },
    "contoh_kalimat": [{ "de": "Bitte beachten Sie die Hinweise.", "id": "Mohon perhatikan petunjuk-petunjuk tersebut." }]
  },
  {
    "id": "erkennen-457",
    "level": "A2",
    "infinitiv": "erkennen",
    "arti": "mengenali wajah/tanda",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "erkenne", "du": "erkennst", "er_sie_es": "erkennt", "wir": "erkennen", "ihr": "erkennt", "sie_Sie": "erkennen" }, "praeteritum": { "ich": "erkannte", "du": "erkanntest", "er_sie_es": "erkannte", "wir": "erkannten", "ihr": "erkanntet", "sie_Sie": "erkannten" }, "perfekt": "hat erkannt", "imperativ": "Erkenne!/Erkennt!/Erkennen Sie!" },
    "contoh_kalimat": [{ "de": "Ich habe dich mit der Brille kaum erkannt.", "id": "Saya hampir tidak mengenalimu saat memakai kacamata." }]
  },
  {
    "id": "wiedererkennen-458",
    "level": "B1",
    "infinitiv": "wiedererkennen",
    "arti": "mengenali kembali",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "erkenne wieder", "du": "erkennst wieder", "er_sie_es": "erkennt wieder", "wir": "erkennen wieder", "ihr": "erkennt wieder", "sie_Sie": "erkennen wieder" }, "praeteritum": { "ich": "erkannte wieder", "du": "erkanntest wieder", "er_sie_es": "erkannte wieder", "wir": "erkannten wieder", "ihr": "erkanntet wieder", "sie_Sie": "erkannten wieder" }, "perfekt": "hat wiedererkannt", "imperativ": "Erkenne wieder!/Erkennt wieder!/Erkennen Sie wieder!" },
    "contoh_kalimat": [{ "de": "Nach vielen Jahren haben sie sich sofort wiedererkannt.", "id": "Setelah bertahun-tahun mereka langsung saling mengenali kembali." }]
  },
  {
    "id": "verwechseln-459",
    "level": "B1",
    "infinitiv": "verwechseln",
    "arti": "salah mengenali orang lain (tertukar)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "verwechsle", "du": "verwechselst", "er_sie_es": "verwechselt", "wir": "verwechseln", "ihr": "verwechselt", "sie_Sie": "verwechseln" }, "praeteritum": { "ich": "verwechselte", "du": "verwechseltest", "er_sie_es": "verwechselte", "wir": "verwechselten", "ihr": "verwechseltet", "sie_Sie": "verwechselten" }, "perfekt": "hat verwechselt", "imperativ": "Verwechsle!/Verwechselt!/Verwechseln Sie!" },
    "contoh_kalimat": [{ "de": "Entschuldigung, ich habe Sie mit jemandem verwechselt.", "id": "Maaf, saya mengira Anda orang lain." }]
  },
  {
    "id": "taeuschen-460",
    "level": "B2",
    "infinitiv": "täuschen",
    "arti": "mengecoh, keliru (sich täuschen)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "täusche", "du": "täuschst", "er_sie_es": "täuscht", "wir": "täuschen", "ihr": "täuscht", "sie_Sie": "täuschen" }, "praeteritum": { "ich": "täuschte", "du": "täuschtest", "er_sie_es": "täuschte", "wir": "täuschten", "ihr": "täuschtet", "sie_Sie": "täuschten" }, "perfekt": "hat getäuscht", "imperativ": "Täusche!/Täuscht!/Täuschen Sie!" },
    "contoh_kalimat": [{ "de": "Der erste Schein kann oft täuschen.", "id": "Penampilan luar kerap mengecoh." }]
  },
  {
    "id": "enttaeuschen-461",
    "level": "B1",
    "infinitiv": "enttäuschen",
    "arti": "mengecewakan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "enttäusche", "du": "enttäuschst", "er_sie_es": "enttäuscht", "wir": "enttäuschen", "ihr": "enttäuscht", "sie_Sie": "enttäuschen" }, "praeteritum": { "ich": "enttäuschte", "du": "enttäuschtest", "er_sie_es": "enttäuschte", "wir": "enttäuschten", "ihr": "enttäuschtet", "sie_Sie": "enttäuschten" }, "perfekt": "hat enttäuscht", "imperativ": "Enttäusche!/Enttäuscht!/Enttäuschen Sie!" },
    "contoh_kalimat": [{ "de": "Ich möchte dich auf keinen Fall enttäuschen.", "id": "Saya sama sekali tidak ingin mengecewakanmu." }]
  },
  {
    "id": "begeistern-462",
    "level": "B1",
    "infinitiv": "begeistern",
    "arti": "membuat sangat kagum",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "begeistere", "du": "begeisterst", "er_sie_es": "begeistert", "wir": "begeistern", "ihr": "begeistert", "sie_Sie": "begeistern" }, "praeteritum": { "ich": "begeisterte", "du": "begeistertest", "er_sie_es": "begeisterte", "wir": "begeisterten", "ihr": "begeistertet", "sie_Sie": "begeisterten" }, "perfekt": "hat begeistert", "imperativ": "Begeistere!/Begeistert!/Begeistern Sie!" },
    "contoh_kalimat": [{ "de": "Das Konzert hat alle Besucher begeistert.", "id": "Konser itu membuat seluruh pengunjung terpukau." }]
  },
  {
    "id": "faszinieren-463",
    "level": "B2",
    "infinitiv": "faszinieren",
    "arti": "memikat hati, memesona",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "fasziniere", "du": "faszinierst", "er_sie_es": "fasziniert", "wir": "faszinieren", "ihr": "fasziniert", "sie_Sie": "faszinieren" }, "praeteritum": { "ich": "faszinierte", "du": "fasziniertest", "er_sie_es": "faszinierte", "wir": "faszinierten", "ihr": "fasziniertet", "sie_Sie": "faszinierten" }, "perfekt": "hat fasziniert", "imperativ": "Fasziniere!/Fasziniert!/Faszinieren Sie!" },
    "contoh_kalimat": [{ "de": "Astronomie fasziniert mich seit jeher.", "id": "Astronomi memikat hati saya sejak dulu." }]
  },
  {
    "id": "langweilen-464",
    "level": "A2",
    "infinitiv": "langweilen",
    "arti": "membuat bosan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "langweile", "du": "langweilst", "er_sie_es": "langweilt", "wir": "langweilen", "ihr": "langweilt", "sie_Sie": "langweilen" }, "praeteritum": { "ich": "langweilte", "du": "langweiltest", "er_sie_es": "langweilte", "wir": "langweilten", "ihr": "langweiltet", "sie_Sie": "langweilten" }, "perfekt": "hat gelangweilt", "imperativ": "Langweile!/Langweilt!/Langweilen Sie!" },
    "contoh_kalimat": [{ "de": "Dieser Vortrag langweilt das Publikum.", "id": "Presentasi ini membuat para hadirin bosan." }]
  },
  {
    "id": "nerven-465",
    "level": "A2",
    "infinitiv": "nerven",
    "arti": "menjengkelkan, bikin risih",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "nerve", "du": "nervst", "er_sie_es": "nervt", "wir": "nerven", "ihr": "nervt", "sie_Sie": "nerven" }, "praeteritum": { "ich": "nervte", "du": "nervtest", "er_sie_es": "nervte", "wir": "nervten", "ihr": "nervtet", "sie_Sie": "nervten" }, "perfekt": "hat genervt", "imperativ": "Nerv nicht!/Nervt nicht!" },
    "contoh_kalimat": [{ "de": "Das ständige Hupen nervt ungemein.", "id": "Klakson yang terus berbunyi itu sangat menjengkelkan." }]
  },
  {
    "id": "stoeren-466",
    "level": "A2",
    "infinitiv": "stören",
    "arti": "mengganggu ketenangan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "störe", "du": "störst", "er_sie_es": "stört", "wir": "stören", "ihr": "stört", "sie_Sie": "stören" }, "praeteritum": { "ich": "störte", "du": "störtest", "er_sie_es": "störte", "wir": "störten", "ihr": "störtet", "sie_Sie": "störten" }, "perfekt": "hat gestört", "imperativ": "Störe nicht!/Stört nicht!" },
    "contoh_kalimat": [{ "de": "Bitte nicht stören, ich lerne gerade.", "id": "Tolong jangan ganggu, saya sedang belajar." }]
  },
  {
    "id": "beruhigen-467",
    "level": "B1",
    "infinitiv": "beruhigen",
    "arti": "menenangkan kegelisahan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beruhige", "du": "beruhigst", "er_sie_es": "beruhigt", "wir": "beruhigen", "ihr": "beruhigt", "sie_Sie": "beruhigen" }, "praeteritum": { "ich": "beruhigte", "du": "beruhigtest", "er_sie_es": "beruhigte", "wir": "beruhigten", "ihr": "beruhigtet", "sie_Sie": "beruhigten" }, "perfekt": "hat beruhigt", "imperativ": "Beruhige dich!/Beruhigt euch!/Beruhigen Sie sich!" },
    "contoh_kalimat": [{ "de": "Atme tief durch und beruhige dich.", "id": "Tarik napas dalam-dalam dan tenangkan dirimu." }]
  },
  {
    "id": "erschrecken-468",
    "level": "B1",
    "infinitiv": "erschrecken",
    "arti": "kaget, terkejut",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "erschrecke", "du": "erschrickst", "er_sie_es": "erschrickt", "wir": "erschrecken", "ihr": "erschreckt", "sie_Sie": "erschrecken" }, "praeteritum": { "ich": "erschrak", "du": "erschrakst", "er_sie_es": "erschrak", "wir": "erschraken", "ihr": "erschrakt", "sie_Sie": "erschraken" }, "perfekt": "ist erschrocken", "imperativ": "Erschrick nicht!/Erschreckt nicht!" },
    "contoh_kalimat": [{ "de": "Ich bin zu Tode erschrocken.", "id": "Saya kaget setengah mati." }]
  },
  {
    "id": "befuerchten-469",
    "level": "B2",
    "infinitiv": "befürchten",
    "arti": "mengkhawatirkan hal buruk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "befürchte", "du": "befürchtest", "er_sie_es": "befürchtet", "wir": "befürchten", "ihr": "befürchtet", "sie_Sie": "befürchten" }, "praeteritum": { "ich": "befürchtete", "du": "befürchtetest", "er_sie_es": "befürchtete", "wir": "befürchteten", "ihr": "befürchtetet", "sie_Sie": "befürchteten" }, "perfekt": "hat befürchtet", "imperativ": "Befürchte!/Befürchtet!/Befürchten Sie!" },
    "contoh_kalimat": [{ "de": "Wir befürchten das Schlimmste.", "id": "Kami mengkhawatirkan kemungkinan terburuk." }]
  },
  {
    "id": "erhoffen-470",
    "level": "A2",
    "infinitiv": "erhoffen",
    "arti": "menaruh harapan besar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erhoffe", "du": "erhoffst", "er_sie_es": "erhofft", "wir": "erhoffen", "ihr": "erhofft", "sie_Sie": "erhoffen" }, "praeteritum": { "ich": "erhoffte", "du": "erhofftest", "er_sie_es": "erhoffte", "wir": "erhofften", "ihr": "erhofftet", "sie_Sie": "erhofften" }, "perfekt": "hat erhofft", "imperativ": "Erhoffe!/Erhofft!/Erhoffen Sie!" },
    "contoh_kalimat": [{ "de": "Sie erhofft sich viel von der neuen Stelle.", "id": "Dia menaruh harapan besar pada posisi barunya." }]
  },
  {
    "id": "wuenschen-471",
    "level": "A1",
    "infinitiv": "wünschen",
    "arti": "menginginkan, mendoakan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "wünsche", "du": "wünschst", "er_sie_es": "wünscht", "wir": "wünschen", "ihr": "wünscht", "sie_Sie": "wünschen" }, "praeteritum": { "ich": "wünschte", "du": "wünschtest", "er_sie_es": "wünschte", "wir": "wünschten", "ihr": "wünschtet", "sie_Sie": "wünschten" }, "perfekt": "hat gewünscht", "imperativ": "Wünsche!/Wünscht!/Wünschen Sie!" },
    "contoh_kalimat": [{ "de": "Ich wünsche dir alles Gute zum Geburtstag!", "id": "Saya mendoakan yang terbaik di hari ulang tahunmu!" }]
  },
  {
    "id": "traeumen-472",
    "level": "A2",
    "infinitiv": "träumen",
    "arti": "bermimpi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "träume", "du": "träumst", "er_sie_es": "träumt", "wir": "träumen", "ihr": "träumt", "sie_Sie": "träumen" }, "praeteritum": { "ich": "träumte", "du": "träumtest", "er_sie_es": "träumte", "wir": "träumten", "ihr": "träumtet", "sie_Sie": "träumten" }, "perfekt": "hat geträumt", "imperativ": "Träume!/Träumt!/Träumen Sie!" },
    "contoh_kalimat": [{ "de": "Ich träume von einer langen Weltreise.", "id": "Saya memimpikan perjalanan keliling dunia yang panjang." }]
  },
  {
    "id": "wachen-473",
    "level": "B2",
    "infinitiv": "wachen",
    "arti": "berjaga, mengawasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "wache", "du": "wachst", "er_sie_es": "wacht", "wir": "wachen", "ihr": "wacht", "sie_Sie": "wachen" }, "praeteritum": { "ich": "wachte", "du": "wachtest", "er_sie_es": "wachte", "wir": "wachten", "ihr": "wachtet", "sie_Sie": "wachten" }, "perfekt": "hat gewacht", "imperativ": "Wache!/Wacht!/Wachen Sie!" },
    "contoh_kalimat": [{ "de": "Der Hund wacht treu über das Haus.", "id": "Anjing itu setia menjaga rumah." }]
  },
  {
    "id": "erwachen-474",
    "level": "B2",
    "infinitiv": "erwachen",
    "arti": "terjaga dari tidur",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erwache", "du": "erwachst", "er_sie_es": "erwacht", "wir": "erwachen", "ihr": "erwacht", "sie_Sie": "erwachen" }, "praeteritum": { "ich": "erwachte", "du": "erwachtest", "er_sie_es": "erwachte", "wir": "erwachten", "ihr": "erwachtet", "sie_Sie": "erwachten" }, "perfekt": "ist erwacht", "imperativ": "Erwache!/Erwacht!/Erwachen Sie!" },
    "contoh_kalimat": [{ "de": "Die Natur erwacht im Frühling zu neuem Leben.", "id": "Alam terbangun menjalani kehidupan baru saat musim semi." }]
  },
  {
    "id": "wecken-475",
    "level": "A2",
    "infinitiv": "wecken",
    "arti": "membangunkan orang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "wecke", "du": "weckst", "er_sie_es": "weckt", "wir": "wecken", "ihr": "weckt", "sie_Sie": "wecken" }, "praeteritum": { "ich": "weckte", "du": "wecktest", "er_sie_es": "weckte", "wir": "weckten", "ihr": "wecktet", "sie_Sie": "weckten" }, "perfekt": "hat geweckt", "imperativ": "Wecke!/Weckt!/Wecken Sie!" },
    "contoh_kalimat": [{ "de": "Der Wecker weckt mich jeden Tag um sechs.", "id": "Jam beker membangunkan saya jam enam setiap hari." }]
  },
  {
    "id": "klingeln-476",
    "level": "A1",
    "infinitiv": "klingeln",
    "arti": "berdering",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "klingle", "du": "klingelst", "er_sie_es": "klingelt", "wir": "klingeln", "ihr": "klingelt", "sie_Sie": "klingeln" }, "praeteritum": { "ich": "klingelte", "du": "klingeltest", "er_sie_es": "klingelte", "wir": "klingelten", "ihr": "klingeltet", "sie_Sie": "klingelten" }, "perfekt": "hat geklingelt", "imperativ": "Klingle!/Klingelt!/Klingeln Sie!" },
    "contoh_kalimat": [{ "de": "Das Telefon klingelt schon seit Minuten.", "id": "Teleponnya sudah berdering sejak beberapa menit." }]
  },
  {
    "id": "schellen-477",
    "level": "A2",
    "infinitiv": "schellen",
    "arti": "memencet bel",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schelle", "du": "schellst", "er_sie_es": "schellt", "wir": "schellen", "ihr": "schellt", "sie_Sie": "schellen" }, "praeteritum": { "ich": "schellte", "du": "schelltest", "er_sie_es": "schellte", "wir": "schellten", "ihr": "schelltet", "sie_Sie": "schellten" }, "perfekt": "hat geschellt", "imperativ": "Schelle!/Schellt!/Schellen Sie!" },
    "contoh_kalimat": [{ "de": "Es hat an der Tür geschellt, geh mal nachsehen.", "id": "Ada yang memencet bel pintu, coba lihat." }]
  },
  {
    "id": "klopfen-478",
    "level": "A2",
    "infinitiv": "klopfen",
    "arti": "mengetuk pintu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "klopfe", "du": "klopfst", "er_sie_es": "klopft", "wir": "klopfen", "ihr": "klopft", "sie_Sie": "klopfen" }, "praeteritum": { "ich": "klopfte", "du": "klopftest", "er_sie_es": "klopfte", "wir": "klopften", "ihr": "klopftet", "sie_Sie": "klopften" }, "perfekt": "hat geklopft", "imperativ": "Klopfe!/Klopft!/Klopfen Sie!" },
    "contoh_kalimat": [{ "de": "Klopfe bitte an, bevor du eintrittst.", "id": "Ketuk pintu sebelum melangkah masuk." }]
  },
  {
    "id": "haemmern-479",
    "level": "B2",
    "infinitiv": "hämmern",
    "arti": "memalu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "hämmere", "du": "hämmerst", "er_sie_es": "hämmert", "wir": "hämmern", "ihr": "hämmert", "sie_Sie": "hämmern" }, "praeteritum": { "ich": "hämmerte", "du": "hämmertest", "er_sie_es": "hämmerte", "wir": "hämmerten", "ihr": "hämmertet", "sie_Sie": "hämmerten" }, "perfekt": "hat gehämmert", "imperativ": "Hämmere!/Hämmert!/Hämmern Sie!" },
    "contoh_kalimat": [{ "de": "Er hämmert einen Nagel in die Wand.", "id": "Dia memalu paku ke dinding." }]
  },
  {
    "id": "bohren-480",
    "level": "B1",
    "infinitiv": "bohren",
    "arti": "mengebor lubang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bohre", "du": "bohrst", "er_sie_es": "bohrt", "wir": "bohren", "ihr": "bohrt", "sie_Sie": "bohren" }, "praeteritum": { "ich": "bohrte", "du": "bohrtest", "er_sie_es": "bohrte", "wir": "bohrten", "ihr": "bohrtet", "sie_Sie": "bohrten" }, "perfekt": "hat gebohrt", "imperativ": "Bohre!/Bohrt!/Bohren Sie!" },
    "contoh_kalimat": [{ "de": "Wir müssen ein Loch für das Regal bohren.", "id": "Kita harus mengebor lubang untuk rak." }]
  },
  {
    "id": "saegen-481",
    "level": "B1",
    "infinitiv": "sägen",
    "arti": "menggergaji kayu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "säge", "du": "sägst", "er_sie_es": "sägt", "wir": "sägen", "ihr": "sägt", "sie_Sie": "sägen" }, "praeteritum": { "ich": "sägte", "du": "sägtest", "er_sie_es": "sägte", "wir": "sägten", "ihr": "sägtet", "sie_Sie": "sägten" }, "perfekt": "hat gesägt", "imperativ": "Säge!/Sägt!/Sägen Sie!" },
    "contoh_kalimat": [{ "de": "Er sägt das Holz für den Kamin zurecht.", "id": "Dia menggergaji kayu bakar untuk perapian." }]
  },
  {
    "id": "schleifen-482",
    "level": "B2",
    "infinitiv": "schleifen",
    "arti": "mengamplas, mengasah pisau",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "schleife", "du": "schleifst", "er_sie_es": "schleift", "wir": "schleifen", "ihr": "schleift", "sie_Sie": "schleifen" }, "praeteritum": { "ich": "schliff", "du": "schliffst", "er_sie_es": "schliff", "wir": "schliffen", "ihr": "schlifft", "sie_Sie": "schliffen" }, "perfekt": "hat geschliffen", "imperativ": "Schleife!/Schleift!/Schleifen Sie!" },
    "contoh_kalimat": [{ "de": "Der Koch schleift seine Messer vor der Arbeit.", "id": "Koki mengasah pisau-pisaunya sebelum mulai bekerja." }]
  },
  {
    "id": "feilen-483",
    "level": "B2",
    "infinitiv": "feilen",
    "arti": "mengikir kuku/besi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "feile", "du": "feilst", "er_sie_es": "feilt", "wir": "feilen", "ihr": "feilt", "sie_Sie": "feilen" }, "praeteritum": { "ich": "feilte", "du": "feiltest", "er_sie_es": "feilte", "wir": "feilten", "ihr": "feiltet", "sie_Sie": "feilten" }, "perfekt": "hat gefeilt", "imperativ": "Feile!/Feilt!/Feilen Sie!" },
    "contoh_kalimat": [{ "de": "Der Autor feilt noch am letzten Kapitel.", "id": "Penulis masih menyempurnakan bab terakhir bukunya." }]
  },
  {
    "id": "kleben-484",
    "level": "A2",
    "infinitiv": "kleben",
    "arti": "menempel dengan lem",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "klebe", "du": "klebst", "er_sie_es": "klebt", "wir": "kleben", "ihr": "klebt", "sie_Sie": "kleben" }, "praeteritum": { "ich": "klebte", "du": "klebtest", "er_sie_es": "klebte", "wir": "klebten", "ihr": "klebtet", "sie_Sie": "klebten" }, "perfekt": "hat geklebt", "imperativ": "Klebe!/Klebt!/Kleben Sie!" },
    "contoh_kalimat": [{ "de": "Kleb die Briefmarke oben rechts auf den Brief.", "id": "Tempelkan prangko di kanan atas amplop." }]
  },
  {
    "id": "binden-485",
    "level": "B1",
    "infinitiv": "binden",
    "arti": "mengikat tali sepatu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "binde", "du": "bindest", "er_sie_es": "bindet", "wir": "binden", "ihr": "bindet", "sie_Sie": "binden" }, "praeteritum": { "ich": "band", "du": "bandest", "er_sie_es": "band", "wir": "banden", "ihr": "bandet", "sie_Sie": "banden" }, "perfekt": "hat gebunden", "imperativ": "Binde!/Bindet!/Binden Sie!" },
    "contoh_kalimat": [{ "de": "Er bindet sich die Schnürsenkel zu.", "id": "Dia mengikat tali sepatunya." }]
  },
  {
    "id": "loesen-486",
    "level": "B1",
    "infinitiv": "lösen",
    "arti": "memecahkan masalah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "löse", "du": "löst", "er_sie_es": "löst", "wir": "lösen", "ihr": "löst", "sie_Sie": "lösen" }, "praeteritum": { "ich": "löste", "du": "löstest", "er_sie_es": "löste", "wir": "lösten", "ihr": "löstet", "sie_Sie": "lösten" }, "perfekt": "hat gelöst", "imperativ": "Löse!/Löst!/Lösen Sie!" },
    "contoh_kalimat": [{ "de": "Gemeinsam können wir diese Aufgabe lösen.", "id": "Bersama-sama kita bisa memecahkan soal ini." }]
  },
  {
    "id": "entknoten-487",
    "level": "B2",
    "infinitiv": "entknoten",
    "arti": "mengurai simpul tali",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "entknote", "du": "entknotest", "er_sie_es": "entknotet", "wir": "entknoten", "ihr": "entknotet", "sie_Sie": "entknoten" }, "praeteritum": { "ich": "entknotete", "du": "entknotetest", "er_sie_es": "entknotete", "wir": "entknoteten", "ihr": "entknotetet", "sie_Sie": "entknoteten" }, "perfekt": "hat entknotet", "imperativ": "Entknote!/Entknotet!/Entknoten Sie!" },
    "contoh_kalimat": [{ "de": "Kannst du diese Schnur bitte entknoten?", "id": "Bisakah kamu mengurai simpul tali ini?" }]
  },
  {
    "id": "flechten-488",
    "level": "B2",
    "infinitiv": "flechten",
    "arti": "mengepang rambut",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "flechte", "du": "flichtst", "er_sie_es": "flicht", "wir": "flechten", "ihr": "flechtet", "sie_Sie": "flechten" }, "praeteritum": { "ich": "flocht", "du": "flochtst", "er_sie_es": "flocht", "wir": "flochten", "ihr": "flochtet", "sie_Sie": "flochten" }, "perfekt": "hat geflochten", "imperativ": "Flicht!/Flechtet!/Flechten Sie!" },
    "contoh_kalimat": [{ "de": "Sie flicht ihrer Tochter die Haare.", "id": "Dia mengepang rambut anak perempuannya." }]
  },
  {
    "id": "wickeln-489",
    "level": "B1",
    "infinitiv": "wickeln",
    "arti": "menggulung, mengganti popok",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "wickle", "du": "wickelst", "er_sie_es": "wickelt", "wir": "wickeln", "ihr": "wickelt", "sie_Sie": "wickeln" }, "praeteritum": { "ich": "wickelte", "du": "wickeltest", "er_sie_es": "wickelte", "wir": "wickelten", "ihr": "wickeltet", "sie_Sie": "wickelten" }, "perfekt": "hat gewickelt", "imperativ": "Wickle!/Wickelt!/Wickeln Sie!" },
    "contoh_kalimat": [{ "de": "Der Vater wickelt das Baby vorsichtig.", "id": "Ayah mengganti popok bayi dengan hati-hati." }]
  },
  {
    "id": "falten-490",
    "level": "A2",
    "infinitiv": "falten",
    "arti": "melipat kertas/baju",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "falte", "du": "faltest", "er_sie_es": "faltet", "wir": "falten", "ihr": "faltet", "sie_Sie": "falten" }, "praeteritum": { "ich": "faltete", "du": "faltetest", "er_sie_es": "faltete", "wir": "falteten", "ihr": "faltetet", "sie_Sie": "falteten" }, "perfekt": "hat gefaltet", "imperativ": "Falte!/Faltet!/Falten Sie!" },
    "contoh_kalimat": [{ "de": "Falten Sie das Papier in der Mitte zusammen.", "id": "Lipatlah kertas itu di bagian tengah." }]
  },
  {
    "id": "knicken-491",
    "level": "B2",
    "infinitiv": "knicken",
    "arti": "menekuk sudut halaman",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "knicke", "du": "knickst", "er_sie_es": "knickt", "wir": "knicken", "ihr": "knickt", "sie_Sie": "knicken" }, "praeteritum": { "ich": "knickte", "du": "knicktest", "er_sie_es": "knickte", "wir": "knickten", "ihr": "knicktet", "sie_Sie": "knickten" }, "perfekt": "hat geknickt", "imperativ": "Knicke!/Knickt!/Knicken Sie!" },
    "contoh_kalimat": [{ "de": "Knick die Buchseiten bitte nicht um!", "id": "Tolong jangan tekuk sudut halaman buku itu!" }]
  },
  {
    "id": "zerreissen-492",
    "level": "B1",
    "infinitiv": "zerreißen",
    "arti": "merobek hancur",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "zerreiße", "du": "zerreißt", "er_sie_es": "zerreißt", "wir": "zerreißen", "ihr": "zerreißt", "sie_Sie": "zerreißen" }, "praeteritum": { "ich": "zerriss", "du": "zerrissest", "er_sie_es": "zerriss", "wir": "zerrissen", "ihr": "zerrisst", "sie_Sie": "zerrissen" }, "perfekt": "hat zerrissen", "imperativ": "Zerreiße!/Zerreißt!/Zerreißen Sie!" },
    "contoh_kalimat": [{ "de": "Er zerriss den Brief voller Wut.", "id": "Dia merobek surat itu dengan penuh amarah." }]
  },
  {
    "id": "schneiden-493",
    "level": "A1",
    "infinitiv": "schneiden",
    "arti": "memotong",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "schneide", "du": "schneidest", "er_sie_es": "schneidet", "wir": "schneiden", "ihr": "schneidet", "sie_Sie": "schneiden" }, "praeteritum": { "ich": "schnitt", "du": "schnittest", "er_sie_es": "schnitt", "wir": "schnitten", "ihr": "schnittet", "sie_Sie": "schnitten" }, "perfekt": "hat geschnitten", "imperativ": "Schneide!/Schneidet!/Schneiden Sie!" },
    "contoh_kalimat": [{ "de": "Schneide die Tomaten in kleine Stücke.", "id": "Potonglah tomat-tomat itu menjadi potongan kecil." }]
  },
  {
    "id": "hacken-494",
    "level": "B1",
    "infinitiv": "hacken",
    "arti": "mencincang daging/sayur",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "hacke", "du": "hackst", "er_sie_es": "hackt", "wir": "hacken", "ihr": "hackt", "sie_Sie": "hacken" }, "praeteritum": { "ich": "hackte", "du": "hacktest", "er_sie_es": "hackte", "wir": "hackten", "ihr": "hacktet", "sie_Sie": "hackten" }, "perfekt": "hat gehackt", "imperativ": "Hacke!/Hackt!/Hacken Sie!" },
    "contoh_kalimat": [{ "de": "Hacken Sie die Zwiebeln fein.", "id": "Cincanglah bawang bombai sampai halus." }]
  },
  {
    "id": "reiben-495",
    "level": "B1",
    "infinitiv": "reiben",
    "arti": "memarut keju, menggosok",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "reibe", "du": "reibst", "er_sie_es": "reibt", "wir": "reiben", "ihr": "reibt", "sie_Sie": "reiben" }, "praeteritum": { "ich": "rieb", "du": "riebst", "er_sie_es": "rieb", "wir": "rieben", "ihr": "riebt", "sie_Sie": "rieben" }, "perfekt": "hat gerieben", "imperativ": "Reibe!/Reibt!/Reiben Sie!" },
    "contoh_kalimat": [{ "de": "Er reibt Parmesan über die Pasta.", "id": "Dia memarut keju parmesan di atas pasta." }]
  },
  {
    "id": "schaelen-496",
    "level": "A2",
    "infinitiv": "schälen",
    "arti": "mengupas kulit buah/sayur",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schäle", "du": "schälst", "er_sie_es": "schält", "wir": "schälen", "ihr": "schält", "sie_Sie": "schälen" }, "praeteritum": { "ich": "schälte", "du": "schältest", "er_sie_es": "schälte", "wir": "schälten", "ihr": "schältet", "sie_Sie": "schälten" }, "perfekt": "hat geschält", "imperativ": "Schäle!/Schält!/Schälen Sie!" },
    "contoh_kalimat": [{ "de": "Ich schäle zuerst die Kartoffeln.", "id": "Saya mengupas kentang terlebih dahulu." }]
  },
  {
    "id": "ruehren-497",
    "level": "A2",
    "infinitiv": "rühren",
    "arti": "mengaduk masakan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "rühre", "du": "rührst", "er_sie_es": "rührt", "wir": "rühren", "ihr": "rührt", "sie_Sie": "rühren" }, "praeteritum": { "ich": "rührte", "du": "rührtest", "er_sie_es": "rührte", "wir": "rührten", "ihr": "rührtet", "sie_Sie": "rührten" }, "perfekt": "hat gerührt", "imperativ": "Rühre!/Rührt!/Rühren Sie!" },
    "contoh_kalimat": [{ "de": "Rühr die Suppe um, damit sie nicht anbrennt!", "id": "Aduk supnya agar tidak gosong!" }]
  },
  {
    "id": "braten-498",
    "level": "A2",
    "infinitiv": "braten",
    "arti": "menggoreng/memanggang di wajan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "brate", "du": "brätst", "er_sie_es": "brät", "wir": "braten", "ihr": "bratet", "sie_Sie": "braten" }, "praeteritum": { "ich": "briet", "du": "brietest", "er_sie_es": "briet", "wir": "brieten", "ihr": "brietet", "sie_Sie": "brieten" }, "perfekt": "hat gebraten", "imperativ": "Brate!/Bratet!/Braten Sie!" },
    "contoh_kalimat": [{ "de": "Er brät das Fleisch in heißem Öl an.", "id": "Dia menggoreng dagingnya di dalam minyak panas." }]
  },
  {
    "id": "grillen-499",
    "level": "A1",
    "infinitiv": "grillen",
    "arti": "membakar barbeku",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "grille", "du": "grillst", "er_sie_es": "grillt", "wir": "grillen", "ihr": "grillt", "sie_Sie": "grillen" }, "praeteritum": { "ich": "grillte", "du": "grilltest", "er_sie_es": "grillte", "wir": "grillten", "ihr": "grilltet", "sie_Sie": "grillten" }, "perfekt": "hat gegrillt", "imperativ": "Grille!/Grillt!/Grillen Sie!" },
    "contoh_kalimat": [{ "de": "Im Sommer grillen wir jedes Wochenende im Garten.", "id": "Di musim panas kami membakar barbeku tiap akhir pekan di kebun." }]
  },
  {
    "id": "wuerzen-500",
    "level": "B1",
    "infinitiv": "würzen",
    "arti": "membumbui makanan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "würze", "du": "würzt", "er_sie_es": "würzt", "wir": "würzen", "ihr": "würzt", "sie_Sie": "würzen" }, "praeteritum": { "ich": "würzte", "du": "würztest", "er_sie_es": "würzte", "wir": "würzten", "ihr": "würztet", "sie_Sie": "würzten" }, "perfekt": "hat gewürzt", "imperativ": "Würze!/Würzt!/Würzen Sie!" },
    "contoh_kalimat": [{ "de": "Würzen Sie die Soße mit Salz und Pfeffer.", "id": "Bumbuilah sausnya dengan garam dan lada." }]
  },
  {
    "id": "salzen-501",
    "level": "A2",
    "infinitiv": "salzen",
    "arti": "menggarami",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "salze", "du": "salzt", "er_sie_es": "salzt", "wir": "salzen", "ihr": "salzt", "sie_Sie": "salzen" }, "praeteritum": { "ich": "salzte", "du": "salztest", "er_sie_es": "salzte", "wir": "salzten", "ihr": "salztet", "sie_Sie": "salzten" }, "perfekt": "hat gesalzen", "imperativ": "Salze!/Salzt!/Salzen Sie!" },
    "contoh_kalimat": [{ "de": "Das Nudelwasser muss man gut salzen.", "id": "Air rebusan pasta harus diberi garam secukupnya." }]
  },
  {
    "id": "zuckern-502",
    "level": "A2",
    "infinitiv": "zuckern",
    "arti": "membubuhi gula",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "zuckere", "du": "zuckerst", "er_sie_es": "zuckert", "wir": "zuckern", "ihr": "zuckert", "sie_Sie": "zuckern" }, "praeteritum": { "ich": "zuckerte", "du": "zuckertest", "er_sie_es": "zuckerte", "wir": "zuckerten", "ihr": "zuckertet", "sie_Sie": "zuckerten" }, "perfekt": "hat gezuckert", "imperativ": "Zuckere!/Zuckert!/Zuckern Sie!" },
    "contoh_kalimat": [{ "de": "Ich trinke Tee ohne ihn zu zuckern.", "id": "Saya minum teh tanpa memberinya gula." }]
  },
  {
    "id": "servieren-503",
    "level": "A2",
    "infinitiv": "servieren",
    "arti": "menyajikan hidangan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "serviere", "du": "servierst", "er_sie_es": "serviert", "wir": "servieren", "ihr": "serviert", "sie_Sie": "servieren" }, "praeteritum": { "ich": "servierte", "du": "serviertest", "er_sie_es": "servierte", "wir": "servierten", "ihr": "serviertet", "sie_Sie": "servierten" }, "perfekt": "hat serviert", "imperativ": "Serviere!/Serviert!/Servieren Sie!" },
    "contoh_kalimat": [{ "de": "Der Kellner serviert die Hauptspeise.", "id": "Pelayan menyajikan hidangan utama." }]
  },
  {
    "id": "abraeumen-504",
    "level": "A2",
    "infinitiv": "abräumen",
    "arti": "membereskan piring meja makan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "räume ab", "du": "räumst ab", "er_sie_es": "räumt ab", "wir": "räumen ab", "ihr": "räumt ab", "sie_Sie": "räumen ab" }, "praeteritum": { "ich": "räumte ab", "du": "räumtest ab", "er_sie_es": "räumte ab", "wir": "räumten ab", "ihr": "räumtet ab", "sie_Sie": "räumten ab" }, "perfekt": "hat abgeräumt", "imperativ": "Räum ab!/Räumt ab!/Räumen Sie ab!" },
    "contoh_kalimat": [{ "de": "Können wir den Tisch schon abräumen?", "id": "Bolehkah kita membereskan meja makan sekarang?" }]
  },
  {
    "id": "decken-505",
    "level": "A1",
    "infinitiv": "decken",
    "arti": "menata meja makan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "decke", "du": "deckst", "er_sie_es": "deckt", "wir": "decken", "ihr": "deckt", "sie_Sie": "decken" }, "praeteritum": { "ich": "deckte", "du": "decktest", "er_sie_es": "deckte", "wir": "deckten", "ihr": "decktet", "sie_Sie": "deckten" }, "perfekt": "hat gedeckt", "imperativ": "Decke!/Deckt!/Decken Sie!" },
    "contoh_kalimat": [{ "de": "Deck bitte den Tisch für vier Personen!", "id": "Tolong tata meja makan untuk empat orang!" }]
  },
  {
    "id": "einschenken-506",
    "level": "A2",
    "infinitiv": "einschenken",
    "arti": "menuangkan minuman ke gelas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schenke ein", "du": "schenkst ein", "er_sie_es": "schenkt ein", "wir": "schenken ein", "ihr": "schenkt ein", "sie_Sie": "schenken ein" }, "praeteritum": { "ich": "schenkte ein", "du": "schenktest ein", "er_sie_es": "schenkte ein", "wir": "schenkten ein", "ihr": "schenktet ein", "sie_Sie": "schenkten ein" }, "perfekt": "hat eingeschenkt", "imperativ": "Schenk ein!/Schenkt ein!/Schenken Sie ein!" },
    "contoh_kalimat": [{ "de": "Darf ich dir noch etwas Wasser einschenken?", "id": "Bolehkah saya menuangkan air lagi ke gelasmu?" }]
  },
  {
    "id": "ausleeren-507",
    "level": "A2",
    "infinitiv": "ausleeren",
    "arti": "mengosongkan isi wadah/tempat sampah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "leere aus", "du": "leerst aus", "er_sie_es": "leert aus", "wir": "leeren aus", "ihr": "leert aus", "sie_Sie": "leeren aus" }, "praeteritum": { "ich": "leerte aus", "du": "leertest aus", "er_sie_es": "leerte aus", "wir": "leerten aus", "ihr": "leertet aus", "sie_Sie": "leerten aus" }, "perfekt": "hat ausgeleert", "imperativ": "Leere aus!/Leert aus!/Leeren Sie aus!" },
    "contoh_kalimat": [{ "de": "Er hat den Papierkorb ausgeleert.", "id": "Dia telah mengosongkan keranjang sampah kertas." }]
  },
  {
    "id": "fuellen-508",
    "level": "A2",
    "infinitiv": "füllen",
    "arti": "mengisi penuh",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "fülle", "du": "füllst", "er_sie_es": "füllt", "wir": "füllen", "ihr": "füllt", "sie_Sie": "füllen" }, "praeteritum": { "ich": "füllte", "du": "fülltest", "er_sie_es": "füllte", "wir": "füllten", "ihr": "fülltet", "sie_Sie": "füllten" }, "perfekt": "hat gefüllt", "imperativ": "Fülle!/Füllt!/Füllen Sie!" },
    "contoh_kalimat": [{ "de": "Er füllte die Flasche mit frischem Leitungswasser.", "id": "Dia mengisi botol itu dengan air keran segar." }]
  },
  {
    "id": "ausfuellen-509",
    "level": "A1",
    "infinitiv": "ausfüllen",
    "arti": "mengisi formulir",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "fülle aus", "du": "füllst aus", "er_sie_es": "füllt aus", "wir": "füllen aus", "ihr": "füllt aus", "sie_Sie": "füllen aus" }, "praeteritum": { "ich": "füllte aus", "du": "fülltest aus", "er_sie_es": "füllte aus", "wir": "füllten aus", "ihr": "fülltet aus", "sie_Sie": "füllten aus" }, "perfekt": "hat ausgefüllt", "imperativ": "Füll aus!/Füllt aus!/Füllen Sie aus!" },
    "contoh_kalimat": [{ "de": "Füllen Sie bitte dieses Formular vollständig aus.", "id": "Isilah formulir ini secara lengkap." }]
  },
  {
    "id": "anmelden-510",
    "level": "A1",
    "infinitiv": "sich anmelden",
    "arti": "mendaftarkan diri, login",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "melde mich an", "du": "meldest dich an", "er_sie_es": "meldet sich an", "wir": "melden uns an", "ihr": "meldet euch an", "sie_Sie": "melden sich an" }, "praeteritum": { "ich": "meldete mich an", "du": "meldetest dich an", "er_sie_es": "meldete sich an", "wir": "meldeten uns an", "ihr": "meldetet euch an", "sie_Sie": "meldeten sich an" }, "perfekt": "hat sich angemeldet", "imperativ": "Melde dich an!/Meldet euch an!/Melden Sie sich an!" },
    "contoh_kalimat": [{ "de": "Ich habe mich für den Deutschkurs angemeldet.", "id": "Saya sudah mendaftarkan diri untuk kursus bahasa Jerman." }]
  },
  {
    "id": "abmelden-511",
    "level": "A2",
    "infinitiv": "sich abmelden",
    "arti": "logout, membatalkan registrasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "melde mich ab", "du": "meldest dich ab", "er_sie_es": "meldet sich ab", "wir": "melden uns ab", "ihr": "meldet euch ab", "sie_Sie": "melden sich ab" }, "praeteritum": { "ich": "meldete mich ab", "du": "meldetest dich ab", "er_sie_es": "meldete sich ab", "wir": "meldeten uns ab", "ihr": "meldetet euch ab", "sie_Sie": "meldeten sich ab" }, "perfekt": "hat sich abgemeldet", "imperativ": "Melde dich ab!/Meldet euch ab!/Melden Sie sich ab!" },
    "contoh_kalimat": [{ "de": "Vergiss nicht, dich am Computer abzumelden.", "id": "Jangan lupa keluar dari akun di komputermu." }]
  },
  {
    "id": "registrieren-512",
    "level": "A2",
    "infinitiv": "registrieren",
    "arti": "mencatat di catatan sipil/web",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "registriere", "du": "registrierst", "er_sie_es": "registriert", "wir": "registrieren", "ihr": "registriert", "sie_Sie": "registrieren" }, "praeteritum": { "ich": "registrierte", "du": "registriertest", "er_sie_es": "registrierte", "wir": "registrierten", "ihr": "registriertet", "sie_Sie": "registrierten" }, "perfekt": "hat registriert", "imperativ": "Registriere!/Registriert!/Registrieren Sie!" },
    "contoh_kalimat": [{ "de": "Sie müssen sich zuerst auf der Webseite registrieren.", "id": "Anda harus mendaftarkan akun di situs web terlebih dahulu." }]
  },
  {
    "id": "unterschreiben-513",
    "level": "A2",
    "infinitiv": "unterschreiben",
    "arti": "menandatangani berkas",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "unterschreibe", "du": "unterschreibst", "er_sie_es": "unterschreibt", "wir": "unterschreiben", "ihr": "unterschreibt", "sie_Sie": "unterschreiben" }, "praeteritum": { "ich": "unterschrieb", "du": "unterschriebst", "er_sie_es": "unterschrieb", "wir": "unterschrieben", "ihr": "unterschriebt", "sie_Sie": "unterschrieben" }, "perfekt": "hat unterschrieben", "imperativ": "Unterschreibe!/Unterschreibt!/Unterschreiben Sie!" },
    "contoh_kalimat": [{ "de": "Bitte unterschreiben Sie hier unten rechts.", "id": "Silakan tanda tangani di sebelah kanan bawah ini." }]
  },
  {
    "id": "unterzeichnen-514",
    "level": "B2",
    "infinitiv": "unterzeichnen",
    "arti": "menandatangani perjanjian resmi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "unterzeichne", "du": "unterzeichnest", "er_sie_es": "unterzeichnet", "wir": "unterzeichnen", "ihr": "unterzeichnet", "sie_Sie": "unterzeichnen" }, "praeteritum": { "ich": "unterzeichnete", "du": "unterzeichnetest", "er_sie_es": "unterzeichnete", "wir": "unterzeichneten", "ihr": "unterzeichnetet", "sie_Sie": "unterzeichneten" }, "perfekt": "hat unterzeichnet", "imperativ": "Unterzeichne!/Unterzeichnet!/Unterzeichnen Sie!" },
    "contoh_kalimat": [{ "de": "Die Staatschefs unterzeichneten den Vertrag.", "id": "Para kepala negara menandatangani perjanjian tersebut." }]
  },
  {
    "id": "genehmigen-515",
    "level": "B2",
    "infinitiv": "genehmigen",
    "arti": "menyetujui perizinan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "genehmige", "du": "genehmigst", "er_sie_es": "genehmigt", "wir": "genehmigen", "ihr": "genehmigt", "sie_Sie": "genehmigen" }, "praeteritum": { "ich": "genehmigte", "du": "genehmigtest", "er_sie_es": "genehmigte", "wir": "genehmigten", "ihr": "genehmigtet", "sie_Sie": "genehmigten" }, "perfekt": "hat genehmigt", "imperativ": "Genehmige!/Genehmigt!/Genehmigen Sie!" },
    "contoh_kalimat": [{ "de": "Der Chef hat meinen Urlaubsantrag sofort genehmigt.", "id": "Atasan langsung menyetujui permohonan cuti saya." }]
  },
  {
    "id": "beantragen-516",
    "level": "B1",
    "infinitiv": "beantragen",
    "arti": "mengajukan permohonan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beantrage", "du": "beantragst", "er_sie_es": "beantragt", "wir": "beantragen", "ihr": "beantragt", "sie_Sie": "beantragen" }, "praeteritum": { "ich": "beantragte", "du": "beantragtest", "er_sie_es": "beantragte", "wir": "beantragten", "ihr": "beantragtet", "sie_Sie": "beantragten" }, "perfekt": "hat beantragt", "imperativ": "Beantrage!/Beantragt!/Beantragen Sie!" },
    "contoh_kalimat": [{ "de": "Ich muss einen neuen Reisepass beantragen.", "id": "Saya harus mengajukan permohonan paspor baru." }]
  },
  {
    "id": "bewilligen-517",
    "level": "C1",
    "infinitiv": "bewilligen",
    "arti": "mengucurkan dana bantuan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bewillige", "du": "bewilligst", "er_sie_es": "bewilligt", "wir": "bewilligen", "ihr": "bewilligt", "sie_Sie": "bewilligen" }, "praeteritum": { "ich": "bewilligte", "du": "bewilligtest", "er_sie_es": "bewilligte", "wir": "bewilligten", "ihr": "bewilligtet", "sie_Sie": "bewilligten" }, "perfekt": "hat bewilligt", "imperativ": "Bewillige!/Bewilligt!/Bewilligen Sie!" },
    "contoh_kalimat": [{ "de": "Die Forschungsgelder wurden vollständig bewilligt.", "id": "Dana penelitian itu dikucurkan secara penuh." }]
  },
  {
    "id": "verweigern-518",
    "level": "B2",
    "infinitiv": "verweigern",
    "arti": "menolak memberi/mematuhi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verweigere", "du": "verweigerst", "er_sie_es": "verweigert", "wir": "verweigern", "ihr": "verweigert", "sie_Sie": "verweigern" }, "praeteritum": { "ich": "verweigerte", "du": "verweigertest", "er_sie_es": "verweigerte", "wir": "verweigerten", "ihr": "verweigertet", "sie_Sie": "verweigerten" }, "perfekt": "hat verweigert", "imperativ": "Verweigere!/Verweigert!/Verweigern Sie!" },
    "contoh_kalimat": [{ "de": "Er verweigerte jede Aussage bei der Polizei.", "id": "Dia menolak memberikan keterangan apa pun di kantor polisi." }]
  },
  {
    "id": "gehorchen-519",
    "level": "B2",
    "infinitiv": "gehorchen",
    "arti": "patuh, tunduk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "gehorche", "du": "gehorchst", "er_sie_es": "gehorcht", "wir": "gehorchen", "ihr": "gehorcht", "sie_Sie": "gehorchen" }, "praeteritum": { "ich": "gehorchte", "du": "gehorchtest", "er_sie_es": "gehorchte", "wir": "gehorchten", "ihr": "gehorchtet", "sie_Sie": "gehorchten" }, "perfekt": "hat gehorcht", "imperativ": "Gehorche!/Gehorcht!/Gehorchen Sie!" },
    "contoh_kalimat": [{ "de": "Der Hund gehorcht den Befehlen aufs Wort.", "id": "Anjing itu patuh pada perintah tanpa membantah." }]
  },
  {
    "id": "befehlen-520",
    "level": "B2",
    "infinitiv": "befehlen",
    "arti": "memerintah pasukan/bawahan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "befehle", "du": "befiehlst", "er_sie_es": "befiehlt", "wir": "befehlen", "ihr": "befehlt", "sie_Sie": "befehlen" }, "praeteritum": { "ich": "befahl", "du": "befahlst", "er_sie_es": "befahl", "wir": "befahlen", "ihr": "befahlt", "sie_Sie": "befahlen" }, "perfekt": "hat befohlen", "imperativ": "Befiehl!/Befehlt!/Befehlen Sie!" },
    "contoh_kalimat": [{ "de": "Der General befahl den sofortigen Rückzug.", "id": "Jenderal memerintahkan penarikan mundur segera." }]
  },
    {
    "id": "anordnen-521",
    "level": "B2",
    "infinitiv": "anordnen",
    "arti": "menginstruksikan von atas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "ordne an", "du": "ordnest an", "er_sie_es": "ordnet an", "wir": "ordnen an", "ihr": "ordnet an", "sie_Sie": "ordnen an" }, "praeteritum": { "ich": "ordnete an", "du": "ordnetest an", "er_sie_es": "ordnete an", "wir": "ordneten an", "ihr": "ordnetet an", "sie_Sie": "ordneten an" }, "perfekt": "hat angeordnet", "imperativ": "Ordne an!/Ordnet an!/Ordnen Sie an!" },
    "contoh_kalimat": [{ "de": "Das Gericht ordnete eine Untersuchung an.", "id": "Pengadilan menginstruksikan investigasi." }]
  },
  {
    "id": "verlangen-522",
    "level": "B1",
    "infinitiv": "verlangen",
    "arti": "menuntut hak/harga",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verlange", "du": "verlangst", "er_sie_es": "verlangt", "wir": "verlangen", "ihr": "verlangt", "sie_Sie": "verlangen" }, "praeteritum": { "ich": "verlangte", "du": "verlangtest", "er_sie_es": "verlangte", "wir": "verlangten", "ihr": "verlangtet", "sie_Sie": "verlangten" }, "perfekt": "hat verlangt", "imperativ": "Verlange!/Verlangt!/Verlangen Sie!" },
    "contoh_kalimat": [{ "de": "Die Verkäuferin verlangt zwanzig Euro dafür.", "id": "Penjual menuntut dua puluh euro untuk barang itu." }]
  },
  {
    "id": "fordern-523",
    "level": "B1",
    "infinitiv": "fordern",
    "arti": "menuntut kenaikan upah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "fordere", "du": "forderst", "er_sie_es": "fordert", "wir": "fordern", "ihr": "fordert", "sie_Sie": "fordern" }, "praeteritum": { "ich": "forderte", "du": "fordertest", "er_sie_es": "forderte", "wir": "forderten", "ihr": "fordertet", "sie_Sie": "forderten" }, "perfekt": "hat gefordert", "imperativ": "Fordere!/Fordert!/Fordern Sie!" },
    "contoh_kalimat": [{ "de": "Die Gewerkschaft fordert mehr Lohn.", "id": "Serikat pekerja menuntut kenaikan upah." }]
  },
  {
    "id": "erfordern-524",
    "level": "B2",
    "infinitiv": "erfordern",
    "arti": "mensyaratkan kemampuan/kesabaran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erfordere", "du": "erforderst", "er_sie_es": "erfordert", "wir": "erfordern", "ihr": "erfordert", "sie_Sie": "erfordern" }, "praeteritum": { "ich": "erforderte", "du": "erfordertest", "er_sie_es": "erforderte", "wir": "erforderten", "ihr": "erfordertet", "sie_Sie": "erforderten" }, "perfekt": "hat erfordert", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Dieses Projekt erfordert viel Geduld.", "id": "Proyek ini mensyaratkan banyak kesabaran." }]
  },
  {
    "id": "bitten-525",
    "level": "A2",
    "infinitiv": "bitten",
    "arti": "memohon pertolongan sopan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "bitte", "du": "bittest", "er_sie_es": "bittet", "wir": "bitten", "ihr": "bittet", "sie_Sie": "bitten" }, "praeteritum": { "ich": "bat", "du": "batest", "er_sie_es": "bat", "wir": "baten", "ihr": "batet", "sie_Sie": "baten" }, "perfekt": "hat gebeten", "imperativ": "Bitte!/Bittet!/Bitten Sie!" },
    "contoh_kalimat": [{ "de": "Darf ich Sie um einen Gefallen bitten?", "id": "Bolehkah saya memohon bantuan Anda?" }]
  },
  {
    "id": "betteln-526",
    "level": "B2",
    "infinitiv": "betteln",
    "arti": "mengemis meminta sedekah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "bettle", "du": "bettelst", "er_sie_es": "bettelt", "wir": "betteln", "ihr": "bettelt", "sie_Sie": "betteln" }, "praeteritum": { "ich": "bettelte", "du": "betteltest", "er_sie_es": "bettelte", "wir": "bettelten", "ihr": "betteltet", "sie_Sie": "bettelten" }, "perfekt": "hat gebettelt", "imperativ": "Bettle!/Bettelt!/Betteln Sie!" },
    "contoh_kalimat": [{ "de": "Der Hund bettelt am Tisch um Essen.", "id": "Anjing itu mengemis makanan di samping meja." }]
  },
  {
    "id": "flehen-527",
    "level": "C1",
    "infinitiv": "flehen",
    "arti": "memohon dengan sangat beriba-iba",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "flehe", "du": "flehst", "er_sie_es": "fleht", "wir": "flehen", "ihr": "fleht", "sie_Sie": "flehen" }, "praeteritum": { "ich": "flehte", "du": "flehtest", "er_sie_es": "flehte", "wir": "flehten", "ihr": "flehtet", "sie_Sie": "flehten" }, "perfekt": "hat gefleht", "imperativ": "Flehe!/Fleht!/Flehen Sie!" },
    "contoh_kalimat": [{ "de": "Sie flehte um Gnade.", "id": "Dia memohon ampun dengan beriba-iba." }]
  },
  {
    "id": "verzeihen-528",
    "level": "A2",
    "infinitiv": "verzeihen",
    "arti": "memaafkan kesalahan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "verzeihe", "du": "verzeihst", "er_sie_es": "verzeiht", "wir": "verzeihen", "ihr": "verzeiht", "sie_Sie": "verzeihen" }, "praeteritum": { "ich": "verzieh", "du": "verziehst", "er_sie_es": "verzieh", "wir": "verziehen", "ihr": "verzieht", "sie_Sie": "verziehen" }, "perfekt": "hat verziehen", "imperativ": "Verzeih!/Verzeiht!/Verzeihen Sie!" },
    "contoh_kalimat": [{ "de": "Verzeihen Sie bitte die Störung!", "id": "Maafkan atas gangguannya!" }]
  },
  {
    "id": "bereuen-529",
    "level": "B2",
    "infinitiv": "bereuen",
    "arti": "menyesali perbuatan silam",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bereue", "du": "bereust", "er_sie_es": "bereut", "wir": "bereuen", "ihr": "bereut", "sie_Sie": "bereuen" }, "praeteritum": { "ich": "bereute", "du": "bereutest", "er_sie_es": "bereute", "wir": "bereuten", "ihr": "bereutet", "sie_Sie": "bereuten" }, "perfekt": "hat bereut", "imperativ": "Bereue!/Bereut!/Bereuen Sie!" },
    "contoh_kalimat": [{ "de": "Ich habe diese Entscheidung nie bereut.", "id": "Saya tidak pernah menyesali keputusan itu." }]
  },
  {
    "id": "leidtun-530",
    "level": "A1",
    "infinitiv": "leidtun",
    "arti": "merasa kasihan / menyesal",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "tue leid", "du": "tust leid", "er_sie_es": "tut leid", "wir": "tun leid", "ihr": "tut leid", "sie_Sie": "tun leid" }, "praeteritum": { "ich": "tat leid", "du": "tatest leid", "er_sie_es": "tat leid", "wir": "taten leid", "ihr": "tatet leid", "sie_Sie": "taten leid" }, "perfekt": "hat leidgetan", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Es tut mir leid, dass ich zu spät bin.", "id": "Maafkan saya terlambat." }]
  },
  {
    "id": "schaden-531",
    "level": "B1",
    "infinitiv": "schaden",
    "arti": "merugikan kesehatan/nama baik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schade", "du": "schadest", "er_sie_es": "schadet", "wir": "schaden", "ihr": "schadet", "sie_Sie": "schaden" }, "praeteritum": { "ich": "schadete", "du": "schadetest", "er_sie_es": "schadete", "wir": "schadeten", "ihr": "schadetet", "sie_Sie": "schadeten" }, "perfekt": "hat geschadet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Zu viel Zucker schadet den Zähnen.", "id": "Terlalu banyak gula merusak gigi." }]
  },
  {
    "id": "nuetzen-532",
    "level": "B1",
    "infinitiv": "nützen",
    "arti": "memberi manfaat berguna",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "nütze", "du": "nützt", "er_sie_es": "nützt", "wir": "nützen", "ihr": "nützt", "sie_Sie": "nützen" }, "praeteritum": { "ich": "nützte", "du": "nütztest", "er_sie_es": "nützte", "wir": "nützten", "ihr": "nütztet", "sie_Sie": "nützten" }, "perfekt": "hat genützt", "imperativ": "Nütze!/Nützt!/Nützen Sie!" },
    "contoh_kalimat": [{ "de": "All das Geld nützt nichts ohne Gesundheit.", "id": "Semua uang tak ada gunanya tanpa kesehatan." }]
  },
  {
    "id": "dienen-533",
    "level": "B2",
    "infinitiv": "dienen",
    "arti": "mengabdi, berfungsi sebagai",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "als", "kasus": "Nominativ" }],
    "konjugasi": { "praesens": { "ich": "diene", "du": "dienst", "er_sie_es": "dient", "wir": "dienen", "ihr": "dient", "sie_Sie": "dienen" }, "praeteritum": { "ich": "diente", "du": "dientest", "er_sie_es": "diente", "wir": "dienten", "ihr": "dientet", "sie_Sie": "dienten" }, "perfekt": "hat gedient", "imperativ": "Diene!/Dient!/Dienen Sie!" },
    "contoh_kalimat": [{ "de": "Dieser Raum dient als Besprechungszimmer.", "id": "Ruangan ini berfungsi sebagai ruang rapat." }]
  },
  {
    "id": "bedienen-534",
    "level": "A2",
    "infinitiv": "bedienen",
    "arti": "mengoperasikan mesin, melayani tamu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bediene", "du": "bedienst", "er_sie_es": "bedient", "wir": "bedienen", "ihr": "bedient", "sie_Sie": "bedienen" }, "praeteritum": { "ich": "bediente", "du": "bedientest", "er_sie_es": "bediente", "wir": "bedienten", "ihr": "bedientet", "sie_Sie": "bedienten" }, "perfekt": "hat bedient", "imperativ": "Bediene!/Bedient!/Bedienen Sie!" },
    "contoh_kalimat": [{ "de": "Werden Sie schon bedient?", "id": "Apakah Anda sudah dilayani?" }]
  },
  {
    "id": "verwoehnen-535",
    "level": "B2",
    "infinitiv": "verwöhnen",
    "arti": "memanjakan anak/tamu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verwöhne", "du": "verwöhnst", "er_sie_es": "verwöhnt", "wir": "verwöhnen", "ihr": "verwöhnt", "sie_Sie": "verwöhnen" }, "praeteritum": { "ich": "verwöhnte", "du": "verwöhntest", "er_sie_es": "verwöhnte", "wir": "verwöhnten", "ihr": "verwöhntet", "sie_Sie": "verwöhnten" }, "perfekt": "hat verwöhnt", "imperativ": "Verwöhne!/Verwöhnt!/Verwöhnen Sie!" },
    "contoh_kalimat": [{ "de": "Oma verwöhnt ihre Enkelkinder nach Strich und Faden.", "id": "Nenek sangat memanjakan cucu-cucunya." }]
  },
  {
    "id": "vernachlaessigen-536",
    "level": "C1",
    "infinitiv": "vernachlässigen",
    "arti": "menelantarkan tugas/anak",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "vernachlässige", "du": "vernachlässigst", "er_sie_es": "vernachlässigt", "wir": "vernachlässigen", "ihr": "vernachlässigt", "sie_Sie": "vernachlässigen" }, "praeteritum": { "ich": "vernachlässigte", "du": "vernachlässigtest", "er_sie_es": "vernachlässigte", "wir": "vernachlässigten", "ihr": "vernachlässigtet", "sie_Sie": "vernachlässigten" }, "perfekt": "hat vernachlässigt", "imperativ": "Vernachlässige!/Vernachlässigt!/Vernachlässigen Sie!" },
    "contoh_kalimat": [{ "de": "Wegen der Arbeit vernachlässigt er seine Hobbys.", "id": "Karena pekerjaan dia menelantarkan hobinya." }]
  },
  {
    "id": "achten-537",
    "level": "A1",
    "infinitiv": "achten",
    "arti": "memperhatikan hal penting",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "achte", "du": "achtest", "er_sie_es": "achtet", "wir": "achten", "ihr": "achtet", "sie_Sie": "achten" }, "praeteritum": { "ich": "achtete", "du": "achtetest", "er_sie_es": "achtete", "wir": "achteten", "ihr": "achtetet", "sie_Sie": "achteten" }, "perfekt": "hat geachtet", "imperativ": "Achte!/Achtet!/Achten Sie!" },
    "contoh_kalimat": [{ "de": "Achten Sie auf Ihre Gesundheit!", "id": "Perhatikanlah kesehatan Anda!" }]
  },
  {
    "id": "respektieren-538",
    "level": "A2",
    "infinitiv": "respektieren",
    "arti": "menghormati orang lain",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "respektiere", "du": "respektierst", "er_sie_es": "respektiert", "wir": "respektieren", "ihr": "respektiert", "sie_Sie": "respektieren" }, "praeteritum": { "ich": "respektierte", "du": "respektiertest", "er_sie_es": "respektierte", "wir": "respektierten", "ihr": "respektiertet", "sie_Sie": "respektierten" }, "perfekt": "hat respektiert", "imperativ": "Respektiere!/Respektiert!/Respektieren Sie!" },
    "contoh_kalimat": [{ "de": "Wir müssen die Gesetze respektieren.", "id": "Kita harus menghormati hukum." }]
  },
  {
    "id": "verachten-539",
    "level": "C1",
    "infinitiv": "verachten",
    "arti": "memandang hina, meremehkan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verachte", "du": "verachtest", "er_sie_es": "verachtet", "wir": "verachten", "ihr": "verachtet", "sie_Sie": "verachten" }, "praeteritum": { "ich": "verachtete", "du": "verachtetest", "er_sie_es": "verachtete", "wir": "verachteten", "ihr": "verachtetet", "sie_Sie": "verachteten" }, "perfekt": "hat verachtet", "imperativ": "Verachte!/Verachtet!/Verachten Sie!" },
    "contoh_kalimat": [{ "de": "Er verachtet Lügner und Heuchler.", "id": "Dia memandang hina pembohong dan orang munafik." }]
  },
  {
    "id": "bewundern-540",
    "level": "B1",
    "infinitiv": "bewundern",
    "arti": "mengagumi keindahan/keberanian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bewundere", "du": "bewunderst", "er_sie_es": "bewundert", "wir": "bewundern", "ihr": "bewundert", "sie_Sie": "bewundern" }, "praeteritum": { "ich": "bewunderte", "du": "bewundertest", "er_sie_es": "bewunderte", "wir": "bewunderten", "ihr": "bewundertet", "sie_Sie": "bewunderten" }, "perfekt": "hat bewundert", "imperativ": "Bewundere!/Bewundert!/Bewundern Sie!" },
    "contoh_kalimat": [{ "de": "Ich bewundere deinen Mut.", "id": "Saya mengagumi keberanianmu." }]
  },
  {
    "id": "beneiden-541",
    "level": "B2",
    "infinitiv": "beneiden",
    "arti": "iri hati, mengagumi keberuntungan orang lain",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "beneide", "du": "beneidest", "er_sie_es": "beneidet", "wir": "beneiden", "ihr": "beneidet", "sie_Sie": "beneiden" }, "praeteritum": { "ich": "beneidete", "du": "beneidetest", "er_sie_es": "beneidete", "wir": "beneideten", "ihr": "beneidetet", "sie_Sie": "beneideten" }, "perfekt": "hat beneidet", "imperativ": "Beneide!/Beneidet!/Beneiden Sie!" },
    "contoh_kalimat": [{ "de": "Ich beneide dich um deinen schönen Urlaub.", "id": "Saya iri atas liburan indahmu." }]
  },
  {
    "id": "hassen-542",
    "level": "B1",
    "infinitiv": "verabscheuen",
    "arti": "sangat muak, membenci mendalam",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verabscheue", "du": "verabscheust", "er_sie_es": "verabscheut", "wir": "verabscheuen", "ihr": "verabscheut", "sie_Sie": "verabscheuen" }, "praeteritum": { "ich": "verabscheute", "du": "verabscheutest", "er_sie_es": "verabscheute", "wir": "verabscheuten", "ihr": "verabscheutet", "sie_Sie": "verabscheuten" }, "perfekt": "hat verabscheut", "imperativ": "Verabscheue!/Verabscheut!/Verabscheuen Sie!" },
    "contoh_kalimat": [{ "de": "Ich verabscheue jegliche Form von Gewalt.", "id": "Saya sangat muak terhadap segala bentuk kekerasan." }]
  },
  {
    "id": "schwaetzen-543",
    "level": "A2",
    "infinitiv": "quatschen",
    "arti": "mengobrol santai, omong kosong",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "quatsche", "du": "quatschst", "er_sie_es": "quatscht", "wir": "quatschen", "ihr": "quatscht", "sie_Sie": "quatschen" }, "praeteritum": { "ich": "quatschte", "du": "quatschtest", "er_sie_es": "quatschte", "wir": "quatschten", "ihr": "quatschtet", "sie_Sie": "quatschten" }, "perfekt": "hat gequatscht", "imperativ": "Quatsch!/Quatscht!/Quatschen Sie!" },
    "contoh_kalimat": [{ "de": "Wir haben stundenlang bei Kaffee gequatscht.", "id": "Kami mengobrol berjam-jam sambil minum kopi." }]
  },
  {
    "id": "plaudern-544",
    "level": "B1",
    "infinitiv": "plaudern",
    "arti": "bercakap-cakap ramah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "plaudere", "du": "plauderst", "er_sie_es": "plaudert", "wir": "plaudern", "ihr": "plaudert", "sie_Sie": "plaudern" }, "praeteritum": { "ich": "plauderte", "du": "plaudertest", "er_sie_es": "plauderte", "wir": "plauderten", "ihr": "plaudertet", "sie_Sie": "plauderten" }, "perfekt": "hat geplaudert", "imperativ": "Plaudere!/Plaudert!/Plaudern Sie!" },
    "contoh_kalimat": [{ "de": "Sie plauderten gemütlich am Gartenzaun.", "id": "Mereka bercakap-cakap santai di pagar kebun." }]
  },
  {
    "id": "diskutieren-545",
    "level": "B1",
    "infinitiv": "diskutieren",
    "arti": "berdiskusi, berdebat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "diskutiere", "du": "diskutierst", "er_sie_es": "diskutiert", "wir": "diskutieren", "ihr": "diskutiert", "sie_Sie": "diskutieren" }, "praeteritum": { "ich": "diskutierte", "du": "diskutiertest", "er_sie_es": "diskutierte", "wir": "diskutierten", "ihr": "diskutiertet", "sie_Sie": "diskutierten" }, "perfekt": "hat diskutiert", "imperativ": "Diskutiere!/Diskutiert!/Diskutieren Sie!" },
    "contoh_kalimat": [{ "de": "Wir diskutieren über das neue Gesetz.", "id": "Kami berdiskusi tentang undang-undang baru tersebut." }]
  },
  {
    "id": "debattieren-546",
    "level": "B2",
    "infinitiv": "debattieren",
    "arti": "berdebat formal di parlemen",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "debattiere", "du": "debattierst", "er_sie_es": "debattiert", "wir": "debattieren", "ihr": "debattiert", "sie_Sie": "debattieren" }, "praeteritum": { "ich": "debattierte", "du": "debattiertest", "er_sie_es": "debattierte", "wir": "debattierten", "ihr": "debattiertet", "sie_Sie": "debattierten" }, "perfekt": "hat debattiert", "imperativ": "Debattiere!/Debattiert!/Debattieren Sie!" },
    "contoh_kalimat": [{ "de": "Das Parlament debattiert stundenlang über den Haushalt.", "id": "Parlemen berdebat berjam-jam soal anggaran." }]
  },
  {
    "id": "behaupten-547",
    "level": "B1",
    "infinitiv": "behaupten",
    "arti": "mengklaim, bersikukuh",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "behaupte", "du": "behauptest", "er_sie_es": "behauptet", "wir": "behaupten", "ihr": "behauptet", "sie_Sie": "behaupten" }, "praeteritum": { "ich": "behauptete", "du": "behauptetest", "er_sie_es": "behauptete", "wir": "behaupteten", "ihr": "behauptetet", "sie_Sie": "behaupteten" }, "perfekt": "hat behauptet", "imperativ": "Behaupte!/Behauptet!/Behaupten Sie!" },
    "contoh_kalimat": [{ "de": "Er behauptet, die Wahrheit zu sagen.", "id": "Dia mengklaim mengatakan kebenaran." }]
  },
  {
    "id": "feststellen-548",
    "level": "B1",
    "infinitiv": "feststellen",
    "arti": "menemukan kesimpulan, mencatat fakta",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "stelle fest", "du": "stellst fest", "er_sie_es": "stellt fest", "wir": "stellen fest", "ihr": "stellt fest", "sie_Sie": "stellen fest" }, "praeteritum": { "ich": "stellte fest", "du": "stelltest fest", "er_sie_es": "stellte fest", "wir": "stellten fest", "ihr": "stelltet fest", "sie_Sie": "stellten fest" }, "perfekt": "hat festgestellt", "imperativ": "Stell fest!/Stellt fest!/Stellen Sie fest!" },
    "contoh_kalimat": [{ "de": "Der Arzt stellte keine Erkrankung fest.", "id": "Dokter tidak menemukan adanya penyakit." }]
  },
  {
    "id": "erwaehnen-549",
    "level": "B1",
    "infinitiv": "erwähnen",
    "arti": "menyebutkan selintas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erwähne", "du": "erwähnst", "er_sie_es": "erwähnt", "wir": "erwähnen", "ihr": "erwähnt", "sie_Sie": "erwähnen" }, "praeteritum": { "ich": "erwähnte", "du": "erwähntest", "er_sie_es": "erwähnte", "wir": "erwähnten", "ihr": "erwähntet", "sie_Sie": "erwähnten" }, "perfekt": "hat erwähnt", "imperativ": "Erwähne!/Erwähnt!/Erwähnen Sie!" },
    "contoh_kalimat": [{ "de": "Er hat ihren Namen nur kurz erwähnt.", "id": "Dia hanya menyebut namanya secara sepintas." }]
  },
  {
    "id": "betonen-550",
    "level": "B2",
    "infinitiv": "betonen",
    "arti": "menekankan poin penting",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "betone", "du": "betonst", "er_sie_es": "betont", "wir": "betonen", "ihr": "betont", "sie_Sie": "betonen" }, "praeteritum": { "ich": "betonte", "du": "betontest", "er_sie_es": "betonte", "wir": "betonten", "ihr": "betontet", "sie_Sie": "betonten" }, "perfekt": "hat betont", "imperativ": "Betone!/Betont!/Betonen Sie!" },
    "contoh_kalimat": [{ "de": "Ich möchte nochmals betonen, wie wichtig das ist.", "id": "Saya ingin menekankan sekali lagi betapa pentingnya hal ini." }]
  },
  {
    "id": "hervorheben-551",
    "level": "B2",
    "infinitiv": "hervorheben",
    "arti": "menggarisbawahi keunggulan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "hebe hervor", "du": "hebst hervor", "er_sie_es": "hebt hervor", "wir": "heben hervor", "ihr": "hebt hervor", "sie_Sie": "heben hervor" }, "praeteritum": { "ich": "hob hervor", "du": "hobst hervor", "er_sie_es": "hob hervor", "wir": "hoben hervor", "ihr": "hobt hervor", "sie_Sie": "hoben hervor" }, "perfekt": "hat hervorgehoben", "imperativ": "Heb hervor!/Hebt hervor!/Heben Sie hervor!" },
    "contoh_kalimat": [{ "de": "Der Chef hob ihre besondere Leistung hervor.", "id": "Atasan menggarisbawahi kinerja istimewanya." }]
  },
  {
    "id": "verdeutlichen-552",
    "level": "C1",
    "infinitiv": "verdeutlichen",
    "arti": "memperjelas makna",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verdeutliche", "du": "verdeutlichst", "er_sie_es": "verdeutlicht", "wir": "verdeutlichen", "ihr": "verdeutlicht", "sie_Sie": "verdeutlichen" }, "praeteritum": { "ich": "verdeutlichte", "du": "verdeutlichtest", "er_sie_es": "verdeutlichte", "wir": "verdeutlichten", "ihr": "verdeutlichtet", "sie_Sie": "verdeutlichten" }, "perfekt": "hat verdeutlicht", "imperativ": "Verdeutliche!/Verdeutlicht!/Verdeutlichen Sie!" },
    "contoh_kalimat": [{ "de": "Diese Grafik verdeutlicht das Problem.", "id": "Grafik ini memperjelas permasalahannya." }]
  },
  {
    "id": "aufklaeren-553",
    "level": "B2",
    "infinitiv": "aufklären",
    "arti": "mengusut tuntas kasus, mengedukasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "kläre auf", "du": "klärst auf", "er_sie_es": "klärt auf", "wir": "klären auf", "ihr": "klärt auf", "sie_Sie": "klären auf" }, "praeteritum": { "ich": "klärte auf", "du": "klärtest auf", "er_sie_es": "klärte auf", "wir": "klärten auf", "ihr": "klärtet auf", "sie_Sie": "klärten auf" }, "perfekt": "hat aufgeklärt", "imperativ": "Kläre auf!/Klärt auf!/Klären Sie auf!" },
    "contoh_kalimat": [{ "de": "Die Polizei konnte das Verbrechen aufklären.", "id": "Polisi berhasil mengusut tuntas kejahatan tersebut." }]
  },
  {
    "id": "berichten-554",
    "level": "A2",
    "infinitiv": "berichten",
    "arti": "melaporkan kabar berita",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "berichte", "du": "berichtest", "er_sie_es": "berichtet", "wir": "berichten", "ihr": "berichtet", "sie_Sie": "berichten" }, "praeteritum": { "ich": "berichtete", "du": "berichtetest", "er_sie_es": "berichtete", "wir": "berichteten", "ihr": "berichtetet", "sie_Sie": "berichteten" }, "perfekt": "hat berichtet", "imperativ": "Berichte!/Berichtet!/Berichten Sie!" },
    "contoh_kalimat": [{ "de": "Die Zeitung berichtet über den Vorfall.", "id": "Koran itu memberitakan tentang insiden tersebut." }]
  },
  {
    "id": "mitteilen-555",
    "level": "B1",
    "infinitiv": "mitteilen",
    "arti": "memberitahukan secara tertulis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "teile mit", "du": "teilst mit", "er_sie_es": "teilt mit", "wir": "teilen mit", "ihr": "teilt mit", "sie_Sie": "teilen mit" }, "praeteritum": { "ich": "teilte mit", "du": "teiltest mit", "er_sie_es": "teilte mit", "wir": "teilten mit", "ihr": "teiltet mit", "sie_Sie": "teilten mit" }, "perfekt": "hat mitgeteilt", "imperativ": "Teile mit!/Teilt mit!/Teilen Sie mit!" },
    "contoh_kalimat": [{ "de": "Bitte teilen Sie uns Ihre neue Adresse mit.", "id": "Mohon beritahukan alamat baru Anda kepada kami." }]
  },
  {
    "id": "informieren-556",
    "level": "A2",
    "infinitiv": "informieren",
    "arti": "mengabari, mencari info (sich informieren)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "informiere", "du": "informierst", "er_sie_es": "informiert", "wir": "informieren", "ihr": "informiert", "sie_Sie": "informieren" }, "praeteritum": { "ich": "informierte", "du": "informiertest", "er_sie_es": "informierte", "wir": "informierten", "ihr": "informiertet", "sie_Sie": "informierten" }, "perfekt": "hat informiert", "imperativ": "Informiere!/Informiert!/Informieren Sie!" },
    "contoh_kalimat": [{ "de": "Ich informiere dich, sobald ich mehr weiß.", "id": "Saya akan mengabarimu segera setelah tahu lebih banyak." }]
  },
  {
    "id": "benachrichtigen-557",
    "level": "B2",
    "infinitiv": "benachrichtigen",
    "arti": "mengirimkan notifikasi/pemberitahuan resmi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "benachrichtige", "du": "benachrichtigst", "er_sie_es": "benachrichtigt", "wir": "benachrichtigen", "ihr": "benachrichtigt", "sie_Sie": "benachrichtigen" }, "praeteritum": { "ich": "benachrichtigte", "du": "benachrichtigtest", "er_sie_es": "benachrichtigte", "wir": "benachrichtigten", "ihr": "benachrichtigtet", "sie_Sie": "benachrichtigten" }, "perfekt": "hat benachrichtigt", "imperativ": "Benachrichtige!/Benachrichtigt!/Benachrichtigen Sie!" },
    "contoh_kalimat": [{ "de": "Im Notfall benachrichtigen wir die Familie.", "id": "Dalam keadaan darurat kami memberitahu pihak keluarga." }]
  },
  {
    "id": "ankuendigen-558",
    "level": "B1",
    "infinitiv": "ankündigen",
    "arti": "mengumumkan rencana ke publik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "kündige an", "du": "kündigst an", "er_sie_es": "kündigt an", "wir": "kündigen an", "ihr": "kündigt an", "sie_Sie": "kündigen an" }, "praeteritum": { "ich": "kündigte an", "du": "kündigtest an", "er_sie_es": "kündigte an", "wir": "kündigten an", "ihr": "kündigtet an", "sie_Sie": "kündigten an" }, "perfekt": "hat angekündigt", "imperativ": "Kündige an!/Kündigt an!/Kündigen Sie an!" },
    "contoh_kalimat": [{ "de": "Die Bahn hat Streiks angekündigt.", "id": "Pihak kereta api mengumumkan adanya aksi mogok kerja." }]
  },
  {
    "id": "veroeffentlichen-559",
    "level": "B2",
    "infinitiv": "veröffentlichen",
    "arti": "menerbitkan buku/artikel riset",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "veröffentliche", "du": "veröffentlichst", "er_sie_es": "veröffentlicht", "wir": "veröffentlichen", "ihr": "veröffentlicht", "sie_Sie": "veröffentlichen" }, "praeteritum": { "ich": "veröffentlichte", "du": "veröffentlichtest", "er_sie_es": "veröffentlichte", "wir": "veröffentlichten", "ihr": "veröffentlichtet", "sie_Sie": "veröffentlichten" }, "perfekt": "hat veröffentlicht", "imperativ": "Veröffentliche!/Veröffentlicht!/Veröffentlichen Sie!" },
    "contoh_kalimat": [{ "de": "Der Wissenschaftler veröffentlichte eine neue Studie.", "id": "Ilmuwan tersebut menerbitkan riset baru." }]
  },
  {
    "id": "drucken-560",
    "level": "B2",
    "infinitiv": "verlegen",
    "arti": "salah meletakkan barang, menerbitkan karya",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verlege", "du": "verlegst", "er_sie_es": "verlegt", "wir": "verlegen", "ihr": "verlegt", "sie_Sie": "verlegen" }, "praeteritum": { "ich": "verlegte", "du": "verlegtest", "er_sie_es": "verlegte", "wir": "verlegten", "ihr": "verlegtet", "sie_Sie": "verlegten" }, "perfekt": "hat verlegt", "imperativ": "Verlege!/Verlegt!/Verlegen Sie!" },
    "contoh_kalimat": [{ "de": "Ich habe meinen Schlüssel schon wieder verlegt.", "id": "Saya salah meletakkan kunci lagi." }]
  },
  {
    "id": "herausgeben-561",
    "level": "B2",
    "infinitiv": "herausgeben",
    "arti": "mengembalikan uang susuk, merilis terbitan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gebe heraus", "du": "gibst heraus", "er_sie_es": "gibt heraus", "wir": "geben heraus", "ihr": "gebt heraus", "sie_Sie": "geben heraus" }, "praeteritum": { "ich": "gab heraus", "du": "gabst heraus", "er_sie_es": "gab heraus", "wir": "gaben heraus", "ihr": "gabt heraus", "sie_Sie": "gaben heraus" }, "perfekt": "hat herausgegeben", "imperativ": "Gib heraus!/Gebt heraus!/Geben Sie heraus!" },
    "contoh_kalimat": [{ "de": "Können Sie auf fünfzig Euro herausgeben?", "id": "Bisakah Anda memberi kembalian untuk uang lima puluh euro?" }]
  },
  {
    "id": "empfehlen-562",
    "level": "A2",
    "infinitiv": "empfehlen",
    "arti": "merekomendasikan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "empfehle", "du": "empfiehlst", "er_sie_es": "empfiehlt", "wir": "empfehlen", "ihr": "empfehlt", "sie_Sie": "empfehlen" }, "praeteritum": { "ich": "empfahl", "du": "empfahlst", "er_sie_es": "empfahl", "wir": "empfahlen", "ihr": "empfahlt", "sie_Sie": "empfahlen" }, "perfekt": "hat empfohlen", "imperativ": "Empfiehl!/Empfehlt!/Empfehlen Sie!" },
    "contoh_kalimat": [{ "de": "Welches Gericht können Sie empfehlen?", "id": "Menu masakan apa yang bisa Anda rekomendasikan?" }]
  },
  {
    "id": "abraten-563",
    "level": "B2",
    "infinitiv": "abraten",
    "arti": "menyarankan untuk tidak melakukan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "rate ab", "du": "rätst ab", "er_sie_es": "rät ab", "wir": "raten ab", "ihr": "ratet ab", "sie_Sie": "raten ab" }, "praeteritum": { "ich": "riet ab", "du": "rietest ab", "er_sie_es": "riet ab", "wir": "rieten ab", "ihr": "rietet ab", "sie_Sie": "rieten ab" }, "perfekt": "hat abgeraten", "imperativ": "Rate ab!/Ratet ab!/Raten Sie ab!" },
    "contoh_kalimat": [{ "de": "Ich rate dir dringend von diesem Kauf ab.", "id": "Saya sangat menyarankanmu untuk tidak membeli barang ini." }]
  },
  {
    "id": "raten-564",
    "level": "B1",
    "infinitiv": "beraten",
    "arti": "memberi konsultasi ahli",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "berate", "du": "berätst", "er_sie_es": "berät", "wir": "beraten", "ihr": "beratet", "sie_Sie": "beraten" }, "praeteritum": { "ich": "beriet", "du": "berietest", "er_sie_es": "beriet", "wir": "berieten", "ihr": "berietet", "sie_Sie": "berieten" }, "perfekt": "hat beraten", "imperativ": "Berate!/Beratet!/Beraten Sie!" },
    "contoh_kalimat": [{ "de": "Der Anwalt berät den Klienten ausführlich.", "id": "Pengacara memberikan konsultasi mendalam kepada klien." }]
  },
  {
    "id": "vorschlagen-565",
    "level": "A2",
    "infinitiv": "vorschlagen",
    "arti": "mengusulkan ide",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schlage vor", "du": "schlägst vor", "er_sie_es": "schlägt vor", "wir": "schlagen vor", "ihr": "schlagt vor", "sie_Sie": "schlagen vor" }, "praeteritum": { "ich": "schlug vor", "du": "schlugst vor", "er_sie_es": "schlug vor", "wir": "schlugen vor", "ihr": "schlugt vor", "sie_Sie": "schlugen vor" }, "perfekt": "hat vorgeschlagen", "imperativ": "Schlag vor!/Schlagt vor!/Schlagen Sie vor!" },
    "contoh_kalimat": [{ "de": "Ich schlage vor, dass wir eine Pause machen.", "id": "Saya mengusulkan agar kita beristirahat sejenak." }]
  },
  {
    "id": "anregen-566",
    "level": "B2",
    "infinitiv": "anregen",
    "arti": "merangsang pikiran/nafsu makan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "rege an", "du": "regst an", "er_sie_es": "regt an", "wir": "regen an", "ihr": "regt an", "sie_Sie": "regen an" }, "praeteritum": { "ich": "regte an", "du": "regtest an", "er_sie_es": "regte an", "wir": "regten an", "ihr": "regtet an", "sie_Sie": "regten an" }, "perfekt": "hat angeregt", "imperativ": "Rege an!/Regt an!/Regen Sie an!" },
    "contoh_kalimat": [{ "de": "Kaffee regt den Kreislauf an.", "id": "Kopi merangsang sirkulasi tubuh." }]
  },
  {
    "id": "inspirieren-567",
    "level": "B2",
    "infinitiv": "inspirieren",
    "arti": "menginspirasi karya",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "inspiriere", "du": "inspirierst", "er_sie_es": "inspiriert", "wir": "inspirieren", "ihr": "inspiriert", "sie_Sie": "inspirieren" }, "praeteritum": { "ich": "inspirierte", "du": "inspiriertest", "er_sie_es": "inspirierte", "wir": "inspirierten", "ihr": "inspiriertet", "sie_Sie": "inspirierten" }, "perfekt": "hat inspiriert", "imperativ": "Inspiriere!/Inspiriert!/Inspirieren Sie!" },
    "contoh_kalimat": [{ "de": "Die Natur inspiriert viele Maler.", "id": "Alam menginspirasi banyak pelukis." }]
  },
  {
    "id": "motivieren-568",
    "level": "B1",
    "infinitiv": "motivieren",
    "arti": "memberi semangat motivasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "motiviere", "du": "motivierst", "er_sie_es": "motiviert", "wir": "motivieren", "ihr": "motiviert", "sie_Sie": "motivieren" }, "praeteritum": { "ich": "motivierte", "du": "motiviertest", "er_sie_es": "motivierte", "wir": "motivierten", "ihr": "motiviertet", "sie_Sie": "motivierten" }, "perfekt": "hat motiviert", "imperativ": "Motiviere!/Motiviert!/Motivieren Sie!" },
    "contoh_kalimat": [{ "de": "Gute Noten motivieren die Schüler zum Weitermachen.", "id": "Nilai bagus memotivasi siswa untuk terus maju." }]
  },
  {
    "id": "entmutigen-569",
    "level": "B2",
    "infinitiv": "entmutigen",
    "arti": "membuat putus asa/patah semangat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "entmutige", "du": "entmutigst", "er_sie_es": "entmutigt", "wir": "entmutigen", "ihr": "entmutigt", "sie_Sie": "entmutigen" }, "praeteritum": { "ich": "entmutigte", "du": "entmutigtest", "er_sie_es": "entmutigte", "wir": "entmutigten", "ihr": "entmutigtet", "sie_Sie": "entmutigten" }, "perfekt": "hat entmutigt", "imperativ": "Lass dich nicht entmutigen!" },
    "contoh_kalimat": [{ "de": "Lass dich von kleinen Rückschlägen nicht entmutigen!", "id": "Jangan biarkan kemunduran kecil mematahkan semangatmu!" }]
  },
  {
    "id": "ermutigen-570",
    "level": "B2",
    "infinitiv": "ermutigen",
    "arti": "membesarkan hati, mendorong keberanian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "ermutige", "du": "ermutigst", "er_sie_es": "ermutigt", "wir": "ermutigen", "ihr": "ermutigt", "sie_Sie": "ermutigen" }, "praeteritum": { "ich": "ermutigte", "du": "ermutigtest", "er_sie_es": "ermutigte", "wir": "ermutigten", "ihr": "ermutigtet", "sie_Sie": "ermutigten" }, "perfekt": "hat ermutigt", "imperativ": "Ermutige!/Ermutigt!/Ermutigen Sie!" },
    "contoh_kalimat": [{ "de": "Der Lehrer ermutigte ihn, nicht aufzugeben.", "id": "Guru membesarkan hatinya agar tidak menyerah." }]
  },
  {
    "id": "troesten-571",
    "level": "B1",
    "infinitiv": "trösten",
    "arti": "menghibur orang bersedih",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "tröste", "du": "tröstest", "er_sie_es": "tröstet", "wir": "trösten", "ihr": "tröstet", "sie_Sie": "trösten" }, "praeteritum": { "ich": "tröstete", "du": "tröstetest", "er_sie_es": "tröstete", "wir": "trösteten", "ihr": "tröstetet", "sie_Sie": "trösteten" }, "perfekt": "hat getröstet", "imperativ": "Tröste!/Tröstet!/Trösten Sie!" },
    "contoh_kalimat": [{ "de": "Die Mutter tröstet das weinende Kind.", "id": "Ibu menghibur anak yang sedang menangis." }]
  },
  {
    "id": "beraten-572",
    "level": "B2",
    "infinitiv": "überreden",
    "arti": "membujuk agar setuju",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "überrede", "du": "überredest", "er_sie_es": "überredet", "wir": "überreden", "ihr": "überredet", "sie_Sie": "überreden" }, "praeteritum": { "ich": "überredete", "du": "überredetest", "er_sie_es": "überredete", "wir": "überredeten", "ihr": "überredetet", "sie_Sie": "überredeten" }, "perfekt": "hat überredet", "imperativ": "Überrede!/Überredet!/Überreden Sie!" },
    "contoh_kalimat": [{ "de": "Er überredete mich, mit ins Kino zu kommen.", "id": "Dia membujuk saya untuk ikut ke bioskop." }]
  },
  {
    "id": "ueberzeugen-573",
    "level": "B1",
    "infinitiv": "überzeugen",
    "arti": "meyakinkan dengan argumen",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "überzeuge", "du": "überzeugst", "er_sie_es": "überzeugt", "wir": "überzeugen", "ihr": "überzeugt", "sie_Sie": "überzeugen" }, "praeteritum": { "ich": "überzeugte", "du": "überzeugtest", "er_sie_es": "überzeugte", "wir": "überzeugten", "ihr": "überzeugtet", "sie_Sie": "überzeugten" }, "perfekt": "hat überzeugt", "imperativ": "Überzeuge!/Überzeugt!/Überzeugen Sie!" },
    "contoh_kalimat": [{ "de": "Deine Argumente haben mich voll überzeugt.", "id": "Argumenmu meyakinkan saya sepenuhnya." }]
  },
  {
    "id": "beweisen-574",
    "level": "B1",
    "infinitiv": "beweisen",
    "arti": "membuktikan kebenaran",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "beweise", "du": "beweist", "er_sie_es": "beweist", "wir": "beweisen", "ihr": "beweist", "sie_Sie": "beweisen" }, "praeteritum": { "ich": "bewies", "du": "bewiesest", "er_sie_es": "bewies", "wir": "bewiesen", "ihr": "bewiest", "sie_Sie": "bewiesen" }, "perfekt": "hat bewiesen", "imperativ": "Beweise!/Beweist!/Beweisen Sie!" },
    "contoh_kalimat": [{ "de": "Er konnte seine Unschuld vor Gericht beweisen.", "id": "Dia berhasil membuktikan dirinya tidak bersalah di pengadilan." }]
  },
  {
    "id": "widerlegen-575",
    "level": "C1",
    "infinitiv": "widerlegen",
    "arti": "membantah bukti/teori",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "widerlege", "du": "widerlegst", "er_sie_es": "widerlegt", "wir": "widerlegen", "ihr": "widerlegt", "sie_Sie": "widerlegen" }, "praeteritum": { "ich": "widerlegte", "du": "widerlegtest", "er_sie_es": "widerlegte", "wir": "widerlegten", "ihr": "widerlegtet", "sie_Sie": "widerlegten" }, "perfekt": "hat widerlegt", "imperativ": "Widerlege!/Widerlegt!/Widerlegen Sie!" },
    "contoh_kalimat": [{ "de": "Die neue Studie widerlegt die alte Theorie.", "id": "Riset baru membantah teori lama itu." }]
  },
  {
    "id": "begruenden-576",
    "level": "B1",
    "infinitiv": "rechtfertigen",
    "arti": "membenarkan tindakan, menjustifikasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "rechtfertige", "du": "rechtfertigst", "er_sie_es": "rechtfertigt", "wir": "rechtfertigen", "ihr": "rechtfertigt", "sie_Sie": "rechtfertigen" }, "praeteritum": { "ich": "rechtfertigte", "du": "rechtfertigtest", "er_sie_es": "rechtfertigte", "wir": "rechtfertigten", "ihr": "rechtfertigtet", "sie_Sie": "rechtfertigten" }, "perfekt": "hat gerechtfertigt", "imperativ": "Rechtfertige!/Rechtfertigt!/Rechtfertigen Sie!" },
    "contoh_kalimat": [{ "de": "Nichts kann diese Gewalt rechtfertigen.", "id": "Tidak ada yang bisa membenarkan kekerasan ini." }]
  },
  {
    "id": "entschuldigen-577",
    "level": "A2",
    "infinitiv": "verzeihen",
    "arti": "mengampuni kesalahan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "verzeihe", "du": "verzeihst", "er_sie_es": "verzeiht", "wir": "verzeihen", "ihr": "verzeiht", "sie_Sie": "verzeihen" }, "praeteritum": { "ich": "verzieh", "du": "verziehst", "er_sie_es": "verzieh", "wir": "verziehen", "ihr": "verzieht", "sie_Sie": "verziehen" }, "perfekt": "hat verziehen", "imperativ": "Verzeih!/Verzeiht!/Verzeihen Sie!" },
    "contoh_kalimat": [{ "de": "Bitte verzeih mir meinen Fehler!", "id": "Tolong ampuni kesalahanku!" }]
  },
  {
    "id": "straucheln-578",
    "level": "C1",
    "infinitiv": "straucheln",
    "arti": "tersandung langkah, terancam bangkrut",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "strauchle", "du": "strauchelst", "er_sie_es": "strauchelt", "wir": "straucheln", "ihr": "strauchelt", "sie_Sie": "straucheln" }, "praeteritum": { "ich": "strauchelte", "du": "straucheltest", "er_sie_es": "strauchelte", "wir": "strauchelten", "ihr": "straucheltet", "sie_Sie": "strauchelten" }, "perfekt": "ist gestrauchelt", "imperativ": "Strauchle!/Strauchelt!/Straucheln Sie!" },
    "contoh_kalimat": [{ "de": "Das Unternehmen geriet ins Straucheln.", "id": "Perusahaan itu mulai tersendat goyah." }]
  },
  {
    "id": "wanken-579",
    "level": "B2",
    "infinitiv": "wanken",
    "arti": "sempoyongan, goyah pendirian",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "wanke", "du": "wankst", "er_sie_es": "wankt", "wir": "wanken", "ihr": "wankt", "sie_Sie": "wanken" }, "praeteritum": { "ich": "wankte", "du": "wanktest", "er_sie_es": "wankte", "wir": "wankten", "ihr": "wanktet", "sie_Sie": "wankten" }, "perfekt": "ist gewankt", "imperativ": "Wanke!/Wankt!/Wanken Sie!" },
    "contoh_kalimat": [{ "de": "Der Boxer wankte nach dem Treffer.", "id": "Petinju itu sempoyongan setelah terkena pukulan." }]
  },
  {
    "id": "schwanken-580",
    "level": "B2",
    "infinitiv": "schwanken",
    "arti": "berfluktuasi nilai, bergoyang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schwanke", "du": "schwankst", "er_sie_es": "schwankt", "wir": "schwanken", "ihr": "schwankt", "sie_Sie": "schwanken" }, "praeteritum": { "ich": "schwankte", "du": "schwanktest", "er_sie_es": "schwankte", "wir": "schwankten", "ihr": "schwanktet", "sie_Sie": "schwankten" }, "perfekt": "hat geschwankt", "imperativ": "Schwanke!/Schwankt!/Schwanken Sie!" },
    "contoh_kalimat": [{ "de": "Die Preise schwanken je nach Jahreszeit.", "id": "Harga berfluktuasi tergantung musim." }]
  },
  {
    "id": "kippen-581",
    "level": "B1",
    "infinitiv": "kippen",
    "arti": "terguling jatuh, membuka jendela miring",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "kippe", "du": "kippst", "er_sie_es": "kippt", "wir": "kippen", "ihr": "kippt", "sie_Sie": "kippen" }, "praeteritum": { "ich": "kippte", "du": "kipptest", "er_sie_es": "kippte", "wir": "kippten", "ihr": "kipptet", "sie_Sie": "kippten" }, "perfekt": "ist gekippt", "imperativ": "Kippe!/Kippt!/Kippen Sie!" },
    "contoh_kalimat": [{ "de": "Das Glas ist umgekippt.", "id": "Gelasnya terguling tumpah." }]
  },
  {
    "id": "rollen-582",
    "level": "A2",
    "infinitiv": "rollen",
    "arti": "menggelinding bola/roda",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "rolle", "du": "rollst", "er_sie_es": "rollt", "wir": "rollen", "ihr": "rollt", "sie_Sie": "rollen" }, "praeteritum": { "ich": "rollte", "du": "rolltest", "er_sie_es": "rollte", "wir": "rollten", "ihr": "rolltet", "sie_Sie": "rollten" }, "perfekt": "ist gerollt", "imperativ": "Rolle!/Rollt!/Rollen Sie!" },
    "contoh_kalimat": [{ "de": "Der Ball rollte die Straße hinunter.", "id": "Bolanya menggelinding menuruni jalan." }]
  },
  {
    "id": "gleiten-583",
    "level": "B2",
    "infinitiv": "gleiten",
    "arti": "meluncur mulus di permukaan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "gleite", "du": "gleitest", "er_sie_es": "gleitet", "wir": "gleiten", "ihr": "gleitet", "sie_Sie": "gleiten" }, "praeteritum": { "ich": "glitt", "du": "glittest", "er_sie_es": "glitt", "wir": "glitten", "ihr": "glittet", "sie_Sie": "glitten" }, "perfekt": "ist geglitten", "imperativ": "Gleite!/Gleitet!/Gleiten Sie!" },
    "contoh_kalimat": [{ "de": "Das Boot gleitet sanft über das Wasser.", "id": "Perahu itu meluncur lembut di atas air." }]
  },
  {
    "id": "schweben-584",
    "level": "B2",
    "infinitiv": "schweben",
    "arti": "melayang di udara bebas gravitasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schwebe", "du": "schwebst", "er_sie_es": "schwebt", "wir": "schweben", "ihr": "schwebt", "sie_Sie": "schweben" }, "praeteritum": { "ich": "schwebte", "du": "schwebtest", "er_sie_es": "schwebte", "wir": "schwebten", "ihr": "schwebtet", "sie_Sie": "schwebten" }, "perfekt": "hat geschwebt", "imperativ": "Schwebe!/Schwebt!/Schweben Sie!" },
    "contoh_kalimat": [{ "de": "Die Wolken schweben am blauen Himmel.", "id": "Awan-awan melayang di langit biru." }]
  },
  {
    "id": "sinken-585",
    "level": "B1",
    "infinitiv": "versinken",
    "arti": "tenggelam tertelan pasir/lumpur",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "versinke", "du": "versinkst", "er_sie_es": "versinkt", "wir": "versinken", "ihr": "versinkt", "sie_Sie": "versinken" }, "praeteritum": { "ich": "versank", "du": "versankst", "er_sie_es": "versank", "wir": "versanken", "ihr": "versankt", "sie_Sie": "versanken" }, "perfekt": "ist versunken", "imperativ": "Versinke!/Versinkt!/Versinken Sie!" },
    "contoh_kalimat": [{ "de": "Er versank ganz in seinen Gedanken.", "id": "Dia tenggelam larut dalam lamunannya." }]
  },
  {
    "id": "ertrinken-586",
    "level": "B1",
    "infinitiv": "ertrinken",
    "arti": "mati tenggelam di air",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "ertrinke", "du": "ertrinkst", "er_sie_es": "ertrinkt", "wir": "ertrinken", "ihr": "ertrinkt", "sie_Sie": "ertrinken" }, "praeteritum": { "ich": "ertrank", "du": "ertrankst", "er_sie_es": "ertrank", "wir": "ertranken", "ihr": "ertrankt", "sie_Sie": "ertranken" }, "perfekt": "ist ertrunken", "imperativ": "Ertrinke!/Ertrinkt!/Ertrinken Sie!" },
    "contoh_kalimat": [{ "de": "Rettungsschwimmer verhinderten, dass er ertrank.", "id": "Penjaga pantai mencegahnya tenggelam." }]
  },
  {
    "id": "ersticken-587",
    "level": "B2",
    "infinitiv": "ersticken",
    "arti": "mati lemas kehabisan oksigen",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "ersticke", "du": "erstickst", "er_sie_es": "erstickt", "wir": "ersticken", "ihr": "erstickt", "sie_Sie": "ersticken" }, "praeteritum": { "ich": "erstickte", "du": "ersticktest", "er_sie_es": "erstickte", "wir": "erstickten", "ihr": "ersticktet", "sie_Sie": "erstickten" }, "perfekt": "ist erstickt", "imperativ": "Ersticke!/Erstickt!/Ersticken Sie!" },
    "contoh_kalimat": [{ "de": "Das Feuer erstickte mangels Sauerstoff.", "id": "Api padam karena kekurangan oksigen." }]
  },
  {
    "id": "verbrennen-588",
    "level": "B1",
    "infinitiv": "erfrieren",
    "arti": "mati kedinginan/hipotermia",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "erfriere", "du": "erfrierst", "er_sie_es": "erfriert", "wir": "erfrieren", "ihr": "erfriert", "sie_Sie": "erfrieren" }, "praeteritum": { "ich": "erfror", "du": "erfrorst", "er_sie_es": "erfror", "wir": "erfroren", "ihr": "erfrort", "sie_Sie": "erfroren" }, "perfekt": "ist erfroren", "imperativ": "Erfriere!/Erfriert!/Erfrieren Sie!" },
    "contoh_kalimat": [{ "de": "Die Blumen sind in der Frostnacht erfroren.", "id": "Bunga-bunga membeku mati saat malam embun es." }]
  },
  {
    "id": "bluten-589",
    "level": "A2",
    "infinitiv": "bluten",
    "arti": "berdarah luka",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "blute", "du": "blutest", "er_sie_es": "blutet", "wir": "bluten", "ihr": "blutet", "sie_Sie": "bluten" }, "praeteritum": { "ich": "blutete", "du": "blutetest", "er_sie_es": "blutete", "wir": "bluteten", "ihr": "blutetet", "sie_Sie": "bluteten" }, "perfekt": "hat geblutet", "imperativ": "Blute!/Blutet!/Bluten Sie!" },
    "contoh_kalimat": [{ "de": "Seine Wunde am Knie blutet stark.", "id": "Luka di lututnya mengeluarkan banyak darah." }]
  },
  {
    "id": "heilen-590",
    "level": "B1",
    "infinitiv": "heilen",
    "arti": "sembuh membaik, mengobati",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "heile", "du": "heilst", "er_sie_es": "heilt", "wir": "heilen", "ihr": "heilt", "sie_Sie": "heilen" }, "praeteritum": { "ich": "heilte", "du": "heiltest", "er_sie_es": "heilte", "wir": "heilten", "ihr": "heiltet", "sie_Sie": "heilten" }, "perfekt": "ist geheilt", "imperativ": "Heile!/Heilt!/Heilen Sie!" },
    "contoh_kalimat": [{ "de": "Die Schnittwunde ist schnell geheilt.", "id": "Luka gores itu sembuh dengan cepat." }]
  },
  {
    "id": "behandeln-591",
    "level": "B1",
    "infinitiv": "behandeln",
    "arti": "merawat pasien, memperlakukan orang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "behandle", "du": "behandelst", "er_sie_es": "behandelt", "wir": "behandeln", "ihr": "behandelt", "sie_Sie": "behandeln" }, "praeteritum": { "ich": "behandelte", "du": "behandeltest", "er_sie_es": "behandelte", "wir": "behandelten", "ihr": "behandeltet", "sie_Sie": "behandelten" }, "perfekt": "hat behandelt", "imperativ": "Behandle!/Behandelt!/Behandeln Sie!" },
    "contoh_kalimat": [{ "de": "Der Arzt behandelt den Patienten sorgfältig.", "id": "Dokter merawat pasien itu dengan teliti." }]
  },
  {
    "id": "operieren-592",
    "level": "B1",
    "infinitiv": "operieren",
    "arti": "mengoperasi bedah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "operiere", "du": "operierst", "er_sie_es": "operiert", "wir": "operieren", "ihr": "operiert", "sie_Sie": "operieren" }, "praeteritum": { "ich": "operierte", "du": "operiertest", "er_sie_es": "operierte", "wir": "operierten", "ihr": "operiertet", "sie_Sie": "operierten" }, "perfekt": "hat operiert", "imperativ": "Operiere!/Operiert!/Operieren Sie!" },
    "contoh_kalimat": [{ "de": "Der Chirurg operiert das gebrochene Bein.", "id": "Dokter bedah mengoperasi kaki yang patah." }]
  },
  {
    "id": "untersuchen-593",
    "level": "A2",
    "infinitiv": "untersuchen",
    "arti": "memeriksa fisik pasien/objek riset",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "untersuche", "du": "untersuchst", "er_sie_es": "untersucht", "wir": "untersuchen", "ihr": "untersucht", "sie_Sie": "untersuchen" }, "praeteritum": { "ich": "untersuchte", "du": "untersuchtest", "er_sie_es": "untersuchte", "wir": "untersuchten", "ihr": "untersuchtet", "sie_Sie": "untersuchten" }, "perfekt": "hat untersucht", "imperativ": "Untersuche!/Untersucht!/Untersuchen Sie!" },
    "contoh_kalimat": [{ "de": "Der Arzt untersucht den Hals des Kindes.", "id": "Dokter memeriksa tenggorokan anak itu." }]
  },
  {
    "id": "verschreiben-594",
    "level": "A2",
    "infinitiv": "verschreiben",
    "arti": "meresepkan obat dokter",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "verschreibe", "du": "verschreibst", "er_sie_es": "verschreibt", "wir": "verschreiben", "ihr": "verschreibt", "sie_Sie": "verschreiben" }, "praeteritum": { "ich": "verschrieb", "du": "verschriebst", "er_sie_es": "verschrieb", "wir": "verschrieben", "ihr": "verschriebt", "sie_Sie": "verschrieben" }, "perfekt": "hat verschrieben", "imperativ": "Verschreibe!/Verschreibt!/Verschreiben Sie!" },
    "contoh_kalimat": [{ "de": "Die Ärztin verschreibt mir Antibiotika.", "id": "Ibu dokter meresepkan antibiotik untuk saya." }]
  },
  {
    "id": "einnehmen-595",
    "level": "A2",
    "infinitiv": "einnehmen",
    "arti": "meminum obat terjadwal",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "nehme ein", "du": "nimmst ein", "er_sie_es": "nimmt ein", "wir": "nehmen ein", "ihr": "nehmt ein", "sie_Sie": "nehmen ein" }, "praeteritum": { "ich": "nahm ein", "du": "nahmst ein", "er_sie_es": "nahm ein", "wir": "nahmen ein", "ihr": "nahmt ein", "sie_Sie": "nahmen ein" }, "perfekt": "hat eingenommen", "imperativ": "Nimm ein!/Nehmt ein!/Nehmen Sie ein!" },
    "contoh_kalimat": [{ "de": "Nehmen Sie die Tropfen vor dem Essen ein!", "id": "Minumlah obat tetes ini sebelum makan!" }]
  },
  {
    "id": "spritzen-596",
    "level": "B1",
    "infinitiv": "spritzen",
    "arti": "menyuntik vaksin, mencipratkan air",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "spritze", "du": "spritzt", "er_sie_es": "spritzt", "wir": "spritzen", "ihr": "spritzt", "sie_Sie": "spritzen" }, "praeteritum": { "ich": "spritzte", "du": "spritztest", "er_sie_es": "spritzte", "wir": "spritzten", "ihr": "spritztet", "sie_Sie": "spritzten" }, "perfekt": "hat gespritzt", "imperativ": "Spritze!/Spritzt!/Spritzen Sie!" },
    "contoh_kalimat": [{ "de": "Die Krankenschwester spritzt den Impfstoff.", "id": "Perawat menyuntikkan vaksin." }]
  },
  {
    "id": "impfen-597",
    "level": "A2",
    "infinitiv": "impfen",
    "arti": "memvaksinasi imunisasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "gegen", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "impfe", "du": "impfst", "er_sie_es": "impft", "wir": "impfen", "ihr": "impft", "sie_Sie": "impfen" }, "praeteritum": { "ich": "impfte", "du": "impftest", "er_sie_es": "impfte", "wir": "impften", "ihr": "impftet", "sie_Sie": "impften" }, "perfekt": "hat geimpft", "imperativ": "Impfe!/Impft!/Impfen Sie!" },
    "contoh_kalimat": [{ "de": "Lassen Sie sich gegen Grippe impfen?", "id": "Apakah Anda mendapatkan vaksin flu?" }]
  },
  {
    "id": "anstecken-598",
    "level": "B1",
    "infinitiv": "anstecken",
    "arti": "menulari penyakit, menyematkan bros",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "stecke an", "du": "steckst an", "er_sie_es": "steckt an", "wir": "stecken an", "ihr": "steckt an", "sie_Sie": "stecken an" }, "praeteritum": { "ich": "steckte an", "du": "stecktest an", "er_sie_es": "steckte an", "wir": "steckten an", "ihr": "stecktet an", "sie_Sie": "steckten an" }, "perfekt": "hat angesteckt", "imperativ": "Steck an!/Steckt an!/Stecken Sie an!" },
    "contoh_kalimat": [{ "de": "Er hat die ganze Familie mit der Grippe angesteckt.", "id": "Dia menulari seluruh keluarga dengan flu." }]
  },
  {
    "id": "infizieren-599",
    "level": "B2",
    "infinitiv": "infizieren",
    "arti": "menginfeksi kuman/virus",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "infiziere", "du": "infizierst", "er_sie_es": "infiziert", "wir": "infizieren", "ihr": "infiziert", "sie_Sie": "infizieren" }, "praeteritum": { "ich": "infizierte", "du": "infiziertest", "er_sie_es": "infizierte", "wir": "infizierten", "ihr": "infiziertet", "sie_Sie": "infizierten" }, "perfekt": "hat infiziert", "imperativ": "Infiziere!/Infiziert!/Infizieren Sie!" },
    "contoh_kalimat": [{ "de": "Die Wunde hat sich mit Bakterien infiziert.", "id": "Lukanya terinfeksi bakteri." }]
  },
  {
    "id": "desinfizieren-600",
    "level": "B1",
    "infinitiv": "desinfizieren",
    "arti": "mensterilkan dari kuman",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "desinfiziere", "du": "desinfizierst", "er_sie_es": "desinfiziert", "wir": "desinfizieren", "ihr": "desinfiziert", "sie_Sie": "desinfizieren" }, "praeteritum": { "ich": "desinfizierte", "du": "desinfiziertest", "er_sie_es": "desinfizierte", "wir": "desinfizierten", "ihr": "desinfiziertet", "sie_Sie": "desinfizierten" }, "perfekt": "hat desinfiziert", "imperativ": "Desinfiziere!/Desinfiziert!/Desinfizieren Sie!" },
    "contoh_kalimat": [{ "de": "Bitte desinfizieren Sie sich vor dem Betreten die Hände!", "id": "Silakan sterilkan tangan sebelum masuk!" }]
  },
  {
    "id": "schmerzen-601",
    "level": "B1",
    "infinitiv": "schmerzen",
    "arti": "terasa sakit/nyeri",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schmerze", "du": "schmerzt", "er_sie_es": "schmerzt", "wir": "schmerzen", "ihr": "schmerzt", "sie_Sie": "schmerzen" }, "praeteritum": { "ich": "schmerzte", "du": "schmerztest", "er_sie_es": "schmerzte", "wir": "schmerzten", "ihr": "schmerztet", "sie_Sie": "schmerzten" }, "perfekt": "hat geschmerzt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Mein Rücken schmerzt seit Tagen.", "id": "Punggung saya terasa sakit sejak berhari-hari." }]
  },
  {
    "id": "weh-tun-602",
    "level": "A1",
    "infinitiv": "wehtun",
    "arti": "terasa sakit pada anggota badan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "tue weh", "du": "tust weh", "er_sie_es": "tut weh", "wir": "tun weh", "ihr": "tut weh", "sie_Sie": "tun weh" }, "praeteritum": { "ich": "tat weh", "du": "tatest weh", "er_sie_es": "tat weh", "wir": "taten weh", "ihr": "tatet weh", "sie_Sie": "taten weh" }, "perfekt": "hat wehgetan", "imperativ": "Tu nicht weh!" },
    "contoh_kalimat": [{ "de": "Mein Kopf tut schrecklich weh.", "id": "Kepalaku sakit sekali." }]
  },
  {
    "id": "leiden-603",
    "level": "B1",
    "infinitiv": "leiden",
    "arti": "menderita sakit/tekanan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "leide", "du": "leidest", "er_sie_es": "leidet", "wir": "leiden", "ihr": "leidet", "sie_Sie": "leiden" }, "praeteritum": { "ich": "litt", "du": "littest", "er_sie_es": "litt", "wir": "litten", "ihr": "littet", "sie_Sie": "litten" }, "perfekt": "hat gelitten", "imperativ": "Leide!/Leidet!/Leiden Sie!" },
    "contoh_kalimat": [{ "de": "Er leidet an chronischen Schmerzen.", "id": "Dia menderita nyeri kronis." }]
  },
  {
    "id": "ertragen-604",
    "level": "B2",
    "infinitiv": "ertragen",
    "arti": "menahan sabar derita",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "ertrage", "du": "erträgst", "er_sie_es": "erträgt", "wir": "ertragen", "ihr": "ertragt", "sie_Sie": "ertragen" }, "praeteritum": { "ich": "ertrug", "du": "ertrugst", "er_sie_es": "ertrug", "wir": "ertrugen", "ihr": "ertrugt", "sie_Sie": "ertrugen" }, "perfekt": "hat ertragen", "imperativ": "Ertrag!/Ertragt!/Ertragen Sie!" },
    "contoh_kalimat": [{ "de": "Ich kann diesen Lärm nicht mehr ertragen.", "id": "Saya tidak tahan lagi dengan kebisingan ini." }]
  },
  {
    "id": "aushalten-605",
    "level": "B1",
    "infinitiv": "aushalten",
    "arti": "bertahan menahan beban/sakit",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "halte aus", "du": "hältst aus", "er_sie_es": "hält aus", "wir": "halten aus", "ihr": "haltet aus", "sie_Sie": "halten aus" }, "praeteritum": { "ich": "hielt aus", "du": "hieltst aus", "er_sie_es": "hielt aus", "wir": "hielten aus", "ihr": "hieltet aus", "sie_Sie": "hielten aus" }, "perfekt": "hat ausgehalten", "imperativ": "Halt aus!/Haltet aus!/Halten Sie aus!" },
    "contoh_kalimat": [{ "de": "Wie hältst du diese Kälte bloß aus?", "id": "Bagaimana caramu bisa tahan udara sedingin ini?" }]
  },
  {
    "id": "überstehen-606",
    "level": "B2",
    "infinitiv": "überstehen",
    "arti": "melewati masa krisis dengan selamat",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "überstehe", "du": "überstehst", "er_sie_es": "übersteht", "wir": "überstehen", "ihr": "übersteht", "sie_Sie": "überstehen" }, "praeteritum": { "ich": "überstand", "du": "überstandst", "er_sie_es": "überstand", "wir": "überstanden", "ihr": "überstandet", "sie_Sie": "überstanden" }, "perfekt": "hat überstanden", "imperativ": "Überstehe!/Übersteht!/Überstehen Sie!" },
    "contoh_kalimat": [{ "de": "Sie hat die schwere Operation gut überstanden.", "id": "Dia berhasil melewati operasi berat itu dengan baik." }]
  },
  {
    "id": "ausruhen-607",
    "level": "A2",
    "infinitiv": "sich ausruhen",
    "arti": "rehat badan sejenak",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "ruhe mich aus", "du": "ruhst dich aus", "er_sie_es": "ruht sich aus", "wir": "ruhen uns aus", "ihr": "ruht euch aus", "sie_Sie": "ruhen sich aus" }, "praeteritum": { "ich": "ruhte mich aus", "du": "ruhtest dich aus", "er_sie_es": "ruhte sich aus", "wir": "ruhten uns aus", "ihr": "ruhtet euch aus", "sie_Sie": "ruhten sich aus" }, "perfekt": "hat sich ausgeruht", "imperativ": "Ruh dich aus!/Ruht euch aus!/Ruhen Sie sich aus!" },
    "contoh_kalimat": [{ "de": "Ruh dich nach der langen Reise erst mal aus.", "id": "Istirahatlah dulu sejenak setelah perjalanan jauh." }]
  },
  {
    "id": "entspannen-608",
    "level": "A2",
    "infinitiv": "sich entspannen",
    "arti": "merilekskan pikiran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "entspanne mich", "du": "entspannst dich", "er_sie_es": "entspannt sich", "wir": "entspannen uns", "ihr": "entspannt euch", "sie_Sie": "entspannen sich" }, "praeteritum": { "ich": "entspannte mich", "du": "entspanntest dich", "er_sie_es": "entspannte sich", "wir": "entspannten uns", "ihr": "entspanntet euch", "sie_Sie": "entspannten sich" }, "perfekt": "hat sich entspannt", "imperativ": "Entspanne dich!/Entspannt euch!/Entspannen Sie sich!" },
    "contoh_kalimat": [{ "de": "Am Wochenende entspanne ich mich beim Lesen.", "id": "Di akhir pekan saya rileks sambil membaca." }]
  },
  {
    "id": "schlafen-609",
    "level": "A2",
    "infinitiv": "einschlafen",
    "arti": "mulai terlelap tidur",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schlafe ein", "du": "schläfst ein", "er_sie_es": "schläft ein", "wir": "schlafen ein", "ihr": "schlaft ein", "sie_Sie": "schlafen ein" }, "praeteritum": { "ich": "schlief ein", "du": "schliefst ein", "er_sie_es": "schlief ein", "wir": "schliefen ein", "ihr": "schlieft ein", "sie_Sie": "schliefen ein" }, "perfekt": "ist eingeschlafen", "imperativ": "Schlaf ein!/Schlaft ein!/Schlafen Sie ein!" },
    "contoh_kalimat": [{ "de": "Das Baby ist schnell eingeschlafen.", "id": "Bayi itu terlelap tidur dengan cepat." }]
  },
  {
    "id": "aufwachen-610",
    "level": "A2",
    "infinitiv": "aufwachen",
    "arti": "terbangun spontan dari tidur",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "wache auf", "du": "wachst auf", "er_sie_es": "wacht auf", "wir": "wachen auf", "ihr": "wacht auf", "sie_Sie": "wachen auf" }, "praeteritum": { "ich": "wachte auf", "du": "wachtest auf", "er_sie_es": "wachte auf", "wir": "wachten auf", "ihr": "wachtet auf", "sie_Sie": "wachten auf" }, "perfekt": "ist aufgewacht", "imperativ": "Wach auf!/Wacht auf!/Wachen Sie auf!" },
    "contoh_kalimat": [{ "de": "Ich bin heute früh um fünf aufgewacht.", "id": "Saya terbangun pagi ini pukul lima." }]
  },
  {
    "id": "verschlafen-611",
    "level": "A2",
    "infinitiv": "verschlafen",
    "arti": "kesiangan bangun tidur",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "verschlafe", "du": "verschläfst", "er_sie_es": "verschläft", "wir": "verschlafen", "ihr": "verschlaft", "sie_Sie": "verschlafen" }, "praeteritum": { "ich": "verschlief", "du": "verschliefst", "er_sie_es": "verschlief", "wir": "verschliefen", "ihr": "verschlieft", "sie_Sie": "verschliefen" }, "perfekt": "hat verschlafen", "imperativ": "Verschlafe nicht!/Verschlaft nicht!" },
    "contoh_kalimat": [{ "de": "Der Wecker hat nicht geklingelt, ich habe verschlafen.", "id": "Jam beker tidak berdering, saya bangun kesiangan." }]
  },
  {
    "id": "ausschlafen-612",
    "level": "A2",
    "infinitiv": "ausschlafen",
    "arti": "tidur puas tanpa batas waktu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schlafe aus", "du": "schläfst aus", "er_sie_es": "schläft aus", "wir": "schlafen aus", "ihr": "schlaft aus", "sie_Sie": "schlafen aus" }, "praeteritum": { "ich": "schlief aus", "du": "verschliefst aus", "er_sie_es": "schlief aus", "wir": "schliefen aus", "ihr": "schlieft aus", "sie_Sie": "schliefen aus" }, "perfekt": "hat ausgeschlafen", "imperativ": "Schlaf aus!/Schlaft aus!/Schlafen Sie aus!" },
    "contoh_kalimat": [{ "de": "Am Sonntag kann ich endlich ausschlafen.", "id": "Pada hari Minggu akhirnya saya bisa tidur sepuasnya." }]
  },
  {
    "id": "traeumen-613",
    "level": "B2",
    "infinitiv": "albtraeumen",
    "arti": "mengalami mimpi buruk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "träume schlecht", "du": "träumst schlecht", "er_sie_es": "träumt schlecht", "wir": "träumen schlecht", "ihr": "träumt schlecht", "sie_Sie": "träumen schlecht" }, "praeteritum": { "ich": "träumte schlecht", "du": "träumtest schlecht", "er_sie_es": "träumte schlecht", "wir": "träumten schlecht", "ihr": "träumtet schlecht", "sie_Sie": "träumten schlecht" }, "perfekt": "hat schlecht geträumt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Das Kind hat heute Nacht schlecht geträumt.", "id": "Anak itu bermimpi buruk tadi malam." }]
  },
  {
    "id": "denken-614",
    "level": "B1",
    "infinitiv": "nachdenken",
    "arti": "merenungkan secara mendalam",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "denke nach", "du": "denkst nach", "er_sie_es": "denkt nach", "wir": "denken nach", "ihr": "denkt nach", "sie_Sie": "denken nach" }, "praeteritum": { "ich": "dachte nach", "du": "dachtest nach", "er_sie_es": "dachte nach", "wir": "dachten nach", "ihr": "dachtet nach", "sie_Sie": "dachten nach" }, "perfekt": "hat nachgedacht", "imperativ": "Denk nach!/Denkt nach!/Denken Sie nach!" },
    "contoh_kalimat": [{ "de": "Ich muss über deinen Vorschlag nachdenken.", "id": "Saya harus merenungkan usulanmu." }]
  },
  {
    "id": "bedenken-615",
    "level": "B2",
    "infinitiv": "bedenken",
    "arti": "mempertimbangkan konsekuensi logis",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "bedenke", "du": "bedenkst", "er_sie_es": "bedenkt", "wir": "bedenken", "ihr": "bedenkt", "sie_Sie": "bedenken" }, "praeteritum": { "ich": "bedachte", "du": "bedachtest", "er_sie_es": "bedachte", "wir": "bedachten", "ihr": "bedachtet", "sie_Sie": "bedachten" }, "perfekt": "hat bedacht", "imperativ": "Bedenke!/Bedenkt!/Bedenken Sie!" },
    "contoh_kalimat": [{ "de": "Hast du die möglichen Folgen bedacht?", "id": "Sudahkah kamu mempertimbangkan akibat yang mungkin timbul?" }]
  },
  {
    "id": "ueberlegen-616",
    "level": "B1",
    "infinitiv": "mitdenken",
    "arti": "turut memikirkan solusi bersama",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "denke mit", "du": "denkst mit", "er_sie_es": "denkt mit", "wir": "denken mit", "ihr": "denkt mit", "sie_Sie": "denken mit" }, "praeteritum": { "ich": "dachte mit", "du": "dachtest mit", "er_sie_es": "dachte mit", "wir": "dachten mit", "ihr": "dachtet mit", "sie_Sie": "dachten mit" }, "perfekt": "hat mitgedacht", "imperativ": "Denk mit!/Denkt mit!/Denken Sie mit!" },
    "contoh_kalimat": [{ "de": "Danke, dass du mitgedacht hast!", "id": "Terima kasih sudah turut berpikir bersama mencari solusinya!" }]
  },
  {
    "id": "zweifeln-617",
    "level": "B2",
    "infinitiv": "verzweifeln",
    "arti": "putus asa tak berdaya",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "verzweifle", "du": "verzweifelst", "er_sie_es": "verzweifelt", "wir": "verzweifeln", "ihr": "verzweifelt", "sie_Sie": "verzweifeln" }, "praeteritum": { "ich": "verzweifelte", "du": "verzweifeltest", "er_sie_es": "verzweifelte", "wir": "verzweifelten", "ihr": "verzweifeltet", "sie_Sie": "verzweifelten" }, "perfekt": "ist verzweifelt", "imperativ": "Verzweifle nicht!" },
    "contoh_kalimat": [{ "de": "Verzweifle nicht an dieser schweren Aufgabe!", "id": "Jangan putus asa menghadapi soal yang sulit ini!" }]
  },
  {
    "id": "hoffen-618",
    "level": "B2",
    "infinitiv": "verzagen",
    "arti": "patah arang kehilangan nyali",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verzage", "du": "verzagst", "er_sie_es": "verzagt", "wir": "verzagen", "ihr": "verzagt", "sie_Sie": "verzagen" }, "praeteritum": { "ich": "verzagte", "du": "verzagtest", "er_sie_es": "verzagte", "wir": "verzagten", "ihr": "verzagtet", "sie_Sie": "verzagten" }, "perfekt": "ist verzagt", "imperativ": "Verzage nicht!" },
    "contoh_kalimat": [{ "de": "Nicht verzagen, wenn es mal schwierig wird.", "id": "Jangan patah arang bila keadaan sedang sulit." }]
  },
  {
    "id": "mut-machen-619",
    "level": "B1",
    "infinitiv": "zureden",
    "arti": "memberi dorongan nasihat baik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "rede zu", "du": "redest zu", "er_sie_es": "redet zu", "wir": "reden zu", "ihr": "redet zu", "sie_Sie": "reden zu" }, "praeteritum": { "ich": "redete zu", "du": "redetest zu", "er_sie_es": "redete zu", "wir": "redeten zu", "ihr": "redetet zu", "sie_Sie": "redeten zu" }, "perfekt": "hat zugeredet", "imperativ": "Rede gut zu!" },
    "contoh_kalimat": [{ "de": "Der Arzt redete dem Patienten gut zu.", "id": "Dokter menasihati dan menenangkan pasien dengan baik." }]
  },
  {
    "id": "beruhigen-620",
    "level": "B2",
    "infinitiv": "besaenftigen",
    "arti": "meredakan kemarahan orang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "besänftige", "du": "besänftigst", "er_sie_es": "besänftigt", "wir": "besänftigen", "ihr": "besänftigt", "sie_Sie": "besänftigen" }, "praeteritum": { "ich": "besänftigte", "du": "besänftigtest", "er_sie_es": "besänftigte", "wir": "besänftigten", "ihr": "besänftigtet", "sie_Sie": "besänftigten" }, "perfekt": "hat besänftigt", "imperativ": "Besänftige!/Besänftigt!/Besänftigen Sie!" },
    "contoh_kalimat": [{ "de": "Er versuchte, den wütenden Kunden zu besänftigen.", "id": "Dia berusaha meredakan kemarahan pelanggan itu." }]
  },
  {
    "id": "aufregen-621",
    "level": "A2",
    "infinitiv": "sich aufregen",
    "arti": "emosi marah-marah/panik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "rege mich auf", "du": "regst dich auf", "er_sie_es": "regt sich auf", "wir": "regen uns auf", "ihr": "regt euch auf", "sie_Sie": "regen sich auf" }, "praeteritum": { "ich": "regte mich auf", "du": "regtest dich auf", "er_sie_es": "regte sich auf", "wir": "regten uns auf", "ihr": "regtet euch auf", "sie_Sie": "regten sich auf" }, "perfekt": "hat sich aufgeregt", "imperativ": "Reg dich nicht auf!" },
    "contoh_kalimat": [{ "de": "Reg dich nicht über Kleinigkeiten auf!", "id": "Jangan emosi gara-gara hal sepele!" }]
  },
  {
    "id": "aergen-622",
    "level": "A2",
    "infinitiv": "ärgern",
    "arti": "menjahili, membuat jengkel",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "ärgere", "du": "ärgerst", "er_sie_es": "ärgert", "wir": "ärgern", "ihr": "ärgert", "sie_Sie": "ärgern" }, "praeteritum": { "ich": "ärgerte", "du": "ärgertest", "er_sie_es": "ärgerte", "wir": "ärgerten", "ihr": "ärgertet", "sie_Sie": "ärgerten" }, "perfekt": "hat geärgert", "imperativ": "Ärgere nicht!" },
    "contoh_kalimat": [{ "de": "Hör auf, deine kleine Schwester zu ärgern!", "id": "Berhentilah menjahili adik perempuanmu!" }]
  },
  {
    "id": "provozieren-623",
    "level": "B2",
    "infinitiv": "provozieren",
    "arti": "memprovokasi amarah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "provoziere", "du": "provozierst", "er_sie_es": "provoziert", "wir": "provozieren", "ihr": "provoziert", "sie_Sie": "provozieren" }, "praeteritum": { "ich": "provozierte", "du": "provoziertest", "er_sie_es": "provozierte", "wir": "provozierten", "ihr": "provoziertet", "sie_Sie": "provozierten" }, "perfekt": "hat provoziert", "imperativ": "Provoziere nicht!" },
    "contoh_kalimat": [{ "de": "Lass dich von ihm nicht provozieren.", "id": "Jangan biarkan dirimu terprovokasi olehnya." }]
  },
  {
    "id": "reizen-624",
    "level": "B2",
    "infinitiv": "reizen",
    "arti": "mengiritasi kulit/mata, memikat minat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "reize", "du": "reizt", "er_sie_es": "reizt", "wir": "reizen", "ihr": "reizt", "sie_Sie": "reizen" }, "praeteritum": { "ich": "reizte", "du": "reiztest", "er_sie_es": "reizte", "wir": "reizten", "ihr": "reiztet", "sie_Sie": "reizten" }, "perfekt": "hat gereizt", "imperativ": "Reize!/Reizt!/Reizen Sie!" },
    "contoh_kalimat": [{ "de": "Der Rauch reizt meine Augen.", "id": "Asap itu mengiritasi mataku." }]
  },
  {
    "id": "anlocken-625",
    "level": "B2",
    "infinitiv": "anlocken",
    "arti": "memancing datang mangsa/turis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "locke an", "du": "lockst an", "er_sie_es": "lockt an", "wir": "locken an", "ihr": "lockt an", "sie_Sie": "locken an" }, "praeteritum": { "ich": "lockte an", "du": "locktest an", "er_sie_es": "lockte an", "wir": "lockten an", "ihr": "locktet an", "sie_Sie": "lockten an" }, "perfekt": "hat angelockt", "imperativ": "Lock an!/Lockt an!/Locken Sie an!" },
    "contoh_kalimat": [{ "de": "Das Licht lockt Insekten an.", "id": "Cahaya memancing serangga-serangga datang." }]
  },
  {
    "id": "vertreiben-626",
    "level": "B2",
    "infinitiv": "vertreiben",
    "arti": "mengusir hama/kesedihan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "vertreibe", "du": "vertreibst", "er_sie_es": "vertreibt", "wir": "vertreiben", "ihr": "vertreibt", "sie_Sie": "vertreiben" }, "praeteritum": { "ich": "vertrieb", "du": "vertriebst", "er_sie_es": "vertrieb", "wir": "vertrieben", "ihr": "vertriebt", "sie_Sie": "vertrieben" }, "perfekt": "hat vertrieben", "imperativ": "Vertreibe!/Vertreibt!/Vertreiben Sie!" },
    "contoh_kalimat": [{ "de": "Musik vertreibt schlechte Laune.", "id": "Musik mengusir suasana hati yang buruk." }]
  },
  {
    "id": "jagen-627",
    "level": "A2",
    "infinitiv": "wegjagen",
    "arti": "mengejar mengusir pergi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "jage weg", "du": "jagst weg", "er_sie_es": "jagt weg", "wir": "jagen weg", "ihr": "jagt weg", "sie_Sie": "jagen weg" }, "praeteritum": { "ich": "jagte weg", "du": "jagtest weg", "er_sie_es": "jagte weg", "wir": "jagten weg", "ihr": "jagtet weg", "sie_Sie": "jagten weg" }, "perfekt": "hat weggejagt", "imperativ": "Jag weg!/Jagt weg!/Jagen Sie weg!" },
    "contoh_kalimat": [{ "de": "Er jagte die Tauben vom Balkon weg.", "id": "Dia mengusir burung merpati dari balkon." }]
  },
  {
    "id": "locken-628",
    "level": "B1",
    "infinitiv": "locken",
    "arti": "menggoda memikat selera",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "locke", "du": "lockst", "er_sie_es": "lockt", "wir": "locken", "ihr": "lockt", "sie_Sie": "locken" }, "praeteritum": { "ich": "lockte", "du": "locktest", "er_sie_es": "lockte", "wir": "lockten", "ihr": "locktet", "sie_Sie": "lockten" }, "perfekt": "hat gelockt", "imperativ": "Locke!/Lockt!/Locken Sie!" },
    "contoh_kalimat": [{ "de": "Die Angebote locken viele Käufer an.", "id": "Promo-promo itu memikat banyak pembeli." }]
  },
  {
    "id": "verlocken-629",
    "level": "C1",
    "infinitiv": "verleiten",
    "arti": "menjerumuskan perbuatan salah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "verleite", "du": "verleitest", "er_sie_es": "verleitet", "wir": "verleiten", "ihr": "verleitet", "sie_Sie": "verleiten" }, "praeteritum": { "ich": "verleitete", "du": "verleitetest", "er_sie_es": "verleitete", "wir": "verleiteten", "ihr": "verleitetet", "sie_Sie": "verleiteten" }, "perfekt": "hat verleitet", "imperativ": "Verleite!/Verleitet!/Verleiten Sie!" },
    "contoh_kalimat": [{ "de": "Er ließ sich zu einem Fehler verleiten.", "id": "Dia terjerumus berbuat sebuah kesalahan." }]
  },
  {
    "id": "verfuehren-630",
    "level": "B2",
    "infinitiv": "verführen",
    "arti": "merayu nafsu/godaan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "verführe", "du": "verführst", "er_sie_es": "verführt", "wir": "verführen", "ihr": "verführt", "sie_Sie": "verführen" }, "praeteritum": { "ich": "verführte", "du": "verführtest", "er_sie_es": "verführte", "wir": "verführten", "ihr": "verführtet", "sie_Sie": "verführten" }, "perfekt": "hat verführt", "imperativ": "Verführe!/Verführt!/Verführen Sie!" },
    "contoh_kalimat": [{ "de": "Der Duft verführte ihn zu einer Kostprobe.", "id": "Aromanya merayunya untuk mencicipi." }]
  },
  {
    "id": "widerstehen-631",
    "level": "B2",
    "infinitiv": "widerstehen",
    "arti": "menahan godaan selera",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "widerstehe", "du": "widerstehst", "er_sie_es": "widersteht", "wir": "widerstehen", "ihr": "widersteht", "sie_Sie": "widerstehen" }, "praeteritum": { "ich": "widerstand", "du": "widerstandst", "er_sie_es": "widerstand", "wir": "widerstanden", "ihr": "widerstandet", "sie_Sie": "widerstanden" }, "perfekt": "hat widerstanden", "imperativ": "Widerstehe!/Widersteht!/Widerstehen Sie!" },
    "contoh_kalimat": [{ "de": "Ich konnte der Schokolade nicht widerstehen.", "id": "Saya tidak bisa menahan godaan cokelat itu." }]
  },
  {
    "id": "nachgeben-632",
    "level": "B2",
    "infinitiv": "nachgeben",
    "arti": "mengalah desakan, melar kendur",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gebe nach", "du": "gibst nach", "er_sie_es": "gibt nach", "wir": "geben nach", "ihr": "gebt nach", "sie_Sie": "geben nach" }, "praeteritum": { "ich": "gab nach", "du": "gabst nach", "er_sie_es": "gab nach", "wir": "gaben nach", "ihr": "gabt nach", "sie_Sie": "gaben nach" }, "perfekt": "hat nachgegeben", "imperativ": "Gib nach!/Gebt nach!/Geben Sie nach!" },
    "contoh_kalimat": [{ "de": "Der Klügere gibt nach.", "id": "Orang yang lebih bijak memilih mengalah." }]
  },
  {
    "id": "beharren-633",
    "level": "C1",
    "infinitiv": "beharren",
    "arti": "bersikeras atas pendirian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "auf", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "beharre", "du": "beharrst", "er_sie_es": "beharrt", "wir": "beharren", "ihr": "beharrt", "sie_Sie": "beharren" }, "praeteritum": { "ich": "beharrte", "du": "beharrtest", "er_sie_es": "beharrte", "wir": "beharrten", "ihr": "beharrtet", "sie_Sie": "beharrten" }, "perfekt": "hat beharrt", "imperativ": "Beharre!/Beharrt!/Beharren Sie!" },
    "contoh_kalimat": [{ "de": "Er beharrt stur auf seiner Meinung.", "id": "Dia bersikeras atas pendapatnya dengan keras kepala." }]
  },
  {
    "id": "bestehen-634",
    "level": "B1",
    "infinitiv": "bestehen",
    "arti": "lulus ujian, bersikukuh (auf), terdiri atas (aus)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "bestehe", "du": "bestehst", "er_sie_es": "besteht", "wir": "bestehen", "ihr": "besteht", "sie_Sie": "bestehen" }, "praeteritum": { "ich": "bestand", "du": "bestandst", "er_sie_es": "bestand", "wir": "bestanden", "ihr": "bestandet", "sie_Sie": "bestanden" }, "perfekt": "hat bestanden", "imperativ": "Bestehe!/Besteht!/Bestehen Sie!" },
    "contoh_kalimat": [{ "de": "Ich habe die B1-Prüfung bestanden!", "id": "Saya lulus ujian B1!" }]
  },
  {
    "id": "durchfallen-635",
    "level": "A2",
    "infinitiv": "durchfallen",
    "arti": "tidak lulus/gagal ujian",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "falle durch", "du": "fällst durch", "er_sie_es": "fällt durch", "wir": "fallen durch", "ihr": "fallt durch", "sie_Sie": "fallen durch" }, "praeteritum": { "ich": "fiel durch", "du": "fielst durch", "er_sie_es": "fiel durch", "wir": "fielen durch", "ihr": "fielt durch", "sie_Sie": "fielen durch" }, "perfekt": "ist durchgefallen", "imperativ": "Fall nicht durch!" },
    "contoh_kalimat": [{ "de": "Er ist leider bei der Fahrprüfung durchgefallen.", "id": "Sayang sekali dia tidak lulus ujian mengemudi." }]
  },
  {
    "id": "wiederholen-636",
    "level": "A1",
    "infinitiv": "wiederholen",
    "arti": "mengulang perkataan/materi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "wiederhole", "du": "wiederholst", "er_sie_es": "wiederholt", "wir": "wiederholen", "ihr": "wiederholt", "sie_Sie": "wiederholen" }, "praeteritum": { "ich": "wiederholte", "du": "wiederholtest", "er_sie_es": "wiederholte", "wir": "wiederholten", "ihr": "wiederholtet", "sie_Sie": "wiederholten" }, "perfekt": "hat wiederholt", "imperativ": "Wiederhole!/Wiederholt!/Wiederholen Sie!" },
    "contoh_kalimat": [{ "de": "Können Sie den Satz bitte wiederholen?", "id": "Bisakah Anda mengulangi kalimat tadi?" }]
  },
  {
    "id": "ueben-637",
    "level": "A1",
    "infinitiv": "üben",
    "arti": "berlatih materi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "übe", "du": "übst", "er_sie_es": "übt", "wir": "üben", "ihr": "übt", "sie_Sie": "üben" }, "praeteritum": { "ich": "übte", "du": "übtest", "er_sie_es": "übte", "wir": "übten", "ihr": "übtet", "sie_Sie": "übten" }, "perfekt": "hat geübt", "imperativ": "Übe!/Übt!/Üben Sie!" },
    "contoh_kalimat": [{ "de": "Ich übe jeden Tag Deutsch sprechen.", "id": "Saya berlatih berbicara bahasa Jerman setiap hari." }]
  },
  {
    "id": "trainieren-638",
    "level": "A2",
    "infinitiv": "trainieren",
    "arti": "berlatih fisik kebugaran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "trainiere", "du": "trainierst", "er_sie_es": "trainiert", "wir": "trainieren", "ihr": "trainiert", "sie_Sie": "trainieren" }, "praeteritum": { "ich": "trainierte", "du": "trainiertest", "er_sie_es": "trainierte", "wir": "trainierten", "ihr": "trainiertet", "sie_Sie": "trainierten" }, "perfekt": "hat trainiert", "imperativ": "Trainiere!/Trainiert!/Trainieren Sie!" },
    "contoh_kalimat": [{ "de": "Er trainiert für den Marathon.", "id": "Dia berlatih fisik untuk lari maraton." }]
  },
  {
    "id": "studieren-639",
    "level": "A1",
    "infinitiv": "studieren",
    "arti": "kuliah di perguruan tinggi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "studiere", "du": "studierst", "er_sie_es": "studiert", "wir": "studieren", "ihr": "studiert", "sie_Sie": "studieren" }, "praeteritum": { "ich": "studierte", "du": "studiertest", "er_sie_es": "studierte", "wir": "studierten", "ihr": "studiertet", "sie_Sie": "studierten" }, "perfekt": "hat studiert", "imperativ": "Studiere!/Studiert!/Studieren Sie!" },
    "contoh_kalimat": [{ "de": "Sie studiert Medizin in Heidelberg.", "id": "Dia kuliah kedokteran di Heidelberg." }]
  },
  {
    "id": "lehren-640",
    "level": "B1",
    "infinitiv": "lehren",
    "arti": "mengajar, mendidik ilmu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "lehre", "du": "lehrst", "er_sie_es": "lehrt", "wir": "lehren", "ihr": "lehrt", "sie_Sie": "lehren" }, "praeteritum": { "ich": "lehrte", "du": "lehrtest", "er_sie_es": "lehrte", "wir": "lehrten", "ihr": "lehrtet", "sie_Sie": "lehrten" }, "perfekt": "hat gelehrt", "imperativ": "Lehre!/Lehrt!/Lehren Sie!" },
    "contoh_kalimat": [{ "de": "Der Professor lehrt Philosophie an der Universität.", "id": "Profesor itu mengajar filsafat di universitas." }]
  },
  {
    "id": "unterrichten-641",
    "level": "A2",
    "infinitiv": "unterrichten",
    "arti": "mengajar murid di sekolah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "unterrichte", "du": "unterrichtest", "er_sie_es": "unterrichtet", "wir": "unterrichten", "ihr": "unterrichtet", "sie_Sie": "unterrichten" }, "praeteritum": { "ich": "unterrichtete", "du": "unterrichtetest", "er_sie_es": "unterrichtete", "wir": "unterrichteten", "ihr": "unterrichtetet", "sie_Sie": "unterrichteten" }, "perfekt": "hat unterrichtet", "imperativ": "Unterrichte!/Unterrichtet!/Unterrichten Sie!" },
    "contoh_kalimat": [{ "de": "Sie unterrichtet Deutsch und Geschichte.", "id": "Dia mengajar bahasa Jerman dan sejarah." }]
  },
  {
    "id": "beibringen-642",
    "level": "A2",
    "infinitiv": "beibringen",
    "arti": "mengajari keterampilan praktis",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "bringe bei", "du": "bringst bei", "er_sie_es": "bringt bei", "wir": "bringen bei", "ihr": "bringt bei", "sie_Sie": "bringen bei" }, "praeteritum": { "ich": "brachte bei", "du": "brachtest bei", "er_sie_es": "brachte bei", "wir": "brachten bei", "ihr": "brachtet bei", "sie_Sie": "brachten bei" }, "perfekt": "hat beigebracht", "imperativ": "Bring bei!" },
    "contoh_kalimat": [{ "de": "Mein Vater hat mir das Schwimmen beigebracht.", "id": "Ayah saya mengajari saya berenang." }]
  },
  {
    "id": "erfahren-643",
    "level": "A2",
    "infinitiv": "erfahren",
    "arti": "mengetahui kabar berita",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "erfahre", "du": "erfährst", "er_sie_es": "erfährt", "wir": "erfahren", "ihr": "erfahrt", "sie_Sie": "erfahren" }, "praeteritum": { "ich": "erfuhr", "du": "erfuhrst", "er_sie_es": "erfuhr", "wir": "erfuhren", "ihr": "erfuhrt", "sie_Sie": "erfuhren" }, "perfekt": "hat erfahren", "imperativ": "Erfahre!" },
    "contoh_kalimat": [{ "de": "Ich habe erst gestern davon erfahren.", "id": "Saya baru mengetahui hal itu kemarin." }]
  },
  {
    "id": "begreifen-644",
    "level": "B1",
    "infinitiv": "begreifen",
    "arti": "memahami konsep secara mendalam",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "begreife", "du": "begreifst", "er_sie_es": "begreift", "wir": "begreifen", "ihr": "begreift", "sie_Sie": "begreifen" }, "praeteritum": { "ich": "begriff", "du": "begriffst", "er_sie_es": "begriff", "wir": "begriffen", "ihr": "begrifft", "sie_Sie": "begriffen" }, "perfekt": "hat begriffen", "imperativ": "Begreife!" },
    "contoh_kalimat": [{ "de": "Ich kann diese Theorie nicht begreifen.", "id": "Saya tidak bisa memahami teori ini." }]
  },
  {
    "id": "kapieren-645",
    "level": "A2",
    "infinitiv": "kapieren",
    "arti": "paham (bahasa gaul)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "kapiere", "du": "kapierst", "er_sie_es": "kapiert", "wir": "kapieren", "ihr": "kapiert", "sie_Sie": "kapieren" }, "praeteritum": { "ich": "kapierte", "du": "kapiertest", "er_sie_es": "kapierte", "wir": "kapierten", "ihr": "kapiertet", "sie_Sie": "kapierten" }, "perfekt": "hat kapiert", "imperativ": "Kapiert!" },
    "contoh_kalimat": [{ "de": "Hast du die Erklärung kapiert?", "id": "Apakah kamu sudah paham penjelasannya?" }]
  },
  {
    "id": "merken-646",
    "level": "A2",
    "infinitiv": "sich merken",
    "arti": "mengingat di kepala",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "merke mir", "du": "merkst dir", "er_sie_es": "merkt sich", "wir": "merken uns", "ihr": "merkt euch", "sie_Sie": "merken sich" }, "praeteritum": { "ich": "merkte mir", "du": "merktest dir", "er_sie_es": "merkte sich", "wir": "merkten uns", "ihr": "merktet euch", "sie_Sie": "merkten sich" }, "perfekt": "hat sich gemerkt", "imperativ": "Merk dir das!" },
    "contoh_kalimat": [{ "de": "Ich kann mir Namen schlecht merken.", "id": "Saya sulit mengingat nama." }]
  },
  {
    "id": "einfallen-647",
    "level": "A2",
    "infinitiv": "einfallen",
    "arti": "teringat tiba-tiba",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "falle ein", "du": "fällst ein", "er_sie_es": "fällt ein", "wir": "fallen ein", "ihr": "fallt ein", "sie_Sie": "fallen ein" }, "praeteritum": { "ich": "fiel ein", "du": "fielst ein", "er_sie_es": "fiel ein", "wir": "fielen ein", "ihr": "fielt ein", "sie_Sie": "fielen ein" }, "perfekt": "ist eingefallen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Mir fällt sein Name nicht ein.", "id": "Saya tidak teringat namanya." }]
  },
  {
    "id": "ausdenken-648",
    "level": "B1",
    "infinitiv": "sich ausdenken",
    "arti": "mengarang ide kreatif",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "denke mir aus", "du": "denkst dir aus", "er_sie_es": "denkt sich aus", "wir": "denken uns aus", "ihr": "denkt euch aus", "sie_Sie": "denken sich aus" }, "praeteritum": { "ich": "dachte mir aus", "du": "dachtest dir aus", "er_sie_es": "dachte sich aus", "wir": "dachten uns aus", "ihr": "dachtet euch aus", "sie_Sie": "dachten sich aus" }, "perfekt": "hat sich ausgedacht", "imperativ": "Denk dir was aus!" },
    "contoh_kalimat": [{ "de": "Er hat sich ein Spiel ausgedacht.", "id": "Dia mengarang sebuah permainan." }]
  },
  {
    "id": "beschliessen-649",
    "level": "B2",
    "infinitiv": "beschließen",
    "arti": "memutuskan dalam rapat",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "beschließe", "du": "beschließt", "er_sie_es": "beschließt", "wir": "beschließen", "ihr": "beschließt", "sie_Sie": "beschließen" }, "praeteritum": { "ich": "beschloss", "du": "beschlossest", "er_sie_es": "beschloss", "wir": "beschlossen", "ihr": "beschlosst", "sie_Sie": "beschlossen" }, "perfekt": "hat beschlossen", "imperativ": "Beschließe!/Beschließt!/Beschließen Sie!" },
    "contoh_kalimat": [{ "de": "Der Rat hat den Neubau beschlossen.", "id": "Dewan memutuskan pembangunan baru." }]
  },
  {
    "id": "anfechten-650",
    "level": "B2",
    "infinitiv": "anfechten",
    "arti": "menggugat vonis hukum",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "fechte an", "du": "fichtst an", "er_sie_es": "ficht an", "wir": "fechten an", "ihr": "fechtet an", "sie_Sie": "fechten an" }, "praeteritum": { "ich": "focht an", "du": "fochtst an", "er_sie_es": "focht an", "wir": "fochten an", "ihr": "fochtet an", "sie_Sie": "fochten an" }, "perfekt": "hat angefochten", "imperativ": "Ficht an!" },
    "contoh_kalimat": [{ "de": "Der Anwalt ficht das Urteil an.", "id": "Pengacara menggugat vonis tersebut." }]
  },
  {
    "id": "klagen-651",
    "level": "B1",
    "infinitiv": "klagen",
    "arti": "mengeluh sakit, menggugat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "klage", "du": "klagst", "er_sie_es": "klagt", "wir": "klagen", "ihr": "klagt", "sie_Sie": "klagen" }, "praeteritum": { "ich": "klagte", "du": "klagtest", "er_sie_es": "klagte", "wir": "klagten", "ihr": "klagtet", "sie_Sie": "klagten" }, "perfekt": "hat geklagt", "imperativ": "Klage!/Klagt!/Klagen Sie!" },
    "contoh_kalimat": [{ "de": "Er klagt über Kopfschmerzen.", "id": "Dia mengeluhkan sakit kepala." }]
  },
  {
    "id": "beschweren-652",
    "level": "A2",
    "infinitiv": "sich beschweren",
    "arti": "komplain resmi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "beschwere mich", "du": "beschwerst dich", "er_sie_es": "beschwert sich", "wir": "beschweren uns", "ihr": "beschwert euch", "sie_Sie": "beschweren sich" }, "praeteritum": { "ich": "beschwerte mich", "du": "beschwertest dich", "er_sie_es": "beschwerte sich", "wir": "beschwerten uns", "ihr": "beschwertet euch", "sie_Sie": "beschwerten sich" }, "perfekt": "hat sich beschwert", "imperativ": "Beschwer dich!" },
    "contoh_kalimat": [{ "de": "Er beschwert sich über den Lärm.", "id": "Dia komplain mengenai kebisingan itu." }]
  },
  {
    "id": "reklamieren-653",
    "level": "B1",
    "infinitiv": "reklamieren",
    "arti": "klaim barang rusak ke toko",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "reklamiere", "du": "reklamierst", "er_sie_es": "reklamiert", "wir": "reklamieren", "ihr": "reklamiert", "sie_Sie": "reklamieren" }, "praeteritum": { "ich": "reklamierte", "du": "reklamiertest", "er_sie_es": "reklamierte", "wir": "reklamierten", "ihr": "reklamiertet", "sie_Sie": "reklamierten" }, "perfekt": "hat reklamiert", "imperativ": "Reklamiere!" },
    "contoh_kalimat": [{ "de": "Ich habe die Ware reklamiert.", "id": "Saya mengklaim barang tersebut." }]
  },
  {
    "id": "umtauschen-654",
    "level": "A2",
    "infinitiv": "umtauschen",
    "arti": "menukar barang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "tausche um", "du": "tauschst um", "er_sie_es": "tauscht um", "wir": "tauschen um", "ihr": "tauscht um", "sie_Sie": "tauschen um" }, "praeteritum": { "ich": "tauschte um", "du": "tauschtest um", "er_sie_es": "tauschte um", "wir": "tauschten um", "ihr": "tauschtet um", "sie_Sie": "tauschten um" }, "perfekt": "hat umgetauscht", "imperativ": "Tausch um!" },
    "contoh_kalimat": [{ "de": "Kann ich die Hose umtauschen?", "id": "Bisakah saya menukar celana ini?" }]
  },
  {
    "id": "zurueckgeben-655",
    "level": "A1",
    "infinitiv": "zurückgeben",
    "arti": "mengembalikan barang pinjaman",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gebe zurück", "du": "gibst zurück", "er_sie_es": "gibt zurück", "wir": "geben zurück", "ihr": "gebt zurück", "sie_Sie": "geben zurück" }, "praeteritum": { "ich": "gab zurück", "du": "gabst zurück", "er_sie_es": "gab zurück", "wir": "gaben zurück", "ihr": "gabt zurück", "sie_Sie": "gaben zurück" }, "perfekt": "hat zurückgegeben", "imperativ": "Gib zurück!" },
    "contoh_kalimat": [{ "de": "Ich gebe das Buch zurück.", "id": "Saya mengembalikan bukunya." }]
  },
  {
    "id": "erstatten-656",
    "level": "B2",
    "infinitiv": "erstatten",
    "arti": "mengganti rugi dana",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erstatte", "du": "erstattest", "er_sie_es": "erstattet", "wir": "erstatten", "ihr": "erstattet", "sie_Sie": "erstatten" }, "praeteritum": { "ich": "erstattete", "du": "erstattetest", "er_sie_es": "erstattete", "wir": "erstatteten", "ihr": "erstattetet", "sie_Sie": "erstatteten" }, "perfekt": "hat erstattet", "imperativ": "Erstatte!" },
    "contoh_kalimat": [{ "de": "Die Bahn erstattet die Kosten.", "id": "Pihak kereta mengganti biayanya." }]
  },
  {
    "id": "entschaedigen-657",
    "level": "B2",
    "infinitiv": "entschädigen",
    "arti": "memberi kompensasi kerugian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "entschädige", "du": "entschädigst", "er_sie_es": "entschädigt", "wir": "entschädigen", "ihr": "entschädigt", "sie_Sie": "entschädigen" }, "praeteritum": { "ich": "entschädigte", "du": "entschädigtest", "er_sie_es": "entschädigte", "wir": "entschädigten", "ihr": "entschädigtet", "sie_Sie": "entschädigten" }, "perfekt": "hat entschädigt", "imperativ": "Entschädige!" },
    "contoh_kalimat": [{ "de": "Die Kunden wurden entschädigt.", "id": "Para pelanggan diberikan kompensasi." }]
  },
  {
    "id": "haften-658",
    "level": "B2",
    "infinitiv": "haften",
    "arti": "bertanggung jawab hukum",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "hafte", "du": "haftest", "er_sie_es": "haftet", "wir": "haften", "ihr": "haftet", "sie_Sie": "haften" }, "praeteritum": { "ich": "haftete", "du": "haftetest", "er_sie_es": "haftete", "wir": "hafteten", "ihr": "haftetet", "sie_Sie": "hafteten" }, "perfekt": "hat gehaftet", "imperativ": "Hafte!" },
    "contoh_kalimat": [{ "de": "Eltern haften für ihre Kinder.", "id": "Orang tua bertanggung jawab atas anak-anak mereka." }]
  },
  {
    "id": "garantieren-659",
    "level": "B1",
    "infinitiv": "garantieren",
    "arti": "menjamin mutu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "garantiere", "du": "garantierst", "er_sie_es": "garantiert", "wir": "garantieren", "ihr": "garantiert", "sie_Sie": "garantieren" }, "praeteritum": { "ich": "garantierte", "du": "garantiertest", "er_sie_es": "garantierte", "wir": "garantierten", "ihr": "garantiertet", "sie_Sie": "garantierten" }, "perfekt": "hat garantiert", "imperativ": "Garantiere!" },
    "contoh_kalimat": [{ "de": "Wir garantieren frische Ware.", "id": "Kami menjamin kesegaran barang." }]
  },
  {
    "id": "versichern-660",
    "level": "B1",
    "infinitiv": "versichern",
    "arti": "mengasuransikan barang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "versichere", "du": "versicherst", "er_sie_es": "versichert", "wir": "versichern", "ihr": "versichert", "sie_Sie": "versichern" }, "praeteritum": { "ich": "versicherte", "du": "versichertest", "er_sie_es": "versicherte", "wir": "versicherten", "ihr": "versichertet", "sie_Sie": "versicherten" }, "perfekt": "hat versichert", "imperativ": "Versichere!" },
    "contoh_kalimat": [{ "de": "Das Haus ist gut versichert.", "id": "Rumah itu diasuransikan dengan baik." }]
  },
  {
    "id": "absichern-661",
    "level": "B2",
    "infinitiv": "absichern",
    "arti": "mengamankan lokasi bahaya",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "sichere ab", "du": "sicherst ab", "er_sie_es": "sichert ab", "wir": "sichern ab", "ihr": "sichert ab", "sie_Sie": "sichern ab" }, "praeteritum": { "ich": "sicherte ab", "du": "sichertest ab", "er_sie_es": "sicherte ab", "wir": "sicherten ab", "ihr": "sichertet ab", "sie_Sie": "sicherten ab" }, "perfekt": "hat abgesichert", "imperativ": "Sichere ab!" },
    "contoh_kalimat": [{ "de": "Die Baustelle wurde abgesichert.", "id": "Lokasi proyek sudah diamankan." }]
  },
  {
    "id": "bewahren-662",
    "level": "B2",
    "infinitiv": "bewahren",
    "arti": "memelihara ketenangan/kelestarian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "vor", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "bewahre", "du": "bewahrst", "er_sie_es": "bewahrt", "wir": "bewahren", "ihr": "bewahrt", "sie_Sie": "bewahren" }, "praeteritum": { "ich": "bewahrte", "du": "bewahrtest", "er_sie_es": "bewahrte", "wir": "bewahrten", "ihr": "bewahrtet", "sie_Sie": "bewahrten" }, "perfekt": "hat bewahrt", "imperativ": "Bewahre Ruhe!" },
    "contoh_kalimat": [{ "de": "Bewahren Sie bitte Ruhe!", "id": "Mohon tetap tenang!" }]
  },
  {
    "id": "aufrechterhalten-663",
    "level": "B2",
    "infinitiv": "aufrechterhalten",
    "arti": "mempertahankan ketertiban",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "halte aufrecht", "du": "hältst aufrecht", "er_sie_es": "hält aufrecht", "wir": "halten aufrecht", "ihr": "haltet aufrecht", "sie_Sie": "halten aufrecht" }, "praeteritum": { "ich": "hielt aufrecht", "du": "hieltst aufrecht", "er_sie_es": "hielt aufrecht", "wir": "hielten aufrecht", "ihr": "hieltet aufrecht", "sie_Sie": "hielten aufrecht" }, "perfekt": "hat aufrechterhalten", "imperativ": "Halte aufrecht!" },
    "contoh_kalimat": [{ "de": "Wir müssen den Kontakt aufrechterhalten.", "id": "Kita harus mempertahankan kontak komunikasi." }]
  },
  {
    "id": "fortsetzen-664",
    "level": "B1",
    "infinitiv": "fortsetzen",
    "arti": "melanjutkan kembali",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "setze fort", "du": "setzt fort", "er_sie_es": "setzt fort", "wir": "setzen fort", "ihr": "setzt fort", "sie_Sie": "setzen fort" }, "praeteritum": { "ich": "setzte fort", "du": "setztest fort", "er_sie_es": "setzte fort", "wir": "setzten fort", "ihr": "setztet fort", "sie_Sie": "setzten fort" }, "perfekt": "hat fortgesetzt", "imperativ": "Setze fort!" },
    "contoh_kalimat": [{ "de": "Wir setzen das Meeting fort.", "id": "Kami melanjutkan rapat kembali." }]
  },
  {
    "id": "weiterfuehren-665",
    "level": "B2",
    "infinitiv": "weiterführen",
    "arti": "meneruskan bisnis/karier",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "führe weiter", "du": "führst weiter", "er_sie_es": "führt weiter", "wir": "führen weiter", "ihr": "führt weiter", "sie_Sie": "führen weiter" }, "praeteritum": { "ich": "führte weiter", "du": "führtest weiter", "er_sie_es": "führte weiter", "wir": "führten weiter", "ihr": "führtet weiter", "sie_Sie": "führten weiter" }, "perfekt": "hat weitergeführt", "imperativ": "Führe weiter!" },
    "contoh_kalimat": [{ "de": "Er führt den Betrieb weiter.", "id": "Dia meneruskan usaha tersebut." }]
  },
  {
    "id": "abbrechen-666",
    "level": "B1",
    "infinitiv": "abbrechen",
    "arti": "berhenti kuliah dini, memutus kontak",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "breche ab", "du": "brichst ab", "er_sie_es": "bricht ab", "wir": "brechen ab", "ihr": "brecht ab", "sie_Sie": "brechen ab" }, "praeteritum": { "ich": "brach ab", "du": "brachst ab", "er_sie_es": "brach ab", "wir": "brachen ab", "ihr": "bracht ab", "sie_Sie": "brachen ab" }, "perfekt": "hat abgebrochen", "imperativ": "Brich ab!" },
    "contoh_kalimat": [{ "de": "Er hat sein Studium abgebrochen.", "id": "Dia berhenti kuliah dini." }]
  },
  {
    "id": "unterbrechen-667",
    "level": "B1",
    "infinitiv": "unterbrechen",
    "arti": "menyela pembicaraan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "unterbreche", "du": "unterbrichst", "er_sie_es": "unterbricht", "wir": "unterbrechen", "ihr": "unterbrecht", "sie_Sie": "unterbrechen" }, "praeteritum": { "ich": "unterbrach", "du": "unterbrachst", "er_sie_es": "unterbrach", "wir": "unterbrachen", "ihr": "unterbracht", "sie_Sie": "unterbrachen" }, "perfekt": "hat unterbrochen", "imperativ": "Unterbrich nicht!" },
    "contoh_kalimat": [{ "de": "Unterbrich mich bitte nicht!", "id": "Tolong jangan menyela saya!" }]
  },
  {
    "id": "aufhoeren-668",
    "level": "A2",
    "infinitiv": "aufhören",
    "arti": "berhenti beraktivitas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "höre auf", "du": "hörst auf", "er_sie_es": "hört auf", "wir": "hören auf", "ihr": "hört auf", "sie_Sie": "hören auf" }, "praeteritum": { "ich": "hörte auf", "du": "hörtest auf", "er_sie_es": "hörte auf", "wir": "hörten auf", "ihr": "hörtet auf", "sie_Sie": "hörten auf" }, "perfekt": "hat aufgehört", "imperativ": "Hör auf!" },
    "contoh_kalimat": [{ "de": "Hör bitte mit dem Lärm auf!", "id": "Berhentilah membuat kebisingan!" }]
  },
  {
    "id": "beenden-669",
    "level": "A2",
    "infinitiv": "beenden",
    "arti": "mengakhiri pekerjaan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beende", "du": "beendest", "er_sie_es": "beendet", "wir": "beenden", "ihr": "beendet", "sie_Sie": "beenden" }, "praeteritum": { "ich": "beendete", "du": "beendetest", "er_sie_es": "beendete", "wir": "beendeten", "ihr": "beendetet", "sie_Sie": "beendeten" }, "perfekt": "hat beendet", "imperativ": "Beende!" },
    "contoh_kalimat": [{ "de": "Er beendete seine Arbeit.", "id": "Dia mengakhiri pekerjaannya." }]
  },
  {
    "id": "vollenden-670",
    "level": "B2",
    "infinitiv": "vollenden",
    "arti": "merampungkan sempurna",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "vollende", "du": "vollendest", "er_sie_es": "vollendet", "wir": "vollenden", "ihr": "vollendet", "sie_Sie": "vollenden" }, "praeteritum": { "ich": "vollendete", "du": "vollendetest", "er_sie_es": "vollendete", "wir": "vollendeten", "ihr": "vollendetet", "sie_Sie": "vollendeten" }, "perfekt": "hat vollendet", "imperativ": "Vollende!" },
    "contoh_kalimat": [{ "de": "Er vollendete sein Lebenswerk.", "id": "Dia merampungkan karya hidupnya." }]
  },
  {
    "id": "fertigstellen-671",
    "level": "B1",
    "infinitiv": "fertigstellen",
    "arti": "menyelesaikan pembangunan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "stelle fertig", "du": "stellst fertig", "er_sie_es": "stellt fertig", "wir": "stellen fertig", "ihr": "stellt fertig", "sie_Sie": "stellen fertig" }, "praeteritum": { "ich": "stellte fertig", "du": "stelltest fertig", "er_sie_es": "stellte fertig", "wir": "stellten fertig", "ihr": "stelltet fertig", "sie_Sie": "stellten fertig" }, "perfekt": "hat fertiggestellt", "imperativ": "Stelle fertig!" },
    "contoh_kalimat": [{ "de": "Das Haus ist fertiggestellt.", "id": "Rumah itu sudah selesai dibangun." }]
  },
  {
    "id": "erledigen-672",
    "level": "A2",
    "infinitiv": "erledigen",
    "arti": "membereskan urusan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erledige", "du": "erledigst", "er_sie_es": "erledigt", "wir": "erledigen", "ihr": "erledigt", "sie_Sie": "erledigen" }, "praeteritum": { "ich": "erledigte", "du": "erledigtest", "er_sie_es": "erledigte", "wir": "erledigten", "ihr": "erledigtet", "sie_Sie": "erledigten" }, "perfekt": "hat erledigt", "imperativ": "Erledige!" },
    "contoh_kalimat": [{ "de": "Ich habe alles erledigt.", "id": "Saya sudah membereskan semuanya." }]
  },
  {
    "id": "ausfuehren-673",
    "level": "B1",
    "infinitiv": "ausführen",
    "arti": "menjalankan perintah, ekspor",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "führe aus", "du": "führst aus", "er_sie_es": "führt aus", "wir": "führen aus", "ihr": "führt aus", "sie_Sie": "führen aus" }, "praeteritum": { "ich": "führte aus", "du": "führtest aus", "er_sie_es": "führte aus", "wir": "führten aus", "ihr": "führtet aus", "sie_Sie": "führten aus" }, "perfekt": "hat ausgeführt", "imperativ": "Führe aus!" },
    "contoh_kalimat": [{ "de": "Der Befehl wurde ausgeführt.", "id": "Perintah tersebut telah dijalankan." }]
  },
  {
    "id": "durchfuehren-674",
    "level": "B1",
    "infinitiv": "durchführen",
    "arti": "mengadakan tes/riset",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "führe durch", "du": "führst durch", "er_sie_es": "führt durch", "wir": "führen durch", "ihr": "führt durch", "sie_Sie": "führen durch" }, "praeteritum": { "ich": "führte durch", "du": "führtest durch", "er_sie_es": "führte durch", "wir": "führten durch", "ihr": "führtet durch", "sie_Sie": "führten durch" }, "perfekt": "hat durchgeführt", "imperativ": "Führe durch!" },
    "contoh_kalimat": [{ "de": "Wir führen den Test durch.", "id": "Kami mengadakan tes tersebut." }]
  },
  {
    "id": "unternehmen-675",
    "level": "A2",
    "infinitiv": "unternehmen",
    "arti": "melakukan kegiatan wisata",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "unternehme", "du": "unternimmst", "er_sie_es": "unternimmt", "wir": "unternehmen", "ihr": "unternehmt", "sie_Sie": "unternehmen" }, "praeteritum": { "ich": "unternahm", "du": "unternahmst", "er_sie_es": "unternahm", "wir": "unternahmen", "ihr": "unternahmt", "sie_Sie": "unternahmen" }, "perfekt": "hat unternommen", "imperativ": "Unternimm was!" },
    "contoh_kalimat": [{ "de": "Wollen wir am Samstag was unternehmen?", "id": "Mau jalan-jalan di hari Sabtu?" }]
  },
  {
    "id": "leisten-676",
    "level": "B1",
    "infinitiv": "sich leisten",
    "arti": "mampu membeli",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "leiste mir", "du": "leistest dir", "er_sie_es": "leistet sich", "wir": "leisten uns", "ihr": "leistet euch", "sie_Sie": "leisten sich" }, "praeteritum": { "ich": "leistete mir", "du": "leistetest dir", "er_sie_es": "leistete sich", "wir": "leisteten uns", "ihr": "leistetet euch", "sie_Sie": "leisteten sich" }, "perfekt": "hat sich geleistet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Das neue Auto kann ich mir leisten.", "id": "Mobil baru itu mampu saya beli." }]
  },
  {
    "id": "beitragen-677",
    "level": "B2",
    "infinitiv": "beitragen",
    "arti": "berkontribusi",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "trage bei", "du": "trägst bei", "er_sie_es": "trägt bei", "wir": "tragen bei", "ihr": "tragt bei", "sie_Sie": "tragen bei" }, "praeteritum": { "ich": "trug bei", "du": "trugst bei", "er_sie_es": "trug bei", "wir": "trugen bei", "ihr": "trugt bei", "sie_Sie": "trugen bei" }, "perfekt": "hat beigetragen", "imperativ": "Trag bei!" },
    "contoh_kalimat": [{ "de": "Jeder trägt zur Rettung bei.", "id": "Semua orang berkontribusi dalam penyelamatan." }]
  },
  {
    "id": "mitwirken-678",
    "level": "B2",
    "infinitiv": "mitwirken",
    "arti": "berkolaborasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "wirke mit", "du": "wirkst mit", "er_sie_es": "wirkt mit", "wir": "wirken mit", "ihr": "wirkt mit", "sie_Sie": "wirken mit" }, "praeteritum": { "ich": "wirkte mit", "du": "wirktest mit", "er_sie_es": "wirkte mit", "wir": "wirkten mit", "ihr": "wirktet mit", "sie_Sie": "wirkten mit" }, "perfekt": "hat mitgewirkt", "imperativ": "Wirke mit!" },
    "contoh_kalimat": [{ "de": "Er hat am Film mitgewirkt.", "id": "Dia berkolaborasi dalam film tersebut." }]
  },
  {
    "id": "zusammenarbeiten-679",
    "level": "A2",
    "infinitiv": "zusammenarbeiten",
    "arti": "bekerja sama",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "arbeite zusammen", "du": "arbeitest zusammen", "er_sie_es": "arbeitet zusammen", "wir": "arbeiten zusammen", "ihr": "arbeitet zusammen", "sie_Sie": "arbeiten zusammen" }, "praeteritum": { "ich": "arbeitete zusammen", "du": "arbeitetest zusammen", "er_sie_es": "arbeitete zusammen", "wir": "arbeiteten zusammen", "ihr": "arbeitetet zusammen", "sie_Sie": "arbeiteten zusammen" }, "perfekt": "hat zusammengearbeitet", "imperativ": "Arbeitet zusammen!" },
    "contoh_kalimat": [{ "de": "Wir arbeiten eng zusammen.", "id": "Kami bekerja sama dengan erat." }]
  },
  {
    "id": "kooperieren-680",
    "level": "B2",
    "infinitiv": "kooperieren",
    "arti": "berkooperasi usaha",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "kooperiere", "du": "kooperierst", "er_sie_es": "kooperiert", "wir": "kooperieren", "ihr": "kooperiert", "sie_Sie": "kooperieren" }, "praeteritum": { "ich": "kooperierte", "du": "kooperiertest", "er_sie_es": "kooperierte", "wir": "kooperierten", "ihr": "kooperiertet", "sie_Sie": "kooperierten" }, "perfekt": "hat kooperiert", "imperativ": "Kooperiere!" },
    "contoh_kalimat": [{ "de": "Firmen kooperieren weltweit.", "id": "Perusahaan-perusahaan berkooperasi di seluruh dunia." }]
  },
  {
    "id": "konkurrieren-681",
    "level": "B2",
    "infinitiv": "konkurrieren",
    "arti": "bersaing pasar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "konkurriere", "du": "konkurrierst", "er_sie_es": "konkurriert", "wir": "konkurrieren", "ihr": "konkurriert", "sie_Sie": "konkurrieren" }, "praeteritum": { "ich": "konkurrierte", "du": "konkurriertest", "er_sie_es": "konkurrierte", "wir": "konkurrierten", "ihr": "konkurriertet", "sie_Sie": "konkurrierten" }, "perfekt": "hat konkurriert", "imperativ": "Konkurriere!" },
    "contoh_kalimat": [{ "de": "Wir konkurrieren mit Großkonzernen.", "id": "Kami bersaing dengan perusahaan-perusahaan besar." }]
  },
  {
    "id": "feilschen-682",
    "level": "B2",
    "infinitiv": "feilschen",
    "arti": "menawar harga",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "um", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "feilsche", "du": "feilschst", "er_sie_es": "feilscht", "wir": "feilschen", "ihr": "feilscht", "sie_Sie": "feilschen" }, "praeteritum": { "ich": "feilschte", "du": "feilschtest", "er_sie_es": "feilschte", "wir": "feilschten", "ihr": "feilschtet", "sie_Sie": "feilschten" }, "perfekt": "hat gefeilscht", "imperativ": "Feilsche!" },
    "contoh_kalimat": [{ "de": "Am Markt feilscht man gern.", "id": "Di pasar orang senang menawar." }]
  },
  {
    "id": "tauschen-683",
    "level": "A2",
    "infinitiv": "tauschen",
    "arti": "bertukar barang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "gegen", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "tausche", "du": "tauschst", "er_sie_es": "tauscht", "wir": "tauschen", "ihr": "tauscht", "sie_Sie": "tauschen" }, "praeteritum": { "ich": "tauschte", "du": "tauschtest", "er_sie_es": "tauschte", "wir": "tauschten", "ihr": "tauschtet", "sie_Sie": "tauschten" }, "perfekt": "hat getauscht", "imperativ": "Tausche!" },
    "contoh_kalimat": [{ "de": "Können wir den Platz tauschen?", "id": "Bolehkah kita bertukar tempat?" }]
  },
  {
    "id": "austauschen-684",
    "level": "B1",
    "infinitiv": "austauschen",
    "arti": "mengganti suku cadang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "tausche aus", "du": "tauschst aus", "er_sie_es": "tauscht aus", "wir": "tauschen aus", "ihr": "tauscht aus", "sie_Sie": "tauschen aus" }, "praeteritum": { "ich": "tauschte aus", "du": "tauschtest aus", "er_sie_es": "tauschte aus", "wir": "tauschten aus", "ihr": "tauschtet aus", "sie_Sie": "tauschten aus" }, "perfekt": "hat ausgetauscht", "imperativ": "Tausch aus!" },
    "contoh_kalimat": [{ "de": "Die Batterie muss man austauschen.", "id": "Baterainya harus diganti." }]
  },
  {
    "id": "ersetzen-685",
    "level": "B1",
    "infinitiv": "ersetzen",
    "arti": "menggantikan orang/peran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "durch", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "ersetze", "du": "ersetzt", "er_sie_es": "ersetzt", "wir": "ersetzen", "ihr": "ersetzt", "sie_Sie": "ersetzen" }, "praeteritum": { "ich": "ersetzte", "du": "ersetztest", "er_sie_es": "ersetzte", "wir": "ersetzten", "ihr": "ersetztet", "sie_Sie": "ersetzten" }, "perfekt": "hat ersetzt", "imperativ": "Ersetze!" },
    "contoh_kalimat": [{ "de": "Niemand kann dich ersetzen.", "id": "Tidak ada yang bisa menggantikanmu." }]
  },
  {
    "id": "vertreten-686",
    "level": "B1",
    "infinitiv": "vertreten",
    "arti": "mewakili tugas",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "vertrete", "du": "vertrittst", "er_sie_es": "vertritt", "wir": "vertreten", "ihr": "vertretet", "sie_Sie": "vertreten" }, "praeteritum": { "ich": "vertrat", "du": "vertratest", "er_sie_es": "vertrat", "wir": "vertraten", "ihr": "vertratet", "sie_Sie": "vertraten" }, "perfekt": "hat vertreten", "imperativ": "Vertritt!" },
    "contoh_kalimat": [{ "de": "Wer vertritt den Chef?", "id": "Siapa yang mewakili atasan?" }]
  },
  {
    "id": "repraesentieren-687",
    "level": "B2",
    "infinitiv": "repräsentieren",
    "arti": "mewakili institusi/negara",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "repräsentiere", "du": "repräsentierst", "er_sie_es": "repräsentiert", "wir": "repräsentieren", "ihr": "repräsentiert", "sie_Sie": "repräsentieren" }, "praeteritum": { "ich": "repräsentierte", "du": "repräsentiertest", "er_sie_es": "repräsentierte", "wir": "repräsentierten", "ihr": "repräsentiertet", "sie_Sie": "repräsentierten" }, "perfekt": "hat repräsentiert", "imperativ": "Repräsentiere!" },
    "contoh_kalimat": [{ "de": "Er repräsentiert die Schule.", "id": "Dia mewakili pihak sekolah." }]
  },
  {
    "id": "symbolisieren-688",
    "level": "B2",
    "infinitiv": "symbolisieren",
    "arti": "melambangkan arti",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "symbolisiere", "du": "symbolisierst", "er_sie_es": "symbolisiert", "wir": "symbolisieren", "ihr": "symbolisiert", "sie_Sie": "symbolisieren" }, "praeteritum": { "ich": "symbolisierte", "du": "symbolisiertest", "er_sie_es": "symbolisierte", "wir": "symbolisierten", "ihr": "symbolisiertet", "sie_Sie": "symbolisierten" }, "perfekt": "hat symbolisiert", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Weiß symbolisiert Reinheit.", "id": "Putih melambangkan kesucian." }]
  },
  {
    "id": "bedeuten-689",
    "level": "A1",
    "infinitiv": "bedeuten",
    "arti": "berarti, bermakna",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bedeute", "du": "bedeutest", "er_sie_es": "bedeutet", "wir": "bedeuten", "ihr": "bedeutet", "sie_Sie": "bedeuten" }, "praeteritum": { "ich": "bedeutete", "du": "bedeutetest", "er_sie_es": "bedeutete", "wir": "bedeuteten", "ihr": "bedeutetet", "sie_Sie": "bedeuteten" }, "perfekt": "hat bedeutet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Was bedeutet dieses Wort?", "id": "Apa arti kata ini?" }]
  },
  {
    "id": "beinhalten-690",
    "level": "B2",
    "infinitiv": "beinhalten",
    "arti": "memuat materi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beinhalte", "du": "beinhaltet", "er_sie_es": "beinhaltet", "wir": "beinhalten", "ihr": "beinhaltet", "sie_Sie": "beinhalten" }, "praeteritum": { "ich": "beinhaltete", "du": "beinhaltetest", "er_sie_es": "beinhaltete", "wir": "beinhalteten", "ihr": "beinhaltetet", "sie_Sie": "beinhalteten" }, "perfekt": "hat beinhaltet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Kurs beinhaltet alle Themen.", "id": "Kursus itu memuat seluruh materi." }]
  },
  {
    "id": "enthalten-691",
    "level": "B1",
    "infinitiv": "enthalten",
    "arti": "mengandung zat/gula",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "enthalte", "du": "enthältst", "er_sie_es": "enthält", "wir": "enthalten", "ihr": "enthaltet", "sie_Sie": "enthalten" }, "praeteritum": { "ich": "enthielt", "du": "enthieltst", "er_sie_es": "enthielt", "wir": "enthielten", "ihr": "enthieltet", "sie_Sie": "enthielten" }, "perfekt": "hat enthalten", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Tee enthält kein Fett.", "id": "Teh tidak mengandung lemak." }]
  },
  {
    "id": "umfassen-692",
    "level": "B2",
    "infinitiv": "umfassen",
    "arti": "mencakup halaman/topik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "umfasse", "du": "umfasst", "er_sie_es": "umfasst", "wir": "umfassen", "ihr": "umfasst", "sie_Sie": "umfassen" }, "praeteritum": { "ich": "umfasste", "du": "umfasstest", "er_sie_es": "umfasste", "wir": "umfassten", "ihr": "umfasstet", "sie_Sie": "umfassten" }, "perfekt": "hat umfasst", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Das Werk umfasst drei Bände.", "id": "Karya tersebut mencakup tiga jilid." }]
  },
  {
    "id": "einschliessen-693",
    "level": "B1",
    "infinitiv": "einschließen",
    "arti": "menyertakan biaya",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schließe ein", "du": "schließt ein", "er_sie_es": "schließt ein", "wir": "schließen ein", "ihr": "schließt ein", "sie_Sie": "schließen ein" }, "praeteritum": { "ich": "schloss ein", "du": "schlossest ein", "er_sie_es": "schloss ein", "wir": "schlossen ein", "ihr": "schlosst ein", "sie_Sie": "schlossen ein" }, "perfekt": "hat eingeschlossen", "imperativ": "Schließ ein!" },
    "contoh_kalimat": [{ "de": "Der Preis schließt Frühstück ein.", "id": "Harga sudah termasuk sarapan." }]
  },
  {
    "id": "ausschliessen-694",
    "level": "B1",
    "infinitiv": "ausschließen",
    "arti": "mengecualikan kemungkinan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schließe aus", "du": "schließt aus", "er_sie_es": "schließt aus", "wir": "schließen aus", "ihr": "schließt aus", "sie_Sie": "schließen aus" }, "praeteritum": { "ich": "schloss aus", "du": "schlossest aus", "er_sie_es": "schloss aus", "wir": "schlossen aus", "ihr": "schlosst aus", "sie_Sie": "schlossen aus" }, "perfekt": "hat ausgeschlossen", "imperativ": "Schließ aus!" },
    "contoh_kalimat": [{ "de": "Das kann man nicht ausschließen.", "id": "Hal itu tidak bisa dikesampingkan." }]
  },
  {
    "id": "beschraenken-695",
    "level": "B2",
    "infinitiv": "beschränken",
    "arti": "membatasi waktu/jumlah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "beschränke", "du": "beschränkst", "er_sie_es": "beschränkt", "wir": "beschränken", "ihr": "beschränkt", "sie_Sie": "beschränken" }, "praeteritum": { "ich": "beschränkte", "du": "beschränktest", "er_sie_es": "beschränkte", "wir": "beschränkten", "ihr": "beschränktet", "sie_Sie": "beschränkten" }, "perfekt": "hat beschränkt", "imperativ": "Beschränk dich!" },
    "contoh_kalimat": [{ "de": "Bitte auf das Wesentliche beschränken!", "id": "Harap batasi pada hal pokok saja!" }]
  },
  {
    "id": "begrenzen-696",
    "level": "B2",
    "infinitiv": "begrenzen",
    "arti": "memagari kuota",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "begrenze", "du": "begrenzt", "er_sie_es": "begrenzt", "wir": "begrenzen", "ihr": "begrenzt", "sie_Sie": "begrenzen" }, "praeteritum": { "ich": "begrenzte", "du": "begrenztest", "er_sie_es": "begrenzte", "wir": "begrenzten", "ihr": "begrenztet", "sie_Sie": "begrenzten" }, "perfekt": "hat begrenzt", "imperativ": "Begrenze!" },
    "contoh_kalimat": [{ "de": "Die Plätze sind begrenzt.", "id": "Tempat duduknya terbatas." }]
  },
  {
    "id": "erweitern-697",
    "level": "B1",
    "infinitiv": "erweitern",
    "arti": "memperluas wawasan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erweitere", "du": "erweiterst", "er_sie_es": "erweitert", "wir": "erweitern", "ihr": "erweitert", "sie_Sie": "erweitern" }, "praeteritum": { "ich": "erweiterte", "du": "erweitertest", "er_sie_es": "erweiterte", "wir": "erweiterten", "ihr": "erweitertet", "sie_Sie": "erweiterten" }, "perfekt": "hat erweitert", "imperativ": "Erweitere!" },
    "contoh_kalimat": [{ "de": "Reisen erweitert den Horizont.", "id": "Bepergian memperluas wawasan." }]
  },
  {
    "id": "vergroessern-698",
    "level": "A2",
    "infinitiv": "vergrößern",
    "arti": "memperbesar skala",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "vergrößere", "du": "vergrößerst", "er_sie_es": "vergrößert", "wir": "vergrößern", "ihr": "vergrößert", "sie_Sie": "vergrößern" }, "praeteritum": { "ich": "vergrößerte", "du": "vergrößertest", "er_sie_es": "vergrößerte", "wir": "vergrößerten", "ihr": "vergrößertet", "sie_Sie": "vergrößerten" }, "perfekt": "hat vergrößert", "imperativ": "Vergrößere!" },
    "contoh_kalimat": [{ "de": "Wir vergrößern das Foto.", "id": "Kami memperbesar ukuran fotonya." }]
  },
  {
    "id": "verkleinern-699",
    "level": "A2",
    "infinitiv": "verkleinern",
    "arti": "memperkecil gambar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verkleinere", "du": "verkleinerst", "er_sie_es": "verkleinert", "wir": "verkleinern", "ihr": "verkleinert", "sie_Sie": "verkleinern" }, "praeteritum": { "ich": "verkleinerte", "du": "verkleinertest", "er_sie_es": "verkleinerte", "wir": "verkleinerten", "ihr": "verkleinertet", "sie_Sie": "verkleinerten" }, "perfekt": "hat verkleinert", "imperativ": "Verkleinere!" },
    "contoh_kalimat": [{ "de": "Verkleinere bitte die Datei.", "id": "Perkecil ukuran berkas itu." }]
  },
  {
    "id": "verlaengern-700",
    "level": "A2",
    "infinitiv": "verlängern",
    "arti": "memperpanjang paspor",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verlängere", "du": "verlängerst", "er_sie_es": "verlängert", "wir": "verlängern", "ihr": "verlängert", "sie_Sie": "verlängern" }, "praeteritum": { "ich": "verlängerte", "du": "verlängertest", "er_sie_es": "verlängerte", "wir": "verlängerten", "ihr": "verlängertet", "sie_Sie": "verlängerten" }, "perfekt": "hat verlängert", "imperativ": "Verlängere!" },
    "contoh_kalimat": [{ "de": "Ich muss den Pass verlängern.", "id": "Saya harus memperpanjang paspor." }]
  },
  {
    "id": "kuerzen-701",
    "level": "B1",
    "infinitiv": "kürzen",
    "arti": "memotong pendek tulisan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "kürze", "du": "kürzt", "er_sie_es": "kürzt", "wir": "kürzen", "ihr": "kürzt", "sie_Sie": "kürzen" }, "praeteritum": { "ich": "kürzte", "du": "kürztest", "er_sie_es": "kürzte", "wir": "kürzten", "ihr": "kürztet", "sie_Sie": "kürzten" }, "perfekt": "hat gekürzt", "imperativ": "Kürze!" },
    "contoh_kalimat": [{ "de": "Der Text wurde gekürzt.", "id": "Teks tersebut telah dipersingkat." }]
  },
  {
    "id": "dehnen-702",
    "level": "B1",
    "infinitiv": "dehnen",
    "arti": "meregangkan otot",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "dehne", "du": "dehnst", "er_sie_es": "dehnt", "wir": "dehnen", "ihr": "dehnt", "sie_Sie": "dehnen" }, "praeteritum": { "ich": "dehnte", "du": "dehntest", "er_sie_es": "dehnte", "wir": "dehnten", "ihr": "dehntet", "sie_Sie": "dehnten" }, "perfekt": "hat gedehnt", "imperativ": "Dehne!" },
    "contoh_kalimat": [{ "de": "Dehne deine Beine vor dem Lauf.", "id": "Regangkan kakimu sebelum lari." }]
  },
  {
    "id": "strecken-703",
    "level": "A2",
    "infinitiv": "strecken",
    "arti": "meluruskan lengan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "strecke", "du": "streckst", "er_sie_es": "streckt", "wir": "strecken", "ihr": "streckt", "sie_Sie": "strecken" }, "praeteritum": { "ich": "streckte", "du": "strecktest", "er_sie_es": "streckte", "wir": "streckten", "ihr": "strecktet", "sie_Sie": "streckten" }, "perfekt": "hat gestreckt", "imperativ": "Strecke die Arme!" },
    "contoh_kalimat": [{ "de": "Strecke bitte beide Arme aus.", "id": "Luruskan kedua lenganmu ke depan." }]
  },
  {
    "id": "beugen-704",
    "level": "B1",
    "infinitiv": "beugen",
    "arti": "menekuk lutut",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beuge", "du": "beugst", "er_sie_es": "beugt", "wir": "beugen", "ihr": "beugt", "sie_Sie": "beugen" }, "praeteritum": { "ich": "beugte", "du": "beugtest", "er_sie_es": "beugte", "wir": "beugten", "ihr": "beugtet", "sie_Sie": "beugten" }, "perfekt": "hat gebeugt", "imperativ": "Beuge die Knie!" },
    "contoh_kalimat": [{ "de": "Beugen Sie leicht die Knie.", "id": "Tekuk sedikit kedua lutut Anda." }]
  },
  {
    "id": "buecken-705",
    "level": "B1",
    "infinitiv": "sich bücken",
    "arti": "membungkuk ke bawah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bücke mich", "du": "bückst dich", "er_sie_es": "bückt sich", "wir": "bücken uns", "ihr": "bückt euch", "sie_Sie": "bücken sich" }, "praeteritum": { "ich": "bückte mich", "du": "bücktest dich", "er_sie_es": "bückte sich", "wir": "bückten uns", "ihr": "bücktet euch", "sie_Sie": "bückten sich" }, "perfekt": "hat sich gebückt", "imperativ": "Bück dich!" },
    "contoh_kalimat": [{ "de": "Er bückte sich nach dem Stift.", "id": "Dia membungkuk memungut pulpennya." }]
  },
  {
    "id": "aufrichten-706",
    "level": "B2",
    "infinitiv": "aufrichten",
    "arti": "menegakkan badan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "richte auf", "du": "richtest auf", "er_sie_es": "richtet auf", "wir": "richten auf", "ihr": "richtet auf", "sie_Sie": "richten auf" }, "praeteritum": { "ich": "richtete auf", "du": "richtetest auf", "er_sie_es": "richtete auf", "wir": "richteten auf", "ihr": "richtetet auf", "sie_Sie": "richteten auf" }, "perfekt": "hat aufgerichtet", "imperativ": "Richte dich auf!" },
    "contoh_kalimat": [{ "de": "Richte dich gerade auf!", "id": "Tegakkan postur badanmu!" }]
  },
  {
    "id": "hinknien-707",
    "level": "B2",
    "infinitiv": "sich hinknien",
    "arti": "berlutut",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "knie mich hin", "du": "kniest dich hin", "er_sie_es": "kniet sich hin", "wir": "knien uns hin", "ihr": "kniet euch hin", "sie_Sie": "knien sich hin" }, "praeteritum": { "ich": "kniete mich hin", "du": "knietest dich hin", "er_sie_es": "kniete sich hin", "wir": "knieten uns hin", "ihr": "knietet euch hin", "sie_Sie": "knieten sich hin" }, "perfekt": "hat sich hingekniet", "imperativ": "Knie dich hin!" },
    "contoh_kalimat": [{ "de": "Er kniete sich vor ihr hin.", "id": "Dia berlutut di hadapannya." }]
  },
  {
    "id": "hinlegen-708",
    "level": "A2",
    "infinitiv": "sich hinlegen",
    "arti": "merebahkan badan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "lege mich hin", "du": "legst dich hin", "er_sie_es": "legt sich hin", "wir": "legen uns hin", "ihr": "legt euch hin", "sie_Sie": "legen sich hin" }, "praeteritum": { "ich": "legte mich hin", "du": "legtest dich hin", "er_sie_es": "legte sich hin", "wir": "legten uns hin", "ihr": "legtet euch hin", "sie_Sie": "legten sich hin" }, "perfekt": "hat sich hingelegt", "imperativ": "Leg dich hin!" },
    "contoh_kalimat": [{ "de": "Ich lege mich kurz hin.", "id": "Saya merebahkan badan sebentar." }]
  },
  {
    "id": "hinsetzen-709",
    "level": "A1",
    "infinitiv": "sich hinsetzen",
    "arti": "duduk santai",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "setze mich hin", "du": "setzt dich hin", "er_sie_es": "setzt sich hin", "wir": "setzen uns hin", "ihr": "setzt euch hin", "sie_Sie": "setzen sich hin" }, "praeteritum": { "ich": "setzte mich hin", "du": "setztest dich hin", "er_sie_es": "setzte sich hin", "wir": "setzten uns hin", "ihr": "setztet euch hin", "sie_Sie": "setzten sich hin" }, "perfekt": "hat sich hingesetzt", "imperativ": "Setz dich hin!" },
    "contoh_kalimat": [{ "de": "Setz dich bitte zu uns.", "id": "Silakan duduk bersama kami." }]
  },
  {
    "id": "hinfallen-710",
    "level": "A1",
    "infinitiv": "hinfallen",
    "arti": "jatuh ke tanah",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "falle hin", "du": "fällst hin", "er_sie_es": "fällt hin", "wir": "fallen hin", "ihr": "fallt hin", "sie_Sie": "fallen hin" }, "praeteritum": { "ich": "fiel hin", "du": "fielst hin", "er_sie_es": "fiel hin", "wir": "fielen hin", "ihr": "fielt hin", "sie_Sie": "fielen hin" }, "perfekt": "ist hingefallen", "imperativ": "Fall nicht hin!" },
    "contoh_kalimat": [{ "de": "Das Kind ist auf der Straße hingefallen.", "id": "Anak itu jatuh di jalan." }]
  },
  {
    "id": "aufprallen-711",
    "level": "C1",
    "infinitiv": "aufprallen",
    "arti": "menghantam lantai dengan keras",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "pralle auf", "du": "prallst auf", "er_sie_es": "prallt auf", "wir": "prallen auf", "ihr": "prallt auf", "sie_Sie": "prallen auf" }, "praeteritum": { "ich": "prallte auf", "du": "pralltest auf", "er_sie_es": "prallte auf", "wir": "prallten auf", "ihr": "pralltet auf", "sie_Sie": "prallten auf" }, "perfekt": "ist aufgeprallt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Ball prallte auf dem Boden auf.", "id": "Bola itu menghantam lantai dengan keras." }]
  },
  {
    "id": "zurueckprallen-712",
    "level": "C1",
    "infinitiv": "zurückprallen",
    "arti": "memantul kembali",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "pralle zurück", "du": "prallst zurück", "er_sie_es": "prallt zurück", "wir": "prallen zurück", "ihr": "prallt zurück", "sie_Sie": "prallen zurück" }, "praeteritum": { "ich": "prallte zurück", "du": "pralltest zurück", "er_sie_es": "prallte zurück", "wir": "prallten zurück", "ihr": "pralltet zurück", "sie_Sie": "prallten zurück" }, "perfekt": "ist zurückgeprallt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Schuss prallte von der Latte zurück.", "id": "Tembakan memantul kembali dari mistar gawang." }]
  },
  {
    "id": "zusammenstossen-713",
    "level": "B2",
    "infinitiv": "zusammenstoßen",
    "arti": "saling bertabrakan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "stoße zusammen", "du": "stößt zusammen", "er_sie_es": "stößt zusammen", "wir": "stoßen zusammen", "ihr": "stoßt zusammen", "sie_Sie": "stoßen zusammen" }, "praeteritum": { "ich": "stieß zusammen", "du": "stießest zusammen", "er_sie_es": "stieß zusammen", "wir": "stießen zusammen", "ihr": "stießt zusammen", "sie_Sie": "stießen zusammen" }, "perfekt": "ist zusammengestoßen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Zwei Autos stießen an der Ecke zusammen.", "id": "Dua mobil bertabrakan di sudut jalan." }]
  },
  {
    "id": "ausweichen-714",
    "level": "B2",
    "infinitiv": "ausweichen",
    "arti": "menghindar dari tabrakan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "weiche aus", "du": "weichst aus", "er_sie_es": "weicht aus", "wir": "weichen aus", "ihr": "weicht aus", "sie_Sie": "weichen aus" }, "praeteritum": { "ich": "wich aus", "du": "wichst aus", "er_sie_es": "wich aus", "wir": "wichen aus", "ihr": "wicht aus", "sie_Sie": "wichen aus" }, "perfekt": "ist ausgewichen", "imperativ": "Weich aus!" },
    "contoh_kalimat": [{ "de": "Er wich dem Hindernis geschickt aus.", "id": "Dia menghindari rintangan itu dengan lincah." }]
  },
  {
    "id": "umfahren-715",
    "level": "B2",
    "infinitiv": "umfahren",
    "arti": "memutari jalan macet",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "umfahre", "du": "umfährst", "er_sie_es": "umfährt", "wir": "umfahren", "ihr": "umfahrt", "sie_Sie": "umfahren" }, "praeteritum": { "ich": "umfuhr", "du": "umfuhrst", "er_sie_es": "umfuhr", "wir": "umfuhren", "ihr": "umfuhrt", "sie_Sie": "umfuhren" }, "perfekt": "hat umfahren", "imperativ": "Umfahre!" },
    "contoh_kalimat": [{ "de": "Wir haben den Stau umfahren.", "id": "Kami memutari jalan menghindari kemacetan." }]
  },
  {
    "id": "ueberfahren-716",
    "level": "B1",
    "infinitiv": "überfahren",
    "arti": "melindas di jalan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "überfahre", "du": "überfährst", "er_sie_es": "überfährt", "wir": "überfahren", "ihr": "überfahrt", "sie_Sie": "überfahren" }, "praeteritum": { "ich": "überfuhr", "du": "überfuhrst", "er_sie_es": "überfuhr", "wir": "überfuhren", "ihr": "überfuhrt", "sie_Sie": "überfuhren" }, "perfekt": "hat überfahren", "imperativ": "Überfahre nicht!" },
    "contoh_kalimat": [{ "de": "Er hat die rote Ampel überfahren.", "id": "Dia menerobos lampu merah." }]
  },
  {
    "id": "anfahren-717",
    "level": "B1",
    "infinitiv": "anfahren",
    "arti": "mulai melaju dari posisi diam",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "fahre an", "du": "fährst an", "er_sie_es": "fährt an", "wir": "fahren an", "ihr": "fahrt an", "sie_Sie": "fahren an" }, "praeteritum": { "ich": "fuhr an", "du": "fuhrst an", "er_sie_es": "fuhr an", "wir": "fuhren an", "ihr": "fuhrt an", "sie_Sie": "fuhren an" }, "perfekt": "hat angefahren", "imperativ": "Fahr vorsichtig an!" },
    "contoh_kalimat": [{ "de": "Der Bus fuhr langsam an.", "id": "Bus itu mulai melaju perlahan." }]
  },
  {
    "id": "wegfahren-718",
    "level": "A1",
    "infinitiv": "wegfahren",
    "arti": "berkendara pergi jauh",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "fahre weg", "du": "fährst weg", "er_sie_es": "fährt weg", "wir": "fahren weg", "ihr": "fahrt weg", "sie_Sie": "fahren weg" }, "praeteritum": { "ich": "fuhr weg", "du": "fuhrst weg", "er_sie_es": "fuhr weg", "wir": "fuhren weg", "ihr": "fuhrt weg", "sie_Sie": "fuhren weg" }, "perfekt": "ist weggefahren", "imperativ": "Fahr weg!" },
    "contoh_kalimat": [{ "de": "Sie ist übers Wochenende weggefahren.", "id": "Dia pergi ke luar kota selama akhir pekan." }]
  },
  {
    "id": "herkommen-719",
    "level": "A1",
    "infinitiv": "herkommen",
    "arti": "datang mendekat kemari",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "komme her", "du": "kommst her", "er_sie_es": "kommt her", "wir": "kommen her", "ihr": "kommt her", "sie_Sie": "kommen her" }, "praeteritum": { "ich": "kam her", "du": "kamst her", "er_sie_es": "kam her", "wir": "kamen her", "ihr": "kamt her", "sie_Sie": "kamen her" }, "perfekt": "ist hergekommen", "imperativ": "Komm her!" },
    "contoh_kalimat": [{ "de": "Komm bitte kurz her!", "id": "Kemarilah sebentar!" }]
  },
  {
    "id": "weggehen-720",
    "level": "A1",
    "infinitiv": "weggehen",
    "arti": "pergi beranjak",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe weg", "du": "gehst weg", "er_sie_es": "geht weg", "wir": "gehen weg", "ihr": "geht weg", "sie_Sie": "gehen weg" }, "praeteritum": { "ich": "ging weg", "du": "gingst weg", "er_sie_es": "ging weg", "wir": "gingen weg", "ihr": "gingt weg", "sie_Sie": "gingen weg" }, "perfekt": "ist weggegangen", "imperativ": "Geh nicht weg!" },
    "contoh_kalimat": [{ "de": "Er ist vorhin weggegangen.", "id": "Dia sudah beranjak pergi tadi." }]
  },
  {
    "id": "fortgehen-721",
    "level": "B1",
    "infinitiv": "fortgehen",
    "arti": "merantau meninggalkan kampung",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe fort", "du": "gehst fort", "er_sie_es": "geht fort", "wir": "gehen fort", "ihr": "geht fort", "sie_Sie": "gehen fort" }, "praeteritum": { "ich": "ging fort", "du": "gingst fort", "er_sie_es": "ging fort", "wir": "gingen fort", "ihr": "gingt fort", "sie_Sie": "gingen fort" }, "perfekt": "ist fortgegangen", "imperativ": "Geh fort!" },
    "contoh_kalimat": [{ "de": "Viele Leute gehen aus dem Ort fort.", "id": "Banyak orang merantau meninggalkan desa itu." }]
  },
  {
    "id": "hinausgehen-722",
    "level": "A2",
    "infinitiv": "hinausgehen",
    "arti": "melangkah keluar ruangan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe hinaus", "du": "gehst hinaus", "er_sie_es": "geht hinaus", "wir": "gehen hinaus", "ihr": "geht hinaus", "sie_Sie": "gehen hinaus" }, "praeteritum": { "ich": "ging hinaus", "du": "gingst hinaus", "er_sie_es": "ging hinaus", "wir": "gingen hinaus", "ihr": "gingt hinaus", "sie_Sie": "gingen hinaus" }, "perfekt": "ist hinausgegangen", "imperativ": "Geh hinaus!" },
    "contoh_kalimat": [{ "de": "Geh bitte kurz an die frische Luft hinaus.", "id": "Keluarlah sebentar mencari udara segar." }]
  },
  {
    "id": "hineingehen-723",
    "level": "A2",
    "infinitiv": "hineingehen",
    "arti": "melangkah masuk ke dalam",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe hinein", "du": "gehst hinein", "er_sie_es": "geht hinein", "wir": "gehen hinein", "ihr": "geht hinein", "sie_Sie": "gehen hinein" }, "praeteritum": { "ich": "ging hinein", "du": "gingst hinein", "er_sie_es": "ging hinein", "wir": "gingen hinein", "ihr": "gingt hinein", "sie_Sie": "gingen hinein" }, "perfekt": "ist hineingegangen", "imperativ": "Geh hinein!" },
    "contoh_kalimat": [{ "de": "Es regnet, wir sollten hineingehen.", "id": "Hujan turun, kita sebaiknya melangkah masuk." }]
  },
  {
    "id": "rausgehen-724",
    "level": "A1",
    "infinitiv": "rausgehen",
    "arti": "pergi keluar (santai)",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe raus", "du": "gehst raus", "er_sie_es": "geht raus", "wir": "gehen raus", "ihr": "geht raus", "sie_Sie": "gehen raus" }, "praeteritum": { "ich": "ging raus", "du": "gingst raus", "er_sie_es": "ging raus", "wir": "gingen raus", "ihr": "gingt raus", "sie_Sie": "gingen raus" }, "perfekt": "ist rausgegangen", "imperativ": "Geh raus!" },
    "contoh_kalimat": [{ "de": "Die Kinder wollen im Garten spielen und rausgehen.", "id": "Anak-anak ingin keluar dan bermain di halaman." }]
  },
  {
    "id": "reingehen-725",
    "level": "A1",
    "infinitiv": "reingehen",
    "arti": "masuk ke dalam (santai)",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe rein", "du": "gehst rein", "er_sie_es": "geht rein", "wir": "gehen rein", "ihr": "geht rein", "sie_Sie": "gehen rein" }, "praeteritum": { "ich": "ging rein", "du": "gingst rein", "er_sie_es": "ging rein", "wir": "gingen rein", "ihr": "gingt rein", "sie_Sie": "gingen rein" }, "perfekt": "ist reingegangen", "imperativ": "Geh rein!" },
    "contoh_kalimat": [{ "de": "Komm, wir gehen rein, es ist kalt.", "id": "Ayo kita masuk, udara dingin." }]
  },
  {
    "id": "rauskommen-726",
    "level": "A2",
    "infinitiv": "rauskommen",
    "arti": "keluar rumah, rilis album",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "komme raus", "du": "kommst raus", "er_sie_es": "kommt raus", "wir": "kommen raus", "ihr": "kommt raus", "sie_Sie": "kommen raus" }, "praeteritum": { "ich": "kam raus", "du": "kamst raus", "er_sie_es": "kam raus", "wir": "kamen raus", "ihr": "kamt raus", "sie_Sie": "kamen raus" }, "perfekt": "ist rausgekommen", "imperativ": "Komm raus!" },
    "contoh_kalimat": [{ "de": "Das neue Album kommt nächste Woche raus.", "id": "Album baru tersebut rilis pekan depan." }]
  },
  {
    "id": "reinkommen-727",
    "level": "A1",
    "infinitiv": "reinkommen",
    "arti": "masuk ke ruangan rumah",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "komme rein", "du": "kommst rein", "er_sie_es": "kommt rein", "wir": "kommen rein", "ihr": "kommt rein", "sie_Sie": "kommen rein" }, "praeteritum": { "ich": "kam rein", "du": "kamst rein", "er_sie_es": "kam rein", "wir": "kamen rein", "ihr": "kamt rein", "sie_Sie": "kamen rein" }, "perfekt": "ist reingekommen", "imperativ": "Komm rein!" },
    "contoh_kalimat": [{ "de": "Kommen Sie bitte rein!", "id": "Silakan masuk ke dalam!" }]
  },
  {
    "id": "hochgehen-728",
    "level": "A2",
    "infinitiv": "hochgehen",
    "arti": "naik ke lantai atas",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe hoch", "du": "gehst hoch", "er_sie_es": "geht hoch", "wir": "gehen hoch", "ihr": "geht hoch", "sie_Sie": "gehen hoch" }, "praeteritum": { "ich": "ging hoch", "du": "gingst hoch", "er_sie_es": "ging hoch", "wir": "gingen hoch", "ihr": "gingt hoch", "sie_Sie": "gingen hoch" }, "perfekt": "ist hochgegangen", "imperativ": "Geh hoch!" },
    "contoh_kalimat": [{ "de": "Ich gehe kurz ins Schlafzimmer hoch.", "id": "Saya naik sebentar ke kamar tidur di atas." }]
  },
  {
    "id": "runtergehen-729",
    "level": "A2",
    "infinitiv": "runtergehen",
    "arti": "turun tangga ke bawah",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe runter", "du": "gehst runter", "er_sie_es": "geht runter", "wir": "gehen runter", "ihr": "geht runter", "sie_Sie": "gehen runter" }, "praeteritum": { "ich": "ging runter", "du": "gingst runter", "er_sie_es": "ging runter", "wir": "gingen runter", "ihr": "gingt runter", "sie_Sie": "gingen runter" }, "perfekt": "ist runtergegangen", "imperativ": "Geh runter!" },
    "contoh_kalimat": [{ "de": "Vorsichtig die Treppe runtergehen!", "id": "Turunlah tangga dengan hati-hati!" }]
  },
  {
    "id": "hochkommen-730",
    "level": "A2",
    "infinitiv": "hochkommen",
    "arti": "bisa mendaki/naik ke atas",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "komme hoch", "du": "kommst hoch", "er_sie_es": "kommt hoch", "wir": "kommen hoch", "ihr": "kommt hoch", "sie_Sie": "kommen hoch" }, "praeteritum": { "ich": "kam hoch", "du": "kamst hoch", "er_sie_es": "kam hoch", "wir": "kamen hoch", "ihr": "kamt hoch", "sie_Sie": "kamen hoch" }, "perfekt": "ist hochgekommen", "imperativ": "Komm hoch!" },
    "contoh_kalimat": [{ "de": "Kannst du mit dem Aufzug hochkommen?", "id": "Bisakah kamu naik ke atas menggunakan lift?" }]
  },
  {
    "id": "runterkommen-731",
    "level": "A2",
    "infinitiv": "runterkommen",
    "arti": "turun ke bawah, menenangkan emosi",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "komme runter", "du": "kommst runter", "er_sie_es": "kommt runter", "wir": "kommen runter", "ihr": "kommt runter", "sie_Sie": "kommen runter" }, "praeteritum": { "ich": "kam runter", "du": "kamst runter", "er_sie_es": "kam runter", "wir": "kamen runter", "ihr": "kamt runter", "sie_Sie": "kamen runter" }, "perfekt": "ist runtergekommen", "imperativ": "Komm runter!" },
    "contoh_kalimat": [{ "de": "Atme durch und komm erst mal runter!", "id": "Tarik napas dan tenangkan dulu pikiranmu!" }]
  },
  {
    "id": "vorwaertsgehen-732",
    "level": "B1",
    "infinitiv": "vorwärtsgehen",
    "arti": "melangkah maju, membuat progres",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe vorwärts", "du": "gehst vorwärts", "er_sie_es": "geht vorwärts", "wir": "gehen vorwärts", "ihr": "geht vorwärts", "sie_Sie": "gehen vorwärts" }, "praeteritum": { "ich": "ging vorwärts", "du": "gingst vorwärts", "er_sie_es": "ging vorwärts", "wir": "gingen vorwärts", "ihr": "gingt vorwärts", "sie_Sie": "gingen vorwärts" }, "perfekt": "ist vorwärtsgegangen", "imperativ": "Geh vorwärts!" },
    "contoh_kalimat": [{ "de": "Das Projekt geht gut vorwärts.", "id": "Proyek itu mencatat kemajuan yang baik." }]
  },
  {
    "id": "rueckwaertsgehen-733",
    "level": "B1",
    "infinitiv": "rückwärtsgehen",
    "arti": "berjalan mundur",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gehe rückwärts", "du": "gehst rückwärts", "er_sie_es": "geht rückwärts", "wir": "gehen rückwärts", "ihr": "geht rückwärts", "sie_Sie": "gehen rückwärts" }, "praeteritum": { "ich": "ging rückwärts", "du": "gingst rückwärts", "er_sie_es": "ging rückwärts", "wir": "gingen rückwärts", "ihr": "gingt rückwärts", "sie_Sie": "gingen rückwärts" }, "perfekt": "ist rückwärtsgegangen", "imperativ": "Geh rückwärts!" },
    "contoh_kalimat": [{ "de": "Er ging ein paar Schritte rückwärts.", "id": "Dia melangkah beberapa tapak ke belakang." }]
  },
  {
    "id": "rueckwaertsfahren-734",
    "level": "A2",
    "infinitiv": "rückwärtsfahren",
    "arti": "memundurkan mobil saat parkir",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "fahre rückwärts", "du": "fährst rückwärts", "er_sie_es": "fährt rückwärts", "wir": "fahren rückwärts", "ihr": "fahrt rückwärts", "sie_Sie": "fahren rückwärts" }, "praeteritum": { "ich": "fuhr rückwärts", "du": "fuhrst rückwärts", "er_sie_es": "fuhr rückwärts", "wir": "fuhren rückwärts", "ihr": "fuhrt rückwärts", "sie_Sie": "fuhren rückwärts" }, "perfekt": "ist rückwärtsgefahren", "imperativ": "Fahr rückwärts!" },
    "contoh_kalimat": [{ "de": "Fahr vorsichtig in die Parklücke rückwärts.", "id": "Mundurkan mobil dengan hati-hati ke celah parkir." }]
  },
  {
    "id": "einparken-735",
    "level": "A2",
    "infinitiv": "einparken",
    "arti": "memarkirkan kendaraan tepat di slot",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "parke ein", "du": "parkst ein", "er_sie_es": "parkt ein", "wir": "parken ein", "ihr": "parkt ein", "sie_Sie": "parken ein" }, "praeteritum": { "ich": "parkte ein", "du": "parktest ein", "er_sie_es": "parkte ein", "wir": "parkten ein", "ihr": "parktet ein", "sie_Sie": "parkten ein" }, "perfekt": "hat eingeparkt", "imperativ": "Park ein!" },
    "contoh_kalimat": [{ "de": "Er kann rückwärts perfekt einparken.", "id": "Dia bisa memarkir mundur secara sempurna." }]
  },
  {
    "id": "ausparken-736",
    "level": "A2",
    "infinitiv": "ausparken",
    "arti": "mengeluarkan mobil dari area parkir",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "parke aus", "du": "parkst aus", "er_sie_es": "parkt aus", "wir": "parken aus", "ihr": "parkt aus", "sie_Sie": "parken aus" }, "praeteritum": { "ich": "parkte aus", "du": "parktest aus", "er_sie_es": "parkte aus", "wir": "parkten aus", "ihr": "parktet aus", "sie_Sie": "parkten aus" }, "perfekt": "hat ausgeparkt", "imperativ": "Park aus!" },
    "contoh_kalimat": [{ "de": "Pass beim Ausparken auf Fußgänger auf!", "id": "Hati-hati terhadap pejalan kaki saat mengeluarkan mobil!" }]
  },
  {
    "id": "hupen-737",
    "level": "A1",
    "infinitiv": "hupen",
    "arti": "membunyikan klakson",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "hupe", "du": "hupst", "er_sie_es": "hupt", "wir": "hupen", "ihr": "hupt", "sie_Sie": "hupen" }, "praeteritum": { "ich": "hupte", "du": "huptest", "er_sie_es": "hupte", "wir": "hupten", "ihr": "huptet", "sie_Sie": "hupten" }, "perfekt": "hat gehupt", "imperativ": "Hupe nicht!" },
    "contoh_kalimat": [{ "de": "Der wütende Autofahrer hupte lautstark.", "id": "Pengemudi yang kesal itu membunyikan klakson dengan keras." }]
  },
  {
    "id": "blinken-738",
    "level": "A2",
    "infinitiv": "blinken",
    "arti": "menyalakan lampu sein mobil",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "blinke", "du": "blinkst", "er_sie_es": "blinkt", "wir": "blinken", "ihr": "blinkt", "sie_Sie": "blinken" }, "praeteritum": { "ich": "blinkte", "du": "blinktest", "er_sie_es": "blinkte", "wir": "blinkten", "ihr": "blinktet", "sie_Sie": "blinkten" }, "perfekt": "hat geblinkt", "imperativ": "Blink rechtzeitig!" },
    "contoh_kalimat": [{ "de": "Vor dem Abbiegen musst du immer blinken.", "id": "Sebelum berbelok kamu harus selalu menyalakan lampu sein." }]
  },
  {
    "id": "tanken-739",
    "level": "A1",
    "infinitiv": "tanken",
    "arti": "mengisi bahan bakar di SPBU",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "tanke", "du": "tankst", "er_sie_es": "tankt", "wir": "tanken", "ihr": "tankt", "sie_Sie": "tanken" }, "praeteritum": { "ich": "tankte", "du": "tanktest", "er_sie_es": "tankte", "wir": "tankten", "ihr": "tanktet", "sie_Sie": "tankten" }, "perfekt": "hat getankt", "imperativ": "Tanke voll!" },
    "contoh_kalimat": [{ "de": "Wir müssen an der nächsten Raststätte tanken.", "id": "Kita harus mengisi bahan bakar di rest area berikutnya." }]
  },
  {
    "id": "volltanken-740",
    "level": "A2",
    "infinitiv": "volltanken",
    "arti": "mengisi bensin sampai tangki penuh",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "tanke voll", "du": "tankst voll", "er_sie_es": "tankt voll", "wir": "tanken voll", "ihr": "tankt voll", "sie_Sie": "tanken voll" }, "praeteritum": { "ich": "tankte voll", "du": "tanktest voll", "er_sie_es": "tankte voll", "wir": "tankten voll", "ihr": "tanktet voll", "sie_Sie": "tankten voll" }, "perfekt": "hat vollgetankt", "imperativ": "Tanke voll!" },
    "contoh_kalimat": [{ "de": "Ich habe den Wagen vor der langen Fahrt vollgetankt.", "id": "Saya mengisi tangki sampai penuh sebelum menempuh perjalanan jauh." }]
  },
  {
    "id": "entladen-741",
    "level": "B2",
    "infinitiv": "entladen",
    "arti": "membongkar muatan kargo, baterai habis daya",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "entlade", "du": "entlädst", "er_sie_es": "entlädt", "wir": "entladen", "ihr": "entladet", "sie_Sie": "entladen" }, "praeteritum": { "ich": "entlud", "du": "entludst", "er_sie_es": "entlud", "wir": "entluden", "ihr": "entludet", "sie_Sie": "entluden" }, "perfekt": "hat entladen", "imperativ": "Entlade!" },
    "contoh_kalimat": [{ "de": "Der Akku hat sich über Nacht völlig entladen.", "id": "Baterai ponsel habis dayanya semalaman." }]
  },
  {
    "id": "aufladen-742",
    "level": "A2",
    "infinitiv": "aufladen",
    "arti": "mengisi ulang daya baterai (charger)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "lade auf", "du": "lädst auf", "er_sie_es": "lädt auf", "wir": "laden auf", "ihr": "ladet auf", "sie_Sie": "laden auf" }, "praeteritum": { "ich": "lud auf", "du": "ludst auf", "er_sie_es": "lud auf", "wir": "luden auf", "ihr": "ludet auf", "sie_Sie": "luden auf" }, "perfekt": "hat aufgeladen", "imperativ": "Lade das Handy auf!" },
    "contoh_kalimat": [{ "de": "Ich muss mein Smartphone dringend aufladen.", "id": "Saya harus segera mengisi daya ponsel saya." }]
  },
  {
    "id": "einschalten-743",
    "level": "A2",
    "infinitiv": "anschalten",
    "arti": "menyalakan perangkat elektronik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schalte an", "du": "schaltest an", "er_sie_es": "schaltet an", "wir": "schalten an", "ihr": "schaltet an", "sie_Sie": "schalten an" }, "praeteritum": { "ich": "schaltete an", "du": "schaltetest an", "er_sie_es": "schaltete an", "wir": "schalteten an", "ihr": "schaltetet an", "sie_Sie": "schalteten an" }, "perfekt": "hat angeschaltet", "imperativ": "Schalte das Licht an!" },
    "contoh_kalimat": [{ "de": "Schalte bitte den Fernseher an!", "id": "Nyalakan televisinya!" }]
  },
  {
    "id": "abschalten-744",
    "level": "A2",
    "infinitiv": "abschalten",
    "arti": "mematikan mesin, rehat melepas penat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schalte ab", "du": "schaltest ab", "er_sie_es": "schaltet ab", "wir": "schalten ab", "ihr": "schaltet ab", "sie_Sie": "schalten ab" }, "praeteritum": { "ich": "schaltete ab", "du": "schaltetest ab", "er_sie_es": "schaltete ab", "wir": "schalteten ab", "ihr": "schaltetet ab", "sie_Sie": "schalteten ab" }, "perfekt": "hat abgeschaltet", "imperativ": "Schalte ab!" },
    "contoh_kalimat": [{ "de": "Im Urlaub kann er endlich richtig abschalten.", "id": "Saat liburan akhirnya dia bisa melepas penat sepenuhnya." }]
  },
  {
    "id": "umschalten-745",
    "level": "A2",
    "infinitiv": "umschalten",
    "arti": "berganti saluran televisi/radio",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schalte um", "du": "schaltest um", "er_sie_es": "schaltet um", "wir": "schalten um", "ihr": "schaltet um", "sie_Sie": "schalten um" }, "praeteritum": { "ich": "schaltete um", "du": "schaltetest um", "er_sie_es": "schaltete um", "wir": "schalteten um", "ihr": "schaltetet um", "sie_Sie": "schalteten um" }, "perfekt": "hat umgeschaltet", "imperativ": "Schalte um!" },
    "contoh_kalimat": [{ "de": "Schalte bitte auf das Erste Programm um.", "id": "Pindahkan siaran ke saluran pertama." }]
  },
  {
    "id": "weiterleiten-746",
    "level": "B1",
    "infinitiv": "durchstellen",
    "arti": "menyambungkan saluran panggilan telepon",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "stelle durch", "du": "stellst durch", "er_sie_es": "stellt durch", "wir": "stellen durch", "ihr": "stellt durch", "sie_Sie": "stellen durch" }, "praeteritum": { "ich": "stellte durch", "du": "stelltest durch", "er_sie_es": "stellte durch", "wir": "stellten durch", "ihr": "stelltet durch", "sie_Sie": "stellten durch" }, "perfekt": "hat durchgestellt", "imperativ": "Stellen Sie mich durch!" },
    "contoh_kalimat": [{ "de": "Ich stelle Sie sofort zur Abteilungsleiterin durch.", "id": "Saya akan langsung menyambungkan telepon Anda ke kepala divisi." }]
  },
  {
    "id": "auflegen-747",
    "level": "A2",
    "infinitiv": "auflegen",
    "arti": "menutup sambungan telepon",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "lege auf", "du": "legst auf", "er_sie_es": "legt auf", "wir": "legen auf", "ihr": "legt auf", "sie_Sie": "legen auf" }, "praeteritum": { "ich": "legte auf", "du": "legtest auf", "er_sie_es": "legte auf", "wir": "legten auf", "ihr": "legtet auf", "sie_Sie": "legten auf" }, "perfekt": "hat aufgelegt", "imperativ": "Leg nicht auf!" },
    "contoh_kalimat": [{ "de": "Warte kurz, leg bitte noch nicht auf!", "id": "Tunggu sebentar, jangan tutup teleponnya dulu!" }]
  },
  {
    "id": "abheben-748",
    "level": "A2",
    "infinitiv": "abheben",
    "arti": "mengangkat telepon, menarik uang di ATM",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "hebe ab", "du": "hebst ab", "er_sie_es": "hebt ab", "wir": "heben ab", "ihr": "hebt ab", "sie_Sie": "heben ab" }, "praeteritum": { "ich": "hob ab", "du": "hobst ab", "er_sie_es": "hob ab", "wir": "hoben ab", "ihr": "hobt ab", "sie_Sie": "hoben ab" }, "perfekt": "hat abgehoben", "imperativ": "Heb ab!" },
    "contoh_kalimat": [{ "de": "Ich muss am Automaten noch Bargeld abheben.", "id": "Saya masih harus menarik uang tunai di ATM." }]
  },
  {
    "id": "einzahlen-749",
    "level": "B1",
    "infinitiv": "einzahlen",
    "arti": "menyetor tunai ke rekening bank",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "zahle ein", "du": "zahlst ein", "er_sie_es": "zahlt ein", "wir": "zahlen ein", "ihr": "zahlt ein", "sie_Sie": "zahlen ein" }, "praeteritum": { "ich": "zahlte ein", "du": "zahltest ein", "er_sie_es": "zahlte ein", "wir": "zahlten ein", "ihr": "zahltet ein", "sie_Sie": "zahlten ein" }, "perfekt": "hat eingezahlt", "imperativ": "Zahle ein!" },
    "contoh_kalimat": [{ "de": "Er hat das Geld auf sein Sparkonto eingezahlt.", "id": "Dia menyetorkan uang itu ke rekening tabungannya." }]
  },
  {
    "id": "auszahlen-750",
    "level": "B2",
    "infinitiv": "auszahlen",
    "arti": "mencairkan dana, membuahkan hasil (sich auszahlen)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "zahle aus", "du": "zahlst aus", "er_sie_es": "zahlt aus", "wir": "zahlen aus", "ihr": "zahlt aus", "sie_Sie": "zahlen aus" }, "praeteritum": { "ich": "zahlte aus", "du": "zahltest aus", "er_sie_es": "zahlte aus", "wir": "zahlten aus", "ihr": "zahltet aus", "sie_Sie": "zahlten aus" }, "perfekt": "hat ausgezahlt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Fleiß zahlt sich am Ende immer aus.", "id": "Kerja keras pada akhirnya selalu membuahkan hasil." }]
  },
  {
    "id": "ueberweisen-751",
    "level": "A2",
    "infinitiv": "überweisen",
    "arti": "mentransfer uang rekening",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "überweise", "du": "überweist", "er_sie_es": "überweist", "wir": "überweisen", "ihr": "überweist", "sie_Sie": "überweisen" }, "praeteritum": { "ich": "überwies", "du": "überwiesest", "er_sie_es": "überwies", "wir": "überwiesen", "ihr": "überwiest", "sie_Sie": "überwiesen" }, "perfekt": "hat überwiesen", "imperativ": "Überweise das Geld!" },
    "contoh_kalimat": [{ "de": "Ich überweise den Rechnungsbetrag heute noch.", "id": "Saya akan mentransfer nominal tagihan hari ini juga." }]
  },
  {
    "id": "abbuchen-752",
    "level": "B1",
    "infinitiv": "abbuchen",
    "arti": "mendebit saldo rekening otomatis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "buche ab", "du": "buchst ab", "er_sie_es": "bucht ab", "wir": "buchen ab", "ihr": "bucht ab", "sie_Sie": "buchen ab" }, "praeteritum": { "ich": "buchte ab", "du": "buchtest ab", "er_sie_es": "buchte ab", "wir": "buchten ab", "ihr": "buchtet ab", "sie_Sie": "buchten ab" }, "perfekt": "hat abgebucht", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Betrag wird monatlich vom Konto abgebucht.", "id": "Nominal itu didebit setiap bulan dari rekening." }]
  },
  {
    "id": "gutschreiben-753",
    "level": "B2",
    "infinitiv": "gutschreiben",
    "arti": "mengkreditkan saldo masuk ke rekening",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schreibe gut", "du": "schreibst gut", "er_sie_es": "schreibt gut", "wir": "schreiben gut", "ihr": "schreibt gut", "sie_Sie": "schreiben gut" }, "praeteritum": { "ich": "schrieb gut", "du": "schriebst gut", "er_sie_es": "schrieb gut", "wir": "schrieben gut", "ihr": "schriebt gut", "sie_Sie": "schrieben gut" }, "perfekt": "hat gutgeschrieben", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Bonus wird Ihrem Konto gutgeschrieben.", "id": "Bonus akan dikreditkan masuk ke rekening Anda." }]
  },
  {
    "id": "wechseln-754",
    "level": "A1",
    "infinitiv": "wechseln",
    "arti": "menukar valuta asing, mengganti ban",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "wechsle", "du": "wechselst", "er_sie_es": "wechselt", "wir": "wechseln", "ihr": "wechselt", "sie_Sie": "wechseln" }, "praeteritum": { "ich": "wechselte", "du": "wechseltest", "er_sie_es": "wechselte", "wir": "wechselten", "ihr": "wechseltet", "sie_Sie": "wechselten" }, "perfekt": "hat gewechselt", "imperativ": "Wechsle das Geld!" },
    "contoh_kalimat": [{ "de": "Wo kann ich hier Euro in Dollar wechseln?", "id": "Di mana saya bisa menukar euro ke dolar di sini?" }]
  },
  {
    "id": "auswechseln-755",
    "level": "B1",
    "infinitiv": "auswechseln",
    "arti": "mengganti pemain di lapangan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "wechsle aus", "du": "wechselst aus", "er_sie_es": "wechselt aus", "wir": "wechseln aus", "ihr": "wechselt aus", "sie_Sie": "wechseln aus" }, "praeteritum": { "ich": "wechselte aus", "du": "wechseltest aus", "er_sie_es": "wechselte aus", "wir": "wechselten aus", "ihr": "wechseltet aus", "sie_Sie": "wechselten aus" }, "perfekt": "hat ausgewechselt", "imperativ": "Wechsle den Spieler aus!" },
    "contoh_kalimat": [{ "de": "Der Trainer wechselte den Stürmer aus.", "id": "Pelatih mengganti penyerang itu." }]
  },
  {
    "id": "einwechseln-756",
    "level": "B1",
    "infinitiv": "einwechseln",
    "arti": "memasukkan pemain pengganti",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "wechsle ein", "du": "wechselst ein", "er_sie_es": "wechselt ein", "wir": "wechseln ein", "ihr": "wechselt ein", "sie_Sie": "wechseln ein" }, "praeteritum": { "ich": "wechselte ein", "du": "wechseltest ein", "er_sie_es": "wechselte ein", "wir": "wechselten ein", "ihr": "wechseltet ein", "sie_Sie": "wechselten ein" }, "perfekt": "hat eingewechselt", "imperativ": "Wechsle ein!" },
    "contoh_kalimat": [{ "de": "In der zweiten Halbzeit wurde er eingewechselt.", "id": "Di babak kedua dia dimasukkan sebagai pemain pengganti." }]
  },
  {
    "id": "anpassen-757",
    "level": "B1",
    "infinitiv": "anpassen",
    "arti": "menyesuaikan setelan, beradaptasi (sich anpassen)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "passe an", "du": "passt an", "er_sie_es": "passt an", "wir": "passen an", "ihr": "passt an", "sie_Sie": "passen an" }, "praeteritum": { "ich": "passte an", "du": "passtest an", "er_sie_es": "passte an", "wir": "passten an", "ihr": "passtet an", "sie_Sie": "passten an" }, "perfekt": "hat angepasst", "imperativ": "Passe dich an!" },
    "contoh_kalimat": [{ "de": "Man muss sich an das neue Umfeld anpassen.", "id": "Orang harus beradaptasi dengan lingkungan baru." }]
  },
  {
    "id": "gewoehnen-758",
    "level": "A2",
    "infinitiv": "eingewoehnen",
    "arti": "membiasakan diri tinggal di tempat baru",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "gewöhne mich ein", "du": "gewöhnst dich ein", "er_sie_es": "gewöhnt sich ein", "wir": "gewöhnen uns ein", "ihr": "gewöhnt euch ein", "sie_Sie": "gewöhnen sich ein" }, "praeteritum": { "ich": "gewöhnte mich ein", "du": "gewöhntest dich ein", "er_sie_es": "gewöhnte sich ein", "wir": "gewöhnten uns ein", "ihr": "gewöhntet euch ein", "sie_Sie": "gewöhnten sich ein" }, "perfekt": "hat sich eingewöhnt", "imperativ": "Gewöhne dich ein!" },
    "contoh_kalimat": [{ "de": "Das Kind hat sich schnell in der Kita eingewöhnt.", "id": "Anak itu cepat beradaptasi di tempat penitipan." }]
  },
  {
    "id": "integrieren-759",
    "level": "B2",
    "infinitiv": "integrieren",
    "arti": "berbaur membaur ke dalam masyarakat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "in", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "integriere", "du": "integrierst", "er_sie_es": "integriert", "wir": "integrieren", "ihr": "integriert", "sie_Sie": "integrieren" }, "praeteritum": { "ich": "integrierte", "du": "integriertest", "er_sie_es": "integrierte", "wir": "integrierten", "ihr": "integriertet", "sie_Sie": "integrierten" }, "perfekt": "hat integriert", "imperativ": "Integriert euch!" },
    "contoh_kalimat": [{ "de": "Sie haben sich vorbildlich integriert.", "id": "Mereka membaur ke dalam masyarakat dengan teladan baik." }]
  },
  {
    "id": "isolieren-760",
    "level": "B2",
    "infinitiv": "isolieren",
    "arti": "mengisolasi diri, melapisi pipa peredam",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "isoliere", "du": "isolierst", "er_sie_es": "isoliert", "wir": "isolieren", "ihr": "isoliert", "sie_Sie": "isolieren" }, "praeteritum": { "ich": "isolierte", "du": "isoliertest", "er_sie_es": "isolierte", "wir": "isolierten", "ihr": "isoliertet", "sie_Sie": "isolierten" }, "perfekt": "hat isoliert", "imperativ": "Isoliere!" },
    "contoh_kalimat": [{ "de": "Der Patient muss im Zimmer isoliert werden.", "id": "Pasien harus diisolasi di dalam kamar." }]
  },
  {
    "id": "einsperren-761",
    "level": "B1",
    "infinitiv": "einsperren",
    "arti": "mengurung di kamar tahanan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "sperre ein", "du": "sperrst ein", "er_sie_es": "sperrt ein", "wir": "sperren ein", "ihr": "sperrt ein", "sie_Sie": "sperren ein" }, "praeteritum": { "ich": "sperrte ein", "du": "sperrtest ein", "er_sie_es": "sperrte ein", "wir": "sperrten ein", "ihr": "sperrtet ein", "sie_Sie": "sperrten ein" }, "perfekt": "hat eingesperrt", "imperativ": "Sperre nicht ein!" },
    "contoh_kalimat": [{ "de": "Der Hund wurde versehentlich eingesperrt.", "id": "Anjing itu tidak sengaja terkunci terkurung di dalam." }]
  },
  {
    "id": "freilassen-762",
    "level": "B1",
    "infinitiv": "freilassen",
    "arti": "membebaskan tawanan/burung",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "lasse frei", "du": "lässt frei", "er_sie_es": "lässt frei", "wir": "lassen frei", "ihr": "lasst frei", "sie_Sie": "lassen frei" }, "praeteritum": { "ich": "ließ frei", "du": "ließest frei", "er_sie_es": "ließ frei", "wir": "ließen frei", "ihr": "ließt frei", "sie_Sie": "ließen frei" }, "perfekt": "hat freigelassen", "imperativ": "Lass frei!" },
    "contoh_kalimat": [{ "de": "Die Geiseln wurden gestern freigelassen.", "id": "Para sandera dibebaskan kemarin." }]
  },
  {
    "id": "befreien-763",
    "level": "B1",
    "infinitiv": "befreien",
    "arti": "membebaskan dari perbudakan/pajak",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "befreie", "du": "befreist", "er_sie_es": "befreit", "wir": "befreien", "ihr": "befreit", "sie_Sie": "befreien" }, "praeteritum": { "ich": "befreite", "du": "befreitest", "er_sie_es": "befreite", "wir": "befreiten", "ihr": "befreitet", "sie_Sie": "befreiten" }, "perfekt": "hat befreit", "imperativ": "Befreie!" },
    "contoh_kalimat": [{ "de": "Er wurde von der Gebühr befreit.", "id": "Dia dibebaskan dari biaya tersebut." }]
  },
  {
    "id": "erloesen-764",
    "level": "C1",
    "infinitiv": "erlösen",
    "arti": "melepaskan dari penderitaan/dosa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "erlöse", "du": "erlöst", "er_sie_es": "erlöst", "wir": "erlösen", "ihr": "erlöst", "sie_Sie": "erlösen" }, "praeteritum": { "ich": "erlöste", "du": "erlöstest", "er_sie_es": "erlöste", "wir": "erlösten", "ihr": "erlöstet", "sie_Sie": "erlösten" }, "perfekt": "hat erlöst", "imperativ": "Erlöse uns!" },
    "contoh_kalimat": [{ "de": "Der Tod erlöste ihn von seinen schweren Qualen.", "id": "Maut melepaskannya dari penderitaan berat." }]
  },
  {
    "id": "retten-765",
    "level": "B1",
    "infinitiv": "bergen",
    "arti": "mengevakuasi korban bencana/reruntuhan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "berge", "du": "birgst", "er_sie_es": "birgt", "wir": "bergen", "ihr": "bergt", "sie_Sie": "bergen" }, "praeteritum": { "ich": "barg", "du": "bargst", "er_sie_es": "barg", "wir": "bargen", "ihr": "bargt", "sie_Sie": "bargen" }, "perfekt": "hat geborgen", "imperativ": "Birg!" },
    "contoh_kalimat": [{ "de": "Die Helfer bargen Überlebende aus den Trümmern.", "id": "Petugas mengevakuasi korban selamat dari reruntuhan." }]
  },
  {
    "id": "evakuieren-766",
    "level": "B2",
    "infinitiv": "evakuieren",
    "arti": "mengungsikan warga",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "evakuiere", "du": "evakuierst", "er_sie_es": "evakuiert", "wir": "evakuieren", "ihr": "evakuiert", "sie_Sie": "evakuieren" }, "praeteritum": { "ich": "evakuierte", "du": "evakuiertest", "er_sie_es": "evakuierte", "wir": "evakuierten", "ihr": "evakuiertet", "sie_Sie": "evakuierten" }, "perfekt": "hat evakuiert", "imperativ": "Evakuiert das Haus!" },
    "contoh_kalimat": [{ "de": "Wegen der Bombenentschärfung wurde das Viertel evakuiert.", "id": "Kawasan itu diungsikan karena penjinakan bom." }]
  },
  {
    "id": "fliehen-767",
    "level": "A2",
    "infinitiv": "weglaufen",
    "arti": "berlari kencang kabur",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "laufe weg", "du": "läufst weg", "er_sie_es": "läuft weg", "wir": "laufen weg", "ihr": "lauft weg", "sie_Sie": "laufen weg" }, "praeteritum": { "ich": "lief weg", "du": "liefst weg", "er_sie_es": "lief weg", "wir": "liefen weg", "ihr": "lieft weg", "sie_Sie": "liefen weg" }, "perfekt": "ist weggelaufen", "imperativ": "Lauf nicht weg!" },
    "contoh_kalimat": [{ "de": "Der Hund ist vor lauter Angst weggelaufen.", "id": "Anjing itu lari terbirit-birit karena takut." }]
  },
  {
    "id": "rennen-768",
    "level": "A1",
    "infinitiv": "wegrennen",
    "arti": "lari tunggang langgang",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "renne weg", "du": "rennst weg", "er_sie_es": "rennt weg", "wir": "rennen weg", "ihr": "rennt weg", "sie_Sie": "rennen weg" }, "praeteritum": { "ich": "rannte weg", "du": "ranntest weg", "er_sie_es": "rannte weg", "wir": "rannten weg", "ihr": "ranntet weg", "sie_Sie": "rannten weg" }, "perfekt": "ist weggerannt", "imperativ": "Renn nicht weg!" },
    "contoh_kalimat": [{ "de": "Der Dieb rannte blitzschnell weg.", "id": "Pencuri itu lari secepat kilat." }]
  },
  {
    "id": "eilen-769",
    "level": "B1",
    "infinitiv": "eilen",
    "arti": "terburu-buru cepat",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "eile", "du": "eilst", "er_sie_es": "eilt", "wir": "eilen", "ihr": "eilt", "sie_Sie": "eilen" }, "praeteritum": { "ich": "eilte", "du": "eiltest", "er_sie_es": "eilte", "wir": "eilten", "ihr": "eiltet", "sie_Sie": "eilten" }, "perfekt": "ist geeilt", "imperativ": "Eile mit Weile!" },
    "contoh_kalimat": [{ "de": "Er eilte sofort zum Bahnhof.", "id": "Dia bergegas pergi ke stasiun." }]
  },
  {
    "id": "beeilen-770",
    "level": "A2",
    "infinitiv": "sich beeilen",
    "arti": "bergegas cepat agar tidak telat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beeile mich", "du": "beeilst dich", "er_sie_es": "beeilt sich", "wir": "beeilen uns", "ihr": "beeilt euch", "sie_Sie": "beeilen sich" }, "praeteritum": { "ich": "beeilte mich", "du": "beeiltest dich", "er_sie_es": "beeilte sich", "wir": "beeilten uns", "ihr": "beeiltet euch", "sie_Sie": "beeilten sich" }, "perfekt": "hat sich beeilt", "imperativ": "Beeil dich!" },
    "contoh_kalimat": [{ "de": "Beeil dich, der Bus fährt gleich ab!", "id": "Cepatlah bergegas, busnya mau berangkat!" }]
  },
  {
    "id": "troedeln-771",
    "level": "B1",
    "infinitiv": "trödeln",
    "arti": "lelet berlambat-lambat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "trödle", "du": "trödelst", "er_sie_es": "trödelt", "wir": "trödeln", "ihr": "trödelt", "sie_Sie": "trödeln" }, "praeteritum": { "ich": "trödelte", "du": "trödeltest", "er_sie_es": "trödelte", "wir": "trödelten", "ihr": "trödeltet", "sie_Sie": "trödelten" }, "perfekt": "hat getrödelt", "imperativ": "Trödel nicht!" },
    "contoh_kalimat": [{ "de": "Trödel nicht so lange beim Anziehen!", "id": "Jangan lelet begitu saat memakai baju!" }]
  },
  {
    "id": "bummeln-772",
    "level": "B1",
    "infinitiv": "bummeln",
    "arti": "jalan-jalan santai melihat toko",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bummle", "du": "bummelst", "er_sie_es": "bummelt", "wir": "bummeln", "ihr": "bummelt", "sie_Sie": "bummeln" }, "praeteritum": { "ich": "bummelte", "du": "bummeltest", "er_sie_es": "bummelte", "wir": "bummelten", "ihr": "bummeltet", "sie_Sie": "bummelten" }, "perfekt": "ist gebummelt", "imperativ": "Bummle!" },
    "contoh_kalimat": [{ "de": "Wir bummeln gern samstags durch die Fußgängerzone.", "id": "Kami suka berjalan-jalan santai di trotoar pertokoan hari Sabtu." }]
  },
  {
    "id": "spazieren-773",
    "level": "A1",
    "infinitiv": "spazieren gehen",
    "arti": "jalan-jalan santai jalan kaki",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "gehe spazieren", "du": "gehst spazieren", "er_sie_es": "geht spazieren", "wir": "gehen spazieren", "ihr": "geht spazieren", "sie_Sie": "gehen spazieren" }, "praeteritum": { "ich": "ging spazieren", "du": "gingst spazieren", "er_sie_es": "ging spazieren", "wir": "gingen spazieren", "ihr": "gingt spazieren", "sie_Sie": "gingen spazieren" }, "perfekt": "ist spazieren gegangen", "imperativ": "Geh spazieren!" },
    "contoh_kalimat": [{ "de": "Am Sonntag gehen wir im Park spazieren.", "id": "Pada hari Minggu kami jalan-jalan santai di taman." }]
  },
  {
    "id": "flanieren-774",
    "level": "C1",
    "infinitiv": "flanieren",
    "arti": "berjalan lenggang menikmati suasana kota",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "flaniere", "du": "flanierst", "er_sie_es": "flaniert", "wir": "flanieren", "ihr": "flaniert", "sie_Sie": "flanieren" }, "praeteritum": { "ich": "flanierte", "du": "flaniertest", "er_sie_es": "flanierte", "wir": "flanierten", "ihr": "flaniertet", "sie_Sie": "flanierte" }, "perfekt": "ist flaniert", "imperativ": "Flaniere!" },
    "contoh_kalimat": [{ "de": "Die Touristen flanieren über den Prachtboulevard.", "id": "Para wisatawan melenggang di sepanjang jalan raya megah." }]
  },
  {
    "id": "marschieren-775",
    "level": "B1",
    "infinitiv": "marschieren",
    "arti": "berbaris tentara, melangkah tegap",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "marschiere", "du": "marschierst", "er_sie_es": "marschiert", "wir": "marschieren", "ihr": "marschiert", "sie_Sie": "marschieren" }, "praeteritum": { "ich": "marschierte", "du": "marschiertest", "er_sie_es": "marschierte", "wir": "marschierten", "ihr": "marschiertet", "sie_Sie": "marschierten" }, "perfekt": "ist marschiert", "imperativ": "Marschiert!" },
    "contoh_kalimat": [{ "de": "Die Soldaten marschierten stundenlang durch den Wald.", "id": "Tentara berbaris melangkah berjam-jam menembus hutan." }]
  },
  {
    "id": "stapfen-776",
    "level": "B2",
    "infinitiv": "stapfen",
    "arti": "berjalan berat menembus salju/lumpur",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "stapfe", "du": "stapfst", "er_sie_es": "stapft", "wir": "stapfen", "ihr": "stapft", "sie_Sie": "stapfen" }, "praeteritum": { "ich": "stapfte", "du": "stapftest", "er_sie_es": "stapfte", "wir": "stapften", "ihr": "stapftet", "sie_Sie": "stapften" }, "perfekt": "ist gestapft", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Wir stapften mühsam durch den tiefen Schnee.", "id": "Kami berjalan tertatih menembus salju tebal." }]
  },
  {
    "id": "waten-777",
    "level": "B2",
    "infinitiv": "waten",
    "arti": "berjalan mengarungi air dangkal",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "wate", "du": "watest", "er_sie_es": "watet", "wir": "waten", "ihr": "watet", "sie_Sie": "waten" }, "praeteritum": { "ich": "watete", "du": "watetest", "er_sie_es": "watete", "wir": "wateten", "ihr": "watetet", "sie_Sie": "wateten" }, "perfekt": "ist gewatet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Die Kinder waten im flachen Bach.", "id": "Anak-anak mengarungi sungai kecil yang dangkal." }]
  },
  {
    "id": "krabbeln-778",
    "level": "A2",
    "infinitiv": "krabbeln",
    "arti": "merangkak bayi/serangga",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "krabble", "du": "krabbelst", "er_sie_es": "krabbelt", "wir": "krabbeln", "ihr": "krabbelt", "sie_Sie": "krabbeln" }, "praeteritum": { "ich": "krabbelte", "du": "krabbeltest", "er_sie_es": "krabbelte", "wir": "krabbelten", "ihr": "krabbeltet", "sie_Sie": "krabbelten" }, "perfekt": "ist gekrabbelt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Das Baby krabbelt auf dem Teppich.", "id": "Bayi itu merangkak di atas karpet." }]
  },
  {
    "id": "kriechen-779",
    "level": "B2",
    "infinitiv": "kriechen",
    "arti": "melata ular, merayap perlahan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "krieche", "du": "kriechst", "er_sie_es": "kriecht", "wir": "kriechen", "ihr": "kriecht", "sie_Sie": "kriechen" }, "praeteritum": { "ich": "kroch", "du": "krochst", "er_sie_es": "kroch", "wir": "krochen", "ihr": "krocht", "sie_Sie": "krochen" }, "perfekt": "ist gekrochen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Die Schlange kroch lautlos ins Gebüsch.", "id": "Ular itu melata tanpa suara ke semak-semak." }]
  },
  {
    "id": "hüpfen-780",
    "level": "A2",
    "infinitiv": "hüpfen",
    "arti": "melompat-lompat kecil kegirangan",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "hüpfe", "du": "hüpfst", "er_sie_es": "hüpft", "wir": "hüpfen", "ihr": "hüpft", "sie_Sie": "hüpfen" }, "praeteritum": { "ich": "hüpfte", "du": "hüpftest", "er_sie_es": "hüpfte", "wir": "hüpften", "ihr": "hüpftet", "sie_Sie": "hüpften" }, "perfekt": "ist gehüpft", "imperativ": "Hüpf!" },
    "contoh_kalimat": [{ "de": "Das Mädchen hüpfte vor Freude durchs Zimmer.", "id": "Gadis kecil itu melompat-lompat gembira di dalam kamar." }]
  },
  {
    "id": "springen-781",
    "level": "A1",
    "infinitiv": "springen",
    "arti": "melompat",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "springe", "du": "springst", "er_sie_es": "springt", "wir": "springen", "ihr": "springt", "sie_Sie": "springen" }, "praeteritum": { "ich": "sprang", "du": "sprangst", "er_sie_es": "sprang", "wir": "sprangen", "ihr": "sprangt", "sie_Sie": "sprangen" }, "perfekt": "ist gesprungen", "imperativ": "Spring!" },
    "contoh_kalimat": [{ "de": "Die Kinder springen ins Wasser.", "id": "Anak-anak melompat ke dalam air." }]
  },
  {
    "id": "tauchen-782",
    "level": "A2",
    "infinitiv": "untertauchen",
    "arti": "menyelam ke bawah air, bersembunyi buron",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "tauche unter", "du": "tauchst unter", "er_sie_es": "taucht unter", "wir": "tauchen unter", "ihr": "taucht unter", "sie_Sie": "tauchen unter" }, "praeteritum": { "ich": "tauchte unter", "du": "tauchtest unter", "er_sie_es": "tauchte unter", "wir": "tauchten unter", "ihr": "tauchtet unter", "sie_Sie": "tauchten unter" }, "perfekt": "ist untergetaucht", "imperativ": "Tauche unter!" },
    "contoh_kalimat": [{ "de": "Der Täter ist spurlos untergetaucht.", "id": "Pelaku bersembunyi buron tanpa jejak." }]
  },
  {
    "id": "auftauchen-783",
    "level": "B1",
    "infinitiv": "auftauchen",
    "arti": "muncul ke permukaan air, tiba-tiba terlihat",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "tauche auf", "du": "tauchst auf", "er_sie_es": "taucht auf", "wir": "tauchen auf", "ihr": "taucht auf", "sie_Sie": "tauchen auf" }, "praeteritum": { "ich": "tauchte auf", "du": "tauchtest auf", "er_sie_es": "tauchte auf", "wir": "tauchten auf", "ihr": "tauchtet auf", "sie_Sie": "tauchten auf" }, "perfekt": "ist aufgetaucht", "imperativ": "Tauch auf!" },
    "contoh_kalimat": [{ "de": "Plötzlich tauchte ein Problem auf.", "id": "Tiba-tiba sebuah masalah muncul." }]
  },
  {
    "id": "versenken-784",
    "level": "B2",
    "infinitiv": "versenken",
    "arti": "menenggelamkan kapal/benda",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "versenke", "du": "versenkst", "er_sie_es": "versenkt", "wir": "versenken", "ihr": "versenkt", "sie_Sie": "versenken" }, "praeteritum": { "ich": "versenkte", "du": "versenktest", "er_sie_es": "versenkte", "wir": "versenkten", "ihr": "versenktet", "sie_Sie": "versenkten" }, "perfekt": "hat versenkt", "imperativ": "Versenke!" },
    "contoh_kalimat": [{ "de": "Das U-Boot versenkte das feindliche Schiff.", "id": "Kapal selam itu menenggelamkan kapal musuh." }]
  },
  {
    "id": "schwimmen-785",
    "level": "A2",
    "infinitiv": "treiben",
    "arti": "hanyut terapung, berolahraga (Sport treiben)",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "treibe", "du": "treibst", "er_sie_es": "treibt", "wir": "treiben", "ihr": "treibt", "sie_Sie": "treiben" }, "praeteritum": { "ich": "trieb", "du": "triebst", "er_sie_es": "trieb", "wir": "trieben", "ihr": "triebt", "sie_Sie": "trieben" }, "perfekt": "ist getrieben", "imperativ": "Treibe Sport!" },
    "contoh_kalimat": [{ "de": "Ein Stück Holz trieb auf dem Fluss.", "id": "Sebongkah kayu hanyut terapung di sungai." }]
  },
  {
    "id": "antreiben-786",
    "level": "B2",
    "infinitiv": "antreiben",
    "arti": "menggerakkan mesin, mendesak cepat",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "treibe an", "du": "treibst an", "er_sie_es": "treibt an", "wir": "treiben an", "ihr": "treibt an", "sie_Sie": "treiben an" }, "praeteritum": { "ich": "trieb an", "du": "triebst an", "er_sie_es": "trieb an", "wir": "trieben an", "ihr": "triebt an", "sie_Sie": "trieben an" }, "perfekt": "hat angetrieben", "imperativ": "Treib an!" },
    "contoh_kalimat": [{ "de": "Der Motor treibt die Räder an.", "id": "Mesin itu menggerakkan roda-roda." }]
  },
  {
    "id": "fliessen-787",
    "level": "A2",
    "infinitiv": "fließen",
    "arti": "mengalir cairan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "fließe", "du": "fließt", "er_sie_es": "fließt", "wir": "fließen", "ihr": "fließt", "sie_Sie": "fließen" }, "praeteritum": { "ich": "floss", "du": "flossest", "er_sie_es": "floss", "wir": "flossen", "ihr": "flosst", "sie_Sie": "flossen" }, "perfekt": "ist geflossen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Rhein fließt durch mehrere Länder.", "id": "Sungai Rhein mengalir melintasi beberapa negara." }]
  },
  {
    "id": "stroemen-788",
    "level": "B2",
    "infinitiv": "strömen",
    "arti": "mengalir deras, berbondong-bondong datang",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "ströme", "du": "strömst", "er_sie_es": "strömt", "wir": "strömen", "ihr": "strömt", "sie_Sie": "strömen" }, "praeteritum": { "ich": "strömte", "du": "strömtest", "er_sie_es": "strömte", "wir": "strömten", "ihr": "strömtet", "sie_Sie": "strömten" }, "perfekt": "ist geströmt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Die Menschen strömten ins Stadion.", "id": "Massa berbondong-bondong mengalir ke stadion." }]
  },
  {
    "id": "tropfen-789",
    "level": "A2",
    "infinitiv": "tropfen",
    "arti": "menetes air",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "tropfe", "du": "tropfst", "er_sie_es": "tropft", "wir": "tropfen", "ihr": "tropft", "sie_Sie": "tropfen" }, "praeteritum": { "ich": "tropfte", "du": "tropftest", "er_sie_es": "tropfte", "wir": "tropften", "ihr": "tropftet", "sie_Sie": "tropften" }, "perfekt": "hat getropft", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Wasserhahn in der Küche tropft.", "id": "Keran air di dapur menetes." }]
  },
  {
    "id": "spritzen-790",
    "level": "A2",
    "infinitiv": "spritzen",
    "arti": "mencipratkan air",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "spritze", "du": "spritzt", "er_sie_es": "spritzt", "wir": "spritzen", "ihr": "spritzt", "sie_Sie": "spritzen" }, "praeteritum": { "ich": "spritzte", "du": "spritztest", "er_sie_es": "spritzte", "wir": "spritzten", "ihr": "spritztet", "sie_Sie": "spritzten" }, "perfekt": "hat gespritzt", "imperativ": "Spritz nicht!" },
    "contoh_kalimat": [{ "de": "Die Kinder spritzen sich mit Wasser nass.", "id": "Anak-anak saling mencipratkan air hingga basah." }]
  },
  {
    "id": "giessen-791",
    "level": "A1",
    "infinitiv": "gießen",
    "arti": "menyiram tanaman, menuangkan cairan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "gieße", "du": "gießt", "er_sie_es": "gießt", "wir": "gießen", "ihr": "gießt", "sie_Sie": "gießen" }, "praeteritum": { "ich": "goss", "du": "gossest", "er_sie_es": "goss", "wir": "gossen", "ihr": "gosst", "sie_Sie": "gossen" }, "perfekt": "hat gegossen", "imperativ": "Gieß die Blumen!" },
    "contoh_kalimat": [{ "de": "Vergiss nicht, die Blumen zu gießen!", "id": "Jangan lupa menyiram tanaman bunga!" }]
  },
  {
    "id": "schuetten-792",
    "level": "B1",
    "infinitiv": "schütten",
    "arti": "menuang banyak, hujan lebat mengguyur",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schütte", "du": "schüttest", "er_sie_es": "schüttet", "wir": "schütten", "ihr": "schüttet", "sie_Sie": "schütten" }, "praeteritum": { "ich": "schüttete", "du": "schüttetest", "er_sie_es": "schüttete", "wir": "schütteten", "ihr": "schüttetet", "sie_Sie": "schütteten" }, "perfekt": "hat geschüttet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Draußen schüttet es wie aus Eimern.", "id": "Di luar hujan mengguyur sangat lebat." }]
  },
  {
    "id": "verschütten-793",
    "level": "B1",
    "infinitiv": "verschütten",
    "arti": "menumpahkan cairan tanpa sengaja",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verschütte", "du": "verschüttest", "er_sie_es": "verschüttet", "wir": "verschütten", "ihr": "verschüttet", "sie_Sie": "verschütten" }, "praeteritum": { "ich": "verschüttete", "du": "verschüttetest", "er_sie_es": "verschüttete", "wir": "verschütteten", "ihr": "verschüttetet", "sie_Sie": "verschütteten" }, "perfekt": "hat verschüttet", "imperativ": "Verschütte nichts!" },
    "contoh_kalimat": [{ "de": "Er hat Kaffee auf seine Tastatur verschüttet.", "id": "Dia menumpahkan kopi ke papan ketiknya." }]
  },
  {
    "id": "trocknen-794",
    "level": "A2",
    "infinitiv": "trocknen",
    "arti": "mengeringkan pakaian, menjadi kering",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "trockne", "du": "trocknest", "er_sie_es": "trocknet", "wir": "trocknen", "ihr": "trocknet", "sie_Sie": "trocknen" }, "praeteritum": { "ich": "trocknete", "du": "trocknetest", "er_sie_es": "trocknete", "wir": "trockneten", "ihr": "trocknetet", "sie_Sie": "trockneten" }, "perfekt": "hat getrocknet", "imperativ": "Trockne die Wäsche!" },
    "contoh_kalimat": [{ "de": "Die Wäsche trocknet draußen in der Sonne.", "id": "Cucian mengering di luar di bawah terik matahari." }]
  },
  {
    "id": "abtupfen-795",
    "level": "B2",
    "infinitiv": "abwischen",
    "arti": "mengusap kotoran/debu dengan kain",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "wische ab", "du": "wischst ab", "er_sie_es": "wischt ab", "wir": "wischen ab", "ihr": "wischt ab", "sie_Sie": "wischen ab" }, "praeteritum": { "ich": "wischte ab", "du": "wischtest ab", "er_sie_es": "wischte ab", "wir": "wischten ab", "ihr": "wischtet ab", "sie_Sie": "wischten ab" }, "perfekt": "hat abgewischt", "imperativ": "Wisch den Tisch ab!" },
    "contoh_kalimat": [{ "de": "Wisch bitte den Esstisch sauber ab!", "id": "Usaplah meja makan itu sampai bersih!" }]
  },
  {
    "id": "fegen-796",
    "level": "A2",
    "infinitiv": "fegen",
    "arti": "menyapu halaman/lantai",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "fege", "du": "fegst", "er_sie_es": "fegt", "wir": "fegen", "ihr": "fegt", "sie_Sie": "fegen" }, "praeteritum": { "ich": "fegte", "du": "fegtest", "er_sie_es": "fegte", "wir": "fegten", "ihr": "fegtet", "sie_Sie": "fegten" }, "perfekt": "hat gefegt", "imperativ": "Fege den Hof!" },
    "contoh_kalimat": [{ "de": "Er fegt die Blätter vor der Haustür zusammen.", "id": "Dia menyapu dedaunan di depan pintu rumah." }]
  },
  {
    "id": "kehren-797",
    "level": "A2",
    "infinitiv": "kehren",
    "arti": "menyapu bersih, membalik arah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "kehre", "du": "kehrst", "er_sie_es": "kehrt", "wir": "kehren", "ihr": "kehrt", "sie_Sie": "kehren" }, "praeteritum": { "ich": "kehrte", "du": "kehrtest", "er_sie_es": "kehrte", "wir": "kehrten", "ihr": "kehrtet", "sie_Sie": "kehrten" }, "perfekt": "hat gekehrt", "imperativ": "Kehre den Boden!" },
    "contoh_kalimat": [{ "de": "Vor der eigenen Tür kehren.", "id": "Introspeksi diri sendiri sebelum mencela orang lain." }]
  },
  {
    "id": "umkehren-798",
    "level": "B1",
    "infinitiv": "umkehren",
    "arti": "berbalik arah haluan",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "kehre um", "du": "kehrst um", "er_sie_es": "kehrt um", "wir": "kehren um", "ihr": "kehrt um", "sie_Sie": "kehren um" }, "praeteritum": { "ich": "kehrte um", "du": "kehrtest um", "er_sie_es": "kehrte um", "wir": "kehrten um", "ihr": "kehrtet um", "sie_Sie": "kehrten um" }, "perfekt": "ist umgekehrt", "imperativ": "Kehr um!" },
    "contoh_kalimat": [{ "de": "Wegen des Unwetters mussten wir umkehren.", "id": "Karena cuaca buruk kami terpaksa putar balik." }]
  },
  {
    "id": "zurueckkehren-799",
    "level": "B1",
    "infinitiv": "zurückkehren",
    "arti": "kembali pulang dari perantauan",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "nach", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "kehre zurück", "du": "kehrst zurück", "er_sie_es": "kehrt zurück", "wir": "kehren zurück", "ihr": "kehrt zurück", "sie_Sie": "kehren zurück" }, "praeteritum": { "ich": "kehrte zurück", "du": "kehrtest zurück", "er_sie_es": "kehrte zurück", "wir": "kehrten zurück", "ihr": "kehrtet zurück", "sie_Sie": "kehrten zurück" }, "perfekt": "ist zurückgekehrt", "imperativ": "Kehre zurück!" },
    "contoh_kalimat": [{ "de": "Er ist nach vielen Jahren in seine Heimat zurückgekehrt.", "id": "Dia kembali ke tanah airnya setelah bertahun-tahun." }]
  },
  {
    "id": "heimkehren-800",
    "level": "B2",
    "infinitiv": "heimkehren",
    "arti": "pulang ke rumah tempat tinggal",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "kehre heim", "du": "kehrst heim", "er_sie_es": "kehrt heim", "wir": "kehren heim", "ihr": "kehrt heim", "sie_Sie": "kehren heim" }, "praeteritum": { "ich": "kehrte heim", "du": "kehrtest heim", "er_sie_es": "kehrte heim", "wir": "kehrten heim", "ihr": "kehrtet heim", "sie_Sie": "kehrten heim" }, "perfekt": "ist heimgekehrt", "imperativ": "Kehre heim!" },
    "contoh_kalimat": [{ "de": "Spät in der Nacht kehrte er heim.", "id": "Larut malam dia baru pulang ke rumah." }]
  },
  {
    "id": "abreisen-801",
    "level": "A2",
    "infinitiv": "abreisen",
    "arti": "berangkat pergi meninggalkan hotel",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "reise ab", "du": "reist ab", "er_sie_es": "reist ab", "wir": "reisen ab", "ihr": "reist ab", "sie_Sie": "reisen ab" }, "praeteritum": { "ich": "reiste ab", "du": "reistest ab", "er_sie_es": "reiste ab", "wir": "reisten ab", "ihr": "reistet ab", "sie_Sie": "reisten ab" }, "perfekt": "ist abgereist", "imperativ": "Reise ab!" },
    "contoh_kalimat": [{ "de": "Die Gäste reisen morgen früh ab.", "id": "Para tamu berangkat pergi besok pagi." }]
  },
  {
    "id": "anreisen-802",
    "level": "A2",
    "infinitiv": "anreisen",
    "arti": "datang tiba untuk menginap",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "reise an", "du": "reist an", "er_sie_es": "reist an", "wir": "reisen an", "ihr": "reist an", "sie_Sie": "reisen an" }, "praeteritum": { "ich": "reiste an", "du": "reistest an", "er_sie_es": "reiste an", "wir": "reisten an", "ihr": "reistet an", "sie_Sie": "reisten an" }, "perfekt": "ist angereist", "imperativ": "Reise an!" },
    "contoh_kalimat": [{ "de": "Wann reisen Sie im Hotel an?", "id": "Kapan Anda tiba di hotel?" }]
  },
  {
    "id": "einchecken-803",
    "level": "A1",
    "infinitiv": "einchecken",
    "arti": "lapor masuk di hotel/bandara (check-in)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "checke ein", "du": "checkst ein", "er_sie_es": "checkt ein", "wir": "checken ein", "ihr": "checkt ein", "sie_Sie": "checken ein" }, "praeteritum": { "ich": "checkte ein", "du": "checktest ein", "er_sie_es": "checkte ein", "wir": "checkten ein", "ihr": "checktet ein", "sie_Sie": "checkten ein" }, "perfekt": "hat eingecheckt", "imperativ": "Check ein!" },
    "contoh_kalimat": [{ "de": "Wir können ab 14 Uhr im Hotel einchecken.", "id": "Kita bisa lapor masuk di hotel mulai jam dua siang." }]
  },
  {
    "id": "auschecken-804",
    "level": "A1",
    "infinitiv": "auschecken",
    "arti": "lapor keluar hotel (check-out)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "checke aus", "du": "checkst aus", "er_sie_es": "checkt aus", "wir": "checken aus", "ihr": "checkt aus", "sie_Sie": "checken aus" }, "praeteritum": { "ich": "checkte aus", "du": "checktest aus", "er_sie_es": "checkte aus", "wir": "checkten aus", "ihr": "checktet aus", "sie_Sie": "checkten aus" }, "perfekt": "hat ausgecheckt", "imperativ": "Check aus!" },
    "contoh_kalimat": [{ "de": "Bitte bis 11 Uhr das Zimmer auschecken.", "id": "Silakan lapor keluar kamar sebelum jam 11." }]
  },
  {
    "id": "uebernachten-805",
    "level": "A2",
    "infinitiv": "übernachten",
    "arti": "menginap bermalam",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "übernachte", "du": "übernachtest", "er_sie_es": "übernachtet", "wir": "übernachten", "ihr": "übernachtet", "sie_Sie": "übernachten" }, "praeteritum": { "ich": "übernachtete", "du": "übernachtetest", "er_sie_es": "übernachtete", "wir": "übernachteten", "ihr": "übernachtetet", "sie_Sie": "übernachteten" }, "perfekt": "hat übernachtet", "imperativ": "Übernachte hier!" },
    "contoh_kalimat": [{ "de": "Wir haben in einer gemütlichen Pension übernachtet.", "id": "Kami menginap di wisma yang nyaman." }]
  },
  {
    "id": "zelten-806",
    "level": "A2",
    "infinitiv": "zelten",
    "arti": "berkemah memasang tenda",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "zelte", "du": "zeltest", "er_sie_es": "zeltet", "wir": "zelten", "ihr": "zeltet", "sie_Sie": "zelten" }, "praeteritum": { "ich": "zeltete", "du": "zeltetest", "er_sie_es": "zeltete", "wir": "zelteten", "ihr": "zeltetet", "sie_Sie": "zelteten" }, "perfekt": "hat gezeltet", "imperativ": "Zelte am See!" },
    "contoh_kalimat": [{ "de": "Im Sommer zelten wir gerne am See.", "id": "Di musim panas kami senang berkemah di tepi danau." }]
  },
  {
    "id": "campen-807",
    "level": "A2",
    "infinitiv": "campen",
    "arti": "kemping di alam bebas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "campe", "du": "campst", "er_sie_es": "campt", "wir": "campen", "ihr": "campt", "sie_Sie": "campen" }, "praeteritum": { "ich": "campte", "du": "camptest", "er_sie_es": "campte", "wir": "campten", "ihr": "camptet", "sie_Sie": "campten" }, "perfekt": "hat gecampt", "imperativ": "Campe!" },
    "contoh_kalimat": [{ "de": "Wir haben direkt am Strand gecampt.", "id": "Kami berkemah tepat di pinggir pantai." }]
  },
  {
    "id": "rasten-808",
    "level": "B2",
    "infinitiv": "rasten",
    "arti": "beristirahat di tengah perjalanan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "raste", "du": "rastest", "er_sie_es": "rastet", "wir": "rasten", "ihr": "rastet", "sie_Sie": "rasten" }, "praeteritum": { "ich": "rastete", "du": "rastetest", "er_sie_es": "rastete", "wir": "rasteten", "ihr": "rastetet", "sie_Sie": "rasteten" }, "perfekt": "hat gerastet", "imperativ": "Raste kurz!" },
    "contoh_kalimat": [{ "de": "Nach drei Stunden Wandern rasteten wir auf einer Hütte.", "id": "Setelah tiga jam mendaki, kami beristirahat di sebuah pondok." }]
  },
  {
    "id": "pausieren-809",
    "level": "B1",
    "infinitiv": "pausieren",
    "arti": "mengambil jeda istirahat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "pausiere", "du": "pausierst", "er_sie_es": "pausiert", "wir": "pausieren", "ihr": "pausiert", "sie_Sie": "pausieren" }, "praeteritum": { "ich": "pausierte", "du": "pausiertest", "er_sie_es": "pausierte", "wir": "pausierten", "ihr": "pausiertet", "sie_Sie": "pausierten" }, "perfekt": "hat pausiert", "imperativ": "Pausiere!" },
    "contoh_kalimat": [{ "de": "Das Orchester pausiert für zwanzig Minuten.", "id": "Kelompok orkestra mengambil jeda selama dua puluh menit." }]
  },
  {
    "id": "weitermachen-810",
    "level": "A2",
    "infinitiv": "weitermachen",
    "arti": "meneruskan pekerjaan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "mache weiter", "du": "machst weiter", "er_sie_es": "macht weiter", "wir": "machen weiter", "ihr": "macht weiter", "sie_Sie": "machen weiter" }, "praeteritum": { "ich": "machte weiter", "du": "machtest weiter", "er_sie_es": "machte weiter", "wir": "machten weiter", "ihr": "machtet weiter", "sie_Sie": "machten weiter" }, "perfekt": "hat weitergemacht", "imperativ": "Mach weiter!" },
    "contoh_kalimat": [{ "de": "Mach einfach weiter, du machst das toll!", "id": "Teruskan saja, kamu melakukannya dengan hebat!" }]
  },
  {
    "id": "weiterlaufen-811",
    "level": "A2",
    "infinitiv": "weiterlaufen",
    "arti": "terus berjalan kaki/berlari",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "laufe weiter", "du": "läufst weiter", "er_sie_es": "läuft weiter", "wir": "laufen weiter", "ihr": "lauft weiter", "sie_Sie": "laufen weiter" }, "praeteritum": { "ich": "lief weiter", "du": "liefst weiter", "er_sie_es": "lief weiter", "wir": "liefen weiter", "ihr": "lieft weiter", "sie_Sie": "liefen weiter" }, "perfekt": "ist weitergelaufen", "imperativ": "Lauf weiter!" },
    "contoh_kalimat": [{ "de": "Trotz des Regens sind wir weitergelaufen.", "id": "Meskipun hujan kami terus berjalan." }]
  },
  {
    "id": "weiterfahren-812",
    "level": "A2",
    "infinitiv": "weiterfahren",
    "arti": "meneruskan perjalanan kendaraan",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "fahre weiter", "du": "fährst weiter", "er_sie_es": "fährt weiter", "wir": "fahren weiter", "ihr": "fahrt weiter", "sie_Sie": "fahren weiter" }, "praeteritum": { "ich": "fuhr weiter", "du": "fuhrst weiter", "er_sie_es": "fuhr weiter", "wir": "fuhren weiter", "ihr": "fuhrt weiter", "sie_Sie": "fuhren weiter" }, "perfekt": "ist weitergefahren", "imperativ": "Fahr weiter!" },
    "contoh_kalimat": [{ "de": "Nach einer kurzen Pause fuhren wir weiter.", "id": "Setelah istirahat sebentar kami meneruskan perjalanan." }]
  },
  {
    "id": "weitersuchen-813",
    "level": "A2",
    "infinitiv": "weitersuchen",
    "arti": "terus mencari barang hilang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "suche weiter", "du": "suchst weiter", "er_sie_es": "sucht weiter", "wir": "suchen weiter", "ihr": "sucht weiter", "sie_Sie": "suchen weiter" }, "praeteritum": { "ich": "suchte weiter", "du": "suchtest weiter", "er_sie_es": "suchte weiter", "wir": "suchten weiter", "ihr": "suchtet weiter", "sie_Sie": "suchten weiter" }, "perfekt": "hat weitergesucht", "imperativ": "Such weiter!" },
    "contoh_kalimat": [{ "de": "Ich habe den Schlüssel noch nicht gefunden, ich suche weiter.", "id": "Saya belum menemukan kuncinya, saya terus mencari." }]
  },
  {
    "id": "wiederfinden-814",
    "level": "A2",
    "infinitiv": "wiederfinden",
    "arti": "menemukan kembali barang yang sempat hilang",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "finde wieder", "du": "findest wieder", "er_sie_es": "findet wieder", "wir": "finden wieder", "ihr": "findet wieder", "sie_Sie": "finden wieder" }, "praeteritum": { "ich": "fand wieder", "du": "fandest wieder", "er_sie_es": "fand wieder", "wir": "fanden wieder", "ihr": "fandet wieder", "sie_Sie": "fanden wieder" }, "perfekt": "hat wiedergefunden", "imperativ": "Finde es wieder!" },
    "contoh_kalimat": [{ "de": "Endlich habe ich mein Portemonnaie wiedergefunden.", "id": "Akhirnya saya menemukan kembali dompet saya." }]
  },
  {
    "id": "verlieren-815",
    "level": "A2",
    "infinitiv": "abhandenkommen",
    "arti": "hilang tercecer tanpa sadar",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "komme abhanden", "du": "kommst abhanden", "er_sie_es": "kommt abhanden", "wir": "kommen abhanden", "ihr": "kommt abhanden", "sie_Sie": "kommen abhanden" }, "praeteritum": { "ich": "kam abhanden", "du": "kamst abhanden", "er_sie_es": "kam abhanden", "wir": "kamen abhanden", "ihr": "kamt abhanden", "sie_Sie": "kamen abhanden" }, "perfekt": "ist abhandengekommen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Mir ist mein Ausweis abhandengekommen.", "id": "KTP saya hilang tercecer." }]
  },
  {
    "id": "verlegen-816",
    "level": "B1",
    "infinitiv": "verlegen",
    "arti": "lupa tempat menaruh barang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verlege", "du": "verlegst", "er_sie_es": "verlegt", "wir": "verlegen", "ihr": "verlegt", "sie_Sie": "verlegen" }, "praeteritum": { "ich": "verlegte", "du": "verlegtest", "er_sie_es": "verlegte", "wir": "verlegten", "ihr": "verlegtet", "sie_Sie": "verlegten" }, "perfekt": "hat verlegt", "imperativ": "Verlege es nicht!" },
    "contoh_kalimat": [{ "de": "Ich habe schon wieder meine Brille verlegt.", "id": "Saya lupa menaruh kacamata lagi." }]
  },
  {
    "id": "wiederholen-817",
    "level": "A2",
    "infinitiv": "holen",
    "arti": "mengambilkan sesuatu untuk dibawa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "hole", "du": "holst", "er_sie_es": "holt", "wir": "holen", "ihr": "holt", "sie_Sie": "holen" }, "praeteritum": { "ich": "holte", "du": "holtest", "er_sie_es": "holte", "wir": "holten", "ihr": "holtet", "sie_Sie": "holten" }, "perfekt": "hat geholt", "imperativ": "Hol das Buch!" },
    "contoh_kalimat": [{ "de": "Holst du mir bitte ein Glas Wasser?", "id": "Bisakah kamu mengambilkan segelas air untukku?" }]
  },
  {
    "id": "bringen-818",
    "level": "A1",
    "infinitiv": "herbringen",
    "arti": "membawakan kemari",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "bringe her", "du": "bringst her", "er_sie_es": "bringt her", "wir": "bringen her", "ihr": "bringt her", "sie_Sie": "bringen her" }, "praeteritum": { "ich": "brachte her", "du": "brachtest her", "er_sie_es": "brachte her", "wir": "brachten her", "ihr": "brachtet her", "sie_Sie": "brachten her" }, "perfekt": "hat hergebracht", "imperativ": "Bring das her!" },
    "contoh_kalimat": [{ "de": "Bring mir die Unterlagen bitte her.", "id": "Bawakan berkas-berkas itu kemari." }]
  },
  {
    "id": "wegtragen-819",
    "level": "B1",
    "infinitiv": "wegtragen",
    "arti": "menggotong memindahkan barang jauh",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "trage weg", "du": "trägst weg", "er_sie_es": "trägt weg", "wir": "tragen weg", "ihr": "tragt weg", "sie_Sie": "tragen weg" }, "praeteritum": { "ich": "trug weg", "du": "trugst weg", "er_sie_es": "trug weg", "wir": "trugen weg", "ihr": "trugt weg", "sie_Sie": "trugen weg" }, "perfekt": "hat weggetragen", "imperativ": "Trag das weg!" },
    "contoh_kalimat": [{ "de": "Sie trugen die Kisten vorsichtig weg.", "id": "Mereka menggotong kotak-kotak itu pergi dengan hati-hati." }]
  },
  {
    "id": "hintragen-820",
    "level": "B1",
    "infinitiv": "hintragen",
    "arti": "menggotong ke titik tertentu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "trage hin", "du": "trägst hin", "er_sie_es": "trägt hin", "wir": "tragen hin", "ihr": "tragt hin", "sie_Sie": "tragen hin" }, "praeteritum": { "ich": "trug hin", "du": "trugst hin", "er_sie_es": "trug hin", "wir": "trugen hin", "ihr": "trugt hin", "sie_Sie": "trugen hin" }, "perfekt": "hat hingetragen", "imperativ": "Trag es dorthin!" },
    "contoh_kalimat": [{ "de": "Kannst du das Sofa in die Ecke hintragen?", "id": "Bisakah kamu menggotong sofanya ke sudut sana?" }]
  },
  {
    "id": "hochtragen-821",
    "level": "A2",
    "infinitiv": "hochtragen",
    "arti": "membawa barang menaiki tangga",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "trage hoch", "du": "trägst hoch", "er_sie_es": "trägt hoch", "wir": "tragen hoch", "ihr": "tragt hoch", "sie_Sie": "tragen hoch" }, "praeteritum": { "ich": "trug hoch", "du": "trugst hoch", "er_sie_es": "trug hoch", "wir": "trugen hoch", "ihr": "trugt hoch", "sie_Sie": "trugen hoch" }, "perfekt": "hat hochgetragen", "imperativ": "Trag den Koffer hoch!" },
    "contoh_kalimat": [{ "de": "Er half mir, den schweren Koffer hochzutragen.", "id": "Dia membantu saya membawa koper berat menaiki tangga." }]
  },
  {
    "id": "runtertragen-822",
    "level": "A2",
    "infinitiv": "runtertragen",
    "arti": "membawa barang menuruni tangga",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "trage runter", "du": "trägst runter", "er_sie_es": "trägt runter", "wir": "tragen runter", "ihr": "tragt runter", "sie_Sie": "tragen runter" }, "praeteritum": { "ich": "trug runter", "du": "trugst runter", "er_sie_es": "trug runter", "wir": "trugen runter", "ihr": "trugt runter", "sie_Sie": "trugen runter" }, "perfekt": "hat runtergetragen", "imperativ": "Trag es runter!" },
    "contoh_kalimat": [{ "de": "Ich trage den Müll gleich runter.", "id": "Saya akan segera membawa turun sampahnya." }]
  },
  {
    "id": "aufheben-823",
    "level": "A2",
    "infinitiv": "aufheben",
    "arti": "memungut dari lantai, menyimpan arsip",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "hebe auf", "du": "hebst auf", "er_sie_es": "hebt auf", "wir": "heben auf", "ihr": "hebt auf", "sie_Sie": "heben auf" }, "praeteritum": { "ich": "hob auf", "du": "hobst auf", "er_sie_es": "hob auf", "wir": "hoben auf", "ihr": "hobt auf", "sie_Sie": "hoben auf" }, "perfekt": "hat aufgehoben", "imperativ": "Heb das auf!" },
    "contoh_kalimat": [{ "de": "Heb bitte das Papier vom Boden auf!", "id": "Tolong pungut kertas itu dari lantai!" }]
  },
  {
    "id": "fallenlassen-824",
    "level": "B1",
    "infinitiv": "fallenlassen",
    "arti": "menjatuhkan sengaja/tidak sengaja",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "lasse fallen", "du": "lässt fallen", "er_sie_es": "lässt fallen", "wir": "lassen fallen", "ihr": "lasst fallen", "sie_Sie": "lassen fallen" }, "praeteritum": { "ich": "ließ fallen", "du": "ließest fallen", "er_sie_es": "ließ fallen", "wir": "ließen fallen", "ihr": "ließt fallen", "sie_Sie": "ließen fallen" }, "perfekt": "hat fallengelassen", "imperativ": "Lass es nicht fallen!" },
    "contoh_kalimat": [{ "de": "Sie hat vor Schreck die Tasse fallenlassen.", "id": "Dia menjatuhkan cangkirnya karena kaget." }]
  },
  {
    "id": "werfen-825",
    "level": "B1",
    "infinitiv": "hinwerfen",
    "arti": "melemparkan ke tanah, berhenti kerja putus asa",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "werfe hin", "du": "wirfst hin", "er_sie_es": "wirft hin", "wir": "werfen hin", "ihr": "werft hin", "sie_Sie": "werfen hin" }, "praeteritum": { "ich": "warf hin", "du": "warfst hin", "er_sie_es": "warf hin", "wir": "warfen hin", "ihr": "warft hin", "sie_Sie": "warfen hin" }, "perfekt": "hat hingeworfen", "imperativ": "Wirf nicht alles hin!" },
    "contoh_kalimat": [{ "de": "Er wollte den Job vor Frust hinwerfen.", "id": "Dia ingin berhenti dari pekerjaannya karena frustrasi." }]
  },
  {
    "id": "auffangen-826",
    "level": "B2",
    "infinitiv": "auffangen",
    "arti": "menangkap bola di udara, menampung air tetesan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "fange auf", "du": "fängst auf", "er_sie_es": "fängt auf", "wir": "fangen auf", "ihr": "fangt auf", "sie_Sie": "fangen auf" }, "praeteritum": { "ich": "fing auf", "du": "fingst auf", "er_sie_es": "fing auf", "wir": "fingen auf", "ihr": "fingt auf", "sie_Sie": "fingen auf" }, "perfekt": "hat aufgefangen", "imperativ": "Fang den Ball auf!" },
    "contoh_kalimat": [{ "de": "Er fing die fallende Vase geschickt auf.", "id": "Dia menangkap vas yang jatuh itu dengan tangkas." }]
  },
  {
    "id": "fangen-827",
    "level": "A2",
    "infinitiv": "einfangen",
    "arti": "menjaring menangkap hewan lepas",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "fange ein", "du": "fängst ein", "er_sie_es": "fängt ein", "wir": "fangen ein", "ihr": "fangt ein", "sie_Sie": "fangen ein" }, "praeteritum": { "ich": "fing ein", "du": "fingst ein", "er_sie_es": "fing ein", "wir": "fingen ein", "ihr": "fingt ein", "sie_Sie": "fingen ein" }, "perfekt": "hat eingefangen", "imperativ": "Fang das Tier ein!" },
    "contoh_kalimat": [{ "de": "Die Polizei konnte den entlaufenen Hund einfangen.", "id": "Polisi berhasil menangkap anjing yang lepas itu." }]
  },
  {
    "id": "jagen-828",
    "level": "B2",
    "infinitiv": "erbeuten",
    "arti": "merampas jarahan perang/mangsa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erbeute", "du": "erbeutest", "er_sie_es": "erbeutet", "wir": "erbeuten", "ihr": "erbeutet", "sie_Sie": "erbeuten" }, "praeteritum": { "ich": "erbeutete", "du": "erbeutetest", "er_sie_es": "erbeutete", "wir": "erbeuteten", "ihr": "erbeutetet", "sie_Sie": "erbeuteten" }, "perfekt": "hat erbeutet", "imperativ": "Erbeute!" },
    "contoh_kalimat": [{ "de": "Die Diebe erbeuteten viel Bargeld.", "id": "Pencuri merampas banyak uang tunai." }]
  },
  {
    "id": "stehlen-829",
    "level": "B1",
    "infinitiv": "klauen",
    "arti": "mencuri (bahasa santai)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "klaue", "du": "klaust", "er_sie_es": "klaut", "wir": "klauen", "ihr": "klaut", "sie_Sie": "klauen" }, "praeteritum": { "ich": "klaute", "du": "klautest", "er_sie_es": "klaute", "wir": "klauten", "ihr": "klautet", "sie_Sie": "klauten" }, "perfekt": "hat geklaut", "imperativ": "Klau nicht!" },
    "contoh_kalimat": [{ "de": "Jemand hat mein Fahrrad geklaut.", "id": "Seseorang telah mencuri sepedaku." }]
  },
  {
    "id": "einbrechen-830",
    "level": "B1",
    "infinitiv": "einbrechen",
    "arti": "membobol masuk rumah mencuri",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "breche ein", "du": "brichst ein", "er_sie_es": "bricht ein", "wir": "brechen ein", "ihr": "brecht ein", "sie_Sie": "brechen ein" }, "praeteritum": { "ich": "brach ein", "du": "brachst ein", "er_sie_es": "brach ein", "wir": "brachen ein", "ihr": "bracht ein", "sie_Sie": "brachen ein" }, "perfekt": "ist eingebrochen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Diebe sind in die Bank eingebrochen.", "id": "Pencuri membobol masuk ke dalam bank." }]
  },
  {
    "id": "ermitteln-831",
    "level": "B2",
    "infinitiv": "ermitteln",
    "arti": "menyelidiki kasus kriminal",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "gegen", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "ermittle", "du": "ermittelst", "er_sie_es": "ermittelt", "wir": "ermitteln", "ihr": "ermittelt", "sie_Sie": "ermitteln" }, "praeteritum": { "ich": "ermittelte", "du": "ermitteltest", "er_sie_es": "ermittelte", "wir": "ermittelten", "ihr": "ermitteltet", "sie_Sie": "ermittelten" }, "perfekt": "hat ermittelt", "imperativ": "Ermittle!" },
    "contoh_kalimat": [{ "de": "Die Polizei ermittelt gegen den Verdächtigen.", "id": "Polisi menyelidiki tersangka." }]
  },
  {
    "id": "festnehmen-832",
    "level": "B1",
    "infinitiv": "festnehmen",
    "arti": "menangkap tersangka kejahatan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "nehme fest", "du": "nimmst fest", "er_sie_es": "nimmt fest", "wir": "nehmen fest", "ihr": "nehmt fest", "sie_Sie": "nehmen fest" }, "praeteritum": { "ich": "nahm fest", "du": "nahmst fest", "er_sie_es": "nahm fest", "wir": "nahmen fest", "ihr": "nahmt fest", "sie_Sie": "nahmen fest" }, "perfekt": "hat festgenommen", "imperativ": "Nehmt ihn fest!" },
    "contoh_kalimat": [{ "de": "Der Täter wurde sofort festgenommen.", "id": "Pelaku langsung ditangkap." }]
  },
  {
    "id": "verhaften-833",
    "level": "B1",
    "infinitiv": "verhaften",
    "arti": "menahan secara hukum pidana",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verhafte", "du": "verhaftest", "er_sie_es": "verhaftet", "wir": "verhaften", "ihr": "verhaftet", "sie_Sie": "verhaften" }, "praeteritum": { "ich": "verhaftete", "du": "verhaftetest", "er_sie_es": "verhaftete", "wir": "verhafteten", "ihr": "verhaftetet", "sie_Sie": "verhafteten" }, "perfekt": "hat verhaftet", "imperativ": "Verhafte ihn!" },
    "contoh_kalimat": [{ "de": "Er wurde wegen Betrugs verhaftet.", "id": "Dia ditahan karena penipuan." }]
  },
  {
    "id": "anklagen-834",
    "level": "B2",
    "infinitiv": "anklagen",
    "arti": "mendakwa di pengadilan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "wegen", "kasus": "Genitiv" }],
    "konjugasi": { "praesens": { "ich": "klage an", "du": "klagst an", "er_sie_es": "klagt an", "wir": "klagen an", "ihr": "klagt an", "sie_Sie": "klagen an" }, "praeteritum": { "ich": "klagte an", "du": "klagtest an", "er_sie_es": "klagte an", "wir": "klagten an", "ihr": "klagtet an", "sie_Sie": "klagten an" }, "perfekt": "hat angeklagt", "imperativ": "Klage an!" },
    "contoh_kalimat": [{ "de": "Der Staatsanwalt klagte ihn wegen Diebstahls an.", "id": "Jaksa mendakwanya atas kasus pencurian." }]
  },
  {
    "id": "verurteilen-835",
    "level": "B2",
    "infinitiv": "verurteilen",
    "arti": "menjatuhkan vonis hukuman, mengecam",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "verurteile", "du": "verurteilst", "er_sie_es": "verurteilt", "wir": "verurteilen", "ihr": "verurteilt", "sie_Sie": "verurteilen" }, "praeteritum": { "ich": "verurteilte", "du": "verurteiltest", "er_sie_es": "verurteilte", "wir": "verurteilten", "ihr": "verurteiltet", "sie_Sie": "verurteilten" }, "perfekt": "hat verurteilt", "imperativ": "Verurteile nicht voreilig!" },
    "contoh_kalimat": [{ "de": "Das Gericht verurteilte ihn zu zwei Jahren Haft.", "id": "Pengadilan memvonisnya dua tahun penjara." }]
  },
  {
    "id": "freisprechen-836",
    "level": "B2",
    "infinitiv": "freisprechen",
    "arti": "memvonis bebas tanpa bersalah",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "spreche frei", "du": "sprichst frei", "er_sie_es": "spricht frei", "wir": "sprechen frei", "ihr": "sprecht frei", "sie_Sie": "sprechen frei" }, "praeteritum": { "ich": "sprach frei", "du": "sprachst frei", "er_sie_es": "sprach frei", "wir": "sprachen frei", "ihr": "spracht frei", "sie_Sie": "sprachen frei" }, "perfekt": "hat freigesprochen", "imperativ": "Sprecht ihn frei!" },
    "contoh_kalimat": [{ "de": "Der Angeklagte wurde aus Mangel an Beweisen freigesprochen.", "id": "Terdakwa divonis bebas karena kurangnya bukti." }]
  },
  {
    "id": "bestrafen-837",
    "level": "B1",
    "infinitiv": "bestrafen",
    "arti": "menghukum pelanggaran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bestrafe", "du": "bestrafst", "er_sie_es": "bestraft", "wir": "bestrafen", "ihr": "bestraft", "sie_Sie": "bestrafen" }, "praeteritum": { "ich": "bestrafte", "du": "bestraftest", "er_sie_es": "bestrafte", "wir": "bestraften", "ihr": "bestraftet", "sie_Sie": "bestraften" }, "perfekt": "hat bestraft", "imperativ": "Bestrafe!" },
    "contoh_kalimat": [{ "de": "Fehlverhalten muss bestraft werden.", "id": "Pelanggaran harus dihukum." }]
  },
  {
    "id": "belohnen-838",
    "level": "B1",
    "infinitiv": "belohnen",
    "arti": "memberi ganjaran hadiah atas jasa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "belohne", "du": "belohnst", "er_sie_es": "belohnt", "wir": "belohnen", "ihr": "belohnt", "sie_Sie": "belohnen" }, "praeteritum": { "ich": "belohnte", "du": "belohntest", "er_sie_es": "belohnte", "wir": "belohnten", "ihr": "belohntet", "sie_Sie": "belohnten" }, "perfekt": "hat belohnt", "imperativ": "Belohne ihn!" },
    "contoh_kalimat": [{ "de": "Sie belohnte das Kind mit Schokolade.", "id": "Dia memberi anak itu hadiah cokelat." }]
  },
  {
    "id": "auszeichnen-839",
    "level": "B2",
    "infinitiv": "auszeichnen",
    "arti": "menganugerahi penghargaan istimewa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "zeichne aus", "du": "zeichnest aus", "er_sie_es": "zeichnet aus", "wir": "zeichnen aus", "ihr": "zeichnet aus", "sie_Sie": "zeichnen aus" }, "praeteritum": { "ich": "zeichnete aus", "du": "zeichnetest aus", "er_sie_es": "zeichnete aus", "wir": "zeichneten aus", "ihr": "zeichnetet aus", "sie_Sie": "zeichneten aus" }, "perfekt": "hat ausgezeichnet", "imperativ": "Zeichne aus!" },
    "contoh_kalimat": [{ "de": "Der Film wurde mit einem Oscar ausgezeichnet.", "id": "Film tersebut dianugerahi piala Oscar." }]
  },
  {
    "id": "ehren-840",
    "level": "B2",
    "infinitiv": "ehren",
    "arti": "menghormati jasa pahlawan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "ehre", "du": "ehrst", "er_sie_es": "ehrt", "wir": "ehren", "ihr": "ehrt", "sie_Sie": "ehren" }, "praeteritum": { "ich": "ehrte", "du": "ehrtest", "er_sie_es": "ehrte", "wir": "ehrten", "ihr": "ehrtet", "sie_Sie": "ehrten" }, "perfekt": "hat geehrt", "imperativ": "Ehre deine Eltern!" },
    "contoh_kalimat": [{ "de": "Wir ehren das Andenken an die Opfer.", "id": "Kami menghormati kenangan para korban." }]
  },
  {
    "id": "feiern-841",
    "level": "A1",
    "infinitiv": "feiern",
    "arti": "berpesta bersenang-senang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "feiere", "du": "feierst", "er_sie_es": "feiert", "wir": "feiern", "ihr": "feiert", "sie_Sie": "feiern" }, "praeteritum": { "ich": "feierte", "du": "feiertest", "er_sie_es": "feierte", "wir": "feierten", "ihr": "feiertet", "sie_Sie": "feierten" }, "perfekt": "hat gefeiert", "imperativ": "Feiere schön!" },
    "contoh_kalimat": [{ "de": "Wir feiern heute meinen Geburtstag.", "id": "Kami merayakan ulang tahun saya hari ini." }]
  },
  {
    "id": "veranstalten-842",
    "level": "B1",
    "infinitiv": "veranstalten",
    "arti": "menyelenggarakan acara/pesta",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "veranstalte", "du": "veranstaltest", "er_sie_es": "veranstaltet", "wir": "veranstalten", "ihr": "veranstaltet", "sie_Sie": "veranstalten" }, "praeteritum": { "ich": "veranstaltete", "du": "veranstaltetest", "er_sie_es": "veranstaltete", "wir": "veranstalteten", "ihr": "veranstaltetet", "sie_Sie": "veranstalteten" }, "perfekt": "hat veranstaltet", "imperativ": "Veranstalte!" },
    "contoh_kalimat": [{ "de": "Der Verein veranstaltet ein Sommerfest.", "id": "Klub menyelenggarakan festival musim panas." }]
  },
  {
    "id": "eroeffnen-843",
    "level": "A2",
    "infinitiv": "eröffnen",
    "arti": "membuka rekening/toko pertama kali",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "eröffne", "du": "eröffnest", "er_sie_es": "eröffnet", "wir": "eröffnen", "ihr": "eröffnet", "sie_Sie": "eröffnen" }, "praeteritum": { "ich": "eröffnete", "du": "eröffnetest", "er_sie_es": "eröffnete", "wir": "eröffneten", "ihr": "eröffnetet", "sie_Sie": "eröffneten" }, "perfekt": "hat eröffnet", "imperativ": "Eröffne das Konto!" },
    "contoh_kalimat": [{ "de": "Ich möchte ein Bankkonto eröffnen.", "id": "Saya ingin membuka rekening bank." }]
  },
  {
    "id": "schliessen-844",
    "level": "A1",
    "infinitiv": "dichtmachen",
    "arti": "menutup usaha bangkrut (santai)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "mache dicht", "du": "machst dicht", "er_sie_es": "macht dicht", "wir": "machen dicht", "ihr": "macht dicht", "sie_Sie": "machen dicht" }, "praeteritum": { "ich": "machte dicht", "du": "machtest dicht", "er_sie_es": "machte dicht", "wir": "machten dicht", "ihr": "machtet dicht", "sie_Sie": "machten dicht" }, "perfekt": "hat dichtgemacht", "imperativ": "Macht dicht!" },
    "contoh_kalimat": [{ "de": "Das kleine Café musste leider dichtmachen.", "id": "Kafe kecil itu terpaksa tutup permanen." }]
  },
  {
    "id": "einstellen-845",
    "level": "B2",
    "infinitiv": "stillegen",
    "arti": "menonaktifkan pabrik/jalur rel",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "lege still", "du": "legst still", "er_sie_es": "legt still", "wir": "legen still", "ihr": "legt still", "sie_Sie": "legen still" }, "praeteritum": { "ich": "legte still", "du": "legtest still", "er_sie_es": "legte still", "wir": "legten still", "ihr": "legtet still", "sie_Sie": "legten still" }, "perfekt": "hat stillgelegt", "imperativ": "Lege still!" },
    "contoh_kalimat": [{ "de": "Das Atomkraftwerk wurde stillgelegt.", "id": "Pembangkit listrik tenaga nuklir itu dinonaktifkan." }]
  },
  {
    "id": "gruenden-846",
    "level": "B1",
    "infinitiv": "gründen",
    "arti": "mendirikan perusahaan/yayasan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "gründe", "du": "gründest", "er_sie_es": "gründet", "wir": "gründen", "ihr": "gründet", "sie_Sie": "gründen" }, "praeteritum": { "ich": "gründete", "du": "gründetest", "er_sie_es": "gründete", "wir": "gründeten", "ihr": "gründetet", "sie_Sie": "gründeten" }, "perfekt": "hat gegründet", "imperativ": "Gründe eine Firma!" },
    "contoh_kalimat": [{ "de": "Sie gründeten zusammen ein Startup.", "id": "Mereka mendirikan perusahaan rintisan bersama." }]
  },
  {
    "id": "aufloesen-847",
    "level": "B2",
    "infinitiv": "auflösen",
    "arti": "membubarkan organisasi, melarutkan gula",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "löse auf", "du": "löst auf", "er_sie_es": "löst auf", "wir": "lösen auf", "ihr": "löst auf", "sie_Sie": "lösen auf" }, "praeteritum": { "ich": "löste auf", "du": "löstest auf", "er_sie_es": "löste auf", "wir": "lösten auf", "ihr": "löstet auf", "sie_Sie": "lösten auf" }, "perfekt": "hat aufgelöst", "imperativ": "Löse die Tablette auf!" },
    "contoh_kalimat": [{ "de": "Die Tablette löst sich im Wasser auf.", "id": "Tablet obat itu larut di dalam air." }]
  },
  {
    "id": "zerfallen-848",
    "level": "C1",
    "infinitiv": "zerfallen",
    "arti": "runtuh terurai berkeping-keping",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "zerfalle", "du": "zerfällst", "er_sie_es": "zerfällt", "wir": "zerfallen", "ihr": "zerfallt", "sie_Sie": "zerfallen" }, "praeteritum": { "ich": "zerfiel", "du": "zerfielst", "er_sie_es": "zerfiel", "wir": "zerfielen", "ihr": "zerfielt", "sie_Sie": "zerfielen" }, "perfekt": "ist zerfallen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Die alte Ruine zerfällt immer mehr.", "id": "Reruntuhan tua itu semakin terurai runtuh." }]
  },
  {
    "id": "einstuerzen-849",
    "level": "B2",
    "infinitiv": "einstürzen",
    "arti": "runtuh ambruk gedung/jembatan",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "stürze ein", "du": "stürzt ein", "er_sie_es": "stürzt ein", "wir": "stürzen ein", "ihr": "stürzt ein", "sie_Sie": "stürzen ein" }, "praeteritum": { "ich": "stürzte ein", "du": "stürztest ein", "er_sie_es": "stürzte ein", "wir": "stürzten ein", "ihr": "stürztet ein", "sie_Sie": "stürzten ein" }, "perfekt": "ist eingestürzt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Das alte Dach ist plötzlich eingestürzt.", "id": "Atap tua itu tiba-tiba runtuh ambruk." }]
  },
  {
    "id": "errichten-850",
    "level": "B2",
    "infinitiv": "errichten",
    "arti": "mendirikan monumen/gedung megah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "errichte", "du": "errichtest", "er_sie_es": "errichtet", "wir": "errichten", "ihr": "errichtet", "sie_Sie": "errichten" }, "praeteritum": { "ich": "errichtete", "du": "errichtetest", "er_sie_es": "errichtete", "wir": "errichteten", "ihr": "errichtetet", "sie_Sie": "errichteten" }, "perfekt": "hat errichtet", "imperativ": "Errichte ein Denkmal!" },
    "contoh_kalimat": [{ "de": "Die Stadt errichtete ein neues Denkmal.", "id": "Pemerintah kota mendirikan sebuah monumen baru." }]
  },
  {
    "id": "zerstoeren-851",
    "level": "B1",
    "infinitiv": "demolieren",
    "arti": "merusak secara sengaja (vandalisme)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "demoliere", "du": "demolierst", "er_sie_es": "demoliert", "wir": "demolieren", "ihr": "demoliert", "sie_Sie": "demolieren" }, "praeteritum": { "ich": "demolierte", "du": "demoliertest", "er_sie_es": "demolierte", "wir": "demolierten", "ihr": "demoliertet", "sie_Sie": "demolierten" }, "perfekt": "hat demoliert", "imperativ": "Demoliere nicht!" },
    "contoh_kalimat": [{ "de": "Randalierer haben die Bushaltestelle demoliert.", "id": "Perusuh merusak halte bus itu." }]
  },
  {
    "id": "zerlegen-852",
    "level": "B2",
    "infinitiv": "zerlegen",
    "arti": "membongkar mesin menjadi bagian-bagian kecil",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "zerlege", "du": "zerlegst", "er_sie_es": "zerlegt", "wir": "zerlegen", "ihr": "zerlegt", "sie_Sie": "zerlegen" }, "praeteritum": { "ich": "zerlegte", "du": "zerlegtest", "er_sie_es": "zerlegte", "wir": "zerlegten", "ihr": "zerlegtet", "sie_Sie": "zerlegten" }, "perfekt": "hat zerlegt", "imperativ": "Zerlege den Motor!" },
    "contoh_kalimat": [{ "de": "Der Mechaniker zerlegte den Motor in Einzelteile.", "id": "Mekanik membongkar mesin menjadi komponen-komponen terpisah." }]
  },
  {
    "id": "zusammenbauen-853",
    "level": "A2",
    "infinitiv": "zusammenbauen",
    "arti": "merakit komponen menjadi utuh",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "baue zusammen", "du": "baust zusammen", "er_sie_es": "baut zusammen", "wir": "bauen zusammen", "ihr": "baut zusammen", "sie_Sie": "bauen zusammen" }, "praeteritum": { "ich": "baute zusammen", "du": "bautest zusammen", "er_sie_es": "baute zusammen", "wir": "bauten zusammen", "ihr": "bautet zusammen", "sie_Sie": "bauten zusammen" }, "perfekt": "hat zusammengebaut", "imperativ": "Bau das Regal zusammen!" },
    "contoh_kalimat": [{ "de": "Wir haben das neue Regal zusammengebaut.", "id": "Kami telah merakit rak baru itu." }]
  },
  {
    "id": "montieren-854",
    "level": "B1",
    "infinitiv": "montieren",
    "arti": "memasang perangkat ke dinding/mesin",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "montiere", "du": "montierst", "er_sie_es": "montiert", "wir": "montieren", "ihr": "montiert", "sie_Sie": "montieren" }, "praeteritum": { "ich": "montierte", "du": "montiertest", "er_sie_es": "montierte", "wir": "montierten", "ihr": "montiertet", "sie_Sie": "montierten" }, "perfekt": "hat montiert", "imperativ": "Montiere die Lampe!" },
    "contoh_kalimat": [{ "de": "Er montiert die Lampe an die Decke.", "id": "Dia memasang lampu ke langit-langit." }]
  },
  {
    "id": "demontieren-855",
    "level": "B2",
    "infinitiv": "demontieren",
    "arti": "mencopot/melepas instalasi peralatan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "demontiere", "du": "demontierst", "er_sie_es": "demontiert", "wir": "demontieren", "ihr": "demontiert", "sie_Sie": "demontieren" }, "praeteritum": { "ich": "demontierte", "du": "demontiertest", "er_sie_es": "demontierte", "wir": "demontierten", "ihr": "demontiertet", "sie_Sie": "demontierten" }, "perfekt": "hat demontiert", "imperativ": "Demontiere die Teile!" },
    "contoh_kalimat": [{ "de": "Vor dem Umzug müssen wir die Schränke demontieren.", "id": "Sebelum pindahan kita harus membongkar lemari-lemari itu." }]
  },
  {
    "id": "justieren-856",
    "level": "C1",
    "infinitiv": "justieren",
    "arti": "menyetel presisi alat optik/mekanik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "justiere", "du": "justierst", "er_sie_es": "justiert", "wir": "justieren", "ihr": "justiert", "sie_Sie": "justieren" }, "praeteritum": { "ich": "justierte", "du": "justiertest", "er_sie_es": "justierte", "wir": "justierten", "ihr": "justiertet", "sie_Sie": "justierten" }, "perfekt": "hat justiert", "imperativ": "Justiere die Linse!" },
    "contoh_kalimat": [{ "de": "Die Waage muss neu justiert werden.", "id": "Timbangan itu harus disetel ulang presisinya." }]
  },
  {
    "id": "einstellen-857",
    "level": "B1",
    "infinitiv": "feinjustieren",
    "arti": "menyetel halus tingkat sensitivitas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "feinjustiere", "du": "feinjustierst", "er_sie_es": "feinjustiert", "wir": "feinjustieren", "ihr": "feinjustiert", "sie_Sie": "feinjustieren" }, "praeteritum": { "ich": "feinjustierte", "du": "feinjustiertest", "er_sie_es": "feinjustierte", "wir": "feinjustierten", "ihr": "feinjustiertet", "sie_Sie": "feinjustierten" }, "perfekt": "hat feinjustiert", "imperativ": "Feinjustiere das Gerät!" },
    "contoh_kalimat": [{ "de": "Das Mikroskop erfordert eine Feinjustierung.", "id": "Mikroskop memerlukan penyetelan tingkat halus." }]
  },
  {
    "id": "regulieren-858",
    "level": "B2",
    "infinitiv": "regulieren",
    "arti": "mengatur suhu/debit air",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "reguliere", "du": "regulierst", "er_sie_es": "reguliert", "wir": "regulieren", "ihr": "reguliert", "sie_Sie": "regulieren" }, "praeteritum": { "ich": "regulierte", "du": "reguliertest", "er_sie_es": "regulierte", "wir": "regulierten", "ihr": "reguliertet", "sie_Sie": "regulierten" }, "perfekt": "hat reguliert", "imperativ": "Reguliere die Hitze!" },
    "contoh_kalimat": [{ "de": "Mit dem Thermostat kann man die Temperatur regulieren.", "id": "Dengan termostat orang bisa mengatur suhu ruangan." }]
  },
  {
    "id": "dosieren-859",
    "level": "B2",
    "infinitiv": "dosieren",
    "arti": "menakar takaran dosis obat/bumbu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "dosiere", "du": "dosierst", "er_sie_es": "dosiert", "wir": "dosieren", "ihr": "dosiert", "sie_Sie": "dosieren" }, "praeteritum": { "ich": "dosierte", "du": "dosiertest", "er_sie_es": "dosierte", "wir": "dosierten", "ihr": "dosiertet", "sie_Sie": "dosierten" }, "perfekt": "hat dosiert", "imperativ": "Dosiere vorsichtig!" },
    "contoh_kalimat": [{ "de": "Das Waschmittel muss man richtig dosieren.", "id": "Deterjen pakaian harus ditakar dengan takaran yang pas." }]
  },
  {
    "id": "abmessen-860",
    "level": "B1",
    "infinitiv": "abmessen",
    "arti": "mengukur panjang/luas bahan fisik",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "messe ab", "du": "misst ab", "er_sie_es": "misst ab", "wir": "messen ab", "ihr": "messt ab", "sie_Sie": "messen ab" }, "praeteritum": { "ich": "maß ab", "du": "maßest ab", "er_sie_es": "maß ab", "wir": "maßen ab", "ihr": "maßt ab", "sie_Sie": "maßen ab" }, "perfekt": "hat abgemessen", "imperativ": "Miss den Stoff ab!" },
    "contoh_kalimat": [{ "de": "Der Schneider maß den Stoff genau ab.", "id": "Penjahit itu mengukur panjang kain dengan teliti." }]
  },
  {
    "id": "abwiegen-861",
    "level": "A2",
    "infinitiv": "abwiegen",
    "arti": "menimbang berat terigu/buah",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "wiege ab", "du": "wiegst ab", "er_sie_es": "wiegt ab", "wir": "wiegen ab", "ihr": "wiegt ab", "sie_Sie": "wiegen ab" }, "praeteritum": { "ich": "wog ab", "du": "wogst ab", "er_sie_es": "wog ab", "wir": "wogen ab", "ihr": "wogt ab", "sie_Sie": "wogen ab" }, "perfekt": "hat abgewogen", "imperativ": "Wiege 200 Gramm Mehl ab!" },
    "contoh_kalimat": [{ "de": "Bitte wiegen Sie die Äpfel vor dem Bezahlen ab.", "id": "Tolong timbang buah apel sebelum membayar." }]
  },
  {
    "id": "wiegen-862",
    "level": "A2",
    "infinitiv": "wiegen",
    "arti": "memiliki berat (bobot), menimbang",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "wiege", "du": "wiegst", "er_sie_es": "wiegt", "wir": "wiegen", "ihr": "wiegt", "sie_Sie": "wiegen" }, "praeteritum": { "ich": "wog", "du": "wogst", "er_sie_es": "wog", "wir": "wogen", "ihr": "wogt", "sie_Sie": "wogen" }, "perfekt": "hat gewogen", "imperativ": "Wiege dich!" },
    "contoh_kalimat": [{ "de": "Das Paket wiegt knapp drei Kilogramm.", "id": "Paket itu berbobot hampir tiga kilogram." }]
  },
  {
    "id": "schaetzen-863",
    "level": "B1",
    "infinitiv": "schätzen",
    "arti": "memperkirakan angka, menghargai jasa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schätze", "du": "schätzt", "er_sie_es": "schätzt", "wir": "schätzen", "ihr": "schätzt", "sie_Sie": "schätzen" }, "praeteritum": { "ich": "schätzte", "du": "schätztest", "er_sie_es": "schätzte", "wir": "schätzten", "ihr": "schätztet", "sie_Sie": "schätzten" }, "perfekt": "hat geschätzt", "imperativ": "Schätze das Alter!" },
    "contoh_kalimat": [{ "de": "Ich schätze die Kosten auf rund 500 Euro.", "id": "Saya memperkirakan biayanya sekitar 500 euro." }]
  },
  {
    "id": "einschaetzen-864",
    "level": "B2",
    "infinitiv": "einschätzen",
    "arti": "menilai karakter/situasi risiko",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schätze ein", "du": "schätzt ein", "er_sie_es": "schätzt ein", "wir": "schätzen ein", "ihr": "schätzt ein", "sie_Sie": "schätzen ein" }, "praeteritum": { "ich": "schätzte ein", "du": "schätztest ein", "er_sie_es": "schätzte ein", "wir": "schätzten ein", "ihr": "schätztet ein", "sie_Sie": "schätzten ein" }, "perfekt": "hat eingeschätzt", "imperativ": "Schätze die Lage ein!" },
    "contoh_kalimat": [{ "de": "Er kann die Lage sehr realistisch einschätzen.", "id": "Dia bisa menilai situasi dengan sangat realistis." }]
  },
  {
    "id": "beurteilen-865",
    "level": "B2",
    "infinitiv": "beurteilen",
    "arti": "menghakimi mutu performa",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beurteile", "du": "beurteilst", "er_sie_es": "beurteilt", "wir": "beurteilen", "ihr": "beurteilt", "sie_Sie": "beurteilen" }, "praeteritum": { "ich": "beurteilte", "du": "beurteiltest", "er_sie_es": "beurteilte", "wir": "beurteilten", "ihr": "beurteiltet", "sie_Sie": "beurteilten" }, "perfekt": "hat beurteilt", "imperativ": "Beurteile objektiv!" },
    "contoh_kalimat": [{ "de": "Es ist schwer, diese Leistung fair zu beurteilen.", "id": "Sulit untuk menilai performa ini secara adil." }]
  },
  {
    "id": "verurteilen-866",
    "level": "B1",
    "infinitiv": "aburteilen",
    "arti": "memvonis cepat pengadilan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "urteile ab", "du": "urteilst ab", "er_sie_es": "urteilt ab", "wir": "urteilen ab", "ihr": "urteilt ab", "sie_Sie": "urteilen ab" }, "praeteritum": { "ich": "urteilte ab", "du": "urteiltest ab", "er_sie_es": "urteilte ab", "wir": "urteilten ab", "ihr": "urteiltet ab", "sie_Sie": "urteilten ab" }, "perfekt": "hat abgeurteilt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Die Täter wurden im Schnellverfahren abgeurteilt.", "id": "Para pelaku divonis lewat persidangan kilat." }]
  },
  {
    "id": "abwaegen-867",
    "level": "B2",
    "infinitiv": "abwägen",
    "arti": "menimbang pro kontra keputusan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "wäge ab", "du": "wägst ab", "er_sie_es": "wägt ab", "wir": "wägen ab", "ihr": "wägt ab", "sie_Sie": "wägen ab" }, "praeteritum": { "ich": "wog ab", "du": "wogst ab", "er_sie_es": "wog ab", "wir": "wogen ab", "ihr": "wogt ab", "sie_Sie": "wogen ab" }, "perfekt": "hat abgewogen", "imperativ": "Wäge die Vor- und Nachteile ab!" },
    "contoh_kalimat": [{ "de": "Man muss alle Risiken sorgfältig abwägen.", "id": "Semua risiko harus ditimbang dengan matang." }]
  },
  {
    "id": "kalkulieren-868",
    "level": "B2",
    "infinitiv": "kalkulieren",
    "arti": "mengkalkulasi biaya bisnis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "kalkuliere", "du": "kalkulierst", "er_sie_es": "kalkuliert", "wir": "kalkulieren", "ihr": "kalkuliert", "sie_Sie": "kalkulieren" }, "praeteritum": { "ich": "kalkulierte", "du": "kalkuliertest", "er_sie_es": "kalkulierte", "wir": "kalkulierten", "ihr": "kalkuliertet", "sie_Sie": "kalkulierten" }, "perfekt": "hat kalkuliert", "imperativ": "Kalkuliere scharf!" },
    "contoh_kalimat": [{ "de": "Der Unternehmer hat die Gesamtkosten knapp kalkuliert.", "id": "Pengusaha itu mengkalkulasi total biaya dengan ketat." }]
  },
  {
    "id": "berechnen-869",
    "level": "A2",
    "infinitiv": "berechnen",
    "arti": "menghitung rumus, menagihkan tarif",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "berechne", "du": "berechnest", "er_sie_es": "berechnet", "wir": "berechnen", "ihr": "berechnet", "sie_Sie": "berechnen" }, "praeteritum": { "ich": "berechnete", "du": "berechnetest", "er_sie_es": "berechnete", "wir": "berechneten", "ihr": "berechnetet", "sie_Sie": "berechneten" }, "perfekt": "hat berechnet", "imperativ": "Berechne das Ergebnis!" },
    "contoh_kalimat": [{ "de": "Der Architekt berechnet die Statik des Gebäudes.", "id": "Arsitek menghitung kalkulasi struktur bangunan." }]
  },
  {
    "id": "verrechnen-870",
    "level": "B1",
    "infinitiv": "sich verrechnen",
    "arti": "keliru dalam berhitung angka",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verrechne mich", "du": "verrechnest dich", "er_sie_es": "verrechnet sich", "wir": "verrechnen uns", "ihr": "verrechnet euch", "sie_Sie": "verrechnen sich" }, "praeteritum": { "ich": "verrechnete mich", "du": "verrechnetest dich", "er_sie_es": "verrechnete sich", "wir": "verrechneten uns", "ihr": "verrechnetet euch", "sie_Sie": "verrechneten sich" }, "perfekt": "hat sich verrechnet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Entschuldigung, ich habe mich um zehn Euro verrechnet.", "id": "Maaf, hitungan saya keliru sepuluh euro." }]
  },
  {
    "id": "verspekulieren-871",
    "level": "C1",
    "infinitiv": "sich verspekulieren",
    "arti": "rugi karena salah spekulasi saham/aset",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verspekuliere mich", "du": "verspekulierst dich", "er_sie_es": "verspekuliert sich", "wir": "verspekulieren uns", "ihr": "verspekuliert euch", "sie_Sie": "verspekulieren sich" }, "praeteritum": { "ich": "verspekulierte mich", "du": "verspekuliertest dich", "er_sie_es": "verspekulierte sich", "wir": "verspekulierten uns", "ihr": "verspekuliertet euch", "sie_Sie": "verspekulierten sich" }, "perfekt": "hat sich verspekuliert", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Die Bank hat sich bei den Immobilien verspekuliert.", "id": "Bank itu salah spekulasi pada sektor properti." }]
  },
  {
    "id": "investieren-872",
    "level": "B1",
    "infinitiv": "investieren",
    "arti": "menanamkan modal investasi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "in", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "investiere", "du": "investierst", "er_sie_es": "investiert", "wir": "investieren", "ihr": "investiert", "sie_Sie": "investieren" }, "praeteritum": { "ich": "investierte", "du": "investiertest", "er_sie_es": "investierte", "wir": "investierten", "ihr": "investiertet", "sie_Sie": "investierten" }, "perfekt": "hat investiert", "imperativ": "Investiere klug!" },
    "contoh_kalimat": [{ "de": "Sie investiert ihr Erspartes in Solarenergie.", "id": "Dia menginvestasikan tabungannya ke energi surya." }]
  },
  {
    "id": "anlegen-873",
    "level": "B1",
    "infinitiv": "anlegen",
    "arti": "mengalokasikan dana tabungan, merapat perahu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "in", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "lege an", "du": "legst an", "er_sie_es": "legt an", "wir": "legen an", "ihr": "legt an", "sie_Sie": "legen an" }, "praeteritum": { "ich": "legte an", "du": "legtest an", "er_sie_es": "legte an", "wir": "legten an", "ihr": "legtet an", "sie_Sie": "legten an" }, "perfekt": "hat angelegt", "imperativ": "Lege das Geld sicher an!" },
    "contoh_kalimat": [{ "de": "Er legt sein Geld in Aktien an.", "id": "Dia mengalokasikan dananya di pasar saham." }]
  },
  {
    "id": "abwerfen-874",
    "level": "B2",
    "infinitiv": "abwerfen",
    "arti": "menghasilkan profit untung, menjatuhkan muatan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "werfe ab", "du": "wirfst ab", "er_sie_es": "wirft ab", "wir": "werfen ab", "ihr": "werft ab", "sie_Sie": "werfen ab" }, "praeteritum": { "ich": "warf ab", "du": "warfst ab", "er_sie_es": "warf ab", "wir": "warfen ab", "ihr": "warft ab", "sie_Sie": "warfen ab" }, "perfekt": "hat abgeworfen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Das Geschäft wirft endlich Gewinn ab.", "id": "Usaha itu akhirnya menghasilkan keuntungan laba." }]
  },
  {
    "id": "erwirtschaften-875",
    "level": "C1",
    "infinitiv": "erwirtschaften",
    "arti": "membukukan laba operasi bisnis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erwirtschafte", "du": "erwirtschaftest", "er_sie_es": "erwirtschaftet", "wir": "erwirtschaften", "ihr": "erwirtschaftet", "sie_Sie": "erwirtschaften" }, "praeteritum": { "ich": "erwirtschaftete", "du": "erwirtschaftetest", "er_sie_es": "erwirtschaftete", "wir": "erwirtschafteten", "ihr": "erwirtschaftetet", "sie_Sie": "erwirtschafteten" }, "perfekt": "hat erwirtschaftet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Betrieb erwirtschaftete einen Rekordgewinn.", "id": "Perusahaan membukukan rekor keuntungan." }]
  },
  {
    "id": "einnahmen-876",
    "level": "B2",
    "infinitiv": "einnehmen",
    "arti": "meraup pemasukan kas",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "nehme ein", "du": "nimmst ein", "er_sie_es": "nimmt ein", "wir": "nehmen ein", "ihr": "nehmt ein", "sie_Sie": "nehmen ein" }, "praeteritum": { "ich": "nahm ein", "du": "nahmst ein", "er_sie_es": "nahm ein", "wir": "nahmen ein", "ihr": "nahmt ein", "sie_Sie": "nahmen ein" }, "perfekt": "hat eingenommen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Das Festival hat viel Spendengeld eingenommen.", "id": "Festival itu meraup banyak dana donasi." }]
  },
  {
    "id": "verlust-machen-877",
    "level": "B1",
    "infinitiv": "einbüßen",
    "arti": "kehilangan nilai aset/pamor",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "büße ein", "du": "büßt ein", "er_sie_es": "büßt ein", "wir": "büßen ein", "ihr": "büßt ein", "sie_Sie": "büßen ein" }, "praeteritum": { "ich": "büßte ein", "du": "büßtest ein", "er_sie_es": "büßte ein", "wir": "büßten ein", "ihr": "büßtet ein", "sie_Sie": "büßten ein" }, "perfekt": "hat eingebüßt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Die Partei hat bei der Wahl viele Stimmen eingebüßt.", "id": "Partai itu kehilangan banyak suara dalam pemilu." }]
  },
  {
    "id": "schrumpfen-878",
    "level": "B2",
    "infinitiv": "schrumpfen",
    "arti": "menyusut ukuran/populasi",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schrumpfe", "du": "schrumpfst", "er_sie_es": "schrumpft", "wir": "schrumpfen", "ihr": "schrumpft", "sie_Sie": "schrumpfen" }, "praeteritum": { "ich": "schrumpfte", "du": "schrumpftest", "er_sie_es": "schrumpfte", "wir": "schrumpften", "ihr": "schrumpftet", "sie_Sie": "schrumpften" }, "perfekt": "ist geschrumpft", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Wollpullover ist beim Waschen geschrumpft.", "id": "Sweter wol itu menyusut saat dicuci." }]
  },
  {
    "id": "schmelzen-879",
    "level": "A2",
    "infinitiv": "schmelzen",
    "arti": "meleleh es/keju",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "schmelze", "du": "schmilzt", "er_sie_es": "schmilzt", "wir": "schmelzen", "ihr": "schmelzt", "sie_Sie": "schmelzen" }, "praeteritum": { "ich": "schmolz", "du": "schmolzest", "er_sie_es": "schmolz", "wir": "schmolzen", "ihr": "schmolzt", "sie_Sie": "schmolzen" }, "perfekt": "ist geschmolzen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Schnee schmilzt in der Frühlingssonne.", "id": "Salju meleleh di bawah matahari musim semi." }]
  },
  {
    "id": "auftauen-880",
    "level": "B1",
    "infinitiv": "auftauen",
    "arti": "mencairkan makanan beku dari freezer",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "taue auf", "du": "taust auf", "er_sie_es": "taut auf", "wir": "tauen auf", "ihr": "taut auf", "sie_Sie": "tauen auf" }, "praeteritum": { "ich": "taute auf", "du": "tautest auf", "er_sie_es": "taute auf", "wir": "tauten auf", "ihr": "tautet auf", "sie_Sie": "tauten auf" }, "perfekt": "hat aufgetaut", "imperativ": "Taue das Fleisch auf!" },
    "contoh_kalimat": [{ "de": "Ich muss das Fleisch vor dem Braten auftauen.", "id": "Saya harus mencairkan daging beku sebelum menggorengnya." }]
  },
  {
    "id": "einfrieren-881",
    "level": "A2",
    "infinitiv": "einfrieren",
    "arti": "membekukan makanan di freezer",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "friere ein", "du": "frierst ein", "er_sie_es": "friert ein", "wir": "frieren ein", "ihr": "friert ein", "sie_Sie": "frieren ein" }, "praeteritum": { "ich": "fror ein", "du": "frorst ein", "er_sie_es": "fror ein", "wir": "froren ein", "ihr": "frort ein", "sie_Sie": "froren ein" }, "perfekt": "hat eingefroren", "imperativ": "Frier das Gemüse ein!" },
    "contoh_kalimat": [{ "de": "Reste vom Abendessen kann man gut einfrieren.", "id": "Sisa makan malam bisa dibekukan di lemari es." }]
  },
  {
    "id": "kuehlen-882",
    "level": "A2",
    "infinitiv": "kühlen",
    "arti": "mendinginkan minuman/kompres luka",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "kühle", "du": "kühlst", "er_sie_es": "kühlt", "wir": "kühlen", "ihr": "kühlt", "sie_Sie": "kühlen" }, "praeteritum": { "ich": "kühlte", "du": "kühltest", "er_sie_es": "kühlte", "wir": "kühlten", "ihr": "kühltet", "sie_Sie": "kühlten" }, "perfekt": "hat gekühlt", "imperativ": "Kühle die Wunde!" },
    "contoh_kalimat": [{ "de": "Kühlen Sie den Knöchel mit einem Eisbeutel!", "id": "Kompreslah pergelangan kaki itu dengan kantung es!" }]
  },
  {
    "id": "erwaermen-883",
    "level": "B1",
    "infinitiv": "erwärmen",
    "arti": "menghangatkan makanan microwave",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erwärme", "du": "erwärmst", "er_sie_es": "erwärmt", "wir": "erwärmen", "ihr": "erwärmt", "sie_Sie": "erwärmen" }, "praeteritum": { "ich": "erwärmte", "du": "erwärmtest", "er_sie_es": "erwärmte", "wir": "erwärmten", "ihr": "erwärmtet", "sie_Sie": "erwärmten" }, "perfekt": "hat erwärmt", "imperativ": "Erwärme die Suppe!" },
    "contoh_kalimat": [{ "de": "Ich erwärme die Suppe in der Mikrowelle.", "id": "Saya menghangatkan sup di microwave." }]
  },
  {
    "id": "aufwaermen-884",
    "level": "A2",
    "infinitiv": "aufwärmen",
    "arti": "pemanasan olahraga, memanaskan lauk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "wärme auf", "du": "wärmst auf", "er_sie_es": "wärmt auf", "wir": "wärmen auf", "ihr": "wärmt auf", "sie_Sie": "wärmen auf" }, "praeteritum": { "ich": "wärmte auf", "du": "wärmtest auf", "er_sie_es": "wärmte auf", "wir": "wärmten auf", "ihr": "wärmtet auf", "sie_Sie": "wärmten auf" }, "perfekt": "hat aufgewärmt", "imperativ": "Wärm dich auf!" },
    "contoh_kalimat": [{ "de": "Vor dem Training wärmen sich die Sportler auf.", "id": "Sebelum latihan para atlet melakukan pemanasan." }]
  },
  {
    "id": "abkuehlen-885",
    "level": "A2",
    "infinitiv": "abkühlen",
    "arti": "mendingin cuaca/teh",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "kühle ab", "du": "kühlst ab", "er_sie_es": "kühlt ab", "wir": "kühlen ab", "ihr": "kühlt ab", "sie_Sie": "kühlen ab" }, "praeteritum": { "ich": "kühlte ab", "du": "kühltest ab", "er_sie_es": "kühlte ab", "wir": "kühlten ab", "ihr": "kühltet ab", "sie_Sie": "kühlten ab" }, "perfekt": "hat abgekühlt", "imperativ": "Lass den Tee abkühlen!" },
    "contoh_kalimat": [{ "de": "Lass die heiße Suppe erst etwas abkühlen!", "id": "Biarkan sup panasnya sedikit dingin dulu!" }]
  },
  {
    "id": "kochen-886",
    "level": "A1",
    "infinitiv": "aufkochen",
    "arti": "mendidihkan hingga berbuih pertama kali",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "koche auf", "du": "kochst auf", "er_sie_es": "kocht auf", "wir": "kochen auf", "ihr": "kocht auf", "sie_Sie": "kochen auf" }, "praeteritum": { "ich": "kochte auf", "du": "kochtest auf", "er_sie_es": "kochte auf", "wir": "kochten auf", "ihr": "kochtet auf", "sie_Sie": "kochten auf" }, "perfekt": "hat aufgekocht", "imperativ": "Lass die Milch aufkochen!" },
    "contoh_kalimat": [{ "de": "Die Milch kurz aufkochen lassen.", "id": "Biarkan susunya mendidih sebentar." }]
  },
  {
    "id": "ueberkochen-887",
    "level": "A2",
    "infinitiv": "überkochen",
    "arti": "mendidih meluap keluar panci",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "koche über", "du": "kochst über", "er_sie_es": "kocht über", "wir": "kochen über", "ihr": "kocht über", "sie_Sie": "kochen über" }, "praeteritum": { "ich": "kochte über", "du": "kochtest über", "er_sie_es": "kochte über", "wir": "kochten über", "ihr": "kochtet über", "sie_Sie": "kochten über" }, "perfekt": "ist übergekocht", "imperativ": "Pass auf, dass nichts überkocht!" },
    "contoh_kalimat": [{ "de": "Das Nudelwasser ist übergekocht.", "id": "Air rebusan pasta meluap keluar panci." }]
  },
  {
    "id": "anbrennen-888",
    "level": "A2",
    "infinitiv": "anbrennen",
    "arti": "masakan gosong mengerak di panci",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "brenne an", "du": "brennst an", "er_sie_es": "brennt an", "wir": "brennen an", "ihr": "brennt an", "sie_Sie": "brennen an" }, "praeteritum": { "ich": "brannte an", "du": "branntest an", "er_sie_es": "brannte an", "wir": "brannten an", "ihr": "branntet an", "sie_Sie": "brannten an" }, "perfekt": "ist angebrannt", "imperativ": "Lass nichts anbrennen!" },
    "contoh_kalimat": [{ "de": "Das Essen ist leider im Ofen angebrannt.", "id": "Sayang sekali makanannya gosong di oven." }]
  },
  {
    "id": "verbrennen-889",
    "level": "A2",
    "infinitiv": "verbrühen",
    "arti": "tersiram air mendidih",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verbrühe mich", "du": "verbrühst dich", "er_sie_es": "verbrüht sich", "wir": "verbrühen uns", "ihr": "verbrüht euch", "sie_Sie": "verbrühen sich" }, "praeteritum": { "ich": "verbrühte mich", "du": "verbrühtest dich", "er_sie_es": "verbrühte sich", "wir": "verbrühten uns", "ihr": "verbrühtet euch", "sie_Sie": "verbrühten sich" }, "perfekt": "hat sich verbrüht", "imperativ": "Verbrüh dich nicht!" },
    "contoh_kalimat": [{ "de": "Er hat sich die Zunge am heißen Tee verbrüht.", "id": "Lidahnya melepuh karena teh yang terlalu panas." }]
  },
  {
    "id": "erhitzen-890",
    "level": "B1",
    "infinitiv": "erhitzen",
    "arti": "memanaskan wajan/cairan suhu tinggi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erhitze", "du": "erhitzt", "er_sie_es": "erhitzt", "wir": "erhitzen", "ihr": "erhitzt", "sie_Sie": "erhitzen" }, "praeteritum": { "ich": "erhitzte", "du": "erhitztest", "er_sie_es": "erhitzte", "wir": "erhitzten", "ihr": "erhitztet", "sie_Sie": "erhitzten" }, "perfekt": "hat erhitzt", "imperativ": "Erhitze das Öl!" },
    "contoh_kalimat": [{ "de": "Erhitzen Sie das Öl in einer Pfanne.", "id": "Panaskan minyak di atas wajan." }]
  },
  {
    "id": "daempfen-891",
    "level": "B2",
    "infinitiv": "dämpfen",
    "arti": "mengukus sayur dimsum, meredam suara",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "dämpfe", "du": "dämpfst", "er_sie_es": "dämpft", "wir": "dämpfen", "ihr": "dämpft", "sie_Sie": "dämpfen" }, "praeteritum": { "ich": "dämpfte", "du": "dämpftest", "er_sie_es": "dämpfte", "wir": "dämpften", "ihr": "dämpftet", "sie_Sie": "dämpften" }, "perfekt": "hat gedämpft", "imperativ": "Dämpfe das Gemüse!" },
    "contoh_kalimat": [{ "de": "Gedämpftes Gemüse ist sehr gesund.", "id": "Sayuran kukus sangat menyehatkan tubuh." }]
  },
  {
    "id": "schmoren-892",
    "level": "B2",
    "infinitiv": "schmoren",
    "arti": "mengungkep rebus daging empuk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schmore", "du": "schmorst", "er_sie_es": "schmort", "wir": "schmoren", "ihr": "schmort", "sie_Sie": "schmoren" }, "praeteritum": { "ich": "schmorte", "du": "schmortest", "er_sie_es": "schmorte", "wir": "schmorten", "ihr": "schmortet", "sie_Sie": "schmorten" }, "perfekt": "hat geschmort", "imperativ": "Lass das Fleisch schmoren!" },
    "contoh_kalimat": [{ "de": "Das Rindfleisch muss zwei Stunden schmoren.", "id": "Daging sapi harus diungkep masak selama dua jam." }]
  },
  {
    "id": "quellen-893",
    "level": "B2",
    "infinitiv": "quellen",
    "arti": "mengembang beras/biji saat direndam",
    "hilfsverb": "sein",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "quelle", "du": "quillst", "er_sie_es": "quillt", "wir": "quellen", "ihr": "quellt", "sie_Sie": "quellen" }, "praeteritum": { "ich": "quoll", "du": "quollst", "er_sie_es": "quoll", "wir": "quollen", "ihr": "quollt", "sie_Sie": "quollen" }, "perfekt": "ist gequollen", "imperativ": "Lass den Reis quellen!" },
    "contoh_kalimat": [{ "de": "Den Reis bei schwacher Hitze quellen lassen.", "id": "Biarkan nasi mengembang di atas api kecil." }]
  },
  {
    "id": "eindicken-894",
    "level": "B2",
    "infinitiv": "eindicken",
    "arti": "mengentalkan kuah saus",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "dicke ein", "du": "dickst ein", "er_sie_es": "dickt ein", "wir": "dicken ein", "ihr": "dickt ein", "sie_Sie": "dicken ein" }, "praeteritum": { "ich": "dickte ein", "du": "dicktest ein", "er_sie_es": "dickte ein", "wir": "dickten ein", "ihr": "dicktet ein", "sie_Sie": "dickten ein" }, "perfekt": "hat eingedickt", "imperativ": "Dicke die Soße ein!" },
    "contoh_kalimat": [{ "de": "Mit etwas Stärke kann man die Soße eindicken.", "id": "Dengan sedikit tepung maizena kita bisa mengentalkan saus." }]
  },
  {
    "id": "verdünnen-895",
    "level": "B1",
    "infinitiv": "verdünnen",
    "arti": "mengencerkan larutan kental",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "verdünne", "du": "verdünnst", "er_sie_es": "verdünnt", "wir": "verdünnen", "ihr": "verdünnt", "sie_Sie": "verdünnen" }, "praeteritum": { "ich": "verdünnte", "du": "verdünntest", "er_sie_es": "verdünnte", "wir": "verdünnten", "ihr": "verdünntet", "sie_Sie": "verdünnten" }, "perfekt": "hat verdünnt", "imperativ": "Verdünne den Sirup!" },
    "contoh_kalimat": [{ "de": "Den Saft am besten mit Wasser verdünnen.", "id": "Paling pas mengencerkan sari buah dengan air." }]
  },
  {
    "id": "mischen-896",
    "level": "A2",
    "infinitiv": "mischen",
    "arti": "mencampurkan bahan bumbu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "mische", "du": "mischst", "er_sie_es": "mischt", "wir": "mischen", "ihr": "mischt", "sie_Sie": "mischen" }, "praeteritum": { "ich": "mischte", "du": "mischtest", "er_sie_es": "mischte", "wir": "mischten", "ihr": "mischtet", "sie_Sie": "mischten" }, "perfekt": "hat gemischt", "imperativ": "Mische die Zutaten!" },
    "contoh_kalimat": [{ "de": "Mische das Mehl mit dem Backpulver.", "id": "Campurkan terigu dengan bubuk pengembang kue." }]
  },
  {
    "id": "verruehren-897",
    "level": "B1",
    "infinitiv": "verrühren",
    "arti": "mengocok aduk rata telur",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verrühre", "du": "verrührst", "er_sie_es": "verrührt", "wir": "verrühren", "ihr": "verrührt", "sie_Sie": "verrühren" }, "praeteritum": { "ich": "verrührte", "du": "verrührtest", "er_sie_es": "verrührte", "wir": "verrührten", "ihr": "verrührtet", "sie_Sie": "verrührten" }, "perfekt": "hat verrührt", "imperativ": "Verrühre die Eier gut!" },
    "contoh_kalimat": [{ "de": "Die Eier mit der Milch gut verrühren.", "id": "Kocok telur dan susu sampai tercampur rata." }]
  },
  {
    "id": "kneten-898",
    "level": "B1",
    "infinitiv": "kneten",
    "arti": "menguleni adonan roti",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "knete", "du": "knetest", "er_sie_es": "knetet", "wir": "kneten", "ihr": "knetet", "sie_Sie": "kneten" }, "praeteritum": { "ich": "knetete", "du": "knetetest", "er_sie_es": "knetete", "wir": "kneteten", "ihr": "knetetet", "sie_Sie": "kneteten" }, "perfekt": "hat geknetet", "imperativ": "Knete den Teig!" },
    "contoh_kalimat": [{ "de": "Den Teig zehn Minuten kräftig kneten.", "id": "Uleni adonan dengan kuat selama sepuluh menit." }]
  },
  {
    "id": "formen-899",
    "level": "B1",
    "infinitiv": "formen",
    "arti": "membentuk bulatan adonan kue",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "forme", "du": "formst", "er_sie_es": "formt", "wir": "formen", "ihr": "formt", "sie_Sie": "formen" }, "praeteritum": { "ich": "formte", "du": "formtest", "er_sie_es": "formte", "wir": "formten", "ihr": "formtet", "sie_Sie": "formten" }, "perfekt": "hat geformt", "imperativ": "Forme kleine Bällchen!" },
    "contoh_kalimat": [{ "de": "Formen Sie aus der Masse kleine Kugeln.", "id": "Bentuklah adonan itu menjadi bola-bola kecil." }]
  },
  {
    "id": "bestreuen-900",
    "level": "B2",
    "infinitiv": "bestreuen",
    "arti": "menaburi gula halus/wijen",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "bestreue", "du": "bestreust", "er_sie_es": "bestreut", "wir": "bestreuen", "ihr": "bestreut", "sie_Sie": "bestreuen" }, "praeteritum": { "ich": "bestreute", "du": "bestreutest", "er_sie_es": "bestreute", "wir": "bestreuten", "ihr": "bestreutet", "sie_Sie": "bestreuten" }, "perfekt": "hat bestreut", "imperativ": "Bestreue den Kuchen!" },
    "contoh_kalimat": [{ "de": "Den Kuchen mit Puderzucker bestreuen.", "id": "Taburi kuenya dengan gula halus." }]
  },
  {
    "id": "verzieren-901",
    "level": "B1",
    "infinitiv": "verzieren",
    "arti": "menghias kue tart",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verziere", "du": "verzierst", "er_sie_es": "verziert", "wir": "verzieren", "ihr": "verziert", "sie_Sie": "verzieren" }, "praeteritum": { "ich": "verzierte", "du": "verziertest", "er_sie_es": "verzierte", "wir": "verzierten", "ihr": "verziertet", "sie_Sie": "verzierten" }, "perfekt": "hat verziert", "imperativ": "Verziere die Torte!" },
    "contoh_kalimat": [{ "de": "Sie verziert die Geburtstagstorte mit Erdbeeren.", "id": "Dia menghias kue ulang tahun dengan buah stroberi." }]
  },
  {
    "id": "dekorieren-902",
    "level": "A2",
    "infinitiv": "dekorieren",
    "arti": "mendekorasi ruangan pesta",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "dekoriere", "du": "dekorierst", "er_sie_es": "dekoriert", "wir": "dekorieren", "ihr": "dekoriert", "sie_Sie": "dekorieren" }, "praeteritum": { "ich": "dekorierte", "du": "dekoriertest", "er_sie_es": "dekorierte", "wir": "dekorierten", "ihr": "dekoriertet", "sie_Sie": "dekorierten" }, "perfekt": "hat dekoriert", "imperativ": "Dekoriere den Raum!" },
    "contoh_kalimat": [{ "de": "Wir haben das Zimmer für die Party dekoriert.", "id": "Kami mendekorasi ruangan untuk acara pesta." }]
  },
  {
    "id": "schmuecken-903",
    "level": "A2",
    "infinitiv": "schmücken",
    "arti": "menghiasi pohon cemara Natal",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schmücke", "du": "schmückst", "er_sie_es": "schmückt", "wir": "schmücken", "ihr": "schmückt", "sie_Sie": "schmücken" }, "praeteritum": { "ich": "schmückte", "du": "schmücktest", "er_sie_es": "schmückte", "wir": "schmückten", "ihr": "schmücktet", "sie_Sie": "schmückten" }, "perfekt": "hat geschmückt", "imperativ": "Schmückt den Baum!" },
    "contoh_kalimat": [{ "de": "Zu Weihnachten schmücken wir den Tannenbaum.", "id": "Menjelang Natal kami menghiasi pohon cemara." }]
  },
  {
    "id": "beleuchten-904",
    "level": "B1",
    "infinitiv": "beleuchten",
    "arti": "menerangi lampu jalan, menyorot isu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "beleuchte", "du": "beleuchtest", "er_sie_es": "beleuchtet", "wir": "beleuchten", "ihr": "beleuchtet", "sie_Sie": "beleuchten" }, "praeteritum": { "ich": "beleuchtete", "du": "beleuchtetest", "er_sie_es": "beleuchtete", "wir": "beleuchteten", "ihr": "beleuchtetet", "sie_Sie": "beleuchteten" }, "perfekt": "hat beleuchtet", "imperativ": "Beleuchte den Weg!" },
    "contoh_kalimat": [{ "de": "Die Straßen werden nachts hell beleuchtet.", "id": "Jalanan diterangi terang-benderang di waktu malam." }]
  },
  {
    "id": "erhellen-905",
    "level": "B2",
    "infinitiv": "erhellen",
    "arti": "mencerahkan ruangan gelap/pikiran",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erhelle", "du": "erhellst", "er_sie_es": "erhellt", "wir": "erhellen", "ihr": "erhellt", "sie_Sie": "erhellen" }, "praeteritum": { "ich": "erhellte", "du": "erhelltest", "er_sie_es": "erhellte", "wir": "erhellten", "ihr": "erhelltet", "sie_Sie": "erhellten" }, "perfekt": "hat erhellt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Ein Blitz erhellte die dunkle Nacht.", "id": "Kilat menerangi malam yang gelap gulita." }]
  },
  {
    "id": "verdunkeln-906",
    "level": "B2",
    "infinitiv": "verdunkeln",
    "arti": "menggelapkan jendela bioskop",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verdunkle", "du": "verdunkelst", "er_sie_es": "verdunkelt", "wir": "verdunkeln", "ihr": "verdunkelt", "sie_Sie": "verdunkeln" }, "praeteritum": { "ich": "verdunkelte", "du": "verdunkeltest", "er_sie_es": "verdunkelte", "wir": "verdunkelten", "ihr": "verdunkeltet", "sie_Sie": "verdunkelten" }, "perfekt": "hat verdunkelt", "imperativ": "Verdunkle den Raum!" },
    "contoh_kalimat": [{ "de": "Wir verdunkeln das Zimmer für den Film.", "id": "Kami menggelapkan ruangan untuk menonton film." }]
  },
  {
    "id": "erblinden-907",
    "level": "C1",
    "infinitiv": "erblinden",
    "arti": "menjadi buta netra",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erblinde", "du": "erblindest", "er_sie_es": "erblindet", "wir": "erblinden", "ihr": "erblindet", "sie_Sie": "erblinden" }, "praeteritum": { "ich": "erblindete", "du": "erblindetest", "er_sie_es": "erblindete", "wir": "erblindeten", "ihr": "erblindetet", "sie_Sie": "erblindeten" }, "perfekt": "ist erblindet", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Er ist im Alter durch eine Krankheit erblindet.", "id": "Dia kehilangan penglihatan di hari tuanya akibat sakit." }]
  },
  {
    "id": "ertauben-908",
    "level": "C1",
    "infinitiv": "ertauben",
    "arti": "menjadi tuli rungu",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "ertaube", "du": "ertaubst", "er_sie_es": "ertaubt", "wir": "ertauben", "ihr": "ertaubt", "sie_Sie": "ertauben" }, "praeteritum": { "ich": "ertaubte", "du": "ertaubtest", "er_sie_es": "ertaubte", "wir": "ertaubten", "ihr": "ertaubtet", "sie_Sie": "ertaubten" }, "perfekt": "ist ertaubt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Musiker ist auf einem Ohr ertaubt.", "id": "Musisi itu kehilangan pendengaran pada satu telinganya." }]
  },
  {
    "id": "verstummen-909",
    "level": "B2",
    "infinitiv": "verstummen",
    "arti": "menjadi senyap tanpa suara",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verstumme", "du": "verstummst", "er_sie_es": "verstummt", "wir": "verstummen", "ihr": "verstummt", "sie_Sie": "verstummen" }, "praeteritum": { "ich": "verstummte", "du": "verstummtest", "er_sie_es": "verstummte", "wir": "verstummten", "ihr": "verstummtet", "sie_Sie": "verstummten" }, "perfekt": "ist verstummt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Die Musik verstummte plötzlich im Saal.", "id": "Musik tiba-tiba senyap di dalam aula." }]
  },
  {
    "id": "lauschen-910",
    "level": "B2",
    "infinitiv": "lauschen",
    "arti": "mendengarkan saksama/menguping",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "lausche", "du": "lauschst", "er_sie_es": "lauscht", "wir": "lauschen", "ihr": "lauscht", "sie_Sie": "lauschen" }, "praeteritum": { "ich": "lauschte", "du": "lauschtest", "er_sie_es": "lauschte", "wir": "lauschten", "ihr": "lauschtet", "sie_Sie": "lauschten" }, "perfekt": "hat gelauscht", "imperativ": "Lausche dem Wind!" },
    "contoh_kalimat": [{ "de": "Er lauschte heimlich an der Tür.", "id": "Dia menguping secara diam-diam di balik pintu." }]
  },
  {
    "id": "horchen-911",
    "level": "B1",
    "infinitiv": "horchen",
    "arti": "menajamkan telinga mendengar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "horche", "du": "horchst", "er_sie_es": "horcht", "wir": "horchen", "ihr": "horcht", "sie_Sie": "horchen" }, "praeteritum": { "ich": "horchte", "du": "horchtest", "er_sie_es": "horchte", "wir": "horchten", "ihr": "horchtet", "sie_Sie": "horchten" }, "perfekt": "hat gehorcht", "imperativ": "Horch mal!" },
    "contoh_kalimat": [{ "de": "Horch mal, was war das für ein Geräusch?", "id": "Coba dengarkan, suara apakah tadi itu?" }]
  },
  {
    "id": "erschnueffeln-912",
    "level": "B2",
    "infinitiv": "erschnüffeln",
    "arti": "mengendus jejak anjing polisi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erschnüffle", "du": "erschnüffelst", "er_sie_es": "erschnüffelt", "wir": "erschnüffeln", "ihr": "erschnüffelt", "sie_Sie": "erschnüffeln" }, "praeteritum": { "ich": "erschnüffelte", "du": "erschnüffeltest", "er_sie_es": "erschnüffelte", "wir": "erschnüffelten", "ihr": "erschnüffeltet", "sie_Sie": "erschnüffelten" }, "perfekt": "hat erschnüffelt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Spürhund erschnüffelte die Drogen.", "id": "Anjing pelacak mengendus menemukan narkoba." }]
  },
  {
    "id": "wittern-913",
    "level": "B2",
    "infinitiv": "wittern",
    "arti": "mencium gelagat bahaya/peluang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "wittere", "du": "witterst", "er_sie_es": "wittert", "wir": "wittern", "ihr": "wittert", "sie_Sie": "wittern" }, "praeteritum": { "ich": "witterte", "du": "wittertest", "er_sie_es": "witterte", "wir": "witterten", "ihr": "wittertet", "sie_Sie": "witterten" }, "perfekt": "hat gewittert", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Er witterte sofort eine Chance auf Gewinn.", "id": "Dia langsung mencium gelagat adanya peluang keuntungan." }]
  },
  {
    "id": "tasten-914",
    "level": "B2",
    "infinitiv": "tasten",
    "arti": "meraba-raba tangan di kegelapan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "nach", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "taste", "du": "tastest", "er_sie_es": "tastet", "wir": "tasten", "ihr": "tastet", "sie_Sie": "tasten" }, "praeteritum": { "ich": "tastete", "du": "tastetest", "er_sie_es": "tastete", "wir": "tasteten", "ihr": "tastetet", "sie_Sie": "tasteten" }, "perfekt": "hat getastet", "imperativ": "Taste dich vor!" },
    "contoh_kalimat": [{ "de": "Er tastete im Dunkeln nach dem Lichtschalter.", "id": "Dia meraba-raba mencari sakelar lampu di kegelapan." }]
  },
  {
    "id": "befuehlen-915",
    "level": "B2",
    "infinitiv": "befühlen",
    "arti": "memegang meraba tekstur kain",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "befühle", "du": "befühlst", "er_sie_es": "befühlt", "wir": "befühlen", "ihr": "befühlt", "sie_Sie": "befühlen" }, "praeteritum": { "ich": "befühlte", "du": "befühltest", "er_sie_es": "befühlte", "wir": "befühlten", "ihr": "befühltet", "sie_Sie": "befühlten" }, "perfekt": "hat befühlt", "imperativ": "Befühle den Stoff!" },
    "contoh_kalimat": [{ "de": "Sie befühlt den Seidenstoff im Geschäft.", "id": "Dia memegang merasakan kelembutan kain sutra di toko." }]
  },
  {
    "id": "spueren-916",
    "level": "A2",
    "infinitiv": "spüren",
    "arti": "merasakan hawa panas/getaran fisik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "spüre", "du": "spürst", "er_sie_es": "spürt", "wir": "spüren", "ihr": "spürt", "sie_Sie": "spüren" }, "praeteritum": { "ich": "spürte", "du": "spürtest", "er_sie_es": "spürte", "wir": "spürten", "ihr": "spürtet", "sie_Sie": "spürten" }, "perfekt": "hat gespürt", "imperativ": "Spüre den Wind!" },
    "contoh_kalimat": [{ "de": "Ich spüre den kalten Wind im Gesicht.", "id": "Saya merasakan angin dingin menerpa wajah." }]
  },
  {
    "id": "empfinden-917",
    "level": "B2",
    "infinitiv": "empfinden",
    "arti": "merasakan simpati batiniah",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "praepositionen": [{ "präposition": "für", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "empfinde", "du": "empfindest", "er_sie_es": "empfindet", "wir": "empfinden", "ihr": "empfindet", "sie_Sie": "empfinden" }, "praeteritum": { "ich": "empfand", "du": "empfandest", "er_sie_es": "empfand", "wir": "empfanden", "ihr": "empfandet", "sie_Sie": "empfanden" }, "perfekt": "hat empfunden", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Er empfindet tiefes Mitleid für die Opfer.", "id": "Dia merasakan empati yang mendalam bagi para korban." }]
  },
  {
    "id": "erleiden-918",
    "level": "B2",
    "infinitiv": "erleiden",
    "arti": "mengalami cedera kekalahan pahit",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "erleide", "du": "erleidest", "er_sie_es": "erleidet", "wir": "erleiden", "ihr": "erleidet", "sie_Sie": "erleiden" }, "praeteritum": { "ich": "erlitt", "du": "erlittest", "er_sie_es": "erlitt", "wir": "erlitten", "ihr": "erlittet", "sie_Sie": "erlitten" }, "perfekt": "hat erlitten", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Fahrer erlitt leichte Verletzungen.", "id": "Pengemudi mengalami luka-luka ringan." }]
  },
  {
    "id": "hinnehmen-919",
    "level": "B2",
    "infinitiv": "hinnehmen",
    "arti": "menerima pasrah kekalahan/kritik",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "nehme hin", "du": "nimmst hin", "er_sie_es": "nimmt hin", "wir": "nehmen hin", "ihr": "nehmt hin", "sie_Sie": "nehmen hin" }, "praeteritum": { "ich": "nahm hin", "du": "nahmst hin", "er_sie_es": "nahm hin", "wir": "nahmen hin", "ihr": "nahmt hin", "sie_Sie": "nahmen hin" }, "perfekt": "hat hingenommen", "imperativ": "Nimm es hin!" },
    "contoh_kalimat": [{ "de": "Wir müssen die Entscheidung wohl hinnehmen.", "id": "Kita agaknya harus menerima pasrah keputusan itu." }]
  },
  {
    "id": "dulden-920",
    "level": "C1",
    "infinitiv": "hinwegsehen",
    "arti": "memaklumi memejamkan mata atas kesalahan kecil",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "sehe hinweg", "du": "siehst hinweg", "er_sie_es": "sieht hinweg", "wir": "sehen hinweg", "ihr": "seht hinweg", "sie_Sie": "sehen hinweg" }, "praeteritum": { "ich": "sah hinweg", "du": "sahst hinweg", "er_sie_es": "sah hinweg", "wir": "sahen hinweg", "ihr": "saht hinweg", "sie_Sie": "sahen hinweg" }, "perfekt": "hat hinweggesehen", "imperativ": "Sieh darüber hinweg!" },
    "contoh_kalimat": [{ "de": "Über diesen kleinen Fehler kann man hinwegsehen.", "id": "Kesalahan sekecil ini masih bisa dimaklumi." }]
  },
  {
    "id": "nachsehen-921",
    "level": "A2",
    "infinitiv": "nachsehen",
    "arti": "mengecek ulang, memaafkan kekeliruan kecil",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "sehe nach", "du": "siehst nach", "er_sie_es": "sieht nach", "wir": "sehen nach", "ihr": "seht nach", "sie_Sie": "sehen nach" }, "praeteritum": { "ich": "sah nach", "du": "sahst nach", "er_sie_es": "sah nach", "wir": "sahen nach", "ihr": "saht nach", "sie_Sie": "sahen nach" }, "perfekt": "hat nachgesehen", "imperativ": "Sieh nach!" },
    "contoh_kalimat": [{ "de": "Ich sehe im Wörterbuch nach.", "id": "Saya mengeceknya di dalam kamus." }]
  },
  {
    "id": "nachschlagen-922",
    "level": "B1",
    "infinitiv": "nachschlagen",
    "arti": "mencari rujukan di buku/kamus",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schlage nach", "du": "schlägst nach", "er_sie_es": "schlägt nach", "wir": "schlagen nach", "ihr": "schlagt nach", "sie_Sie": "schlagen nach" }, "praeteritum": { "ich": "schlug nach", "du": "schlugst nach", "er_sie_es": "schlug nach", "wir": "schlugen nach", "ihr": "schlugt nach", "sie_Sie": "schlugen nach" }, "perfekt": "hat nachgeschlagen", "imperativ": "Schlag nach!" },
    "contoh_kalimat": [{ "de": "Schlag das Wort im Duden nach!", "id": "Carilah rujukan kata itu di kamus Duden!" }]
  },
  {
    "id": "blaettern-923",
    "level": "B1",
    "infinitiv": "blättern",
    "arti": "membalik-balik lembaran buku",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "in", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "blättere", "du": "blätterst", "er_sie_es": "blättert", "wir": "blättern", "ihr": "blättert", "sie_Sie": "blättern" }, "praeteritum": { "ich": "blätterte", "du": "blättertest", "er_sie_es": "blätterte", "wir": "blätterten", "ihr": "blättertet", "sie_Sie": "blätterten" }, "perfekt": "hat geblättert", "imperativ": "Blättere!" },
    "contoh_kalimat": [{ "de": "Er blättert gelangweilt im Magazin.", "id": "Dia membalik-balik majalah dengan rasa bosan." }]
  },
  {
    "id": "ueberfliegen-924",
    "level": "B2",
    "infinitiv": "überfliegen",
    "arti": "membaca sekilas (skimming), terbang melintasi",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "überfliege", "du": "überfliegst", "er_sie_es": "überfliegt", "wir": "überfliegen", "ihr": "überfliegt", "sie_Sie": "überfliegen" }, "praeteritum": { "ich": "überflog", "du": "überflogst", "er_sie_es": "überflog", "wir": "überflogen", "ihr": "überflogt", "sie_Sie": "überflogen" }, "perfekt": "hat überflogen", "imperativ": "Überfliege den Text!" },
    "contoh_kalimat": [{ "de": "Ich habe den Bericht nur kurz überflogen.", "id": "Saya hanya membaca laporan itu sekilas." }]
  },
  {
    "id": "vertiefen-925",
    "level": "B2",
    "infinitiv": "sich vertiefen",
    "arti": "tenggelam asyik membaca/belajar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "in", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "vertiefe mich", "du": "vertiefst dich", "er_sie_es": "vertieft sich", "wir": "vertiefen uns", "ihr": "vertieft euch", "sie_Sie": "vertiefen sich" }, "praeteritum": { "ich": "vertiefte mich", "du": "vertieftest dich", "er_sie_es": "vertiefte sich", "wir": "vertieften uns", "ihr": "vertieftet euch", "sie_Sie": "vertieften sich" }, "perfekt": "hat sich vertieft", "imperativ": "Vertiefe dich!" },
    "contoh_kalimat": [{ "de": "Sie vertiefte sich ganz in ihre Lektüre.", "id": "Dia larut sepenuhnya membaca buku bacaannya." }]
  },
  {
    "id": "einpraegen-926",
    "level": "B2",
    "infinitiv": "sich einprägen",
    "arti": "menghafal lekat-lekat dalam ingatan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "präge mir ein", "du": "prägst dir ein", "er_sie_es": "prägt sich ein", "wir": "prägen uns ein", "ihr": "prägt euch ein", "sie_Sie": "prägen sich ein" }, "praeteritum": { "ich": "prägte mir ein", "du": "prägtest dir ein", "er_sie_es": "prägte sich ein", "wir": "prägten uns ein", "ihr": "prägtet euch ein", "sie_Sie": "prägten sich ein" }, "perfekt": "hat sich eingeprägt", "imperativ": "Präg dir das ein!" },
    "contoh_kalimat": [{ "de": "Ich habe mir die Route genau eingeprägt.", "id": "Saya menghafal rute jalan itu baik-baik." }]
  },
  {
    "id": "auswendiglernen-927",
    "level": "A2",
    "infinitiv": "auswendiglernen",
    "arti": "menghafal di luar kepala",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "lerne auswendig", "du": "lernst auswendig", "er_sie_es": "lernt auswendig", "wir": "lernen auswendig", "ihr": "lernt auswendig", "sie_Sie": "lernen auswendig" }, "praeteritum": { "ich": "lernte auswendig", "du": "lerntest auswendig", "er_sie_es": "lernte auswendig", "wir": "lernten auswendig", "ihr": "lerntet auswendig", "sie_Sie": "lernten auswendig" }, "perfekt": "hat auswendiggelernt", "imperativ": "Lern das Gedicht auswendig!" },
    "contoh_kalimat": [{ "de": "Wir mussten das Gedicht auswendiglernen.", "id": "Kami harus menghafal puisi itu di luar kepala." }]
  },
  {
    "id": "aufsagen-928",
    "level": "B1",
    "infinitiv": "aufsagen",
    "arti": "mendeklamasikan hafalan di depan kelas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "sage auf", "du": "sagst auf", "er_sie_es": "sagt auf", "wir": "sagen auf", "ihr": "sagt auf", "sie_Sie": "sagen auf" }, "praeteritum": { "ich": "sagte auf", "du": "sagtest auf", "er_sie_es": "sagte auf", "wir": "sagten auf", "ihr": "sagtet auf", "sie_Sie": "sagten auf" }, "perfekt": "hat aufgesagt", "imperativ": "Sag das Gedicht auf!" },
    "contoh_kalimat": [{ "de": "Der Schüler sagte das Gedicht fehlerfrei auf.", "id": "Siswa itu mendeklamasikan puisi tanpa salah." }]
  },
  {
    "id": "vortragen-929",
    "level": "B2",
    "infinitiv": "vortragen",
    "arti": "mempresentasikan materi/argumen",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "trage vor", "du": "trägst vor", "er_sie_es": "trägt vor", "wir": "tragen vor", "ihr": "tragt vor", "sie_Sie": "tragen vor" }, "praeteritum": { "ich": "trug vor", "du": "trugst vor", "er_sie_es": "trug vor", "wir": "trugen vor", "ihr": "trugt vor", "sie_Sie": "trugen vor" }, "perfekt": "hat vorgetragen", "imperativ": "Trage deine Idee vor!" },
    "contoh_kalimat": [{ "de": "Sie trug ihre Bedenken sachlich vor.", "id": "Dia mempresentasikan kekhawatirannya secara objektif." }]
  },
  {
    "id": "referieren-930",
    "level": "C1",
    "infinitiv": "referieren",
    "arti": "berceramah ilmiah mengenai suatu topik",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "über", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "referiere", "du": "referierst", "er_sie_es": "referiert", "wir": "referieren", "ihr": "referiert", "sie_Sie": "referieren" }, "praeteritum": { "ich": "referierte", "du": "referiertest", "er_sie_es": "referierte", "wir": "referierten", "ihr": "referiertet", "sie_Sie": "referierten" }, "perfekt": "hat referiert", "imperativ": "Referiere!" },
    "contoh_kalimat": [{ "de": "Der Dozent referierte über moderne Linguistik.", "id": "Dosen itu berceramah mengenai linguistik modern." }]
  },
  {
    "id": "moderieren-931",
    "level": "B2",
    "infinitiv": "moderieren",
    "arti": "memandu jalannya acara (MC/moderator)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "moderiere", "du": "moderierst", "er_sie_es": "moderiert", "wir": "moderieren", "ihr": "moderiert", "sie_Sie": "moderieren" }, "praeteritum": { "ich": "moderierte", "du": "moderiertest", "er_sie_es": "moderierte", "wir": "moderierten", "ihr": "moderiertet", "sie_Sie": "moderierten" }, "perfekt": "hat moderiert", "imperativ": "Moderiere die Show!" },
    "contoh_kalimat": [{ "de": "Wer moderiert die Talkshow heute Abend?", "id": "Siapa yang memandu acara gelar wicara malam ini?" }]
  },
  {
    "id": "interviewen-932",
    "level": "B1",
    "infinitiv": "interviewen",
    "arti": "mewawancarai narasumber",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "interviewe", "du": "interviewst", "er_sie_es": "interviewt", "wir": "interviewen", "ihr": "interviewt", "sie_Sie": "interviewen" }, "praeteritum": { "ich": "interviewte", "du": "interviewtest", "er_sie_es": "interviewte", "wir": "interviewten", "ihr": "interviewtet", "sie_Sie": "interviewten" }, "perfekt": "hat interviewt", "imperativ": "Interviewe den Gast!" },
    "contoh_kalimat": [{ "de": "Der Reporter interviewt den Regisseur.", "id": "Wartawan itu mewawancarai sang sutradara." }]
  },
  {
    "id": "befragen-933",
    "level": "B1",
    "infinitiv": "befragen",
    "arti": "menginterogasi saksi, menyurvei warga",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "befrage", "du": "befragst", "er_sie_es": "befragt", "wir": "befragen", "ihr": "befragt", "sie_Sie": "befragen" }, "praeteritum": { "ich": "befragte", "du": "befragtest", "er_sie_es": "befragte", "wir": "befragten", "ihr": "befragtet", "sie_Sie": "befragten" }, "perfekt": "hat befragt", "imperativ": "Befrage die Zeugen!" },
    "contoh_kalimat": [{ "de": "Die Beamten befragten mehrere Passanten.", "id": "Petugas menginterogasi beberapa pejalan kaki." }]
  },
  {
    "id": "verhoeren-934",
    "level": "B2",
    "infinitiv": "verhören",
    "arti": "memeriksa terdakwa di kepolisian",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verhöre", "du": "verhörst", "er_sie_es": "verhört", "wir": "verhören", "ihr": "verhört", "sie_Sie": "verhören" }, "praeteritum": { "ich": "verhörte", "du": "verhörtest", "er_sie_es": "verhörte", "wir": "verhörten", "ihr": "verhörtet", "sie_Sie": "verhörten" }, "perfekt": "hat verhört", "imperativ": "Verhöre den Verdächtigen!" },
    "contoh_kalimat": [{ "de": "Der Kriminalist verhörte den Verdächtigen stundenlang.", "id": "Penyidik memeriksa tersangka selama berjam-jam." }]
  },
  {
    "id": "abhoeren-935",
    "level": "B2",
    "infinitiv": "abhören",
    "arti": "menyadap saluran telepon, memeriksa bunyi paru-paru",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "höre ab", "du": "hörst ab", "er_sie_es": "hört ab", "wir": "hören ab", "ihr": "hört ab", "sie_Sie": "hören ab" }, "praeteritum": { "ich": "hörte ab", "du": "hörtest ab", "er_sie_es": "hörte ab", "wir": "hörten ab", "ihr": "hörtet ab", "sie_Sie": "hörten ab" }, "perfekt": "hat abgehört", "imperativ": "Hör die Lunge ab!" },
    "contoh_kalimat": [{ "de": "Der Arzt hörte die Lunge des Patienten ab.", "id": "Dokter memeriksa suara paru-paru pasien." }]
  },
  {
    "id": "filmen-936",
    "level": "A2",
    "infinitiv": "filmen",
    "arti": "merekam adegan video kamera",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "filme", "du": "filmst", "er_sie_es": "filmt", "wir": "filmen", "ihr": "filmt", "sie_Sie": "filmen" }, "praeteritum": { "ich": "filmte", "du": "filmtest", "er_sie_es": "filmte", "wir": "filmten", "ihr": "filmtet", "sie_Sie": "filmten" }, "perfekt": "hat gefilmt", "imperativ": "Filme die Szene!" },
    "contoh_kalimat": [{ "de": "Die Touristen filmten den Sonnenuntergang.", "id": "Wisatawan merekam matahari terbenam." }]
  },
  {
    "id": "aufnehmen-937",
    "level": "A2",
    "infinitiv": "aufnehmen",
    "arti": "merekam audio/video, menampung tamu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "nehme auf", "du": "nimmst auf", "er_sie_es": "nimmt auf", "wir": "nehmen auf", "ihr": "nehmt auf", "sie_Sie": "nehmen auf" }, "praeteritum": { "ich": "nahm auf", "du": "nahmst auf", "er_sie_es": "nahm auf", "wir": "nahmen auf", "ihr": "nahmt auf", "sie_Sie": "nahmen auf" }, "perfekt": "hat aufgenommen", "imperativ": "Nimm den Ton auf!" },
    "contoh_kalimat": [{ "de": "Die Band nimmt ein neues Album auf.", "id": "Grup musik itu sedang merekam album baru." }]
  },
  {
    "id": "fotografieren-938",
    "level": "A1",
    "infinitiv": "fotografieren",
    "arti": "memotret foto kamera",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "fotografiere", "du": "fotografierst", "er_sie_es": "fotografiert", "wir": "fotografieren", "ihr": "fotografiert", "sie_Sie": "fotografieren" }, "praeteritum": { "ich": "fotografierte", "du": "fotografiertest", "er_sie_es": "fotografierte", "wir": "fotografierten", "ihr": "fotografiertet", "sie_Sie": "fotografierten" }, "perfekt": "hat fotografiert", "imperativ": "Fotografiere uns!" },
    "contoh_kalimat": [{ "de": "Darf man in diesem Museum fotografieren?", "id": "Bolehkah memotret di museum ini?" }]
  },
  {
    "id": "knipsen-939",
    "level": "A2",
    "infinitiv": "knipsen",
    "arti": "jepret foto santai, melubangi karcis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "knipse", "du": "knipst", "er_sie_es": "knipst", "wir": "knipsen", "ihr": "knipst", "sie_Sie": "knipsen" }, "praeteritum": { "ich": "knipste", "du": "knipstest", "er_sie_es": "knipste", "wir": "knipsten", "ihr": "knipstet", "sie_Sie": "knipsten" }, "perfekt": "hat geknipst", "imperativ": "Knips ein Foto!" },
    "contoh_kalimat": [{ "de": "Er hat im Urlaub hunderte Bilder geknipst.", "id": "Dia menjepret ratusan foto saat liburan." }]
  },
  {
    "id": "blitzen-940",
    "level": "A2",
    "infinitiv": "blitzen",
    "arti": "menyalakan lampu kilat kamera (flash)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "blitze", "du": "blitzt", "er_sie_es": "blitzt", "wir": "blitzen", "ihr": "blitzt", "sie_Sie": "blitzen" }, "praeteritum": { "ich": "blitzte", "du": "blitztest", "er_sie_es": "blitzte", "wir": "blitzten", "ihr": "blitztet", "sie_Sie": "blitzten" }, "perfekt": "hat geblitzt", "imperativ": "Bitte ohne Blitz fotografieren!" },
    "contoh_kalimat": [{ "de": "Die Kamera hat automatisch geblitzt.", "id": "Kamera menyalakan lampu kilat secara otomatis." }]
  },
  {
    "id": "zoomen-941",
    "level": "A2",
    "infinitiv": "zoomen",
    "arti": "memperbesar bidikan lensa kamera",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "auf", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "zoome", "du": "zoomst", "er_sie_es": "zoomt", "wir": "zoomen", "ihr": "zoomt", "sie_Sie": "zoomen" }, "praeteritum": { "ich": "zoomte", "du": "zoomtest", "er_sie_es": "zoomte", "wir": "zoomten", "ihr": "zoomtet", "sie_Sie": "zoomten" }, "perfekt": "hat gezoomt", "imperativ": "Zoom näher ran!" },
    "contoh_kalimat": [{ "de": "Zoom mal näher an das Gebäude heran!", "id": "Coba perbesar bidikan lensamu ke arah gedung itu!" }]
  },
  {
    "id": "scharfstellen-942",
    "level": "B2",
    "infinitiv": "scharfstellen",
    "arti": "memfokuskan ketajaman gambar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "stelle scharf", "du": "stellst scharf", "er_sie_es": "stellt scharf", "wir": "stellen scharf", "ihr": "stellt scharf", "sie_Sie": "stellen scharf" }, "praeteritum": { "ich": "stellte scharf", "du": "stelltest scharf", "er_sie_es": "stellte scharf", "wir": "stellten scharf", "ihr": "stelltet scharf", "sie_Sie": "stellten scharf" }, "perfekt": "hat scharfgestellt", "imperativ": "Stell das Bild scharf!" },
    "contoh_kalimat": [{ "de": "Das Objektiv stellt das Motiv automatisch scharf.", "id": "Lensa memfokuskan objek secara otomatis." }]
  },
  {
    "id": "verwackeln-943",
    "level": "B1",
    "infinitiv": "verwackeln",
    "arti": "gambar buram goyang saat difoto",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verwackle", "du": "verwackelst", "er_sie_es": "verwackelt", "wir": "verwackeln", "ihr": "verwackelt", "sie_Sie": "verwackeln" }, "praeteritum": { "ich": "verwackelte", "du": "verwackeltest", "er_sie_es": "verwackelte", "wir": "verwackelten", "ihr": "verwackeltet", "sie_Sie": "verwackelten" }, "perfekt": "hat verwackelt", "imperativ": "Nicht verwackeln!" },
    "contoh_kalimat": [{ "de": "Halte die Kamera ruhig, sonst verwackelt das Bild.", "id": "Pegang kamera dengan stabil agar gambarnya tidak buram goyang." }]
  },
  {
    "id": "belichten-944",
    "level": "B2",
    "infinitiv": "belichten",
    "arti": "mengatur pencahayaan bukaan rana",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "belichte", "du": "belichtest", "er_sie_es": "belichtet", "wir": "belichten", "ihr": "belichtet", "sie_Sie": "belichten" }, "praeteritum": { "ich": "belichtete", "du": "belichtetest", "er_sie_es": "belichtete", "wir": "belichteten", "ihr": "belichtetet", "sie_Sie": "belichteten" }, "perfekt": "hat belichtet", "imperativ": "Belichte das Foto korrekt!" },
    "contoh_kalimat": [{ "de": "Das Foto ist leider etwas überbelichtet.", "id": "Foto ini sayangnya agak kelebihan cahaya." }]
  },
  {
    "id": "entwickeln-945",
    "level": "B1",
    "infinitiv": "entwickeln",
    "arti": "mencuci rol film foto",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "entwickle", "du": "entwickelst", "er_sie_es": "entwickelt", "wir": "entwickeln", "ihr": "entwickelt", "sie_Sie": "entwickeln" }, "praeteritum": { "ich": "entwickelte", "du": "entwickeltest", "er_sie_es": "entwickelte", "wir": "entwickelten", "ihr": "entwickeltet", "sie_Sie": "entwickelten" }, "perfekt": "hat entwickelt", "imperativ": "Entwickle den Film!" },
    "contoh_kalimat": [{ "de": "Früher musste man Filme im Fotolabor entwickeln.", "id": "Dahulu orang harus mencuci rol film di laboratorium foto." }]
  },
  {
    "id": "retuschieren-946",
    "level": "C1",
    "infinitiv": "retuschieren",
    "arti": "mengedit membersihkan noda pada foto",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "retuschiere", "du": "retuschierst", "er_sie_es": "retuschiert", "wir": "retuschieren", "ihr": "retuschiert", "sie_Sie": "retuschieren" }, "praeteritum": { "ich": "retuschierte", "du": "retuschiertest", "er_sie_es": "retuschierte", "wir": "retuschierten", "ihr": "retuschiertet", "sie_Sie": "retuschierten" }, "perfekt": "hat retuschiert", "imperativ": "Retuschiere den Fehler!" },
    "contoh_kalimat": [{ "de": "Kleine Hautunreinheiten wurden digital retuschiert.", "id": "Noda kecil pada kulit diedit dibersihkan secara digital." }]
  },
  {
    "id": "bearbeiten-947",
    "level": "B1",
    "infinitiv": "bearbeiten",
    "arti": "mengedit foto/video/berkas",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "bearbeite", "du": "bearbeitest", "er_sie_es": "bearbeitet", "wir": "bearbeiten", "ihr": "bearbeitet", "sie_Sie": "bearbeiten" }, "praeteritum": { "ich": "bearbeitete", "du": "bearbeitetest", "er_sie_es": "bearbeitete", "wir": "bearbeiteten", "ihr": "bearbeitetet", "sie_Sie": "bearbeiteten" }, "perfekt": "hat bearbeitet", "imperativ": "Bearbeite das Bild!" },
    "contoh_kalimat": [{ "de": "Ich bearbeite das Video mit einem Schnittprogramm.", "id": "Saya mengedit video tersebut menggunakan aplikasi penyunting." }]
  },
  {
    "id": "schneiden-948",
    "level": "B1",
    "infinitiv": "schneiden",
    "arti": "menyunting potongan film (video editing)",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "schneide", "du": "schneidest", "er_sie_es": "schneidet", "wir": "schneiden", "ihr": "schneidet", "sie_Sie": "schneiden" }, "praeteritum": { "ich": "schnitt", "du": "schnittest", "er_sie_es": "schnitt", "wir": "schnitten", "ihr": "schnittet", "sie_Sie": "schnitten" }, "perfekt": "hat geschnitten", "imperativ": "Schneide den Film!" },
    "contoh_kalimat": [{ "de": "Der Cutter schneidet die Szenen zusammen.", "id": "Editor menyunting dan menyambung adegan-adegan itu." }]
  },
  {
    "id": "rendern-949",
    "level": "B2",
    "infinitiv": "rendern",
    "arti": "merender animasi 3D/video",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "rendere", "du": "renderst", "er_sie_es": "rendert", "wir": "rendern", "ihr": "rendert", "sie_Sie": "rendern" }, "praeteritum": { "ich": "renderte", "du": "rendertest", "er_sie_es": "renderte", "wir": "renderten", "ihr": "rendertet", "sie_Sie": "renderten" }, "perfekt": "hat gerendert", "imperativ": "Rendere das Projekt!" },
    "contoh_kalimat": [{ "de": "Der Rechner rendert die 3D-Animation seit Stunden.", "id": "Komputer sedang merender animasi 3D selama berjam-jam." }]
  },
  {
    "id": "animieren-950",
    "level": "B2",
    "infinitiv": "animieren",
    "arti": "menganimasikan gambar, mengajak orang santai",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "zu", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "animiere", "du": "animierst", "er_sie_es": "animiert", "wir": "animieren", "ihr": "animiert", "sie_Sie": "animieren" }, "praeteritum": { "ich": "animierte", "du": "animiertest", "er_sie_es": "animierte", "wir": "animierten", "ihr": "animiertet", "sie_Sie": "animierten" }, "perfekt": "hat animiert", "imperativ": "Animiere das Logo!" },
    "contoh_kalimat": [{ "de": "Er animiert ein Raketenlogo für das Intro.", "id": "Dia menganimasikan logo roket untuk bagian pembuka." }]
  },
  {
    "id": "gestalten-951",
    "level": "B1",
    "infinitiv": "gestalten",
    "arti": "merancang desain visual",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "gestalte", "du": "gestaltest", "er_sie_es": "gestaltet", "wir": "gestalten", "ihr": "gestaltet", "sie_Sie": "gestalten" }, "praeteritum": { "ich": "gestaltete", "du": "gestaltetest", "er_sie_es": "gestaltete", "wir": "gestalteten", "ihr": "gestaltetet", "sie_Sie": "gestalteten" }, "perfekt": "hat gestaltet", "imperativ": "Gestalte die Seite!" },
    "contoh_kalimat": [{ "de": "Die Grafikerin gestaltet das neue Buchcover.", "id": "Desainer grafis merancang sampul buku baru." }]
  },
  {
    "id": "entwerfen-952",
    "level": "B2",
    "infinitiv": "entwerfen",
    "arti": "membuat cetak biru rancangan",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "entwerfe", "du": "entwirfst", "er_sie_es": "entwirft", "wir": "entwerfen", "ihr": "entwerft", "sie_Sie": "entwerfen" }, "praeteritum": { "ich": "entwarf", "du": "entwarfst", "er_sie_es": "entwarf", "wir": "entwarfen", "ihr": "entwarft", "sie_Sie": "entwarfen" }, "perfekt": "hat entworfen", "imperativ": "Entwirf einen Plan!" },
    "contoh_kalimat": [{ "de": "Der Architekt entwarf ein nachhaltiges Bürogebäude.", "id": "Arsitek merancang gedung kantor yang ramah lingkungan." }]
  },
  {
    "id": "skizzieren-953",
    "level": "B2",
    "infinitiv": "skizzieren",
    "arti": "membuat sketsa dasar garis",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "skizziere", "du": "skizzierst", "er_sie_es": "skizziert", "wir": "skizzieren", "ihr": "skizziert", "sie_Sie": "skizzieren" }, "praeteritum": { "ich": "skizzierte", "du": "skizziertest", "er_sie_es": "skizzierte", "wir": "skizzierten", "ihr": "skizziertet", "sie_Sie": "skizzierten" }, "perfekt": "hat skizziert", "imperativ": "Skizziere deine Idee!" },
    "contoh_kalimat": [{ "de": "Er skizzierte kurz seine Vorstellung auf Papier.", "id": "Dia membuat sketsa singkat idenya di atas kertas." }]
  },
  {
    "id": "modellieren-954",
    "level": "C1",
    "infinitiv": "modellieren",
    "arti": "membentuk tanah liat/model 3D",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "modelliere", "du": "modellierst", "er_sie_es": "modelliert", "wir": "modellieren", "ihr": "modelliert", "sie_Sie": "modellieren" }, "praeteritum": { "ich": "modellierte", "du": "modelliertest", "er_sie_es": "modellierte", "wir": "modellierten", "ihr": "modelliertet", "sie_Sie": "modellierten" }, "perfekt": "hat modelliert", "imperativ": "Modelliere die Figur!" },
    "contoh_kalimat": [{ "de": "Sie modelliert eine Skulptur aus Ton.", "id": "Dia membentuk patung dari tanah liat." }]
  },
  {
    "id": "nachformen-955",
    "level": "B1",
    "infinitiv": "nachformen",
    "arti": "meniru replika bentuk",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "forme nach", "du": "formst nach", "er_sie_es": "formt nach", "wir": "formen nach", "ihr": "formt nach", "sie_Sie": "formen nach" }, "praeteritum": { "ich": "formte nach", "du": "formtest nach", "er_sie_es": "formte nach", "wir": "formten nach", "ihr": "formtet nach", "sie_Sie": "formten nach" }, "perfekt": "hat nachgeformt", "imperativ": "Forme das Original nach!" },
    "contoh_kalimat": [{ "de": "Der Bildhauer formte die antike Büste nach.", "id": "Pematung meniru bentuk patung dada kuno itu." }]
  },
  {
    "id": "giessen-956",
    "level": "B2",
    "infinitiv": "gießen",
    "arti": "mencetak cor logam/patung perunggu",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "konjugasi": { "praesens": { "ich": "gieße", "du": "gießt", "er_sie_es": "gießt", "wir": "gießen", "ihr": "gießt", "sie_Sie": "gießen" }, "praeteritum": { "ich": "goss", "du": "gossest", "er_sie_es": "goss", "wir": "gossen", "ihr": "gosst", "sie_Sie": "gossen" }, "perfekt": "hat gegossen", "imperativ": "Gieße die Form!" },
    "contoh_kalimat": [{ "de": "In dieser Fabrik gießt man Glocken aus Bronze.", "id": "Di pabrik ini orang mencor lonceng dari perunggu." }]
  },
  {
    "id": "schmieden-957",
    "level": "B2",
    "infinitiv": "schmieden",
    "arti": "menempa besi pijar, merancang rencana",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schmiede", "du": "schmiedest", "er_sie_es": "schmiedet", "wir": "schmieden", "ihr": "schmiedet", "sie_Sie": "schmieden" }, "praeteritum": { "ich": "schmiedete", "du": "schmiedetest", "er_sie_es": "schmiedete", "wir": "schmiedeten", "ihr": "schmiedetet", "sie_Sie": "schmiedeten" }, "perfekt": "hat geschmiedet", "imperativ": "Schmiede das Eisen!" },
    "contoh_kalimat": [{ "de": "Man muss das Eisen schmieden, solange es heiß ist.", "id": "Manfaatkanlah peluang selagi ada kesempatan baik." }]
  },
  {
    "id": "gravieren-958",
    "level": "B2",
    "infinitiv": "gravieren",
    "arti": "mengukir tulisan pada cincin logam",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "graviere", "du": "gravierst", "er_sie_es": "graviert", "wir": "gravieren", "ihr": "graviert", "sie_Sie": "gravieren" }, "praeteritum": { "ich": "gravierte", "du": "graviertest", "er_sie_es": "gravierte", "wir": "gravierten", "ihr": "graviertet", "sie_Sie": "gravierten" }, "perfekt": "hat graviert", "imperativ": "Graviere den Namen!" },
    "contoh_kalimat": [{ "de": "Wir ließen das Hochzeitsdatum in die Ringe gravieren.", "id": "Kami meminta tanggal pernikahan diukir pada cincin." }]
  },
  {
    "id": "schnitzen-959",
    "level": "B1",
    "infinitiv": "schnitzen",
    "arti": "mengukir kayu dengan pisau raut",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schnitze", "du": "schnitzt", "er_sie_es": "schnitzt", "wir": "schnitzen", "ihr": "schnitzt", "sie_Sie": "schnitzen" }, "praeteritum": { "ich": "schnitzte", "du": "schnitztest", "er_sie_es": "schnitzte", "wir": "schnitzten", "ihr": "schnitztet", "sie_Sie": "schnitzten" }, "perfekt": "hat geschnitzt", "imperativ": "Schnitze die Figur!" },
    "contoh_kalimat": [{ "de": "Der Großvater schnitzt Holzfiguren für die Enkel.", "id": "Kakek mengukir patung kayu untuk para cucu." }]
  },
  {
    "id": "meisseln-960",
    "level": "C1",
    "infinitiv": "meißeln",
    "arti": "memahat batu marmer",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "meißle", "du": "meißelst", "er_sie_es": "meißelt", "wir": "meißeln", "ihr": "meißelt", "sie_Sie": "meißeln" }, "praeteritum": { "ich": "meißelte", "du": "meißeltest", "er_sie_es": "meißelte", "wir": "meißelten", "ihr": "meißeltet", "sie_Sie": "meißelten" }, "perfekt": "hat gemeißelt", "imperativ": "Meißle vorsichtig!" },
    "contoh_kalimat": [{ "de": "Der Künstler meißelt eine Statue aus Marmor.", "id": "Seniman itu memahat patung dari batu marmer." }]
  },
  {
    "id": "einhaemmern-961",
    "level": "B1",
    "infinitiv": "einhämmern",
    "arti": "memalu masuk paku, menjejalkan doktrin hafalan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "hämmere ein", "du": "hämmerst ein", "er_sie_es": "hämmert ein", "wir": "hämmern ein", "ihr": "hämmert ein", "sie_Sie": "hämmern ein" }, "praeteritum": { "ich": "hämmerte ein", "du": "hämmertest ein", "er_sie_es": "hämmerte ein", "wir": "hämmerten ein", "ihr": "hämmertet ein", "sie_Sie": "hämmerten ein" }, "perfekt": "hat eingehämmert", "imperativ": "Hämmere den Nagel ein!" },
    "contoh_kalimat": [{ "de": "Er hämmerte den Holzpflock fest in den Boden ein.", "id": "Dia memalu pasak kayu itu ke dalam tanah hingga kokoh." }]
  },
  {
    "id": "schrauben-962",
    "level": "A2",
    "infinitiv": "schrauben",
    "arti": "memutar baut obeng",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "schraube", "du": "schraubst", "er_sie_es": "schraubt", "wir": "schrauben", "ihr": "schraubt", "sie_Sie": "schrauben" }, "praeteritum": { "ich": "schraubte", "du": "schraubtest", "er_sie_es": "schraubte", "wir": "schraubten", "ihr": "schraubtet", "sie_Sie": "schraubten" }, "perfekt": "hat geschraubt", "imperativ": "Schraube die Leiste fest!" },
    "contoh_kalimat": [{ "de": "Er schraubt die Halterung an die Wand.", "id": "Dia memasang baut dudukan rak ke dinding." }]
  },
  {
    "id": "festschrauben-963",
    "level": "B1",
    "infinitiv": "festschrauben",
    "arti": "mengencangkan baut hingga rapat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schraube fest", "du": "schraubst fest", "er_sie_es": "schraubt fest", "wir": "schrauben fest", "ihr": "schraubt fest", "sie_Sie": "schrauben fest" }, "praeteritum": { "ich": "schraubte fest", "du": "schraubtest fest", "er_sie_es": "schraubte fest", "wir": "schraubten fest", "ihr": "schraubtet fest", "sie_Sie": "schraubten fest" }, "perfekt": "hat festgeschraubt", "imperativ": "Schraube die Schraube fest!" },
    "contoh_kalimat": [{ "de": "Hast du alle Schrauben festgeschraubt?", "id": "Apakah kamu sudah mengencangkan semua bautnya?" }]
  },
  {
    "id": "losschrauben-964",
    "level": "B1",
    "infinitiv": "losschrauben",
    "arti": "mengendurkan/melepas baut obeng",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schraube los", "du": "schraubst los", "er_sie_es": "schraubt los", "wir": "schrauben los", "ihr": "schraubt los", "sie_Sie": "schrauben los" }, "praeteritum": { "ich": "schraubte los", "du": "schraubtest los", "er_sie_es": "schraubte los", "wir": "schraubten los", "ihr": "schraubtet los", "sie_Sie": "schraubten los" }, "perfekt": "hat losgeschraubt", "imperativ": "Schraube das Rad los!" },
    "contoh_kalimat": [{ "de": "Um den Deckel zu öffnen, musst du die Platte losschrauben.", "id": "Untuk membuka penutupnya, kamu harus melepas baut pelat itu." }]
  },
  {
    "id": "festklemmen-965",
    "level": "B2",
    "infinitiv": "festklemmen",
    "arti": "menjepit kuat benda kerja",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "klemme fest", "du": "klemmst fest", "er_sie_es": "klemmt fest", "wir": "klemmen fest", "ihr": "klemmt fest", "sie_Sie": "klemmen fest" }, "praeteritum": { "ich": "klemmte fest", "du": "klemmtest fest", "er_sie_es": "klemmte fest", "wir": "klemmten fest", "ihr": "klemmtet fest", "sie_Sie": "klemmten fest" }, "perfekt": "hat festgeklemmt", "imperativ": "Klemme das Holz fest!" },
    "contoh_kalimat": [{ "de": "Klemmen Sie das Brett vor dem Sägen fest.", "id": "Jepitlah papan kayu itu sebelum digergaji." }]
  },
  {
    "id": "einklemmen-966",
    "level": "B1",
    "infinitiv": "sich einklemmen",
    "arti": "jari terjepit pintu",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "klemme mir ein", "du": "klemmst dir ein", "er_sie_es": "klemmt sich ein", "wir": "klemmen uns ein", "ihr": "klemmt euch ein", "sie_Sie": "klemmen sich ein" }, "praeteritum": { "ich": "klemmte mir ein", "du": "klemmtest dir ein", "er_sie_es": "klemmte sich ein", "wir": "klemmten uns ein", "ihr": "klemmtet euch ein", "sie_Sie": "klemmten sich ein" }, "perfekt": "hat sich eingeklemmt", "imperativ": "Pass auf, klemm dir nicht die Finger ein!" },
    "contoh_kalimat": [{ "de": "Er hat sich den Finger in der Wagentür eingeklemmt.", "id": "Jarinya terjepit pintu mobil." }]
  },
  {
    "id": "spannen-967",
    "level": "B2",
    "infinitiv": "spannen",
    "arti": "menegangkan tali busur panah",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "spanne", "du": "spannst", "er_sie_es": "spannt", "wir": "spannen", "ihr": "spannt", "sie_Sie": "spannen" }, "praeteritum": { "ich": "spannte", "du": "spanntest", "er_sie_es": "spannte", "wir": "spannten", "ihr": "spanntet", "sie_Sie": "spannten" }, "perfekt": "hat gespannt", "imperativ": "Spanne den Bogen!" },
    "contoh_kalimat": [{ "de": "Der Schütze spannte den Bogen konzentriert.", "id": "Pemanah itu menegangkan busurnya dengan penuh konsentrasi." }]
  },
  {
    "id": "entspannen-968",
    "level": "A2",
    "infinitiv": "entspannen",
    "arti": "mengendurkan ketegangan senar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "entspanne", "du": "entspannst", "er_sie_es": "entspannt", "wir": "entspannen", "ihr": "entspannt", "sie_Sie": "entspannen" }, "praeteritum": { "ich": "entspannte", "du": "entspanntest", "er_sie_es": "entspannte", "wir": "entspannten", "ihr": "entspanntet", "sie_Sie": "entspannten" }, "perfekt": "hat entspannt", "imperativ": "Entspanne die Saiten!" },
    "contoh_kalimat": [{ "de": "Entspannen Sie nach dem Spielen die Gitarrensaiten.", "id": "Kendurkan senar gitar setelah dimainkan." }]
  },
  {
    "id": "lockern-969",
    "level": "B2",
    "infinitiv": "lockern",
    "arti": "melonggarkan ikatan dasi/aturan ketat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "lockere", "du": "lockerst", "er_sie_es": "lockert", "wir": "lockern", "ihr": "lockert", "sie_Sie": "lockern" }, "praeteritum": { "ich": "lockerte", "du": "lockertest", "er_sie_es": "lockerte", "wir": "lockerten", "ihr": "lockertet", "sie_Sie": "lockerten" }, "perfekt": "hat gelockert", "imperativ": "Lockere die Krawatte!" },
    "contoh_kalimat": [{ "de": "Die Regierung hat die Reisebeschränkungen gelockert.", "id": "Pemerintah telah melonggarkan pembatasan perjalanan." }]
  },
  {
    "id": "festziehen-970",
    "level": "B1",
    "infinitiv": "festziehen",
    "arti": "menarik kencang simpul/tali",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "ziehe fest", "du": "ziehst fest", "er_sie_es": "zieht fest", "wir": "ziehen fest", "ihr": "zieht fest", "sie_Sie": "ziehen fest" }, "praeteritum": { "ich": "zog fest", "du": "zogst fest", "er_sie_es": "zog fest", "wir": "zogen fest", "ihr": "zogt fest", "sie_Sie": "zogen fest" }, "perfekt": "hat festgezogen", "imperativ": "Zieh den Knoten fest!" },
    "contoh_kalimat": [{ "de": "Zieh die Schnürsenkel fest zu!", "id": "Tarik kencang tali sepatumu!" }]
  },
  {
    "id": "festbinden-971",
    "level": "B1",
    "infinitiv": "festbinden",
    "arti": "menambatkan perahu di dermaga",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "binde fest", "du": "bindest fest", "er_sie_es": "bindet fest", "wir": "binden fest", "ihr": "bindet fest", "sie_Sie": "binden fest" }, "praeteritum": { "ich": "band fest", "du": "bandest fest", "er_sie_es": "band fest", "wir": "banden fest", "ihr": "bandet fest", "sie_Sie": "banden fest" }, "perfekt": "hat festgebunden", "imperativ": "Binde das Boot fest!" },
    "contoh_kalimat": [{ "de": "Sie banden das Segelboot am Steg fest.", "id": "Mereka menambatkan perahu layar di dermaga." }]
  },
  {
    "id": "losbinden-972",
    "level": "B1",
    "infinitiv": "losbinden",
    "arti": "melepaskan ikatan tali tawanan/anjing",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "binde los", "du": "bindest los", "er_sie_es": "bindet los", "wir": "binden los", "ihr": "bindet los", "sie_Sie": "binden los" }, "praeteritum": { "ich": "band los", "du": "bandest los", "er_sie_es": "band los", "wir": "banden los", "ihr": "bandet los", "sie_Sie": "banden los" }, "perfekt": "hat losgebunden", "imperativ": "Binde den Hund los!" },
    "contoh_kalimat": [{ "de": "Er band das Tier vom Zaun los.", "id": "Dia melepaskan ikatan hewan itu dari pagar." }]
  },
  {
    "id": "anbinden-973",
    "level": "A2",
    "infinitiv": "anbinden",
    "arti": "mengikatkan hewan pada tiang",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "binde an", "du": "bindest an", "er_sie_es": "bindet an", "wir": "binden an", "ihr": "bindet an", "sie_Sie": "binden an" }, "praeteritum": { "ich": "band an", "du": "bandest an", "er_sie_es": "band an", "wir": "banden an", "ihr": "bandet an", "sie_Sie": "banden an" }, "perfekt": "hat angebunden", "imperativ": "Binde den Hund an!" },
    "contoh_kalimat": [{ "de": "Hunde müssen vor dem Supermarkt angebunden werden.", "id": "Anjing harus diikatkan di depan pasar swalayan." }]
  },
  {
    "id": "anketten-974",
    "level": "B2",
    "infinitiv": "anketten",
    "arti": "menggembok dengan rantai besi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Akkusativ" }],
    "konjugasi": { "praesens": { "ich": "kette an", "du": "kettest an", "er_sie_es": "kettet an", "wir": "ketten an", "ihr": "kettet an", "sie_Sie": "ketten an" }, "praeteritum": { "ich": "kettete an", "du": "kettetest an", "er_sie_es": "kettete an", "wir": "ketteten an", "ihr": "kettetet an", "sie_Sie": "ketteten an" }, "perfekt": "hat angekettet", "imperativ": "Kette das Rad an!" },
    "contoh_kalimat": [{ "de": "Ich habe mein Fahrrad an die Laterne angekettet.", "id": "Saya menggembok sepeda ke tiang lampu dengan rantai." }]
  },
  {
    "id": "zusperren-975",
    "level": "A1",
    "infinitiv": "zusperren",
    "arti": "mengunci gerbang rapat-rapat",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "sperre zu", "du": "sperrst zu", "er_sie_es": "sperrt zu", "wir": "sperren zu", "ihr": "sperrt zu", "sie_Sie": "sperren zu" }, "praeteritum": { "ich": "sperrte zu", "du": "sperrtest zu", "er_sie_es": "sperrte zu", "wir": "sperrten zu", "ihr": "sperrtet zu", "sie_Sie": "sperrten zu" }, "perfekt": "hat zugesperrt", "imperativ": "Sperre das Tor zu!" },
    "contoh_kalimat": [{ "de": "Vergiss nicht, das Hoftor zuzusperren.", "id": "Jangan lupa mengunci pintu gerbang halaman." }]
  },
  {
    "id": "aufsperren-976",
    "level": "A2",
    "infinitiv": "aufsperren",
    "arti": "membuka kunci pintu lebar-lebar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "sperre auf", "du": "sperrst auf", "er_sie_es": "sperrt auf", "wir": "sperren auf", "ihr": "sperrt auf", "sie_Sie": "sperren auf" }, "praeteritum": { "ich": "sperrte auf", "du": "sperrtest auf", "er_sie_es": "sperrte auf", "wir": "sperrten auf", "ihr": "sperrtet auf", "sie_Sie": "sperrten auf" }, "perfekt": "hat aufgesperrt", "imperativ": "Sperr die Tür auf!" },
    "contoh_kalimat": [{ "de": "Er sperrte hastig die Eingangstür auf.", "id": "Dia membuka kunci pintu masuk secara tergesa-gesa." }]
  },
  {
    "id": "verriegeln-977",
    "level": "B2",
    "infinitiv": "verriegeln",
    "arti": "menyelot pintu dengan palang besi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verriegle", "du": "verriegelst", "er_sie_es": "verriegelt", "wir": "verriegeln", "ihr": "verriegelt", "sie_Sie": "verriegeln" }, "praeteritum": { "ich": "verriegelte", "du": "verriegeltest", "er_sie_es": "verriegelte", "wir": "verriegelten", "ihr": "verriegeltet", "sie_Sie": "verriegelten" }, "perfekt": "hat verriegelt", "imperativ": "Verriegle das Fenster!" },
    "contoh_kalimat": [{ "de": "Die Sicherheitstür verriegelt sich automatisch.", "id": "Pintu keamanan itu menyelot secara otomatis." }]
  },
  {
    "id": "entriegeln-978",
    "level": "B2",
    "infinitiv": "entriegeln",
    "arti": "membuka selot gembok/layar HP",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "entriegle", "du": "entriegelst", "er_sie_es": "entriegelt", "wir": "entriegeln", "ihr": "entriegelt", "sie_Sie": "entriegeln" }, "praeteritum": { "ich": "entriegelte", "du": "entriegeltest", "er_sie_es": "entriegelte", "wir": "entriegelten", "ihr": "entriegeltet", "sie_Sie": "entriegelten" }, "perfekt": "hat entriegelt", "imperativ": "Entriegle das Schloss!" },
    "contoh_kalimat": [{ "de": "Mit dem Fingerabdruck kann man das Handy entriegeln.", "id": "Dengan sidik jari orang bisa membuka kunci layar ponsel." }]
  },
  {
    "id": "sperren-979",
    "level": "B1",
    "infinitiv": "sperren",
    "arti": "memblokir kartu ATM/jalan raya",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "sperre", "du": "sperrst", "er_sie_es": "sperrt", "wir": "sperren", "ihr": "sperrt", "sie_Sie": "sperren" }, "praeteritum": { "ich": "sperrte", "du": "sperrtest", "er_sie_es": "sperrte", "wir": "sperrten", "ihr": "sperrtet", "sie_Sie": "sperrten" }, "perfekt": "hat gesperrt", "imperativ": "Sperre die Karte!" },
    "contoh_kalimat": [{ "de": "Die Polizei sperrte die Straße nach dem Unfall.", "id": "Polisi memblokir jalan raya usai terjadi kecelakaan." }]
  },
  {
    "id": "entsperren-980",
    "level": "A2",
    "infinitiv": "entsperren",
    "arti": "membuka blokir rekening/layar",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "entsperre", "du": "entsperrst", "er_sie_es": "entsperrt", "wir": "entsperren", "ihr": "entsperrt", "sie_Sie": "entsperren" }, "praeteritum": { "ich": "entsperrte", "du": "entsperrtest", "er_sie_es": "entsperrte", "wir": "entsperrten", "ihr": "entsperrtet", "sie_Sie": "entsperrten" }, "perfekt": "hat entsperrt", "imperativ": "Entsperre das Display!" },
    "contoh_kalimat": [{ "de": "Die Bank hat mein gesperrtes Konto wieder entsperrt.", "id": "Bank telah membuka kembali blokir rekening saya." }]
  },
  {
    "id": "freischalten-981",
    "level": "B1",
    "infinitiv": "freischalten",
    "arti": "mengaktivasi kartu SIM/fitur web",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "schalte frei", "du": "schaltest frei", "er_sie_es": "schaltet frei", "wir": "schalten frei", "ihr": "schaltet frei", "sie_Sie": "schalten frei" }, "praeteritum": { "ich": "schaltete frei", "du": "schaltetest frei", "er_sie_es": "schaltete frei", "wir": "schalteten frei", "ihr": "schaltetet frei", "sie_Sie": "schalteten frei" }, "perfekt": "hat freigeschaltet", "imperativ": "Schalte die SIM-Karte frei!" },
    "contoh_kalimat": [{ "de": "Der Kundendienst schaltet den Zugang morgen frei.", "id": "Layanan pelanggan akan mengaktivasi aksesnya besok." }]
  },
  {
    "id": "blockieren-982",
    "level": "B1",
    "infinitiv": "blockieren",
    "arti": "menghalangi akses pintu/jalan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "blockiere", "du": "blockierst", "er_sie_es": "blockiert", "wir": "blockieren", "ihr": "blockiert", "sie_Sie": "blockieren" }, "praeteritum": { "ich": "blockierte", "du": "blockiertest", "er_sie_es": "blockierte", "wir": "blockierten", "ihr": "blockiertet", "sie_Sie": "blockierten" }, "perfekt": "hat blockiert", "imperativ": "Blockiere nicht die Ausfahrt!" },
    "contoh_kalimat": [{ "de": "Ein Felsbrocken blockiert die Bergstraße.", "id": "Bongkahan batu besar menghalangi jalan pegunungan." }]
  },
  {
    "id": "hindern-983",
    "level": "B1",
    "infinitiv": "hindern",
    "arti": "menghalang-halangi niat orang",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "an", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "hindere", "du": "hinderst", "er_sie_es": "hindert", "wir": "hindern", "ihr": "hindert", "sie_Sie": "hindern" }, "praeteritum": { "ich": "hinderte", "du": "hindertest", "er_sie_es": "hinderte", "wir": "hinderten", "ihr": "hindertet", "sie_Sie": "hinderten" }, "perfekt": "hat gehindert", "imperativ": "Hindre ihn daran!" },
    "contoh_kalimat": [{ "de": "Niemand kann mich an meiner Entscheidung hindern.", "id": "Tidak ada yang bisa menghalangi keputusan saya." }]
  },
  {
    "id": "verhindern-984",
    "level": "B1",
    "infinitiv": "verhindern",
    "arti": "mencegah terjadinya kecelakaan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verhindere", "du": "verhinderst", "er_sie_es": "verhindert", "wir": "verhindern", "ihr": "verhindert", "sie_Sie": "verhindern" }, "praeteritum": { "ich": "verhinderte", "du": "verhindertest", "er_sie_es": "verhinderte", "wir": "verhinderten", "ihr": "verhindertet", "sie_Sie": "verhinderten" }, "perfekt": "hat verhindert", "imperativ": "Verhindere das Unglück!" },
    "contoh_kalimat": [{ "de": "Schnelles Bremsen verhinderte einen schweren Unfall.", "id": "Pengereman cepat mencegah terjadinya kecelakaan fatal." }]
  },
  {
    "id": "vorbeugen-985",
    "level": "B2",
    "infinitiv": "vorbeugen",
    "arti": "melakukan tindakan pencegahan (preventif)",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "beuge vor", "du": "beugst vor", "er_sie_es": "beugt vor", "wir": "beugen vor", "ihr": "beugt vor", "sie_Sie": "beugen vor" }, "praeteritum": { "ich": "beugte vor", "du": "beugtest vor", "er_sie_es": "beugte vor", "wir": "beugten vor", "ihr": "beugtet vor", "sie_Sie": "beugten vor" }, "perfekt": "hat vorgebeugt", "imperativ": "Beuge Krankheiten vor!" },
    "contoh_kalimat": [{ "de": "Gesunde Ernährung beugt Krankheiten vor.", "id": "Pola makan sehat mencegah timbulnya penyakit." }]
  },
  {
    "id": "abwenden-986",
    "level": "C1",
    "infinitiv": "abwenden",
    "arti": "menepis bencana bahaya, memalingkan muka",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "praepositionen": [{ "präposition": "von", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "wende ab", "du": "wendest ab", "er_sie_es": "wendet ab", "wir": "wenden ab", "ihr": "wendet ab", "sie_Sie": "wenden ab" }, "praeteritum": { "ich": "wendete ab", "du": "wendetest ab", "er_sie_es": "wendete ab", "wir": "wendeten ab", "ihr": "wendetet ab", "sie_Sie": "wendeten ab" }, "perfekt": "hat abgewendet", "imperativ": "Wende die Krise ab!" },
    "contoh_kalimat": [{ "de": "Die Krise konnte in letzter Minute abgewendet werden.", "id": "Krisis berhasil ditepis di menit-menit terakhir." }]
  },
  {
    "id": "erleichtern-987",
    "level": "B1",
    "infinitiv": "erleichtern",
    "arti": "meringankan beban tugas, melegakan hati",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erleichtere", "du": "erleichterst", "er_sie_es": "erleichtert", "wir": "erleichtern", "ihr": "erleichtert", "sie_Sie": "erleichtern" }, "praeteritum": { "ich": "erleichterte", "du": "erleichtertest", "er_sie_es": "erleichterte", "wir": "erleichterten", "ihr": "erleichtertet", "sie_Sie": "erleichterten" }, "perfekt": "hat erleichtert", "imperativ": "Erleichtere dir die Arbeit!" },
    "contoh_kalimat": [{ "de": "Moderne Technik erleichtert uns den Alltag.", "id": "Teknologi modern meringankan rutinitas harian kita." }]
  },
  {
    "id": "erschweren-988",
    "level": "B2",
    "infinitiv": "erschweren",
    "arti": "mempersulit keadaan jalannya proses",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "erschwere", "du": "erschwerst", "er_sie_es": "erschwert", "wir": "erschweren", "ihr": "erschwert", "sie_Sie": "erschweren" }, "praeteritum": { "ich": "erschwerte", "du": "erschwertest", "er_sie_es": "erschwerte", "wir": "erschwerten", "ihr": "erschwertet", "sie_Sie": "erschwerten" }, "perfekt": "hat erschwert", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Dichter Nebel erschwerte die Bergung.", "id": "Kabut tebal mempersulit jalannya proses evakuasi." }]
  },
  {
    "id": "vorantreiben-989",
    "level": "B2",
    "infinitiv": "vorantreiben",
    "arti": "mendorong percepatan proyek",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "treibe voran", "du": "treibst voran", "er_sie_es": "treibt voran", "wir": "treiben voran", "ihr": "treibt voran", "sie_Sie": "treiben voran" }, "praeteritum": { "ich": "trieb voran", "du": "triebst voran", "er_sie_es": "trieb voran", "wir": "trieben voran", "ihr": "triebt voran", "sie_Sie": "trieben voran" }, "perfekt": "hat vorangetrieben", "imperativ": "Treibt das Projekt voran!" },
    "contoh_kalimat": [{ "de": "Das Team treibt die Digitalisierung zügig voran.", "id": "Tim mendorong percepatan digitalisasi secara cepat." }]
  },
  {
    "id": "verzoegern-990",
    "level": "B2",
    "infinitiv": "verzögern",
    "arti": "mengakibatkan tertunda/molor",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verzögere", "du": "verzögerst", "er_sie_es": "verzögert", "wir": "verzögern", "ihr": "verzögert", "sie_Sie": "verzögern" }, "praeteritum": { "ich": "verzögerte", "du": "verzögertest", "er_sie_es": "verzögerte", "wir": "verzögerten", "ihr": "verzögertet", "sie_Sie": "verzögerten" }, "perfekt": "hat verzögert", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Der Abflug verzögert sich um zwei Stunden.", "id": "Keberangkatan pesawat tertunda selama dua jam." }]
  },
  {
    "id": "ausdehnen-991",
    "level": "B2",
    "infinitiv": "ausdehnen",
    "arti": "memuai logam, meluaskan jangkauan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "dehne aus", "du": "dehnst aus", "er_sie_es": "dehnt aus", "wir": "dehnen aus", "ihr": "dehnt aus", "sie_Sie": "dehnen aus" }, "praeteritum": { "ich": "dehnte aus", "du": "dehntest aus", "er_sie_es": "dehnte aus", "wir": "dehnten aus", "ihr": "dehntet aus", "sie_Sie": "dehnten aus" }, "perfekt": "hat ausgedehnt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Metalle dehnen sich bei Hitze aus.", "id": "Logam memuai saat terkena panas." }]
  },
  {
    "id": "zusammenziehen-992",
    "level": "B2",
    "infinitiv": "zusammenziehen",
    "arti": "menyusut mengerut karena dingin",
    "hilfsverb": "haben",
    "regelmaessig": false,
    "trennbar": true,
    "konjugasi": { "praesens": { "ich": "ziehe zusammen", "du": "ziehst zusammen", "er_sie_es": "zieht zusammen", "wir": "ziehen zusammen", "ihr": "zieht zusammen", "sie_Sie": "ziehen zusammen" }, "praeteritum": { "ich": "zog zusammen", "du": "zogst zusammen", "er_sie_es": "zog zusammen", "wir": "zogen zusammen", "ihr": "zogt zusammen", "sie_Sie": "zogen zusammen" }, "perfekt": "hat zusammengezogen", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Bei Kälte zieht sich das Material zusammen.", "id": "Dalam suhu dingin material itu mengerut menyusut." }]
  },
  {
    "id": "erstarren-993",
    "level": "C1",
    "infinitiv": "erstarren",
    "arti": "membeku kaku karena syok/es",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "vor", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "erstarre", "du": "erstarrst", "er_sie_es": "erstarrt", "wir": "erstarren", "ihr": "erstarrt", "sie_Sie": "erstarren" }, "praeteritum": { "ich": "erstarrte", "du": "erstarrtest", "er_sie_es": "erstarrte", "wir": "erstarrten", "ihr": "erstarrtet", "sie_Sie": "erstarrten" }, "perfekt": "ist erstarrt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Sie erstarrte vor Entsetzen.", "id": "Dia terdiam kaku karena syok luar biasa." }]
  },
  {
    "id": "verfluessigen-994",
    "level": "C1",
    "infinitiv": "verflüssigen",
    "arti": "mencairkan gas menjadi cairan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verflüssige", "du": "verflüssigst", "er_sie_es": "verflüssigt", "wir": "verflüssigen", "ihr": "verflüssigt", "sie_Sie": "verflüssigen" }, "praeteritum": { "ich": "verflüssigte", "du": "verflüssigtest", "er_sie_es": "verflüssigte", "wir": "verflüssigten", "ihr": "verflüssigtet", "sie_Sie": "verflüssigten" }, "perfekt": "hat verflüssigt", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Unter hohem Druck verflüssigt sich das Gas.", "id": "Di bawah tekanan tinggi gas mencair menjadi cairan." }]
  },
  {
    "id": "verdampfen-995",
    "level": "B2",
    "infinitiv": "verdampfen",
    "arti": "menguap air menjadi uap panas",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "verdampfe", "du": "verdampfst", "er_sie_es": "verdampft", "wir": "verdampfen", "ihr": "verdampft", "sie_Sie": "verdampfen" }, "praeteritum": { "ich": "verdampfte", "du": "verdampftest", "er_sie_es": "verdampfte", "wir": "verdampften", "ihr": "verdampftet", "sie_Sie": "verdampften" }, "perfekt": "ist verdampft", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Das kochende Wasser verdampft im Topf.", "id": "Air yang mendidih itu menguap di dalam panci." }]
  },
  {
    "id": "kondensieren-996",
    "level": "C1",
    "infinitiv": "kondensieren",
    "arti": "mengembun uap air di kaca",
    "hilfsverb": "sein",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "kondensiere", "du": "kondensierst", "er_sie_es": "kondensiert", "wir": "kondensieren", "ihr": "kondensiert", "sie_Sie": "kondensieren" }, "praeteritum": { "ich": "kondensierte", "du": "kondensiertest", "er_sie_es": "kondensierte", "wir": "kondensierten", "ihr": "kondensiertet", "sie_Sie": "kondensierten" }, "perfekt": "ist kondensiert", "imperativ": "-" },
    "contoh_kalimat": [{ "de": "Wasserdampf kondensiert an der kalten Fensterscheibe.", "id": "Uap air mengembun pada kaca jendela yang dingin." }]
  },
  {
    "id": "filtern-997",
    "level": "B1",
    "infinitiv": "filtern",
    "arti": "menyaring air/kopi",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "filtere", "du": "filterst", "er_sie_es": "filtert", "wir": "filtern", "ihr": "filtert", "sie_Sie": "filtern" }, "praeteritum": { "ich": "filterte", "du": "filtertest", "er_sie_es": "filterte", "wir": "filterten", "ihr": "filtertet", "sie_Sie": "filterten" }, "perfekt": "hat gefiltert", "imperativ": "Filtere das Wasser!" },
    "contoh_kalimat": [{ "de": "Die Anlage filtert Schadstoffe aus der Luft.", "id": "Instalasi itu menyaring zat berbahaya dari udara." }]
  },
  {
    "id": "reinigen-998",
    "level": "A2",
    "infinitiv": "reinigen",
    "arti": "membersihkan secara menyeluruh",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "reinige", "du": "reinigst", "er_sie_es": "reinigt", "wir": "reinigen", "ihr": "reinigt", "sie_Sie": "reinigen" }, "praeteritum": { "ich": "reinigte", "du": "reinigtest", "er_sie_es": "reinigte", "wir": "reinigten", "ihr": "reinigtet", "sie_Sie": "reinigten" }, "perfekt": "hat gereinigt", "imperativ": "Reinige das Gerät!" },
    "contoh_kalimat": [{ "de": "Das Gerät muss regelmäßig gereinigt werden.", "id": "Peralatan itu harus dibersihkan secara rutin." }]
  },
  {
    "id": "sterilisieren-999",
    "level": "B1",
    "infinitiv": "sterilisieren",
    "arti": "mensterilkan alat medis dari kuman",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "konjugasi": { "praesens": { "ich": "sterilisiere", "du": "sterilisierst", "er_sie_es": "sterilisiert", "wir": "sterilisieren", "ihr": "sterilisiert", "sie_Sie": "sterilisieren" }, "praeteritum": { "ich": "sterilisierte", "du": "sterilisiertest", "er_sie_es": "sterilisierte", "wir": "sterilisierten", "ihr": "sterilisiertet", "sie_Sie": "sterilisierten" }, "perfekt": "hat sterilisiert", "imperativ": "Sterilisiere das Besteck!" },
    "contoh_kalimat": [{ "de": "Die chirurgischen Instrumente wurden sterilisiert.", "id": "Peralatan bedah telah disterilkan." }]
  },
  {
    "id": "kroenen-1000",
    "level": "C2",
    "infinitiv": "krönen",
    "arti": "memahkotai, menyempurnakan puncak keberhasilan",
    "hilfsverb": "haben",
    "regelmaessig": true,
    "praepositionen": [{ "präposition": "mit", "kasus": "Dativ" }],
    "konjugasi": { "praesens": { "ich": "kröne", "du": "krönst", "er_sie_es": "krönt", "wir": "krönen", "ihr": "krönt", "sie_Sie": "krönen" }, "praeteritum": { "ich": "krönte", "du": "kröntest", "er_sie_es": "krönte", "wir": "krönten", "ihr": "kröntet", "sie_Sie": "krönten" }, "perfekt": "hat gekrönt", "imperativ": "Kröne dein Werk!" },
    "contoh_kalimat": [{ "de": "Er krönte seine sportliche Karriere mit der Goldmedaille.", "id": "Dia menyempurnakan puncak karier olahraganya dengan medali emas." }]
  }
];
