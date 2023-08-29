import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'; // Utiliza MemoryRouter para simular la navegación
import { PeliculaDetailPage } from '../pages/PeliculaDetailPage'; // Importa tus componentes
import PeliculasPage from '../pages/PeliculasPage';


describe('Pruebas de Integración', () => {
  it('Debería mostrar los detalles de una película al hacer clic en Ver Detalles', () => {
    // Configura un objeto de película para utilizar en las pruebas
    const pelicula = {
      id: 1,
      titulo: 'Mi Película',
      anio: 2023,
      categoria: 'Acción',
      descripcion: 'Una película emocionante',
      imagenURL: 'URL de la imagen',
    };

    // Renderiza los componentes dentro de MemoryRouter para simular la navegación
    render(
      <MemoryRouter>
        <PeliculasPage />
        <PeliculaDetailPage />
      </MemoryRouter>
    );

    // Encuentra el primer enlace que tenga la clase "btn-ver-detalles" y haz clic en él para navegar a la página de detalles de la película
    const verDetallesButton = screen.getByRole('button', { class: 'btn-ver-detalles' });
  
      if (verDetallesButton) {
        userEvent.click(verDetallesButton);
      } else {
        throw new Error('No se encontró el enlace "Ver Detalles" en el primer elemento de la lista');
      }
    

    // Ahora, debes estar en la página de detalles de la película.
    // Verifica que los detalles de la película se muestren correctamente.
    const titulo = screen.getByTestId('titulo-pelicula');

    const anio = screen.getByTestId('anio-pelicula');

    const categoria = screen.getByTestId('categoria-pelicula');
    const descripcion = screen.getByTestId('descripcion-pelicula');

    // Realiza assertions para verificar que los detalles de la película se muestran correctamente
    expect(titulo).toBeInTheDocument();
    expect(anio).toBeInTheDocument();
    expect(categoria).toBeInTheDocument();
    expect(descripcion).toBeInTheDocument();
  });
});
