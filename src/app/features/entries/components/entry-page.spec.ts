import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterModule } from '@angular/router';

import { EntryPage } from './entry-page';

describe('EntryPage', () => {
  let component: EntryPage;
  let fixture: ComponentFixture<EntryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryPage);
    component = fixture.componentInstance;
    component.entry.set({
      slug: 'pryvit',
      ukrainian: 'привіт',
      russian: 'привет',
      english: 'hello',
    });

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
