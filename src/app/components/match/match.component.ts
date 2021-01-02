import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  public matches = [];
  public allMatches = [];
  public homeTeam: string;
  public opponentTeam: string;
  public homeScore: number;
  public opponentScore: number;
  public day: number;
  public month: number;
  public year: number;

  constructor(private _matchService: MatchService) { }

  ngOnInit(): void {
    this._matchService.getAllMatches()
        .subscribe(data => this.matches = data); // setting matches data to matches array

  }

  getMatches(){
   return this.allMatches = this.matches.sort((a,b) => a.date.days > b.date.days ? 1 : -1); // sort all matches by date ASC

  }

  getMatchesByDate(val){
    let date: Date = new Date(val);
    let days = date.getDate() + (date.getMonth()+1)*30 + date.getFullYear()*365;
    this.allMatches = this.matches.filter(match => match.date.days == days); // filter date matches by given date
  }

}
