# State Management

- 📢 Need an introduction to Vuex? Check out Sarah's course: Intro to Vue 3!
- 📢 Need a deeper dive Vuex? Check out Divya's course: Vuex for Intermediate Vue.js Developers!

## What data to put into Vuex?

- Data shared between components that might not be in direct parent-child relation
- Data that you want to keep between router views (for example lists of records fetched from the API)
  - Route params are more important though (as a source of truth)
- Any kind of global state
  - Examples: login status, user information, global notifications
- Anything if you feel it will make managing it simpler

## What data to avoid putting into Vuex?

- User Interface variables
  - Examples: isDropdownOpen, isInputFocused, isModalVisible
- Forms data
- Validation results
- Single records from the API

## Other advice

- Avoid calling mutations directly in components
- Use built-in map helpers
- mapActions vs mapMutations
   - 📢 Need an intro to mapHelpers to Vuex? Check out Divya's course: Vuex for Intermediate Vue.js Developers!
   - Don't use mapMutations
   - Different ways to define mapActions
- Always use namespaced module
   - 📢 Need an intro to modules to Vuex? Check out Divya's course: Vuex for Intermediate Vue.js Developers!
   - Mutations and actions are not namespsaced by default, this is why it's important to turn this on by default.
- Composition API's Impact on Vuex
