#!/bin/bash

## clear caching
yarn clear:cache

## running test before commit
yarn test --coverage
