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
  }
];
