import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    async function f() {
        await console.log(`async await`);
    }
    f()
    
    return (
        <p>Hello</p>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));