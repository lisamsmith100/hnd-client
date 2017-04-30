#!/bin/bash
#ID=1 TOKEN=BAhJIiUyMjAwZTk1M2E3YTFmYzVjMGU1YzQ3ZGIwNThhYWJlMAY6BkVG--83578e1a7c5c9adef8acda0ebeb5b65c5c99e14a sh scripts/sign-out.sh
#ID=2 TOKEN=BAhJIiVhNDA5MTk0YmM0ZDUzZDNiMTg0ZGVhZDk2ODUxZTBiYgY6BkVG--7da6508a8a718a936a61d33eead80e1e27f45f32 sh scripts/sign-out.sh
#ID=3 TOKEN=BAhJIiU3YjFiYTE0MThiM2ZkNzY5YWY5YTFmMjA3YWVkMTY1MAY6BkVG--a601907f63d708722f3ee7b0eef657c1e1355b09 sh scripts/sign-out.sh
#ID=4 TOKEN=BAhJIiU4MzBhZGRhMjhkZmNiMjRkYzIxOWFkYmQxOTY0ZDA1NAY6BkVG--db15346abfd71350ee277404075ca879f515ae22 sh scripts/sign-out.sh

API="${API_ORIGIN:-https://hnd-api.herokuapp.com}"
URL_PATH="/sign-out"
curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN"

echo
