import {
    RECIEVED_VIDEOS,
    DO_SEARCH
} from '../constants/constants'

const initialState = {
    currentPage: 1,
    searchTerm: ''
};

 const videos = (state = initialState, action) => {
    switch(action.type){
        case RECIEVED_VIDEOS: 
            const videos = action.videos.videos;
            const pageNum = action.videos.pageNum;
            return {
                ...state,
                currentPage: pageNum,
                videos: state.videos?state.videos.concat(videos):videos
            }
        case DO_SEARCH:
            return{
                ...state,
                searchTerm: action.searchTerm
            }
        default:
            return state;
    }
}

export default videos;