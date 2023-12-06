// role.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        type: {
            type: DataTypes.ENUM('admin', 'user', 'foundation'),
            allowNull: false
        }
    });

    return Role;
};
