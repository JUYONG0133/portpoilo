import React from "react";
import first from '../assets/images/2n1.png';
import semi from '../assets/images/semi.png';
import final from '../assets/images/final.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <p>현재 NCP를 모두 반납한 상태입니다. 배포주소로는 접근이 불가능합니다.</p>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/1ceOut" target="_blank" rel="noreferrer"><img src={final} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/1ceOut" target="_blank" rel="noreferrer"><h2>냉장고의 모든 비밀(냉모밀)</h2></a>
                <a href="https://special-beaufort-5a0.notion.site/b3dd2cfe93034b7b846f4ff3cef0ba5c" target="_blank" rel="noreferrer"><h3>수행업무 ↗</h3></a>
                <p>Spring Cloud 을 활용한 마이크로서비스 아키텍처(MSA)기반의 냉장고 관리앱</p>
            </div>
            <div className="project">
                <a href="https://github.com/themerous/PlanBit_BItcamp701" target="_blank" rel="noreferrer"><img src={semi} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/themerous/PlanBit_BItcamp701" target="_blank" rel="noreferrer"><h2>BIT TRIP</h2></a>
                <a href="https://special-beaufort-5a0.notion.site/3286b74da335400f9fd26c0e079e6431" target="_blank" rel="noreferrer"><h3>수행업무 ↗</h3></a>
                <p>BIT TRIP 이라는 제목으로 공동 플래너를 작성하고 그 플래너를 활용하여 여행후기를 블로그 형식으로 작성하는 사이트</p>
            </div>
            <div className="project">
                <a href="https://github.com/LBang98/FootBallProject" target="_blank" rel="noreferrer"><img src={first} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/LBang98/FootBallProject" target="_blank" rel="noreferrer"><h2>FootBallProject</h2></a>
                <a href="https://special-beaufort-5a0.notion.site/d33cf83b6b444a158677fb97308e4a9e" target="_blank" rel="noreferrer"><h3>수행업무 ↗</h3></a>
                <p>FootBallProject는 축구 팬들을 위한 종합 커뮤니티 플랫폼으로, 유럽 주요 리그에 대한 다양한 정보를 제공합니다.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;