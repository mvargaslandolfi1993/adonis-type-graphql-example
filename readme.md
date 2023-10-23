# Adonis.js with GraphQL Example

This is an example project that demonstrates how to use how to use the [adonis-type-graphql](https://www.npmjs.com/package/adonis-type-graphql) package to create an API 

## Prerequisites

- [Docker](https://www.docker.com/get-started) (only if you want to use Docker)
- Node.js and npm (if not using Docker)
- Copy the `.env.example` file to a new file named `.env`

## Setup with Docker (Recommended)

1. Run the following command to start the Docker environment:

   ```bash
   docker-compose up -d

   This docker-compose up -d command will create the proxy with Nginx, the MySQL database, and also set up the corresponding database for you.

2. Then, run the migrations to create the database:

    ```bash
    node ace migration:run

## Setup Without Docker

1. Ensure you have Node.js and npm installed on your system.

2. Create the database

3. Run the migrations

    ```bash
    node ace migration:run


### Usage

Once the application is up and running, you can use GraphQL to perform queries and mutations on the User and Comment models. You can customize the queries as needed.

### Contributions

If you wish to contribute to this project, please feel free to do so by creating pull requests.

#### License

This project is distributed under the MIT License.