const bcrypt = require('bcrypt-nodejs');
const Sequelize = require('sequelize');
const uuid = require('node-uuid');

// Database connection
var sequelize = new Sequelize('luform', 'luform', 'oi2Vespa!', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

//================================
// User Schema
//================================
const User = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: Sequelize.STRING,
        field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    },
    lastName: {
        type: Sequelize.STRING,
        field: 'last_name'
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
        values: ['Member', 'Client', 'Owner', 'Admin'],
        defaultValue: 'Member'
    }
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    classMethods: {
        generateHash: function(password) {
            const SALT_FACTOR = 8;
            return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_FACTOR), null);
        },

        generatedId: function() {
            return uuid.v4();
        }
    },
    instanceMethods: {
        comparePassword: function(password) {
            return bcrypt.compareSync(password, this.password);
        }
    }
});
// User.sync({force: true});

// Pre-save of user to database, hash password if password is modified or new
// UserSchema.pre('save', function(next) {
//     const user = this;
//     const SALT_FACTOR = 5;
//
//     if (!user.isModified('password')) return next();
//
//     bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
//         if (err) return next(err);
//
//         bcrypt.hash(user.password, salt, null, function(err, hash) {
//             if (err) return next(err);
//             user.password = hash;
//             next();
//         });
//     });
// });
//
// // Method to compare password for login
// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//
//         cb(null, isMatch);
//     });
// }

module.exports = User;
