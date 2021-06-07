[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](http://gitpod.io/#https://github.com/maltesa/vite-react-tailwind-example)

# What's this?

This is a sample project (a web music player) for the Open Campus Frontend Developer Programm. It uses vite, react and tailwindcss.

# Course State

_The state after the course session can be found in the `after-course` Branch._

# Setup Steps

_The state after the setup can be found in the `after-setup` Branch._

These steps explain how to setup an empty project with vite, react and tailwindcss. These steps were also used to create this sample project.

## Setup Vite with React

1. Create vite react app (change _music-player_ to the name of your project)

```bash
yarn create @vitejs/app music-player --template react
```

2. Follow the instructions printed in your terminal. Mine were:

```bash
cd music-player
yarn
yarn dev
```

3. Open the project in the editor of your choice. Open `localhost:3000` in your browser.

## Add Tailwind

1. Install Tailwind dependecies (as dev dependencies with `-D`):

```bash
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
```

2. Init Tailwind

```bash
npx tailwindcss init -p
```

- This creates `tailwind.config.js` and `postcss.config.js`

3. Open `tailwind.config.js` to setup purging and just-in-time mode

```js
  //...
  purge: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  //...
```

4. Remove everything in `index.css` and include Tailwind in `index.css`

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Remove `App.css` and `logo.svg` and adjust `App.js`

Change the App.js to his

```jsx
import React from "react";

function App() {
  return (
    <div className="text-7xl font-black animate-bounce mt-8">
      Let's get started 🎉
    </div>
  );
}

export default App;
```

6. (optional) Add the Tailwind CSS IntelliSense Extension if you're using vscode.

7. **You are ready to go 🎉**. Check your browser.
