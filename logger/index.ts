import winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: './loggerFiles/error.log', level: 'error' }),
    new winston.transports.File({ filename: './loggerFiles/info.log', level: 'info' }),
  ],
});


export default logger;
