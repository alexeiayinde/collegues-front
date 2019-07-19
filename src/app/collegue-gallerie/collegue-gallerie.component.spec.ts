import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueGallerieComponent } from './collegue-gallerie.component';

describe('CollegueGallerieComponent', () => {
  let component: CollegueGallerieComponent;
  let fixture: ComponentFixture<CollegueGallerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueGallerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
