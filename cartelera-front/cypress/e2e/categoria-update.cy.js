/* eslint-disable no-undef */

// Pruebas de Aceptación: 
// Prueba de Actualización de Categoría desde la Interfaz de Usuario:
// Simula la actualización de una categoría y verifica que los cambios se reflejen en la lista.


describe('Categoria Update', () => { 
    beforeEach(()=>{
        cy.wait(5000)
        cy.visit("http://localhost:5173")
    })
    it('Update Categoria', () => {
        cy.get('#options-menu-categorias').click()
        cy.wait(2000)
        cy.get('#categorias-list').click()
        cy.wait(2000)
        // primer link con la clase btn-editar
        cy.get('.btn-editar').first().click()
        cy.wait(2000)
        //obtener el input con el atributo data-cy="nombre-categoria" y limpiarlo
        cy.get('[data-cy=nombre-categoria]').clear()
        cy.wait(2000)
        //obtener el input con el atributo data-cy="nombre-categoria" y escribir "Categoria 1"
        cy.get('[data-cy=nombre-categoria]').type('Prueba Cypress')
        cy.wait(2000)
        //obtener el input con el atributo data-cy="descripcion-categoria" y escribir "Categoria 1"
        cy.get('[data-cy=descripcion-categoria]').clear()
        cy.wait(2000)
        cy.get('[data-cy=descripcion-categoria]').type('Prueba Cypress Descripcion')
        cy.wait(2000)
        cy.get('[data-cy=boton-actualizar]').click()
        // esperar un tiempo para que se actualice la tabla
        cy.wait(2000)
        cy.get('#td-nombre-categoria', { timeout: 1000 }).should('have.text', 'Prueba Cypress');
        cy.get('#td-descripcion-categoria').should('have.text', 'Prueba Cypress Descripcion');

    })

 })