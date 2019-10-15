import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ArticlesService } from '../shared/articles.services';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../shared/services/alert.service';
import { Location } from '@angular/common';
import { TagService } from 'src/app/tags/shared/tags.service';
import { Tag } from 'src/app/tags/shared/tag.model';
import { Article } from '../shared/article.model';

@Component({
  selector: 'app-formulaire-article',
  templateUrl: './formulaire-article.component.html',
  styleUrls: ['./formulaire-article.component.css']
})
export class FormulaireArticleComponent implements OnInit {
  public id: number;
  public showCreerTag: Boolean = false;
  public loading: Boolean = false;
  public tagItems: Tag[];
  public selectable: Boolean = true;
  public removable: Boolean = true;
  public formArticle: FormGroup = this.formBuilder.group({
    'id': this.id,
    'titre': ['', [Validators.required, Validators.maxLength(70)]],
    'dateModification': '',
    'datePublication': [new Date(), [Validators.required, Validators.maxLength(10)]],
    'imgUrl': ['', [Validators.required, Validators.maxLength(500)]],
    'description': ['', Validators.maxLength(256)],
    'contenu': ['', Validators.required],
    'auteur': ['', [Validators.required, Validators.maxLength(20)]],
    'note': '',
    'tags': this.formBuilder.array([]),
    'commentaires': null,
  });
  config: AngularEditorConfig = {
    editable: true,
    showToolbar: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    defaultFontName: 'Dosis',
    fonts: [
      {
        name: 'Arial',
        class: 'arial',
      },
      {
        name: 'Times New Roman',
        class: 'times-new-roman',
      },
      {
        name: 'Roboto',
        class: 'roboto',
      },
      {
        name: 'Dosis',
        class: 'dosis'
      },
      {
        name: 'Noto Sans',
        class: 'noto-sans'
      },
      {
        name: 'Source Sans Pro',
        class: 'source-sans-pro'
      },
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tagService: TagService,
    private articleService: ArticlesService,
    private alertService: AlertService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTagList();
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    if (this.id !== undefined) {
      this.articleService
        .getArticle(this.id)
        .subscribe(data => {
          this.formArticle.patchValue(data);
          data.tags.forEach(tag => this.formArticle.value.tags.push(tag));
        },
          error => console.log('Une erreur est survenue.'));
    }
  }

  getTagList() {
    this.tagService.getTagsList()
      .subscribe(data => {
        this.tagItems = data;
      });
  }

  addTag(tag: Tag): void {
    const idTag = this.formArticle.value.tags.map((t: { id: Tag; }) => t.id);
    if (!idTag.includes(tag.id)) {
      this.formArticle.value.tags.push(tag);
    }
  }

  removeTag(tag: Tag): void {
    const index = this.formArticle.value.tags.indexOf(tag);
    if (index >= 0) {
      this.formArticle.value.tags.splice(index, 1);
    }
  }

  toggleCreerTag() {
    this.showCreerTag = !this.showCreerTag;
  }

  onTagCreated() {
    this.getTagList();
    this.showCreerTag = false;
  }

  retourPage() {
    this.location.back();
  }

  private generateDescription() {
    const replaceBaliseRegex = new RegExp(/\<(.*?)\>/g);
    const replaceSpaceRegex = /&nbsp;/gi;
    const regexContent = this.formArticle.value.contenu.replace(replaceBaliseRegex, '');
    this.formArticle.value.description = regexContent.replace(replaceSpaceRegex, ' ').slice(0, 252) + '...';
  }

  private createArticle(post: Article) {
    this.articleService.createArticle(post)
      .subscribe(data => {
        setTimeout(() => {
          this.alertService.success('L\'article a été créé avec succès !', true);
        });
        this.router.navigate(['../articles/liste-articles']);
      }, error => {
        console.log(error);
        this.alertService.error('L\'article n\'a pas été créé.', true);
      });
  }

  private updateArticle() {
    this.formArticle.value.dateModification = new Date();
    this.articleService.updateArticle(this.formArticle.value.id, this.formArticle.value)
      .subscribe(data => {
        setTimeout(() => {
          this.alertService.success('L\'article a été modifié avec succès !', true);
        });
        this.router.navigate(['../articles/liste-articles']);
      },
        error => {
          console.log(error);
          this.alertService.error('L\'article n\'a pas été modifié.', true);
        });
  }

  onSubmit(post: Article) {
    this.loading = true;
    if (this.formArticle.invalid) {
      return;
    }
    if (this.formArticle.value.description === '') {
      this.generateDescription();
    }
    if (this.formArticle.value.id === null) {
      this.createArticle(post);
    } else {
      this.updateArticle();
    }
  }

}
