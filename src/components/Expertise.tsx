import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import {faJava} from "@fortawesome/free-brands-svg-icons/faJava";

const labelsFirst = [
    "React",
    "React Query",
    "Tailwind",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Zustand",
    "axios",
    "ajax",
];

const labelsSecond = [
    "Git",
    "Docker",
    "NCP",
    "Oraclecloud",
    "Linux",
    "MySQL",
    "NEO4j",
    "MongoDB",
];

const labelsThird = [
    "java jdk 17",
    "JPA",
    "Spring Boot",
    "Spring Cloud",
    "Spring framework",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Front-end Development</h3>
                    <p>저는 HTML5, CSS의 기초지식을 쌓고 React와 Tailwind로 프로젝트 작업을 진행하였습니다. <br/>상태관리로는 Zustand, React Query를 사용하여 프론트
                        개발에 다양한 경험을 하였습니다.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label}/>
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Back-end Development</h3>
                    <p>Spring Cloud 기반의 마이크로서비스 아키텍처 설계 및 구현 경험이 있습니다.<br/> Redis, Neo4j, MongoDB, MySQL 등 다양한 데이터베이스와 Spring Data JPA를 이용한 데이터 관리</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label}/>
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Database</h3>
                    <p>Github webhook을 이용해 jenkins 자동 빌드 스크립트를 작성하여 배포한 경험이 있습니다. <br/>관계형 DB와 NOSQL 모두 사용해보며 적절한 활용처에 대해 공부하였습니다.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label}/>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;