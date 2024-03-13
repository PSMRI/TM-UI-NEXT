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

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { tap } from 'rxjs';
import { HttpServiceService } from '../../core/services/http-service.service';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
  current_language_set: any;
  constructor(
    private auth: AuthService,
    private router: Router,
    private http_service: HttpServiceService,
  ) {}

  canActivate(route: any, state: any) {
    this.http_service.currentLangugae$.subscribe(
      (response) => (this.current_language_set = response),
    );
    return this.auth.validateSessionKey().pipe(
      tap((res: any) => {
        if (!(res && res.statusCode == 200 && res.data)) {
          this.router.navigate(['/login']);
        }
      }),
    );
  }
}
