# Reusability and Composition

## Mixins

- Pros
  - Relatively easy to use
  - Good for refactoring
- Cons
  - Possible properties name clashes.
  - Can’t share template fragments
  - Gets harder to track where things are coming from once there are more mixins

## Provide / Inject

- Pros
  - Easy sharing data and methods with descendants
  - Helps avoiding unnecessary props
  - Components can choose which properties to inject
  - Can be used to provide default props and data values
- Cons
  - There are some reactivity caveats when it comes to usage in Vue 2
  - Creates a tight relationship between two components that is not immediately apparent
  - There is ambiguity when it comes to what is coming from where

## Composition API

- Resource: [Official Vue.js 3 Composition API Guide](https://v3.vuejs.org/guide/composition-api-introduction.html)

## Challenge 02

- Create a counter that uses the Composition API to:
  - Keep track of a currentCount
  - Increment the count
  - Change the amount that the count can be incremented by
