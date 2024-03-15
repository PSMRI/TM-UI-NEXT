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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { NurseDoctorRoutingModule } from './nurse-doctor-routing.module';

import { NurseWorklistComponent } from './nurse-worklist-wrapper/nurse-worklist/nurse-worklist.component';
import { DoctorWorklistComponent } from './doctor-worklist/doctor-worklist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {
  NurseService,
  DoctorService,
  MasterdataService,
} from './shared/services';
import { WorkareaComponent } from './workarea/workarea.component';

import { RadiologistWorklistComponent } from './radiologist-worklist/radiologist-worklist.component';
import { OncologistWorklistComponent } from './oncologist-worklist/oncologist-worklist.component';

import { WorkareaCanActivate } from './workarea/workarea-can-activate.service';
import { TcSpecialistWorklistComponent } from './tc-specialist-worklist/tc-specialist-worklist.component';
import { DoctorTmWorklistWrapperComponent } from './doctor-tm-worklist-wrapper/doctor-tm-worklist-wrapper.component';
import { TmFutureWorklistComponent } from './doctor-tm-future-worklist/tm-future-worklist.component';
import { TcSpecialistWorklistWrapperComponent } from './tc-specialist-worklist-wrapper/tc-specialist-worklist-wrapper.component';
import { TcSpecialistFutureWorklistComponent } from './tc-specialist-future-worklist/tc-specialist-future-worklist.component';
import { NurseWorklistWrapperComponent } from './nurse-worklist-wrapper/nurse-worklist-wrapper.component';
import { NurseTmWorklistComponent } from './nurse-worklist-wrapper/nurse-tm-worklist/nurse-tm-worklist.component';
import { NurseTmFutureWorklistComponent } from './nurse-worklist-wrapper/nurse-tm-future-worklist/nurse-tm-future-worklist.component';
import { LabService } from '../../app-modules/lab/shared/services';
import { IdrsscoreService } from './shared/services/idrsscore.service';
import { NurseMmuTmReferredWorklistComponent } from './nurse-worklist-wrapper/nurse-mmu-tm-referred-worklist/nurse-mmu-tm-referred-worklist.component';
import { RegistrarService } from '../registrar/shared/services/registrar.service';
import { TestInVitalsService } from './shared/services/test-in-vitals.service';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../core/material.module';

@NgModule({
  imports: [
    CommonModule,
    // ChartsModule,
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
    // PrintPageSelectComponent,
    // QuickConsultComponent,
    // CancerExaminationComponent,
    // GynecologicalExaminationComponent,
    // AbdominalExaminationComponent,
    // BreastExaminationComponent,
    // OralExaminationComponent,
    // SignsAndSymptomsComponent,
    // ObstetricExaminationComponent,
    // GenitoUrinarySystemComponent,
    // CentralNervousSystemComponent,
    // MusculoskeletalSystemComponent,
    // RespiratorySystemComponent,
    // GastroIntestinalSystemComponent,
    // CardioVascularSystemComponent,
    // SystemicExaminationComponent,
    // HeadToToeExaminationComponent,
    // GeneralExaminationComponent,
    // GeneralOpdExaminationComponent,
    // CancerPatientVitalsComponent,
    // GeneralPatientVitalsComponent,
    // MedicationHistoryComponent,
    // DevelopmentHistoryComponent,
    // FeedingHistoryComponent,
    // OtherVaccinesComponent,
    // ImmunizationHistoryComponent,
    // PastObstericHistoryComponent,
    // PerinatalHistoryComponent,
    // MenstrualHistoryComponent,
    // FamilyHistoryComponent,
    // ComorbidityConcurrentConditionsComponent,
    // GeneralPersonalHistoryComponent,
    // PastHistoryComponent,
    // GeneralOpdHistoryComponent,
    // CancerHistoryComponent,
    // ObstetricHistoryComponent,
    // FamilyDiseaseHistoryComponent,
    // PersonalHistoryComponent,
    DoctorWorklistComponent,
    // AncComponent,
    // AncDetailsComponent,
    // AncImmunizationComponent,
    // ObstetricFormulaComponent,
    // VisitDetailsComponent,
    // VisitCategoryComponent,
    // ChiefComplaintsComponent,
    // AdherenceComponent,
    // TravelHistoryComponent,
    // SymptomsComponent,
    // ContactHistoryComponent,
    // InvestigationsComponent,
    // UploadFilesComponent,
    // HistoryComponent,
    // ExaminationComponent,
    // VitalsComponent,
    // CaseRecordComponent,
    // AncComponent,
    // PncComponent,
    // NcdScreeningComponent,
    DashboardComponent,
    WorkareaComponent,
    // CancerCaseRecordComponent,
    // GeneralCaseRecordComponent,
    // CancerReferComponent,
    // GeneralReferComponent,
    // CancerCaseSheetComponent,
    // GeneralCaseSheetComponent,
    // ReferComponent,
    // PrintPageSelectComponent,
    // PreviousVisitDetailsComponent,
    // FindingsComponent,
    // DiagnosisComponent,
    // PrescriptionComponent,
    // DoctorInvestigationsComponent,
    // TestAndRadiologyComponent,
    RadiologistWorklistComponent,
    OncologistWorklistComponent,
    // GeneralOpdDiagnosisComponent,
    // AncDiagnosisComponent,
    // CaseSheetComponent,
    // NcdCareDiagnosisComponent,
    // PncDiagnosisComponent,
    // PreviousSignificiantFindingsComponent,
    // ViewTestReportComponent,
    // HistoryCaseSheetComponent,
    // ExaminationCaseSheetComponent,
    // AncCaseSheetComponent,
    // PncCaseSheetComponent,
    // DoctorDiagnosisCaseSheetComponent,
    // ImageToCanvasComponent,
    // CancerDoctorDiagnosisCaseSheetComponent,
    // CancerHistoryCaseSheetComponent,
    // CancerExaminationCaseSheetComponent,
    // BeneficiaryMctsCallHistoryComponent,
    // BeneficiaryPlatformHistoryComponent,
    TcSpecialistWorklistComponent,
    DoctorTmWorklistWrapperComponent,
    TmFutureWorklistComponent,
    // SchedulerComponent,
    TcSpecialistWorklistWrapperComponent,
    TcSpecialistFutureWorklistComponent,
    NurseWorklistWrapperComponent,
    NurseTmWorklistComponent,
    NurseTmFutureWorklistComponent,
    // CovidDiagnosisComponent,
    // IdrsComponent,
    // PhysicalActivityHistoryComponent,
    // FamilyHistoryNcdscreeningComponent,
    // NcdScreeningDiagnosisComponent,
    NurseMmuTmReferredWorklistComponent,
    // DiseaseconfirmationComponent,
    // CovidVaccinationStatusComponent,
  ],

  providers: [
    NurseService,
    DoctorService,
    MasterdataService,
    WorkareaCanActivate,
    LabService,
    IdrsscoreService,
    RegistrarService,
    TestInVitalsService,
  ],
})
export class NurseDoctorModule {}
