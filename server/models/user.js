const bcrypt = require('bcrypt-nodejs');
const uuid = require('node-uuid');

//================================
// User Schema
//================================

module.exports = function(sequelize, Sequelize) {
    return sequelize.define('user', {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'firstname'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'lastname'
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type:   Sequelize.ENUM,
            values: ['pilgrim', 'sponsor', 'pastor', 'registar'],
            defaultValue: 'pilgrim'
        }
    }, {
        freezeTableName: true, // Model tableName will be the same as the model name
        classMethods: {
            generateHash: function(password) {
                const SALT_FACTOR = 8;
                return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_FACTOR), null);
            },

            generateId: function() {
                return uuid.v4();
            }
        },

        instanceMethods: {
            comparePassword: function(password) {
                return bcrypt.compareSync(password, this.password);
            }
        }
    });
};
