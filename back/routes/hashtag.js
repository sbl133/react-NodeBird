const express = require('express');
const { Post, Hashtag, Image, Comment, User } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

router.get('/:hashtag', async (req, res, next) => { //GET /hashtag/hashtagId
    try {
        const where = {};
        if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
            // where.id에 lastId보다 작은것들을 넣는 식
            where.id = { [Op.lt]: parseInt(req.query.lastId, 10) } 
        }
        const posts = await Post.findAll({
            where,
            limit: 10, // limit개 가져와라
            order: [
                ['createdAt', 'DESC'], // 게시물 생성일의 내림차순
                [Comment, 'createdAt', 'DESC'] //게시물의 댓글들 생성일의 내림차순
            ], //게시일기준 최신거부터
            //offset: 10, //offset에서 시작 ex) 11~20
            include: [{
                model: Hashtag,
                where: { name: decodeURIComponent(req.params.hashtag) },
            },{
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                },],
            }, {
                model: User,
                through: 'Like',
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }]
            }],
        });
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});
module.exports = router;