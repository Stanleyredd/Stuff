#!/bin/bash
echo "current user on shell is: "
echo "$USER"

echo "list all users"

psql -c '\du'


echo 'create superuser named postgres'
psql -c `CREATE USER $USER SUPERUSER;`

echo 'grant postgres create DB'
psql -c 'ALTER USER postgres CREATEDB;'

echo 'grant postgres Create Role'
psql -c 'ALTER USER postgres CREATEROLE;'

echo 'grant postgres Replication'
psql -c 'ALTER USER postgres REPLICATION;'

echo 'grant postgres Bypass RLS'
psql -c 'ALTER USER postgres BYPASSRLS;'

echo 'create database named postgres'
psql -c 'CREATE DATABASE postgres WITH OWNER postgres;'



echo 'list all users'
psql -c '\du'

echo 'list all db'
psql -c '\l'


