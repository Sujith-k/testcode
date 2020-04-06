import React, {Component} from 'react';
import { connect } from 'react-redux';
import { doSearch } from '../actions/actions'

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.dispatch(doSearch(event.target.value));
    }

    render() {
        return <div className="headerContainer">
            <span className="title">Romantic Comedy</span>
            <div className="searchContainer">
                <input className="searchTextBox" type="text" placeholder="Search title" onChange={(e)=>this.handleChange(e)}/>
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm
})

export default connect(mapStateToProps)(Header);