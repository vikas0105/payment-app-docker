# Step 1: Build the app
FROM node:16 AS build

WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./src ./src
RUN npm run build

# Step 2: Serve the app with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
