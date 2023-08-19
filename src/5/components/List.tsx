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

interface ListProps {
  searchResults: string[];
  inputValue: string;
}


const List: FunctionComponent<ListProps> = ({ searchResults, inputValue }) => {
  return (
    <div className="search-results">
      {
        searchResults.length
          ? searchResults.map((item) => <Item inputValue={inputValue} resultItem={item} />)
          : <div className="no-results-message">No results found</div>
      }
    </div>
  );
};

export default List;
