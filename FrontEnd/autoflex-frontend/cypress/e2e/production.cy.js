/// <reference types="cypress" />

describe('Fluxo de Gestão de Produção AutoFlex', () => {
  beforeEach(() => {
    // Certifique-se de que seu frontend está rodando nesta porta
    cy.visit('http://localhost:5173');
  });

  it('Deve validar a sugestão de produção e o valor bruto de R$ 7.500,00', () => {
    // Clica na aba de Produção
    cy.contains('button', 'PRODUÇÃO').click();

    // Valida o card de sugestão
    cy.contains('SUGESTÃO OTIMIZADA DE PRODUÇÃO').should('be.visible');

    // Valida o valor exato que aparece na sua imagem
    cy.contains('R$ 7.500,00').should('be.visible');

    // Valida o produto na tabela
    cy.get('table').within(() => {
      cy.contains('td', 'Industrial Chair').should('be.visible');
      cy.contains('span', '50 un').should('be.visible');
    });
  });
});