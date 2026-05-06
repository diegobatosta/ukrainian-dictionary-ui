import { Routes } from '@angular/router';

import { EntryPage } from './features/entries/components/entry-page';
import { SearchBar } from './features/search/components/search-bar';

export const routes: Routes = [
  { path: '', component: SearchBar },
  { path: 'entries/:slug', component: EntryPage },
];
