const config = {
    development: {
        port: process.env.PORT || 3019,
        mongodb: process.env.MONGODB_URI || 'mongodb://localhost:27017/Customer'
    },
    test: {
        port: 3019, // or you can use 3001 if you prefer
        mongodb: 'mongodb://localhost:27017/Customer_test'
    },
    production: {
        port: process.env.PORT || 3019,
        mongodb: process.env.MONGODB_URI || 'mongodb://localhost:27017/Customer'
    }
};

module.exports = config[process.env.NODE_ENV || 'development'];