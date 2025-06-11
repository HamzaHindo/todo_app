import db from "../db.js";

export const insertUser = db.prepare(`INSERT INTO users (username, password) VALUES(?, ?)`);
export const getUser = db.prepare(`SELECT * FROM users WHERE username = ?`);

export const getTodos = db.prepare(`SELECT * FROM todos WHERE user_id = ?`);
export const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES(?, ?)`);
export const deleteTodo = db.prepare(`DELETE FROM todos WHERE id = ? AND user_id = ?`);




