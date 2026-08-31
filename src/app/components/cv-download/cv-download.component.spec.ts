import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDownloadComponent } from './cv-download.component';

describe('CvDownloadComponent', () => {
  let component: CvDownloadComponent;
  let fixture: ComponentFixture<CvDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvDownloadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
