import { Tag } from 'src/app/tags/shared/tag.model';

export interface Article {
    id: number;
    auteur: String;
    contenu: String;
    datePublication: Date;
    dateModification: Date;
    description: String;
    imgUrl: String;
    titre: String;
    note: number;
    tags: Tag[];
    commentaires: String[];
    // temps: String;
}
