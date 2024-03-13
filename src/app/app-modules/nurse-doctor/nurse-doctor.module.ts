/*
 * AMRIT – Accessible Medical Records via Integrated Technology
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { NurseDoctorRoutingModule } from './nurse-doctor-routing.module';
import { DoctorService } from './shared/services/doctor.service';
import { MasterdataService, NurseService } from './shared/services';
import { WorkareaCanActivate } from './workarea/workarea-can-activate.service';
import { HttpServiceService } from '../core/services/http-service.service';
import { TestInVitalsService } from './shared/services/test-in-vitals.service';
import { IdrsscoreService } from './shared/services/idrsscore.service';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from '../core/material.module';
import { NurseWorklistComponent } from './nurse-worklist/nurse-worklist.component';
import { MatTableModule } from '@angular/material/table';
import { NurseWorklistTabsComponent } from './nurse-worklist-tabs/nurse-worklist-tabs.component';
import { NurseRefferedWorklistComponent } from './nurse-worklist-tabs/nurse-reffered-worklist/nurse-reffered-worklist.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DoctorWorklistComponent } from './doctor-worklist/doctor-worklist.component';
import { LabService } from '../lab/shared/services';
import { RadiologistWorklistComponent } from './radiologist-worklist/radiologist-worklist.component';
import { OncologistWorklistComponent } from './oncologist-worklist/oncologist-worklist.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    NurseDoctorRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatChipsModule,
    MatDatepickerModule,
    NgxPaginationModule,
  ],
  declarations: [
    NurseWorklistComponent,
    DoctorWorklistComponent,
    WorkareaComponent,
    RadiologistWorklistComponent,
    OncologistWorklistComponent,
    NurseWorklistTabsComponent,
    NurseRefferedWorklistComponent,
  ],

  providers: [
    NurseService,
    DoctorService,
    MasterdataService,
    WorkareaCanActivate,
    HttpServiceService,
    IdrsscoreService,
    TestInVitalsService,
    LabService,
  ],
})
export class NurseDoctorModule {}
