//document.addEventListener('DOMContentLoaded', function() {
//    fetch('analytes.json')
//    .then(response => response.json())
//    .then(data => createTabsAndCheckboxes(data));
//});

const analytesData = [
    {
        "Untersuchung": "Anti Xa Heparinmonitoring",
        "Wohin": "ZL",
        "Schein": "G \/ A \/ N ",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "Genau 4h nach Lovenoxgabe! (Oder mit ges. Gerinnung)",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 10,
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Antiphospholipid-screening Citrat",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "ACHTUNG: Auch APS-Serum auswählen!",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Antiphospholipid-screening Serum",
        "Wohin": "",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "ACHTUNG: Auch APS-Citrat auswählen!",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "APC-Ratio",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "beide benötigten Tests",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 20,
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "AT III",
        "Wohin": "ZL",
        "Schein": "G \/ A \/ N",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 21,
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "D-Dimer",
        "Wohin": "ZL",
        "Schein": "G \/ A \/ N",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Fibrinogen",
        "Wohin": "ZL",
        "Schein": "G \/ A \/ N",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 10,
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor XII (12)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 4,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor XIII (13)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 20,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor II (2)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor V (5)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor VII (7)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor X (10)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor VIII (8)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor IX ( 9)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Gerinnungsfaktor XI (11)",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Protein C",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "Nur Mo-Fr.",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Protein S free",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "Nur Mo-Fr.",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 21,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Protein S-Aktivität",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "Wird nur 1xWoche bestimmt,\nsonst im ZL tiefgekühlt",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 25,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "PTT",
        "Wohin": "ZL",
        "Schein": "G \/ A \/ N",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "PZ (inkl. INR)",
        "Wohin": "ZL",
        "Schein": "G \/ A \/ N",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "ROTEM (spez. Fibrinmessung)",
        "Wohin": "ZL",
        "Schein": "N",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "3ml Gerinnungsröhrchen - gefüllt bis zur Markierung!",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 3000,
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Thrombinzeit (TZ)",
        "Wohin": "ZL",
        "Schein": "G \/ A \/ N",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "von-Willebrand-Faktor Antigen und Aktivität",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 30,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Gerinnung"
    },
    {
        "Untersuchung": "Aszites Punktat (Leukos + Differenzierung)",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "EDTA",
        "Bemerkungen": "Entnahmeort eingeben\nVorgehen siehe extra Zettel",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": 160,
        "Gruppe": "Hämatologie"
    },
    {
        "Untersuchung": "Leukozytentypisierung",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "EDTA",
        "Bemerkungen": "Tel. Ankündigen inkl. Fragestellung",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 526,
        "Benötigtes Totvolumen \nin µl": 270,
        "Gruppe": "Hämatologie"
    },
    {
        "Untersuchung": "Thrombozyten im Citratblut",
        "Wohin": "ZL",
        "Schein": "G",
        "Röhrchen": "Gerinnung",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "160µl wird für Analyse benötigt - bitte ein von der Menge passendes Citratröhrchen bis zur Markierung füllen",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Hämatologie"
    },
    {
        "Untersuchung": "Alpha-1 Antitrypsin",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Immunologie"
    },
    {
        "Untersuchung": "Cytomegalie AK (IgG, IgM)",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "Pipettiermenge je Parameter ",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis B c-AK  (IgM \/ IgG)",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis B e-AK \/ AG",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis B s-Antigen",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis B s-Antikörper",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis A-IgG \/ IgM",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis C-AK IgG\/IgM",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Hepatitis Serologie",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "V- Ärzten gew. US → Unterschrift                                                                 1x volles Serum-Röhrchen",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 1500,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "HIV-AK",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Herpes (HSV) - AK (IgG \/ IgM) im Blut",
        "Wohin": "MB",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "Befund nach 1 Woche",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Herpes (HSV) - AK (IgG \/ IgM) im Abstrich (Schnellt.)",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Transwab Abstrich v. Kinderambulanz",
        "Bemerkungen": " Keinen normalen BAK Abstrich vernwenden!",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Sars COV-2 Antikörper",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Toxoplasmose AK (IgG +IgM)",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Varicellen IgG, IgM",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Infektionsserologie"
    },
    {
        "Untersuchung": "Ammoniak (= NH³)",
        "Wohin": "ZL",
        "Schein": "N",
        "Röhrchen": "EDTA-Vollblut",
        "Bemerkungen": "SOFORT auf Eis legen und versenden",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 17,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Elektroyte (Na, K, Cl, Ca, P, Mg) im Sammelharn",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "Na\/K\/Cl: 10-15 \/ Ca: 2 \/ Phosphor: 15 \/ Magnesium: 14\nHarnsammelmenge\/24h mit angeben",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Panele"
    },
    {
        "Untersuchung": "Elektroyte (Na, K, Cl, Ca, P, Mg) im Spontanharn",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "Na\/K\/Cl: 10-15 \/ Ca: 2 \/ Phosphor: 15 \/ Magnesium: 14",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Panele"
    },
    {
        "Untersuchung": "Amylase im Harn",
        "Wohin": "ZL",
        "Schein": "N",
        "Röhrchen": "Harnröhrchen ohne Additive",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 4,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Albumin im Serum",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Aldolase",
        "Wohin": "ZL",
        "Schein": "B ",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 400,
        "Benötigtes Totvolumen \nin µl": 0,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alkalische Phosphatase",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2.8,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alkoholspielgel",
        "Wohin": "ZL",
        "Schein": "N",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 4,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Amylase im Blut",
        "Wohin": "ZL",
        "Schein": "N",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 4,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "ASL-Antistreptolysin- Titer",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Bilirubin direkt",
        "Wohin": "",
        "Schein": "N",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Optimal wäre Lichtschutz des Röhrchens",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 6.7,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Bilirubin gesamt",
        "Wohin": "ZL",
        "Schein": "N",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Optimal wäre Lichtschutz des Röhrchens",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Blutzucker\nenzymatisch",
        "Wohin": "ZL",
        "Schein": "N",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Bei Einzelabnahme im gelben Röhrchen",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Caeruloplasmin",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Cholesterin",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Cholinesterase",
        "Wohin": "ZL",
        "Schein": "N",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "CKMB = CreatinKinase Isoenzym MB",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 5,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "CPK = CK",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2.8,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "CRP",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Cystatin C",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Nur Mo. - Fr.\nIm Harn nicht möglich",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Serum-Eisen",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 8.5,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Transferrinsättigung",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Berechnete Analyse (Serum-Eisen und Transferrin anfordern)",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 0,
        "Benötigtes Totvolumen \nin µl": 0,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Ferritin",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 10,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Transferrin",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Freies Hämoglobin",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "auch aus EDTA-Plasma möglich",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Fructosamin",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Diabet. Kinder",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 6,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Haptoglobin",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Amylase im Liquor",
        "Wohin": "ZL-CDK",
        "Schein": "N",
        "Röhrchen": "Punktat",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Liquoranalysen"
    },
    {
        "Untersuchung": "ACE - Angiotensin convertingenzym",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 18,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alpha 1-Fetoprotein (AFP)",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 6,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Chyloflüssigkeit auf TG, GP, PT, Lymphozyten, Zellzahl",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Weiße Eprovette\n",
        "Bemerkungen": "In Spalte Bemerkungen ganz unten eintragen\nRöhrchen gut schwenken",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Panele"
    },
    {
        "Untersuchung": "Harnsäure",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Homocystein",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "EDTA",
        "Bemerkungen": "Keine Vitamingabe die letzten 3d: Sofort gekühlt in ZL",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 20,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Interleukin 6 (Venöses oder Nabelschnurblut)",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Bei Nabelschnurblut IL6 Cordal- blut ankreuzen",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 18,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Kreatinin (+eGFR) im Blut",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Kreatinin im Harn",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Kreatinin-Clearence",
        "Wohin": "",
        "Schein": "A",
        "Röhrchen": "",
        "Bemerkungen": "Zeitgleiche Abnahme von Harn und Blut.\nGes.harnmenge, Gewicht und Länge des Kindes angeben!",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Kupfer im Plasma",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Kupfer im 24h-Harn",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "Angabe der gesamelten Harnmenge in 24h mit 1ml Harn ins ZL - Keine Konservierung (wird 1x die Woche gemacht)",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 500,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Laktat im Blut (heparin-Plasma)",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "ZL → Auf Eis (als Ersatz für Fluorid-Rö)",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Laktat im Blut (Fluorid-Röhrchen)",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Fluorid-Röhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Lamictal Spiegel (Lamotrigin)",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "LDH",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2.8,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "GOT",
        "Wohin": "",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "GPT",
        "Wohin": "",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Gamma-GT",
        "Wohin": "",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Alkal. Phosphatase",
        "Wohin": "",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Lipoprotein(a) ",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Myoglobin",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Oder gemeinsam mit anderen\nParametern",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "NSE  (neurospez. Enolase)",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 12,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "S100",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 12,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "NT-proBNP",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Procalcitonin (PCT)",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 18,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Rheumafaktor",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 3,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Osmolarität im Serum\n",
        "Wohin": "ZL",
        "Schein": "H",
        "Röhrchen": "Serum",
        "Bemerkungen": "Außerhalb Routinezeiten bitte Formular \"Zuweisung zur Messung der Osmolarität im Serum\/Harn außerhalb Routinezeiten\" verwenden.",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Transferrin Rezeptor löslich",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "ALT :T-Zellen-Absolut:T4 + T8 NEU siehe Lymphozytentyp.",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Triglyceride",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Troponin hs",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 30,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Zink (Zn)",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Wird 1x die Woche gemacht",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Covid PCR Blut",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "EDTA",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 1000,
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "CMV PCR = DNA im Blut",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "EDTA\n",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 500,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "CMV PCR = DNA im Harn",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Harnröhrchen\n",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 500,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "CMV PCR = DNA im Liquor",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Liquorröhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 500,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Liquoranalysen"
    },
    {
        "Untersuchung": "HBV DNS \/ HBV-PCR > quantitativ",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 300,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "HCV RNA \/ HCV-PCR > quantitativ",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 600,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "Herpes (HSV) PCR im Liquor",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Liquor",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Liquoranalysen"
    },
    {
        "Untersuchung": "Herpes (HSV) PCR im Blut IgG\/IgM - HSV 1\/2 PCR",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "EDTA",
        "Bemerkungen": "Befund innerhalb 1 Woche",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "HIV RNA \/ HIV-PCR",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "EDTA",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 600,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "Influenza A\/B + RSV PCR; SARS-COV2- PCR",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Nasal Aspirate\/Wash (NA\/W) Proben und Nasopharyngeal (NP) Abstriche in Virentransportmedium (3-ml-Röhrchen mit Transportmedium) ",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "300 µl Virentransportmedium",
        "Benötigtes Totvolumen \nin µl": "100µl",
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "RSV PCR",
        "Wohin": "ZL",
        "Schein": "I",
        "Röhrchen": "Nasen-, Rachen- oder Trachealsekret",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "UGT1A1-Polymorphismus",
        "Wohin": "ZL",
        "Schein": "B ",
        "Röhrchen": "EDTA",
        "Bemerkungen": "Genetischer Revers nötig,\nBefund dauert 1 ca Woche",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Molekularbiologie"
    },
    {
        "Untersuchung": "Beta-2-Mikroglobulin im Harn",
        "Wohin": "",
        "Schein": "C",
        "Röhrchen": "Harnröhrchen ohne Additive",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "C3 Komplement",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 9,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "C4 Komplement",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 15,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Beta-2-Mikroglobulin im Blut",
        "Wohin": "ZL",
        "Schein": "A ",
        "Röhrchen": "Serum",
        "Bemerkungen": "Kein Sammelharn nötig",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Serum-Elektrophorese",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 10,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Albumin im Harn",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Albumin \/ Kreatinin - Ratio",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "Berechnete Analyse (Albumin und Kreatinin im Harn anfordern)",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Protein \/ Kreatinin - Ratio",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "Berechnete Analyse (Protein und Kreatinin im Harn anfordern)",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Gesamtprotein im Harn",
        "Wohin": "",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Harnproteinmuster (Albumin, Alpha1-Mikroglobulin, Alpha2-Makroglobulin, IgG und Kreatinin im Harn)",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 323,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Immunglobuline IgM, IgA, IgG,",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": "100\n",
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Immunglobulin IgE",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 50,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Proteinchemie"
    },
    {
        "Untersuchung": "Antihyptertensiva im Harn",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Drogennachweis im Harn",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "Möglichst am 1. LT und erster Harn",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 500,
        "Benötigtes Totvolumen \nin µl": 750,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Coffein Spiegel aus Heparin-Plasma",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Einzelbestimmung: Serum \nMit anderen Parametern: gemeinsam im Heparin-Plasma",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Alprazolamspiegel",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "CDG Screening",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "CDT",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Serum",
        "Bemerkungen": "Bei Eltern große Röhrchen",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Clozapin Spiegel",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Coffein Spiegel aus Serum",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "Einzelbestimmung: Serum \nMit anderen Parametern: gemeinsam im Heparin-Plasma",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Epanutin-Spiegel (Phenytoin)",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 1.7,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Gallensäure",
        "Wohin": "ZL",
        "Schein": "",
        "Röhrchen": "Serum (Lichtgesch.!!)",
        "Bemerkungen": "Probe wird nur Donnerstags\nuntersucht!",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Drogennachweis im Mekonium",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Stuhlröhrchen",
        "Bemerkungen": "Möglichst am 1. LT und erstes Mekonium",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "1g",
        "Benötigtes Totvolumen \nin µl": "1,5g",
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Hydroxyprolin",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Harnröhrchen mit\nKonservierung",
        "Bemerkungen": "Kons.: 3ml Tymol 10% in\nIsopropanol vom ZL holen",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Katecholamine im Harn mit Konservierung",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Dunkles Sammelgef. mit Konserv.mittel, im ZL holen",
        "Bemerkungen": "Tel. Rüspr. bzgl der Menge des Konservierungsmittel (Eisessig) →  auf 300ml Harn ca. 5ml Eisessig",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 3000,
        "Benötigtes Totvolumen \nin µl": 4500,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Katecholamine im Harn ohne Konserv. Arzt fragen!!",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "angesäuerter Harn aus Einzelprotion",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 3000,
        "Benötigtes Totvolumen \nin µl": 4500,
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Keppraspiegel\n(Levetiracetam)",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "Nur Montag und Mittwoch!\nBis 10 Uhr abnehmen",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Refobacin\n(Gentamycin)",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Tacrolimuspiegel",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "EDTA",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 400,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Targocid-Spiegel (Teicoplanin)",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "Talspiegel\nBestimmung täglich zur Routinezeiten, an Feiertagen und Wochenenden bis 12:00h",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Theospirex-Spiegel (Theophyllin)",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "Talspiegel. Auf Kurve vermerken falls Spitzenspiegel",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Topamaxspiegel = Topiramatspiegel",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "Nur 1x pro Woche bestimmt\n→ Donnerstag\nWenn früher verschickt, wird Probe im Labor eingefroren",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 150,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Valproinsäure (Depaken)",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "Unter Antikonvulsiva",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Vitamin A + E",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": 550,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Vitamin B12",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Vitamin B1-B6",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "EDTA",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": 300,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Zyvoxidspiegel (Linezolid)",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "Nu Di und Do, muss vor\n07.00 Uhr im Labor sein",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 100,
        "Benötigtes Totvolumen \nin µl": 150,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Osmolarität im Harn",
        "Wohin": "ZL",
        "Schein": "H",
        "Röhrchen": "Harnröhrchen",
        "Bemerkungen": "Außerhalb Routinezeiten bitte Formular \"Zuweisung zur Messung der Osmolarität im Serum\/Harn außerhalb Routinezeiten\" verwenden.",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Harnanalysen"
    },
    {
        "Untersuchung": "Clamydien Abstrich\n",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Abstriche\n",
        "Bemerkungen": "Lagerung max. 1 Tag im Kühlschrank\nNur spezielle Abstirche verwenden, diese ggf. von Gyn anfordern (rote mit Bürste für Augen)",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Chyloflüssigkeit auf TG, GP, PT,\nLymphozyten\nZellzahl",
        "Wohin": "KiSpi",
        "Schein": "",
        "Röhrchen": "EDTA",
        "Bemerkungen": "In Spalte Bemerkungen ganz unten eintragen\nRöhrchen gut schwenken",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Gerinnungsstatus speziell: Prothrombin, Faktor V Leiden,\nMTHFR",
        "Wohin": "(ZL) G\/Gerinnung ZL Genanalyse Tel.: 58104",
        "Schein": "",
        "Röhrchen": "EDTA",
        "Bemerkungen": "Revers der Eltern nötig, siehe extra Zettel",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "200 µl",
        "Benötigtes Totvolumen \nin µl": "100 µl",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Hämoglobinvarianten",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "EDTA",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 146,
        "Benötigtes Totvolumen \nin µl": 270,
        "Gruppe": "Hämatologie"
    },
    {
        "Untersuchung": "Galaktose",
        "Wohin": "KiSpi",
        "Schein": "",
        "Röhrchen": "Eppendorf",
        "Bemerkungen": "1ml Perchlorsäure + 2 dazugeh. Röhrchen; vom Sat. Labor  (Tel.: 3880) holen.\nRö. bis zum schwarzen Strich\nfüllen = 0,2ml und in Lösung",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Glucose im Liquor",
        "Wohin": "ZL-CDK",
        "Schein": "",
        "Röhrchen": "Eprovette",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "CDK",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Liquoranalysen"
    },
    {
        "Untersuchung": "Blutzucker enzymatisch",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Bei Einzelabnahme im gelben Röhrchen",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 2,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Klinische Chemie"
    },
    {
        "Untersuchung": "Digoxin-Spiegel",
        "Wohin": "ZL",
        "Schein": "A, N, E",
        "Röhrchen": "Heparin-Plasma",
        "Bemerkungen": "Abnahme 12 Std. nach letzter Gabe, am Schein vermerken",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 6,
        "Benötigtes Totvolumen \nin µl": 100,
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Aspergillus Antigen",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Beta D Glucan",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "Oberflächenprotein von Pilzen",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Clamydien Igm\/IgG",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Clamydien Serologie",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Chlostridien Toxine",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Stuhlröhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Chlostridien Toxine",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Stuhlröhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Enterovirus",
        "Wohin": "MB",
        "Schein": "",
        "Röhrchen": "Stuhlröhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Elastase im Stuhl\n(Prankreaselastase)",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Stuhlröhrchen",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "1g",
        "Benötigtes Totvolumen \nin µl": "1,5g",
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Insulin Bestimmung",
        "Wohin": "ZL",
        "Schein": "A",
        "Röhrchen": "Heparin-Plasma?",
        "Bemerkungen": "Nüchtern! sofort verschicken\nNICHT nachts\/Wochenende",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 90,
        "Benötigtes Totvolumen \nin µl": 50,
        "Gruppe": "Sonderuntersuchungen"
    },
    {
        "Untersuchung": "Kuhmilch AK",
        "Wohin": "DE",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "Siehe nächste Seite!",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Luminalspiegel",
        "Wohin": "ZL",
        "Schein": "E",
        "Röhrchen": "Serum",
        "Bemerkungen": "Einzelbestimmung: Serum Mit anderen Parametern:\ngemeinsam im Heparin-Plasma",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": "Toxikologie"
    },
    {
        "Untersuchung": "Östirol im 24h Harn",
        "Wohin": "NUK",
        "Schein": "",
        "Röhrchen": "Harnsammelgefäß",
        "Bemerkungen": "Gesamtmenge angeben",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Leukozyten im Pleura- oder Pericardpunktat",
        "Wohin": "ZL",
        "Schein": "C",
        "Röhrchen": "Weiße Eprovette \nEDTA für Zellzählung",
        "Bemerkungen": "immer Punktat in weißer Eprovette sowie Punktat im EDTA Röhrchen (für Leuko Best.)\nFRISCH!\nCAVE: bei Anforderung kommen 3 Etikette heraus (siehe extra Zettel)",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": 200,
        "Benötigtes Totvolumen \nin µl": 160,
        "Gruppe": "Hämatologie"
    },
    {
        "Untersuchung": "Prä- und Perinataler Infektionsblock CMV, VZV, HbsAG,\nSyphilis, Röteln, Herpes, Parvo B19,\nToxoplamose",
        "Wohin": "(ZL) I\/Serologie unter Profile grün",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "CMV - AK",
        "Wohin": "",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "VZV - AK",
        "Wohin": "",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Treponema - Screening",
        "Wohin": "",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Röteln - AK",
        "Wohin": "",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Parvo B19",
        "Wohin": "",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "Toxoplasmose",
        "Wohin": "",
        "Schein": "",
        "Röhrchen": "",
        "Bemerkungen": "",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    },
    {
        "Untersuchung": "TORCH: (alt) siehe Neu: Prä- und Perinataler Infektionsblock",
        "Wohin": "(ZL) I\/Serologie",
        "Schein": "",
        "Röhrchen": "Serum",
        "Bemerkungen": "I Schein →\nPrä- und Perinataler Infektionsblock",
        "Mindestprobenmenge (Pipettiermenge) \nin µl": "",
        "Benötigtes Totvolumen \nin µl": "",
        "Gruppe": ""
    }
];

function searchAnalytes() {
    const searchTerm = document.getElementById('searchInput').value;
    if (!searchTerm) {
        alert("Bitte einen Suchbegriff eingeben.");
        return;
    }

    const filteredData = analytesData.filter(item => 
        item.Untersuchung.toLowerCase().includes(searchTerm.toLowerCase())
    );
	console.log("Gefilterte Daten:", filteredData);

    // Lösche bestehende Suchergebnisse
    const existingSearchTab = document.getElementById('Suchresultate');
    if (existingSearchTab) {
        existingSearchTab.remove();
    }

    // Füge einen neuen Tab für Suchergebnisse hinzu
    const tabContainer = document.querySelector('.tab');
    const tabContent = document.getElementById('tabContent');

    const searchTab = document.createElement('div');
    searchTab.id = 'Suchresultate';
    searchTab.className = 'tabcontent';

    filteredData.forEach(test => {
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = test.Untersuchung;
    checkbox.name = test.Untersuchung;
    checkbox.addEventListener('change', function() {
        updateSelectedAnalytes(test, this.checked);
        updateRoehrchenSelections();
    });

    let label = document.createElement('label');
    label.htmlFor = test.Untersuchung;
    label.textContent = test.Untersuchung;

    searchTab.appendChild(checkbox);
    searchTab.appendChild(label);
    searchTab.appendChild(document.createElement('br'));
});

    tabContent.appendChild(searchTab);

    // Erstelle oder aktualisiere den Button für die Suchergebnisse
    let searchTabButton = document.getElementById('searchTabButton');
    if (!searchTabButton) {
        searchTabButton = document.createElement('button');
        searchTabButton.id = 'searchTabButton';
        searchTabButton.className = 'tablinks'; // Falls Sie eine solche Klasse verwenden
        searchTabButton.addEventListener('click', function(event) {
            openTab(event, 'Suchresultate');
        });
        tabContainer.appendChild(searchTabButton);
    }

    // Setze den Text des Buttons auf "Suche: [Suchbegriff]"
    searchTabButton.textContent = 'Suche: ' + searchTerm;

    // Automatisches Öffnen des Suchresultate-Tabs
    openTab(null, 'Suchresultate');
}



function createTabsAndCheckboxes(analytesData) {
	console.log(analytesData)
    let groups = {};

    // Gruppiere Daten nach 'Gruppe'
    analytesData.forEach(item => {
        if (!groups[item.Gruppe]) {
            groups[item.Gruppe] = [];
        }
        groups[item.Gruppe].push(item);
    });

    // Erstelle Tabs
    const tabContainer = document.querySelector('.tab');
    const tabContent = document.getElementById('tabContent');
	
	//tabContainer.innerHTML = '';
    //tabContent.innerHTML = '';

    for (let group in groups) {
        let btn = document.createElement('button');
        btn.textContent = group;
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
                updateRoehrchenSelections();
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

        // Markiere Zeile rot, wenn das Röhrchen nicht Heparin, EDTA, Serum oder Harn enthält
        if (test.Wohin !== "ZL" || !["Heparin-Plasma", "EDTA-Plasma", "EDTA-Vollblut", "Serum", "Harn"].some(v => row.cells[3].textContent.includes(v))) {
            row.classList.add("not-calculable");
        }
    } else {
        let rowToRemove = document.getElementById('row-' + test.Untersuchung);
        if (rowToRemove) {
            tableBody.removeChild(rowToRemove);
        }
    }
}

function updateRoehrchenSelections() {
    const roehrchenContainer = document.getElementById('roehrchenContainer');
    roehrchenContainer.innerHTML = ''; // Vorherigen Inhalt löschen

    const selectedRows = document.querySelectorAll('#selectedAnalytesTable tbody tr');
    let roehrchenTypes = new Set();

    // Finde eindeutige Röhrchentypen aus den ausgewählten Zeilen
    selectedRows.forEach(row => {
        if (!row.classList.contains("not-calculable"))  {
        roehrchenTypes.add(row.cells[3].textContent); // Röhrchen ist bei Index 3
    }
        });

    roehrchenTypes.forEach(type => {
        let div = document.createElement('div');
        div.className = 'input-group mb-3';
		div.style = 'width: 500px;';
		div.id = 'volume-selection';
        div.innerHTML = `
            <label class="input-group-text" for="fillingVolume${type}">${type} Füllvolumen:</label>
            <select class="form-select" id="fillingVolume${type}">
				<option selected>Auswählen...</option>
                <option value="500">500</option>
                <option value="800">800</option>
                <option value="1200">1200</option>
            </select>
            <span class="input-group-text">μl</span>`;
        roehrchenContainer.appendChild(div);
    });
}

function calculateSampleVolume() {

    const hctValue = document.getElementById('hct').value;
    const selectedRows = document.querySelectorAll('#selectedAnalytesTable tbody tr');


    // Überprüfen, ob ein Hämatokrit-Wert eingegeben wurde
    if (hctValue === '' || isNaN(hctValue) || hctValue < 0 || hctValue > 100) {
        alert('Bitte einen gültigen Hämatokrit-Wert zwischen 0 und 100 eingeben.');
        return;
    }

    // Überprüfen, ob Analysen ausgewählt wurden
    if (selectedRows.length === 0) {
        alert('Bitte wählen Sie mindestens eine Analyse aus.');
        return;
    }

    // Lösche vorherige Ergebnisse
    const calculationResult = document.getElementById('calculationResult');
    calculationResult.innerHTML = '';

    let roehrchenTypes = new Set();

    // Finde eindeutige Röhrchentypen aus den ausgewählten Zeilen
    selectedRows.forEach(row => {
        if (!row.classList.contains("not-calculable"))  {
        roehrchenTypes.add(row.cells[3].textContent); // Röhrchen ist bei Index 3
       }
    });

    roehrchenTypes.forEach(type => {
        const fillingVolume = parseFloat(document.getElementById(`fillingVolume${type}`).value);
        let result = calculateForRoehrchenType(type, fillingVolume, selectedRows);

        let resultDiv = document.createElement('div');
        resultDiv.innerHTML = `<h4>${type}</h4>
                                <br>Benötiges Plasmavolumen: ${result.plasmaVolume.toFixed(2)} µl
                                <br>Davon Totvolumen: ${result.highestTotvolumen.toFixed(2)} µl
                                <br>Ergibt bei einem Hämatokrit von ${result.hctValue.toFixed(2)}% eine 
                               <h5>Benötigte Menge Vollblut: ${result.volume.toFixed(2)} µl</h5>`;
        if (result.warning) {
            resultDiv.innerHTML += `<p style="color: red;">ACHTUNG: Die benötigte Menge übersteigt die max. Füllmenge des Röhrchens.</p>`;
        }
        calculationResult.appendChild(resultDiv);
    });
}




function calculateForRoehrchenType(type, fillingVolume, rows) {

    let totalProbenmenge = 0;
    let highestTotvolumen = 0;
    let isUrineSample = false;

    console.log("Total1: " + totalProbenmenge);
    console.log("HighestTot1: " + highestTotvolumen);

    rows.forEach(row => {
        if (row.cells[3].textContent === type) {
            const probenmenge = parseFloat(row.cells[5].textContent) || 0;
            const totvolumen = parseFloat(row.cells[6].textContent) || 0;
            
            // Only update highestTotvolumen if current value is higher
            if (totvolumen > highestTotvolumen) {
                highestTotvolumen = totvolumen;  
            }

            totalProbenmenge += probenmenge;

            if (row.cells[3].textContent.toLowerCase().includes("harn")) {
                isUrineSample = true;
            }
        }
    });
    console.log("Total2: " + totalProbenmenge);
    console.log("HighestTot2: " + highestTotvolumen);
    console.log("Probhenvolumen2 calc: " + totalProbenmenge + " " + highestTotvolumen);

    let totalVolume;
    let plasmaVolume
    let hctValue;
    if (isUrineSample) {
        // Für Harnproben: Gesamtvolumen ist die Summe von Probenvolumen und höchstem Totvolumen
        totalVolume = totalProbenmenge + highestTotvolumen;
    } else {
        // Für Blutproben: Berücksichtige den Hämatokrit-Wert
        hctValue = parseFloat(document.getElementById('hct').value);
        const hctFraction = hctValue / 100;
        plasmaVolume = totalProbenmenge + highestTotvolumen;
        totalVolume = plasmaVolume / (1 - hctFraction);
        console.log("HCT: " + hctValue);
        console.log("HCTFRACT: " + hctFraction);
        console.log("Plasmavol " + plasmaVolume)
        console.log("Total " + totalVolume);
    }

    let warning = totalVolume > fillingVolume;
    console.log("Total3: " + totalProbenmenge);
    console.log("HighestTot3: " + highestTotvolumen);
    console.log("Probhenvolumen3 calc: " + (totalProbenmenge + highestTotvolumen));
    console.log("Total " + totalVolume);

    return { volume: totalVolume,
            hctValue: hctValue, 
            highestTotvolumen: highestTotvolumen, 
            plasmaVolume: plasmaVolume,  
            warning: warning, 
            noCalculation: false };
    
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

// dies garantiert, dass die Funktion geladen wird, da es vorkommen kann, dass die DOM zu spät geladen wird.
document.addEventListener('DOMContentLoaded', function() {
    createTabsAndCheckboxes(analytesData);
});