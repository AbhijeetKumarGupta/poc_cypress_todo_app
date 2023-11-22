/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByTestId<E extends Node = HTMLElement>(
      testId: string,
      options?: Partial<TypeOptions>
    ): Chainable<JQuery<E>>;

    visitHome(): Chainable<JQuery<E>>;
  }
}
