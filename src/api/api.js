import itemList from "../components/itemList"

export const getVideosApi = (pageNumber) => {
    return fetch(`/assets/data/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`)
        .then(data => data.json())
        .then( data => data.page['content-items'].content) //Assuming we have a solid contract with API for the structure.
}