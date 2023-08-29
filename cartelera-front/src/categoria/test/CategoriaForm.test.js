import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CategoriaForm } from '../pages/CategoriaForm';

describe('Test: <CategoriaForm/> ', () => {

    test('debe de mostrar el componente correctamente', () => {
        const wrapper = render(<MemoryRouter>
            <CategoriaForm />
        </MemoryRouter>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe los inputs estar vacios', () => {
        const { getByLabelText  } = render(<MemoryRouter>
            <CategoriaForm />
        </MemoryRouter>);
        const nombreInput = getByLabelText('Nombre');
        const descripcionInput = getByLabelText('Descripción');
        expect(nombreInput.value).toBe('');
        expect(descripcionInput.value).toBe('');
    })
    
    test('debe de actualizar el estado cuando el input values cambie', () => {
        const { getByLabelText  } = render(<MemoryRouter>
            <CategoriaForm />
        </MemoryRouter>);
        const nombreInput = getByLabelText('Nombre');
        const descripcionInput = getByLabelText('Descripción');
        fireEvent.change(nombreInput, { target: { value: 'Nuevo nombre' } });
         fireEvent.change(descripcionInput, { target: { value: 'Nueva descripción' } });

        expect(nombreInput.value).toBe('Nuevo nombre');
        expect(descripcionInput.value).toBe('Nueva descripción');
     })


});
