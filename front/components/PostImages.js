import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom'; // 폴더만 지정해주면 해당폴더의 index가 import default값임

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);
    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []);
    if (images.length === 1) {
        return (
            <>
                {/* role, alt : 시각장애인을 위한 기능 */}
                <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        );
    }
    if (images === 2) {
        return (
            <>
                <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
                <img role="presentation" style={{ width: '50%', display: 'inline-block' }} src={`http://localhost:3065/${images[1].src}`} alt={images[1].src} onClick={onZoom} />
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            </>
        );
    }
    return (
        <>
        <div>
            <img role="presentation" style={{ width: '50%' }} src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} onClick={onZoom} />
            <div
            role="presentation"
            style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
            onClick={onZoom}
            >
                <PlusOutlined />
                <br />
                {images.length - 1}개의 사진 더보기
            </div>
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    );
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default PostImages;
