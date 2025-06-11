import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {insertUser, insertTodo, getUser} from '../util/dbQueries.js'

const router = express.Router();

router.post('/register', (req, res) => {
    const {username, password} = req.body;
    const hashPassword = bcrypt.hashSync(password, 8)
    
    try {
        const result = insertUser.run(username, hashPassword);
        const defaultTodo = `Hello :) create your first todo!`;
        insertTodo.run(result.lastInsertRowid, defaultTodo);

        const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET || "secret", {expiresIn: '24h'})
        res.json({token})

    } catch (error) {
        req.status(503).json({message: error.message});
    }
})

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    try {
        const user = getUser.get(username);
        if(!user) return res.status(404).send("User not found!");

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if(!passwordIsValid) {
            return res.status(401).send({message: "Invalid credentials"})
        }
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET || "secret", {expiresIn: '24h'})
        res.json({token})
    } catch (error) {
        console.log(error.message)
        req.sendStatus(503);
    }
})

export default router;