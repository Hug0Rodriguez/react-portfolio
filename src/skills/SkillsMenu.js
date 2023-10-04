import React, { Component } from "react";
import className from "classnames";
import "../styles/skillsMenu.css";
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";

export default class SkillsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMenuItem: 1,
        };
    }

    handleMenuItemClick = (menuItem) => {
        this.setState({
            activeMenuItem: menuItem,
        });
    };

    renderContent(skills) {
        return skills.map((skill, index) => (
            <div
                key={index}
                className={`skill-sub-container-${this.state.activeMenuIten}`}
            >
                {[...Array(6)].map((_,i) => (
                    <div
                        key={i}
                        className={`level-point ${i < skill.level ? "filled" : "unfilled"}`}
                    />
                ))}
            </div>
        ))
    }
