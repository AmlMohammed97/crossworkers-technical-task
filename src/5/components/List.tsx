import { FunctionComponent } from "react";

// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */
interface ResultItem {
  id: string | number;
  text: string;
}
interface ListProps {
  searchResults: ResultItem[];
  inputValue: string;
  deleteListItem: (id: string | number) => void;
}

const List: FunctionComponent<ListProps> = ({ searchResults, inputValue, deleteListItem }) => {
  return (
    <div className="search-results">
      {
        searchResults.length
          ? searchResults.map((item) => <Item key={item.id} inputValue={inputValue} resultItem={item} deleteListItem={() => deleteListItem(item.id)}/>)
          : <div className="no-results-message">No results found</div>
      }
    </div>
  );
};

export default List;
