import { CREER_CLIENT_ROUTES } from './creer-client/creer-client.routes';
import { LISTE_CLIENTS_ROUTES } from './liste-clients/liste-clients.routes';
import { ClientsComponent } from './clients.component';
import { clientsRoutesNames } from './clients.routes.names';

export const CLIENTS_ROUTES = [
  { path: '', component: ClientsComponent },
  {
    path: clientsRoutesNames.CREER_CLIENT,
    children: CREER_CLIENT_ROUTES
  },
  {
    path: clientsRoutesNames.LISTE_CLIENTS,
    children: LISTE_CLIENTS_ROUTES
  },

];
