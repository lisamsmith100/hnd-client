#curl --include --request GET https://hnd-api.herokuapp.com/1
#!/bin/bash
#TOKEN=BAhJIiU2NzdjM2E4MmExNTgwMThlNDM4ZjlmNDc2NjhmZTNjMwY6BkVG--28254e556274f03845295dd66d24e92c53a4e4dc ID=2 sh scripts/get-entry.sh
API="${API_ORIGIN:-https://hnd-api.herokuapp.com}"
URL_PATH="/entries/:id"
curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN"

echo

# curl --include --request GET http://localhost:4741/entries/2 \


#   --header "Content-Type: application/json" \
#   --data '{
# 	"entry": {
# 		"author": "UPDATE"
# 	}
# }'
