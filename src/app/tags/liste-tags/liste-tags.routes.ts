import { ListeTagsComponent } from './liste-tags.component';
import { MODIFIER_TAG_ROUTES } from '../modifier-tag/modifier-tag.routes';
import { listeTagsRoutesNames } from './liste-tags.routes.names';

export const LISTE_TAGS_ROUTES = [
    { path: '', component: ListeTagsComponent },
    {
        path: listeTagsRoutesNames.MODIFIER_TAG,
        children: MODIFIER_TAG_ROUTES
    }
];
