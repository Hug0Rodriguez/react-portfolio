import React, { Component } from "react";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
    1: {
        title: "Project Beta2",
        image: projectOne,
        description: (
            <>
                <p>Dont bother checking this just yet</p>
            </>
        ),
        github: "https://github.com",
        demo: "https://netlify.com",
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
