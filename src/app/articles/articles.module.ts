import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ArticlesComponent } from './articles.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { ItemArticleComponent } from './liste-articles/item-article/item-article.component';
import { ContentArticleComponent } from './content-article/content-article.component';
import { FormulaireArticleComponent } from './formulaire-article/formulaire-article.component';
import { TagsModule } from '../tags/tags.module';


@NgModule({
    declarations: [
        ArticlesComponent,
        ListeArticlesComponent,
        ItemArticleComponent,
        ContentArticleComponent,
        FormulaireArticleComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TagsModule
    ],
    exports: [
    ],
    providers: []
})
export class ArticlesModule { }
