# Stage 1: Build the application
FROM maven:3.8.6-openjdk-11 AS build

WORKDIR /app

# Copy pom.xml and install dependencies
COPY ./pom.xml .
RUN mvn dependency:go-offline

# Copy source code and build the application
COPY ./src ./src
RUN mvn clean package -DskipTests

# Stage 2: Run the application using a smaller OpenJDK image
FROM openjdk:11-jre-slim

WORKDIR /app

# Copy the jar file from the build stage
COPY --from=build /app/target/payment-app-backend.jar /app/payment-app-backend.jar

# Run the application
ENTRYPOINT ["java", "-jar", "payment-app-backend.jar"]
