import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Pokemon';

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
        screen.debug();
    });

    test('debe de mostrar items cuando se cargan las imagenes userFetchGif', () => {
        const gifs = [
            {
                id: '1234',
                title: 'Pokemon',
                url: 'https://dominio.com/imagen.gif'
            },
            {
                id: '987',
                title: 'Vegeta',
                url: 'https://dominio.com/imagen-vegeta.gif'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    });
});