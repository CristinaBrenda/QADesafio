

describe('Cupons de desconto', () => {
    
   //CT01 - Validar cupom FRETEGRATIS
   it('CT01', () => {
          
      cy.pesquisarProduto()

      /* ==== Generated with Cypress Studio ==== */
      cy.get('#usarCupom').clear('F');
      cy.get('#usarCupom').type('FRETEGRATIS');
      cy.get('#btn-cupom').click();
      /* ==== End Cypress Studio ==== */
   });

   //CT02 - Validar cupom 10OFF
   it('CT02', () => {
        cy.pesquisarProduto()
        cy.get('#usarCupom').clear('F');
        cy.get('#usarCupom').type('10OFF');
        cy.get('#btn-cupom').click();
   });
   //CT03 - Validar cupom 30REAIS
   it('CT03', () => {
    cy.pesquisarProduto()
    cy.get('#usarCupom').clear('F');
    cy.get('#usarCupom').type('30REAIS');
    cy.get('#btn-cupom').click();
    });
    //CT04 - Validar cupom 20LIMITADO
    it('CT04', () => {
        cy.pesquisarProduto()
        cy.get('#usarCupom').clear('F');
        cy.get('#usarCupom').type('20LIMITADO');
        cy.get('#btn-cupom').click();
    });
    //CT05 - Validar se cupom CUPOMVENCIDO não é aceito
    it('CT05', () => {
        cy.pesquisarProduto()
        cy.get('#usarCupom').clear('F');
        cy.get('#usarCupom').type('CUPOMVENCIDO');
        cy.get('#btn-cupom').click();
    });
    //CT06 - Validar se cupom AJJFLWBHH não é aceito
    it('CT06', () => {
        cy.pesquisarProduto()
        cy.get('#usarCupom').clear('F');
        cy.get('#usarCupom').type('AJJFLWBHH');
        cy.get('#btn-cupom').click();
    });
});