import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftAboutUsPageComponent } from './gift-about-us-page.component';

describe('GiftAboutUsPageComponent', () => {
  let component: GiftAboutUsPageComponent;
  let fixture: ComponentFixture<GiftAboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftAboutUsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftAboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
