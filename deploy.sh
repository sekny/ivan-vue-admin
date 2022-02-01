#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://sekny.github.io
# git push -f git@github.com:sekny/sekny.github.io.git main

# if you are deploying to https://sekny.github.io/ivan-vue-admin
# git push -f git@github.com:sekny/ivan-vue-admin.git main:gh-pages

cd -