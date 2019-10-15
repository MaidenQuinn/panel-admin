import { LISTE_TAGS_ROUTES } from './liste-tags/liste-tags.routes';
import { tagsRoutesNames } from './tags.routes.names';

export const TAGS_ROUTES = [
    {
        path: tagsRoutesNames.LISTE_TAGS,
        children: LISTE_TAGS_ROUTES
    }
];
