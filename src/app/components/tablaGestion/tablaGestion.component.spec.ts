import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGestionComponent } from './tablaGestion.component';

describe('TablaGestionComponent', () => {
  let component: TablaGestionComponent;
  let fixture: ComponentFixture<TablaGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaGestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
