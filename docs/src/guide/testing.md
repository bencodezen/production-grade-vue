## Testing

- The Pareto Principle
- Best practice of writing unit tests
  - Don't test that Vue works
    - Examples: Checking that a data, computed, etc property exists
  - Primarily stick with shallow rendering
    - Otherwise a problem in a common component can break many tests
  - Build unit tests into generators
- Traditional Testing Model
  - Unit tests are great, but they're often not the 20% we should be focusing on
- The Two Tests to Focus On
  - Can the user login?
  - Can the user pay us?
- Best practice for writing e2e tests
  - Don't maintain state between tests
    - Tests should be able to run independently of one another
  - Don't select elements with classes
    - Think from the user's perspective, or select elements by their intent
