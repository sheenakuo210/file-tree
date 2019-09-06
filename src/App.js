import React, { Component } from 'react';
import files from './files.json'
import FileNode from './FileNode'
import './style.css'

class App extends Component {
    render() {
        return (
            <FileNode {...files}/>
        );
    }
}

export default App;