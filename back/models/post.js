const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Post extends Model {
  static init(sequelize) {
    return super.init({
      // id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      // RetweetId
    }, {
      modelName: 'Post',
      tableName: 'posts',
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // 이모티콘 저장
      sequelize,
    });
  }
  static associate(db) {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // post.addHashtags
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.hasMany(db.Image); // post.addImages, post.getImages
    db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' }) // post.addLikers, post.removeLikers
    db.Post.belongsTo(db.Post, { as: 'Retweet' }); // post.addRetweet
  }
};

// module.exports = (sequelize, DataTypes) => {
//     const Post = sequelize.define('Post', { // MySQL에는 users테이블 생성
//         // id가 기본적으로 들어있다.
//         content: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//     },{
//         charset: 'utf8mb4',
//         collate: 'utf8mb4_general_ci', //게시글에서 이모티콘사용 가능하게 mb4추가
//     });
//     Post.associate = (db) => {
//         db.Post.belongsTo(db.User);
//         db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
//         db.Post.hasMany(db.Comment); // post.addComments
//         db.Post.hasMany(db.Image); //post.addImages
//         db.Post.belongsToMany(db.User, { through: 'Like' , as: 'Likers' });
//         //  post.addLikers, post.removeLikers
//         db.Post.belongsTo(db.Post, { as: 'Retweet' }); // post.addRetweet
//         // add~ remove~ get~ set(수정)~ 등이 내장되어있다.
//     };
//     return Post;
// }