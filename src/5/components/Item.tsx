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

interface ResultItem {
  id: string | number;
  text: string;
}
interface ItemProps {
  resultItem: ResultItem;
  inputValue: string;
  deleteListItem: () => void;
}

const Item: FunctionComponent<ItemProps> = ({ resultItem, inputValue, deleteListItem }) => {
  return (
    <div className="result-item">
      <Highlighter highlightClassName="highlighted-text" searchWords={[inputValue]} textToHighlight={resultItem.text} />
      <span className="delete-button" onClick={deleteListItem}>x</span>
    </div>
  );
};

export default Item;
