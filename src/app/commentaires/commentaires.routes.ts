import { LISTE_COMMENTAIRES_ROUTES } from './liste-commentaires/liste-commentaires.routes';
import { VALIDER_COMMENTAIRES_ROUTES } from './valider-commentaires/valider-commentaires.routes';
import { CommentairesComponent } from './commentaires.component';
import { commentairesRoutesNames } from './commentaires.routes.names';

export const COMMENTAIRES_ROUTES = [
  { path: '', component: CommentairesComponent },
  {
    path: commentairesRoutesNames.VALIDER_COMMENTAIRES,
    children: VALIDER_COMMENTAIRES_ROUTES
  },
  {
    path: commentairesRoutesNames.LISTE_COMMENTAIRES,
    children: LISTE_COMMENTAIRES_ROUTES
  },

];
