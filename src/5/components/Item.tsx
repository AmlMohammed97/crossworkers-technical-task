import { FunctionComponent } from "react";
import Highlighter from 'react-highlight-words';

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  resultItem: string;
  inputValue: string
}

const Item: FunctionComponent<ItemProps> = ({ resultItem, inputValue }) => {
  return <Highlighter className="result-item" highlightClassName="highlighted-text" searchWords={[inputValue]} textToHighlight={resultItem} />;
};

export default Item;
