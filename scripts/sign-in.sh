#!/bin/bash
#EMAIL=firstuser@example.email PASSWORD=passy sh scripts/sign-in.sh
#EMAIL=seconduser@example.email PASSWORD=passy sh scripts/sign-in.sh
#EMAIL=thirduser@example.email PASSWORD=passy sh scripts/sign-in.sh
#EMAIL=fourthuser@example.email PASSWORD=passy sh scripts/sign-in.sh

API="${API_ORIGIN:-https://hnd-api.herokuapp.com}"
URL_PATH="/sign-in"
curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
