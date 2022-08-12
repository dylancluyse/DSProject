# Project Big Data en AI.

## Groepsleden

Dit project werd gemaakt door vijf studenten: Maarten Eylenbosch, Dylan Cluyse, Laura Renders, Szymon Vertenten en Joran Van Belle.

## Doel

De probleemstelling van dit project was het gebrek aan web-applicaties waar gebruikers toegang hebben tot gegevens van ~88.000 KMO's. De info van deze KMO's moesten wij zelf terugvinden met behulp van informatie die wij online konden terugvinden.

## Oplossing
Deze web-applicatie omvatte een zoekmachine die gebruikers konden inzetten om zo allerhande gegevens - waaronder verhouding tussen mannelijke en vrouwelijke werknemers, betrekking tot duurzaamheid, etc - konden raadplegen. Deze info was niet gekend voor ons, dus wij moesten hiervoor gegevens van het internet gaan halen. Om een omslachtig werk te gaan automatiseren hebben wij gebruik gemaakt van een webscrapingtool die alle gekregen sites ging doorzoeken op informatie. Daarnaast hebben wij ook alle jaarverslagen, die publiek beschikbaar staan op de site van de Nationale Bank van België, doorzocht met behulp van een script. Voor deze twee scripts hebben wij gebruik gemaakt van de toegankelijke Python-programmeertaal.
Alle gegevens moesten opgeslaan worden in een SQL-databank. Hiervoor kregen wij van de Hogeschool Gent toegang tot een Almalinux server waarop wij de SQL-server hebben geïnstalleerd. Met behulp van MySQL en SQL queries konden wij de gegevens van de twee Python-scripts gaan plaatsen in de databank.

## Persoonlijke bijdrage
Ik stond voornamelijk in voor het verzamelen van de data via de twee Python-scripts. Daarnaast hielp ik bij alle resterende taken zoals het opzetten van de databank, alsook bij het opzetten van de zoekmachine.

## Positieve punten
Werken met BeautifulSoup, Requests en Selenium was volledig nieuw voor mij. Deze libraries heb ik op korte tijd kunnen aanleren met behulp van verschillende tutorials en via de online documentatie. Ik had geen schrik om iets volledig nieuws op mij te nemen.
We hebben voldoende documentatie bijgehouden over de Python-scripts.

## Werkpunten
Het project kon beter gedelegeerd en ingepland worden. Er was een zichtbaar verschil qua workload tussen de vijf groepsleden. Het opbreken van de taken bij de niet-Python gerelateerde onderdelen kon kleinschaliger gedaan worden. Deze processen duurde wat langer en daarom bleef een deel van de groep te lang wachten op een volgend onderdeel. Planningssoftware had hier zeker ook een waardevolle bijdrage kunnen leveren.
Het bijhouden van documentatie voor de zoekmachine en de SQL-server ontbrak tijdens het proces en werd pas achteraf toegevoegd. Op deze manier zijn wij informatie en kennis verloren geraakt dat eventueel een bijdrage kan leveren aan de ontwikkelaars die verderwerken aan dit project.


# De zoekmachine uittesten.

## Start the local server
To run the search engine, you need to start the server.py-file.

## Visit the search engine
After you started the server, you can surf to localhost:5000, where you can see our search engine