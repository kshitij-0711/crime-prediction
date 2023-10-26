const jwt = require('jsonwebtoken');
const { Response } = require('express');
const SECRET = 'secret1';

const authenicateJwt = (res,req,next) => {
    const authHeader = req.header.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err, user)=>{
            if(err){
                return res.sendStatus(403);
            }
            const userId = req.params.id; 
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    authenicateJwt,
    SECRET
}