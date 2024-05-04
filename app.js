const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { verificarToken } = require('./authMiddleware');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.get('/list-pay/:users', (req, res) => {
    const users = req.params.users.split(',').map(id => parseInt(id));

    const listAccount = `
    SELECT accounts_to_pay.user_id, accounts_to_pay.id, accounts_to_pay.description, accounts_to_pay.supplier, accounts_to_pay.value, accounts_to_pay.due_date, accounts_to_pay.payment_date
    FROM accounts_to_pay
    WHERE accounts_to_pay.user_id IN (?);
    `;

    db.query(listAccount, [users], (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Error getting accounts payable.' });
            return;
        }
        res.json(results);
    });
});


app.post('/add-pay', (req, res) => {
    const { description, supplier, value, due_date, payment_date, user_id } = req.body;

    const query = 'INSERT INTO accounts_to_pay (description, supplier, value, due_date, payment_date, user_id) VALUES (?, ?, ?, ?, ?, ? )';
    const values = [description, supplier, value, due_date, payment_date, user_id];

    db.query(query, values, (err, results) => {
        if (err) {
            console.error('Error entering payable account:', err);
            res.status(500).json({ message: 'Error when entering payable account' });
            return;
        }

        res.json({ message: 'Payable account added successfully', id: results.insertId });
    });
});


app.get('/pay/:id', (req, res) => {
    const id = req.params.id;
    const listAccount = `SELECT * FROM accounts_to_pay WHERE id = ? `;
    db.query(listAccount, [id], (err, result) => {
        if (err) {
            console.error('Error listing account:', err);
            res.status(500).json({ error: 'Error listing account' });
        } else {
            res.json(result[0]);

        }
    });
});



app.put('/pay/:id', (req, res) => {
    const accountId = req.params.id;
    const { description, supplier, value, due_date, payment_date, user_id } = req.body;
    db.query(
        'UPDATE accounts_to_pay SET description = ?, supplier = ?, value = ?, due_date = ?, payment_date = ?, user_id = ? WHERE id = ?',
        [description, supplier, value, due_date, payment_date, user_id, accountId],
        (err, result) => {
            if (err) {
                console.error('Error updating account:', err);
                res.status(500).json({ error: 'Error updating account' });
            } else {
                res.json({ message: 'Account updated successfully!' });

            }
        }
    );
});

app.delete('/pay/:id', (req, res) => {
    const idAccount = req.params.id;
    db.query('DELETE FROM accounts_to_pay WHERE id = ?', [idAccount], (err, result) => {
        if (err) {
            console.error('Error deleting account:', err);
            res.status(500).json({ error: 'Error deleting account' });
        } else {
            res.json({ message: 'Account deleted successfully' });
        }
    });
});


const users = [
    { id: 33, email: 'carlos@hotmail.com', password: '67y45' },
    { id: 34, email: 'noronhamarivane4@gmail.com', password: 'ws8945' },
    { id: 35, email: 'guto@gmail.com', password: 'sha256' },
    { id: 36, email: 'maria@gmail.com', password: '2567w' },
];

const accountsDeleteByUser = {
    33: [
        { id: 169, description: 'Electricity bill', supplier: 'Celesc', value: 150, due_date: '07/20/2023', payment_date: '06/20/2023', user_id: '33' },

    ],
    34: [
        { id: 172, description: 'Python Course', supplier: 'Matheus Batisti', value: 200, due_date: '07/20/2023', payment_date: '06/23/2023', user_id: '34' },

    ],
};

app.post('/login', async (req, res) => {
    console.log(req.body);

    const { email, password } = req.body;

    const user = users.find((user) => user.email === email && user.senha === password);

    if (!user) {
        return res.status(401).json({ message: 'Incorrect username or password!' });
    }

    const token = jwt.sign({ userId: user.id }, 'SDONCPLATRSVCUXMOBWPQBVA823P1N92WS', { expiresIn: '7d' });

    const maskedPassword = '*'.repeat(password.length);

    res.json({
        token,
        user: {
            id: user.id,
            email: user.email,
            password: maskedPassword
        },
        accountspay: accountsDeleteByUser[user.id] || [],
    });
});

app.get('/listar', verificarToken, async (req, res) => {

    return res.json({
        message: 'Protected feature achieved!',
        id_user_logged: req.userId
    });
});



app.listen(port, () => {
    console.log(`Server running on the port${port}`);
});







