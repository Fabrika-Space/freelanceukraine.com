#!/bin/bash

ssh -v ubuntu@107.21.123.188 << EOF

  # setup ssh keys
  # NOTE: this section needed to add needed deploy keys
  ssh-agent bash
  ssh-add -D
  ssh-add /home/ubuntu/.ssh/freelanceukraine.com_rsa
  
  echo '1. Updating sources'
  cd ~/repos/freelanceukraine.com
  git checkout --force master
  git pull

  echo "2. Restart apache"
  sudo apache2ctl graceful

  echo 'Done!'
  
EOF
