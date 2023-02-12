
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1996',
    database: 'base1',
    port: '5432'
});
const getUsers = async (req, res) => {
   const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

const getUserById = async (req, res) => {
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [req.params.id]);
    res.json(response.rows);
}

const postUsers = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1,$2)', [name, email]);
    console.log(response); 
    res.json({
        message: 'User created succesfully',
        body: {
            user: {name, email}
        }
    });
};

const updateUser = async (req, res) => {
    //const response = await pool.query('UPDATE FROM users WHERE ID = $1'[req.params.id]);
    res.json({
        message: 'actualizado'
    });
}

const deleteUsers = async (req, res) => {
    const response = await pool.query('DELETE FROM users WHERE id = $1', [req.params.id]);
    console.log(response);
    res.json(`User ${req.params.id} deleted succesfully`);
}

module.exports={
    getUsers,
    postUsers,
    getUserById,
    deleteUsers,
    updateUser
}