#!/bin/bash

echo "Updating sources..."

curl -svX POST http://api.scb.se/OV0104/v1/doris/sv/ssd/START/ME/ME0201/ME0201A/Vid10 -d @data-request.json \
--header "Content-Type: application/json" > data.json