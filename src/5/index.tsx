import { FunctionComponent, useState, useEffect } from "react";
import "./index.scss";

// Components
import Input from "./components/Input";
import List from "./components/List";

const fakeDataToSearchIn :  ResultItem[] = [
  {
    id: 1,
    text: "Aml"
  },
  {
    id: 2,
    text: "Mohammed"
  },
  {
    id: 3,
    text: "Abdullah"
  },
  {
    id: 4,
    text: "Mohammed"
  },
  {
    id: 5,
    text: "Ali"
  },
  {
    id: 6,
    text: "Gabr"
  }
];

interface ResultItem {
  id: string | number;
  text: string;
}
interface Task5Props {
  dataToSearchIn?: ResultItem[];
  deleteListItem?: (id: string | number) => void;
}

const Task5: FunctionComponent<Task5Props> = ({ dataToSearchIn = fakeDataToSearchIn, deleteListItem = () => {} }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<ResultItem[]>([]);

  useEffect(() => {
    if (inputValue) {
      setSearchResults(dataToSearchIn.filter((data: ResultItem) => data.text.toLowerCase().startsWith(inputValue.toLowerCase())));
    }
  }, [inputValue, dataToSearchIn]);

  return (
    <div id="task-5">
      <Input setInputValue={setInputValue} />
      <br />
      <div className={`search-results-container ${inputValue ? "visible" : "hidden"}`}>
        <List deleteListItem={deleteListItem} searchResults={searchResults} inputValue={inputValue} />
      </div>
    </div>
  );
};

export default Task5;
