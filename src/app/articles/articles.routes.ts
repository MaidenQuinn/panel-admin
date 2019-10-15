import { CREER_ARTICLE_ROUTES } from './formulaire-article/formulaire-article.routes';
import { MODIFIER_ARTICLE_ROUTES } from './formulaire-article/formulaire-article.routes';
import { LISTE_ARTICLES_ROUTES } from './liste-articles/liste-articles.routes';
import { CONTENT_ARTICLE_ROUTES } from './content-article/content-article.routes';
import { ArticlesComponent } from './articles.component';
import { articlesRoutesNames } from './articles.routes.names';

export const ARTICLES_ROUTES = [
  { path: '', component: ArticlesComponent },
  {
    path: articlesRoutesNames.CREER_ARTICLE,
    children: CREER_ARTICLE_ROUTES
  },
  {
    path: articlesRoutesNames.LISTE_ARTICLES,
    children: LISTE_ARTICLES_ROUTES
  },
  {
    path: articlesRoutesNames.CONTENT_ARTICLE,
    children: CONTENT_ARTICLE_ROUTES
  },
  {
    path: articlesRoutesNames.MODIFIER_ARTICLE,
    children: MODIFIER_ARTICLE_ROUTES
  }
];
