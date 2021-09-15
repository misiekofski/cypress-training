Stubs
=====

## What are stubs?

Test stubs are functions (spies) with pre-programmed behavior.

They support the full test spy API in addition to methods which can be used to alter the stub’s behavior.

As spies, stubs can be either anonymous, or wrap existing functions. When wrapping an existing function with a stub, the original function is not called.


## When to use stubs?

Use a stub when you want to:

Control a method’s behavior from a test to force the code down a specific path. Examples include forcing a method to throw an error in order to test error handling.

When you want to prevent a specific method from being called directly (possibly because it triggers undesired behavior, such as a XMLHttpRequest or similar, e.g localStorage API, sessionStorage API).

## Cypress syntax

```JavaScript
cy.stub()
cy.stub(object, method)
cy.stub(object, method, replacerFn)
```

### Example of usage

```JavaScript
class User {
    addFriend(friend) {
        friend.friendsheepWith(this)
        this.friends.push(friend)
    }
}

const user = new User;

cy.stub(user, 'addFriend');
```

then somwhere in application client have to call `user.addFriend()`

## What do we need to do this?

We need to have control over application that we would like to test (as long as we would like to test something else then BOM API). We have to have possibility to bootstrap application after all stubs are setup. 


## Task no 1
* overwrite the list of TODO tasks that are read from localStorage

```JavaScript
describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://example.cypress.io/todo', {
      onBeforeLoad(win) {
        cy.stub(win.localStorage, 'getItem').returns('[{"title": "Foo", "completed": false}]')
      },
    })
  })


  it('plays niceley with stubs', () => {
    cy.get('.todo-list li')
      .should('have.length', 1)
      .first()
      .should('have.text', 'Foo')

  })
})
```

## 

## Task no 2
* overwrite the task that we are going to save in DB - make stub for XMLHttpRequest object

## Task no 3
* track cookies that are setup in our aplication, stub againts `document.cookie`

## Summary:
Replace a function, record its usage and control its behavior.

Articles:
https://martinfowler.com/articles/mocksArentStubs.html - Mocks Aren't Stubs
Spies
====

A spy gives you the ability to "spy" on a function, by letting you capture and then assert that the function was called with the right arguments, or that the function was called a certain number of times, or even what the return value was or what context the function was called with.
A spy does not modify the behavior of the function - it is left perfectly intact. A spy is most useful when you are testing the contract between multiple functions and you don't care about the side effects the real function may create (if any).
