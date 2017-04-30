#!/bin/bash
#ID=1 OLDPW=passy NEWPW=newpassy TOKEN=BAhJIiU4NmQwZjZlMGRmZTk3Zjg3NWU2Mjk2YmJhY2Q2M2QyYgY6BkVG--c39c927081077516e99b1240b45e9a81eacf9392 sh scripts/change-password.sh

API="${API_ORIGIN:-https://hnd-api.herokuapp.com}"
URL_PATH="/change-password"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo
