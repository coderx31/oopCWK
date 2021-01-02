import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private _url: string =  "http://localhost:4200/api/matches";

  private _post_url: string = "http://localhost:4200/api/addMatch";

  constructor(private http: HttpClient) { }

  getAllMatches(): Observable<Match[]>{
    return this.http.get<Match[]>(this._url);
  }


  addPlayedMatch(match: Match): Observable<Match>{
    return this.http.post<Match>(this._post_url,match,httpOptions);
  }
}
