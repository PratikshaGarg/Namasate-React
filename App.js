import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Heading 1"),
    React.createElement("h2", {}, "Heading 2"),
  ]),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);
