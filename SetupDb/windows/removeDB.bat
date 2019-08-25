#!/bin/bash

dropdb 'cars'
psql -c '\du'