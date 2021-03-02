import React, { useCallback, useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE, ADD_POST_REQUEST } from '../reducers/post';
import useInput from '../hooks/useInput';
import { backUrl } from '../config/config';

const PostForm = () => {
    const { imagePaths, addPostDone } = useSelector((state) => state.post);
    const [text, onChangeText, setText] = useInput('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (addPostDone) {
            setText('');
        }
    }, [addPostDone]);
    const onSubmit = useCallback(() => {
        if (!text || !text.trim()) {
            return alert('게시글을 작성하세요.');
        }
        const formData = new FormData();
        imagePaths.forEach((p) => {
            formData.append('image', p); // req.body.image
        });
        formData.append('content', text); // req.body.content
        return dispatch({
            type: ADD_POST_REQUEST,
            data: formData,
        });
    }, [text, imagePaths]);

    const imageInput = useRef();
    const onClickImageUpload = useCallback(() => {
        imageInput.current.click();
    }, [imageInput.current]);
    const onChangeImages = useCallback((e) => {
        console.log('images', e.target.files); // e.tartget.files안에 선택한 이미지가 있음
        const imageFormData = new FormData(); // FormData: multipart형식으로 서버에전송
        [].forEach.call(e.target.files, (f) => {
            imageFormData.append('image', f); // 'image': back이랑 맞춰야되는 key값?
        });
        dispatch({
            type: UPLOAD_IMAGES_REQUEST,
            data: imageFormData,
        });
    });
    const onRemoveImage = useCallback((index) => () => {
        dispatch({
            type: REMOVE_IMAGE,
            data: index,
        });
    }, []);
    return (
        <Form
        style={{ margin: '10px 0 20px' }}
        encType="multipart/form-data"
        onFinish={onSubmit}
        >
            <Input.TextArea
            value={text}
            onChange={onChangeText}
            maxLength={140}
            placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
                <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
                <Button onClick={onClickImageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v, i) => (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={`${backUrl}/${v}`} style={{ width: '200px' }} alt={v} />
                        <div><Button onClick={onRemoveImage(i)}>제거</Button></div>
                    </div>
                ))}
            </div>
        </Form>
    );
};

export default PostForm;
