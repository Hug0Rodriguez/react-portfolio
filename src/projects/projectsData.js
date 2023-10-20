import React, { Component } from "react";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1: {
        title: "LangoTango",
        image: projectOne,
        description: (
            <>
                <p>
                    Full Stack language translation chat app using Chatgpt api
                </p>
            </>
        ),
        github: "https://gitlab.com/languini-league/languini-project",
        demo: "https://languini-league.gitlab.io/languini-project/",
    },
    2: {
        title: "Project Alpha Apr",
        image: projectTwo,
        description: (
            <>
                <p>Dont bother checking this just yet</p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
    3: {
        title: "Langotango",
        image: projectThree,
        description: (
            <>
                <p>Dont bother checking this just yet</p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
    },
};

export default projects;
