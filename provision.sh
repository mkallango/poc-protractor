#!/usr/bin/env bash

exe () {
    MESSAGE_PREFIX="\b\b\b\b\b\b\b\b\b\b"
    echo -e "$MESSAGE_PREFIX Execute: $1"
    LOOP=0
    while true;
    do
        if ! [ $LOOP == 0 ]; then echo -e "$MESSAGE_PREFIX ...     "; fi;
        sleep 3;
        LOOP=$((LOOP+1))
    done & ERROR=$("${@:2}" 2>&1)
    status=$?
    kill $!; trap 'kill $!' SIGTERM

    if [ $status -ne 0 ];
    then
        echo -e "$MESSAGE_PREFIX ✖ Error" >&2
        echo -e "$ERROR" >&2
    else
        echo -e "$MESSAGE_PREFIX ✔ Success"
    fi
    return $status
}

exe 'sudo apt-get update'
exe 'curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -'
exe 'sudo apt-get install -y nodejs'
exe 'sudo npm install -g protractor'