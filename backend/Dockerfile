# Step 1: Build the Spring Boot app using Maven
FROM maven:3.8.4-openjdk-16 AS build

WORKDIR /app
COPY ./pom.xml ./pom.xml
RUN mvn dependency:go-offline

COPY ./src ./src
RUN mvn clean package -DskipTests

# Step 2: Run the Spring Boot app
FROM openjdk:16-jdk-alpine

WORKDIR /app
COPY --from=build /app/target/*.jar /app/payment-app.jar

EXPOSE 8080
CMD ["java", "-jar", "/app/payment-app.jar"]
