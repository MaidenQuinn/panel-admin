import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl = 'http://localhost:9000/api/article';

  constructor(private http: HttpClient) { }

  getArticle(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/${id}`).pipe(
      map(a => this.castDatePublication(a))
    );
  }

  getArticlesList(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.baseUrl}`);
  }

  createArticle(actu: Object): Observable<Object> {
    return this.http.post<Article>(`${this.baseUrl}`, actu);
  }

  updateArticle(id: number, value: Article): Observable<Article> {
    return this.http.put<Article>(`${this.baseUrl}/${id}`, value);
  }

  deleteArticleById(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  createFileActu(titre: String, file: File): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/creerfileactu/${titre}`, formData, {
      responseType: 'text'
    });

    return this.http.request(req);
  }

  /**
   * Convertit l'attribut datePublication d'un article en Date
   * @param article Un article avec une date au format String
   */
  private castDatePublication(article: Article) {
    article.datePublication = new Date(article.datePublication);
    console.log(article.datePublication);
    return article;
  }
}
