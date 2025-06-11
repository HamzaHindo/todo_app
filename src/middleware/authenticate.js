import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
    const token = req.header("Authorization");
    if(!token)
    return res.status(401).json({message: "No token provided"});

    jwt.verify(token, process.env.JWT_SECRET || "secret", (error, decoded) => {
        if(error) {
            return res.status(401).json({message: "Invalid Token"});
        }
        req.userID = decoded.id;
        next();
    })

    
}

export default authenticate;