const express = require('express');
const cors = require('cors'); // 서로다른 도메인으로 리소스가 요청될경우
const session = require('express-session');// session관리
const passport = require('passport');  // 로그인세션처리
const cookieParser = require('cookie-parser'); //쿠키쉽게추출
const morgan = require('morgan'); // 프론트에서 보낸 요청들 로그
const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts')
const userRouter = require('./routes/user');
const hashtagRouter = require('./routes/hashtag');
const db = require('./models');
const path = require('path');
const passportConfig = require('./passport');
const dotenv = require('dotenv'); // 비밀관리

dotenv.config();
const app = express();
db.sequelize.sync()
    .then(()=>{
        console.log('db연결 성공');
    })
    .catch(console.error);
passportConfig();

app.use(morgan('dev'));
//access control allow
app.use(cors({
    origin: true, //origin: true로 설정하면 보낸곳의 주소가 자동으로들어가 편함
    credentials: true, //쿠키전달시 true
}));
// '/' = 'http://localhost:3065'
app.use('/', express.static(path.join(__dirname, 'uploads')));//운영체제에 맞게 경로
//프론트에서 받은 data를 req.body안에 넣어줌
app.use(express.json()); //front에서 json형식으로 data를 보냈을때 해당data 처리
app.use(express.urlencoded({ extended: true }));//front에서 form submit형식 처리
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);
app.use('/hashtag', hashtagRouter);

// 이쯤 에러처리미들웨어 next(asdasda)가 일로옴

app.listen(3065, () => {
    console.log('서버 실행 중!!');
});
