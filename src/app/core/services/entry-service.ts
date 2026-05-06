import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { env } from '../../environments/environment';
import { Entry } from '../../shared/models/entry';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  selectedEntry = signal<Entry | null>(null);

  search(query: string): Observable<Entry[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<Entry[]>(`${env.baseUrl}/entries`, { params });
  }

  searchBySlug(slug: string): Observable<Entry> {
    return this.http.get<Entry>(`${env.baseUrl}/entries/${slug}`);
  }

  setSelectedEntry(entry: Entry) {
    this.selectedEntry.set(entry);
  }
}
