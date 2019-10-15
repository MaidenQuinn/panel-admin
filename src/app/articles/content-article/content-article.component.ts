import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../shared/articles.services';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-content-article',
  templateUrl: './content-article.component.html',
  styleUrls: ['./content-article.component.css']
})
export class ContentArticleComponent implements OnInit {
  public articleContent: Article;
  public labels: String[];

  constructor(
    private articleService: ArticlesService,
    private route: ActivatedRoute) {
  }

  getArticleContent() {
    const id = this.route.snapshot.params['id'];
    this.articleService.getArticle(id)
      .subscribe(data => {
        this.articleContent = data;
        console.log(data);
      });
  }

  ngOnInit() {
    this.getArticleContent();
  }

}
