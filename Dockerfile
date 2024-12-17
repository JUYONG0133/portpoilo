# 1. Node.js 이미지 선택 (버전에 따라 최신 LTS 버전 권장)
FROM node:16

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 패키지 파일 복사 및 패키지 설치
COPY package*.json ./
RUN npm install

# 4. 애플리케이션 소스 복사
COPY . .

# 5. 앱이 사용할 포트 설정 (예: 3000)
EXPOSE 3000

# 6. 애플리케이션 시작 명령
CMD ["npm", "start"]