/*
 * AMRIT � Accessible Medical Records via Integrated Technology
 * Integrated EHR (Electronic Health Records) Solution
 *
 * Copyright (C) "Piramal Swasthya Management and Research Institute"
 *
 * This file is part of AMRIT.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see https://www.gnu.org/licenses/.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../core/material.module';

import { ExaminationComponent } from './examination.component';

describe('ExaminationComponent', () => {
  let component: ExaminationComponent;
  let fixture: ComponentFixture<ExaminationComponent>;
  let debugElement;
  let fb;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MaterialModule],
      declarations: [ExaminationComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create ExaminationComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize ExaminationComponent', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('should excute on changes', () => {
    component.ngOnChanges();
    expect(component).toBeTruthy();
  });

  it('Should show general examination while selecting visitCategory ANC', () => {
    component.ngOnInit();
    component.visitCategory = 'ANC';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(false);
    expect(component.showGeneralOPD).toEqual(true);
  });

  it('Should show general examination while selecting visitCategory ANC', () => {
    component.ngOnInit();
    component.visitCategory = 'General OPD';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(false);
    expect(component.showGeneralOPD).toEqual(true);
  });

  it('Should show cancer examination', () => {
    component.ngOnInit();
    component.visitCategory = 'Cancer Screening';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(true);
    expect(component.showGeneralOPD).toEqual(false);
  });

  it('Should show cancer examination', () => {
    component.ngOnInit();
    component.visitCategory = 'Cancer Screening';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(true);
    expect(component.showGeneralOPD).toEqual(false);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('cancer-examination'));
    expect(de.nativeElement).toBeTruthy();
  });

  it('Should show General examination', () => {
    component.ngOnInit();
    component.visitCategory = 'General OPD';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(false);
    expect(component.showGeneralOPD).toEqual(true);
    fixture.detectChanges();
    const de = fixture.debugElement.query(
      By.css('nurse-general-opd-examination'),
    );
    expect(de.nativeElement).toBeTruthy();
  });

  it('Should show General examination', () => {
    component.ngOnInit();
    component.visitCategory = 'ANC';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(false);
    expect(component.showGeneralOPD).toEqual(true);
    fixture.detectChanges();
    const de = fixture.debugElement.query(
      By.css('nurse-general-opd-examination'),
    );
    expect(de.nativeElement).toBeTruthy();
  });

  it('Should not show general examination', () => {
    component.ngOnInit();
    component.visitCategory = 'Cancer Screening';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(true);
    expect(component.showGeneralOPD).toEqual(false);
    fixture.detectChanges();
    const de = fixture.debugElement.query(
      By.css('nurse-general-opd-examination'),
    );
    expect(de).not.toBeTruthy();
  });

  it('Should not show cancer examination', () => {
    component.ngOnInit();
    component.visitCategory = 'General OPD';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(false);
    expect(component.showGeneralOPD).toEqual(true);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('cancer-examination'));
    expect(de).not.toBeTruthy();
  });

  it('Should not show cancer examination', () => {
    component.ngOnInit();
    component.visitCategory = 'ANC';
    component.ngOnChanges();
    expect(component.showCancer).toEqual(false);
    expect(component.showGeneralOPD).toEqual(true);
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('cancer-examination'));
    expect(de).not.toBeTruthy();
  });
});
