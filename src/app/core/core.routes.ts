import { CONNEXION_ROUTES } from './connexion/connexion.routes';
import { coreRoutesNames } from './core.routes.names';

export const CORE_ROUTES = [
//   { path: '', component: ArticlesComponent },
  {
    path: coreRoutesNames.CONNEXION,
    children: CONNEXION_ROUTES
  }
];
