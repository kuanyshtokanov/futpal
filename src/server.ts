process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from './app';
import validateEnv from '@utils/validateEnv';

import IndexRoute from '@routes/index.route';
import AuthRoute from '@routes/auth.route';
import UsersRoute from '@routes/users.route';
import GamesRoute from '@routes/games.route';

validateEnv();

const app = new App(
  [
    new IndexRoute(),
    new AuthRoute(),
    new UsersRoute(),
    new GamesRoute(),
  ]
);

app.listen();