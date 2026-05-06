import { Component, computed, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

import { of } from 'rxjs';

import { EntryService } from '../../../core/services/entry-service';
import { Entry } from '../../../shared/models/entry';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  private readonly router = inject(Router);
  private readonly service = inject(EntryService);

  query = signal('');
  submittedQuery = signal('');

  isLoading = computed(
    () =>
      this.query().trim().length === 0 ||
      (this.results.isLoading() && this.submittedQuery().trim().length > 0),
  );

  results = rxResource({
    params: () => this.submittedQuery(),
    stream: ({ params: q }) => {
      if (!q.trim()) return of([]);
      return this.service.search(q);
    },
  });

  onInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  onSearch(): void {
    this.submittedQuery.set(this.query());
  }

  onEntryClick(entry: Entry) {
    this.service.setSelectedEntry(entry);
    this.router.navigate(['/entries', entry.slug]);
  }
}
