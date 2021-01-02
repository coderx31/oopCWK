import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SchoolClub } from '../models/sclclub';
import { Observable } from 'rxjs';
import { UniClub } from '../models/uniclub';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private _url: string = 'http://localhost:4200/api/schoolClubs';

  private _uniurl = 'http://localhost:4200/api/uniClubs';

  constructor(private http: HttpClient) { }

  getSchoolClubs(): Observable<SchoolClub[]>{
    return this.http.get<SchoolClub[]>(this._url);
  }

  getUniClubs(): Observable<UniClub[]>{
    return this.http.get<UniClub[]>(this._uniurl);
  }
}
