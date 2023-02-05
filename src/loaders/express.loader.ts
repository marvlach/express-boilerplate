import express, { Request, Response, NextFunction, ErrorRequestHandler, Router } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const expressLoader = async (): Promise<express.Application> => {
  console.info('6) Initializing Express App');

  const app = express();

  app.use(helmet());

  // app.enable('trust proxy');

  app.use(cors());

  // Transforms the raw string of req.body into json
  app.use(express.json());

  const routesModule = await import('../routes/index.js');

  app.use('/api/v1', routesModule.default);

  app.get('/api/v1/status', (req, res) => {
    res.status(200).json({ msg: 'All good' }).end();
  });

  app.head('/api/v1/status', (req, res) => {
    res.status(200).end();
  });

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err: Error = new Error('Not Found');
    // err['status'] = 404;
    next(err);
  });

  /// error handlers
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });

  console.info('7) Initialized Express App');

  return app;
};
export default expressLoader;
