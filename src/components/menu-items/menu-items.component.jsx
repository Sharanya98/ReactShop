import React from "react";
import './menu-items.styles.scss';

const MenuItem = ( {title,image,size} ) => (
    <div className={`${size} menu-items`}>
        <div className="background-img"
        style={{
            backgroundImage: `url(${image})`
            }}>

        </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>

);

export default MenuItem