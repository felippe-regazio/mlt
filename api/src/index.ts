import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import { routes } from './routes';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());

// subscribe all the routes to the app
routes(app);
// -----------------------------------

app.listen(port, () => console.log(`⚡️ Server is running at http://localhost:${port}`));
