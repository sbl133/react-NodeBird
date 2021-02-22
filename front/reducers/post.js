
export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'Bum'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [
            { src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'},
            { src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'},
            { src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'}
        ],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '얼른 사고싶어요~',
        }]
    }],
    imagePaths: [], //이미지 업로드할때 이미지경로들 저장할곳
    postAdded: false,   //게시글 추가가 완료됬을떄 true
}
const ADD_POST = 'ADD_POST';
//action은 원래 객체(동적할당은 action creater함수를 만들어서)
export const addPost={
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    content: '더미',
    User: {
        id: 1,
        nickname: 'Bum',
    },
    Images: [],
    Comments: [],
};
const reducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts: [dummyPost,...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
}

export default reducer;