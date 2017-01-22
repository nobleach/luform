const uuid = require('uuid/v4');

//================================
// Sponsorinfo Schema
//================================

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('sponsorinfo', {
        fullname: {
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
        email: {
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
        applicantfullname: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        baptizedlutheran: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        hadcursillospousediscussion: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        bothspousesattending: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        singlespouseexplanation: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        cursilloattitude: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        plantosupportapplicant: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        otherapplicantinfo: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        goodcandidatereason: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        applicantexpectations: {
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
        tableName: 'sponsorinfo',
        classMethods: {
            generateId: function() {
                return uuid.v4();
            }
        }
    });
};
