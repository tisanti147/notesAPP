#!/bin/bash

# Function to create MongoDB database and collection
setup_mongodb() {
    echo "Creating MongoDB database and collection..."
    mongo notesAPP --eval "db.createCollection('notes')"
}

# Function to install npm dependencies
install_dependencies() {
    echo "Installing npm dependencies..."
    npm install
}

# Change to the server directory and start the server
cd "/api"
install_dependecies()
nodemon server.js 

# Start the Angular project
cd "/notes"
install_dependecies()
ng serve --o