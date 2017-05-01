# #!/bin/bash
# #TOKEN=BAhJIiU0ZDYwNTdmZDk4YjYyZDk1N2Y4MDY2NzgxMGY5MDM5ZAY6BkVG--5f3887a320814e1c5e0a248e8109e161fa022038 TITLE="first entry for user id 1 in production" sh scripts/create-entry.sh
# #TOKEN=BAhJIiU2NzdjM2E4MmExNTgwMThlNDM4ZjlmNDc2NjhmZTNjMwY6BkVG--28254e556274f03845295dd66d24e92c53a4e4dc TITLE="first entry for user id 1 in production" BACKSTORY="Backstory is that this is a class project deuce" STOPPER="update isn't working still" STATUS="open" sh scripts/create-entry.sh
# API="${API_ORIGIN:-https://hnd-api.herokuapp.com}"
# URL_PATH="/entries"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   --  console.log('addEntry is a success')$TOKEN" \
#   --data '{
#     "entry": {
#       "title": "'"${TITLE}"'"
#       "backstory": "'"${BACKSTORY}"'",
#       "stopper": "'"${STOPPER}"'",
#       "status": "'"${STATUS}"'",
#       "date_added": "'"${DATE_ADDED}"'",
#       "deleted_flag": "'"${DELETED_FLAG}"'"
#     }
#   }'
#
# echo
#
# # curl --include --request POST https://hnd-api.herokuapp.com/entries \
# #   --header "Content-Type: application/json" \
# #    --header "Content-Type: application/json" \
# #   --data '{
# #     "entry": {
# #       "title": "Become scuba certified",
# #       "backstory": "I love to be underwater, requires study, practice, testing, challenging",
# #       "stopper": "can't breathe underwater, fear of unnatural surroundings, fear of not understanding equipment to notice issues with equipment",
# #       "status": "achieved"
# #     }
# #   }'
#
# #TOKEN="BAhJIiVmYTBlMzI1ZWQ3MjhlOTE1NjQ0YzkyYThhNWE1MmI3YQY6BkVG--5573357fa4f7eeb606e36407f96407a859298bfc" TITLE="Scuba Certification" BACKSTORY="Love being underwater, sh scripts/create-entry.sh
#  # token BAhJIiViNTBlNTdjYTMxMmUwN2E4MDY0ZTVmOGRhZGUzNjZkMgY6BkVG--8ddb8d641de65c51d7c8186d7aa93f5be976d8fa
https://hnd-api.herokuapp.com/entries
 curl --include --request POST http://localhost:4741/entries \
   --header "Content-Type: application/json" \
   --header "Authorization: Token token=BAhJIiVkMGJlMjkyOGE1YTI3MTgzMzMwOWQyMjRiMDMzZWUwZAY6BkVG--cd76506cad9fb7326bc127ee307ce8234e4a3781" \
   --data '{
     "entry": {
       "title": "scuba cert",
       "backstory": "i like water",
       "stopper": "cant b reather underwater naturally",
       "status": "achieved",
       "date_added": "2015-05-95",
       "deleted_flag": "false"
     }
   }'
