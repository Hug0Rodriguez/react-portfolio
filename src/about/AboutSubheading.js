import React, { Component } from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
    const subContainerClass = `sub-containe-${menuItem}`;

    return (
        <div
            className={classNames(subContainerClass, {
                "active-subheading": active,
            })}
        >
            <h3 onClick={onClick}>{title}</h3>
            <div className="p-container">{content}</div>
        </div>
    );
};

export default AboutSubheading;
