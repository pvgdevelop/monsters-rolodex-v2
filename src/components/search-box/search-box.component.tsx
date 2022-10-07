import { ChangeEvent } from 'react';

type SearchBoxProps = {
  name: string;
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ name, placeholder, className, onChangeHandler }: SearchBoxProps) => {
  return (
    <input
      type='search'
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
      name={name}
    />
  );
};

export default SearchBox;
