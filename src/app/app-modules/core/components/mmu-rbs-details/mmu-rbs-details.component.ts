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

import { Component, Inject, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mmu-rbs-details',
  templateUrl: './mmu-rbs-details.component.html',
  styleUrls: ['./mmu-rbs-details.component.css'],
})
export class MmuRbsDetailsComponent implements OnInit {
  current_language_set: any;

  constructor(
    public dialogRef: MatDialogRef<MmuRbsDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public input: any,
    public httpServiceService: HttpServiceService,
  ) {}

  ngOnInit() {
    console.log('input', this.input);
    this.httpServiceService.currentLangugae$.subscribe(
      (response) => (this.current_language_set = response),
    );
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
