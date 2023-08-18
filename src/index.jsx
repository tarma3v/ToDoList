import * as React from "react";
import * as ReactDOM from "react-dom";

import { ToDo } from "./ToDo";
import { ToDoStore } from "./ToDoStore";

class App extends React.Component {
    toDoStore = new ToDoStore();
    
    render() {
        return <ToDo {...this.toDoStore.getItem("test")} />
    }
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);