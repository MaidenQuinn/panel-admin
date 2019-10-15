import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:9000/api/client';

  constructor(private http: HttpClient) { }

  getClient(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getClientsList(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`);
  }
}
