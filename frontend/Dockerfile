# Stage 1: Build the app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code and build the app
COPY ./src ./src
RUN npm run build

# Stage 2: Serve the app with nginx
FROM nginx:alpine

# Copy the build output from the build stage to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
