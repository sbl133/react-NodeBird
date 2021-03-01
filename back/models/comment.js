const DataTypes = require('sequelize');
const { Model } = DataTypes;
module.exports = class Comment extends Model {
    static init(sequelize) {
        return super.init({
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            // id 기본적으로 할당
        }, {
            modelName: 'Comment',
            tableName: 'comments', // modelName의 소문자 복수형이 디폴트
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            sequelize,
        });
    }
    static associate(db) {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    }
};

// module.exports = (sequelize, DataTypes) => {
//     const Comment = sequelize.define('Comment', { // MySQL에는 users테이블 생성
//         // id가 기본적으로 들어있다.
//         content: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },
//     },{
//         charset: 'utf8mb4',
//         collate: 'utf8mb4_general_ci', 
//     });
//     Comment.associate = (db) => {
//         db.Comment.belongsTo(db.User);
//         db.Comment.belongsTo(db.Post);
//     };
//     return Comment;
// }