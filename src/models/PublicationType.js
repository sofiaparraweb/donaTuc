// publicationType.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const PublicationType = sequelize.define('PublicationType', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return PublicationType;
};
