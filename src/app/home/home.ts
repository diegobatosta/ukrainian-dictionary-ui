import { Component } from '@angular/core';

import { SearchBar } from '../features/search/components/search-bar';

@Component({
  selector: 'app-home',
  imports: [SearchBar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
