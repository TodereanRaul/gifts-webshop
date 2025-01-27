import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftContactPageComponent } from './gift-contact-page.component';

describe('GiftContactPageComponent', () => {
  let component: GiftContactPageComponent;
  let fixture: ComponentFixture<GiftContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftContactPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
