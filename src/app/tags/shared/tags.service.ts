import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from './tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private baseUrl = 'http://localhost:9000/api/tag';

  constructor(private http: HttpClient) { }

  getTag(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getTagsList(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.baseUrl}`);
  }

  updateTag(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${id}`, value);
  }

  createTag(tag: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, tag);
  }

  deleteTagById(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
