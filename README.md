# react-19-rc-use-and-suspense

react 19 introduces a new API called `use` that allows reading resources directly during render. For instance, you can pass a promise to `use`, and React will automatically suspend the component until the promise resolves.

## Requirements

1. Node: Version 20.17.0 was used in this case.
2. Package Manager: You have the option to choose between NPM, Yarn, or other alternatives.

## Installation

```bash
yarn install
yarn dev
```

## Build

```bash
yarn build
```

## Dependencies

These are some of the dependencies used in the project, along with their respective versions:

```bash
"react": "19.0.0-rc-206df66e-20240912",
"react-dom": "19.0.0-rc-206df66e-20240912"
```

## devDependencies

These are some of the devDependencies used in the project, along with their respective versions:

```bash
"@eslint/js": "9.9.0",
"@types/react": "18.3.5",
"@types/react-dom": "18.3.0",
"@vitejs/plugin-react": "4.3.1",
"autoprefixer": "10.4.20",
"eslint": "9.9.0",
"eslint-plugin-react-hooks": "5.1.0-rc.0",
"eslint-plugin-react-refresh": "0.4.9",
"globals": "15.9.0",
"postcss": "8.4.45",
"tailwindcss": "3.4.11",
"typescript": "5.5.3",
"typescript-eslint": "8.0.1",
"vite": "5.4.1"
```

## Obtain API Key

To ensure the application functions properly, obtain your own API key by registering on the following website:

1. [Free-to-Play Games Database](https://rapidapi.com/digiwalls/api/free-to-play-games-database): You can use this API to retrieve information about free games, such as their title, genre, description and more.

## Environment Variables

To configure the necessary environment variables for the application to function, follow these steps:

1. At the root of the project, create a file named .env.

2. Open the .env file and then define the necessary environment variables following this format:

```javascript
//.env example
VITE_API_URL = YOUR_API_URL

VITE_API_KEY = YOUR_API_KEY
VITE_API_HOST = YOUR_API_HOST
```

## Author

Developed by [HamidGX](https://github.com/HamidGX)
