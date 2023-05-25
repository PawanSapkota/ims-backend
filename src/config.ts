require('dotenv').config();
export const port=process.env.PORT || 4002;



export const Info= {
    origin: 'http://localhost:4002',
    accessTokenExpiresIn: 15,
    refreshTokenExpiresIn: 60,
    redisCacheExpiresIn: 60,
    // emailFrom: 'contact@codevoweb.com',
  };