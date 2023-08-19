import { FunctionComponent } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  setInputValue: (inputValue: string) => void;
}

const Input: FunctionComponent<InputProps> = ({ setInputValue }) => {
  return (
    <div className="search-container">
      <label>Search</label>
      <input
        name="search-input"
        onChange={(event) => setInputValue(event.currentTarget.value)}
        placeholder="Enter input to search for..."
      />
    </div>
  );
};

export default Input;
