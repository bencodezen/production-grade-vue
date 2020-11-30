# Languages

## Single File Components (Overview)

Most components written in Vue.js are written as single-file components.

```vue
<template>
  <h1>Hello Frontend Masters!</h1>
</template>

<script>
export default {
  // ...
}
</script>

<style>
/* My Custom Styles */
</style>
```

## JavaScript

- Majority of bugs encountered are not due to type violations
- TypeScript does not inherently guarantee type safety - it requires discipline
- Full type safety in a codebase can be a significant cost to a team in terms of productivity
- There is also the cost of onboarding that needs to be considered since more and more developers are started with languages that are not strongly-typed and the learning curve can be an added cost for teams
- Most applications would benefit from better tests and code reviews
- Progressive types can be added to a codebase with JSDoc comments
  - Resource: [Type Vue without TypeScript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b) by [Rahul Kadyan](https://twitter.com/znck0)
- If the application is in Vue.js 2, probably not worth upgrading to TypeScript
- Starting a new project with Vue.js 3 and the team is interested in trying it out TypeScript? Go for it!

## HTML

### All HTML should exist in .vue files in a template or render function

A benefit of doing this is that Vue has an opportunity to parse it before the browser does.

This allows for developer experience improvements such as:

- Self-closing tags
- Easy enhancement path if needed

### Template (Overview)

```vue{1-3}
<template>
  <h1>Hello Frontend Masters!</h1>
</template>

<script>
export default {
  // ...
}
</script>

<style>
/* My Custom Styles */
</style>
```

### Render Function (Overview)

This is another valid alternative for generating HTML when you need to do it programmatically, but generally `template` is recommended over `render` functions.

#### Vue 2

```vue
<script>
export default {
  render(createElement) {
    return createElement('h1', 'Hello Frontend Masters!’)
  }
}
</script>
```

#### Vue 3

```vue
<script>
import { h } from 'vue'

export default {
  render(createElement) {
    return createElement('h1', 'Hello Frontend Masters!’)
  }
}
</script>
```

### Template vs Render Function

Templates are the most declarative way to write HTML and is recommended as the default.

Render functions are a valid alternative to templates that are great for programmatic generation of markup.

### v-bind and v-on Object Syntax

The following code:

```vue
<VueMultiselect
  v-bind:options="options"
  v-bind:value="value"
  v-bind:label="label"
  v-on:change="parseSelection"
  v-on:keyup="registerSelection"
  v-on:mouseover="registerHover"
/>
```

can be rewritten as:

```vue
<VueMultiselect v-bind="vmsProps" v-on="vmsEvents" />
```

## CSS

In general, limit global styles to App.vue whenever possible.

Otherwise, tyr to scope all component styles with scoped styles or CSS modules.

### Scoped Styles

Utilizes a data attribute in order to "scope" the styles to the HTML generated, but it's limited in protecting the element since higher specificity can still override this.

```vue
<template>
  <!-- What could be rendered -->
  <p class="red" data-v57s8>
    This should be red!
  </p>
</template>

<style>
.red[data-v57s8] {
  color: red;
}
.bold[data-v57s8] {
  font-weight: bold;
}
</style>
```

### CSS Modules

What I recommend in terms of managing styles inside of components. It generates a unique CSS class that avoid the specificity issue.

```vue
<template>
  <p class="MyRedText_red_3fj4x">
    This should be red!
  </p>
</template>

<style>
.MyRedText_red_3fj4x {
  color: red;
}
.MyRedText_bold_8fn3s {
  font-weight: bold;
}
</style>
```

## Challenge 01

### In the repo

- Rewrite the `DynamicHeading` component using the render function
- Refactor the `#app` styles to a CSS class and use CSS modules

### In your app

- Look around to see if there are any components that might benefit from using the render method instead of templates
- Refactor a component to use CSS modules
