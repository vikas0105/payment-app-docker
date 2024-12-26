# payment-app-docker
**Payment App** with a React frontend and Spring Boot backend. You can build and run it using Docker Compose, and it allows for communication between both services using HTTP. Once it's working with Docker Compose, you can extend the setup to Kubernetes for more scalability and production-readiness.


==========================================================================================================================================================================================


#!/bin/bash

# Update package list
echo "Updating package list..."
sudo apt-get update -y

# Install required dependencies
echo "Installing required dependencies..."
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common -y

# Add Docker's official GPG key
echo "Adding Docker's official GPG key..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Set up Docker stable repository
echo "Setting up Docker repository..."
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Update package list after adding Docker repository
echo "Updating package list after adding Docker repository..."
sudo apt-get update -y

# Install Docker
echo "Installing Docker..."
sudo apt-get install docker-ce -y

# Enable Docker to start on boot
echo "Enabling Docker to start on boot..."
sudo systemctl enable docker

# Start Docker service
echo "Starting Docker service..."
sudo systemctl start docker

# Verify Docker installation
echo "Verifying Docker installation..."
sudo docker --version

# Install Docker Compose
echo "Installing Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Apply executable permissions to the binary
echo "Setting executable permissions for Docker Compose..."
sudo chmod +x /usr/local/bin/docker-compose

# Verify Docker Compose installation
echo "Verifying Docker Compose installation..."
docker-compose --version

# Add the current user to the Docker group (optional)
echo "Adding user to Docker group..."
sudo usermod -aG docker $USER

# Final message
echo "Docker and Docker Compose installation completed successfully."
echo "You may need to log out and log back in for group changes to take effect."
