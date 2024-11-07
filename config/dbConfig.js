require('dotenv').config();

const dbConfig = {
    uri: process.env.MONGODB_URI,
};

module.exports = dbConfig;
