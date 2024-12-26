# Step 1: Build the app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if it exists)
COPY ./frontend/package.json ./frontend/package-lock.json ./

# If package-lock.json is missing, regenerate it by installing dependencies
RUN [ -f package-lock.json ] || npm install

# Install dependencies
RUN npm install

# Copy the source code
COPY ./frontend/src ./src

# Copy public folder containing index.html
COPY ./frontend/public ./public

# Build the app
RUN npm run build

# Step 2: Serve the app with nginx
FROM nginx:alpine

# Copy the build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default HTTP port
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
