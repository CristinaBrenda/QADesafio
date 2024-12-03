// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('pesquisarProduto',()=>{

    //visita a pagina
    cy.visit("https://qastoredesafio.lojaintegrada.com.br");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#Caminho_102').click({force: true});
      cy.get('.ui-autocomplete-input').clear('[CODIGO] Produto com MPN preenchido');
      cy.get('.ui-autocomplete-input').type('[CODIGO] Produto com MPN preenchido');
      cy.get('form > .botao').click();
      cy.get(':nth-child(1) > .listagem-item > .acoes-produto > .botao > .svg-ico > #Componente_22_3 > #Caminho_100').click();
      cy.get('.fancybox-item').click();
      cy.get(':nth-child(1) > .svg-ico > #Componente_22_3').click();
      cy.get('#calcularFrete').clear('1');
      cy.get('#calcularFrete').type('12345-678');
      cy.get('#btn-frete').click();
      cy.get(':nth-child(2) > .radio > input').check();
})