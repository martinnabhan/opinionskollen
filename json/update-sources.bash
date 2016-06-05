#!/bin/bash

echo "Updating sources..."
echo

if curl -svX POST http://api.scb.se/OV0104/v1/doris/sv/ssd/START/ME/ME0201/ME0201A/Vid10 -d @data-request.json \
   --header "Content-Type: application/json" | grep "200" > data.json; then
  echo
  echo "Successfully updated data.json"
  echo
else
  echo
  echo "Failed to update sources!"
  echo
fi;