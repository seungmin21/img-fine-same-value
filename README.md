express.static 정적 파일 처리로 진행

mysteryBox.jpg는 사용하지 않음
image는 전부 cat-image 폴더에 위치함
image 처리는 image/jpeg로 content-type을 맞춰야함

가상요소를 사용하기 위해서 script태그에서 이미지를 불러오는 것이 아닌
CSS 파일에서 적용

test.html - 배경이미지를 적용하기 위해서 재점검

###프로젝트 구조(임시)
IMG-FINE-SAME-VALUE
│
├── cat-image
│
├── public
│   ├── index.html
│   └── styles.css
│
├── src
│   └── log.json
│
└── app.js