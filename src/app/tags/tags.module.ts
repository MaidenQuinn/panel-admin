import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListeTagsComponent } from './liste-tags/liste-tags.component';
import { CreerTagComponent } from './creer-tag/creer-tag.component';
import { ModifierTagComponent } from './modifier-tag/modifier-tag.component';

@NgModule({
    declarations: [
        ListeTagsComponent,
        CreerTagComponent,
        ModifierTagComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        CreerTagComponent
    ],
    providers: []
})
export class TagsModule { }
