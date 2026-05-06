import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entry } from '../../../shared/models/entry';
import { EntryService } from '../../../core/services/entry-service';

@Component({
  selector: 'app-entry-page',
  imports: [],
  templateUrl: './entry-page.html',
  styleUrl: './entry-page.css',
})
export class EntryPage implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly service = inject(EntryService);

  entry = signal<Entry | null>(null);

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log(slug);
    const cached = this.service.selectedEntry();

    if (cached?.slug === slug) {
      this.entry.set(cached);
    } else {
      this.service.searchBySlug(slug!);
    }
  }
}
