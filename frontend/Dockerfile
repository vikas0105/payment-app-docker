# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN npm install

COPY ./src ./src
COPY ./public ./public  # Make sure to copy the public folder with index.html
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
