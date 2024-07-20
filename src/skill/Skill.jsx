import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode, FaDatabase, FaLanguage } from 'react-icons/fa';

function Skill() {
    return (
        <div className='skill'>
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2023-present"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<FaLaptopCode />}
                >
                    <h3 className="vertical-timeline-element-title">
                        <span className="text-lg">ReactJS, Redux, HTML, CSS, React Native, Bootstrap, TailwindCSS, StyledComponents</span>
                    </h3>
                    <p>Front End</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2024-present"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<FaDatabase />}
                >
                    <h3 className="vertical-timeline-element-title">
                        <span className="text-lg">NodeJS, ExpressJS, MySQL, MongoDB</span>
                    </h3>
                    <p>Back-End</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2021-present"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<FaLanguage />}
                >
                    <h3 className="vertical-timeline-element-title">
                        <span className="text-lg">JavaScript, HTML, CSS, Python, C#, C, C++, MATLAB</span>
                    </h3>
                    <p>Language</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Skill;
