#!/bin/bash

YEAR=$1
DAY=$2

NODE_OPTIONS=--experimental-vm-modules jest --passWithNoTests --watch ./src/${YEAR}/${DAY}/code.spec.js
