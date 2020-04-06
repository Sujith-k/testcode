import * as types from '../constants/constants';
import { getVideosApi } from '../api/api'

export const getVideosAction = videos => ({
    type: types.RECIEVED_VIDEOS,
    videos
})

export const getVideos = (pageNum) => dispatch => {
    getVideosApi(pageNum).then(
        videos => dispatch(getVideosAction({videos, pageNum}))
    )
}

export const doSearch = searchTerm => ({
    type: types.DO_SEARCH,
    searchTerm
})