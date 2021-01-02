import { Component, OnInit } from '@angular/core';
import { SchoolClub } from 'src/app/models/sclclub';
import { UniClub } from 'src/app/models/uniclub';
import { MatchService } from 'src/app/services/match.service';
import { ClubService } from '../../services/club.service';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-play-match',
  templateUrl: './play-match.component.html',
  styleUrls: ['./play-match.component.css']
})
export class PlayMatchComponent implements OnInit {

  public schoolClubs = [];
  public uniClubs = [];
  public homeTeamSelect: number;
  public opponentTeamSelect: number;
  public homeTeam;
  public opponentTeam;
  public homeTeamScore: number;
  public opponentTeamScore: number;
  public date: Date;
  public matches = [];
  
  
  private http: HttpClient;
  constructor(private _clubService: ClubService, private _matchService: MatchService ) {
    
   }

  ngOnInit(): void {
    this._clubService.getSchoolClubs()
          .subscribe(data => this.schoolClubs = data);  // setting the clubs data to schoolClubs array;

    this._clubService.getUniClubs()
          .subscribe(data => this.uniClubs = data);  // setting the clubs data to uniClubs array
          
    this._matchService.getAllMatches()
          .subscribe(data => this.matches = data);      // setting the matches data to matches array
  }


  //creating random match between 2 random teams;

  schoolMatch(){
    // get the random numbers for selection both teams
    this.homeTeamSelect = Math.abs(Math.floor(Math.random() * this.schoolClubs.length - 1));
    this.opponentTeamSelect = Math.abs(Math.floor(Math.random() * this.schoolClubs.length - 1));


    // verifying both teams are not same 
    if(this.homeTeamSelect == this.opponentTeamSelect){ // checks if both same
      if(this.opponentTeamSelect == this.schoolClubs.length - 1){ // if same checks whether if it's last object
        this.opponentTeamSelect -= 1;  // if last substract one from select
      }else{
        this.opponentTeamSelect += 1;  // if not add one to select
      }
    }

    this.homeTeam = this.schoolClubs[this.homeTeamSelect]; // setting home team 
    this.opponentTeam = this.schoolClubs[this.opponentTeamSelect]; // setting opponent team

    /* Randomly generating the goals */
    this.homeTeamScore = Math.floor(Math.random() * 10);
    this.opponentTeamScore = Math.floor(Math.random() * 10);

    // implementing the date object 
    this.date = new Date();
    let day = this.date.getDate();
    let month = this.date.getMonth() + 1;
    let year = this.date.getFullYear();
    let days = day + (month * 30) + (year * 365); // days for select the match by given date

    /* Implement the the Match */
    const match = {
      matchId: "2020FB" +(this.matches.length + 1),
      homeTeam: this.homeTeam.clubName,
      opponentTeam: this.opponentTeam.clubName,
      homeScore: this.homeTeamScore,
      opponentScore: this.opponentTeamScore,
      date: {
        day: this.date.getDate(),
        month: this.date.getMonth()+1,
        year: this.date.getFullYear(),
        days: days
      }

    }

    console.log(match);

    this._matchService.addPlayedMatch(match).subscribe(
      match =>{
        this.matches.push(match); // send match to the backend
      }
    );



  
  }

  uniMatch(){
    this.homeTeamSelect = Math.abs(Math.floor(Math.random() * this.uniClubs.length - 1));
    this.opponentTeamSelect = Math.abs(Math.floor(Math.random() * this.uniClubs.length - 1));

    if(this.homeTeamSelect == this.opponentTeamSelect){
      if(this.opponentTeamSelect == this.uniClubs.length - 1){
        this.opponentTeamSelect -= 1;
      }else{
        this.opponentTeamSelect += 1;
      }
    }

    this.homeTeam = this.uniClubs[this.homeTeamSelect];
    this.opponentTeam = this.uniClubs[this.opponentTeamSelect];

    this.homeTeamScore = Math.floor(Math.random() * 10);
    this.opponentTeamScore = Math.floor(Math.random() * 10);

    this.date = new Date();
    let day = this.date.getDate();
    let month = this.date.getMonth() + 1;
    let year = this.date.getFullYear();
    let days = day + (month * 30) + (year * 365);

    /* implement the match */
    const match = {
      matchId: "2020FB"+(this.matches.length + 1),
      homeTeam: this.homeTeam.clubName,
      opponentTeam: this.opponentTeam.clubName,
      homeScore: this.homeTeamScore,
      opponentScore: this.opponentTeamScore,
      date: {
        day: this.date.getDate(),
        month: this.date.getMonth()+1,
        year: this.date.getFullYear(),
        days: days
      }
    }

    console.log(match);

    this._matchService.addPlayedMatch(match).subscribe(
      match =>{
        this.matches.push(match);
      }
    );
   
  }

  

}
