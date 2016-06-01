# Gusty

A NodeJS wrapper for the Breezometer API for Real Time Data

### API key
The library looks for your API credentials in the file 'key.JSON', which is expected to have the format

`{ "key": "XXX"}`

It should be located in the `/lib` directory.

### Location
The location is currently hard-coded in index.js as a JSON object, but could easily be taken out as a separate JSON object and read in like the key
`var loc = {	'lat' : '40.7324296',	'lon' : '-73.9977264'};`
