import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Apple", "Banana", "Carrot", "DragonFruit"],
      newItem: "",
    };
  }
  addItem = addedItem => {
    let updatedItem = this.state.items;
    updatedItem.push(addedItem);
    this.setState({ items: updatedItem });
  };

  removeItem = item => {
    let updatedItem = this.state.items;
    updatedItem = updatedItem.filter(element => {
      return element !== item;
    });
    this.setState({ items: updatedItem });
  };
  render() {
    return (
      <div>
        <p>TO DO APP</p>
        <input onChange={e => this.setState({ newItem: e.target.value })} />
        <button
          onClick={() => {
            this.addItem(this.state.newItem);
          }}
        >
          ADD
        </button>
        {this.state.items.map(el => (
          <div class="to-do--panel">
            <button onClick={() => this.removeItem(el)} class="x-button">
              X
            </button>
            <p class="todoItem">{el}</p>
          </div>
        ))}
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
