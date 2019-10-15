import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material';
import { Article } from '../shared/article.model';
import { ArticlesService } from '../shared/articles.services';
import { TagService } from 'src/app/tags/shared/tags.service';
import { Tag } from 'src/app/tags/shared/tag.model';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent implements OnInit {
  public articleItems: Article[];
  public tagItems: Tag[];
  public selectedTags: Tag[] = [];
  public pageSize = 12;
  public currentPage = 0;
  public totalSize = 0;
  public pageSizeOptions: number[] = [6, 12, 24];
  public pageEvent: PageEvent;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  activePageDataChunk: Article[] = [];

  constructor(
    private articlesService: ArticlesService,
    private tagService: TagService) {
  }

  ngOnInit() {
    this.getArticleList();
    this.getTagList();
  }

  public selectTag(tag: Tag) {
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
    } else if (this.selectedTags.includes(tag)) {
      const index = this.selectedTags.indexOf(tag);
      if (index > -1) {
        this.selectedTags.splice(index, 1);
      }
    }
    this.filterArticle();
  }

  public handlePage(e: any) {
    const firstCut = e.pageIndex * e.pageSize;
    const secondCut = firstCut + e.pageSize;
    this.activePageDataChunk = this.articleItems.slice(firstCut, secondCut);
    return e;
  }

  public setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  public getArticleList() {
    this.articlesService.getArticlesList()
      .subscribe(data => {
        this.articleItems = data;
        this.articleItems = this.articleItems.reverse();
        this.articleItems.sort((a, b) => new Date(b.datePublication).getTime() - new Date(a.datePublication).getTime());
        this.totalSize = this.articleItems.length;
        this.activePageDataChunk = this.articleItems.slice(0, this.pageSize);
      });
  }

  public getTagList() {
    this.tagService.getTagsList()
      .subscribe(data => {
        this.tagItems = data;
      });
  }

  public toggleBackgroundColor(tag: Tag) {
    if (!this.selectedTags.includes(tag)) {
      return tag.color;
    } else { return 'white'; }
  }

  public toggleColor(tag: Tag) {
    if (!this.selectedTags.includes(tag)) {
      return 'white';
    } else { return tag.color; }
  }

  public setBorderColor(tag: Tag) {
      return '1px solid ' + tag.color;
  }

  private filterArticle() {
    const filteredArticles = this.articleItems.filter(article => {
      const tagIds = article.tags.map(t => t.id);
      if (this.selectedTags.length === 0) {
        return true;
      }
      for (const selectedTag of this.selectedTags) {
        if (!tagIds.includes(selectedTag.id)) {
          return false;
        }
      }
      return true;
    });

    this.activePageDataChunk = filteredArticles.slice(0, this.pageSize);
    this.currentPage = 0;
    this.paginator.pageIndex = 0;
  }

}
