Cypress.Commands.add('LaunchPage', () => {
    cy.visit('/');
})

Cypress.Commands.add('clickAnElement', (element) => {


    cy.fixture('selectors').then((el) => {
        cy.get(element).should('be.visible').click()
    });
})

Cypress.Commands.add('HoverOnElement', (element) => {

    cy.fixture('selectors').then((el) => {

        cy.get(element).trigger('mouseover')
    });
})

Cypress.Commands.add('typeAText', (field, text) => {

    cy.get(field).should('be.visible').type(text);

})

