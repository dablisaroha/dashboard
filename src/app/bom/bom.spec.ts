import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bom } from './bom';

describe('Bom', () => {
  let component: Bom;
  let fixture: ComponentFixture<Bom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
