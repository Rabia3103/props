import React from "react";
import ColorBlock from "./components/ColorBlock";
import ActionButton from "./components/ActionButton";
import ImageWithCaption from "./components/ImageWithCaption";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container">
      <h1>React Exercises</h1>
      
      <div className="component-section">
        <h2>ColorBlock :</h2>
        <div className="color-blocks">
          <ColorBlock colors="blue" />
          <ColorBlock colors="red" />
          <ColorBlock colors="green" />
          <ColorBlock />
        </div>
      </div>

      <div className="component-section">
        <h2>ActionButton :</h2>
        <ActionButton label="Click me" onAction={handleClick} />
      </div>

      <div className="component-section">
        <h2>ImageWithCaption :</h2>
        <ImageWithCaption 
          src="https://images.pexels.com/photos/1157255/pexels-photo-1157255.jpeg?auto=compress&cs=tinysrgb&w=600" 
          caption="Airplane Image"
        />
      </div>
    </div>
  );
};

export default App;
