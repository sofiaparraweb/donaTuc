// donation.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Donation = sequelize.define('Donation', {
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
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'canceled'),
            defaultValue: 'pending'
        },
        // Agrega otras propiedades según tus necesidades
    });
    
    return Donation;
};
