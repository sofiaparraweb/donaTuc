// chat.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Chat = sequelize.define('Chat', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        }
        // Agrega otras propiedades según tus necesidades
    });

    return Chat;
};
