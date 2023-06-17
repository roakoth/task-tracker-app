# Step 1: Project Setup

First, I will create a new Astro project. I will use the `create astro` CLI command in a new terminal window:

`# create a new project with npm
npm create astro@latest`

If you use yarn:

`# create a new project with yarn
yarn create astro`

Below is a summary of the chat I had with the Astro CLI to setup my Astro project.

- *Where should we create your new project*
 
    ./task-tracker
    
- *How would you like to start your new project?* 

  Empty
  
- *Install dependencies*

  Yes
  
- *Do you plan to write Typescript*

  No
  
- *Initialize a git repository (Optional)*

  No
  
   
Once the setup is complete, I will enter my project directory using this command:
  
`cd task-tracker`

Then run `npm run dev` to start the development server.

To preview how the project looks like, I will open my web browser and go to http://localhost:3000 there will be nothing much but an **Astro** 
text rendered, since I selected an **empty project option** so that I can build everything from scratch.

## Installing packages I will use in my project

I will start by adding Preact to my project, using the `astro add` command: `npx astro add preac`t for npm, if you are using yarn, 
you can use this command: `yarn astro add preact`
The Astro Preact integration handles how Preact components are rendered in an astro page.

After the installation, the Preact integration will be added to `astro.config.mjs` file. The file will look like this:

```

import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()]
});

```

Next, I am going to install `nanostores` alongside its helper package for preact using this command `npm install nanostores @nanostores/preact` 
which will help me share state between my Preact components. My Preact components are going to have access to common data from my store 
which is some single source of truth about the state of things in my application.

Finally, I’ll install `nanoid` package by using this command `npm i nanoid` this will be used to generate a unique id for the store I create.

All the packages I have installed will be listed in my `package.json` file as my project dependencies.

```

{
  "name": "task-tracker",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/preact": "^2.2.0",
    "@nanostores/preact": "^0.4.1",
    "astro": "^2.4.1",
    "nanostores": "^0.8.1",
    "preact": "^10.14.1"
  }
}

```

  
  




