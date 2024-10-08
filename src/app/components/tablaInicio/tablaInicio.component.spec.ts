import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInicioComponent } from './tablaInicio.component';

describe('TablaInicioComponent', () => {
  let component: TablaInicioComponent;
  let fixture: ComponentFixture<TablaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
