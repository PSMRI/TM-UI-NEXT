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

import {
  async,
  inject,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { MaterialModule } from '../../../../core/material.module';

import { GeneralUtils } from '../../../shared/utility';

import { ConfirmationService } from '../../../../core/services/confirmation.service';
import {
  DoctorService,
  NurseService,
  MasterdataService,
} from '../../../shared/services';

import { MasterdataServiceStub } from '../../../shared/mocks/masterdata-service-stub';
import { DoctorServiceStub } from '../../../shared/mocks/doctor-service-stub';
import { NurseServiceStub } from '../../../shared/mocks/nurse-service-stub';

import * as data from '../../../shared/mocks/mock-data';
import { Observable } from 'rxjs/Rx';

import { FamilyHistoryComponent } from './family-history.component';

describe('FamilyHistoryComponent', () => {
  let component: FamilyHistoryComponent;
  let fixture: ComponentFixture<FamilyHistoryComponent>;
  let debugElement: DebugElement;
  let fb: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, ReactiveFormsModule, MaterialModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FamilyHistoryComponent],
      providers: [
        ConfirmationService,
        { provide: MasterdataService, useClass: MasterdataServiceStub },
        { provide: DoctorService, useClass: DoctorServiceStub },
        { provide: NurseService, useClass: NurseServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyHistoryComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    fb = debugElement.injector.get(FormBuilder);
    component.familyHistoryForm = new GeneralUtils(
      fb,
    ).createFamilyHistoryForm();
    window.console.log = () => {};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
