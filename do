#!/usr/bin/env bash

set -e

display_help() {
  echo "Usage: $0 <command>"
  echo
  echo "Commands:"
  echo "  test     Run unit tests inside a Docker container"
  echo "  help     Display this help message"
  echo
  echo "Examples:"
  echo "  $0 test"
  echo "  $0 help"
}

case $1 in
  test)
    docker-compose run --rm app npm test
    ;;
  help)
    display_help
    ;;
  *)
    if [ -z "$1" ]; then
      echo "No command specified"
    else
      echo "Invalid command"
    fi
    display_help
    exit 1
    ;;
esac
