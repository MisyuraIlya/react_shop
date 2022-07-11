const jwt = require('jsonwebtoken')
module.exports = function(role) {
    return function (req, res, next) {
        if(req.method === "OPTIONS"){
            next()
        }
    
        try{
            const token = req.headers.authorization.split(' ')[1]// Beraer
            if(!token){
                return res.status(401).json({message: "didnt authorized"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role){
                return res.status(403).json({message: "dont have permission"})
            }
            req.user = decoded
            next()
        } catch(e){
            res.status(401).json({message:"didnt authorized"})
        }
    }
}