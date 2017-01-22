const uuid = require('uuid/v4');

//================================
// Pilgriminfo Schema
//================================

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('pilgriminfo', {
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lasname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        aptsuite: {
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
        bestcalltime: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        over18: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        occupation: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        tagname: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        maritalstatus: {
            type:   DataTypes.ENUM,
            values: ['single', 'married', 'separated', 'divorced', 'widowed'],
            defaultValue: 'married'
        },
        marriagepartner: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        homechurch: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        homechurchcity: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        homechurchpastor: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        homechurchattendance: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        specialneeds: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        reasontoattend: {
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
        tableName: 'pilgriminfo',
        classMethods: {
            generateId: function() {
                return uuid.v4();
            }
        }
    });
};
