import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskkComponent } from './new-taskk.component';

describe('NewTaskkComponent', () => {
  let component: NewTaskkComponent;
  let fixture: ComponentFixture<NewTaskkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTaskkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTaskkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
