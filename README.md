# Learning Angular 19

This project is an Angular application configured with specific customizations compared to a base Angular project version 19.

## Custom Configurations

### 1. Disabling Test File Generation

The project is configured to skip the generation of `.spec.ts` test files for various Angular schematics. This is done to streamline the development process by avoiding the creation of unnecessary test files.

In the `angular.json` file, the following configurations are added under the `schematics` section:

```json
"schematics": {
  "@schematics/angular:component": {
    "standalone": false,
    "skipTests": true
  },
  "@schematics/angular:class": {
    "skipTests": true
  },
  "@schematics/angular:directive": {
    "standalone": false,
    "skipTests": true
  },
  "@schematics/angular:guard": {
    "skipTests": true
  },
  "@schematics/angular:interceptor": {
    "skipTests": true
  },
  "@schematics/angular:pipe": {
    "standalone": false,
    "skipTests": true
  },
  "@schematics/angular:resolver": {
    "skipTests": true
  },
  "@schematics/angular:service": {
    "skipTests": true
  }
}
```

### 2. Assets Directory Configuration

The project is configured to use the `src/assets` directory for storing assets such as images and videos, instead of the default `public` directory.

In the `angular.json` file, the `assets` configuration is updated as follows:

```json
"assets": [
  {
    "glob": "**/*",
    "input": "src/assets",
    "output": "/assets"
  }
]
```

This change is applied to both the `build` and `test` configurations to ensure that assets are correctly referenced during development and testing.

### 3. Disabling Standalone Components

The project is configured to not use standalone components. This is specified in the `angular.json` file under the `schematics` section for components, directives, and pipes:

```json
"schematics": {
  "@schematics/angular:component": {
    "standalone": false,
    "skipTests": true
  },
  "@schematics/angular:directive": {
    "standalone": false,
    "skipTests": true
  },
  "@schematics/angular:pipe": {
    "standalone": false,
    "skipTests": true
  }
}
```

## Project Structure

- `src/`: Contains the source code of the Angular application.
  - `assets/`: Directory for storing assets like images and videos.
  - `app/`: Main application module and components.
- `angular.json`: Angular CLI configuration file with custom schematics and assets configurations.

## Getting Started

To get started with the project, follow these steps:

1. Install the dependencies:

   ```sh
   npm install
   ```

2. Serve the application:

   ```sh
   ng serve
   ```

3. Build the application:
   ```sh
   ng build
   ```

## Conclusion

This project demonstrates how to customize an Angular application to skip the generation of test files, configure a custom assets directory, and disable the use of standalone components. These changes help streamline the development process and maintain a clean project structure.
