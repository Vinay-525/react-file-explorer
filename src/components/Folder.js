import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.length === 0) return null;

  const handleToggle = () => {
    setExpand((currentVal) => !currentVal);
  };

  if (explorer.isDir) {
    return (
      <div>
        <div onClick={handleToggle} className="folder">
          <span>
            {expand ? "-" : "+"} 🗂️ {explorer.name}
          </span>
        </div>

        <div className={expand ? "file" : "hide"}>
          {explorer?.items?.map((exp) => {
            return <Folder key={exp.id} explorer={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span>📄 {explorer.name}</span>;
  }
};

export default Folder;
