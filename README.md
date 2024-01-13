# Project Name: base-nest-graphql-hexagonal

## Description
This project is a Node.js application built with NestJS, GraphQL, and MongoDB. It follows a hexagonal architecture to organize code in a modular and scalable way. The application provides a GraphQL API for managing Pokemon entities stored in a MongoDB database.

## Getting Started
To run the project locally with Yarn, follow these steps:

1. Clone the repository:
   ```bash
   git clone [repository_url]
   cd base-nest-graphql-hexagonal
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Configure MongoDB:
    - Make sure MongoDB is installed and running on `mongodb://localhost:27017/nest-pokemon`. You can modify the MongoDB connection URL in the `MongooseModule.forRoot` call in `app.module.ts` if needed.

4. Build the project:
   ```bash
   yarn build
   ```

5. Start the application:
   ```bash
   yarn start
   ```

The GraphQL API will be accessible at `http://localhost:3000/graphql`.

## Project Structure
- `src/app.module.ts`: Main module definition, includes configuration for GraphQL, Mongoose (MongoDB), and other modules.
- `src/modules/pokemon`: Contains modules and components related to Pokemon, including a GraphQL resolver.
- `src/modules/usecase`: Usecase module with components related to business logic.
- `src/core`: Core domain logic, including the definition of the Pokemon entity.
- `src/infra`: Infrastructure layer with configurations and instances.

## GraphQL Endpoints
- `getAllPokemon`: Fetch all Pokemon entities.
- `getPokemonById(id: String)`: Fetch a specific Pokemon by ID.

## Scripts
- `yarn build`: Build the NestJS application.
- `yarn start`: Start the application.
- `yarn start:dev`: Start the application in watch mode for development.
- `yarn test`: Run tests using Jest.
- `yarn test:watch`: Run tests in watch mode.
- `yarn test:cov`: Run tests with coverage report.
- `yarn lint`: Run ESLint for code linting.
- `yarn format`: Format code using Prettier.

## Dependencies
- `@nestjs/apollo`, `@nestjs/common`, `@nestjs/config`, `@nestjs/core`, `@nestjs/graphql`, `@nestjs/mongoose`: NestJS dependencies for building the application.
- `@apollo/server`, `graphql`: Dependencies for GraphQL server implementation.
- `mongoose`: MongoDB ODM for NestJS.
- `rxjs`: Reactive Extensions for JavaScript.
- Other development and testing dependencies specified in `package.json`.

## License
This project is licensed under the UNLICENSED license.

Feel free to explore the code and adapt it to your needs!