import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueProduitComponent } from './vue-produit.component';

describe('VueProduitComponent', () => {
  let component: VueProduitComponent;
  let fixture: ComponentFixture<VueProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
