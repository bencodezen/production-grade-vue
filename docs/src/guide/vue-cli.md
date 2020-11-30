## Vue CLI

### Vue CLI

- Setup a Vue 3 project on the repo

### Vue UI GUI

- Once Vue CLI is installed locally, you can run this with `vue ui`
- Equivalent of Vue CLI with DX magic
   - Need to kill a port because something was left running?
   - Check out how easy it is to configure things
   - When you run your server, you also get statistics and analysis

### Vue CLI - Modern Mode

- Babel allows us to utilize all the newest language features in ES6+, but this also means that traditional bundling strategies meant you had to include all of this to users who didn't need it
   - With modern mode, Vue CLI products two versions of your app: one modern bundle targeting browsers that support ES modules, and a legacy bundle targeting older browsers that do not.
   - The best thing about this is that beyond ensuring your build process has this flag checked off, you don't need to do anything else.
  - The command is `vue-cli-service build --modern`

### Valid alternatives to Vue CLI

- Micro-frontends
- Legacy migration
- Server-side rendering
