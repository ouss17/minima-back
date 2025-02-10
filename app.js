var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Additional imports
var cors = require('cors');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var helmet = require('helmet');
var rateLimit = require('express-rate-limit');
var { connectDB } = require('./db');
var { authRouter } = require('./routes/authRoutes');

dotenv.config();

var app = express();

// Connect to MongoDB
connectDB();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure CORS
var corsOptions = {
  origin: "*",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());

// Rate limiting
var limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

app.use('/api', authRouter);

module.exports = app;
