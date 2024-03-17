
import React from 'react';
import ReactDOM from 'react-dom/client';
import Number from './Number';
class App extends React.Component {
    render() {
        let number=[6];
        return (
            <React.Fragment>
                < Number masivi={number} />
            </React.Fragment>
        );
    }
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
