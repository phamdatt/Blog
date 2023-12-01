#!bash/bin

## clear caching
yarn clear:cache

## running test before commit
yarn test --coverage --watchAll=true || exit 0
