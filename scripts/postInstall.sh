#!/bin/bash
echo "Post Install Script";
grep -c 'lint-staged' .husky/pre-commit ;
isHusky=$(npm list -g | grep -c husky);
if [  $isHusky -eq 1 ];
then
  echo "Husky already installed with global Scope";
else
  echo "Installing Husky  with global Scope";
  npm install -g husky;
fi;

preCommitConfigured=$(grep -c 'lint-staged' .husky/pre-commit);
if [  $preCommitConfigured -eq 0 ];
then
    echo "Configuring Husky Hooks...";
    npx husky-init;
    npm install;
    husky add .husky/pre-commit "npx lint-staged";

else
  echo "Husky pre-commits already configured";
fi


  echo "JSON Server";
  isHusky=$(npm list -g | grep -c json-server);
  if [  $isHusky -eq 1 ];
  then
    echo "JSON Server already installed with global Scope";
  else
    echo "Installing JSON-Server  with global Scope";
    npm install -g json-server;
  fi
