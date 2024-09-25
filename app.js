import React from "react";
import ReactDOM from "react-dom";
const div = React.createElement("div", {id: "parent"}, [
    React.createElement("div", "", [
      React.createElement("h1", "", "I am an h1 tag"),
      React.createElement("h2", "", "I am an h2 tag")
    ]),
    React.createElement("div","", [
        React.createElement("h1", "", " I am an hh1 tag"),
        React.createElement("h2", "", "I am an hh2 tag")
    ])
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);

