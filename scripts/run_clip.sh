#!/bin/bash
CASES=(0003)
CONDITION=SR
for CASE in "${CASES[@]}"; do
  echo "Conevrting case ${CASE} , condiiton ${CONDITION}"
  python landmark_left_atrium.py --case $CASE --condition $CONDITION
done
