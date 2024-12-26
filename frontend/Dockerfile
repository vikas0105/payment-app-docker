# Step 1: Build the app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Ensure the frontend folder exists and files are present
RUN echo "Checking if the frontend directory and required files exist..." \
    && ls -al /frontend \
    && ls -al /frontend/package.json \
    && ls -al /frontend/package-lock.json \
    && ls -al /frontend/src \
    && ls -al /frontend/public

# Copy package.json (No package-lock.json)
COPY frontend/package.json ./
COPY frontend/package-lock.json ./

# Install dependencies (conditionally for package-lock.json)
RUN [ -f package-lock.json ] || npm install

# Copy the source code
COPY frontend/src ./src

# Copy the public folder containing index.html
COPY frontend/public ./public

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
