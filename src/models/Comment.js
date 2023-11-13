// comment.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Comment;
};
