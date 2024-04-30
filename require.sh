#!/usr/bin/env bash

######################################################################
# @author      : Linus Fernandes (linusfernandes at gmail dot com)
# @file        : require
# @created     : Tuesday Apr 30, 2024 13:15:15 IST
#
# @description :
######################################################################
require() {
  hash "$@" || exit
}
