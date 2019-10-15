import { ARTICLES_ROUTES } from './articles/articles.routes';
import { CLIENTS_ROUTES } from './clients/clients.routes';
import { COMMENTAIRES_ROUTES } from './commentaires/commentaires.routes';
import { TAGS_ROUTES } from './tags/tags.routes';
import { CORE_ROUTES } from './core/core.routes';
import { appRoutesNames } from './app.routes.names';
import { AuthGuard } from './core/auth/auth.guard';

export const APP_ROUTES = [
  { path: appRoutesNames.ARTICLES, children: ARTICLES_ROUTES, canActivate: [AuthGuard] },
  { path: appRoutesNames.CLIENTS, children: CLIENTS_ROUTES, canActivate: [AuthGuard] },
  { path: appRoutesNames.COMMENTAIRES, children: COMMENTAIRES_ROUTES, canActivate: [AuthGuard] },
  { path: appRoutesNames.TAGS, children: TAGS_ROUTES, canActivate: [AuthGuard] },
  { path: appRoutesNames.CORE, children: CORE_ROUTES }

];
