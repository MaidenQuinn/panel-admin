import { FormulaireArticleComponent } from './formulaire-article.component';

export const MODIFIER_ARTICLE_ROUTES = [
  { path: ':id', component: FormulaireArticleComponent },
];

export const CREER_ARTICLE_ROUTES = [
  { path: '', component: FormulaireArticleComponent },
];
