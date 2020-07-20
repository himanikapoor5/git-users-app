import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitBaseComponent } from './git-base.component';

describe('GitBaseComponent', () => {
  let component: GitBaseComponent;
  let fixture: ComponentFixture<GitBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
