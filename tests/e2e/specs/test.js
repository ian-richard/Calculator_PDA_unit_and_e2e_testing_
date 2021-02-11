// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  it('should do arithmetical operations 2 + 2 = 4', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4');
  })
  it('should show 1 for 19 - 18 then =', () => {
    cy.get('#number1').click();
    cy.get('#number9').click();
    cy.get('#operator_subtract').click();
    cy.get('#number1').click();
    cy.get('#number8').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1');
  })
  it('should show 1 for 5 / 5 then =', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1');
  })
  it('should show 50 in the running total when pressing 5 * 10 then =', () => {
    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '50');
  })
  it('should show 2 in the total after multiple operations are chained together', () => {
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2');
  })
  it('should show positive 1 as 1', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
  })
  it('should show negative 10 as -10', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#operator_subtract').click();
    cy.get('#number2').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-10');
  })
  it('should show 3 and a half as 3.5', () => {
    cy.get('#number7').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '3.5');
  })
  it('should show 100 Billion multiplied by 100 Billion as 1e+22', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '1e+22');
  })
  it('should show error if dividing by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Infinity');
  })
  })

