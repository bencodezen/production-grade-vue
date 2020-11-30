# Components

## Part 1

### Naming Components

- Avoid single word components
- Prefix components with words like `App` or `Base` or a unique company/team identifier
- For component where only a single instance should exist, prefix with `The`
- Tightly related components should be also named as such to maintain an obvious relationship between them: `TodoList > TodoListItem > TodoListItemName`

### Naming Component Methods

- Use descriptive names (e.g., `updateUserName`)
- Do not name it after the event (e.g., `onInput`)
- When you name it after the event, this assumes where it will be called and will make refactoring difficult later on
- Prefer destructuring over multiple argument. In other words, allow users to "configure" their options by letting them assign values to an object rather than memorizing what order the parameters are in

```js
// * Recommended
updateUser ({ userList, index, value, isOnline }) {
  if (isOnline) {
    userList[index] = value
  } else {
    this.removeUser(userList, index)
  }
}

// ! Not recommended
updateUser (userList, index, value, isOnline) {
  if (isOnline) {
    userList[index] = value
  } else {
    this.removeUser(userList, index)
  }
}
```

### When to Refactor Components

- Data Driven Refactoring
- Signs you need more components
  -When your components are hard to understand
  - You feel a fragment of a component could use its own state
  - Hard to describe what what the component is actually responsible for
- How to find reusable components
  - Look for v-for loops
  - Look for large components
  - Look for similar visual designs
  - Look for repeating interface fragments
  - Look for multiple/mixed responsibilities
  - Look for complicated data paths

### SFC Block Order

Recommend using `script > template > style` in order to optimize for scrolling experience for better shared concerns amongst the file.

```vue
<script>
export default {
  // ...
}
</script>

<template>
  <h1>Hello Frontend Masters!</h1>
</template>

<style>
/* My Custom Styles */
</style>
```

### Component File Organization

- Recommend flatter file organization over heavily nested files
- Flat make refactoring easier since imports don't have update their paths
- Flat makes finding files easier as well since deeply nested files don't have to be unique and can be lazily named

### Register base components globally

- Base components are used so often the savings of importing them manually often do not outweigh the cost of developers manually importing them
- Check out this great script by Chris Fritz: https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components

## Part 2

### Props

- Avoid using arrays to define components
- Use object to define whether a prop is required or has a default value
- You do not need both required and default on a prop definition
- You can also add custom validators to add more specific type constraints

### Let's do a coding experiment

- Experiment building a button that has growing requirements
- Prop solutions are great for being very descriptive for how something should be used, but it does have some issues:
  - New requirements increase complexity
  - Multiple responsibilities
  - Lots of conditionals in the template
  - Low flexibility
  - Hard to maintain

### How to dynamically switch components based on data

- Use the `<component :is="">` component
- Benefits of using it include:
  - Extremely powerful and flexible
  - Easy to use
  - Can accept props
  - Can accept asynchronous components
  - Can change into different components
  - You can make a router-view out of it
- But when you use it, be careful of how you handle props

### Vendor component wrapper

- Wrap all components using third party libraries in your own component to allow for easier refactoring and management

```vue
<template>
  <FontAwesomeIcon v-if="source === 'font-awesome'" :icon="name" />
  <span v-else :class="customIconClass" />
</template>
```

### Transparent components

- When creating your own components around native HTML elements, make sure you assign the correct attrs to the right elements
- By default, it goes to the root element, but you need disable `inheritAttrs` so you can reassign where everything goes
