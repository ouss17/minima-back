import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { connectDB } from './db';
import { authRouter } from './routes/authRoutes';

dotenv.config();

const app = express();

// Connexion à MongoDB
connectDB();

const corsOptions = {
  origin: "*",
  credentials: true,
  exposedHeaders: ["set-cookie"]
};
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());

// Protection contre les requêtes abusives
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// Routes
app.use('/api', authRouter);

// Route de test
app.get('/', (_req, res) => {
  res.send('<h1>Welcome to the Minima App Backend!</h1>');
});

// Gestion des erreurs 404
app.use((_req, res) => {
  res.status(404).send('Not Found');
});

export default app;
