import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Shantiniketan Jubilee School, 
            Shantipuri, Rahman Colony, Motihari, East Champaran, Bihar, Pin-845401.
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Indian Institute Of Information Technology, Kalyani
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023 - 2024"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            IEEE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            IIIT Kalyani 
          </h4>
          <p>Currently I am Vice Chair in IEEE Student Branch</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
