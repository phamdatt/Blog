#!/bin/bash


set -e

G_BRANCH=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

echo 'precommit hook running...'
echo "on branch $G_BRANCH"

# we only care to keep dev clean
if [ $G_BRANCH == 'develop' ]; then
  yarn test:coverage &&\
  npm run jestCoverageRatchet
else
  exit 0
fi