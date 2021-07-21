const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Init Middleware
// (express.json is built-in middleware function in Express
// which parses incoming request with JSON payloads
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
