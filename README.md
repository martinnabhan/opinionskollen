# Opinionskollen

Opinionskollen is a webapp presentening the results from the bi-annual political polls made by SCB.
It is written using the JavaScript framework Mithril.js and is populated with data by running the
`update-sources.bash` script, which pulls the latest data from SCB's public API.

Opinionskollen has three pages:

The main route `/` titled "Alla riksdagspartier" shows the results for each party and lets the user
select any period available in the data receieved from SCB's API.

The second route `/partier` titled "Enskilda riksdagspartier" allows the user to select a specific
party and then be shown every poll result available for that specific party.

The third route `/jamfor` titled "Jämför perioder" lets the user selected two time periods and compare
the poll results for each party between these two periods.