#!/bin/bash

#this script generates the static site then pushes it to the developer's repo
#This script must be in the punch root directory for the site

#static directory name
StaticDir=site

# if site directory doesn't exist generate

if [ ! -d "$StaticDir" ]; then
    punch g
    echo "$StaticDir created ////////////////////////"
fi

# move into $StaticDir
cd $StaticDir
pwd
if [ $? != 0 ]; then
    echo "static directory doesn't appear to exist"
    exit
fi

# if git repo does not exits create it
if [ ! -d ".git" ]; then
    git init
fi

# set git remote
git remote add origin git@github.com:tjpatte/tommyjohn.git
echo "dev repot added ////////////////////////"

# create and switch to static branch
git branch static
git checkout static

# git pull origin static
git pull origin static
echo "pulled down origin static ////////////////////////"

# back out and generate site

cd ..
pwd

punch g
echo "generated new files ////////////////////////"

# jump back into $StaticDir

cd $StaticDir
pwd

# git add all
git add -A

# git commit
echo -n "Commit Message: "

read Message

git commit -m "$Message - $(date '+%m-%d-%Y %T')"

# test for push changes
git remote -v
git status
echo "Commit message: $Message - $(date '+%m-%d-%Y %T')"
echo -n "everything look okay? Shall I push? [Y/n]"

read push

if [ $push == 'Y' ]; then
	git push origin static
else
	echo -n "Aborting..."
	exit
fi
