import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="profile">
                    <span className="letter">{props.author[0]}</span>
                </div>
                <div className="card-title-group">
                    <h5 className="card-title">{props.title}</h5>
                    <div className="card-date">{props.date}</div>
                </div>
            </div>
            {/* <img className="card-image" src="" alt="Logo" />
            <div className="card-text">{props.description}</div> */}
            {/* <div className="card-like-bar">
                {props.liked ? (
                    <img className="card-like-icon" src={icon} alt="Logo" />
                ) : (
                    <img
                        className="card-like-icon"
                        src={heartOutline}
                        alt="Logo"
                    />
                )}
                <div className="like-text">
                    <b>{props.likeCount}</b> kişi bu tarifi beğendi.
                </div>
            </div> */}
        </div>
    );
};

export default Card;
