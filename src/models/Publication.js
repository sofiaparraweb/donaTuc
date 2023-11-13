// publication.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Publication = sequelize.define('Publication', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
        // Agrega otras propiedades según tus necesidades
    });

    return Publication;
};
