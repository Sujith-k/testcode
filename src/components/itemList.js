import React, {Component} from 'react';
import { connect } from 'react-redux'
import Item from './item'
import { getVideos } from '../actions/actions'

class ImageList extends Component {
    constructor(props){
        super(props);
        this.list = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e) {
        const currentPage = this.props.currentPage;
        if( currentPage <= 2 && window.scrollY + window.innerHeight > this.list.current.scrollHeight - (parseInt(this.list.current.scrollHeight/3)) ) {
            this.props.dispatch(getVideos(currentPage+1));
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }

    render(){
        let videos = this.props.videos;
        return <div className="container" ref={this.list}>
            {
                videos && videos.map((video, index) => {
                    return <Item video={video} key={index}/>
                })
            }
        </div>
    }
}

const searchVideos = (videos, searchTerm) => {
    if(searchTerm && videos){
        return videos.filter( video => video.name.toUpperCase().includes(searchTerm.toUpperCase()));
    } else {
        return videos;
    }
}

const mapStateToProps = (state) => ({
    videos: searchVideos(state.videos, state.searchTerm),
    currentPage: state.currentPage
})

export default connect(mapStateToProps)(ImageList);