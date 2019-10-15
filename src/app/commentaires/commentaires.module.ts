import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ListeCommentairesComponent } from './liste-commentaires/liste-commentaires.component';
import { ValiderCommentairesComponent } from './valider-commentaires/valider-commentaires.component';
import { CommentairesComponent } from './commentaires.component';

@NgModule({
    declarations: [
        ListeCommentairesComponent,
        ValiderCommentairesComponent,
        CommentairesComponent
    ],
    imports: [
        SharedModule,
    ],
    exports: [
    ],
    providers: []
})
export class CommentairesModule { }
