import React from 'react'

const onError = (e) => {
    e.target.src = "/assets/images/placeholder_for_missing_posters.png";
}

const Item = (props) => {
    return <div className="imageContainer">
        <img className="poster" src={`/assets/images/${props.video['poster-image']}`} onError={onError}></img>
        <div>{props.video.name}</div>
</div>
}

export default Item;