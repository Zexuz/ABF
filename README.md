# ABF

## INFO

Vi ska bygga en webbapp som ska använde Arbetsförmedlingens REST api.
  
### Planering
  Vi behöver antagligen mjukvarudesigna lite enligt Martins krav innan någon kod kan börja skrivas.

### API INFO
[ABF API dokumentation](http://www.arbetsformedlingen.se/download/18.362b127c14924e08e87137a/1456135311017/tekniskbeskr_ledigajobb.pdf)
Det finns för tillfället två steg.

Steg 1
[http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord=<MATCHNINGS-ORD>](http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord=<MATCHNINGS-ORD>)

Detta returnerar detta som tex.

    {
       "matchningslista": {
           "antal_platsannonser": 13567,
           "antal_platsannonser_exakta": 0,
           "antal_platsannonser_narliggande": 0,
           "antal_platserTotal": 20,
           "antal_sidor": 679,
           "matchningdata": [
               {
                   "annonsid": "6653688",
                   "annonsrubrik": "Projektledare inom produktutveckling till Svensk Byggtjänst!",
                   "yrkesbenamning": "Projektledare, bygg och anläggning",
                   "arbetsplatsnamn": "Placera Personal AB",
                   "kommunnamn": "Stockholm",
                   "kommunkod": 180,
                   "publiceraddatum": "2016-04-19T16:14:00+02:00",
                   "annonsurl": "http://www.arbetsformedlingen.se/ledigajobb?id=6653688",
                   "relevans": 100,
                   "antalplatser": "1",
                   "antalPlatserVisa": 1,
                   "varaktighetId": 1
               },
               {...},
               {...}
           ]
       }
    }

 Steg 2 är
 
[http://api.arbetsformedlingen.se/af/v0/platsannonser/<ANNONSID>](http://api.arbetsformedlingen.se/af/v0/platsannonser/<ANNONSID>)

Detta returnerar detta som tex.

    {
      "platsannons": {
        "annons": {
          "annonsid": "6624713",
          "platsannonsUrl": "http://www.arbetsformedlingen.se/ledigajobb?id=6624713",
          "annonsrubrik": "Erfaren Projektledare",
          "annonstext": "Peab är Nordens Samhällsbyggare med 13.000 anställda och en omsättning överstigande 44 miljarder kronor. Koncernen har strategiskt placerade kontor i Sverige, Norge och Finland. Huvudkontoret är beläget i Förslöv på Bjärehalvön i Skåne. Aktien är börsnoterad vid NASDAQ Stockholm.\n\r\n\r\nPeab PGS AB är ett dotterbolag inom Peab-koncernen som har ansvaret för att förvalta och vidareutveckla ett byggsystem för flerbostadshus med industrialisering som grund. Inom bolaget finns funktioner för Marknad, Supply Chain och Slutmontering. Bolaget har sitt huvudkontor i Valhall Park Ängelholm. Vi söker medarbetare som vill arbeta i byggbranschen, fast på ett annorlunda sätt.\n\nJust nu söker vi en projektledare som vill ta ansvar för och driva flera montageplatser parallellt. Som projektledare leder du även projektering som Bas P. Du har ett tidsmässigt och ekonomiskt ansvar. Du skall vara operativ tillsammans med våra montageledare vid uppförandet och färdigställandet av våra projekt och det innebär samarbete med både beställare, intern personal och underentreprenörer.\n\nPå våra byggarbetsplatser värderar vi arbetsmiljö och kvalitet högt och det innebär att du som projektledare tillsammans med montageledaren för laget ständigt strävar efter att få alla att göra \"rätt från början\" och att ständigt bli bättre. Är det en bra arbetsmiljö som intresserar dig?\n\nVi söker dig med relevant utbildningsnivå inom byggbranschen eller motsvarande gymnasie- eller högskolenivå. Erfarenhetsmässigt krävs att du arbetat minst 2-3 år som projektledare, platschef eller entreprenadingenjör vid bostadsprojekt eller motsvarande. Du rapporterar till vår Projektchef.\n\nSom person är du kommunikativ och strukturerad. Du har hög integritet och naturlig god förmåga att samarbeta med människor på ett positivt och konstruktivt sätt. Du är drivande utan att tappa förmågan att vara lyhörd och har fallenhet att se helheten. Självklart har du ett äkta intresse av människor och är duktig på att bygga förtroende. \n\nTjänsten är placerad i Ängelholm men resor inom vår region kommer förekomma, vilket innebär ett antal resdagar per år.\n\nIntervjuer sker löpande och tjänsten kan komma att tillsättas innan sista ansökningsdag. \n\n\nI Peab blir du delaktig i det spännande arbetet att bygga framtidens hållbara samhälle. Vi engagerar oss i sociala frågor och i frågor som rör miljön för de människor som nu och i framtiden påverkas av det vi bygger och anlägger. Det är viktigt för oss att du delar våra kärnvärden jordnära, utvecklande, personliga och pålitliga eftersom de är grundläggande för det vi gör. Hos oss finns stora möjligheter till personlig utveckling.\n\n \n\nVill du bygga ett hållbart samhälle med oss?\n\n \n\nVälkommen med din ansökan!",
          "yrkesbenamning": "Civilingenjör, bygg",
          "yrkesid": 6508,
          "publiceraddatum": "2016-03-30T14:40:19.313+02:00",
          "antal_platser": "1",
          "kommunnamn": "Ängelholm",
          "kommunkod": 1292,
          "antalplatserVisa": 1
        },
        "villkor": {
          "varaktighet": "Tillsvidare",
          "arbetstid": "Heltid",
          "arbetstidvaraktighet": "Heltid/Tillsvidare\r\nTillsvidare",
          "lonetyp": "Fast månads- vecko- eller timlön",
          "loneform": " Enligt överenskommelse"
        },
        "ansokan": {
          "referens": "",
          "webbplats": "https://peab.easycruit.com/vacancy/application/1610193/15479?channel=amv&iso=se",
          "sista_ansokningsdag": "2016-05-01T00:00:00+02:00",
          "ovrigt_om_ansokan": ""
        },
        "arbetsplats": {
          "arbetsplatsnamn": "Peab PGS",
          "postnummer": "26224",
          "postadress": "Box 1282",
          "postort": "Ängelholm",
          "postland": "Sverige",
          "land": "Sverige",
          "besoksadress": "Valhall Park, byggnad 248",
          "logotypurl": "http://api.arbetsformedlingen.se/platsannons/6624713/logotyp",
          "hemsida": "http://peab.se",
          "kontaktpersonlista": {
            "kontaktpersondata": [
              {
                "namn": "Jonas Henriksson, Projektchef",
                "telefonnummer": "0733 37 64 92"
              }
            ]
          }
        },
        "krav": {
          "egenbil": false
        }
      }
    }