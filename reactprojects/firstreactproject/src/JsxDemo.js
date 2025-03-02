import React from "react";

function JsxDemo()
{
    // return React.createElement("div",{},"Hello fro JSX")
    // return React.createElement("h1",{},"Hello from JSX");

    return React.createElement("div",{},
        React.createElement("h1",{},"Hello h1 from Div")
    );


}

export default JsxDemo;