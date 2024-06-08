import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 

    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
     });

    test('debe de agregar una nueva categoria si no esta repetida', () => {

        const newCategory = 'pokemon';

        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value: newCategory}});
        fireEvent.submit(form);
        expect(screen.getByText(newCategory)).toBeTruthy();

     });

     test('debe no agregar la categoría si esta repetida', () => { 
        render(<GifExpertApp/>);
        const initialCategory = screen.getByRole('heading', {level:3}).textContent;
        
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value: initialCategory}});
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);
      });

 });