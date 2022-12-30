import elements from '../../fixtures/selectors.json'
Given('I launch airmalta website', () => {
    cy.LaunchPage();
});

When("I click on {string}", (button) => {
    switch (button) {
        case 'One way travel':
            cy.clickAnElement(elements.tripType)
            cy.clickAnElement(elements.OneWayTravel)
            break;
        case 'find flight':
            cy.clickAnElement(elements.FindFlightButtons)
            break;
        case 'flexible date':
            cy.clickAnElement(elements.FlexibleDateButton)
    }
});

And("I input departure and arrival locations", () => {
        cy.typeAText(elements.DepartingField, elements.DepartingText)
        cy.clickAnElement(elements.ResultOption)
        cy.typeAText(elements.FlyingToField, elements.FlyingToText)
        cy.clickAnElement(elements.ResultOption)
});

And("I insert a date", () => {
    cy.clickAnElement(elements.DepartureDateField)
    // cy.intercept('/schedule/flights.json?from=2023-02-01&to=2023-12-29&origin=VIE&dest=MLA&roundTrip=0').as('dateOption')
    // cy.wait('@dateOption')
    cy.clickAnElement(elements.DepartureDate)
    //cy.clickAnElement(elements.DepartureDate2)
});

Then('I should see the price of the first available flight', () => {
    cy.get('.sc-jlIkXa')
    .find('[class="sc-dkaWxM bZQAjI"]').eq(0)
    .find('[class="sc-eishCr kyspjp"]')
    .find('[class="sc-ksXhwv iVzzFR"]')
    .find('[class="sc-bGqQkm lcbctZ"]')
    .find('[class="sc-gInsOo fIWhZG"]')
    .find('[class="sc-euMpXR dEdBnT"]').invoke('text').then((val)=>{
        cy.log(val)
        console.log(val)
    })
	// cy.get('.dielVB.sc-jlIkXa > button:nth-of-type(1) .dEdBnT.sc-euMpXR').invoke('text').then((val)=>{
    //     expect(val).to.include('')
    // })
});
