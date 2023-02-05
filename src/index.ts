import config from './config/index.js';
import { app } from './loaders/index.js';
import { Application } from 'express';
const startServer = async (app: Application) => {
  //const loadersModule = await import('./loaders/express.loader');
  // const app = await loadersModule.expressLoader();
  app
    .listen(config.port, () => {
      console.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
};

startServer(app);
