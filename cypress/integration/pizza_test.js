describe('Test Inputs', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const sizeInput = () => cy.get('input[name=size')
    const hamInput = () => cy.get('input[name=ham')
    const pineappleInput = () => cy.get('input[name=pineapple')
    const greenPepperInput = () => cy.get('input[name=greenPepper')
    const onionInput = () => cy.get('input[name=onion')
    const specialInput = () => cy.get('input[name=special')
    const submitButton = () => cy.get('button')

    it('Submit button starts out disabled', function() {
        submitButton().should('be.disabled')
    })

    it('Tests name input', function() {
        nameInput().should('have.value', '').type('David').should('have.value','David')
    })

    it('Tests special input', function() {
        specialInput().should('have.value', '').type('None pizza left beef').should('have.value','None pizza left beef')
    })

    it('Can select multiple toppings', function() {
        hamInput().check()
        pineappleInput().check()
        greenPepperInput().check()
        hamInput().should('be.checked')
        pineappleInput().should('be.checked')
        greenPepperInput().should('be.checked')
        onionInput().should('not.be.checked')
    })



    it('Submit button active', function() {
        nameInput().type('David')
        pineappleInput().check()
        greenPepperInput().check()
        specialInput().type('These are my special instructions')
        submitButton().should('not.be.disabled')
    })
})