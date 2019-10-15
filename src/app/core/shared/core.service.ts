import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CoreService {

    private baseUrl = 'http://localhost:9000/api/mentions';

    constructor(private http: HttpClient) { }

    getMentionLegale(id: number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    updateMentionLegale(id: number, value: any): Observable<Object> {
        return this.http.post(`${this.baseUrl}/${id}`, value);
    }
}
