import App from '@/app';
import IndexRoute from '@routes/index.route';
import AdminRoute from '@routes/admin.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new AdminRoute()]);

app.listen();
