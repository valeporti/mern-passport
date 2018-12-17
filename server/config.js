require('dotenv').config();

const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017',
  port: process.env.PORT || 8000,
  'entity': 'auths',
  'service': 'auths',
  'usernameField': 'username',
  'passwordField': 'password',
};

export default config;
