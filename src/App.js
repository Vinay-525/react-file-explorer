import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { explorer } from "./data/folderData";
import Folder from "./components/Folder";

function App() {
  const [explorerData, setExplorerData] = useState([]);
  const createExplorer = useCallback((folderData, finalObj) => {
    for (let i = 0; i < folderData.length; i++) {
      if (folderData[i].parent) {
        let parentObj = folderData[folderData[i].parent - 1];
        if (parentObj["items"]) {
          parentObj["items"].push(folderData[i]);
        } else {
          parentObj["items"] = [folderData[i]];
        }
      } else {
        finalObj.push(folderData[i]);
      }
    }
  }, []);

  useEffect(() => {
    let tempExplorerData = explorer.map((entry) => {
      return { ...entry };
    });
    let finalExplorerObj = { name: "root", isDir: true, items: [] };
    createExplorer(tempExplorerData, finalExplorerObj.items);
    setExplorerData(finalExplorerObj);
  }, [createExplorer]);

  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
