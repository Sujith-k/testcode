import React, {Component} from 'react'
import ItemList from './components/itemList';
import Header from './components/header';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Header/>
            <ItemList/>
        </div>
    }
}