export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'Bum',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [
            { src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726' },
            { src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg' },
            { src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg' },
        ],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '얼른 사고싶어요~',
        }],
    }],
    imagePaths: [], // 이미지 업로드할때 이미지경로들 저장할곳
    addPostLoading: false, // 게시글 추가
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// action은 원래 객체(동적할당은 action creater 함수를 만들어서)
export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});
export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});
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
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: true,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addCommenttLoading: false,
                addCommentDone: true,
            };
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCoomentError: true,
            };
        default:
            return state;
    }
};

export default reducer;
