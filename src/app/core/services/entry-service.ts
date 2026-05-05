import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { env } from '../../environments/environment';
import { SearchResult } from '../../features/search/models/search-result';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  readonly http = inject(HttpClient);

  search(query: string): Observable<SearchResult[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<SearchResult[]>(`${env.baseUrl}/entries`, { params });
  }

  searchById(id: number): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${env.baseUrl}/entries/${id}`);
  }
}
