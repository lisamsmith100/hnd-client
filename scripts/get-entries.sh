#curl --include --request GET https://hnd-api.herokuapp.com/entries
#!/bin/bash
#TOKEN=BAhJIiU2NzdjM2E4MmExNTgwMThlNDM4ZjlmNDc2NjhmZTNjMwY6BkVG--28254e556274f03845295dd66d24e92c53a4e4dc sh scripts/get-entries.sh
#curl --include --request GET http://localhost:4741/entries

API="${API_ORIGIN:-https://hnd-api.herokuapp.com}"
URL_PATH="/entries"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo
