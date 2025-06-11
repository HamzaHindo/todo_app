import express from 'express';
import {getTodos, insertTodo, deleteTodo} from '../util/dbQueries.js'
import db from '../db.js';
const router = express.Router();

router.get('/', (req, res) => {
    const todos = getTodos.all(req.userID);
    res.send(todos);
})

router.post('/', (req, res) => {
    const {task} = req.body;
    const result = insertTodo.run(req.userID, task);
    return res.json({id: result.lastInsertRowid, task, completed: false});
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {body} = req;

    const keys = Object.keys(body);
    const values = Object.values(body);

    const set = keys.map((key) => `${key} = ? `).join(',');
    const updateTodo = db.prepare(`UPDATE todos SET ${set} WHERE id = ?`);

    updateTodo.run(...values, id);
    res.json({message: "Todo updated successfully"})
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    deleteTodo.run(id, req.userID);
    res.json({message: "Todo deleted successfully"})
})


export default router;