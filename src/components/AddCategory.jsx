import { useState } from "react";
import propTypes from "prop-types";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => { 
        event.preventDefault();
        const newInputValue = inputValue;
        if (newInputValue.length <= 1) return;

        // setCategories((categories) => [...categories, inputValue])
        onNewCategory( newInputValue.trim().toLowerCase() )
        setInputValue('');
     };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: propTypes.func.isRequired,
}