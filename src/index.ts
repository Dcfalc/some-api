/* eslint-disable prettier/prettier */
import express, { NextFunction, Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import './configs/env';
import createConnection from './configs/Database';

const app = express();
const PORT = process.env.PORT || 5000;
const { BAD_REQUEST } = StatusCodes;

createConnection();

app.get('/', (req, res) => res.send('Express + TypeScript + ESLint'));

app.listen(PORT, () => {
  console.log(
    `[server]: Server is running on ${process.env.NODE_ENV} at http://localhost:${PORT}`,
  );
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('ERRO MESSAGE', err.message);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});
