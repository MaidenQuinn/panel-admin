import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../shared/article.model';
import { articlesRoutesNames } from '../../../articles/articles.routes.names';
import { ArticlesService } from '../../shared/articles.services';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-item-article',
  templateUrl: './item-article.component.html',
  styleUrls: ['./item-article.component.css']
})
export class ItemArticleComponent implements OnInit {

  @Input() articleItem: Article;
  @Output() delete = new EventEmitter();

  contentArticleLink = '/articles/' + articlesRoutesNames.CONTENT_ARTICLE;
  modifierArticleLink = '/articles/' + articlesRoutesNames.MODIFIER_ARTICLE;

  constructor(
    private articleService: ArticlesService,
    private alertService: AlertService
  ) { }

  deleteArticle(articleItem) {
    if (confirm('Êtes-vous sûr de vouloir supprimer l\'article ? Cette action ne peut être annulée.')) {
      this.articleService.deleteArticleById(articleItem)
        .subscribe(
          data => {
            setTimeout(() => {
              this.alertService.success('L\'article à été supprimé avec succès !', true);
            });
            this.delete.emit(null);
          },
          error => console.log(error));
      console.log(articleItem);
    }
  }

  ngOnInit() {
  }

}
