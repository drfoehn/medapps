//document.addEventListener('DOMContentLoaded', function() {
//    fetch('analytes.json')
//    .then(response => response.json())
//    .then(data => createTabsAndCheckboxes(data));
//});

const analytesData = [
    {
        "Untersuchung": "ROTEM (spez. Fibrinmessung)",
        "Wohin": "ZL - LKH",
        "Schein": "N",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": "3ml Gerinnungsr\u00f6hrchen - gef\u00fcllt bis zur Markierung!",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 3000,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 0,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Antiphospholipid-screening Serum",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": "ACHTUNG: Auch APS-Citrat ausw\u00e4hlen!",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 700,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Antiphospholipid-screening Citrat",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": "ACHTUNG: Auch APS-Serum ausw\u00e4hlen!",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "APC-Ratio",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": "beide ben\u00f6tigten Tests",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 20,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Anti Xa Heparinmonitoring",
        "Wohin": "ZL - LKH",
        "Schein": "G / A / N ",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": "Genau 4h nach Lovenoxgabe! (Oder mit ges. Gerinnung)",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 10,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Protein C",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": "Nur Mo-Fr.",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 15,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Protein S free",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": "Nur Mo-Fr.",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 21,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Protein S-Aktivit\u00e4t",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": "Wird nur 1xWoche bestimmt,\nsonst im ZL tiefgek\u00fchlt",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 25,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "AT III",
        "Wohin": "ZL - LKH",
        "Schein": "G / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 21,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "D-Dimer",
        "Wohin": "ZL - LKH",
        "Schein": "G / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 15,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Fibrinogen",
        "Wohin": "ZL - LKH",
        "Schein": "G / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 10,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor XII (12)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 4,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor XIII (13)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 20,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor II (2)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 5,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor V (5)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 5,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor VII (7)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 5,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor X (10)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 5,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor VIII (8)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 15,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor IX ( 9)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 15,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor XI (11)",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 15,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "PTT",
        "Wohin": "ZL - LKH",
        "Schein": "G / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "PZ (inkl. INR)",
        "Wohin": "ZL - LKH",
        "Schein": "G / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Thrombinzeit (TZ)",
        "Wohin": "ZL - LKH",
        "Schein": "G / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "von-Willebrand-Faktor Antigen und Aktivit\u00e4t",
        "Wohin": "ZL - LKH",
        "Schein": "G",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 30,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Aszites Punktat (Leukos + Differenzierung)",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA",
        "Bemerkungen": "Entnahmeort eingeben\nVorgehen siehe extra Zettel",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 160,
        "Gruppe": "H\u00e4matologie"
    },
    {
        "Untersuchung": "Leukozyten im Pleura- oder Pericardpunktat",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA",
        "Bemerkungen": "Punktat in EDTA-R\u00f6hrchen einsenden",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 160,
        "Gruppe": "H\u00e4matologie"
    },
    {
        "Untersuchung": "Leukozytentypisierung",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA",
        "Bemerkungen": "Tel. Ank\u00fcndigen inkl. Fragestellung",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 526,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 270,
        "Gruppe": "H\u00e4matologie"
    },
    {
        "Untersuchung": "H\u00e4moglobinvarianten",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 146,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 270,
        "Gruppe": "H\u00e4matologie"
    },
    {
        "Untersuchung": "Thrombozyten im Citratblut",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Gerinnung",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 160,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 0,
        "Gruppe": "H\u00e4matologie"
    },
    {
        "Untersuchung": "Kupfer im 24h-Harn",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen",
        "Bemerkungen": "Angabe der gesamelten Harnmenge in 24h mit 1ml Harn ins ZL - Keine Konservierung (wird 1x die Woche gemacht)",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 500,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Osmolarit\u00e4t im Harn",
        "Wohin": "ZL - LKH",
        "Schein": "H",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen",
        "Bemerkungen": "Au\u00dferhalb Routinezeiten bitte Formular \"Zuweisung zur Messung der Osmolarit\u00e4t im Serum/Harn au\u00dferhalb Routinezeiten\" verwenden.",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Beta-2-Mikroglobulin im Harn",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen ohne Additive",
        "Bemerkungen": "Kein Sammelharn n\u00f6tig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Drogennachweis im Harn",
        "Wohin": "ZL - LKH",
        "Schein": "D",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen",
        "Bemerkungen": "M\u00f6glichst am 1. LT und erster Harn",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 500,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 750,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Katecholamine im Harn mit Konservierung",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Harn",
        "R\u00f6hrchen": "Dunkles Sammelgef. mit Konserv.mittel, im ZL holen",
        "Bemerkungen": "Tel. R\u00fcspr. bzgl der Menge des Konservierungsmittel (Eisessig) \u2192  auf 300ml Harn ca. 5ml Eisessig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 3000,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 4500,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Kreatinin im Harn",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Harnproteinmuster (Albumin, Alpha1-Mikroglobulin, Alpha2-Makroglobulin, IgG und Kreatinin im Harn)",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 323,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Albumin im Harn",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen ohne Additive",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Gesamtprotein im Harn",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen ohne Additive",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 6,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "R\u00f6teln - Impftiter (nur IgG)",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "IgG  ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 75,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "R\u00f6teln - AK (IgG und IgM)",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "IgG + IgM",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Cytomegalie AK (IgG, IgM)",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Pipettiermenge je Parameter ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis Serologie",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "V- \u00c4rzten gew. US \u2192 Unterschrift                                                                 1x volles Serum-R\u00f6hrchen",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 1500,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis B c-AK  (IgM / IgG)",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 300,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis B e-AK / AG",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 300,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis B s-Antigen",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis B s-Antik\u00f6rper",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis A-IgG / IgM",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis C-AK IgG/IgM",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "HIV-AK",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Sars COV-2 Antik\u00f6rper",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Toxoplasmose AK (IgG +IgM)",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Treponema - Screening",
        "Wohin": "ZL - LKH",
        "Schein": "A / I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 80,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Herpes simplex IgG (f\u00fcr Antik\u00f6rperindex erforderlich)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Herpes simplex IgM",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Varizella Zoster IgG (f\u00fcr Antik\u00f6rperindex erforderlich)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Varizella Zoster IgM",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Epstein Barr IgG (f\u00fcr Antik\u00f6rperindex erforderlich)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Epstein Barr IgM",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Cytomegalie IgG (f\u00fcr Antik\u00f6rperindex erforderlich)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Cytomegalie IgM",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "FSME IgG (f\u00fcr Antik\u00f6rperindex erforderlich)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "FSME IgM",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Borrelien IgG (f\u00fcr Antik\u00f6rperindex erforderlich) (inkl. Immunoblot bei Positivit\u00e4t)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Borrelien IgM (inkl. Immunoblot bei Positivit\u00e4t)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Freies H\u00e4moglobin",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "auch aus EDTA-Plasma m\u00f6glich",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Osmolarit\u00e4t im Serum\n",
        "Wohin": "ZL - LKH",
        "Schein": "H",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Au\u00dferhalb Routinezeiten bitte Formular \"Zuweisung zur Messung der Osmolarit\u00e4t im Serum/Harn au\u00dferhalb Routinezeiten\" verwenden.",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Blutzucker\nenzymatisch",
        "Wohin": "ZL - LKH",
        "Schein": "N / A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Bei Einzelabnahme im gelben R\u00f6hrchen",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Blutzucker enzymatisch",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Bei Einzelabnahme im gelben R\u00f6hrchen",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Interleukin 6 (Ven\u00f6ses oder Nabelschnurblut)",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Bei Nabelschnurblut IL6 Cordal- blut ankreuzen",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 18,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Transferrins\u00e4ttigung",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Berechnete Analyse (Serum-Eisen und Transferrin anfordern)",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 0,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 0,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Fructosamin",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Diabet. Kinder",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 6,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Homocystein",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA",
        "Bemerkungen": "Keine Vitamingabe die letzten 3d: Sofort gek\u00fchlt in ZL",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 20,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Cystatin C",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Nur Mo. - Fr.\nIm Harn nicht m\u00f6glich",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Myoglobin",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Oder gemeinsam mit anderen\nParametern",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 9,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Bilirubin direkt",
        "Wohin": "ZL - LKH",
        "Schein": "N / A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Optimal w\u00e4re Lichtschutz des R\u00f6hrchens",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 6.7,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Bilirubin gesamt",
        "Wohin": "ZL - LKH",
        "Schein": "N / A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Optimal w\u00e4re Lichtschutz des R\u00f6hrchens",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Ammoniak (= NH\u00b3)",
        "Wohin": "ZL - LKH",
        "Schein": "N / A",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA-Vollblut",
        "Bemerkungen": "SOFORT auf Eis legen und versenden",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 17,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Laktat im Blut (heparin-Plasma)",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "ZL \u2192 Auf Eis (als Ersatz f\u00fcr Fluorid-R\u00f6)",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Laktat im Blut (Fluorid-R\u00f6hrchen)",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Fluorid-R\u00f6hrchen",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alpha-1 Antitrypsin",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 9,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Albumin im Serum",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Aldolase",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 400,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 0,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alkalische Phosphatase",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2.8,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alkoholspielgel",
        "Wohin": "ZL - LKH",
        "Schein": "N / D",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 4,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Amylase im Blut",
        "Wohin": "ZL - LKH",
        "Schein": "N / A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 4,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "ASL-Antistreptolysin- Titer",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Caeruloplasmin",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 15,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Cholesterin",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Cholinesterase",
        "Wohin": "ZL - LKH",
        "Schein": "N / A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "CKMB = CreatinKinase Isoenzym MB",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 5,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "CPK = CK",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2.8,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "CRP",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Serum-Eisen",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 8.5,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Ferritin",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 10,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Transferrin",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 9,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Haptoglobin",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 9,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Harns\u00e4ure",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 3,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Kreatinin (+eGFR) im Blut",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 3,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "LDH",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2.8,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "GOT",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 9,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "GPT",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 9,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Gamma-GT",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 3,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alkal. Phosphatase",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 3,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Lipoprotein(a) ",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "NT-proBNP",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 9,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Procalcitonin (PCT)",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 18,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Rheumafaktor",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 3,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Triglyceride",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Troponin hs",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 30,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "ACE - Angiotensin convertingenzym",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 18,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alpha 1-Fetoprotein (AFP)",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 6,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "NSE  (neurospez. Enolase)",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 12,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "S100",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 12,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Kreatinin-Clearence berechnet",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": null,
        "R\u00f6hrchen": null,
        "Bemerkungen": "Zeitgleiche Abnahme von Harn und Blut.\nGes.harnmenge, Gewicht und L\u00e4nge des Kindes angeben!\nProbenmenge siehe Kreatinin im Blut und Kreatinin im Harn",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": null,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": null,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "NSE im Serum",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 72,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "Berliner-Blau-F\u00e4rbung",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "in Zytologie inkludiert",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": null,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": null,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "Zellzahl + Zytologie",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 500,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 0,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "Basisdiagnostik (Gesamteiwei\u00df, Lactat und Glucose im Liquor)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 62.5,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "Schrankenfunktion \"klein\" (Albumin, IgG-Synthese)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "parallel abgenommenes Serumr\u00f6hrchen notwendig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 300,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 200,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "Schrankenfunktion \"klein\" Serumanalysen",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": null,
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 300,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 200,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "Schrankenfunktion \"gro\u00df\" (Albumin, IgG-, IgA- und IgM-Synthese)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "parallel abgenommenes Serumr\u00f6hrchen notwendig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 550,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 200,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "Schrankenfunktion \"gro\u00df\" Serumanalysen",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": null,
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 550,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 200,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "Herpes simplex Antik\u00f6rperindex",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "parallel abgenommenes Serumr\u00f6hrchen notwendig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Varizella Zoster Antik\u00f6rperindex",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "parallel abgenommenes Serumr\u00f6hrchen notwendig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Epstein Barr Antik\u00f6rperindex",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "parallel abgenommenes Serumr\u00f6hrchen notwendig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Cytomegalie Antik\u00f6rperindex",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "parallel abgenommenes Serumr\u00f6hrchen notwendig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "FSME Antik\u00f6rperindex",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "parallel abgenommenes Serumr\u00f6hrchen notwendig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Borrelien Antik\u00f6rperindex (inkl. Immunoblot bei Positivit\u00e4t)",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": "parallel abgenommenes Serumr\u00f6hrchen notwendig",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Oligoklonale Banden",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 0,
        "Gruppe": "Liquordiagnostik - Zellen / Chemie / Schranke / OKB"
    },
    {
        "Untersuchung": "CXCL13",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Infektionsserologie Liquor"
    },
    {
        "Untersuchung": "Herpes simplex PCR Liquor",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Varizella Zoster PCR Liquor",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Epstein Barr PCR Liquor",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Cytomegalie PCR Liquor",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Humanes Herpesvirus 6 PCR Liquor",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Enteroviren PCR Liquor",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Borrielien PCR Liquor",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "Liquor - Polypropylenr\u00f6hrchen f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Influenza A/B + RSV PCR; SARS-COV2- PCR",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Abstrich",
        "R\u00f6hrchen": "Nasal Aspirate/Wash (NA/W) Proben und Nasopharyngeal (NP) Abstriche in Virentransportmedium (3-ml-Ro\u0308hrchen mit Transportmedium) ",
        "Bemerkungen": "Im Virentransportmedium einsenden",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 300,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "UGT1A1-Polymorphismus",
        "Wohin": "ZL - LKH",
        "Schein": "B ",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": "Genetischer Revers n\u00f6tig,\nBefund dauert 1 ca Woche",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Gerinnungsstatus speziell: Prothrombin, Faktor V Leiden,\nMTHFR",
        "Wohin": "ZL - LKH",
        "Schein": "B / G",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": "Revers der Eltern n\u00f6tig, siehe extra Zettel",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Covid PCR Blut",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 1000,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 0,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "HIV RNA / HIV-PCR",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 600,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "CMV PCR = DNA im Blut",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 500,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "HBV DNS / HBV-PCR > quantitativ",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 300,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "HCV RNA / HCV-PCR > quantitativ",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 600,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "CMV PCR = DNA im Harn",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen f\u00fcr PCR\n",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 500,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Herpes simplex PCR EDTA",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Varizella Zoster PCR EDTA",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Epstein Barr PCR EDTA",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Cytomegalie PCR EDTA",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Humanes Herpesvirus 6 PCR EDTA",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Enteroviren PCR EDTA",
        "Wohin": "ZL - CDK",
        "Schein": "CDK - Liquor / Molbio.",
        "Material": "Liquor",
        "R\u00f6hrchen": "EDTA f\u00fcr PCR",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Molekularbiologie inkl. Liquoranalysen"
    },
    {
        "Untersuchung": "Elektroyte (Na, K, Cl, Ca, P, Mg) im Spontanharn",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen",
        "Bemerkungen": "Na/K/Cl: 10-15 / Ca: 2 / Phosphor: 15 / Magnesium: 14",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Panele"
    },
    {
        "Untersuchung": "Elektroyte (Na, K, Cl, Ca, P, Mg) im Sammelharn",
        "Wohin": "ZL - LKH",
        "Schein": "A / N",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen",
        "Bemerkungen": "Na/K/Cl: 10-15 / Ca: 2 / Phosphor: 15 / Magnesium: 14\nHarnsammelmenge/24h mit angeben",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Panele"
    },
    {
        "Untersuchung": "C3 Komplement",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 9,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "C4 Komplement",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 15,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Serum-Elektrophorese",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 10,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Immunglobuline IgM, IgA, IgG,",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Immunglobulin IgE",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Albumin / Kreatinin - Ratio",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": null,
        "R\u00f6hrchen": null,
        "Bemerkungen": "Berechnete Analyse (Albumin und Kreatinin im Harn anfordern)",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": null,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": null,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Protein / Kreatinin - Ratio",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": null,
        "R\u00f6hrchen": null,
        "Bemerkungen": "Berechnete Analyse (Protein und Kreatinin im Harn anfordern)",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": null,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": null,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Insulin Bestimmung",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma?",
        "Bemerkungen": "N\u00fcchtern! sofort verschicken\nNICHT nachts/Wochenende",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 90,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Zink (Zn)",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Wird 1x die Woche gemacht",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Kupfer im Plasma",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 50,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Katecholamine im Harn ohne Konserv. Arzt fragen!!",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Harn",
        "R\u00f6hrchen": "Harnr\u00f6hrchen",
        "Bemerkungen": "anges\u00e4uerter Harn aus Einzelprotion",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 3000,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 4500,
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Elastase im Stuhl\n(Prankreaselastase)",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Stuhl",
        "R\u00f6hrchen": "Stuhlr\u00f6hrchen",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": "1g",
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": "1,5g",
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Digoxin-Spiegel",
        "Wohin": "ZL - LKH",
        "Schein": "A, N, E",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Abnahme 12 Std. nach letzter Gabe, am Schein vermerken",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 6,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "CDT",
        "Wohin": "ZL - LKH",
        "Schein": "D",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Bei Eltern gro\u00dfe R\u00f6hrchen",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Coffein Spiegel aus Heparin-Plasma",
        "Wohin": "ZL - LKH",
        "Schein": "E",
        "Material": "Blut",
        "R\u00f6hrchen": "Heparin-Plasma",
        "Bemerkungen": "Einzelbestimmung: Serum \nMit anderen Parametern: gemeinsam im Heparin-Plasma",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Coffein Spiegel aus Serum",
        "Wohin": "ZL - LKH",
        "Schein": "E",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Einzelbestimmung: Serum \nMit anderen Parametern: gemeinsam im Heparin-Plasma",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Luminalspiegel",
        "Wohin": "ZL - LKH",
        "Schein": "E / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Einzelbestimmung: Serum Mit anderen Parametern:\ngemeinsam im Heparin-Plasma",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Zyvoxidspiegel (Linezolid)",
        "Wohin": "ZL - LKH",
        "Schein": "E",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Nu Di und Do, muss vor\n07.00 Uhr im Labor sein",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Topamaxspiegel = Topiramatspiegel",
        "Wohin": "ZL - LKH",
        "Schein": "E / A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Nur 1x pro Woche bestimmt\n\u2192 Donnerstag\nWenn fr\u00fcher verschickt, wird Probe im Labor eingefroren",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Keppraspiegel\n(Levetiracetam)",
        "Wohin": "ZL - LKH",
        "Schein": "E",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Nur Montag und Mittwoch!\nBis 10 Uhr abnehmen",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Gallens\u00e4ure",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum (Lichtgesch.!!)",
        "Bemerkungen": "Probe wird nur Donnerstags\nuntersucht!",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Targocid-Spiegel (Teicoplanin)",
        "Wohin": "ZL - LKH",
        "Schein": "E / A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Talspiegel\nBestimmung t\u00e4glich zur Routinezeiten, an Feiertagen und Wochenenden bis 12:00h",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 150,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Theospirex-Spiegel (Theophyllin)",
        "Wohin": "ZL - LKH",
        "Schein": "E / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Talspiegel. Auf Kurve vermerken falls Spitzenspiegel",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Valproins\u00e4ure (Depaken)",
        "Wohin": "ZL - LKH",
        "Schein": "E / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "Unter Antikonvulsiva",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Tacrolimuspiegel",
        "Wohin": "ZL - LKH",
        "Schein": "E",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 400,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Vitamin B1-B6",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "EDTA",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 300,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Lamictal Spiegel (Lamotrigin)",
        "Wohin": "ZL - LKH",
        "Schein": "E",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Alprazolamspiegel",
        "Wohin": "ZL - LKH",
        "Schein": "E",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "CDG Screening",
        "Wohin": "ZL - LKH",
        "Schein": "C",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Clozapin Spiegel",
        "Wohin": "ZL - LKH",
        "Schein": "E",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Epanutin-Spiegel (Phenytoin)",
        "Wohin": "ZL - LKH",
        "Schein": "E / A / N",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 1.7,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Refobacin\n(Gentamycin)",
        "Wohin": "ZL - LKH",
        "Schein": "E / A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 2,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Vitamin A + E",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 200,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 550,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Vitamin B12",
        "Wohin": "ZL - LKH",
        "Schein": "A",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": " - ",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": 100,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": 50,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Drogennachweis im Mekonium",
        "Wohin": "ZL - LKH",
        "Schein": "D",
        "Material": "Stuhl",
        "R\u00f6hrchen": "Stuhlr\u00f6hrchen",
        "Bemerkungen": "M\u00f6glichst am 1. LT und erstes Mekonium",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": "1g",
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": "1,5g",
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "TORCH: (alt) siehe Neu: Pr\u00e4- und Perinataler Infektionsblock",
        "Wohin": "ZL - LKH",
        "Schein": "I",
        "Material": "Blut",
        "R\u00f6hrchen": "Serum",
        "Bemerkungen": "I Schein \u2192\nPr\u00e4- und Perinataler Infektionsblock",
        "Mindestprobenmenge (Pipettiermenge) \nin \u00b5l": null,
        "Ben\u00f6tigtes Totvolumen \nin \u00b5l": null,
        "Gruppe": null
    }
];



    function searchAnalytes() {
        const searchTerm = document.getElementById('searchInput').value;
        if (!searchTerm) {
            alert("Bitte geben Sie einen Suchbegriff ein.");
            return;
        }
    
        const filteredData = analytesData.filter(item => 
            item.Untersuchung.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log("Filtered Data:", filteredData);
    
        // Clear existing search results
        const existingSearchTab = document.getElementById('Suchergebnisse');
        if (existingSearchTab) {
            existingSearchTab.remove();
        }
    
        // Add a new tab for search results
        const tabContainer = document.querySelector('.tab');
        const tabContent = document.getElementById('tabContent');
    
        const searchTab = document.createElement('div');
        searchTab.id = 'Suchergebnisse';
        searchTab.className = 'tabcontent';
    
        filteredData.forEach(test => {
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = test.Untersuchung;
            checkbox.name = test.Untersuchung;
            checkbox.addEventListener('change', function() {
                updateSelectedAnalytes(test, this.checked);
                updateTubeSelections();
            });
    
            let label = document.createElement('label');
            label.htmlFor = test.Untersuchung;
            label.textContent = test.Untersuchung;
    
            searchTab.appendChild(checkbox);
            searchTab.appendChild(label);
            searchTab.appendChild(document.createElement('br'));
        });
    
        tabContent.appendChild(searchTab);
    
        // Create or update the button for search results
        let searchTabButton = document.getElementById('searchTabButton');
        if (!searchTabButton) {
            searchTabButton = document.createElement('button');
            searchTabButton.id = 'searchTabButton';
            searchTabButton.className = 'tablinks';
            searchTabButton.addEventListener('click', function(event) {
                openTab(event, 'Suchergebnisse');
            });
            tabContainer.appendChild(searchTabButton);
        }
    
        // Set button text to "Search: [Search Term]"
        searchTabButton.textContent = 'Suchen: ' + searchTerm;
    
        // Automatically open the search results tab
        openTab(null, 'Suchergebnisse');
    }
    
    function createTabsAndCheckboxes(analytesData) {
        let groups = {};
    
        // Group data by 'Group'
        analytesData.forEach(item => {
            if (!groups[item.Gruppe]) {
                groups[item.Gruppe] = [];
            }
            groups[item.Gruppe].push(item);
        });
    
        // Create tabs
        const tabContainer = document.querySelector('.tab');
        const tabContent = document.getElementById('tabContent');
    
        for (let group in groups) {
            let btn = document.createElement('button');
            btn.textContent = group;
            btn.className = 'tablinks';
            btn.addEventListener('click', function(event) {
                openTab(event, group);
            });
            tabContainer.appendChild(btn);
    
            let tabDiv = document.createElement('div');
            tabDiv.id = group;
            tabDiv.className = 'tabcontent';
    
            groups[group].forEach(test => {
                let checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = test.Untersuchung;
                checkbox.name = test.Untersuchung;
                checkbox.addEventListener('change', function() {
                    updateSelectedAnalytes(test, this.checked);
                    updateTubeSelections();
                });
    
                let label = document.createElement('label');
                label.htmlFor = test.Untersuchung;
                label.textContent = test.Untersuchung;
    
                tabDiv.appendChild(checkbox);
                tabDiv.appendChild(label);
                tabDiv.appendChild(document.createElement('br'));
            });
    
            tabContent.appendChild(tabDiv);
        }
    }
    
    function updateSelectedAnalytes(test, isChecked) {
        const tableBody = document.querySelector('#selectedAnalytesTable tbody');
        if (isChecked) {
            let row = tableBody.insertRow();
            row.id = 'row-' + test.Untersuchung;
            Object.keys(test).forEach(key => {
                let cell = row.insertCell();
                cell.textContent = test[key];
            });
            
        } else {
            let rowToRemove = document.getElementById('row-' + test.Untersuchung);
            if (rowToRemove) {
                tableBody.removeChild(rowToRemove);
            }
        }
    }
    
    
    
    function updateTubeSelections() {
        const tubeContainer = document.getElementById('tubeContainer');
        tubeContainer.innerHTML = ''; // Clear previous content
    
        const selectedRows = document.querySelectorAll('#selectedAnalytesTable tbody tr');
        let tubeTypes = new Set();
    
        // Find unique tube types from selected rows
        selectedRows.forEach(row => {
            if (!row.classList.contains("not-calculable")) {
                tubeTypes.add(row.cells[4].textContent); // Tube is at index 3
            }
        });
    
        tubeTypes.forEach(type => {
            let div = document.createElement('div');
            div.className = 'input-group mb-3';
            div.style = 'width: 500px;';
            div.id = 'volume-selection';
            div.innerHTML = `
                <label class="input-group-text" for="fillingVolume${type}">${type} Füllvolumen:</label>
                <select class="form-select" id="fillingVolume${type}">
                    <option selected>Select...</option>
                    <option value="500">500</option>
                    <option value="800">800</option>
                    <option value="1300">1300</option>
                    <option value="2600">2600</option>
                </select>
                <span class="input-group-text">μl</span>`;
            tubeContainer.appendChild(div);
        });
    }
    
    function calculateForTubeType(type, fillingVolume, rows) {
        // Initialize variables for sample volume calculations
        let totalSampleVolume = 0;
        let highestDeadVolume = 0;

        // Create a map to store unique combinations of material and tube
        const volumeMap = new Map();

        // Calculate total sample volume and find the highest dead volume for unique combinations
        rows.forEach(row => {
            const material = row.cells[3].textContent; // Material in der 4. Spalte
            const tube = row.cells[4].textContent; // Röhrchen in der 5. Spalte

            // Create a unique key for the combination of material and tube
            const key = `${material} in ${tube}`;

            // Check if the current row's tube matches the type being processed
            if (tube === type) {
                const sampleVolume = parseFloat(row.cells[6].textContent) || 0; // Mindestprobenmenge in der 7. Spalte
                const deadVolume = parseFloat(row.cells[7].textContent) || 0; // Totvolumen in der 8. Spalte

                // Update the total sample volume
                totalSampleVolume += sampleVolume;

                // Update the highest dead volume for this unique combination
                if (!volumeMap.has(key)) {
                    volumeMap.set(key, deadVolume);
                } else {
                    const currentDeadVolume = volumeMap.get(key);
                    if (deadVolume > currentDeadVolume) {
                        volumeMap.set(key, deadVolume);
                    }
                }
            }
        });

        // Find the highest dead volume from the map
        highestDeadVolume = Math.max(...Array.from(volumeMap.values()));

        // Initialize variables for volume calculations
        let totalVolume;
        let requiredSampleVolume;
        let hctValue = parseFloat(document.getElementById('hct').value) / 100;

        // Calculate required sample volume based on tube type
        if (type.toLowerCase().includes('heparin') || type.toLowerCase().includes('serum') || type.toLowerCase().includes('gerinnung')) {
            // For Heparin, Serum, and Coagulation: consider the hematocrit value
            requiredSampleVolume = totalSampleVolume + highestDeadVolume;
            totalVolume = requiredSampleVolume / (1 - hctValue);
        } else {
            // For all other tube types: don't consider hematocrit
            requiredSampleVolume = totalSampleVolume + highestDeadVolume;
            totalVolume = requiredSampleVolume;
        }

        // Add safety margin of 250µl, except for CSF analyses
        let safetyMargin = type.toLowerCase().includes('csf') ? 0 : 250;
        totalVolume += safetyMargin;

        // Check if the total volume exceeds the filling volume (for non-CSF and non-Coagulation tubes)
        let warning = !type.toLowerCase().includes('csf') && !type.toLowerCase().includes('gerinnung') && totalVolume > fillingVolume;

        // Return an object with all calculated values and flags
        return {
            volume: totalVolume,
            hctValue: hctValue * 100, 
            deadVolume: highestDeadVolume, 
            requiredSampleVolume: requiredSampleVolume,  
            warning: warning,
            isCoagulation: type.toLowerCase().includes('gerinnung'),
            isCSFAnalyses: type.toLowerCase().includes('csf'),
            safetyMargin: safetyMargin
        };
    }
    
    function calculateSampleVolume() {
        // Get the hematocrit value and selected rows
        const hctValue = document.getElementById('hct').value;
        const selectedRows = document.querySelectorAll('#selectedAnalytesTable tbody tr');
    
        // Validate hematocrit value
        if (hctValue === '' || isNaN(hctValue) || hctValue < 0 || hctValue > 100) {
            alert('Bitte geben Sie einen gültigen Hämatokritwert zwischen 0 und 100 ein.');
            return;
        }
    
        // Check if any tests are selected
        if (selectedRows.length === 0) {
            alert('Bitte wählen Sie mindestens eine Analyse aus.');
            return;
        }
    
        // Clear previous results
        const calculationResult = document.getElementById('calculationResult');
        calculationResult.innerHTML = '';
    
        // Get unique combinations of material and tube types from selected rows
        let uniqueCombinations = new Set();
        selectedRows.forEach(row => {
            const material = row.cells[3].textContent; // Material in der 4. Spalte
            const tube = row.cells[4].textContent; // Röhrchen in der 5. Spalte
            uniqueCombinations.add(`${material} in ${tube}`); // Kombiniere Material und Röhrchen
        });
    
        // Calculate and display results for each unique combination
        uniqueCombinations.forEach(combination => {
            const [material, tube] = combination.split(' in '); // Trenne Material und Röhrchen
    
            // Determine if it's a CSF or Coagulation tube (these don't need filling volume)
            const isCSFOrCoagulation = tube.toLowerCase() === 'liquor' || 
                                       tube.toLowerCase() === 'edta' || 
                                       tube.toLowerCase() === 'citrat';
            // Get filling volume for non-CSF and non-Coagulation tubes
            const fillingVolume = isCSFOrCoagulation ? null : parseFloat(document.getElementById(`fillingVolume${tube}`).value);
            
            // Calculate results for this unique combination
            let result = calculateForTubeType(tube, fillingVolume, selectedRows);
            
            // Create a div to display the results
            let resultDiv = document.createElement('div');
            resultDiv.className = 'result_div';
            resultDiv.innerHTML = `
                <h4>${combination}</h4>
                <br>Erforderliches Probenvolumen: ${result.requiredSampleVolume.toFixed(2)} µl
                <br>Davon Totvolumen: ${result.deadVolume.toFixed(2)} µl
                ${result.safetyMargin > 0 ? `<br>Plus Sicherheitsmarge: ${result.safetyMargin.toFixed(2)} µl` : ''}
                ${(tube.toLowerCase().includes('heparin') || tube.toLowerCase().includes('serum') || result.isCoagulation) ? 
                  `<br>Berücksichtigung eines Hämatokrits von ${result.hctValue.toFixed(2)}%` : ''}
                <h5>Gesamt erforderliche Menge von ${combination}: ${result.volume.toFixed(2)} µl</h5>`;
            
            // Add warning if the volume exceeds the filling volume
            if (result.warning) {
                resultDiv.innerHTML += `<p style="color: red;">WARNUNG: Die erforderliche Menge überschreitet das maximale Füllvolumen des Röhrchens (${fillingVolume} µl).</p>`;
            }
            
            // Add special instruction for Coagulation tubes
            if (result.isCoagulation) {
                resultDiv.innerHTML += `<p style="color: red;">Bitte verwenden Sie die nächstgrößere Citratröhrchengröße, um die berechnete Menge an Vollblut unterzubringen, und füllen Sie es bis zum maximalen Füllvolumen, um ein korrektes Blut:Citrate-Verhältnis sicherzustellen.</p>`;
            }
            resultDiv.innerHTML += `<hr>`;
            // Add the result div to the page
            calculationResult.appendChild(resultDiv);
        });
    }
    
    
    
    
    
    function openTab(evt, groupName) {
        var i, tabcontent, tablinks;
    
        // Hide all tab contents
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    
        // Remove the 'active' class from all buttons in the tab container
        const tabContainer = document.querySelector('.tab');
        tablinks = tabContainer.getElementsByTagName('button');
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
    
        // Show the current tab content and add the 'active' class to the clicked tab
        document.getElementById(groupName).style.display = "block";
        if (evt) {
            evt.currentTarget.classList.add("active");
        }
    }
    
    // Ensure the function is loaded as the DOM may load late
    document.addEventListener('DOMContentLoaded', function() {
        createTabsAndCheckboxes(analytesData);
    });