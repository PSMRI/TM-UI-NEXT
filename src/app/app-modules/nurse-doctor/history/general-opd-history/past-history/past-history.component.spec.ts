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
import { DoctorService, MasterdataService } from '../../../shared/services';
import { BeneficiaryDetailsService } from '../../../../core/services/beneficiary-details.service';

import { BeneficiaryDetailsServiceStub } from '../../../../core/mocks/beneficiary-details-service-stub';
import { MasterdataServiceStub } from '../../../shared/mocks/masterdata-service-stub';
import { DoctorServiceStub } from '../../../shared/mocks/doctor-service-stub';

import * as data from '../../../shared/mocks/mock-data';
import { Observable } from 'rxjs/Rx';

import { PastHistoryComponent } from './past-history.component';

describe('PastHistoryComponent', () => {
  let component: PastHistoryComponent;
  let fixture: ComponentFixture<PastHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PastHistoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
