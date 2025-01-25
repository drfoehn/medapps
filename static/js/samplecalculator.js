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
     "Röhrchen": "Gerinnung",
     "Bemerkungen": "3ml Gerinnungsröhrchen - gefüllt bis zur Markierung!",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 3000,
     "Benötigtes Totvolumen \nin µl": 0,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Antiphospholipid-screening Serum",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": "ACHTUNG: Auch APS-Citrat auswählen!",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 700,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Antiphospholipid-screening Citrat",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": "ACHTUNG: Auch APS-Serum auswählen!",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "APC-Ratio",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": "beide benötigten Tests",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 20,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Anti Xa Heparinmonitoring",
     "Wohin": "ZL - LKH",
     "Schein": "G \/ A \/ N ",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": "Genau 4h nach Lovenoxgabe! (Oder mit ges. Gerinnung)",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 10,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Protein C",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": "Nur Mo-Fr.",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Protein S free",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": "Nur Mo-Fr.",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 21,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Protein S-Aktivität",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": "Wird nur 1xWoche bestimmt,\nsonst im ZL tiefgekühlt",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 25,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "AT III",
     "Wohin": "ZL - LKH",
     "Schein": "G \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 21,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "D-Dimer",
     "Wohin": "ZL - LKH",
     "Schein": "G \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Fibrinogen",
     "Wohin": "ZL - LKH",
     "Schein": "G \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 10,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor XII (12)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 4,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor XIII (13)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 20,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor II (2)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor V (5)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor VII (7)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor X (10)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor VIII (8)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor IX ( 9)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Gerinnungsfaktor XI (11)",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "PTT",
     "Wohin": "ZL - LKH",
     "Schein": "G \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "PZ (inkl. INR)",
     "Wohin": "ZL - LKH",
     "Schein": "G \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Thrombinzeit (TZ)",
     "Wohin": "ZL - LKH",
     "Schein": "G \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "von-Willebrand-Faktor Antigen und Aktivität",
     "Wohin": "ZL - LKH",
     "Schein": "G",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 30,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Gerinnung"
    },
    {
     "Untersuchung": "Aszites Punktat (Leukos + Differenzierung)",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Blut",
     "Röhrchen": "EDTA",
     "Bemerkungen": "Entnahmeort eingeben\nVorgehen siehe extra Zettel",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 160,
     "Gruppe": "Hämatologie"
    },
    {
     "Untersuchung": "Leukozyten im Pleura- oder Pericardpunktat",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Blut",
     "Röhrchen": "EDTA",
     "Bemerkungen": "Punktat in EDTA-Röhrchen einsenden",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 160,
     "Gruppe": "Hämatologie"
    },
    {
     "Untersuchung": "Leukozytentypisierung",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "EDTA",
     "Bemerkungen": "Tel. Ankündigen inkl. Fragestellung",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 526,
     "Benötigtes Totvolumen \nin µl": 270,
     "Gruppe": "Hämatologie"
    },
    {
     "Untersuchung": "Hämoglobinvarianten",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "EDTA",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 146,
     "Benötigtes Totvolumen \nin µl": 270,
     "Gruppe": "Hämatologie"
    },
    {
     "Untersuchung": "Thrombozyten im Citratblut",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Gerinnung",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 160,
     "Benötigtes Totvolumen \nin µl": 0,
     "Gruppe": "Hämatologie"
    },
    {
     "Untersuchung": "Kupfer im 24h-Harn",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen",
     "Bemerkungen": "Angabe der gesamelten Harnmenge in 24h mit 1ml Harn ins ZL - Keine Konservierung (wird 1x die Woche gemacht)",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 500,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Osmolarität im Harn",
     "Wohin": "ZL - LKH",
     "Schein": "H",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen",
     "Bemerkungen": "Außerhalb Routinezeiten bitte Formular \"Zuweisung zur Messung der Osmolarität im Serum\/Harn außerhalb Routinezeiten\" verwenden.",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Beta-2-Mikroglobulin im Harn",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen ohne Additive",
     "Bemerkungen": "Kein Sammelharn nötig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Drogennachweis im Harn",
     "Wohin": "ZL - LKH",
     "Schein": "D",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen",
     "Bemerkungen": "Möglichst am 1. LT und erster Harn",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 500,
     "Benötigtes Totvolumen \nin µl": 750,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Katecholamine im Harn mit Konservierung",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Harn",
     "Röhrchen": "Dunkles Sammelgef. mit Konserv.mittel, im ZL holen",
     "Bemerkungen": "Tel. Rüspr. bzgl der Menge des Konservierungsmittel (Eisessig) →  auf 300ml Harn ca. 5ml Eisessig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 3000,
     "Benötigtes Totvolumen \nin µl": 4500,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Kreatinin im Harn",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Harnproteinmuster (Albumin, Alpha1-Mikroglobulin, Alpha2-Makroglobulin, IgG und Kreatinin im Harn)",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 323,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Albumin im Harn",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen ohne Additive",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Gesamtprotein im Harn",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen ohne Additive",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 6,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Harnanalysen"
    },
    {
     "Untersuchung": "Röteln - Impftiter (nur IgG)",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "IgG  ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 75,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Röteln - AK (IgG und IgM)",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "IgG + IgM",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Cytomegalie AK (IgG, IgM)",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Pipettiermenge je Parameter ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Hepatitis Serologie",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "V- Ärzten gew. US → Unterschrift                                                                 1x volles Serum-Röhrchen",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 1500,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Hepatitis B c-AK  (IgM \/ IgG)",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Hepatitis B e-AK \/ AG",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Hepatitis B s-Antigen",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Hepatitis B s-Antikörper",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Hepatitis A-IgG \/ IgM",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Hepatitis C-AK IgG\/IgM",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "HIV-AK",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Sars COV-2 Antikörper",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Toxoplasmose AK (IgG +IgM)",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Treponema - Screening",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 80,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Infektionsserologie"
    },
    {
     "Untersuchung": "Herpes simplex IgG (für Antikörperindex erforderlich)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Herpes simplex IgM",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Varizella Zoster IgG (für Antikörperindex erforderlich)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Varizella Zoster IgM",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Epstein Barr IgG (für Antikörperindex erforderlich)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Epstein Barr IgM",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Cytomegalie IgG (für Antikörperindex erforderlich)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Cytomegalie IgM",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "FSME IgG (für Antikörperindex erforderlich)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "FSME IgM",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Borrelien IgG (für Antikörperindex erforderlich) (inkl. Immunoblot bei Positivität)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Borrelien IgM (inkl. Immunoblot bei Positivität)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Infektionsserologie Liquor"
    },
    {
     "Untersuchung": "Freies Hämoglobin",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "auch aus EDTA-Plasma möglich",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Osmolarität im Serum\n",
     "Wohin": "ZL - LKH",
     "Schein": "H",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Außerhalb Routinezeiten bitte Formular \"Zuweisung zur Messung der Osmolarität im Serum\/Harn außerhalb Routinezeiten\" verwenden.",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Blutzucker\nenzymatisch",
     "Wohin": "ZL - LKH",
     "Schein": "N \/ A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Bei Einzelabnahme im gelben Röhrchen",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Blutzucker enzymatisch",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Bei Einzelabnahme im gelben Röhrchen",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Interleukin 6 (Venöses oder Nabelschnurblut)",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Bei Nabelschnurblut IL6 Cordal- blut ankreuzen",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 18,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Transferrinsättigung",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Berechnete Analyse (Serum-Eisen und Transferrin anfordern)",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 0,
     "Benötigtes Totvolumen \nin µl": 0,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Fructosamin",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Diabet. Kinder",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 6,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Homocystein",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "EDTA",
     "Bemerkungen": "Keine Vitamingabe die letzten 3d: Sofort gekühlt in ZL",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 20,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Cystatin C",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Nur Mo. - Fr.\nIm Harn nicht möglich",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Myoglobin",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Oder gemeinsam mit anderen\nParametern",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Bilirubin direkt",
     "Wohin": "ZL - LKH",
     "Schein": "N \/ A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Optimal wäre Lichtschutz des Röhrchens",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 6.7,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Bilirubin gesamt",
     "Wohin": "ZL - LKH",
     "Schein": "N \/ A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Optimal wäre Lichtschutz des Röhrchens",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Ammoniak (= NH³)",
     "Wohin": "ZL - LKH",
     "Schein": "N \/ A",
     "Material": "Blut",
     "Röhrchen": "EDTA-Vollblut",
     "Bemerkungen": "SOFORT auf Eis legen und versenden",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 17,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Laktat im Blut (heparin-Plasma)",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "ZL → Auf Eis (als Ersatz für Fluorid-Rö)",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Laktat im Blut (Fluorid-Röhrchen)",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Fluorid-Röhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Alpha-1 Antitrypsin",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Albumin im Serum",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Aldolase",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 400,
     "Benötigtes Totvolumen \nin µl": 0,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Alkalische Phosphatase",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2.8,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Alkoholspielgel",
     "Wohin": "ZL - LKH",
     "Schein": "N \/ D",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 4,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Amylase im Blut",
     "Wohin": "ZL - LKH",
     "Schein": "N \/ A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 4,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "ASL-Antistreptolysin- Titer",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Caeruloplasmin",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Cholesterin",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Cholinesterase",
     "Wohin": "ZL - LKH",
     "Schein": "N \/ A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "CKMB = CreatinKinase Isoenzym MB",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "CPK = CK",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2.8,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "CRP",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Serum-Eisen",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 8.5,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Ferritin",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 10,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Transferrin",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Haptoglobin",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Harnsäure",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Kreatinin (+eGFR) im Blut",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "LDH",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2.8,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "GOT",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "GPT",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Gamma-GT",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Alkal. Phosphatase",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Lipoprotein(a) ",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "NT-proBNP",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Procalcitonin (PCT)",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 18,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Rheumafaktor",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Triglyceride",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Troponin hs",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 30,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "ACE - Angiotensin convertingenzym",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 18,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Alpha 1-Fetoprotein (AFP)",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 6,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "NSE  (neurospez. Enolase)",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 12,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "S100",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 12,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "Kreatinin-Clearence berechnet",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Bemerkungen": "Zeitgleiche Abnahme von Harn und Blut.\nGes.harnmenge, Gewicht und Länge des Kindes angeben!\nProbenmenge siehe Kreatinin im Blut und Kreatinin im Harn",
     "Gruppe": "Klinische Chemie"
    },
    {
     "Untersuchung": "NSE im Serum",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 72,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Basisdiagnostik \/ Chemie"
    },
    {
     "Untersuchung": "Berliner-Blau-Färbung",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "in Zytologie inkludiert",
     "Gruppe": "Liquoranalyen - Basisdiagnostik \/ Chemie"
    },
    {
     "Untersuchung": "Zellzahl + Zytologie",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 500,
     "Benötigtes Totvolumen \nin µl": 0,
     "Gruppe": "Liquoranalyen - Basisdiagnostik \/ Chemie"
    },
    {
     "Untersuchung": "Basisdiagnostik (Gesamteiweiß, Lactat und Glucose im Liquor)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 62.5,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Basisdiagnostik \/ Chemie"
    },
    {
     "Untersuchung": "Ferritin (bei Diagnose Blutung)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 17.5,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Basisdiagnostik \/ Chemie"
    },
    {
     "Untersuchung": "Schrankenfunktion \"klein\" (Albumin, IgG-Synthese)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "parallel abgenommenes Serumröhrchen notwendig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
     "Benötigtes Totvolumen \nin µl": 200,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "Schrankenfunktion \"groß\" (Albumin, IgG-, IgA- und IgM-Synthese)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "parallel abgenommenes Serumröhrchen notwendig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 550,
     "Benötigtes Totvolumen \nin µl": 200,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "Herpes simplex Antikörperindex",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "parallel abgenommenes Serumröhrchen notwendig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "Varizella Zoster Antikörperindex",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "parallel abgenommenes Serumröhrchen notwendig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "Epstein Barr Antikörperindex",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "parallel abgenommenes Serumröhrchen notwendig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "Cytomegalie Antikörperindex",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "parallel abgenommenes Serumröhrchen notwendig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "FSME Antikörperindex",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "parallel abgenommenes Serumröhrchen notwendig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "Borrelien Antikörperindex (inkl. Immunoblot bei Positivität)",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": "parallel abgenommenes Serumröhrchen notwendig",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "Oligoklonale Banden",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 0,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "CXCL13",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Liquorimmunologie"
    },
    {
     "Untersuchung": "Herpes simplex PCR Liquor",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Varizella Zoster PCR Liquor",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Epstein Barr PCR Liquor",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Cytomegalie PCR Liquor",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Humanes Herpesvirus 6 PCR Liquor",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Enteroviren PCR Liquor",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Borrielien PCR Liquor",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "Liquor - Polypropylenröhrchen für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Liquoranalyen - Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Influenza A\/B + RSV PCR; SARS-COV2- PCR",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Abstrich",
     "Röhrchen": "Nasal Aspirate\/Wash (NA\/W) Proben und Nasopharyngeal (NP) Abstriche in Virentransportmedium (3-ml-Röhrchen mit Transportmedium) ",
     "Bemerkungen": "Im Virentransportmedium einsenden",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "UGT1A1-Polymorphismus",
     "Wohin": "ZL - LKH",
     "Schein": "B ",
     "Material": "Blut",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": "Genetischer Revers nötig,\nBefund dauert 1 ca Woche",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "Gerinnungsstatus speziell: Prothrombin, Faktor V Leiden,\nMTHFR",
     "Wohin": "ZL - LKH",
     "Schein": "B \/ G",
     "Material": "Blut",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": "Revers der Eltern nötig, siehe extra Zettel",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "Covid PCR Blut",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 1000,
     "Benötigtes Totvolumen \nin µl": 0,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "HIV RNA \/ HIV-PCR",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 600,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "CMV PCR = DNA im Blut",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 500,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "HBV DNS \/ HBV-PCR > quantitativ",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "HCV RNA \/ HCV-PCR > quantitativ",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 600,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "CMV PCR = DNA im Harn",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen für PCR\n",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 500,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekularbiologie"
    },
    {
     "Untersuchung": "Herpes simplex PCR EDTA",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Varizella Zoster PCR EDTA",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Epstein Barr PCR EDTA",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Cytomegalie PCR EDTA",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Humanes Herpesvirus 6 PCR EDTA",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Enteroviren PCR EDTA",
     "Wohin": "ZL - CDK",
     "Schein": "CDK - Liquor \/ Molbio.",
     "Material": "Liquor",
     "Röhrchen": "EDTA für PCR",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Molekulare Diagnostik"
    },
    {
     "Untersuchung": "Elektroyte (Na, K, Cl, Ca, P, Mg) im Spontanharn",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen",
     "Bemerkungen": "Na\/K\/Cl: 10-15 \/ Ca: 2 \/ Phosphor: 15 \/ Magnesium: 14",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Panele"
    },
    {
     "Untersuchung": "Elektroyte (Na, K, Cl, Ca, P, Mg) im Sammelharn",
     "Wohin": "ZL - LKH",
     "Schein": "A \/ N",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen",
     "Bemerkungen": "Na\/K\/Cl: 10-15 \/ Ca: 2 \/ Phosphor: 15 \/ Magnesium: 14\nHarnsammelmenge\/24h mit angeben",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Panele"
    },
    {
     "Untersuchung": "C3 Komplement",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Proteinchemie"
    },
    {
     "Untersuchung": "C4 Komplement",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Proteinchemie"
    },
    {
     "Untersuchung": "Serum-Elektrophorese",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 10,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Proteinchemie"
    },
    {
     "Untersuchung": "Immunglobuline IgM, IgA, IgG,",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Proteinchemie"
    },
    {
     "Untersuchung": "Immunglobulin IgE",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Proteinchemie"
    },
    {
     "Untersuchung": "Albumin \/ Kreatinin - Ratio",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Bemerkungen": "Berechnete Analyse (Albumin und Kreatinin im Harn anfordern)",
     "Gruppe": "Proteinchemie"
    },
    {
     "Untersuchung": "Protein \/ Kreatinin - Ratio",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Bemerkungen": "Berechnete Analyse (Protein und Kreatinin im Harn anfordern)",
     "Gruppe": "Proteinchemie"
    },
    {
     "Untersuchung": "Insulin Bestimmung",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma?",
     "Bemerkungen": "Nüchtern! sofort verschicken\nNICHT nachts\/Wochenende",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 90,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Sonderuntersuchungen"
    },
    {
     "Untersuchung": "Zink (Zn)",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Wird 1x die Woche gemacht",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Sonderuntersuchungen"
    },
    {
     "Untersuchung": "Kupfer im Plasma",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Sonderuntersuchungen"
    },
    {
     "Untersuchung": "Katecholamine im Harn ohne Konserv. Arzt fragen!!",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Harn",
     "Röhrchen": "Harnröhrchen",
     "Bemerkungen": "angesäuerter Harn aus Einzelprotion",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 3000,
     "Benötigtes Totvolumen \nin µl": 4500,
     "Gruppe": "Sonderuntersuchungen"
    },
    {
     "Untersuchung": "Elastase im Stuhl\n(Prankreaselastase)",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Stuhl",
     "Röhrchen": "Stuhlröhrchen",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": "1g",
     "Benötigtes Totvolumen \nin µl": "1,5g",
     "Gruppe": "Sonderuntersuchungen"
    },
    {
     "Untersuchung": "Digoxin-Spiegel",
     "Wohin": "ZL - LKH",
     "Schein": "A, N, E",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Abnahme 12 Std. nach letzter Gabe, am Schein vermerken",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 6,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "CDT",
     "Wohin": "ZL - LKH",
     "Schein": "D",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Bei Eltern große Röhrchen",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Coffein Spiegel aus Heparin-Plasma",
     "Wohin": "ZL - LKH",
     "Schein": "E",
     "Material": "Blut",
     "Röhrchen": "Heparin-Plasma",
     "Bemerkungen": "Einzelbestimmung: Serum \nMit anderen Parametern: gemeinsam im Heparin-Plasma",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Coffein Spiegel aus Serum",
     "Wohin": "ZL - LKH",
     "Schein": "E",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Einzelbestimmung: Serum \nMit anderen Parametern: gemeinsam im Heparin-Plasma",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Luminalspiegel",
     "Wohin": "ZL - LKH",
     "Schein": "E \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Einzelbestimmung: Serum Mit anderen Parametern:\ngemeinsam im Heparin-Plasma",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Zyvoxidspiegel (Linezolid)",
     "Wohin": "ZL - LKH",
     "Schein": "E",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Nu Di und Do, muss vor\n07.00 Uhr im Labor sein",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Topamaxspiegel = Topiramatspiegel",
     "Wohin": "ZL - LKH",
     "Schein": "E \/ A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Nur 1x pro Woche bestimmt\n→ Donnerstag\nWenn früher verschickt, wird Probe im Labor eingefroren",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Keppraspiegel\n(Levetiracetam)",
     "Wohin": "ZL - LKH",
     "Schein": "E",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Nur Montag und Mittwoch!\nBis 10 Uhr abnehmen",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Gallensäure",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Blut",
     "Röhrchen": "Serum (Lichtgesch.!!)",
     "Bemerkungen": "Probe wird nur Donnerstags\nuntersucht!",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Targocid-Spiegel (Teicoplanin)",
     "Wohin": "ZL - LKH",
     "Schein": "E \/ A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Talspiegel\nBestimmung täglich zur Routinezeiten, an Feiertagen und Wochenenden bis 12:00h",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Theospirex-Spiegel (Theophyllin)",
     "Wohin": "ZL - LKH",
     "Schein": "E \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Talspiegel. Auf Kurve vermerken falls Spitzenspiegel",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Valproinsäure (Depaken)",
     "Wohin": "ZL - LKH",
     "Schein": "E \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "Unter Antikonvulsiva",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Tacrolimuspiegel",
     "Wohin": "ZL - LKH",
     "Schein": "E",
     "Material": "Blut",
     "Röhrchen": "EDTA",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 400,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Vitamin B1-B6",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "EDTA",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 300,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Lamictal Spiegel (Lamotrigin)",
     "Wohin": "ZL - LKH",
     "Schein": "E",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Alprazolamspiegel",
     "Wohin": "ZL - LKH",
     "Schein": "E",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "CDG Screening",
     "Wohin": "ZL - LKH",
     "Schein": "C",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Clozapin Spiegel",
     "Wohin": "ZL - LKH",
     "Schein": "E",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 150,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Epanutin-Spiegel (Phenytoin)",
     "Wohin": "ZL - LKH",
     "Schein": "E \/ A \/ N",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 1.7,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Refobacin\n(Gentamycin)",
     "Wohin": "ZL - LKH",
     "Schein": "E \/ A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
     "Benötigtes Totvolumen \nin µl": 100,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Vitamin A + E",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
     "Benötigtes Totvolumen \nin µl": 550,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Vitamin B12",
     "Wohin": "ZL - LKH",
     "Schein": "A",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": " - ",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
     "Benötigtes Totvolumen \nin µl": 50,
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "Drogennachweis im Mekonium",
     "Wohin": "ZL - LKH",
     "Schein": "D",
     "Material": "Stuhl",
     "Röhrchen": "Stuhlröhrchen",
     "Bemerkungen": "Möglichst am 1. LT und erstes Mekonium",
     "Mindestprobenmenge (Pipettiermenge) \nin µl": "1g",
     "Benötigtes Totvolumen \nin µl": "1,5g",
     "Gruppe": "Toxikologie"
    },
    {
     "Untersuchung": "TORCH: (alt) siehe Neu: Prä- und Perinataler Infektionsblock",
     "Wohin": "ZL - LKH",
     "Schein": "I",
     "Material": "Blut",
     "Röhrchen": "Serum",
     "Bemerkungen": "I Schein →\nPrä- und Perinataler Infektionsblock"
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
                    <option value="1200">1200</option>
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