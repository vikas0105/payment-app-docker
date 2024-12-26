# Step 1: Build the app
FROM maven:3.8.6-openjdk-11 AS build

WORKDIR /app
COPY ./pom.xml .
RUN mvn dependency:go-offline

COPY ./src ./src
RUN mvn clean package -DskipTests

# Step 2: Create a minimal runtime image
FROM openjdk:11-jre-slim

WORKDIR /app
COPY --from=build /app/target/payment-app-backend.jar /app/payment-app-backend.jar

ENTRYPOINT ["java", "-jar", "payment-app-backend.jar"]
