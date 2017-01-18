const uuid = require('node-uuid');

//================================
// Pastorinfo Schema
//================================

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('pastorinfo', {
        fullname: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        churchname: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        city: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        state: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        zip: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        goodcandidateexplanation: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        signed: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    }, {
        tableName: 'pastorinfo',
        classMethods: {
            generateId: function() {
                return uuid.v4();
            }
        }
    });
};
