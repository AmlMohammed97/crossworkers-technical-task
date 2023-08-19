import { FunctionComponent, useState, useEffect } from "react";
import "./index.scss";

// Components
import Input from "./components/Input";
import List from "./components/List";

const fakeDataToSearchIn = ["Aml1", "Mohammed1", "Abdullah1", "Aml2", "Mohammed2", "Abdullah2", "Aml3", "Mohammed3", "Abdullah3", "Aml4", "Mohammed4", "Abdullah4"];

interface Task5Props {
  dataToSearchIn?: string[];
}

const Task5: FunctionComponent<Task5Props> = ({ dataToSearchIn = fakeDataToSearchIn }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    if (inputValue) {
      setSearchResults(dataToSearchIn.filter((data) => data.toLowerCase().startsWith(inputValue.toLowerCase())));
    }
  }, [inputValue, dataToSearchIn]);

  return (
    <div id="task-5">
      <Input setInputValue={setInputValue} />
      <br />
      <div className={`search-results-container ${inputValue ? "visible" : "hidden"}`}>
        <List searchResults={searchResults} inputValue={inputValue} />
      </div>
    </div>
  );
};

export default Task5;
