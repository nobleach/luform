module.exports = {
    // Secret key for JWT signing and encryption
    'secret': 'VespaMyChild!',
    // Database connection information
    'database': 'mongodb://localhost:27017',
    'port': process.env.PORT || 4000
}
