# Abschlussarbeit_CAS

## Daten-Projekt «Booking.com»

**von Denise Jeitziner, 28. Februar 2019**

### Die Ausgangslage:

Klischees über andere Länder gibt es beim Reisen und auch sonst viele: Die Thailänder sind am gastfreundlichsten, die Japaner am saubersten, die Österreicher haben das beste Preis-/Leistungsverhältnis und so weiter. Und die Schweizer Hotelerie? In keiner Kategorie vorne mit dabei, höchstens bei den Preisen. Stimmt das wirklich?

### Die These / der Plan:

Booking.com ist die ideale Plattform, um derartige Klischees zu überprüfen. Sie ist ziemlich umfassend, die Reisenden sind heterogen und aus aller Welt. Zwar wird sie nicht ganz frei von Manipulationen und gefälschten Beurteilungen sein, aber die grosse Masse der Beurteilungen dürfte verlässlich sein. Der Plan ist also ein Faktencheck: Alle auf Booking.com gelisteten Hotels aller Länder auf die Bewertungen hin analysieren. Die Ergebnisse zeigen, wie verlässlich diese Klischees sind. Im zweiten Notebook setze ich einen Fokus allein auf Schweizer Hotels.

### Die Knackpunkte:

- Es gibt **keinen bestehenden Datensatz**. Es gibt auch keine Liste aller Hotels/Links, die auf Booking.com gelistet sind. Die Medienstelle von Booking.com bleibt trotz mehrerer Anfragen stumm.

- Ich musste also die Daten selber beschaffen. Weil **Booking.com** im Verlauf der Wochen, in denen ich mit dem Projekt beschäftigt war, immer mal wieder die Seite leicht geändert und auch **diverse Hürden eingebaut** hat, z.B. in Form von plötzlich erscheinenden Pop-ups, die das Scraping erschweren, habe ich die Abfrage zur Sicherheit (und auch aus Stabilitätsgründen) in verschiedene Schritte aufgeteilt: 1. Linkliste aller Länder erstellen. 2. Liste mit Direktlinks zu allen Unterkünften pro Land erstellen. 3. Direktlinks aller Hotels abfragen. Weitere Details zum Ablauf sind direkt in den Notebooks vermerkt.

– **Pro Land werden jeweils nur maximal 1000 Unterkünfte angezeigt**. Das heisst, es sich nicht alle Hotels aller Länder abrufbar, was das Ergebnis verfälschen kann (besonders bei der Frage nach dem besten/schlechtesten Hotel der Welt). Nach welchem Algorithmus die 1000 Hotels angezeigt werden, weiss ich leider nicht. Booking.com gab auch zu dieser Frage keine Auskunft. Ich habe probehalber mehrfach die Hotels in Österreich abgefragt und plus-minus dieselben Suchresultate erhalten.

– Um ein etwas ausgeglicheneres Ergebnis zu erhalten (also keine Birnen mit Äpfeln vergleichen, bzw. ein Tipi mit einem Bed&Breakfast oder einem Chalet), **konzentriere ich mich beim Scracpen ausschliesslich auf die Hotels**.

– eine Abfrage der Preise wäre für dieses Projekt zu aufwändig gewesen, da der Vergleich schwierig ist. Die Ergebnisse liefern einen Mix aus Angeboten vom Doppelzimmer bis zum Masssenschlag, manche Unterkünfte haben Sonderangebote, manche eine Mindestaufenthaltdauer, manche sind am Wochenende günstiger, andere werktags. Deswegen habe ich auf diesen Punkt verzichtet.

– Erst bei der Abfrage der Kantone (siehe zweites Notebook) habe ich festgestellt, dass die Abfrage im Detail nicht ganz sauber läuft. Ich habe das Schweiz-Notebook mehrmals durchlaufen lassen (was beim Alle-Länder-dieser-Welt aus Zeitgründen nicht mehr möglich war) und dabei festgestellt, dass vereinzelte Hotels mal in den Resulaten auftauchen, mal nicht. Das könnte unter anderem an der Verfügbarkeit des Hotels am jeweiligen Tag liegen. Ich habe daher jeweils versucht, die Hotels in einer Blanko-Abfrage zu scrapen, also ohne Datum. Das ist am einfachsten möglich, indem der Cache geleert wird. Eine zweite Problematik ist, dass via driver.page_source nicht immer haargenau dieselben Hotels in der BeautifulSoup abgefragt werden wie via get.requests.

– All das hat dazu geführt, dass ich für die Datenbeschaffung viel Zeit aufwenden musste (das Scrapen der Hoteldetails allein hat rund 40 Stunden gedaurt). So blieb am Ende für die Analyse und vor allem die Visualisierung (nur im nächsten Notebook mit Fokus auf Schweizer Kantone) leider kaum mehr Zeit übrig. Hier will ich noch investieren, bevor der Artikel gedruckt wird.

### Einschätzung Aufwand/Ertrag – journalistische Relevanz:

- Da sich meine Skills in Grenzen halten und ich alleine schon für das Scrapen und Bereinigen viel Zeit benötige, wird sich der Aufwand im Verhältnis zum Ertrag für jemanden wie mich nicht lohnen, zumal das Ergebnis nicht zwingend für den Fortbestand der Demokratie ist, sondern nice to have.

- Aber: Klischees, Reisen, Best/Worst Hotels, etc. sind definitiv ein Schnurrithema. Deswegen lohnt sich die Auswertung allemal, auch wenn es sich bei meiner ersten Analyse vorerst um so genannte low hanging fruits handelt. Es stecken jedoch gleich mehrere Geschichten im Datensatz drin, die man noch verfolgen könnte (siehe auch Kommentare in den beiden Notebooks).

- Weiteres Plus: Die Hoteldaten (insbesonderen Koordinaten) können für weitere künftige Auswertungen genutzt und mit anderen Abfragen kombiniert werden, etwa bei einer Story über Hotels in der Lawinen-, Hochwasserzone, etc.

### Das journalistische Ziel – Artikel in der «SonntagsZeitung»:

Die ersten Ergebnisse der Analyse sollen im Frühling in der SonntagsZeitung auf einer «Pano»-Doppelseite erscheinen, sobald es auf die Ferienplanung der Leser zugeht. **Arbeitstitel: «Internets Next Tophotel». Lead: Wollen Sie wissen, welche Länder die saubersten, freundlichsten und komfortabelsten Hotels haben? Sie werden überrascht sein**. 

Es handelt sich dabei um eine Doppelseite mit verschiedenen visuellen Elementen/kleinen Häppli-Geschichten (jeweils in den Notebooks kurz erwähnt). Hier eine Übersicht:

- Kurzer Lauftext mit den wichtigsten Fragen: Worin liegt der Erfolg für eine hohe Bewertung? Woran krankts pro Land am meisten? Was gibt den Ausschlag für gute/schlechte Noten? Ist es die Infrastruktur, das Preis-Leistungsverhältnis, die Lage oder doch eher die Freundlichkeit des Personals? Wo haben die Schweizer am meisten Nachholbedarf? 
- ein Kurz-Interview mit einem Sozial- oder Wirtschaftspsychologen über die (oft zu hohe) Bewertung von Ferienerlebnissen (Justification Effort, siehe weiter unten), die Beeinflussung von Noten, zu hohe Erwartungen, die immer grösser werdende Kluft von guten Hotels/schlechten Hotels, die vermutlich zu einem Aussterben jener führt, die notenmässig nicht vorne dabei sind.
- Service: Wohin soll man diesen Sommer reisen, wenn man: die beste Lage, das freundlichste Personal, die saubersten Zimmer oder das komfortabelste Interieur haben möchte?
- Fokus Schweiz: Welche Kantone sind top, welche flop? Was machen die Vorbilder richtig (Quotes aus Tourismus/Hotelerie). Was wird unternommen, um die Mängel zu beheben? Oder verlässt man sich auf das gute Image der Schweiz als Paradies?
- Zahlenreihe à la «Unnützes Wissen» mit Erkenntnissen aus der Booking-Analyse. 
- Die Überraschungssieger: Griechenland und Liechtenstein (bzw. Appenzell Innerrhoden in der Schweiz)
- Box über das schlechteste Hotel der Welt/Schweiz. Warum ist das so schlecht? Was steht in den Kommentaren? Was sagen die Betreiber?
- Rangliste/Grafik der Länder/Kantone mit den jeweiligen Durchschnittsnoten (im Fokus die Gesamtnote, die Sauberkeit, das Hotelpersonal(Freundlichkeit) und Preis/Leistung.

**Künftige Abfragen**, z.B. in einem Jahr: Wie sieht die Situation in einem Jahr aus? Was ist mit dem schlechtesten/besten Hotel passiert? Existieren die noch? Hat sich in Bezug auf die Anzahl Hotels etwas verändert? In Bezug auf die Verteilung der Unterkunftstypen? Ist in einem Land ein Tourismusboom ausgebrochen oder ist er der Tourismus eingebrochen? Haben die Kantone, die im Schweiz-Vergleich schlecht abgeschnitten haben (siehe nächstes Notebook), Massnahmen ergriffen?

**Weitere Fragen/Story-Ideen sind direkt im jeweiligen Notebook bei der Analyse vermerkt.**

**ACHTUNG:
Die jeweiligen Kommentare/Analysen in den beiden Notebooks beziehen sich auf meinen letzten Durchlauf Ende Februar. Es kann also sein, dass die Details im Moment, in dem ihr das Notebook durchlaufen lasst, anders sind. Die Backups finden sich im Ordner «Datensatz»**
