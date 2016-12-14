#!/bin/bash -ex

ssh -v ubuntu@freelanceukraine.com << EOF

  echo '1. Updating sources'
  cd ~/repos/freelanceukraine.com
  git checkout --force master
  git pull

  echo "2. Restart apache"
  sudo apache2ctl graceful

  echo 'Done!'
  
EOF
