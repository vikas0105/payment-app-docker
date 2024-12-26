# Stage 1: Build stage
FROM maven:3.8.6-openjdk-11 AS build

# Set working directory
WORKDIR /app

# Copy the pom.xml and source code to the build container
COPY ./pom.xml ./
COPY ./src ./src/

# Install dependencies and build the application
RUN mvn dependency:go-offline
RUN mvn clean package -DskipTests

# Stage 2: Runtime stage
FROM openjdk:11-jre-slim

# Set working directory
WORKDIR /app

# Copy the JAR file dynamically from the build stage
COPY --from=build /app/target/*.jar /app/payment-app-backend.jar

# Set the entry point to run the Java application
ENTRYPOINT ["java", "-jar", "payment-app-backend.jar"]
