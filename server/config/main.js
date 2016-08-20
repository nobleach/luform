module.exports = {
    // Secret key for JWT signing and encryption
    'secret': 'VespaMyChild!',
    // Database connection information
    'dbName': 'luform',
    'dbUser': 'luform',
    'dbPass': 'oi2Vespa!',
    'dbInfo': {
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    },
    // Express server port
    'port': process.env.PORT || 4000
}
