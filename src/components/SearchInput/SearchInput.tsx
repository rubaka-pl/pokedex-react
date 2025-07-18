import { useEffect, useState } from 'react';
import type { SearchInputProps } from '../../types/PokemonSchema';
import './SearchInput.css';

const SearchInput = ({ onInputChange }: SearchInputProps) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('pokemonSearch');
    if (saved) {
      setInputValue(saved);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    localStorage.setItem('pokemonSearch', value);
    onInputChange(value);
  };

  return (
    <input
      onChange={handleChange}
      id="search-input"
      value={inputValue}
      type="search"
      className="search"
      placeholder="Search"
    />
  );
};

export default SearchInput;
