#!/usr/bin/env bash

######################################################################
# @author      : Linus Fernandes (linusfernandes at gmail dot com)
# @file        : errorhandlers
# @created     : Tuesday Apr 30, 2024 13:18:47 IST
#
# @description :
######################################################################
# shellcheck disable=SC2317
# Don't warn about unreachable commands in this function
RED="\e[31m"
GREEN="\e[32m"
ENDCOLOR="\e[0m"

handle_error() {
  # Get information about the error
  local error_code=$?
  local error_command="$BASH_COMMAND"
  # Log the error details
  echo
  echo -e "${RED}An error occurred at ${error_command} (exit code: ${error_code})${ENDCOLOR}"
  exit "$error_code"
}

info() {
  echo -e "${GREEN}${1}${ENDCOLOR}"
}
# shellcheck disable=SC2317
# Don't warn about unreachable commands in this function
ctrl_c() {
  # Get information about the error
  local error_code=$?
  local error_command="$BASH_COMMAND"
  echo
  echo -e "${RED}Script interrupted at ${error_command} (exit code: ${error_code})${ENDCOLOR}"
  exit 1
}

set -e
set -o pipefail
set -u
trap -- "handle_error" ERR
trap -- "ctrl_c" INT
