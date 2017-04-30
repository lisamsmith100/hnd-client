# curl --include --request GET https://hnd-api.herokuapp.com/1
#EMAIL=firstuser@example.email PASSWORD=passy PASSWORD_CONFIRMATION=passy sh scripts/sign-up.sh
#EMAIL=seconduser@example.email PASSWORD=passy PASSWORD_CONFIRMATION=passy sh scripts/sign-up.sh
#EMAIL=thirduser@example.email PASSWORD=passy PASSWORD_CONFIRMATION=passy sh scripts/sign-up.sh
#EMAIL=fourthuser@example.email PASSWORD=passy PASSWORD_CONFIRMATION=passy sh scripts/sign-up.sh

API="${API_ORIGIN:-https://hnd-api.herokuapp.com}"
URL_PATH="/sign-up"
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
