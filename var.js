if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
export const MONGODB_USERNAME = process.env.MONGODB_USERNAME;
export const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
export const DATA_BASE = process.env.DATA_BASE;

