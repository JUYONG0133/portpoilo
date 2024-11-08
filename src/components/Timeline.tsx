import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024.3 - 2024.9"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">네이버클라우드캠프의 클라우드 기반 웹 데브옵스 프로젝트 개발자 과정</h3>
            <h4 className="vertical-timeline-element-subtitle">비트캠프에서 주관하는 교육과정</h4>
            <p>
              NCP 사용법, Devops에 대해 배웠습니다. 뿐만아니라 프론트, 백엔드 기술도 다양하게 경험했습니다.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024 ~"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">학점은행제</h3>
            <h4 className="vertical-timeline-element-subtitle">정보처리과 (3.79 / 4.5)</h4>
            <p>
              학점은행제를 통해 부족한 cs 지식과 프로그래밍에 전반적인 지식을 습득하였습니다.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">양영디지털고등학교 졸업</h3>
            <h4 className="vertical-timeline-element-subtitle">정보통신과</h4>
            <p>
              정보통신을 전공하면서 네트워크 기초에 대한 지식을 습득하였습니다.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;